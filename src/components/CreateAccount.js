import React, { Component } from "react";
class CreateAccount extends Component {

    render() {
        return (
            <form 
                className="-mt-20 mb-20 p-10 shadow-lg rounded-lg bg-white container mx-auto flex flex-wrap justify-center"
                onSubmit = { (event) => {
                    event.preventDefault();
                    const name = this.name.value;
                    const email = this.email.value;
                    this.props.createAccount(name, email);
                    this.name.value = "";
                    this.email.value = "";
                    }
                }
            >
                <div className="flex flex-col">
                    <input 
                        className="p-2 w-full md:w-64 rounded border-black border-b mx-2"
                        id="name"
                        type="text"
                        placeholder="Name"
                        ref={ (input) => { this.name = input }}
                         
                    />
                </div>

                <div className="flex flex-col">
                    <input
                        className="p-2 w-full md:w-64 rounded border-black border-b mx-2"
                        id="email"
                        type="text"
                        placeholder="Email"
                        ref={ (input) => { this.email = input }}
                         
                    />
                </div>

                <button className="bg-yellow-600 w-full md:w-64 px-4 rounded text-yellow-900 mx-2" type="submit"><i className="fas fa-user text-sm pr-2"></i> Create Account</button>
            </form>
        )
    }
}

export default CreateAccount;