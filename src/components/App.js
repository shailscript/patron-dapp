import React, { Component } from "react";
//import Patron from "../abis/Patron.json";
import PatronFactory from "../abis/PatronFactory.json";
import getWeb3 from "../utils/getWeb3";

import "./App.css";

class App extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      web3: null, 
      account: null, 
      contract: null 
    };

    this.createAccount = this.createAccount.bind(this);
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

  createAccount = async () => {
    const { account, contract } = this.state;
    console.log('Create Account method ');
    const response = await contract.methods.deploy(account).send( { from: account });
    console.log(response);
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <button onClick={ this.createAccount }>Create Account</button>
      </div>
    );
  }
}

export default App;
