import React, { Component } from "react";
import Patron from "../abis/Patron.json";
import PatronFactory from "../abis/PatronFactory.json";
import getWeb3 from "../utils/getWeb3";
import CreateAccount from "./CreateAccount";
import Navbar from "./Navbar";
import loadingImg from "./comet-spinner.gif";
import firebase from '../utils/firebase';
import "./App.css";

class App extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      web3: null, 
      account: null, 
      contract: null,
      patrons: [],
      loading: true,
      message: null
    };

    this.createAccount = this.createAccount.bind(this);
    this.donate = this.donate.bind(this);
    this.loadPatronsFromFirebase = this.loadPatronsFromFirebase.bind(this);
  }

  async loadPatronsFromFirebase() {
    const ref = firebase.database().ref('patronDeployments');
    
    ref.on('value', (snapshot) => {
      let values = snapshot.val();
      let patrons = [];
      for (let currValue in values) {
        patrons.push({
          id: currValue,
          name: values[currValue].name,
          email: values[currValue].email,
          contractId: values[currValue].contractId,
          contractAddress: values[currValue].contractAddress,
          ethAddress: values[currValue].ethAddress,
          balance: values[currValue].balance
        });
      }
      this.setState({ patrons, loading: false });
      console.log(this.state.patrons)
    });
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's current account
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = PatronFactory.networks[networkId];
      const instance = new web3.eth.Contract(
        PatronFactory.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, account, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
    await this.loadPatronsFromFirebase();
  };

  createAccount = async (name, email) => {
    try {
      const { account, contract } = this.state;

      contract.methods.deployPatron(account).send( { from: account } );
      contract.events.newPatronDeployed( {}, (error, event) => {
      const ref = firebase.database().ref('patronDeployments');
      const patron = {
        name: name,
        email: email,
        contractId: event.returnValues.id.toString(),
        contractAddress: event.returnValues.patron,
        ethAddress: event.returnValues.owner,
        balance: 0
      };

      ref.push(patron);
      this.setState({ loading: false });
      }).on('error', console.error);

    } catch (error) {
      alert(
        `Umm... not your fault. Let's try again!`,
      );
      //page reload
    }
  };

  donate = async (contractId, to, value) => {
    try {
      const { web3, account } = this.state;
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Patron.networks[networkId];
      const instance = new web3.eth.Contract(
        Patron.abi,
        deployedNetwork && to,
      );
      
      value = web3.utils.toWei(value, 'ether');
      instance.methods.donate().send({ from: account, value: value });
      instance.events.donationSuccessful( {}, (error, event) => {
        console.log("Hello helo hello", event, this.state.loading);
        firebase.database().ref('patronDeployments/'+this.state.patrons[contractId].id).update({
          balance: this.state.patrons[contractId].balance+1
        });
      }).on('error', console.error);

    } catch (error) {
      alert(
        `Umm... not your fault. Let's try again!`,
      );
      //page reload
    }
  }

  createCards = () => {
    let cards = [];
    this.state.patrons.map( (patron, index) => {
      cards.push(<div className="w-full md:w-1/3 p-4" key={index}>
      <div className="bg-blue-900 shadow rounded-lg p-8 text-white">
        <p className="mb-2 text-2xl uppercase tracking-wide font-bold font-serif">
          {patron.name}
        </p>

        <p className="mb-4 text-lg">
          {patron.name} is creating awesome content for Ethereum developers.
        </p>
        <p className="mb-4 text-lg">
          <a href={`mailto:${patron.email}`}>
            {patron.email}
          </a>
        </p>

        <button
          onClick={(event) => this.donate(index, patron.contractAddress, "1")}
          className="uppercase tracking-wider font-bold"
        >
          Donate (1ETH)
          <i className="ml-3 fas fa-arrow-right" />
        </button>
      </div>
    </div>)
    })

    return cards;
  }
  render() {
    if (!this.state.web3) {
      return (
        <div
          className="bg-gray-200 mx-auto"
        >
          <div className="mx-auto">
            <img src={ loadingImg } alt="Loading Web3, accounts, and contract..." />
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gray-200">
        <Navbar />

        <div className="hero bg-center w-screen"></div>

        <CreateAccount createAccount={ this.createAccount } />

        <div className="container mx-auto flex flex-wrap">
          {this.createCards()}
        </div>
      </div>
    );
  }
}

export default App;
