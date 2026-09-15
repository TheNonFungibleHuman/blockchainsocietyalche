export const part3 = {
  "id": "part-3",
  "title": "PART 3: Smart Contracts, Tokens & The Programmable Blockchain",
  "modules": [
    {
      "id": "module-3.1",
      "title": "Module 3.1 — The Bitcoin-Ethereum Glow up",
      "pages": [
        {
          "id": "m3.1-page-0",
          "title": "Module Introduction",
          "type": "video",
          "content": "In this module, we explore the transition from Bitcoin's single-purpose design to Ethereum's programmable vision. We'll learn what Bitcoin was missing and how smart contracts turned the blockchain into a global computer."
        },
        {
          "id": "m3.1-page-1",
          "title": "What Bitcoin Was Missing",
          "content": `Bitcoin solved a real problem. Before it existed, sending money across borders meant trusting a bank, a wire service, or a remittance company to move it for you. Those middlemen charged fees, took days, and could freeze your funds. Bitcoin removed the middleman. Two people anywhere in the world could transact directly, with no bank in the middle, and no single authority that could reverse or block the transaction.

That was genuinely new. But Bitcoin was built to do one thing: move value from one address to another. Its scripting language is intentionally limited. You can set conditions on a transaction, such as requiring multiple signatures before funds move, but you cannot build complex logic on top of it. You cannot tell Bitcoin: "hold these funds, and only release them if a delivery is confirmed by a third party within 48 hours." Bitcoin does not have the machinery to execute that kind of instruction.

This limitation was a design choice, not an oversight. Bitcoin's creators prioritized security and simplicity over flexibility. A narrow system with a small attack surface is harder to break. But that narrowness also meant Bitcoin could not become a platform. It could store value and move it. Everything else was out of scope.

By 2013, a teenager named **Vitalik Buterin** had read enough Bitcoin developer discussions to understand exactly where that ceiling was, and had started thinking seriously about what it would take to remove it.`
        },
        {
          "id": "m3.1-page-2",
          "title": "Vitalik's Insight: A Blockchain That Runs Code",
          "content": `Vitalik Buterin was 19 when he published the Ethereum whitepaper in late 2013. He had been writing for Bitcoin Magazine, studying how developers were trying to build applications on top of Bitcoin, and watching them repeatedly hit the same wall. Every new use case required a new blockchain built from scratch, because Bitcoin's base layer could not support it. 

He proposed to build a blockchain with a general-purpose programming language built into it. Instead of a ledger that only tracks who owns what, build a ledger that can also store and execute code. Any developer, anywhere, could then deploy a program onto this blockchain, and that program would run exactly as written, every time, without any company or server behind it.

The key insight was that the blockchain's properties, specifically its decentralization, its resistance to tampering, and its public verifiability, could apply to code, not just to money. A program running on this blockchain would inherit all of those guarantees. Nobody could take it down, alter its rules, or selectively apply it to some users and not others.

Ethereum launched on mainnet in July 2015. The core addition it brought was the ability to deploy what Buterin called **smart contracts**: programs that live on the blockchain and execute automatically when their conditions are met. That one addition changed what a blockchain could be used for, and the rest of this module is about understanding exactly how.`
        },
        {
          "id": "m3.1-page-3",
          "title": "The Ethereum Virtual Machine (EVM)",
          "content": `When you run an app on your phone, your phone's processor executes the code. The app runs on your hardware, in your device's environment. That works fine for regular software, but it creates a problem for a decentralized blockchain: if a smart contract runs on one person's computer, whose computer do you trust? What stops that computer from running the code differently, or lying about the result?

Ethereum solves this with the **Ethereum Virtual Machine**, or **EVM**. The EVM is a sandboxed computing environment that runs identically on every node in the Ethereum network. When a smart contract is executed, every node runs it independently through its own copy of the EVM, and they all arrive at the same result. If they don't, the network rejects the output. The EVM is what makes "the code runs as written, every time" technically enforceable.

Think of it this way. Imagine a calculator that every participant in a game carries. The rules say that whenever a calculation needs to happen, everyone runs it on their calculator simultaneously, and the answer only counts if everyone gets the same result. The EVM is that calculator, except instead of arithmetic, it executes smart contract logic, and instead of a few players, there are thousands of nodes checking each other's work.

The EVM does not run regular code directly. Developers write smart contracts in higher-level languages, most commonly **Solidity**, and those get compiled down to **EVM bytecode**, which is what actually gets deployed and executed on-chain. You do not need to read bytecode to use Ethereum, but understanding that this translation layer exists explains why smart contracts behave consistently regardless of what machine is running them.

One more thing worth knowing: because the EVM became a standard, other blockchains adopted it. Chains like **BNB Chain**, **Polygon**, **Avalanche**, and **Base** are all **EVM-compatible**, meaning smart contracts written for Ethereum can run on them with little or no modification. The EVM became the default runtime environment for a large portion of the entire blockchain ecosystem.`
        },
        {
          "id": "m3.1-quiz",
          "title": "Module 3.1 Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "m3.1-q1",
              "question": "What was Bitcoin's primary limitation that Ethereum was designed to address?",
              "options": [
                "Bitcoin transactions were too slow to be useful",
                "Bitcoin could not run general-purpose programs or complex logic",
                "Bitcoin had no way to store value across borders",
                "Bitcoin required a central authority to validate transactions"
              ],
              "correctAnswer": 1,
              "hintPageId": "m3.1-page-1"
            },
            {
              "id": "m3.1-q2",
              "question": "What did Vitalik Buterin observe developers doing before Ethereum existed?",
              "options": [
                "Building wallets that couldn't connect to the internet",
                "Copying Ethereum's codebase without permission",
                "Building new blockchains from scratch for every new use case",
                "Trying to use Bitcoin as a storage network for files"
              ],
              "correctAnswer": 2,
              "hintPageId": "m3.1-page-2"
            },
            {
              "id": "m3.1-q3",
              "question": "What is the Ethereum Virtual Machine (EVM)?",
              "options": [
                "A programming language used to write smart contracts",
                "A wallet interface for interacting with Ethereum applications",
                "A physical server farm that Ethereum rents to run its network",
                "A sandboxed computing environment that runs identically on every Ethereum node"
              ],
              "correctAnswer": 3,
              "hintPageId": "m3.1-page-3"
            },
            {
              "id": "m3.1-q4",
              "question": "Why does every node run the EVM independently when a smart contract executes?",
              "options": [
                "To allow developers to test contracts before they go live",
                "To give miners a chance to earn extra fees",
                "So no single machine can control or manipulate the outcome",
                "Because Ethereum nodes are too slow to share results in real time"
              ],
              "correctAnswer": 2,
              "hintPageId": "m3.1-page-3"
            },
            {
              "id": "m3.1-q5",
              "question": "What language do most developers use to write Ethereum smart contracts?",
              "options": [
                "Solidity",
                "Python",
                "Rust",
                "JavaScript"
              ],
              "correctAnswer": 0,
              "hintPageId": "m3.1-page-3"
            },
            {
              "id": "m3.1-q6",
              "question": "What does it mean for a blockchain to be EVM-compatible?",
              "options": [
                "It shares Ethereum's transaction history and token balances",
                "It uses the same proof-of-work mining algorithm as Ethereum",
                "It must upgrade its software every time Ethereum upgrades",
                "It can run smart contracts written for Ethereum with little or no modification"
              ],
              "correctAnswer": 3,
              "hintPageId": "m3.1-page-3"
            },
            {
              "id": "m3.1-q7",
              "question": "Which of the following best describes Ethereum's core addition over Bitcoin?",
              "options": [
                "The ability to deploy programs that live and execute on the blockchain",
                "A built-in exchange for trading tokens peer to peer",
                "Faster block times and lower fees on all transactions",
                "A governance system that lets token holders vote on network changes"
              ],
              "correctAnswer": 0,
              "hintPageId": "m3.1-page-2"
            },
            {
              "id": "m3.1-q8",
              "question": "Which of these chains is EVM-compatible?",
              "options": [
                "Bitcoin",
                "Cardano",
                "Base",
                "Cosmos"
              ],
              "correctAnswer": 2,
              "hintPageId": "m3.1-page-3"
            }
          ]
        }
      ]
    },
    {
      "id": "module-3.2",
      "title": "Module 3.2 — Smart Contracts",
      "pages": [
        {
          "id": "m3.2-page-0",
          "title": "Module Introduction",
          "type": "video",
          "content": "In this module, we dive into the core engine of the programmable blockchain: Smart Contracts. We'll explore how they work, why the vending machine is the perfect analogy, and how they replace institutional trust with mathematical certainty."
        },
        {
          "id": "m3.2-page-1",
          "title": "What Is a Smart Contract?",
          "content": `A smart contract is a program that lives on the blockchain and executes automatically when its conditions are met. No company runs it, no employee triggers it, and no administrator can alter it once it is deployed. The code is the agreement, and the blockchain is the enforcement mechanism.

The **vending machine** is the cleanest analogy for how this works. When you put money into a vending machine and select a drink, the machine does not consult anyone. It checks whether you have met the condition (correct amount inserted, valid selection made), and if you have, it releases the product. If you haven't, it returns your money. There is no cashier involved, no negotiation, and no discretion. The logic is fixed, and it runs the same way every time.

A smart contract works on the same principle. A developer writes the conditions into code and deploys it to the blockchain. From that point on, anyone who meets those conditions triggers the contract's execution automatically. The blockchain records every interaction, the outcome is publicly verifiable, and nobody can interfere with it mid-execution.

This matters because most agreements in the real world depend on trusting a third party to enforce them. A landlord and tenant trust a court system. A buyer and seller on a marketplace trust the platform. A musician licensing their work trusts a collecting society. Smart contracts **replace that trust with code**. If the conditions are met, the outcome happens, and no institution needs to stand behind it.

One thing to be clear about from the start: smart contracts are **not intelligent**. They do not make judgments, they do not adapt to circumstances, and they cannot read information from the outside world on their own. They execute the logic they were given, nothing more.`
        },
        {
          "id": "m3.2-page-2",
          "title": "What Smart Contracts Can and Can't Do",
          "content": `Smart contracts are precise and reliable within a specific boundary.

### What smart contracts can do
A smart contract can **hold funds** and release them when conditions are met. It can **mint tokens**, burn them, or transfer them between addresses based on rules written into it at deployment. It can record data permanently on-chain, enforce voting rules in a decentralized organization, split revenue automatically between multiple parties, and execute trades between tokens without a centralized exchange involved. Every one of these actions happens **deterministically**, meaning the same inputs always produce the same outputs, and every action is recorded on a public ledger that anyone can verify.

### What smart contracts cannot do
A smart contract **cannot reach outside the blockchain** on its own. It cannot check whether a package was delivered, whether a football match ended in a draw, or whether a specific bank account received a payment. The blockchain is a closed system, and smart contracts only have access to data that exists within it. To act on real-world information, a smart contract needs an **oracle**, which is an external service that feeds verified off-chain data onto the blockchain.

Smart contracts also **cannot be changed** after deployment. This is both their strength and their most significant risk. **Immutability** means nobody can alter the rules after the fact, which is what makes them trustworthy. But it also means a bug in the code is a permanent bug. Several of the largest losses in blockchain history trace back to smart contract vulnerabilities that could not be patched because the contract was already live and immutable. Some development teams build in upgrade mechanisms, but those mechanisms introduce their own trust assumptions about who controls the upgrade.

Finally, a smart contract **cannot enforce anything in the physical world**. It can release funds when conditions on-chain are met, but it has no power to compel a real person to deliver goods, show up to an event, or honor an agreement that exists outside the blockchain.`
        },
        {
          "id": "m3.2-page-3",
          "title": "Gas: Paying for Computation",
          "content": `Every instruction a smart contract executes costs something. Adding two numbers, storing a value, transferring a token, etc., each consumes computational resources across every node in the Ethereum network simultaneously. **Gas** is the unit that measures how much computation a given operation requires, and it is how the network prices those operations.

When you send a transaction on Ethereum, you are asking thousands of nodes to process and verify that transaction, update their copies of the ledger, and reach consensus on the result. Gas is how you pay for that collective effort. The more complex the operation—a simple token transfer uses less gas than executing a multi-step DeFi trade—the more you pay.

The actual cost you pay is calculated by multiplying the amount of gas an operation uses by the current **gas price**, which is denominated in **gwei**. Gwei is a small unit of ETH: one gwei is one billionth of one ETH. When the network is busy, and many transactions are competing to be included in the next block, gas prices rise because users bid higher to get their transactions processed faster. When the network is quiet, gas prices fall. This is the same supply and demand logic as any congested system: more demand for limited block space pushes the price up.

Gas serves a second function beyond payment: it **prevents abuse**. Without a cost attached to computation, someone could deploy a contract with an infinite loop and force every node on the network to run it forever. Gas caps that risk. Every transaction specifies a **gas limit**, the maximum amount of gas the sender is willing to consume. If the contract's execution hits that limit before finishing, it stops, the transaction fails, and the gas already used is not refunded. The network was still doing work, and that work still costs something.

A network that thousands of people depend on cannot allow any single actor to consume unlimited resources for free. Gas is the mechanism that keeps that from happening.`
        },
        {
          "id": "m3.2-demo",
          "title": "Contract Simulator Demo: Trigger a Smart Contract Without Writing Code",
          "type": "interactive",
          "componentId": "EscrowSimulator"
        },
        {
          "id": "m3.2-quiz",
          "title": "Module 3.2 Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "m3.2-q1",
              "question": "Which analogy best describes how a smart contract works?",
              "options": [
                "A lawyer who negotiates terms between two parties",
                "A vending machine that executes automatically when conditions are met",
                "A bank that holds funds and releases them on request",
                "A marketplace platform that moderates disputes between buyers and sellers"
              ],
              "correctAnswer": 1,
              "hintPageId": "m3.2-page-1"
            },
            {
              "id": "m3.2-q2",
              "question": "What does a smart contract need in order to act on real-world information, such as whether a package was delivered?",
              "options": [
                "An oracle that feeds verified off-chain data onto the blockchain",
                "A direct connection to shipping company databases",
                "A developer to manually confirm the event on-chain",
                "A second smart contract running on a different blockchain"
              ],
              "correctAnswer": 0,
              "hintPageId": "m3.2-page-2"
            },
            {
              "id": "m3.2-q3",
              "question": "Why can a smart contract bug be especially dangerous compared to a bug in regular software?",
              "options": [
                "Smart contract bugs always drain user wallets immediately",
                "Developers cannot access the contract's code after deployment",
                "Smart contracts are immutable, so a deployed bug cannot be patched",
                "Smart contract bugs are invisible to auditors and security researchers"
              ],
              "correctAnswer": 2,
              "hintPageId": "m3.2-page-2"
            },
            {
              "id": "m3.2-q4",
              "question": "What is gas in the context of Ethereum?",
              "options": [
                "The programming language used to write smart contracts",
                "A fee paid to the wallet provider for processing transactions",
                "A unit that measures the computational work a transaction requires",
                "The unit used to measure how much computation a transaction requires and price it accordingly"
              ],
              "correctAnswer": 3,
              "hintPageId": "m3.2-page-3"
            },
            {
              "id": "m3.2-q5",
              "question": "Why do gas prices rise when the Ethereum network is busy?",
              "options": [
                "Ethereum's protocol automatically increases fees to slow down usage",
                "More transactions competing for limited block space drives the price up",
                "Validators charge more when they process complex smart contracts",
                "The ETH token price increases during periods of high network activity"
              ],
              "correctAnswer": 1,
              "hintPageId": "m3.2-page-3"
            },
            {
              "id": "m3.2-q6",
              "question": "A musician deploys a smart contract to split revenue from sales. What happens when a sale executes?",
              "options": [
                "The platform holds the funds and distributes them at the end of the month",
                "The musician manually triggers the split after confirming the sale",
                "The contract splits and transfers funds to all parties simultaneously and automatically",
                "The collecting society receives the full payment and handles distribution"
              ],
              "correctAnswer": 2,
              "hintPageId": "m3.2-page-2"
            },
            {
              "id": "m3.2-q7",
              "question": "In the escrow demo, why does the contract check who is calling each function before executing?",
              "options": [
                "To make sure only the correct party can trigger each stage of the contract",
                "To calculate how much gas each party owes for their share of the transaction",
                "To record the caller's identity permanently in the contract's public log",
                "To prevent the contract from being deployed more than once"
              ],
              "correctAnswer": 0,
              "hintPageId": "m3.2-demo"
            },
            {
              "id": "m3.2-q8",
              "question": "What does a gas limit on a transaction do?",
              "options": [
                "It sets the maximum ETH price the sender is willing to pay per unit of gas",
                "It caps the number of transactions a wallet can send per day",
                "It restricts which smart contracts a wallet address is allowed to interact with",
                "It sets the maximum computation the transaction is allowed to consume before it stops"
              ],
              "correctAnswer": 3,
              "hintPageId": "m3.2-page-3"
            }
          ]
        }
      ]
    },
    {
      "id": "module-3.3",
      "title": "Module 3.3 — Token Economics Foundations",
      "pages": [
        {
          "id": "m3.3-page-0",
          "title": "Module Introduction",
          "type": "video",
          "youtubeId": "6PADQLplsdU",
          "content": "Welcome to Module 3.3. In this module, we'll dive into the foundations of token economics, exploring the difference between coins and tokens, understanding token standards, and learning what truly gives a token value."
        },
        {
          "id": "m3.3-page-1",
          "title": "Coins vs Tokens: What's the Difference?",
          "content": `People use "coin" and "token" interchangeably in casual conversation, but they describe two different things.

**A coin** is the native currency of a blockchain. ETH is the coin of Ethereum. BTC is the coin of Bitcoin. SOL is the coin of Solana. Coins exist at the protocol level, meaning they are built into the blockchain itself. They are used to pay for transactions on that network, to reward validators, and to denominate value within the ecosystem. You cannot have Ethereum without ETH. The coin is fundamental to how the network operates.

**A token** is different. Tokens are created by deploying a smart contract on top of an existing blockchain. They do not exist at the protocol level; they exist within a contract that lives on the chain. USDC, for example, is a token that runs on Ethereum. So is UNI, the governance token of the Uniswap exchange, and LINK, the token used by the Chainlink oracle network. None of these are coins. They are programs that track balances and transfers according to rules written into their contracts.

Tokens depend on the blockchain they are built on. If Ethereum went down, every token running on Ethereum would be inaccessible until it came back. Tokens inherit the security, speed, and cost structure of their underlying chain.

One more distinction: **stablecoins are tokens**. USDC, USDT, and DAI are not coins in the technical sense. They are smart contract tokens designed to maintain a stable value relative to a reference currency, usually the US dollar.`
        },
        {
          "id": "m3.3-page-2",
          "title": "Fungible and Non-Fungible Tokens: ERC-20, ERC-721, ERC-1155",
          "content": `Before getting into standards, the underlying concept needs to be clear.

### Fungibility

A **fungible asset** is one where every unit is identical and interchangeable. If you lend a friend 500 Kenyan shillings and they pay you back with a different 500 shilling note, nothing has been lost or changed. The specific note does not matter; only the value does. ETH is fungible. One ETH is identical to every other ETH. USDC is fungible. Every unit of a fungible token is indistinguishable from every other unit of the same token, and that is precisely what makes it useful as money or as a tradeable asset.

A **non-fungible asset** is one where every unit is unique and not interchangeable. A concert ticket for Row A, Seat 12 is not the same as a ticket for Row F, Seat 7, even if they cost the same. A land title for a specific plot in Kumasi is not interchangeable with a land title for a different plot. Non-fungible tokens (NFTs) apply this logic on-chain: each token has a unique identifier that distinguishes it from every other token in the same contract.

### Token Standards

**ERC-20**  
ERC-20 is the standard for fungible tokens on Ethereum. ERC stands for Ethereum Request for Comments, the process by which the Ethereum developer community proposes and agrees on technical standards. ERC-20 defines a common set of rules that every fungible token contract must follow: how balances are tracked, how transfers work, how a contract can authorize another address to spend tokens on its behalf. Because all ERC-20 tokens follow the same rules, wallets and exchanges can support any ERC-20 token without needing custom code for each one. USDC, LINK, UNI, and thousands of other tokens are all ERC-20.

**ERC-721**  
ERC-721 is the standard for non-fungible tokens. Each token in an ERC-721 contract has a unique ID, and ownership of that specific ID is what the token represents. Two tokens in the same ERC-721 contract can have completely different values because they are not interchangeable. Most NFT collections, from digital art to on-chain credentials to gaming items, are built on ERC-721.

**ERC-1155**  
ERC-1155 is a multi-token standard that handles both fungible and non-fungible tokens within a single contract. A game developer, for example, might need thousands of identical gold coins (fungible) alongside a small number of unique legendary weapons (non-fungible). Deploying two separate contracts for this is inefficient. ERC-1155 allows both types to coexist in one contract, reducing deployment costs and simplifying how assets are managed. Gaming and digital collectibles projects use ERC-1155 heavily for exactly this reason.

The standard a token uses determines what the token can do, how wallets interpret it, and what rules govern its transfers. When you see a token listed on a block explorer, the standard it follows tells you immediately whether you are looking at a currency-like asset, a unique item, or a hybrid collection.`
        },
        {
          "id": "m3.3-page-3",
          "title": "What Gives a Token Value?",
          "content": `This is one of the most important questions in the entire course. Token value comes from a combination of factors, and understanding each one separately gives you a framework for evaluating any token you encounter.

### Supply

Every token has a supply structure. Some tokens have a fixed maximum supply: Bitcoin is capped at 21 million, and once that limit is reached, no new BTC will ever be created. Others have an inflationary supply, meaning new tokens are continuously issued, usually to reward validators or incentivize participation. Others have a deflationary mechanism, where tokens are permanently removed from circulation through a process called burning. Supply structure matters because scarcity, or the absence of it, directly affects price. A token with unlimited issuance and no demand sink will trend toward zero over time regardless of what the project does.

### Demand

Supply alone does not determine value. Demand is what interacts with supply to produce a price. Demand for a token comes from multiple sources: people buying it to use a protocol that requires it, investors speculating on its future price, institutions holding it as a reserve asset, or users needing it to pay transaction fees. The more genuine and diverse the sources of demand, the more stable and defensible the token's value tends to be. Demand driven entirely by speculation is fragile; demand driven by actual utility is stickier.

### Utility

Utility means the token does something useful within its ecosystem. ETH has utility because you need it to pay gas on Ethereum. LINK has utility because the Chainlink oracle network requires it for payments between data requesters and node operators. A token with genuine utility has a built-in reason for people to acquire and hold it beyond price speculation. When evaluating a token, the question to ask is: what breaks if this token did not exist? If the answer is nothing, the utility is probably cosmetic.

### Narrative

Narrative is real, even if it feels less tangible than the other factors. Bitcoin's digital gold narrative, the idea that BTC is a scarce, censorship-resistant store of value, drives significant institutional demand. That narrative is a social consensus that has built up over fifteen years. Narratives can accelerate adoption far beyond what fundamentals alone would justify, and they can also collapse, taking token prices with them. The Terra/LUNA collapse in 2022 is an example: the narrative that an algorithmic stablecoin could maintain its peg through market incentives alone fell apart under stress, and billions of dollars of value evaporated in days.

These four factors do not operate independently. A token with strong utility and a fixed supply cap still needs demand to have value. A compelling narrative without utility is a short-term price driver at best. The most resilient tokens tend to score reasonably well across all four, and the riskiest ones tend to be propped up by narrative alone.`
        },
        {
          "id": "m3.3-page-4",
          "title": "Tokenomics: Supply, Distribution, Vesting, and Burns",
          "content": `Tokenomics is the study of how a token's economic system is designed. The word combines "token" and "economics," and it covers every decision a project makes about how many tokens exist, who gets them, when they can be sold, and what happens to them over time. A project can have strong technology and a real use case and still fail because its tokenomics were designed poorly or dishonestly. Reading tokenomics critically is one of the most practical skills this course will give you.

### Supply Caps

A supply cap is the maximum number of tokens that will ever exist. Bitcoin's 21 million cap is the most well-known example. A hard cap creates a ceiling on supply, which means demand growth is not diluted by new issuance. Not every token has a cap: ETH has no hard cap, though its issuance rate is low and its burn mechanism means it can become deflationary under certain network conditions. When evaluating a token, the first question is whether the supply is fixed or open-ended, and if open-ended, what controls issuance.

### Distribution

Distribution describes who receives tokens and in what proportions. A typical token distribution might allocate percentages to the founding team, early investors, a community treasury, ecosystem grants, and a public sale.

The split matters a lot. A project where 40% of all tokens go to founders and 30% go to venture capital firms leaves only 30% for the public and the ecosystem. That concentration means a small group holds most of the supply and can exert significant downward pressure on price if they sell. Healthy distributions tend to favor community ownership and ecosystem growth over insider allocations.

### Vesting

Vesting is a schedule that controls when token recipients are allowed to sell or transfer their allocation. A typical vesting schedule for a founding team might include a one-year cliff, meaning no tokens are released at all for the first year, followed by a linear unlock over three years after that. Vesting exists to align incentives: if founders can sell everything on day one, they have limited financial reason to keep building. When you review a project's tokenomics, look at when large allocations unlock. A wave of tokens becoming available after a vesting cliff often creates selling pressure, and knowing when that cliff hits is relevant information.

### Burn Mechanisms

Burning means permanently removing tokens from circulation by sending them to an address that nobody controls, making them irretrievable. Burns reduce the circulating supply over time, which can create deflationary pressure if demand stays constant or grows. Ethereum introduced a burn mechanism with EIP-1559 in 2021, where a portion of every transaction fee is burned rather than paid to validators. During periods of high network activity, Ethereum burns more ETH than it issues, making it net deflationary. Some projects use manual burns, where a percentage of protocol revenue is used to buy tokens from the market and burn them. The key question is whether a burn mechanism is meaningful in scale or just a marketing narrative with negligible real impact.`
        },
        {
          "id": "m3.3-demo-1",
          "title": "Token Supply Simulator: Adjust the Levers, Watch the Economy",
          "type": "interactive",
          "componentId": "token-supply-simulator",
          "content": `### Interactive Token Economy Dashboard

Explore how tokenomics design choices shape a token’s circulating supply over time. Adjust sliders for **total supply**, **burn rate**, **vesting unlock schedule**, and **airdrop percentage**. The live chart updates to show the effect on inflation, scarcity, and circulating supply.

~~~token-supply-simulator~~~
`
        },
        {
          "id": "m3.3-quiz-1",
          "title": "Module 3.3 Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "What is the key difference between a coin and a token?",
              "options": [
                "Coins can only be used for payments while tokens can be traded on exchanges",
                "Tokens are created by miners while coins are created by smart contracts",
                "A coin is native to a blockchain at the protocol level while a token is created by a smart contract on top of a blockchain",
                "Coins have a fixed supply while tokens do not"
              ],
              "correctAnswer": 2,
              "hintPageId": "m3.3-page-1"
            },
            {
              "id": "q2",
              "question": "Which token standard would a developer use to create a currency-like asset where every unit is identical?",
              "options": [
                "ERC-20",
                "ERC-721",
                "ERC-1155",
                "ERC-4337"
              ],
              "correctAnswer": 0,
              "hintPageId": "m3.3-page-2"
            },
            {
              "id": "q3",
              "question": "What makes a non-fungible token different from a fungible one?",
              "options": [
                "Non-fungible tokens can only exist on Ethereum",
                "Non-fungible tokens are always worth more than fungible tokens",
                "Non-fungible tokens cannot be transferred between wallets",
                "Each non-fungible token has a unique identifier that makes it distinct from every other token in the same contract"
              ],
              "correctAnswer": 3,
              "hintPageId": "m3.3-page-2"
            },
            {
              "id": "q4",
              "question": "A game needs thousands of identical in-game coins alongside a small number of unique legendary weapons. Which token standard handles both asset types within a single contract?",
              "options": [
                "ERC-20, because it supports multiple token types natively",
                "ERC-1155, because it supports both fungible and non-fungible tokens in one contract",
                "ERC-721, because it assigns unique IDs to every asset including identical ones",
                "ERC-4337, because it was designed for gaming applications specifically"
              ],
              "correctAnswer": 1,
              "hintPageId": "m3.3-page-2"
            },
            {
              "id": "q5",
              "question": "Which of the following best describes genuine token utility?",
              "options": [
                "The token is required to perform a specific function within its ecosystem, so demand for it is tied to actual usage",
                "The token has a compelling brand story that drives investor interest",
                "The token is listed on major exchanges and easy to buy",
                "The token's price has increased consistently over the past six months"
              ],
              "correctAnswer": 0,
              "hintPageId": "m3.3-page-3"
            },
            {
              "id": "q6",
              "question": "What does a vesting schedule achieve in a token project?",
              "options": [
                "It increases the token's total supply over time to reward early holders",
                "It prevents the token from being listed on exchanges before launch",
                "It controls when team members and investors can sell their allocations, aligning their incentives with the project's long-term success",
                "It determines the percentage of tokens burned after each transaction"
              ],
              "correctAnswer": 2,
              "hintPageId": "m3.3-page-4"
            },
            {
              "id": "q7",
              "question": "What happened to Terra/LUNA in 2022 that makes it a relevant lesson in token value?",
              "options": [
                "The project was shut down by regulators for operating without a license",
                "The narrative that its algorithmic stablecoin could maintain its peg collapsed under stress, wiping out billions in value within days",
                "The founding team sold their entire allocation before the vesting cliff, triggering a price crash",
                "A smart contract exploit drained the project's treasury and made the token worthless"
              ],
              "correctAnswer": 1,
              "hintPageId": "m3.3-page-3"
            },
            {
              "id": "q8",
              "question": "What does burning tokens do to a token's economy?",
              "options": [
                "It transfers burned tokens to a community treasury for redistribution",
                "It temporarily removes tokens from circulation until the project needs them again",
                "It rewards validators by converting burned tokens into staking rewards",
                "It permanently removes tokens from circulation, reducing supply and creating potential deflationary pressure"
              ],
              "correctAnswer": 3,
              "hintPageId": "m3.3-page-4"
            }
          ]
        }
      ]
    },
    {
      "id": "module-3.4",
      "title": "Module 3.4 — NFTs: Beyond the Hype",
      "pages": [
        {
          "id": "m3.4-video",
          "title": "NFTs Explained",
          "type": "video",
          "youtubeId": "FkUn86bH34M",
          "content": "In this module introduction, we explore what NFTs actually are and why they represent a paradigm shift in digital ownership."
        },
        {
          "id": "m3.4-page-1",
          "title": "What Is an NFT, Really?",
          "content": `NFT stands for **non-fungible token**. The technical definition was covered in Module 3.3: it is a token with a unique identifier, built on a standard like ERC-721, where no two tokens are identical and no two are interchangeable. But this alone does not explain why NFTs became significant, or why they are worth understanding beyond the headlines about expensive JPEGs.

The core idea behind an NFT is **provable digital ownership**. Before NFTs existed, digital files could be copied infinitely with no way to distinguish an original from a copy. If an artist sold a digital painting, the buyer received a file that was identical to every other copy of that file on the internet. There was no meaningful sense in which that buyer "owned" something distinct. NFTs changed that by anchoring ownership to the blockchain. The token is the record of ownership, and that record is public, permanent, and cannot be duplicated.

The token itself is a unique entry on the blockchain. It has an ID, an owner address, and a pointer to metadata, which is a set of information describing what the token represents: a name, a description, and usually a link to an image or file. **The token is not the image.** The token is the record that says a specific address owns a specific item.

The "expensive JPEG" narrative captured one use case, speculative digital art, while the underlying technology was quietly being applied to event ticketing, music rights, gaming assets, academic credentials, and digital identity. Those applications are where NFTs become genuinely interesting for the long term, and they are what this module is actually about.`
        },
        {
          "id": "m3.4-page-2",
          "title": "What You Actually Own When You Own an NFT",
          "content": `When you buy an NFT, you own **the token**. That statement sounds obvious until you unpack what the token actually is and what it is not, because the gap between the two is where most people get confused or misled.

The token is a unique entry on the blockchain that records your wallet address as the current owner of a specific token ID within a specific smart contract. That record is genuine, verifiable, and tamper-proof. Nobody can take it from you without access to your private key, and anyone can verify your ownership by reading the blockchain. That part is real and meaningful.

What the token does **not** automatically give you is ownership of the underlying asset the token points to. When an NFT represents a digital artwork, the token contains a link to that artwork, not the artwork itself. The image typically lives somewhere else, either on a centralized server, on a decentralized storage network like IPFS, or in rare cases encoded directly on the blockchain. Owning the token means owning the pointer, and a pointer is only as valuable as the thing it points to, and only as permanent as the storage holding that thing.

### Copyright is an entirely separate matter

Buying an NFT of an artwork does not transfer the copyright of that artwork to you unless the creator explicitly includes that transfer in a legal agreement attached to the sale. Copyright is a legal construct that exists outside the blockchain. The blockchain records token ownership; it does not record intellectual property rights. Several high-profile disputes have emerged from buyers assuming that purchasing an NFT meant they could reproduce, license, or commercialize the underlying work. In most cases, they could not. What they owned was the token, which carried social and community value within a specific ecosystem, but no legal reproduction rights.

A concert ticket NFT gives you verifiable access rights to an event. An on-chain credential NFT gives you a tamper-proof record of an achievement. A gaming asset NFT gives you provable ownership of an item within a game ecosystem. In each of these cases, the value of the token is clear and specific. The problems arise when buyers assume ownership of the token extends further than the project or the law actually supports.`
        },
        {
          "id": "m3.4-page-3",
          "title": "On-Chain vs Off-Chain Metadata: Where the File Actually Lives",
          "content": `Every NFT points to metadata. Metadata is the information that describes what the token represents: a name, a description, a list of attributes, and a link to the media file the token is associated with, usually an image, a video, or an audio file. Where that metadata lives, and where the media file itself lives, determines how permanent and trustworthy your NFT actually is.

### On-Chain Metadata

On-chain metadata means the token's descriptive information is stored directly on the blockchain, inside the smart contract or encoded into the token itself. This is the most permanent option available. Because the blockchain is immutable and decentralized, on-chain metadata cannot be altered, deleted, or lost as long as the blockchain exists. Fully on-chain NFTs, where even the artwork is generated and stored on-chain as code, are considered the gold standard for permanence. CryptoPunks and Nouns are examples of projects where the core asset data lives entirely on Ethereum. The tradeoff is cost: storing data on-chain is expensive because every byte consumes block space and therefore costs gas.

### Off-Chain Metadata with IPFS

Most NFT projects store their metadata and media files off-chain to avoid the cost of on-chain storage. The most common decentralized option is **IPFS**, the InterPlanetary File System. IPFS is a peer-to-peer storage network where files are addressed by their content rather than their location. Instead of a URL that says "find this file at this server address," an IPFS link is a hash of the file's actual content. If the file changes, the hash changes, which means you can verify that what you are retrieving is exactly what was originally linked. This makes IPFS significantly more trustworthy than a centralized server, but it is not fully permanent. Files on IPFS only persist as long as at least one node on the network is actively storing and serving them, a process called pinning. If nobody pins a file, it can disappear.

### Off-Chain Metadata with Centralized Servers

Some projects store their metadata on regular web servers they control. This is the cheapest and easiest option, and it is also the most fragile. If the company behind the project shuts down, stops paying for server hosting, or simply changes the files at that URL, the NFT's metadata changes or disappears entirely. The token on the blockchain remains, but it now points to nothing, or to something different from what the buyer originally purchased. This has already happened with real projects. Tokens that once pointed to artwork now return 404 errors because the hosting lapsed.

The storage method an NFT project uses is publicly verifiable. Before buying any NFT, checking where the metadata lives is a basic due diligence step. A token on a decentralized blockchain with metadata on a centralized server the project controls is not as permanent as it might appear. That does not make it worthless, but it does mean part of what you are trusting is the project's continued operation.`
        },
        {
          "id": "m3.4-page-4",
          "title": "NFT Use Cases Beyond Art",
          "content": `### Event Ticketing

Ticket fraud and scalping are billion-dollar problems in the live events industry. A paper or PDF ticket can be duplicated. A ticket sold on a secondary market may be counterfeit. NFT tickets solve both problems simultaneously. Each ticket is a unique token issued by the event organizer, so counterfeiting is impossible: the blockchain shows exactly how many tickets were issued and who currently holds each one. Programmable resale rules mean the organizer can cap secondary market prices or collect a royalty on every resale automatically.

### Academic and Professional Credentials

Universities and professional bodies issue certificates on paper or PDF, both of which can be forged. An on-chain credential is a token issued by the awarding institution to the recipient's wallet address. Any employer can verify it instantly by reading the blockchain, no phone calls to registrar offices, no third-party verification services, no waiting. The recipient controls their credential and can share it with anyone without involving the issuing institution. Several universities across Africa and Southeast Asia are already piloting on-chain degree certificates for exactly this reason.

### Gaming Assets

In traditional games, items you earn or buy exist only within that game's servers. If the game shuts down, the items disappear. If the developer decides to change the rules, your inventory changes. NFT-based gaming assets exist in your wallet, outside the game's control. You own them independently of the game, can trade them on open markets, and in some ecosystems can use them across multiple games that support the same asset standard.

### Music Rights and Royalties

A musician can issue an NFT that represents a ownership stake in a song's future royalties. Buyers of that token receive a proportional share of streaming and licensing revenue automatically through the smart contract, with no label or collecting society intermediary taking a cut of the distribution. Royal and similar platforms have already facilitated this for artists with measurable audiences.

### Digital Identity

Self-sovereign identity is the idea that individuals should control their own identity data rather than having it stored and managed by governments, platforms, or corporations. NFT-based identity tokens can represent verified attributes, a government-issued ID check, a proof of address, a credit history, without centralizing that data in a single database that can be hacked or sold. The token lives in the user's wallet; they choose what to share and with whom.`
        },
        {
          "id": "m3.4-demo-1",
          "title": "Inspect NFT Metadata",
          "type": "interactive",
          "componentId": "nft-metadata-inspector",
          "content": `### NFT Metadata Inspector

Explore three pre-loaded NFT examples: an art NFT, an event ticket NFT, and an on-chain credential. For each, click **Inspect Metadata** to see the actual JSON the token contains, with labels explaining each field. Compare how one uses IPFS storage, one uses fully on-chain storage, and one uses a centralized server — highlighting the difference in permanence and trust.

~~~nft-metadata-inspector~~~`
        },
        {
          "id": "m3.4-quiz-1",
          "title": "Module 3.4 Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "What did NFTs introduce that did not exist for digital assets before?",
              "options": [
                "A way to establish provable, unique ownership of a digital item recorded permanently on a blockchain",
                "A method for converting physical assets into digital files",
                "A system for encrypting digital files so they cannot be copied",
                "A marketplace where digital artists could sell their work directly to buyers"
              ],
              "correctAnswer": 0,
              "hintPageId": "m3.4-page-1"
            },
            {
              "id": "q2",
              "question": "When you buy an NFT, what do you definitively own?",
              "options": [
                "The copyright to the underlying artwork or media file",
                "A copy of the media file stored permanently on the blockchain",
                "The unique token recorded on the blockchain that points to the associated metadata",
                "The smart contract that governs the entire NFT collection"
              ],
              "correctAnswer": 2,
              "hintPageId": "m3.4-page-2"
            },
            {
              "id": "q3",
              "question": "Why is storing NFT metadata on a centralized server considered the most fragile option?",
              "options": [
                "Centralized servers are more vulnerable to hacking than IPFS nodes",
                "Centralized storage costs more than on-chain storage over time",
                "Centralized servers require gas fees to retrieve metadata",
                "If the project stops paying for hosting or shuts down, the metadata can change or disappear entirely"
              ],
              "correctAnswer": 3,
              "hintPageId": "m3.4-page-3"
            },
            {
              "id": "q4",
              "question": "What makes IPFS a more trustworthy storage option than a centralized server for NFT metadata?",
              "options": [
                "Files on IPFS are addressed by their content hash, so any change to the file produces a different address, making tampering verifiable",
                "IPFS stores files directly on the Ethereum blockchain, making them fully permanent",
                "IPFS is owned and maintained by the Ethereum Foundation, guaranteeing long-term availability",
                "Files stored on IPFS are automatically backed up to every node in the Ethereum network"
              ],
              "correctAnswer": 0,
              "hintPageId": "m3.4-page-3"
            },
            {
              "id": "q5",
              "question": "How do NFT tickets solve the problem of ticket scalping?",
              "options": [
                "Programmable resale rules can be baked into the token, capping secondary prices or returning a royalty to the organizer on every resale automatically",
                "NFT tickets can only be transferred once, preventing any secondary market activity entirely",
                "NFT ticket prices are fixed by the blockchain and cannot be changed after issuance",
                "NFT tickets are anonymous, making it impossible for scalpers to identify high-demand events"
              ],
              "correctAnswer": 0,
              "hintPageId": "m3.4-page-4"
            },
            {
              "id": "q6",
              "question": "Why are on-chain credentials useful for employers verifying qualifications?",
              "options": [
                "On-chain credentials are issued by a central government authority, making them legally binding in all jurisdictions",
                "On-chain credentials encrypt the holder's personal data so only the employer can access it",
                "On-chain credentials are stored in a universal database that all employers can subscribe to",
                "Any employer can verify an on-chain credential instantly by reading the blockchain, without contacting the issuing institution"
              ],
              "correctAnswer": 3,
              "hintPageId": "m3.4-page-4"
            },
            {
              "id": "q7",
              "question": "What is the key advantage of NFT-based gaming assets over items in traditional games?",
              "options": [
                "NFT gaming assets have higher resale value than traditional in-game items",
                "NFT gaming assets load faster because they are stored on decentralized networks",
                "The player owns the asset in their wallet independently of the game, so it persists even if the game shuts down",
                "NFT gaming assets cannot be duplicated by other players within the game environment"
              ],
              "correctAnswer": 2,
              "hintPageId": "m3.4-page-4"
            },
            {
              "id": "q8",
              "question": "Buying an NFT of a digital artwork typically gives the buyer what rights regarding that artwork?",
              "options": [
                "Full copyright including the right to reproduce and license the work commercially",
                "Ownership of the token and whatever rights the project explicitly grants, which in most cases does not include copyright",
                "Exclusive display rights preventing the original creator from showing the work publicly",
                "Automatic licensing rights proportional to the resale value of the token"
              ],
              "correctAnswer": 1,
              "hintPageId": "m3.4-page-2"
            }
          ]
        }
      ]
    },
    {
      "id": "module-3.5",
      "title": "Module 3.5 — Layer 1 and Layer 2: Scaling Blockchains",
      "pages": [
        {
          "id": "m3.5-video",
          "title": "Module Introduction",
          "type": "video",
          "youtubeId": "LorgQfXpuK0",
          "content": "Welcome to Module 3.5. We'll explore the difference between Layer 1 and Layer 2 blockchains, and how scaling solutions are being built to handle the next billion users."
        },
        {
          "id": "m3.5-page-1",
          "title": "What Is a Layer 1 Blockchain?",
          "content": `A **Layer 1 blockchain** is the base layer: the foundational network that handles everything from scratch. It maintains its own consensus mechanism, its own validator set, its own transaction history, and its own native currency. When people say "the Ethereum network" or "the Bitcoin network," they are referring to Layer 1. Nothing underneath it is doing the work. It is the ground floor.

Every Layer 1 makes a set of foundational decisions at the protocol level that shape everything built on top of it. How are transactions validated? Who can participate in validation? How many transactions can fit in a block? How often are blocks produced? These decisions determine the network's security, its speed, and its cost structure. Changing them after the fact is extraordinarily difficult because every node in the network has to agree to the change, and tens of thousands of independent operators do not coordinate easily.

The major Layer 1 blockchains each made different tradeoffs. **Bitcoin** prioritizes security and decentralization above all else, accepting slow throughput and limited programmability as the cost of those properties. **Ethereum** prioritizes programmability and decentralization. **Solana** prioritizes throughput and low fees, achieved through a more centralized validator structure and a different consensus design. **BNB Chain** prioritizes low fees and EVM compatibility, with a smaller and more permissioned validator set than Ethereum.

Understanding Layer 1s matters because every application, token, and smart contract inherits the properties of the chain it runs on.`
        },
        {
          "id": "m3.5-page-2",
          "title": "The Scaling Problem: Why Ethereum Gets Congested",
          "content": `Ethereum processes transactions in blocks, and each block has a size limit that caps how much computation it can contain. In practical terms, Ethereum's base layer handles roughly **15 to 30 transactions per second** under normal conditions.

Keeping blocks small means that running a full Ethereum node does not require industrial hardware. A developer in Kampala or a student in Accra can run a node on a consumer laptop and participate in validating the network. If blocks were arbitrarily large, only well-resourced operators could afford to run nodes, and the network would become more centralized over time. Ethereum's block size limit is a deliberate tradeoff: accept lower throughput to preserve broad participation in validation.

The problem surfaces when demand exceeds that throughput limit. When more transactions are waiting to be processed than can fit in the next block, users compete by offering higher gas fees to have their transactions prioritized. During periods of high activity, such as a popular NFT mint, a major DeFi event, or a sudden market movement, this competition can push gas fees to levels that make small transactions economically irrational. Sending 10 dollars worth of ETH becomes absurd when the gas fee to do so costs 50 dollars. Ordinary users get priced out, and the network becomes effectively accessible only to those moving large amounts.

This is called the **blockchain trilemma** (discussed in part 2), a term coined to describe the tension between three properties every blockchain tries to achieve: decentralization, security, and scalability. The argument is that optimizing strongly for any two of these makes the third harder to achieve. Ethereum chose decentralization and security at the base layer, accepting limited scalability there, with the explicit intention of solving scalability through other means. Those other means are what Layer 2s provide.`
        },
        {
          "id": "m3.5-page-3",
          "title": "What Is a Layer 2 and Why Does It Exist?",
          "content": `A **Layer 2** is a separate network built on top of a Layer 1 blockchain that handles transactions off the main chain, then reports the results back to it. The Layer 1 remains the source of truth and the final settlement layer. The Layer 2 does the heavy lifting of processing transactions quickly and cheaply, then anchors that work to the security of the base layer beneath it.

The simplest way to understand this is through an analogy. Imagine a busy government land registry office where every property transaction in the country must be recorded. The office is authoritative and trustworthy, but it is slow and expensive to use because demand is high and capacity is limited. A Layer 2 is like a trusted notary service that batches hundreds of transactions, processes them quickly in their own office, and then submits a single consolidated record to the government registry at the end of the day. The registry does not need to process each transaction individually; it just needs to verify and record the final summary. The result is the same authoritative record, achieved at a fraction of the cost and time.

Layer 2s exist because the alternative solutions to Ethereum's scaling problem both come with significant downsides. Simply increasing Ethereum's block size would speed things up but would price out independent node operators and centralize the network over time. Building entirely separate Layer 1 chains means abandoning Ethereum's security and its existing developer ecosystem. Layer 2s offer a third path: scale the throughput without compromising the base layer's security or decentralization.

**Arbitrum**, **Optimism**, **Base**, **zkSync**, and **Polygon's zkEVM** (all Layer 2 blockchains) collectively process more transactions daily than Ethereum's base layer. Fees on these networks are a fraction of mainnet costs, often below one cent per transaction, making use cases that were economically impossible on mainnet, such as micropayments, casual gaming transactions, and small remittances, genuinely viable.`
        },
        {
          "id": "m3.5-page-4",
          "title": "Optimistic Rollups vs ZK Rollups",
          "content": `Both optimistic rollups and ZK rollups solve the same problem: how to process transactions off Ethereum's main chain while still inheriting its security. They take fundamentally different approaches to proving that the transactions they processed were valid, and those differences have real consequences for speed, cost, and trust assumptions.

### Optimistic Rollups

Optimistic rollups take their name from their core assumption: **transactions are assumed to be valid by default**. The rollup processes a batch of transactions off-chain, compresses them, and posts the results to Ethereum mainnet without providing immediate proof that every transaction was legitimate. Instead, there is a **challenge window**, typically seven days, during which anyone can examine the posted data and submit a fraud proof if they find an invalid transaction. If a fraud proof is submitted and verified, the invalid transaction is rejected and the party that submitted it is penalized. If nobody challenges the batch within the window, it is accepted as final.

The practical consequence of this design is a **withdrawal delay**. Moving assets from an optimistic rollup back to Ethereum mainnet requires waiting out the full challenge window, currently seven days on networks like Arbitrum and Optimism, because finality cannot be confirmed until the challenge period closes. Liquidity providers have built services that let users exit faster by fronting the funds for a fee, but the underlying delay is a structural feature of the design. The upside is that optimistic rollups are relatively straightforward to build and are fully EVM-compatible, meaning any Ethereum smart contract can be deployed on them with minimal modification.

### ZK Rollups

ZK rollups use a different mechanism entirely. ZK stands for **zero-knowledge**, referring to a cryptographic technique called a zero-knowledge proof. Instead of assuming transactions are valid and waiting for someone to challenge them, a ZK rollup generates a cryptographic proof for every batch of transactions it processes. This proof mathematically demonstrates that all transactions in the batch were valid, without revealing the details of each transaction. The proof is posted to Ethereum alongside the transaction data, and Ethereum's smart contracts verify it automatically.

The result is **near-instant finality**. Once the proof is verified on-chain, the batch is final. There is no challenge window, no withdrawal delay, and no reliance on someone watching for fraud. The cryptographic proof does the verification work that the challenge period does in optimistic rollups in seconds. ZK rollups are also more efficient in terms of the data they post to mainnet because the proof compresses verification into a small piece of data regardless of how many transactions it covers.

Neither type is universally superior. Optimistic rollups currently have deeper liquidity, more deployed applications, and a longer track record. ZK rollups have stronger finality guarantees and a technical architecture that many researchers consider more sound for the long term. In practice, both are running at scale, and a developer or user choosing between them today is making a decision based on specific application requirements.`
        },
        {
          "id": "m3.5-page-5",
          "title": "Bridges, Sidechains, and Moving Assets Between Chains",
          "content": `As the blockchain ecosystem expanded beyond a single chain, a new problem emerged: assets and data native to one chain cannot move to another chain on their own. Ethereum does not know what is happening on Solana. Bitcoin does not know what is happening on Ethereum. Each chain is a closed system with its own state, its own validators, and its own rules. Bridges and related infrastructure exist to connect these isolated systems, and understanding how they work is also understanding where some of the largest losses in blockchain history have occurred.

### Bridges

A bridge is a protocol that allows assets to move between two separate blockchain networks. The most common mechanism works through a **lock-and-mint model**. When you bridge an asset from Ethereum to Base, for example, your ETH is locked inside a smart contract on Ethereum. The bridge then mints a representative token on Base, typically called wrapped ETH or WETH, that represents your locked ETH one-to-one. When you want to return to the Ethereum mainnet, you burn the wrapped token on Base, and the bridge releases your original ETH from the smart contract on Ethereum.

The security of this process depends entirely on the bridge's smart contracts and, in many cases, on a set of validators or a multisig that controls the locked funds. This concentration of value in bridge contracts has made them the single largest target for exploits in blockchain history. The **Ronin bridge lost over 600 million dollars** in 2022. The **Wormhole bridge lost 320 million dollars** the same year. In both cases, attackers found ways to mint wrapped tokens without actually locking the underlying assets, draining the reserves. Bridges are a necessary infrastructure, but they are also a place where the security assumptions are different from the underlying chains they connect, and that gap has been exploited repeatedly.

### Sidechains

A sidechain is a separate blockchain that runs alongside a main chain and has its own consensus mechanism and validator set. It connects to the main chain through a bridge, but it does **not** inherit the main chain's security. Polygon's original proof-of-stake chain, before it transitioned to a ZK rollup, was a sidechain. Transactions on a sidechain are validated by the sidechain's own validators, not by Ethereum's. If those validators collude or are compromised, the sidechain's security fails independently of Ethereum. Sidechains can be fast and cheap, but users need to understand they are trusting a separate security model, not Ethereum's.

### Rollups vs Sidechains

The distinction matters practically. A rollup posts its transaction data and proofs back to Ethereum, meaning Ethereum's validators ultimately verify the rollup's work. A sidechain does not. A rollup's security is therefore derived from Ethereum. A sidechain's security is its own, for better or worse. This is why the Ethereum developer community strongly favors rollups over sidechains as the preferred scaling solution: rollups extend Ethereum's security to a faster and cheaper environment, while sidechains create a separate security environment that users may not fully understand they are entering.

### Validiums

A validium is a hybrid design that uses ZK proofs like a ZK rollup for transaction validity but stores data off-chain rather than posting it to Ethereum. This makes Validiums extremely cheap to operate but introduces a **data availability risk**: if the off-chain data storage goes down, users may be unable to prove their balances and withdraw their funds. Validiums make sense for applications where throughput and cost matter more than the strongest possible security guarantees, such as certain gaming applications or payment systems with trusted operators.`
        },
        {
          "id": "m3.5-demo-1",
          "title": "Bridge Flow Simulator: Move an Asset from Ethereum to Base",
          "type": "interactive",
          "componentId": "bridge-flow-simulator",
          "content": `### Interactive Bridge Flow Simulator

Step through bridging **1 ETH** from Ethereum mainnet to Base, watching each stage of the lock-and-mint process animate in sequence.

- **Stage 1 – Initiate:** Click "Bridge 1 ETH to Base." The Ethereum card highlights.
- **Stage 2 – Lock:** An animated ETH token moves into the bridge contract. Your ETH balance drops, the bridge contract balance rises. Label: "Your ETH is now locked. Nothing moves on Base yet."
- **Stage 3 – Mint:** A wrapped WETH token appears on Base. Label: "Wrapped ETH minted on Base. This represents your locked ETH one-to-one."
- **Stage 4 – Complete:** Balances settle, total fee shown, fee comparison bar reveals the cost difference between L1 and Base.

A "Bridge Back" button reverses the flow: WETH burns on Base, ETH unlocks on Ethereum. 

~~~bridge-flow-simulator~~~
`
        },
        {
          "id": "m3.5-quiz",
          "title": "Module 3.5 Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "What is a Layer 1 blockchain?",
              "options": [
                "A scaling solution built on top of Ethereum to handle transactions more cheaply",
                "A blockchain that relies on another network for its security and settlement",
                "A bridge protocol that connects two separate blockchain networks",
                "The foundational base layer network that maintains its own consensus, validators, and transaction history"
              ],
              "correctAnswer": 3,
              "hintPageId": "m3.5-page-1"
            },
            {
              "id": "q2",
              "question": "Why does Ethereum deliberately keep its block size small?",
              "options": [
                "Smaller blocks allow Ethereum to charge higher gas fees during periods of high demand",
                "Keeping blocks small means running a full node does not require industrial hardware, preserving broad participation in validation",
                "Smaller blocks make it easier for developers to deploy smart contracts on the network",
                "Ethereum's block size is determined by validator votes and has never been deliberately set"
              ],
              "correctAnswer": 1,
              "hintPageId": "m3.5-page-2"
            },
            {
              "id": "q3",
              "question": "What is the blockchain trilemma?",
              "options": [
                "The three-way competition between Bitcoin, Ethereum, and Solana for developer adoption",
                "The challenge of building bridges that connect three or more blockchains simultaneously",
                "The tension between decentralization, security, and scalability, where optimizing strongly for two makes the third harder to achieve",
                "The tradeoff between transaction speed, token price, and network uptime on any given blockchain"
              ],
              "correctAnswer": 2,
              "hintPageId": "m3.5-page-2"
            },
            {
              "id": "q4",
              "question": "What tradeoff did Solana make compared to Ethereum at the base layer?",
              "options": [
                "Solana prioritizes throughput and low fees, achieved through a more centralized validator structure than Ethereum",
                "Solana prioritizes security over speed, accepting slower transaction times in exchange for stronger decentralization",
                "Solana uses optimistic rollups natively at the base layer to achieve higher throughput",
                "Solana sacrifices programmability to achieve faster block times, similar to Bitcoin's design philosophy"
              ],
              "correctAnswer": 0,
              "hintPageId": "m3.5-page-1"
            },
            {
              "id": "q5",
              "question": "How does an optimistic rollup determine whether a batch of transactions is valid?",
              "options": [
                "It generates a cryptographic proof for every batch and posts it to Ethereum for immediate verification",
                "It submits transactions to Ethereum validators, who check each one individually before confirming the batch",
                "It assumes transactions are valid by default and relies on a challenge window during which anyone can submit a fraud proof",
                "It uses a committee of trusted nodes that vote on whether each batch meets the validity criteria"
              ],
              "correctAnswer": 2,
              "hintPageId": "m3.5-page-4"
            },
            {
              "id": "q6",
              "question": "What is the main practical consequence of the seven-day challenge window on optimistic rollups?",
              "options": [
                "Developers cannot deploy new smart contracts on the rollup during the challenge period",
                "Gas fees on the rollup increase for the duration of the challenge window",
                "Validators must remain online continuously for seven days after each batch is submitted",
                "Withdrawing assets back to the Ethereum mainnet requires waiting out the full seven-day period before funds are accessible"
              ],
              "correctAnswer": 3,
              "hintPageId": "m3.5-page-4"
            },
            {
              "id": "q7",
              "question": "What gives ZK rollups near-instant finality compared to optimistic rollups?",
              "options": [
                "A cryptographic proof is generated for every batch and verified on-chain immediately, eliminating the need for a challenge window",
                "ZK rollups use a smaller validator set that can reach consensus faster than Ethereum's full validator network",
                "ZK rollups post transactions directly to Ethereum without compression, making verification straightforward",
                "ZK rollups operate on a separate consensus mechanism that finalizes blocks every ten seconds"
              ],
              "correctAnswer": 0,
              "hintPageId": "m3.5-page-4"
            },
            {
              "id": "q8",
              "question": "How does the lock-and-mint bridge mechanism work?",
              "options": [
                "The asset is destroyed on the source chain and recreated from scratch on the destination chain",
                "The asset is locked in a smart contract on the source chain while a representative wrapped token is minted on the destination chain",
                "The asset is split into fragments that travel independently across the bridge and reassemble on arrival",
                "The asset transfers directly between validators on each chain who verify the transaction simultaneously"
              ],
              "correctAnswer": 1,
              "hintPageId": "m3.5-page-5"
            },
            {
              "id": "q9",
              "question": "Why have blockchain bridges been such frequent targets for exploits?",
              "options": [
                "Bridges operate without smart contracts, relying on human operators who can be socially engineered",
                "Bridge protocols are not open source, so security researchers cannot audit them for vulnerabilities",
                "Bridges require users to share their private keys during the transfer process, exposing them to theft",
                "Bridge smart contracts concentrate large amounts of locked assets in one place, making security failures catastrophic"
              ],
              "correctAnswer": 3,
              "hintPageId": "m3.5-page-5"
            },
            {
              "id": "q10",
              "question": "What is the key security difference between a rollup and a sidechain?",
              "options": [
                "Rollups use proof-of-work while sidechains use proof-of-stake, making rollups more energy-intensive",
                "Sidechains post cryptographic proofs to Ethereum while rollups manage their own independent security",
                "A rollup posts its data and proofs back to Ethereum, so its security is derived from Ethereum, while a sidechain runs its own independent security model",
                "Rollups require more validators than sidechains, making them more decentralized but slower"
              ],
              "correctAnswer": 2,
              "hintPageId": "m3.5-page-5"
            },
            {
              "id": "q11",
              "question": "What is a validium, and what tradeoff does it make?",
              "options": [
                "A validium is an optimistic rollup that reduces its challenge window to 24 hours in exchange for higher fees",
                "A validium uses ZK proofs for transaction validity but stores data off-chain, making it cheap to operate, but introducing data availability risk",
                "A validium is a sidechain that posts fraud proofs to Ethereum without storing transaction data on-chain",
                "A validium is a bridge design that locks assets on both chains simultaneously to prevent double-spending"
              ],
              "correctAnswer": 1,
              "hintPageId": "m3.5-page-5"
            },
            {
              "id": "q12",
              "question": "Which of the following best describes why the Ethereum community favors rollups over sidechains as the preferred scaling solution?",
              "options": [
                "Rollups extend Ethereum's security to a faster and cheaper environment, while sidechains create a separate security model that users may not fully understand",
                "Rollups process more transactions per second than sidechains under equivalent hardware conditions",
                "Rollups have been live longer than sidechains and therefore have a more established security track record",
                "Rollups are cheaper to deploy than sidechains, making them more accessible to independent developers"
              ],
              "correctAnswer": 0,
              "hintPageId": "m3.5-page-5"
            }
          ]
        }
      ]
    }
  ]
};
