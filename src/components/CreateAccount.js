import React, { Component } from "react";
class CreateAccount extends Component {

    render() {
        return (
            <form 
                className="-mt-40 mb-20 p-10 bg-gray-400 opacity-75 mx-8 container mx-auto flex flex-wrap justify-around"
                onSubmit = { (event) => {
                    event.preventDefault();
                    const name = this.name.value;
                    const email = this.email.value;
                    this.createAccount(name, email)
                    }
                }
            >
                <input 
                    className="p-2 rounded opacity-100"
                    id="name"
                    type="text" 
                    placeholder="Name"
                    ref={ (input) => { this.name = input }}
                    required 
                />

                <input
                    className="p-2 rounded opacity-100"
                    id="email"
                    type="text"
                    placeholder="Email"
                    ref={ (input) => { this.email = input }}
                    required 
                />

                <button type="submit">Create Account</button>
            </form>
        )
    }
}

export default CreateAccount;