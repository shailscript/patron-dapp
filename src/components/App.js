import React, { Component } from "react";
import Patron from "../abis/Patron.json";
import PatronFactory from "../abis/PatronFactory.json";
import getWeb3 from "../utils/getWeb3";
import CreateAccount from "./CreateAccount";
import Navbar from "./Navbar";
import loadingImg from "./comet-spinner.gif";
import "./App.css";

class App extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      web3: null, 
      account: null, 
      contract: null,
      loading: true,
      message: null
    };

    this.createAccount = this.createAccount.bind(this);
    this.donate = this.donate.bind(this);
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
  };

  createAccount = async (name, email) => {
    try {
      const { account, contract } = this.state;

      contract.methods.deployPatron(account).send( { from: account } );
      contract.events.newPatronDeployed( {
        filter: { from: account }
      }, (error, event) => {
        
        //call to firebase - update data (deploymentId - maybe) name, address, email, contractAddr, balance
        //update state loading: false

        console.log("Hello helo hello", event, this.state.loading);

      }).on('error', console.error);

    } catch (error) {
      alert(
        `Umm... not your fault. Let's try again!`,
      );
      //page reload
    }
  };

  donate = async (to, value) => {
    try {
      const { web3, account } = this.state;
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Patron.networks[networkId];
      const instance = new web3.eth.Contract(
        Patron.abi,
        deployedNetwork && to,
      );
      
      value = web3.utils.toWei(value, 'ether');
        console.log(instance)
      instance.methods.donate().send( { from: account, value: value }, (err, txHash) => console.log(txHash));
      instance.events.donationSuccessful( {
        filter: { from: to }
      }, (error, event) => {
        console.log("Hello helo hello", event, this.state.loading);
      }).on('error', console.error);

    } catch (error) {
      alert(
        `Umm... not your fault. Let's try again!`,
      );
      //page reload
    }
  }

  render() {
    if (!this.state.web3) {
      return (
        <div
          className="h-screen bg-gray-200 flex flex-col mx-auto align-center justify-center"
        >
          <div className="mx-auto">
            <img src={ loadingImg } alt="Loading Web3, accounts, and contract..." />
          </div>
        </div>
      );
    }
    return (
      <div className="h-screen bg-gray-200">
        <Navbar />

        <div className="hero bg-center w-screen"></div>

        <CreateAccount createAccount={ this.createAccount } />

        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/3 p-4">
            <div className="h-64 bg-blue-900 rounded-lg shadow-lg"></div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="h-64 bg-blue-900 rounded-lg shadow-lg"></div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="h-64 bg-blue-900 rounded-lg shadow-lg"></div>
          </div>
        </div>

        <div>
          <form 
            className="my-20 bg-gray flex justtify-center"
            onSubmit={ (event) => {event.preventDefault(); this.donate('0x09b2Cb0841b39faa2674B77Eb80C015eAd2B5e6f', "1");} }>
            <button className="px-10 py-2 mx-auto text-xl bg-blue-900 rounded-full text-white" type="Submit">Donate</button>
          </form>
        </div>

        <div className="flex justtify-center">
          <button className="mx-auto">Login</button>
        </div>
      </div>
    );
  }
}

export default App;
