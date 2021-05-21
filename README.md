# Patron 
> A distributed web application (aka Dapp) to accept donations on behalf of the content creators, helping newbies to develop skills and give back to the community.

### Business use case
> TLDR; No business, only good hearts here to collaborate!

This is an MVP for the width and depth of this idea. I'm working on it to build a one stop solution for all content creators regardless of their technical background. Although, every information about their contract will be available to them on-demand, yet there's nothing they need to do except making an account and preserving their private key.

In future, I'm planning to extend this application's capability by introducing premium media and webstore where you can publish premium content and merchandise off-chain. If you have crypto assets to share in merch, this project would have the ability to get that on-chain data too. A small part it has been implemented already. For off-chain word there, don't you worry crypto-and-privacy-nerds we have merkle trees for our rescue when we pull it off for scaling it into the secure storage domain. There's IPFS and all sort of buzzwords to mention here but let's keep it to the next release. Till then, know someone is working full time on this project and would love to give back to the community that has helped me learn more :)
That's the spirit of Patron!

**Project Update:** 
Due to the lack of incentives, I was unable to continue this project but I'll try to keep this idea drafted here just in case it can inspire someone or I plan a revamp.

# Technical Details
**Backend:** 
- Solidity Smart contract (using higher level concepts mentioned in [separate contract respository](https://github.com/shailscript/patron))
- Hosting (serverless deployment using firebase and contract deployed on the test network)
- Migrations for contracts written in `migrations` directory
- Database and get/post calls (used firebase to achieve both, and _update_ operation too!)
- Dotenv (I have used config files, still there is support for `.env`)
- Testing (Rigorously done using improved remix solidity code editor, but not with Mocha and Chai in this project)

**Note:** My laptop was dead for some time so do see those wierd commits that are done from a friend's laptop with improper `.gitconfig`.  Some commits were done from my smartphone too. I'd add more tests in future, but if you want some testing inspiration you can refer to [another project](https://github.com/tonyfeung/crypto-lottery/tree/release-v1/test) I did with my friends, where tests were written properly.

**Frontend:**
- Used React for frontend. Refer to the `public`, `src` and `src/components` directory for frontend
- Managed state in components for the initial MVP as it wasn't a requirement for me while drafting the SOW (for a more precise explanantion please refer [this blog by Dan Abramov](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367))
- Connected to backend using Metamask, my second love in the blockchain industry!
- Proudly hosted using serverless deployment, thanks to Vercel (previously Zeit) and Firebase.

**Documentation:**
- Business use case and Readme are in the repository explaining the idea of dapp, motivation and approach too.
- Docs are in this repository and the [separate contract respository](https://github.com/shailscript/patron) too.
- I've used ESLint for clean code using EcmaScript and Official documentation guide for Smart Contract dev documentation.

**Pipeline:**
- I strongly believe that, for such a small project which has to be done in a few weeks, it has not grown up to a level to implement CI/CD pipeline (ref [ThoughtWorks](https://www.thoughtworks.com/continuous-integration) and [Whitepaper by Martin Fowler](https://www.martinfowler.com/articles/continuousIntegration.html))
- The git workflow is my favourite part so before doing this project I signed up for GitHub student pack and Development Program. Along with commits and workflow, I've also done a [pre-release](https://github.com/shailscript/patron-dapp/releases) for this repository. Thanks to gitHub!

**File Layout:**
- Directory structure was the biggest bottleneck and to implement that I referred to Gregory's suggestions and also dug deep into Truffle's scaffolding code for React dApps. 
- One more reference was the embark directory structure and then finally I made around 5 small partially completed projects to come up to the Boilerplate code that I have now for making Dapps. (Ref [Pre release tag](https://github.com/shailscript/patron-dapp/releases/tag/v0.1-alpha))

**Miscellaneous:**
- Use of TailwindCSS, a utility first CSS framework
- Worked with git tags and releases
- Brainstormed over directory structure, separation of concerns and clean code.

**A big thanks to the mentors of Blockchain Development program at George Brown College for their support!**
<br><br>

# Deployment
The contracts are deployed at testnet, visit etherscan.io for details of of [Contract deployment](https://kovan.etherscan.io/address/0xd549322da4f8222c94428e5db7fa0380c4dfe255)

The site is live using Firebase hosting, please visit the website [here](https://patron-eth.firebaseapp.com/).

# Do it yourself
Deploy the contracts on a network of your choice, using `truffle migrate`, `truffle deploy`. Alternattively, you can deploy manually using [Remix](https://remix.ethereum.org).

**If you deployed it manually, please don't forget** to change the contract address and network ID in the contract ABI available in the `src/abi` directory.
```JSON
"networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x60...5af9d7",
      "transactionHash": "0x94...7059d428"
    }
```
To run the app locally follow the commands below:
```Shell
npm install     # install dependencies
npm start       # run the app on localhost:3000
```
Your should start at localhost:3000, for more information visit [React Documentation](https://reactjs.org/docs/getting-started.html)
<br>

# Author
> This project has been created by Shailendra Shukla.
<br> To know more about Shailendra, please visit: <br> https://shailendrashukla.com <br> https://github.com/shailscript
