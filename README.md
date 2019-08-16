# Patron 
> A distributed web application (aka Dapp) to accept donations on behalf of the content creators, helping newbies to develop skills and give back to the community.

### Business use case
> TLDR; No business, only good hearts here to collaborate!

This is an MVP for the width and depth of this idea. I'm working on it to build a one stop solution for all content creators regardless of their technical background. Although, every information about their contract will be available to them on-demand, yet there's nothing they need to do except making an account and preserving their private key.

In future, I'm planning to extend this application's capability by introducing premium media and webstore which would be store data off-chain, some of it has been implemented already. Don't you worry crypto-and-privacy-nerds we have merkle trees for our rescue when we pull it off for scaling it into the secure storage domain. There's IPFS and all sort of buzzwords to mention here but let's keep it to the next release. Till then, know someone is working full time on this project and would love to give back to the community that has helped me learn more :)
That's the spirit of Patron!

# Technical Details
> This part is for the college rubric

**Backend:** 
- Solidity Smart contract (using higher level concepts mentioned in [separate contract respository](https://github.com/shailshukla96/patron))
- Hosting (serverless deployment and contract on the test network)
- Migrations for contracts written in `migrations` directory
- Database and get/post calls (used firebase to achieve that)
- Dotenv (not required as I have been using config files, still I have added it to complete rubric)
- Testing (Rigorously done using improved remix solidity code editor, but not with Mocha and Chai, my laptop damaged last night and so do you see those wierd commits that are done from a rented laptop with improper .gitconfig. I hope I can get an exception if you refer [previous projects](https://github.com/tonyfeung/crypto-lottery/tree/release-v1/test) where tests were done properly)

**Frontend:**
- Used React for frontend. Refer the `public`, `src` and `src/components` directory for frontend
- Managed state in components for the initial MVP as it wasn't a requirement for me while drafting the SOW (for a more precise explanantion please refer [this blog by Dan Abramov](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367))
- Connected to backend by using Metamask, my second love in the blockchain industry!
- Proudly hosted using serverless deployment, thanks to Zeit now and Firebase

**Documentation:**
- Business use case and Readme are in the repository explaining the idea of dapp, motivation and approach too.
- Instructions can be collectively learned on this repository and the [separate contract respository](https://github.com/shailshukla96/patron) too.
- I've used ESLint for clean code using EcmaScript and Official documentation guide for Smart Contract dev documentation

**Pipeline:**
- I strongly believe for such a small project which has to build in a few weeks, it has not grown up to a level to implement CI/CD pipeline (ref [Thoughworks](https://www.thoughtworks.com/continuous-integration) and [Whitepaper by Martin Fowler](https://www.martinfowler.com/articles/continuousIntegration.html))
- The git workflow is my favourite part so before doing this project I signed up for GitHub student pack and Development Program. Along with commits and workflow, I've also done a [pre-release](https://github.com/shailshukla96/patron-dapp/releases) for this repository. Thanks to gitHub!

**File Layout:**
- Directory structure was the biggest bottleneck and to implement that I referred to Gregory's suggestions and also dug deep into Truffle's scaffolding code for React Dapps. 
- One more reference was the embark directory structure and then finally I made around 5 small partially completed projects to come up to the Boilerplate code that I have now for making Dapps. (Ref [Pre release tag](https://github.com/shailshukla96/patron-dapp/releases/tag/v0.1-alpha))

**Miscellaneous:**
- Use of TailwindCSS, and minimal design concepts
- Worked with git tags and releases
- Brainstormed over directory structure and importance of separation of concerns and clean code.

**A big thanks to the mentors of Blockchain Development program at George brown College!**
<br><br>

# Deployment
The contracts are deployed at testnet, visit etherscan.io for details of of [Contract deployment](https://kovan.etherscan.io/address/0xd549322da4f8222c94428e5db7fa0380c4dfe255)

The site is live using Firebase hosting, please visit the website [here](https://patron-eth.firebaseapp.com/).

# Do it yourself
Deploy the contracts on a network of your choice, using `truffle migrate`, `truffle deploy` or manually doing it using [Remix](https://remix.ethereum.org).

Change the contract address and network ID in the contract abi available in the `src/abi` directory, if you deployed it manually.
```JSON
"networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x60...5af9d7",
      "transactionHash": "0x94...7059d428"
    }
```
To run the app locally follor the commands below:
```Shell
npm install     # install dependencies
npm start       # run the app on localhost:3000
```
Your app must start at localhost:3000, for more information visit [React Documentation](https://reactjs.org/docs/getting-started.html)
<br>

# Author
> This project has been created by Shailendra Shukla <br>GBC ID: 101224373,<br>E-mail: shailendra.shukla@georgebrown.ca <br>
<br> To know more about Shailendra, please visit: <br> https://shailendrashukla.com <br> https://github.com/shailshukla96
