export const part2 = {
  "id": "part-2",
  "title": "Part 2: How Blockchain Actually Works",
  "description": "Transactions, wallets, consensus, and the mechanics under the hood",
  "modules": [
    {
      "id": "module-2.1",
      "title": "Module 2.1 — Wallets and Keys",
      "pages": [
        {
          "id": "intro-video-2.1",
          "title": "Module Introduction",
          "type": "video",
          "youtubeId": "uy2mbYgDPJE"
        },
        {
          "id": "m2.1-page-1",
          "title": "What a Wallet Actually Is",
          "content": `When you hear the word **"wallet,"** your brain probably pictures something that holds things. Your physical wallet holds cash, cards, maybe a crumpled receipt from six months ago. So when people say **"crypto wallet,"** it's natural to assume it works the same way and that your Bitcoin or Ethereum is sitting inside it somewhere. Well, it isn’t.

Your crypto **lives on the blockchain**. What your wallet holds are keys. Specifically, a **private key**: a piece of cryptographic data that proves you have the right to move the funds recorded against your address on that ledger.

Think of it this way. Imagine there's a transparent locker in a public square. Everyone can see what's inside. Anyone can drop something in. But only the person with the right key can open it and take anything out. The locker is your address on the blockchain. Your wallet holds the key.

This matters because if your wallet held actual coins (crypto), losing the wallet would mean losing the coins. But because the coins live on the blockchain and your wallet holds the key, losing your wallet app doesn't automatically mean losing your funds. Your funds are still there, recorded on the chain. What you need to recover access is your key.

That's also why, if someone steals your key, it's game over. They don't need your phone. They don't need your password. With the private key, they can move your funds from anywhere in the world, and there is no bank to call, no chargeback, no fraud department. The blockchain just sees a valid signature and processes the transaction.

So the wallet is really a **key manager**. It generates keys, stores them, and uses them to sign transactions on your behalf. The coins are always on the chain. Your wallet is just how you prove you own them.`
        },
        {
          "id": "m2.1-page-2",
          "title": "Public Keys and Private Keys",
          "content": `Every crypto wallet is built on a pair of keys. They're generated together, mathematically linked, and they work as a team. But they do very different jobs.

Start with the **private key**. This is a long string of random characters, and it is yours alone. You *never* share it. You *never* paste it anywhere. You *never* screenshot it. It's the master proof of ownership that lets you authorize a transaction and say, to the whole network, "yes, I approved this move."

The **public key** is derived from the private key using a one-way mathematical function. One-way means you can go from private to public easily, but you cannot reverse-engineer the private key from the public key.

Your public key is like a **padlock you hand out freely**. Anyone can use it to lock a box and send it to you. But only you have the key that opens it. You can share the padlock with the whole world and it doesn't matter, because having the padlock tells you nothing about how to make the key.

In practice, when someone wants to send you crypto, they use your public key (or more accurately, your wallet address, which is derived from your public key) to direct the funds to you. When you want to send crypto out, your wallet uses your private key to sign the transaction.The network checks the signature against your public key, confirms it matches, and processes the transaction.

Nobody ever sees your private key. The signature it produces is what the network verifies, not the key itself.

So to recap: the **private key is your proof of ownership**, kept completely secret. The **public key is what the world uses to send things to you**. One is the lock, one is the key, and the math between them is what makes trustless transactions possible without anyone needing to know who you are.`
        },
        {
          "id": "m2.1-page-3",
          "title": "Your Wallet Address",
          "content": `You've heard people say "send it to my wallet address." But an address isn't the same thing as a wallet, and it isn't the same thing as a public key either.

Your **wallet address** is derived from your public key. The process runs the public key through a hashing function, shortens it, and formats it into something readable. On Ethereum, that looks like this: \`0x71C7656EC7ab88b098defB751B7401B5f6d8976F\`. On Bitcoin, it looks slightly different. Either way, it's a compressed, shareable version of your public key.

Think of it like an **email address**. Your email address isn't your identity, your inbox, or your password. It's just the thing you hand someone so they can reach you. Your wallet address works the same way. You share it freely, people use it to send funds to you, and it reveals nothing about your private key.

You can have multiple addresses from a single wallet. Most modern wallets generate a new address for every transaction you receive. All of those addresses trace back to the same private key, so the funds are still yours and still accessible from one place. The multiple addresses are just for privacy, so that someone receiving your address can't easily trace your full transaction history on the blockchain.

**What your address is not:** it is not your password, it is not your private key, and sharing it does not give anyone the ability to move your funds. They can see your balance (remember, the blockchain is public), but *seeing is very different from touching*.

So the chain goes: private key generates the public key, the public key gets hashed down into the wallet address. The **address** is what you share. The **public key** is what the network uses to verify your signatures. The **private key** is what you *never share with anyone, ever*.`
        },
        {
          "id": "m2.1-page-4",
          "title": "Types of Wallets: Custodial vs. Non-Custodial Wallets",
          "content": `Now that you know a wallet is really a key manager, the most important question you can ask about any wallet is: **Who is actually holding the keys?**

The answer splits every wallet in existence into one of two categories.

A **custodial wallet** is one where someone else holds your private key on your behalf. When you create an account on Binance, Coinbase, or any centralized exchange, they generate a wallet for you, and they hold the keys. You get a username and password, and the experience feels familiar, like online banking. But you don't control the keys. The exchange does.

This has real consequences. If the exchange gets hacked, your funds are at risk. If the exchange freezes withdrawals (it has happened, more than once), you can't move your money. If your account gets flagged, support decides what happens next. You're trusting a company the same way you trust a bank, and that trust can break. FTX collapsed in 2022, and billions in customer funds were lost. Customers didn't lose their passwords. They lost because the company holding their keys failed.

A **non-custodial wallet** is the opposite. You hold the private key yourself. Nobody else has it, nobody else can freeze it, and nobody else can recover it if you lose it. Wallets like MetaMask, Trust Wallet, and Phantom are non-custodial. When you set one up, you generate the keys on your own device and take full responsibility for keeping them safe.

The upside is total control. The downside is total responsibility. There is no support ticket, no account recovery, and no fraud team. If you lose your private key and your seed phrase, your funds are gone permanently.

Custodial wallets are easier and more forgiving for beginners. And your choice between both types of wallets depends on what you are more comfortable with.

And remember, *"not your keys, not your coins."*`
        },
        {
          "id": "m2.1-page-5",
          "title": "Types of Wallets: Hot Wallets vs. Cold Wallets",
          "content": `You now know the difference between custodial and non-custodial. There's a second way wallets get categorized, and it cuts across the first one. The question this time isn't who holds the keys. It's where the keys live, and whether that place is connected to the internet.

A **hot wallet** is any wallet that is connected to the internet. Your MetaMask browser extension is a hot wallet. The wallet inside your Binance app is a hot wallet. They're called "hot" because they're always on, always accessible, always ready to sign a transaction. That convenience is real. You can send funds in seconds from anywhere.

The trade-off is exposure. A device connected to the internet is a device that can be attacked. Malware, phishing sites, browser exploits, and compromised apps — all of these are real vectors that target hot wallets specifically. The keys are on an internet-connected device, which means a sophisticated enough attacker has a potential path to them.

A **cold wallet** moves the keys completely offline. The most common form is a hardware wallet, a small physical device (Ledger and Trezor are the two most recognized brands) that stores your private key in a secure chip that never connects to the internet directly. When you want to sign a transaction, it’s signed on the device and passes only the signed output to your computer. The private key itself never touches an online environment.

Think of it like this. A hot wallet is cash in your trouser pocket. Convenient for daily use, but if you get pickpocketed, it's gone. A cold wallet is cash locked in a safe at home. Less convenient, but a pickpocket on the street has no path to it.

Most people who hold significant amounts of crypto use both. Hot wallets for everyday transactions and smaller amounts. Cold wallets for long-term storage of anything they can't afford to lose.

Cold wallets are non-custodial by nature since you hold the device and the keys. Hot wallets can be either custodial or non-custodial, depending on whether you or a third party controls the keys on that internet-connected device.`
        },
        {
          "id": "m2.1-page-6",
          "title": "Seed Phrases",
          "content": `Every non-custodial wallet gives you a **seed phrase** when you first set it up. It's usually 12 or 24 ordinary English words, presented in a specific order. Something like: *carpet, river, lion, table, frost, mirror, candle, stone, echo, branch, silver, dawn*.

That sequence of words is **everything**.

Your seed phrase is the master key from which your entire wallet is generated. Every private key, every public key, every address your wallet has ever produced or will ever produce traces back to that phrase. If your phone breaks, if you delete the app, if your laptop is stolen, anyone who has that seed phrase can restore your complete wallet on any compatible device and access every coin associated with it.

This is why wallets don't ask you to back up a long string of cryptographic characters. Twelve real words in the right order are much easier for a human to write down and store than a 256-bit private key. The words are just a human-readable version of the same underlying data.

The implications cut both ways. Your seed phrase lets you recover everything. It also means **anyone who gets hold of it can take everything**, instantly, from anywhere in the world. No confirmation, no delay, no reversal.

How to protect it is straightforward, even if it feels old-fashioned. Write it down on paper, by hand, the moment your wallet shows it to you. Store that paper somewhere physically secure. Some people use a fireproof safe. Some engrave it on a metal plate because paper can burn or get water-damaged. **Never** type it into any app, website, or chat. **Never** store it in your photos, notes app, or email. **Never** share it with anyone claiming to be support, because no legitimate wallet or exchange will ever ask for it.

A common mistake is assuming a screenshot is a safe backup. Screenshots live on your device and often sync automatically to cloud storage, which puts them on an internet-connected server, and that defeats the entire point of keeping the phrase offline.

Your seed phrase doesn't expire, doesn't need to be renewed, and doesn't care which device you use to restore from. It is the one thing that stands between you and permanent loss of access. Treat it accordingly.`
        },
        {
          "id": "video-wallet-demo",
          "title": "Video: How to Open a Wallet Step-by-Step",
          "type": "video",
          "youtubeId": "jBCXf8yylQA"
        },
        {
          "id": "quiz-2.1",
          "title": "Module 2.1 Quiz — Wallets: Your Gateway to Blockchain",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "Where does your cryptocurrency actually live?",
              "options": [
                "Inside your wallet app",
                "On the blockchain",
                "On your device's hard drive",
                "On the exchange you bought it from"
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.1-page-1"
            },
            {
              "id": "q2",
              "question": "What does a crypto wallet actually store?",
              "options": [
                "Your coins and tokens",
                "Your transaction history",
                "Your bank account details",
                "Your private and public keys"
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.1-page-1"
            },
            {
              "id": "q3",
              "question": "What is the relationship between a public key and a private key?",
              "options": [
                "They are created independently by the wallet provider",
                "The private key generates the public key through a one-way function",
                "The public key generates the private key",
                "They are identical and interchangeable"
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.1-page-2"
            },
            {
              "id": "q4",
              "question": "Which of the following best describes a private key?",
              "options": [
                "A password you create when setting up your wallet",
                "A code sent to your phone to confirm transactions",
                "A username that identifies you on the blockchain",
                "Cryptographic data that proves your right to move funds"
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.1-page-2"
            },
            {
              "id": "q5",
              "question": "What is a wallet address?",
              "options": [
                "The physical location of your wallet device",
                "Another name for your private key",
                "A compressed, shareable version of your public key",
                "A username assigned by your exchange"
              ],
              "correctAnswer": 2,
              "hintPageId": "m2.1-page-3"
            },
            {
              "id": "q6",
              "question": "What is the key difference between a custodial and a non-custodial wallet?",
              "options": [
                "In a custodial wallet, a third party holds your private keys",
                "Custodial wallets are free, non-custodial wallets cost money",
                "Non-custodial wallets can only hold Bitcoin",
                "Custodial wallets work online, non-custodial wallets work offline"
              ],
              "correctAnswer": 0,
              "hintPageId": "m2.1-page-4"
            },
            {
              "id": "q7",
              "question": "Why can a single wallet have multiple addresses?",
              "options": [
                "Each device you use gets its own address",
                "Exchanges assign new addresses to prevent fraud",
                "Each address holds a different type of cryptocurrency",
                "Multiple addresses are generated for privacy, all tracing back to the same private key"
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.1-page-3"
            },
            {
              "id": "q8",
              "question": "What happened to FTX customers when the exchange collapsed in 2022?",
              "options": [
                "Their wallets were automatically transferred to another exchange",
                "They lost access because the company holding their keys failed",
                "Their funds were moved to a government account",
                "They lost their passwords and could not log in"
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.1-page-4"
            },
            {
              "id": "q9",
              "question": "Which of the following best describes a cold wallet?",
              "options": [
                "A wallet app that requires two-factor authentication",
                "A wallet that only holds stablecoins",
                "A wallet stored on a cloud server for safekeeping",
                "A wallet that stores private keys completely offline"
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.1-page-5"
            },
            {
              "id": "q10",
              "question": "Which phrase best captures the risk of using a custodial wallet?",
              "options": [
                "\"Not your exchange, not your coins\"",
                "\"Not your keys, not your coins\"",
                "\"Not your address, not your coins\"",
                "\"Not your phone, not your coins\""
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.1-page-4"
            },
            {
              "id": "q11",
              "question": "What is a seed phrase?",
              "options": [
                "A code your wallet provider sends when you forget your password",
                "A password you set when creating your wallet account",
                "A list of all the addresses your wallet has ever generated",
                "A sequence of words that can restore your entire wallet on any compatible device"
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.1-page-6"
            },
            {
              "id": "q12",
              "question": "Which of the following is the most secure way to back up your seed phrase?",
              "options": [
                "Take a screenshot and save it to your iCloud or Google Photos",
                "Write it down on paper and store it in a physically secure location",
                "Save it in a password-locked Word document on your laptop",
                "Encrypt it and save it to a USB drive"
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.1-page-6"
            }
          ]
        }
      ]
    },
    {
      "id": "module-2.2",
      "title": "Module 2.2 — Exchanges: Where Tokens Trade",
      "pages": [
        {
          "id": "intro-video-2.2",
          "title": "Module Introduction",
          "type": "video",
          "youtubeId": "meqZh0uwl2M"
        },
        {
          "id": "m2.2-page-1",
          "title": "What Is a Centralized Exchange (CEX)?",
          "content": `When most people buy crypto for the first time, they do it through a **centralised exchange**. Binance, Coinbase, Kraken — these are all CEXs. They're the on-ramp most beginners walk through, and for good reason. They're familiar, they have customer support, and the experience feels close enough to online banking that it doesn't require much adjustment.

But a CEX is **not a bank**.

A bank holds your money and is legally obligated to protect it. In most countries, deposits are insured up to a certain amount. If your bank gets robbed, you don't personally lose your savings. The institution absorbs the loss, regulators get involved, and protections kick in. A centralised exchange has none of that infrastructure by default. When you deposit crypto onto an exchange, you are handing your assets to a private company and trusting them to keep them safe.

What a CEX actually does is act as a **middleman and a matchmaker**. It holds an order book, a live list of everyone who wants to buy and everyone who wants to sell, and matches them against each other. When you place an order to buy ETH, the exchange finds someone on the other side willing to sell at your price and executes the trade. You never deal with that person directly. The exchange sits in the middle, handles the transaction, and updates both balances in its internal records.

Those internal records are the other key thing to understand. When you trade on a CEX, the transaction **does not happen on the blockchain in real time**. The exchange updates its own database to reflect your new balance. The actual crypto moves on-chain *only* when you withdraw to your own wallet. Until then, what you have is an IOU from the exchange, not crypto you actually control.

That's the trade-off a CEX offers: convenience, speed, and familiarity, in exchange for custody of your assets and dependence on a private company's solvency and integrity.`
        },
        {
          "id": "m2.2-page-2",
          "title": "What Is a Decentralized Exchange (DEX)?",
          "content": `A **decentralised exchange** does what a CEX does — lets you trade one token for another — but without a company in the middle. No headquarters, no customer support line, no CEO, no account registration. Just code running on a blockchain, open to anyone with a wallet.

When you trade on a DEX, you are not trading with the exchange. You are trading with a **smart contract**, a self-executing piece of code that holds tokens and executes swaps automatically based on rules written into it. Nobody approves your transaction. Nobody can freeze your account. The contract just runs.

This is what **peer-to-protocol** means. On a CEX, you are trusting a company to match you with another person and hold everything in between. On a DEX, you connect your wallet directly to a protocol, and the swap happens on-chain, in real time, with no intermediary taking custody of your funds at any point.

Uniswap is the most well-known DEX. Pancakeswap, Curve, and Jupiter are others. Each one is essentially a set of smart contracts deployed on a blockchain, with a front-end interface sitting on top so the experience feels usable. The front-end can go down, but the contracts underneath cannot be switched off.

If a fintech app freezes your account because of a compliance flag. You call support, wait days, and hope for the best. That scenario is impossible on a DEX because there is no account to freeze. Your wallet connects, the smart contract executes, and the transaction either goes through or it doesn't based purely on whether you have the funds and the network accepts it.

DEXs have no customer support. If you send funds to the wrong address or approve a malicious contract, nobody can reverse it. The interface can also be genuinely confusing for beginners. And because anyone can list any token on most DEXs, scam tokens exist alongside legitimate ones with no filter in between.

A CEX holds your hand and holds your keys. A DEX holds neither.`
        },
        {
          "id": "m2.2-page-3",
          "title": "Reading a Trading Pair",
          "content": `Every trade on a crypto exchange involves a pair. Not just one asset, but two. That's because you can't buy something without paying for it with something else. A **trading pair** is simply the exchange rate between two assets, written in a specific format so you always know exactly what you're looking at.

Take **ETH/USDC**. The asset on the left is called the **base currency**. The asset on the right is called the **quote currency**. The number shown for the pair tells you how much of the quote currency you need to buy one unit of the base currency. So if ETH/USDC shows 3,200, that means one ETH costs 3,200 USDC right now.

The format never changes. Left is what you're buying. Right is what you're paying with. ETH/USDC means you're buying ETH and paying in USDC. Flip it to USDC/ETH and the whole thing reverses.

USDC is a **stablecoin**, a token pegged to the US dollar. Stablecoin-quoted pairs have become dominant in crypto markets because they offer a stable reference point in a highly volatile asset class. When you're trying to figure out how much your ETH is worth in real money terms, a pair like ETH/USDC gives you a clean answer. One ETH equals however many USDC the pair shows, and one USDC equals roughly one dollar.

Not all pairs involve stablecoins, though. In a pair like ETH/BTC, Ethereum is the base currency, and Bitcoin is the quote currency, meaning the price tells you how much BTC is required to buy one ETH. These crypto-to-crypto pairs exist because traders often want to move between assets directly without converting to dollars or stablecoins in between.

The airport currency exchange is a useful mental model here. When you land in Lagos and want naira for your dollars, the board shows NGN/USD with a number next to it. That number is the rate. Crypto trading pairs work the same way, just between digital assets instead of national currencies.

Popular pairs like BTC/USDT and ETH/USDC typically offer better liquidity and more stable trading conditions, making them the most practical starting point for beginners. **Liquidity** matters because it affects how quickly your trade executes and how close the price you get is to the price you see. Thinly traded pairs can *slip*, meaning the actual price you pay ends up worse than the one displayed.

Once you can read a pair, you can read any market on any exchange.`
        },
        {
          "id": "m2.2-page-4",
          "title": "Order Books vs. Liquidity Pools",
          "content": `When you place a trade on any exchange, something has to figure out the price and find the other side of your transaction. Two very different systems have been built to do that job. Understanding both is worth your time, even at an introductory level, because they represent two fundamentally different philosophies about how markets should work.

The first is the **order book**. An order book is a live list of open buy and sell orders on an exchange for a specific trading pair, showing both the price each user is willing to trade at and the volume they want to trade. Buy orders are called **bids**. Sell orders are called **asks**. When a bid and an ask match on price, the exchange executes the trade automatically. This is how Binance, Coinbase, and most centralised exchanges operate, and it's also how traditional stock markets like the Nigerian Exchange or the Johannesburg Stock Exchange have always worked.

The order book model is powerful for high-volume markets. Prices reflect real human decisions about what an asset is worth right now, and deep books with lots of activity mean your trade executes close to the price you see. The weakness is that it needs participants. A thinly traded pair with few buyers and sellers produces a messy, unreliable book where large trades can move the price significantly.

The second model is the **liquidity pool**. A liquidity pool is cryptocurrency locked in a smart contract on a decentralised exchange, funded by users called liquidity providers who deposit their assets to create a market. Instead of matching your trade against another person's order, traders swap directly against the pool, with prices determined algorithmically based on the relative quantities of tokens in it. No order book, no matching engine, no waiting for a counterparty. The smart contract is always there, always ready to trade.

This is how Uniswap works, and it's why DEXs became viable. You don't need a large active trading community to bootstrap a market. You just need enough tokens deposited into a pool.

Both models have real trade-offs, and that's a conversation worth having properly. We'll go deep on how liquidity pools actually work, what liquidity providers earn, and what the risks are in Week 4. For now, the key distinction is simply this: **order books match people with people, liquidity pools match people with pooled funds managed by code.**`
        },
        {
          "id": "m2.2-page-5",
          "title": "Buying, Selling, and Swapping",
          "content": `Three words get used constantly in crypto: buying, selling, and swapping. They sound interchangeable, but they mean different things in practice, and knowing the distinction helps you understand what's actually happening when you trade.

**Buying** means acquiring a token, usually by exchanging fiat currency or a stablecoin for it. You put in naira, cedis, dollars, or USDC, and you get ETH or BTC or whatever token you're purchasing in return. This is typically how most people enter crypto for the first time, through a CEX that accepts fiat deposits.

**Selling** is the reverse. You exchange a token back into fiat or a stablecoin. You're exiting a position, converting your crypto into something more stable or into local currency, you can withdraw to a bank account.

**Swapping** is different. It's a direct, wallet-to-wallet exchange of one digital asset for another without fiat currency, order books, or third-party custody. Instead of selling your ETH for dollars and then buying USDC, a swap takes you from ETH to USDC in a single step. All you need to swap is a self-custody wallet, funds in that wallet, and enough of the network's native token to cover gas fees.

Swapping happens primarily on DEXs. The flow is straightforward: you connect your wallet, select the token you're sending, select the token you want to receive, review the rate and fees, and confirm. The smart contract handles the rest.

One thing worth knowing before you swap: **slippage**. When you request a swap, the price shown is an estimate based on the current state of the liquidity pool. By the time your transaction is processed, the price may have shifted slightly. That difference is called slippage. Most DEX interfaces let you set a slippage tolerance, a maximum percentage you're willing to accept above or below the quoted price. Setting it too tight means your transaction might fail. Setting it too wide means you might get a worse rate than expected.

CEXs also offer swapping features, often labelled "Convert" on platforms like Binance. These use the exchange's internal liquidity reserves and offer a simpler interface for users who don't want to navigate a full trading interface.`
        },
        {
          "id": "demo-cexdex",
          "title": "Interactive Demo: CEX vs. DEX Trade Simulator",
          "type": "interactive",
          "componentId": "CexDexDemo"
        },
        {
          "id": "quiz-2.2",
          "title": "Module 2.2 Quiz — Exchanges: Where Tokens Trade",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "What is the key difference between a CEX and a bank?",
              "options": [
                "CEXs charge higher fees than banks",
                "CEXs only support crypto-to-crypto trading",
                "Banks have legal deposit protections; CEXs are private companies with no such guarantees by default",
                "Banks are available 24/7, CEXs are not"
              ],
              "correctAnswer": 2,
              "hintPageId": "m2.2-page-1"
            },
            {
              "id": "q2",
              "question": "When you trade on a CEX, when does your transaction actually settle on the blockchain?",
              "options": [
                "After the exchange verifies your identity",
                "Within 10 minutes of the trade completing",
                "Immediately when you place the order",
                "Only when you withdraw to your own wallet"
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.2-page-1"
            },
            {
              "id": "q3",
              "question": "What does it mean to trade on a DEX?",
              "options": [
                "You trade via smart contracts with no third party holding your funds",
                "You trade through a licensed broker who processes orders manually",
                "You trade using fiat currency converted by the platform",
                "You trade against a company's internal reserves"
              ],
              "correctAnswer": 0,
              "hintPageId": "m2.2-page-2"
            },
            {
              "id": "q4",
              "question": "In the trading pair ETH/USDC, what does the price tell you?",
              "options": [
                "The average value of both tokens combined",
                "How many ETH you need to buy one USDC",
                "The current dollar value of the pair as a whole",
                "How much USDC you need to buy one ETH"
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.2-page-3"
            },
            {
              "id": "q5",
              "question": "What is an order book?",
              "options": [
                "A smart contract that automatically prices tokens based on pool ratios",
                "A list of open buy and sell orders on an exchange for a specific trading pair",
                "A log of user accounts and their balances on a CEX",
                "A record of all transactions ever processed on a blockchain"
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.2-page-4"
            },
            {
              "id": "q6",
              "question": "How does a liquidity pool determine the price of a token swap?",
              "options": [
                "The price is fixed by the exchange at the start of each trading day",
                "The exchange matches the swap against the highest available bid",
                "A team of market makers manually sets prices based on demand",
                "An algorithm prices the swap based on the ratio of tokens in the pool"
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.2-page-4"
            },
            {
              "id": "q7",
              "question": "What is slippage in the context of a token swap?",
              "options": [
                "The fee charged by a DEX for processing a transaction",
                "The loss incurred when withdrawing funds from a CEX",
                "The difference between the quoted swap price and the actual executed price",
                "The delay between placing an order and it being confirmed on-chain"
              ],
              "correctAnswer": 2,
              "hintPageId": "m2.2-page-5"
            },
            {
              "id": "q8",
              "question": "What is the main practical difference between swapping and selling crypto?",
              "options": [
                "Swapping converts crypto to fiat; selling exchanges one token for another",
                "Selling converts crypto to fiat or stablecoins; swapping exchanges one token directly for another",
                "Swapping requires identity verification; selling does not",
                "Selling is only available on DEXs; swapping works on both"
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.2-page-5"
            }
          ]
        }
      ]
    },
    {
      "id": "module-2.3",
      "title": "Module 2.3 — The Transaction Lifecycle",
      "pages": [
        {
          "id": "intro-video-2.3",
          "title": "Module Introduction",
          "type": "video",
          "youtubeId": "A8Z-W0e7vxQ"
        },
        {
          "id": "m2.3-page-1",
          "title": "What Happens When You Send Crypto?",
          "content": `You open your wallet app, type in an address, enter an amount, and hit send. Two minutes later, the person on the other end has it. From the outside, it looks like moving money on any app you've ever used.

What's happening underneath is completely different.

When you send crypto, you're not moving coins from one place to another the way you'd slide cash across a table. No coins are travelling anywhere. What you're actually doing is **broadcasting a message to a global network of computers**, telling them to update a shared record. You're saying: "The balance associated with this address should go down. The balance associated with that address should go up. And here's my cryptographic proof that I have the right to make this request."

The network doesn't trust you because you say so. It trusts you because the math checks out.

That proof is your **private key**, doing its job invisibly in the background. Your wallet uses it to sign the transaction before sending it out. Anyone on the network can verify the signature without ever seeing your private key. They just need your public key, which is derived from it. If the signature is valid, the transaction is legitimate. If not, the network rejects it outright.

Once your signed transaction leaves your wallet, it doesn't go straight into the blockchain. There's a waiting room first. Thousands of other transactions are sitting there too, all competing for the same limited space in the next block. Miners or validators pick which ones make the cut, and they don't pick randomly. They pick based on who's offering to pay more. That's where **gas fees** come in, and we'll get into the mechanics of that on the next page.

The full journey from "send" to "confirmed" typically takes anywhere from a few seconds to several minutes, depending on the network and how much you're willing to pay to skip the queue. On Ethereum, during a busy period, it can cost more in fees than the amount you're sending. On Solana, it's fractions of a cent. The tradeoffs between speed, cost, and decentralisation show up here as clearly as anywhere in crypto.

What you're about to learn across this module is that journey, broken into each stage. By the end, when you look at any transaction on a block explorer, you'll know exactly what every field means and why it matters.`
        },
        {
          "id": "m2.3-page-2",
          "title": "From Creation to Confirmation",
          "content": `A transaction doesn't just happen. It moves through a series of distinct stages, and each one has a job to do. Miss one, and the transaction either fails, stalls, or never makes it onto the chain at all.

Here's the full journey.

### **Stage 1: Creation**
When you hit send, your wallet builds the transaction. Behind the scenes, it's assembling a small package of data: your address, the recipient's address, the amount, the gas fee you're willing to pay, and a few technical fields the network needs to process it correctly. Then it takes that package and signs it with your private key. That signature is what makes the transaction yours. Without it, the network won't touch it.

### **Stage 2: Broadcast**
Your signed transaction gets sent out to the network. Your wallet connects to one or more nodes, hands them the transaction, and those nodes pass it along to their neighbours, who pass it to theirs. Within seconds, copies of your transaction are sitting on nodes all over the world. This is what "**broadcast**" actually means in blockchain — not one message to one server, but a ripple across a distributed network.

### **Stage 3: The Mempool**
Every node keeps a waiting room called the **mempool**, short for memory pool. Your transaction sits here while it waits to be picked up and included in a block. The mempool is public. Anyone can see what's in it, including how much fee each transaction offers. When the network is quiet, the mempool clears fast. During busy periods, it backs up badly. In May 2021, during the peak of the NFT boom, Ethereum's mempool had hundreds of thousands of transactions stuck waiting. People were paying over $100 in gas just to jump the queue.

### **Stage 4: Validation**
Miners or validators are constantly watching the mempool, pulling out transactions to build their next block. Before including yours, they verify it. They check that the signature is valid. They check the sending address actually has the funds it's claiming to send. They check it hasn't already been spent. If everything passes, your transaction earns its place in the block being built. If anything fails, it gets dropped.

### **Stage 5: Inclusion in a Block**
Your transaction gets bundled together with hundreds or thousands of others into a new block. That block gets a unique identifier based on its contents, plus a reference to the block before it, which is exactly what makes it a chain. The miner or validator who builds the block then broadcasts it to the network for everyone else to verify and accept.

### **Stage 6: Confirmation**
The moment your transaction's block is added to the chain, you have **one confirmation**. One block later, you have two. Each new block added on top makes it harder for anyone to go back and tamper with your transaction, because they'd have to redo all the work that came after it.

Most applications consider a transaction final after a certain number of confirmations, not just one. Bitcoin exchanges typically wait for six confirmations before crediting a deposit. On Ethereum, the threshold is lower because blocks come faster, but the logic is the same. **Confirmations are how the network builds certainty over time.**

From the moment you hit send to full confirmation, the whole process plays out without a central server deciding anything. The rules are in the protocol, and the network enforces them automatically.`
        },
        {
          "id": "m2.3-page-3",
          "title": "Gas Fees",
          "content": `Every transaction on a blockchain costs something beyond the amount you're sending. That cost is the **gas fee**, and it exists for a reason that has nothing to do with anyone making money off you.

Processing transactions takes real computational work. Nodes have to verify signatures, check balances, update state, and store the result permanently. Gas is how the network measures that work and compensates the people doing it. Without fees, anyone could flood the network with millions of junk transactions for free, grinding everything to a halt. The fee is what makes spam expensive.

The name "gas" comes from Ethereum, where the model was made explicit. Different operations cost different amounts of gas depending on how computationally heavy they are. A simple transfer costs less gas than a complex smart contract interaction, the same way a short drive burns less fuel than a cross-country trip. You're paying for the computation, not just the transfer.

How fees actually work depends on the network you're using.

On Ethereum, the fee has two components: a **base fee** that the network sets automatically based on how busy things are, and an optional **tip** you can add to make your transaction more attractive to validators. The base fee is burned, meaning it's destroyed rather than paid to anyone. The tip goes to the validator who includes your transaction.

On many other networks, and increasingly on Ethereum through modern wallets, you don't manually set anything. The wallet calculates the appropriate fee and shows it to you before you confirm. Some networks go further: they check upfront whether your wallet balance covers both the amount you're sending and the fee. If it doesn't, the transaction is rejected immediately, before it ever reaches the mempool. You don't get stuck waiting. You just get told to top up and try again.

This upfront rejection is actually better UX than the alternative. Ethereum's mempool model means an underfunded transaction can sit in the queue for hours, or get dropped entirely, which is confusing if you don't know what happened to it.

**What happens when the fee is too low?**

On networks where you still set fees manually, setting yours too low doesn't guarantee failure. It just moves you to the back of the queue. Validators are rational. They fill blocks with the highest-paying transactions first. If the network is congested and you've offered a fee below what others are paying, your transaction waits. If it waits long enough without being picked up, nodes will eventually drop it from the mempool entirely. Nothing is lost, your funds never left your wallet, but you'll need to resubmit.

During peak periods, this gets expensive fast. When demand spikes on Ethereum, base fees can rise sharply within minutes. In 2021, during the minting of popular NFT collections, gas fees regularly hit $200 to $500 for a single transaction. People were paying more in fees than the asset they were buying was worth.

Networks like Solana, Avalanche, and BNB Chain were built partly in response to this problem. They process transactions faster and charge fractions of a cent. The tradeoff, as always, is in how decentralised and secure they actually are — but for everyday transfers, the difference in cost is real and significant.

Gas fees are one of those things that feel like a tax until you understand why they exist. Once you do, they read more like a market: **when the network is in demand, it costs more to use it.**`
        },
        {
          "id": "m2.3-page-4",
          "title": "Reading a Transaction on a Block Explorer",
          "content": `Every transaction that has ever been confirmed on a public blockchain is visible to anyone with an internet connection. No account needed. No permission required. You just need to know where to look and what you're looking at.

The tool for this is called a **block explorer**. Think of it as a search engine for blockchain data. Type in a wallet address, a transaction hash, or a block number, and the explorer pulls up everything the network recorded about it. **Etherscan** is the most widely used one for Ethereum. **Solscan** covers Solana. **mempool.space** handles Bitcoin. Every major network has at least one.

A **transaction hash** is your starting point. It's the unique identifier assigned to your transaction the moment it was created — a long string of letters and numbers that looks something like this:

\`0x4e3a7b2f...9c81d\`

No two transaction hashes are the same. If someone tells you a payment was sent, you can ask for the hash and verify it yourself in under a minute.

### **What you'll see when you open a transaction.**

The explorer breaks the transaction down into fields. Here's what each one actually means.

**Status** tells you whether the transaction succeeded, failed, or is still pending. A confirmed transaction shows a green "Success" tag. A failed transaction still gets recorded on the chain and still costs gas — the network did the work, even if the outcome wasn't what you wanted.

**Block** shows which block your transaction was included in, and how many blocks have been added on top since then. That second number is your confirmation count. The higher it is, the more settled your transaction is.

**Timestamp** is the exact date and time the block was confirmed. This is immutable. Nobody can change when a transaction happened.

**From and To** are the wallet addresses involved. The sender and the recipient, in plain view. This is why blockchain is described as **pseudonymous** rather than anonymous. The addresses don't have names attached by default, but the activity tied to them is completely public. If anyone ever connects a wallet address to a real identity, every transaction that address ever made becomes traceable.

**Value** is the amount of cryptocurrency transferred.

**Transaction Fee** is what was paid to the network. On Ethereum, the explorer will also show you the gas limit, the gas used, and the gas price, so you can see exactly how the fee was calculated. **Gas limit** is the maximum the sender was willing to spend on computation. **Gas used** is how much was actually consumed. If gas used is lower than the limit, the difference is refunded.

**Nonce** is a counter that tracks how many transactions a wallet has sent. Every wallet starts at zero. Your first transaction has a nonce of 1, your second has a nonce of 2, and so on. This field exists to prevent the same transaction from being processed twice and to ensure your transactions are executed in the right order.

### **Why this matters beyond curiosity.**

Block explorers aren't just for checking whether a payment arrived. They're how you verify things in a space where trust is supposed to be optional. An NFT project claiming a certain wallet donated proceeds to charity? Check the explorer. A token team saying liquidity is locked? The transaction that locked it is on-chain. A freelancer in Lagos waiting on a cross-border payment that the sender claims was sent? The hash either exists or it doesn't.

The data is there. Anyone can read it. That transparency is one of the things that makes public blockchains genuinely different from traditional financial systems, where transaction records sit inside private databases that you have no access to.`
        },
        {
          "id": "m2.3-page-5",
          "title": "Interactive Demo: Follow a Live Transaction",
          "type": "interactive",
          "componentId": "TransactionLifecycleDemo"
        },
        {
          "id": "quiz-2.3",
          "title": "Module 2.3 Quiz — The Transaction Lifecycle",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "When you send crypto, what are you actually doing?",
              "options": [
                "Moving digital coins from your device to the recipient's device",
                "Instructing your bank to update its records on your behalf",
                "Broadcasting a signed message asking the network to update a shared record",
                "Transferring ownership through a central exchange database"
              ],
              "correctAnswer": 2,
              "hintPageId": "m2.3-page-1"
            },
            {
              "id": "q2",
              "question": "What is the mempool?",
              "options": [
                "A type of crypto wallet used for pending transactions",
                "A private database maintained by the blockchain's founders",
                "The final record where confirmed transactions are permanently stored",
                "A waiting room where transactions sit before being included in a block"
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.3-page-2"
            },
            {
              "id": "q3",
              "question": "Why do gas fees exist?",
              "options": [
                "To generate profit for the blockchain's founding team",
                "To compensate the network for the computational work of processing transactions",
                "To slow down transactions and prevent the network from growing too fast",
                "To replace the role of interest rates in traditional banking"
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.3-page-3"
            },
            {
              "id": "q4",
              "question": "What happens if you set your gas fee too low on a network where fees are manual?",
              "options": [
                "Your transaction is immediately rejected and your funds are lost",
                "The network automatically tops up the fee from your wallet balance",
                "Your transaction is flagged as suspicious and frozen",
                "Your transaction waits at the back of the queue and may eventually be dropped"
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.3-page-3"
            },
            {
              "id": "q5",
              "question": "A transaction has a \"Success\" status on the block explorer but the gas fee was still charged. Why?",
              "options": [
                "The explorer is showing an error — failed transactions are never charged",
                "Gas fees are only charged on Bitcoin, not Ethereum",
                "The network did the computational work regardless of outcome, so the fee applies",
                "The fee was charged by the wallet app, not the blockchain"
              ],
              "correctAnswer": 2,
              "hintPageId": "m2.3-page-4"
            },
            {
              "id": "q6",
              "question": "What does the nonce field in a transaction record tell you?",
              "options": [
                "The encryption method used to secure the transaction",
                "How many confirmations the transaction has received",
                "The exchange rate at the time the transaction was created",
                "How many transactions that wallet has sent, used to order them correctly"
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.3-page-4"
            },
            {
              "id": "q7",
              "question": "Why is blockchain described as pseudonymous rather than anonymous?",
              "options": [
                "Wallet addresses are encrypted and only visible to regulators",
                "Transactions are hidden for 30 days before becoming public",
                "Wallet addresses are public and all activity tied to them is visible, even without names attached",
                "Only the sender can see transaction details, not the recipient"
              ],
              "correctAnswer": 2,
              "hintPageId": "m2.3-page-4"
            },
            {
              "id": "q8",
              "question": "What is a transaction hash?",
              "options": [
                "The gas fee calculation formula used by the network",
                "A unique identifier assigned to a transaction that lets anyone look it up on a block explorer",
                "The encrypted version of a wallet's private key",
                "A code generated by the recipient to request payment"
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.3-page-4"
            }
          ]
        }
      ]
    },
    {
      "id": "module-2.4",
      "title": "Module 2.4 — Consensus Mechanisms",
      "pages": [
        {
          "id": "m2.4-page-0",
          "title": "Module Introduction",
          "type": "video",
          "youtubeId": "L1niiOUzxMY",
          "content": "In this module, we look at how thousands of strangers agree on a single version of the truth without a leader. We'll break down Proof of Work, Proof of Stake, and why these mechanisms are the heartbeat of any decentralized network."
        },
        {
          "id": "m2.4-page-1",
          "title": "What Is Consensus and Why Does a Network Need It?",
          "content": `Imagine you and **nine friends** are splitting a restaurant bill. Nobody has cash, so you're all transferring money to one person who'll pay. The problem is simple: you need **everyone to agree** on how much each person owes before any transfers happen. If four of you have different numbers in your heads, the whole thing falls apart.

Now scale that up. Not ten friends around a table, but **thousands of computers** scattered across the world, none of which know or trust each other, all trying to agree on a **single shared record** of who owns what. **No manager** to make the final call. **No central server** holding the official version. Just a network of strangers, each with their own copy of the ledger, trying to stay **in sync**.

That is the core challenge of a decentralised blockchain. And the solution to it is called a **consensus mechanism**.

### **Why agreement is harder than it sounds**

In a traditional system, agreement is simple because there's **one authority**. When you check your bank balance, you're looking at **one database**, controlled by **one institution**. If there's a dispute, the bank decides. You might not like the answer, but there *is* an answer.

A blockchain has **no such authority**. Every node on the network holds a copy of the ledger. When a new transaction comes in, every node needs to update its copy in the **exact same way**. If even one node gets a different version, or if a bad actor tries to inject a fraudulent transaction, the whole system could fracture into competing, contradictory histories.

Computer scientists identified this problem formally in 1982, in a paper called the **Byzantine Generals Problem**. The setup: several army generals need to coordinate an attack, but they can only communicate through messengers, and some of the generals might be **traitors** trying to sabotage the plan. How do the loyal generals reach a **reliable agreement** when they can't trust everyone sending them information?

Replace "generals" with nodes in a network, and "messengers" with communication channels between them. Any distributed system faces an equivalent coordination problem whenever it cannot assume that all participants are honest and that all messages are delivered faithfully. Blockchain's **consensus mechanisms** are the answer to that problem.

### **What consensus actually does**

Consensus mechanisms have two principal purposes: they **validate transactions** to prevent issues like double-spending, and they **incentivise network participants** to follow the established rules.

**Double spending** is worth pausing on. With physical cash, you can't spend the same note twice. Once it's in someone else's hand, it's gone. **Digital information doesn't work that way.** A digital file can be copied perfectly. Without a system to track which transactions are valid and in what order they happened, someone could theoretically send the same crypto to two different people at once. Without consensus, a user could spend money in one place and then spend that same money again before the first transaction settles.

Consensus is what makes that **impossible**. Every transaction that hits the network gets checked against the agreed-upon history. If it contradicts what the network already knows to be true, it gets **rejected**.

### **Why the rules need to be in the protocol, not in a person**

The whole point of a decentralised network is that **no single person or company controls it**. But that creates an obvious problem: if no one's in charge, how does the network make decisions?

The answer is that the rules are written into the **code** that every node runs. Consensus isn't a meeting, and there's no vote that anyone calls. It's an **automatic process** that plays out across the network every time a new block is proposed. Nodes check the block against the rules. If it passes, it gets accepted. If it doesn't, it gets ignored.

Different blockchains have built different systems for how that agreement gets reached. Some use **computational competition**. Some use **economic stakes**. Some use **elected representatives**. Each approach has different tradeoffs in security, speed, and decentralisation.

Those are the mechanisms we'll cover across the rest of this module.`
        },
        {
          "id": "m2.4-page-2",
          "title": "Proof of Work",
          "content": `Bitcoin had to solve a problem nobody had fully cracked before. How do you get thousands of strangers, scattered across the world, to agree on a **shared financial record** without any of them trusting each other and without anyone being in charge?

Satoshi Nakamoto's answer was to **make disagreement expensive**.

### **The core idea**

**Proof of Work** is a consensus mechanism where **miners** compete to append blocks and earn new currency, with each miner's success probability proportional to the **computational effort** they expend. Instead of voting, instead of reputation, instead of identity, the system uses **raw energy and computation** as the currency of trust. You prove you're serious by burning real-world resources. **Cheating costs you money**, and the math makes sure of it.

The people doing this work are called **miners**. They're running specialised hardware that does one thing extremely fast: **guessing numbers**.

### **What miners are actually doing**

Every new block of transactions needs a kind of **seal** before it can be added to the chain. That seal comes from solving a **cryptographic puzzle**. The puzzle works like this: take all the data in a block, add a random number (called a **nonce**), run it through a **hash function**, and check if the result meets a specific condition. On Bitcoin, that condition means the output hash has to start with a certain number of zeros. The **more zeros** required, the **harder** the puzzle.

You **cannot** guess the answer. You have to try millions or billions of random numbers until you get a hash that starts with enough zeros. There's no shortcut. There's no clever trick. It's **pure trial and error** at enormous speed.

The **first miner** who finds a block that meets the condition wins the right to register it on the blockchain and gets the associated **monetary reward**. Every other miner immediately stops working on that block and starts racing on the next one.

### **Why this produces consensus**

When a miner finds a valid block, they broadcast it to the network. Every other node **checks the solution independently**. Verifying a correct answer is **trivially easy**, even though finding it was brutally hard. That asymmetry is the whole point. A key feature of proof-of-work is its **asymmetry**: the work must be moderately hard on the prover's side but easy to check for the verifier.

If the block checks out, nodes accept it and add it to their copy of the chain. The network agrees not because anyone declared a winner, but because the **math is self-evident**.

### **The difficulty adjustment**

More miners joining the network means puzzles get solved faster. Left unchecked, blocks would be added in seconds rather than minutes, which creates **security problems**. So Bitcoin adjusts **automatically**. Every **2,016 blocks**, nodes recalculate a new target to keep block production approaching a stable interval of **10 minutes**, regardless of how many computers are working on it. If miners leave and the network slows down, the difficulty drops. If more miners join, it rises. The 10-minute rhythm holds either way.

### **The reward and why it matters**

Miners who win a block earn two things: **newly created bitcoin** and the **transaction fees** from every transaction in that block. After the April 2024 halving, the block reward stands at **3.125 BTC**, down from 6.25 BTC. This reward **halves** roughly every four years, a built-in feature of Bitcoin's design that controls how many new coins enter circulation over time.

The reward is what **makes the whole system work**. It means miners have a financial reason to follow the rules **honestly**. A miner who tries to include a fraudulent transaction or tries to rewrite past blocks would need to outpace the entire rest of the network's combined computing power. The **electricity bill** for that attempt would be astronomical, and even if it worked, the attack would likely crash the value of the bitcoin they were trying to steal. **Cheating is too expensive**, so the system rewards honesty.

### **The tradeoffs**

Proof of Work is **battle-tested**. Bitcoin has been running on it since 2009 without a successful attack on its consensus layer. The **security is real**.

But the energy cost is also real. Bitcoin mining consumes approximately **175 TWh per year**, more than the entire country of Poland, and roughly 0.5% of global electricity consumption.`
        },
        {
          "id": "m2.4-page-3",
          "title": "Proof of Stake",
          "content": `Proof of Work works. Bitcoin has proven that for over fifteen years. But it has one problem that was always going to matter eventually: it is **extremely expensive to run**. Not just in money, but in energy. And as blockchains started to grow in ambition, that cost became harder to justify.

Ethereum started on Proof of Work, just like Bitcoin. Then, in September 2022, after years of preparation, it switched. The event was called **The Merge**, and it reduced Ethereum's energy consumption by approximately **99.84%** overnight — one of the most significant environmental improvements ever achieved by a major blockchain network.

What it switched to was **Proof of Stake**. And the logic underneath it is completely different.

### **The shift in what secures the network**

In Proof of Work, security comes from **energy**. Miners burn real electricity to compete, and that cost is what makes cheating irrational. The **honest path is the profitable path**, because the dishonest one costs too much.

Proof of Stake keeps the same logic of making dishonesty expensive, but **replaces energy with money**. A proof-of-stake network secures itself via **staked cryptocurrency**. Instead of expending computing energy to solve a puzzle, the nodes validating new transactions **stake their own value as collateral**. These nodes then run efficiently and honestly to avoid losing that collateral.

The people doing this are called **validators**, not miners. They're not racing to solve puzzles. They're putting **skin in the game**.

### **How becoming a validator works**

To participate as a validator, a user must deposit **32 ETH** into a deposit contract and run three separate pieces of software: an execution client, a consensus client, and a validator client. Once that deposit is confirmed and they clear an activation queue, they're live on the network.

Not everyone has 32 ETH sitting around, and this is where **staking pools** come in. Staking pools allow users to combine smaller amounts of ETH with others, letting anyone participate in Ethereum's proof-of-stake system without hitting the full 32 ETH minimum on their own.

### **How blocks get produced**

Validators **don't compete** to create blocks. Instead, they are chosen **at random** by an algorithm. Time on Ethereum is divided into 12-second windows called **slots**. In each slot, one validator is randomly selected to propose the next block. The rest of the validators then review it and vote on whether it's valid. This vote is called an **attestation**.

To come to a consensus, at least **66%** of the total staked ETH has to vote in favour of a particular set of blocks. Blocks voted for by 66% or more of the stake become **finalised**, meaning they can't be removed or reorganised. That finality is **faster and more explicit** than Bitcoin's confirmation model, where you're waiting for enough blocks to pile up on top of your transaction before you feel safe.

### **What happens when a validator cheats?**

This is where the system gets sharp. If a validator tries to defraud the network — for example, by proposing multiple blocks when they ought to send one, or sending conflicting attestations — some or all of their staked ETH can be **destroyed**.

This destruction is called **slashing**. It's not a fine. It's not a suspension. **The ETH is gone.** A validator caught behaving dishonestly doesn't just miss out on rewards — they lose part of the money they put up to play. Dishonest validators face a **penalty** that destroys part or all of their staked ETH and forces them off the network within **36 days**. The bigger the attempted attack, the bigger the slash.

That threat is what makes the system **self-policing**. Validators have a direct financial reason to stay honest. The stake is **collateral**, not just a ticket to participate.

### **How this compares to Proof of Work**

Proof of Stake is **more decentralised** than Proof of Work in one respect: mining hardware arms races tend to price out individuals and small organisations. With Proof of Stake, the cost of staking and the percentage return on that stake are the **same for everyone**. You don't need a warehouse full of specialised chips. A home computer and 32 ETH are enough to run a validator.

That said, PoS isn't without tradeoffs. **Liquid staking services**, where users pool their ETH with large providers, have raised real concerns about whether staking power is becoming concentrated. When a handful of platforms control a large share of staked ETH, some of the decentralisation advantage starts to erode.

Proof of Stake is the **dominant model** for newer blockchains today. It's also the foundation for the variations we'll cover next.`
        },
        {
          "id": "m2.4-page-4",
          "title": "Delegated Proof of Stake and Other Mechanisms",
          "content": `PoW and PoS are the two dominant models, but they're not the only ones. As blockchain use cases expanded beyond open public networks into enterprises, high-speed apps, and new scaling approaches, developers kept asking the same question: what if we adjusted the rules to fit the problem better?
              
Three variations are worth knowing: **Delegated Proof of Stake**, **Proof of Authority**, and **Proof of History**.

### **Delegated Proof of Stake (DPoS)**

Regular Proof of Stake allows any validator meeting the minimum stake threshold to participate. That openness is good for decentralisation, but it creates a coordination problem: the more validators there are, the slower consensus gets. DPoS fixes that by shrinking the validator set on purpose.

**DPoS** is a blockchain consensus design in which token holders elect a small set of participants to produce blocks on behalf of the network. The change is bigger than it first appears: DPoS changes where the system places trust, where it gets its performance, and how tightly consensus becomes intertwined with governance.

In practice, token holders vote for delegates, also called witnesses or block producers, using their tokens as voting weight. A limited number of top-voted delegates, usually between 21 and 101, depending on the network, earn the right to produce blocks in that round. If a delegate behaves dishonestly or goes offline too often, token holders can vote them out. Voters maintain control because they can reassign their votes anytime.

The **speed gains** are real. Smaller, pre-selected committees are easier to coordinate, so block times can be shortened significantly. EOSIO achieves 0.5-second blocks, Steem achieves 3-second blocks, and Networks like EOS and TRON run on DPoS today.

The tradeoff is equally real. Concentrating block production among a small elected group means the system is **more centralised** than standard PoS.

### **Proof of Authority (PoA)**

**Proof of Authority** is a reputation-based consensus algorithm that introduces a practical and efficient solution for blockchain networks, especially private ones. Rather than staking coins, block validators stake their own **reputation** instead. PoA blockchains are secured by validating nodes that are arbitrarily selected as trustworthy entities.

The term was coined by **Gavin Wood**, co-founder of Ethereum, in 2015. The model works like this: a known, vetted group of validators is authorised to produce blocks, usually in a fixed rotation. Their identities are public. Because their real-world reputation is on the line, they have a strong personal incentive to stay honest. Misbehaviour damages who they are.

This approach produces fast, cheap, predictable transactions. Since PoA requires only a limited number of actors, the network can afford to update the blockchain more frequently, reduce the time between each block, and process more transactions with fees close to zero.

The **obvious problem**: it's not decentralised in any meaningful sense. You're trusting a small group of identified people, which is exactly the kind of trust model blockchain was supposed to remove. PoA is best suited for enterprise-level networks like blockchain consortia and private networks where some level of trust already exists among the members. Supply chain tracking, internal corporate ledgers, and testing environments are the homes of PoA, not public open networks.

### **Proof of History (PoH)**

**Proof of History** is Solana's contribution, and it's worth being precise about what it actually is. Proof of History is **not** a consensus algorithm in itself, but a component that aids in achieving consensus. Solana still uses Proof of Stake for consensus, but PoH is the mechanism that makes that PoS system dramatically faster.

The problem it solves is about **time**. In distributed networks, nodes across the world don't share a reliable clock. Agreeing on the order of events requires coordination, and that coordination takes time. Proof of History eliminates most of that delay by building a verifiable timeline directly into the blockchain itself.

Proof of History acts as a **cryptographic clock**, ensuring a verifiable order of events on the blockchain. By creating a tamper-proof sequence of timestamps, PoH allows Solana to process over 65,000 transactions per second, making it one of the fastest blockchains. Each output in the sequence feeds into the next hash, creating a chain of timestamps that anyone can verify but nobody can fake or reorder.

The result is that validators don't need to spend time arguing about what happened when the record already proves it. That freed-up coordination time is exactly where Solana gets its speed.

### **The pattern across all of these**

Every mechanism on this page is making the same tradeoff at a different point: **speed and efficiency** on one side, **decentralisation and openness** on the other. DPoS narrows the validator set for speed. PoA narrows it further and swaps stake for identity. PoH reorganises the time problem to let PoS run faster without shrinking the validator set at all.

No version wins on every dimension. The right choice depends on what the network is actually for, who it's serving, what it needs to process, and how much trust it can reasonably place in its participants.`
        },
        {
          "id": "m2.4-page-5",
          "title": "Consensus, Security, and Decentralisation",
          "content": `Every consensus mechanism you've seen in this module is an answer to the same underlying question: how do you build a network that thousands of strangers can use, that nobody controls, and that nobody can successfully cheat? The mechanisms differ. The question never changes.

But as you look across Bitcoin, Ethereum, DPoS chains, and PoA networks, a pattern emerges. No mechanism wins on every dimension at once. They each make deliberate choices, and those choices have consequences that show up in the real world in how fast transactions settle, in how expensive it is to attack the network, and in who actually gets to participate.

### **The trilemma**

**Vitalik Buterin** coined the term "**blockchain trilemma**" to describe the trade-off between three critical aspects of blockchain technology: **security**, **scalability**, and **decentralisation**. The idea is that improving one of these properties tends to weaken at least one of the others.

A network might be highly decentralised and secure, but slow. Alternatively, it might be incredibly fast and secure but run on a small number of centralised servers.

DPoS chains close the speed gap by shrinking the validator set. Fewer validators means faster coordination, which means faster blocks. But it also means the network is placing significant trust in a small elected group. If those delegates collude, go offline, or get compromised, the network's security rests on a much narrower base. The speed is real. So is the centralisation risk.

PoA takes it further. Validators are known, vetted entities with their reputations on the line. The network runs fast and cheaply. But it has quietly abandoned the core promise of a public blockchain: that no one needs to be trusted, and no one needs permission to participate.

### **What each mechanism is actually saying**

When a blockchain chooses its consensus mechanism, it's making a statement about who it's for and what it values.

**Bitcoin's** choice of Proof of Work is a statement that the network's security must be grounded in something physical and undeniable; **electricity and hardware**, and that anybody in the world with a computer should, in principle, be able to participate, even if the economics have since favoured large mining operations. The 10-minute block time isn't a bug. It's a deliberate consequence of taking security seriously.

**Ethereum's** shift to Proof of Stake was a statement that the same level of security could be maintained with far less energy, and that the network needed to be faster and cheaper to build the kind of applications its community was building. It accepted more architectural complexity in exchange for efficiency and accessibility.

**Solana's** approach, combining PoH with PoS, is a statement that coordination time itself is the bottleneck, and that if you can solve the time problem cryptographically, you can keep the validator set large without sacrificing speed. The network processes thousands of transactions per second but requires validators to run powerful hardware, which has concentrated validation in ways the community debates actively.

### **Why does this matter for anyone using these networks?**

If you're sending a small payment to a friend in Accra or Lagos and you need it to arrive in seconds for under a cent, Bitcoin's base layer is the wrong tool. If you're storing a large amount of value and you need to know that the network securing it is as battle-tested and attack-resistant as anything in the world, Bitcoin is hard to beat. If you're building an application that needs smart contracts, fast finality, and a large developer ecosystem, Ethereum or a PoS chain is probably where you'll look.

Understanding consensus tells you which chains have made which bets, what they've traded away to get there, and whether those tradeoffs match what you actually need from them.`
        },
        {
          "id": "m2.4-page-6",
          "title": "Interactive: Consensus Scenario Simulator",
          "type": "interactive",
          "componentId": "ConsensusSimulator",
          "content": ""
        },
        {
          "id": "quiz-2.4",
          "title": "Module 2.4 Quiz — Consensus Mechanisms",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "Thousands of nodes are spread across the world. If two different versions of the transaction history appear, how does the network know which one is the \"truth\"?",
              "options": [
                "It follows the rules of the consensus mechanism, like the longest chain rule",
                "The network pauses all transactions until a developer chooses the correct version",
                "It chooses the version that was submitted by the most expensive hardware",
                "The nodes vote manually using a private chat system"
              ],
              "correctAnswer": 0,
              "hintPageId": "m2.4-page-1"
            },
            {
              "id": "q2",
              "question": "Bitcoin uses Proof of Work to stay secure. What is a common criticism of this specific mechanism?",
              "options": [
                "It is too easy for a single person to manipulate",
                "It does not allow for international transactions",
                "It requires a massive amount of electricity to keep the hardware running",
                "It is slower than traditional banking apps in all situations"
              ],
              "correctAnswer": 2,
              "hintPageId": "m2.4-page-2"
            },
            {
              "id": "q3",
              "question": "Proof of Stake is an alternative to mining. Instead of buying expensive hardware, what do participants do to earn the right to validate blocks?",
              "options": [
                "They pay a monthly subscription fee to the blockchain foundation",
                "They lock up their own tokens as collateral in the network",
                "They provide their legal identity and address to the network",
                "They solve complex mathematical riddles using their phone"
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.4-page-3"
            },
            {
              "id": "q4",
              "question": "Why is it so difficult for a single person to lie to the network about a transaction?",
              "options": [
                "The blockchain is owned by a large company that monitors for fraud",
                "Every user must have their account verified by a bank first",
                "Hashing makes it impossible to see the transaction data",
                "Their version of the ledger will be rejected by the majority of honest nodes"
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.4-page-1"
            },
            {
              "id": "q5",
              "question": "Delegated Proof of Stake (DPoS) is often compared to a representative democracy. How do the validators get chosen in this system?",
              "options": [
                "Regular token holders vote for a specific group of representatives to run the nodes",
                "The network randomly selects one person every hour to be the leader",
                "The largest crypto exchanges decide who is allowed to validate",
                "Validators must be approved by the government of the country where they live"
              ],
              "correctAnswer": 0,
              "hintPageId": "m2.4-page-4"
            },
            {
              "id": "q6",
              "question": "Consensus is about reaching agreement without a leader. If a network only has 10 validators instead of 10,000, what is the most likely result?",
              "options": [
                "The network becomes more secure because there are fewer points of failure",
                "It is more centralized and easier for a single group to control or shut down",
                "Transactions become significantly more expensive for the average user",
                "The blockchain stops being transparent to the public"
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.4-page-5"
            },
            {
              "id": "q7",
              "question": "If a group of miners or stakers coordinates to take over the network, it is often called a 51% attack. What is the real danger of this situation?",
              "options": [
                "They can steal tokens from wallets they do not own",
                "They can increase the total supply of the coin indefinitely",
                "They can stop the internet from working in specific regions",
                "They can approve fraudulent transactions or rewrite recent history"
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.4-page-2"
            },
            {
              "id": "q8",
              "question": "Why does a consensus mechanism matter for a creator in Nigeria sending money to a collaborator in Mauritius?",
              "options": [
                "It allows the banks in both countries to communicate faster",
                "It automatically converts the currency to the local naira or rupee",
                "It ensures the transaction settles permanently without needing a bank to verify it",
                "It protects their personal data from being seen by other nodes"
              ],
              "correctAnswer": 2,
              "hintPageId": "m2.4-page-5"
            }
          ]
        }
      ]
    },
    {
      "id": "module-2.5",
      "title": "Module 2.5 — Blockchain and Incentive Alignment",
      "pages": [
        {
          "id": "m2.5-page-0",
          "title": "Module Introduction",
          "type": "video",
          "youtubeId": "jThX6cgw2WQ"
        },
        {
          "id": "m2.5-page-1",
          "title": "Why Would Anyone Mine or Validate?",
          "content": `Blockchain is decentralized, which sounds like a great idea for fairness, but it relies on thousands of independent computers working together to stay alive. These computers are owned by real people who have bills to pay. Running a high-end mining rig or a validation server costs a lot of money in electricity and hardware. If the network didn't offer a reward, nobody would bother doing the work.

Think about a **side hustle**. You wouldn't spend your weekends designing logos or editing videos for a stranger for free. You do it because there is a payoff at the end. The people who secure a blockchain are essentially running a business where their job is to be the honest witness for the rest of the world.

If the system relied on everyone being nice, it would fail the moment things got difficult. Greed is a powerful motivator. **Satoshi Nakamoto**, the creator of Bitcoin, understood this. Instead of trying to fight human nature, he decided to use it to secure the network. He built a system where the easiest way to make money is to follow the rules, and the most expensive way to lose money is to try and break them.

This system is a masterpiece of economic design. We call this **incentive alignment**. When you align what is good for the individual with what is good for the network, you create a system that can run itself for decades without a central manager.

The network stays secure because the people running it are incentivized to keep it that way. On the next page, we will break down the two ways these participants actually get paid: block rewards and transaction fees.`
        },
        {
          "id": "m2.5-page-2",
          "title": "Block Rewards and Transaction Fees",
          "content": `If you're running a server or a mining rig to support a blockchain, you have two main ways of getting paid for your trouble. These two income streams are what keep the lights on for the people securing the network.

### **1. Block Rewards: The "New Money" Incentive**

The first stream is the **block reward**. Every time a miner or validator successfully adds a new block to the chain, the network literally creates new cryptocurrency out of thin air and hands it to them. It’s like a bounty for being the first to do the work correctly.

On Bitcoin, these rewards are how every single BTC in existence originally entered the world. However, these rewards don't stay the same forever. To prevent inflation, Bitcoin has a "**halving**" every four years, where the reward is cut in half. Eventually, the block reward will hit zero, and no new Bitcoin will ever be created again. This makes the early years of a network very attractive for participants, as they're earning "new" coins while the network grows.

### **2. Transaction Fees: The Service Charge**

The second stream is **transaction fees** (or **gas fees**). Every time someone sends crypto or interacts with a smart contract, they pay a small fee. This fee goes directly to the person who includes that transaction in a block. Think of it as a priority service fee—if you want your transaction processed quickly when the network is busy, you offer a higher fee to make it more attractive to the validator.

As block rewards decrease over time (like in Bitcoin's case), transaction fees are designed to take over as the primary way the network pays its protectors. This ensures that even 100 years from now, there’s still a financial reason for people to keep the network running.

### **The Balancing Act**

Together, these two streams create a **stable economy**. Block rewards subsidize the network in its early days, and transaction fees ensure its long-term survival. For the validator, it's a simple calculation: as long as the rewards and fees are higher than their electricity and hardware costs, it makes sense to stay honest and keep the ledger moving.`
        },
        {
          "id": "m2.5-page-3",
          "title": "Game Theory in Blockchain",
          "content": `You might think that keeping a global network secure requires everyone to be a "good person," but blockchain works the opposite way. It assumes that everyone is looking out for themselves. This is where **Game Theory** comes in. It is the study of how people make choices when their success depends on the choices of others.

In blockchain, we use these rules to make sure that **being honest is always the most profitable move**.

### **The Miner's Dilemma**

Imagine you are a miner in early 2026. You have spent thousands of dollars on hardware and electricity. You have two main choices:

1.  **Follow the rules:** By playing fair, you validate transactions honestly and earn the block reward, which is currently 3.125 BTC, along with the transaction fees. This is a reliable, steady income for your business.
2.  **Try to cheat:** You attempt to record a fake transaction that sends the same money to two different places.

If you choose to cheat, the rest of the network will immediately see that your block doesn't match the rules. They will **reject your work**, meaning you get zero rewards. You still had to pay for the electricity and the hardware, so you just lost a massive amount of money for nothing. The system makes it so that trying to trick the network is essentially a guaranteed way to go broke.

### **Skin in the Game**

Economists call this a "**credible commitment**." By spending real money on energy and equipment before you even find a block, you are proving to the network that you have "**skin in the game**."

This is different from how traditional systems work. If a bank employee in Lagos or Nairobi decided to mess with the records, they might get fired or go to jail later, but the cost of the crime usually happens after they are caught. In blockchain, **the cost is upfront and automatic**. You lose your investment the second you try to break the rules.

### **The Majority Rule Risk (The 51% Attack)**

The biggest theoretical threat to a blockchain is something called a **51% attack**. This happens if a single person or group manages to control more than half of the network's computing power. If they reach that level, they could technically "outvote" everyone else and approve fraudulent transactions.

In 2026, the Bitcoin network hash rate is over 940 EH/s. To even attempt an attack, you would need to buy more than 10 billion dollars worth of hardware and spend over 1.5 million dollars every hour on electricity.

Even if you succeeded, the value of the coins you were trying to steal would likely **crash to zero** because people would lose trust in the network. You would spend billions of dollars to destroy the very thing you were trying to get rich from. It is like a thief spending a fortune to break into a vault, only to find that the act of breaking in turns the gold inside to lead. The math makes honesty the only rational choice.`
        },
        {
          "id": "m2.5-page-4",
          "title": "When Incentives Break — Real-World Counterexamples",
          "content": `Incentive alignment sounds airtight on paper. Make honesty profitable, make cheating expensive, and the network runs itself. The logic is clean. But clean logic only works when the model matches how humans actually behave in the wild. When the incentives are badly designed, or when they depend on conditions that can't last, things break. And they break fast.

**Axie Infinity** is the example that proves the point best, because it was built on incentives from day one and it still collapsed.

Axie was a game where players earned tokens by playing. The model was called **play-to-earn**, and at its peak in late 2021, 2.7 million people were using it daily. Many of them were in Southeast Asia, earning real income from a token called SLP. The pitch was genuinely exciting: a game that paid you to participate.

The incentive structure worked like this. New players had to buy three Axie NFTs to start playing. Those NFTs were sold by existing players, who used the income to breed more Axies and sell those too. Playing the game generated SLP tokens, which could be sold for real money. As long as new players kept joining, demand for Axies stayed high, SLP held its value.

The model had one requirement that nobody could control: **constant growth**. New players had to keep arriving, and they had to keep buying Axies at prices that made the whole thing worth it for everyone who came before them.

When new player inflow slowed, the math flipped. Fewer people buying Axies meant breeders earned less. SLP supply kept growing because existing players were still generating it, but demand wasn't keeping up. The token price collapsed. Daily earnings that had been meaningful became pocket change. Players left in waves. Daily active users fell roughly 90 percent, from 2.7 million to about 350,000.

A **CertiK analysis** later found that flawed token model design contributed to over **$790 million** in direct asset losses across multiple projects in 2022 alone.

Even on established networks, incentives can be gamed in ways the designers didn't anticipate. On Solana, a delegation platform used an auction model where validators bid for stake allocations. Several validators found a way to bid high, win the allocation, then lower their bids while keeping the stake. Across 126 epochs, this extracted roughly 37,000 SOL in diverted rewards. Stakers were consistently underpaid while the system displayed numbers that looked healthy. The incentive logic itself had a hole in it, and someone found it.

The point across all of these is not that blockchain incentives don't work. They do. Bitcoin has proven that for over fifteen years. The point is that **incentives are only as strong as the assumptions they're built on**. Assume infinite growth, and your model breaks when growth stops. Assume rational actors won't find the loophole, and someone will find it. Assume confidence is permanent, and your system is one panic away from collapse.`
        },
        {
          "id": "m2.5-page-5",
          "title": "Interactive: Incentive Design Lab",
          "type": "interactive",
          "componentId": "IncentiveDesignLab",
          "content": ""
        }
      ]
    },
    {
      "id": "module-week-2-review",
      "title": "Week 2 Full Review Quiz",
      "pages": [
        {
          "id": "week-2-wrap-up",
          "title": "Week 2 Wrap Up",
          "content": `You started this week knowing what a blockchain is. You end it knowing how one actually runs, and more importantly, why it keeps running.

**Wallets** came first, because without them nothing else is yours. Your private key is the only proof of ownership that matters on a blockchain, and whoever holds it holds the funds. **Exchanges** showed you the two ways people actually move tokens: through companies that take custody of your assets and offer convenience in return, or through protocols that hold nothing and trust no one, including you. 

The **transaction lifecycle** pulled back the curtain on what happens between hitting send and seeing a confirmation—the broadcast, the mempool, the gas fee, the block, the explorer entry that exists forever on a public ledger. 

**Consensus mechanisms** answered the question that makes the whole system coherent: how thousands of computers that don't know each other, spread across every continent, manage to agree on a single version of who owns what. 

And **incentive alignment** showed you why that agreement holds, because Satoshi didn't build Bitcoin on goodwill. He built it so that honesty is simply the better business decision.

These five modules are one idea. A blockchain is an economic system where the math, the rules, and the incentives are all written into the same place. Nobody has to trust anyone. The design does the work.

Week 3 asks what happens when you take that foundation and make it programmable. Bitcoin proved you could move value without a bank. Ethereum asked a bigger question: what if the blockchain could run any program at all? Next week is about **smart contracts**, **tokens**, and what it actually means when the code itself becomes the agreement.`
        },
        {
          "id": "week-2-quiz",
          "title": "Review Quiz: The Mechanics of Blockchain",
          "type": "quiz",
          "questions": [
            {
              "id": "w2-q1",
              "question": "Your friend says \"I lost my crypto wallet app, so my Bitcoin is gone.\" What's wrong with that statement?",
              "options": [
                "The crypto lives on the blockchain, not inside the app. Losing the app doesn't mean losing the funds — losing the private key does.",
                "Bitcoin wallets are backed up automatically by the exchange, so the funds are always recoverable.",
                "Wallet apps store coins locally, so the funds are gone only if the device is physically destroyed.",
                "The statement is correct. Deleting a wallet app permanently removes access to all associated funds."
              ],
              "correctAnswer": 0,
              "hintPageId": "m2.2-page-1"
            },
            {
              "id": "w2-q2",
              "question": "What is the mathematical relationship between a private key and a public key?",
              "options": [
                "They are identical strings stored in two different locations for redundancy.",
                "The public key is created first and the private key is derived from it later.",
                "The private key is encrypted using the public key and can be decoded with the right password.",
                "The public key is derived from the private key using a one-way function, meaning the private key cannot be reverse-engineered from the public key."
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.2-page-3"
            },
            {
              "id": "w2-q3",
              "question": "Why do modern wallets generate a new address for every incoming transaction?",
              "options": [
                "Each address can only receive one transaction before it becomes invalid.",
                "Exchanges require a fresh address for every deposit to comply with anti-money-laundering rules.",
                "New addresses increase the wallet's storage capacity for larger transactions.",
                "It's a privacy measure — using different addresses makes it harder to trace your full transaction history on the public ledger."
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.2-page-4"
            },
            {
              "id": "w2-q4",
              "question": "FTX collapsed in 2022 and billions in customer funds were lost. What does this illustrate about custodial wallets?",
              "options": [
                "Hardware wallets are the only safe way to store crypto long-term.",
                "Centralized exchanges should only be used for trading, never for storage.",
                "Custodial wallets are illegal in most jurisdictions following the FTX collapse.",
                "When you use a custodial wallet, you are trusting a private company with your keys — and if that company fails, your funds can go with it."
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.2-page-5"
            },
            {
              "id": "w2-q5",
              "question": "What is the core difference between a hot wallet and a cold wallet?",
              "options": [
                "Hot wallets are always custodial. Cold wallets are always non-custodial.",
                "Hot wallets are used for Bitcoin only. Cold wallets support all tokens.",
                "Cold wallets cost a monthly subscription fee. Hot wallets are always free.",
                "A hot wallet is connected to the internet and is more convenient but more exposed. A cold wallet stores keys offline and removes the remote attack surface entirely."
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.2-page-6"
            },
            {
              "id": "w2-q6",
              "question": "A seed phrase is 12 or 24 words. Why does the wallet use ordinary words instead of the raw private key?",
              "options": [
                "Ordinary words are harder for hackers to guess than random characters.",
                "The seed phrase is a human-readable encoding of the underlying cryptographic data, making it easier to write down and recover accurately than a raw 256-bit key.",
                "Regulators in most countries require wallets to use word-based backups for legal compliance.",
                "The words are encrypted and can only be decoded by the original wallet app that generated them."
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.2-page-7"
            },
            {
              "id": "w2-q7",
              "question": "When you trade on a centralized exchange, when does your transaction actually settle on the blockchain?",
              "options": [
                "Immediately, because CEXs process all trades on-chain in real time.",
                "After 10 confirmations, which takes roughly 10 minutes on most networks.",
                "Never — CEX trades are internal database updates. The crypto only moves on-chain when you withdraw to your own wallet.",
                "Within 24 hours, once the exchange's compliance team reviews and approves the trade."
              ],
              "correctAnswer": 2,
              "hintPageId": "m2.3-page-2"
            },
            {
              "id": "w2-q8",
              "question": "What does \"peer-to-protocol\" mean in the context of a DEX?",
              "options": [
                "Two users negotiate a trade directly through a private messaging system built into the exchange.",
                "Your wallet connects directly to a smart contract that executes the swap on-chain, with no company taking custody of your funds at any point.",
                "The DEX matches buyers and sellers through a central order book managed by its founding team.",
                "Trades are routed through a network of licensed brokers who execute on your behalf."
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.3-page-2"
            },
            {
              "id": "w2-q9",
              "question": "ETH/USDC is showing 3,200. What does that number mean?",
              "options": [
                "The total trading volume of ETH in USDC over the past 24 hours.",
                "The number of USDC tokens currently locked in the liquidity pool.",
                "The percentage gain ETH has made against USDC this month.",
                "One ETH costs 3,200 USDC right now. The left asset is what you're buying. The right asset is what you're paying with."
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.3-page-3"
            },
            {
              "id": "w2-q10",
              "question": "What is slippage, and when does it matter most?",
              "options": [
                "A penalty fee charged when a trade takes longer than 30 seconds to execute.",
                "The difference between the gas fee you set and the fee the network actually charges.",
                "The gap between the price displayed when you initiate a trade and the price at which it actually executes, most significant in thinly traded markets or large orders.",
                "The delay between submitting a transaction and receiving confirmation on the block explorer."
              ],
              "correctAnswer": 2,
              "hintPageId": "m2.3-page-3"
            },
            {
              "id": "w2-q11",
              "question": "What happens to a transaction that is set with a gas fee that is too low?",
              "options": [
                "It sits in the mempool, gets deprioritized by validators, and may eventually be dropped if it waits too long without being picked up.",
                "The network automatically increases the fee by drawing the difference from the sender's wallet balance.",
                "The transaction is immediately rejected and the sender receives an error before it ever reaches the network.",
                "The transaction is processed normally but flagged for review by the exchange's compliance team."
              ],
              "correctAnswer": 0,
              "hintPageId": "m2.3-page-4"
            },
            {
              "id": "w2-q12",
              "question": "A transaction on Etherscan shows \"Success\" but the gas fee was still charged. A student says this must be an error. What would you tell them?",
              "options": [
                "They're right — a failed transaction is always refunded in full including gas.",
                "The network executed the computational work regardless of the outcome. Gas pays for that work, not for a guaranteed result.",
                "The fee shown is a deposit, not a charge. It will be refunded within 48 hours.",
                "Gas fees on Ethereum are only charged on successful transactions. The student should contact support."
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.3-page-5"
            },
            {
              "id": "w2-q13",
              "question": "What does the nonce field in a transaction record tell you, and why does it exist?",
              "options": [
                "It shows the gas price the sender was willing to pay, used to calculate the total fee.",
                "It records the block number where the transaction was first broadcast to the network.",
                "It is a sequential counter tracking how many transactions that wallet has sent, used to order them correctly and prevent the same transaction from being processed twice.",
                "It stores the encrypted version of the sender's private key for verification purposes."
              ],
              "correctAnswer": 2,
              "hintPageId": "m2.3-page-5"
            },
            {
              "id": "w2-q14",
              "question": "Why is blockchain described as pseudonymous rather than anonymous?",
              "options": [
                "Wallet addresses are public and all activity tied to them is visible on the ledger — but without names attached by default. If anyone connects an address to a real identity, every transaction it ever made becomes traceable.",
                "Blockchain transactions are hidden for 90 days before becoming publicly visible on the explorer.",
                "Only regulators and exchange compliance teams can view wallet activity. Regular users see only their own transactions.",
                "Transactions are anonymous unless the sender voluntarily reveals their identity during the transfer."
              ],
              "correctAnswer": 0,
              "hintPageId": "m2.3-page-6"
            },
            {
              "id": "w2-q15",
              "question": "What problem does a consensus mechanism solve that a traditional centralized database does not have?",
              "options": [
                "Traditional databases charge high fees per transaction. Consensus mechanisms eliminate those fees.",
                "Traditional databases can only store financial data. Consensus mechanisms allow any kind of data to be recorded.",
                "In a centralized system, one authority holds the official record and resolves disputes. In a decentralized network with no authority, the mechanism is what gets thousands of independent nodes to agree on the same version of history automatically.",
                "Traditional databases are too slow for international transfers. Consensus mechanisms speed up settlement times."
              ],
              "correctAnswer": 2,
              "hintPageId": "m2.4-page-1"
            },
            {
              "id": "w2-q16",
              "question": "Ethereum reduced its energy consumption by approximately 99.84% in September 2022. What caused that reduction?",
              "options": [
                "The network switched from Proof of Work, which requires miners to burn energy competing to solve puzzles, to Proof of Stake, which replaces that energy expenditure with staked collateral.",
                "Ethereum upgraded its mining hardware to chips that are significantly more energy efficient than the previous generation.",
                "The network reduced its transaction throughput by 99% to lower the computational load on validators.",
                "Ethereum outsourced its validation to a consortium of renewable energy data centers, cutting the carbon footprint without changing the consensus mechanism."
              ],
              "correctAnswer": 0,
              "hintPageId": "m2.4-page-3"
            },
            {
              "id": "w2-q17",
              "question": "What is slashing in a Proof of Stake network?",
              "options": [
                "A fee validators pay when they go offline temporarily during a scheduled maintenance window.",
                "The process of splitting a validator's stake across multiple nodes to reduce risk.",
                "A reputation penalty that temporarily suspends a validator from proposing new blocks.",
                "The destruction of some or all of a validator's staked collateral as punishment for provably dishonest behavior, such as proposing conflicting blocks."
              ],
              "correctAnswer": 3,
              "hintPageId": "m2.4-page-4"
            },
            {
              "id": "w2-q18",
              "question": "The Axie Infinity collapse is used in the course as an example of incentive design failure. What was the fundamental flaw in its model?",
              "options": [
                "The game relied on a small group of developers to manually issue rewards, creating a single point of failure.",
                "Player earnings depended on continuous new player inflow to sustain token demand. When growth stopped, the entire reward structure collapsed.",
                "Axie used a Proof of Work mechanism that made the cost of earning tokens higher than their market value.",
                "The game's smart contracts contained a coding error that allowed a small group of wallets to drain the reward pool."
              ],
              "correctAnswer": 1,
              "hintPageId": "m2.5-page-4"
            }
          ]
        }
      ]
    }
  ]
};
