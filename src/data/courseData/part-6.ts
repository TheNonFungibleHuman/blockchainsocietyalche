export const part6 = {
  "id": "part-6",
  "title": "Part 6: Careers, Real-World Use Cases & Your Path Forward",
  "description": "Explore real-world blockchain use cases, career opportunities, and your path forward in Web3.",
  "modules": [
    {
      "id": "module-6.1",
      "title": "Module 6.1 — Real-World Use Cases of Blockchain",
      "pages": [
        {
          "id": "m6.1-video",
          "title": "Real-World Use Cases of Blockchain",
          "type": "video",
          "youtubeId": "aQWflNQuP_o",
          "content": "Welcome to Module 6.1. In this module, we will learn how to evaluate a blockchain use case, study proven applications like supply chain and cross-border remittances, and explore emerging areas like Real-World Assets (RWAs), Decentralized Science (DeSci), and healthcare."
        },
        {
          "id": "m6.1-page-1",
          "title": "How to Evaluate a Blockchain Use Case",
          "content": `A blockchain use case is a specific problem that blockchain technology solves better than existing systems. The word "use case" gets thrown around a lot in tech, but here it means a situation where putting data on a blockchain creates a real advantage that a regular database cannot match.

Not every problem needs a blockchain. In fact, most do not. Before you evaluate any of the industries below, run the three-question test. First, does this application remove a trusted intermediary that users currently have no choice but to trust? Second, does it reduce coordination costs between parties who do not know or trust each other? Third, does it create digital scarcity or provenance that did not exist before? If the answer to at least one of these is yes, blockchain might fit. If all three are no, you are probably looking at a solution in search of a problem.

Supply chain tracking passes the test because it removes the need to trust a single company to tell the truth about where a product came from. Cross-border remittances pass because they reduce coordination costs between banks in different countries. Tokenized art passes because it creates digital provenance for a physical object. A blockchain-based voting app for a small club probably fails, because the club members already trust each other, and a simple online poll works fine.

Here is a concrete example of a good fit. In Kenya, coffee farmers often sell beans to cooperatives that mix them with lower-quality batches before export. Buyers have no way to verify the origin. A blockchain system lets each farmer record harvest data, processing details, and transport logs on-chain. When the coffee reaches a roaster in Berlin, they scan a QR code and see the full chain back to the farm. The cooperative cannot alter records after the fact. The farmer gets credit for quality, and the buyer gets proof.

Here is a forced fit. A startup in 2023 raised millions to put gym membership records on a blockchain. Members already trusted the gym. The blockchain added no new functionality, slowed the system down, and the startup shut down within a year.`
        },
        {
          "id": "m6.1-page-2",
          "title": "Proven Use Cases — Supply Chain, Remittances, and Financial Inclusion",
          "content": `Supply chain tracking is one of the oldest and most proven blockchain applications. The basic idea is simple: every time a product changes hands, that transaction gets recorded on a blockchain with a timestamp and a digital signature. The result is an unchangeable record of provenance, which means the documented history of where something came from and who handled it.

Walmart has used this system since 2018 for food safety. When an outbreak of contaminated lettuce occurs, the company can trace the affected batch back to the specific farm in seconds instead of days. In Africa, the same logic applies to agricultural exports, pharmaceuticals, and conflict minerals. A mining cooperative in the DRC can record each bag of coltan from extraction through export, proving to buyers that the material did not fund armed groups. The blockchain does not replace audits, but it makes them faster and harder to fake.

Remittances are the second proven use case, and they matter enormously in Africa. A remittance is money sent by a worker in one country to their family in another. Traditional remittance corridors through Western Union or MoneyGram charge an average of 7.9 percent for a $200 transfer into Africa, nearly double the global average. For a worker in London sending money to Lagos, that means £15.80 disappears to fees on a £200 transfer.

Stablecoin corridors cut this cost dramatically. A stablecoin is a cryptocurrency pegged to a fiat currency like the US dollar, designed to maintain a stable value. Onafriq, which connects over 500 million mobile wallets across 40 African countries, partnered with Ripple to enable digital asset-enabled cross-border payments using USDC and USDT via Polygon. Flutterwave rolled out stablecoin-powered cross-border payments across its 34-country network in 2026, targeting enterprise clients first with retail to follow. The settlement happens in minutes, and the fee is a fraction of what traditional rails charge.

Financial inclusion is the third proven use case. Approximately 1.4 billion adults worldwide remain unbanked, meaning they have no access to formal financial services. In sub-Saharan Africa, mobile money changed this for hundreds of millions of people. M-Pesa in Kenya lets users send, receive, and store money using only a basic mobile phone. Blockchain extends this model by enabling savings, lending, and insurance without a bank account at all. A farmer in rural Tanzania can receive payment for crops in USDC, hold it in a self-custody wallet, and earn yield by depositing it into a DeFi lending protocol. The smartphone is the bank branch, and the blockchain is the ledger.`
        },
        {
          "id": "m6.1-page-3",
          "title": "Emerging Use Cases — RWAs, DeSci, and Healthcare",
          "content": `Real World Assets, or RWAs, are traditional financial assets represented as tokens on a blockchain. Tokenization means creating a digital token that represents ownership or a claim on an underlying asset like a Treasury bond, a bar of gold, or a share of real estate. The token trades on-chain, but the legal ownership structure sits off-chain, usually through a special purpose vehicle or a regulated issuer.

The RWA market has grown rapidly. As of March 2026, the total market capitalization of tokenized real-world assets reached approximately $19.39 billion, up from $5.42 billion at the start of 2025. Tokenized US Treasuries alone crossed $13 billion. BlackRock's BUIDL fund, which holds tokenized Treasury securities, reached $2.17 billion in market cap. Circle's USYC, another tokenized Treasury product, reached $2.69 billion. These are products from the world's largest asset managers, built for institutional investors who want yield-bearing assets that settle instantly and can be used as collateral in DeFi protocols.

For an African investor, RWAs offer something new: access to US Treasury yield without a US bank account or a brokerage relationship. A developer in Lagos can hold tokenized Treasuries in a self-custody wallet, earn dollar-denominated yield, and use those tokens as collateral to borrow stablecoins. The legal wrapper matters here. The token is not the Treasury bond itself. It is a claim on a fund that holds the bond, and that claim is enforceable under the jurisdiction where the fund is registered.

DeSci, short for Decentralized Science, uses blockchain tools to change how scientific research gets funded, conducted, and shared. A Research DAO is a decentralized autonomous organization that pools funds from token holders and votes on which research projects to support. VitaDAO, one of the earliest and most active, focuses on longevity research and has received backing from Pfizer Ventures. ResearchHub operates as an open platform where scientists earn tokens for publishing, reviewing, and curating work.

The honest framing is important. DeSci is still largely experimental. No AI-driven drug discovery project funded through a Research DAO had completed Phase III clinical trials as of early 2026. The 7-to-10 year drug development timeline does not match the 12-month attention cycles of crypto markets. DeSci complements traditional science but does not replace it yet. The value is in opening funding to researchers outside elite institutions and creating transparent, community-governed priorities.

Healthcare on blockchain is mostly at the pilot stage. Patient records on-chain raise serious privacy questions, because a blockchain is immutable and medical data is sensitive. Drug traceability works better: a pharmaceutical manufacturer can record each batch's production, transport, and temperature history on-chain, making counterfeits harder to introduce. This is provenance tracking applied to medicine, and it passes the three-question test.`
        },
        {
          "id": "m6.1-quiz",
          "title": "Module 6.1 Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "What is the primary purpose of running the three-question test before deciding whether a problem needs a blockchain?",
              "options": [
                "To determine which programming language to use for the solution",
                "To check whether blockchain creates a genuine advantage over existing systems",
                "To calculate the gas fees required for the application",
                "To decide which Layer 1 blockchain is most appropriate"
              ],
              "correctAnswer": 1,
              "hintPageId": "m6.1-page-1"
            },
            {
              "id": "q2",
              "question": "In the Kenya coffee supply chain example, what specific problem does the blockchain solve?",
              "options": [
                "It reduces the cost of shipping coffee to Europe",
                "It eliminates the need for farmers to use mobile phones",
                "It prevents cooperatives from mixing high-quality beans with lower-quality batches without detection",
                "It replaces the role of coffee exporters entirely"
              ],
              "correctAnswer": 2,
              "hintPageId": "m6.1-page-1"
            },
            {
              "id": "q3",
              "question": "What is a stablecoin in the context of cross-border remittances?",
              "options": [
                "A digital asset pegged to a fiat currency, designed to maintain stable value",
                "A cryptocurrency whose value fluctuates based on market demand",
                "A government-issued digital currency used only for international trade",
                "A type of hardware wallet used for storing remittance funds"
              ],
              "correctAnswer": 0,
              "hintPageId": "m6.1-page-2"
            },
            {
              "id": "q4",
              "question": "Which of the following best describes the relationship between a tokenized Treasury token and the actual US Treasury bond?",
              "options": [
                "The token is the physical Treasury bond stored in a vault",
                "The token automatically mints new Treasury bonds when demand increases",
                "The token and the bond are completely unrelated assets",
                "The token is a digital claim on a fund that holds the bond, with legal enforceability in a specific jurisdiction"
              ],
              "correctAnswer": 3,
              "hintPageId": "m6.1-page-3"
            },
            {
              "id": "q5",
              "question": "What is the most honest assessment of DeSci's current state as of 2026?",
              "options": [
                "It has fully replaced traditional scientific funding and peer review",
                "It is an experimental complement to traditional science with no completed Phase III trials from DAO-funded projects",
                "It only funds research in cryptocurrency and blockchain technology",
                "It has been banned by all major pharmaceutical companies"
              ],
              "correctAnswer": 1,
              "hintPageId": "m6.1-page-3"
            },
            {
              "id": "q6",
              "question": "Why is patient record storage on blockchain considered mostly pilot-stage?",
              "options": [
                "Because the immutability of blockchains conflicts with the privacy requirements of sensitive medical data",
                "Because blockchains are too fast for medical data",
                "Because doctors refuse to use digital tools",
                "Because blockchain storage is free and unlimited"
              ],
              "correctAnswer": 0,
              "hintPageId": "m6.1-page-3"
            },
            {
              "id": "q7",
              "question": "As of March 2026, what was the approximate total market capitalization of tokenized real-world assets?",
              "options": [
                "$5.42 billion",
                "$13 billion",
                "$19.39 billion",
                "$33.69 billion"
              ],
              "correctAnswer": 2,
              "hintPageId": "m6.1-page-3"
            },
            {
              "id": "q8",
              "question": "What advantage does a tokenized Treasury product like BlackRock's BUIDL offer to an investor without a US bank account?",
              "options": [
                "Direct ownership of physical Treasury certificates",
                "Guaranteed returns higher than the underlying Treasury rate",
                "Automatic US citizenship upon investment",
                "Access to dollar-denominated yield and on-chain composability without traditional brokerage relationships"
              ],
              "correctAnswer": 3,
              "hintPageId": "m6.1-page-3"
            }
          ]
        }
      ]
    },
    {
      "id": "module-6.2",
      "title": "Module 6.2 — Careers in Blockchain",
      "pages": [
        {
          "id": "m6.2-video",
          "title": "Careers in Blockchain",
          "type": "video",
          "youtubeId": "vFOjWFY9oTY",
          "content": "Welcome to Module 6.2. In this module, we will explore the Web3 job market, the day-to-day tasks of technical builders and operator roles, and how to build a public, verifiable on-chain reputation in Web3."
        },
        {
          "id": "m6.2-page-1",
          "title": "The Web3 Job Market Right Now (2026)",
          "content": `The blockchain job market in 2026 does not look like the 2021 hiring frenzy, and that is a good thing. The gold rush is over. What remains is a maturing industry that needs people who can build, communicate, and ship products. Real businesses with revenue models now exist on-chain, and they hire steadily.

Remote work is the norm. Teams are distributed across time zones, and a developer in Lagos or a community manager in Kampala competes on equal footing with someone in Berlin or San Francisco. The currency of hiring is proof of skill. Salaries vary by role and experience, but broadly speaking, a junior smart contract developer can expect $40,000–$70,000 annually, and a senior auditor double that or more. Community managers and technical writers often start at $25,000–$50,000, depending on the project's treasury and location-adjusted norms. DAOs pay contributors in a mix of stablecoins and project tokens, so understanding how token grants vest and what they are worth in liquid markets is part of evaluating any offer.

The hottest demand sits in a few areas. Security auditing firms cannot hire fast enough. ZK-proof engineers are rare and expensive. Account abstraction (ERC-4337) and chain abstraction have created a need for developers who understand smart contract wallets and cross-chain UX. On the non-technical side, growth roles that bridge Web2 audiences into on-chain products are expanding, because the hardest problem in 2026 is getting normal people to use the apps.

Africa-specific opportunities are growing. On-ramps and off-ramps built on mobile money integrations need local product managers who understand the corridors. Remittance-focused protocols hire regional growth leads. Developer communities in Nairobi, Accra, and Lagos are producing smart contract talent, and some global protocols now run dedicated Africa tracks in their grant programs.`
        },
        {
          "id": "m6.2-page-2",
          "title": "Builder Roles Day-to-Day",
          "content": `Builder roles are the people who write, test, and secure the code that runs on-chain. If you enjoy building things, debugging, and understanding how systems work at a technical level, these are the roles to look at first.

**Smart contract developer** is the most direct path. You write code, usually in Solidity for Ethereum and its Layer 2s, or Rust for Solana and Polkadot. Your daily work is not glamorous: you write a function, test it with a framework like Foundry or Hardhat, fix the failing tests, optimize gas costs, and submit a pull request. You review other people's code. You read documentation, a lot of it. You stay current with breaking changes in the EVM and new precompiles. A bug in your contract can lose millions of dollars, so you learn to think adversarially. You assume every input is malicious until proven otherwise.

**Smart contract auditor** reviews other people's code full-time. You are paid to break things. You read a protocol's codebase line by line, write a report detailing every vulnerability you find, and often suggest fixes. Auditors need deep knowledge of common attack vectors: reentrancy, front-running, integer overflows, storage collisions, and the newer patterns that emerge each year. Firms like Spearbit, Trail of Bits, and Code4rena run competitive auditing platforms where new auditors can prove themselves.

**Protocol researcher** works on the design of blockchain systems themselves: consensus mechanisms, sharding, MEV mitigation, zero-knowledge proving systems. This role is heavy on cryptography, game theory, and academic-style research. Most protocol researchers work for large L1 foundations, research orgs like the Ethereum Foundation, or independent think tanks. You publish papers, run simulations, and debate trade-offs on forums like ethresear.ch.

**Tokenomics designer** crafts the economic rules of a protocol: how tokens are minted, distributed, and burned; how incentives align between users, validators, and developers. This role blends economics, mathematics, and behavioral design. You model supply and demand under different scenarios and test for perverse incentives that could drain the treasury or crash the token price. A good tokenomics designer can explain why a sink-and-faucet model works better than an infinite emission schedule.

All builder roles share one requirement: you must be comfortable with constant learning.`
        },
        {
          "id": "m6.2-page-3",
          "title": "Operator Roles Day-to-Day",
          "content": `Not every career in Web3 requires writing code. Protocols are products, communities, and brands, and they need people who can manage all three.

A **community manager** is often the first hire after the founders. You run the Discord and Telegram groups, answer questions, moderate discussions, ban scammers, and turn confused newcomers into engaged users. You are the human face of a protocol that might otherwise feel like a faceless smart contract. A good community manager spots sentiment shifts early and flags them to the team before they become crises. This role rewards emotional intelligence, patience, and the ability to type clearly at speed.

A **product manager** defines what gets built and why. You talk to users, distill feedback into feature requests, prioritize the roadmap, and coordinate between developers and stakeholders. A Web3 PM needs the same skills as a Web2 PM, plus an understanding of on-chain mechanics. You need to know why a transaction takes 12 seconds instead of 2, what a sequencer does, and how token incentives affect user behavior. The best PMs in crypto ship products that users do not need a blockchain degree to understand.

A **Growth marketer** finds and converts users. You run campaigns, manage social channels, and experiment with incentive programs. In Web3, growth often involves airdrops, quest platforms, and referral mechanisms. The ethical line matters here: a growth marketer who pumps a token with fake engagement is building a house of sand. The ones who last build real communities around real products.

A **DAO contributor** works across multiple DAOs, picking up bounties and part-time contracts. You might write a governance proposal for one DAO, design a contributor onboarding flow for another, and analyze treasury diversification for a third. This role suits generalists who enjoy variety and can manage their own time without a manager checking in.

A **Web3 lawyer** navigates the regulatory patchwork. In 2026, MiCA governs crypto-assets in Europe, the US has a patchwork of agency guidelines, and African regulators range from progressive sandbox approaches to outright bans. A Web3 lawyer helps protocols structure token launches legally, draft terms of service, and respond to enforcement actions. This is a specialized field, and demand is growing.

A **technical writer** produces documentation, tutorials, explainers, and grant proposals. Every protocol needs clear docs, and bad docs kill adoption. A technical writer who can explain a ZK-rollup in plain English is worth their weight in tokens. This role is an excellent entry point for people who understand the tech but do not want to write production code.

Operator roles prove that Web3 is not just a developer's game. The industry runs on people who can organize, explain, and connect.`
        },
        {
          "id": "m6.2-page-4",
          "title": "Building Your On-Chain Reputation",
          "content": `In Web3, your resume is public and verifiable. The best way to get hired is to let the work speak for itself, on-chain and in public.

**GitHub** remains the primary portfolio for technical roles. A clean repository with well-documented smart contracts, test suites, and deployed addresses shows you can ship. Employers look at commit history, code quality, and how you handle issues and pull requests. A single well-maintained project is worth more than ten half-finished tutorials.

**Farcaster, Lens, and X (formerly Twitter)** are where crypto conversations happen. Posting thoughtful analysis, sharing your learning journey, and engaging with builders in your niche builds a reputation over time. You do not need a large follower count. You need a few people who respect your signal when a role opens up. Hiring in Web3 often begins with "has anyone seen good work from X recently?"

**Writing platforms** like Mirror and Paragraph let you publish long-form content on-chain. Writing a breakdown of a protocol you studied, a vulnerability you found, or a governance proposal you analyzed is a fast way to demonstrate depth. Technical writing is a reputation signal for every role.

**Building in public** means sharing your progress even when it is incomplete. Ship a small dApp, write a thread about what you learned, post the repo. Do it again. The consistency builds a track record. After six months, a hiring manager searching your name finds proof of effort, not claims.

**Portfolio over resume.** In traditional hiring, you list past jobs and hope the interviewer believes you. In Web3, the evidence is online, onchain, and anyone can check it. That shifts power to the candidate who has been visible and productive. A Kenyan developer with a strong GitHub and an active Farcaster account can get noticed by a top protocol faster than someone who relies on a PDF and a cover letter.`
        },
        {
          "id": "m6.2-demo",
          "title": "Interactive Demo: Web3 Career Path Finder",
          "type": "interactive",
          "componentId": "CareerPathFinder"
        },
        {
          "id": "m6.2-quiz",
          "title": "Module 6.2 Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "In 2026, what is the most common working arrangement for Web3 roles?",
              "options": [
                "In-office, with relocation to a tech hub required",
                "Hybrid, with three days per week in a co-working space",
                "Fully remote, with teams distributed across time zones",
                "In-person, within government-run blockchain centers"
              ],
              "correctAnswer": 2,
              "hintPageId": "m6.2-page-1"
            },
            {
              "id": "q2",
              "question": "A smart contract auditor's primary job is to:",
              "options": [
                "Write smart contracts for DeFi protocols",
                "Find vulnerabilities and security flaws in other people's code",
                "Manage a protocol's Discord community",
                "Design tokenomics models for new projects"
              ],
              "correctAnswer": 1,
              "hintPageId": "m6.2-page-2"
            },
            {
              "id": "q3",
              "question": "Which role blends economics, mathematics, and incentive design to structure token supply and demand?",
              "options": [
                "Community manager",
                "Protocol researcher",
                "Tokenomics designer",
                "Growth marketer"
              ],
              "correctAnswer": 2,
              "hintPageId": "m6.2-page-2"
            },
            {
              "id": "q4",
              "question": "A DAO contributor is best described as:",
              "options": [
                "A full-time employee of a single protocol",
                "A generalist who works across multiple DAOs on bounties and contracts",
                "A lawyer who handles all DAO legal disputes",
                "A smart contract developer focused on governance tokens"
              ],
              "correctAnswer": 1,
              "hintPageId": "m6.2-page-3"
            },
            {
              "id": "q5",
              "question": "Why does the module emphasize \"portfolio over resume\" for Web3 hiring?",
              "options": [
                "Resumes are illegal in most DAOs",
                "On-chain work is verifiable and proves competence without relying on claims",
                "Employers prefer candidates who do not have traditional jobs",
                "PDFs cannot be opened on most blockchain nodes"
              ],
              "correctAnswer": 1,
              "hintPageId": "m6.2-page-4"
            },
            {
              "id": "q6",
              "question": "Which platform is used to publish long-form on-chain content and build reputation as a writer?",
              "options": [
                "Etherscan",
                "MetaMask",
                "Mirror",
                "Uniswap"
              ],
              "correctAnswer": 2,
              "hintPageId": "m6.2-page-4"
            },
            {
              "id": "q7",
              "question": "In the career path finder demo, what does the tool produce after the learner answers all questions?",
              "options": [
                "A guaranteed job offer from a partner protocol",
                "A role cluster with example roles, skill priorities, and first actions",
                "A salary negotiation script",
                "A smart contract that mints a career NFT"
              ],
              "correctAnswer": 1,
              "hintPageId": "m6.2-demo"
            },
            {
              "id": "q8",
              "question": "What makes a GitHub portfolio strong for a smart contract developer candidate?",
              "options": [
                "A single tutorial fork with no original code",
                "Many repositories with no test suites or documentation",
                "A few well-maintained projects with tests, documentation, and deployed addresses",
                "A private repository shared only with one hiring manager"
              ],
              "correctAnswer": 2,
              "hintPageId": "m6.2-page-4"
            }
          ]
        }
      ]
    },
    {
      "id": "module-6.3",
      "title": "Module 6.3 — Wallet Security and OPSEC",
      "pages": [
        {
          "id": "m6.3-video",
          "title": "Wallet Security and OPSEC",
          "type": "video",
          "youtubeId": "7dCEEFuMVnA",
          "content": "Welcome to Module 6.3. In this module, we will examine the modern Web3 threat landscape, deep-dives into phishing, seed phrase safety, hardware wallets, and standard operational security (OPSEC) habits to safeguard your digital assets."
        },
        {
          "id": "m6.3-page-1",
          "title": "The 2026 Threat Landscape",
          "content": `**$17 billion** in crypto was lost to scams and fraud in 2025 alone. The Bybit hack drained $1.5 billion from what was supposed to be an institutional-grade cold wallet. Attackers do not break cryptography. They break humans.

AI has transformed scam operations at scale. TRM Labs reported a 456 percent surge in generative-AI scam activity between May 2024 and April 2025. Chainalysis found that approximately 60 percent of all deposits into scam wallets now come from operations using AI tools. Deepfake video and voice cloning are standard. A fraudster can generate a video of a CEO announcing an emergency token sale, distribute it across Telegram and X, and drain wallets within hours. Deepfake-driven executive impersonation caused over $200 million in losses in 2025 alone. The attacks thrive in remote environments where identity verification is weak.

Phishing has evolved beyond bad grammar. Generative AI crafts emails, dashboards, and chat messages that mimic tone, reference personal details scraped from social media, and create urgency without obvious red flags. Malicious smart contracts called wallet drainers trick users into signing transactions that appear legitimate on screen but transfer all assets in the background.

The seed phrase remains the single point of failure for most users. A seed phrase is a sequence of 12 or 24 words that generates all private keys in a wallet. If someone obtains it, they control every address derived from it. There is no recovery. Malware like RedLine and Vidar actively scans devices for seed phrases stored in screenshots, notes apps, cloud drives, and password managers. The rule is absolute: **never store a seed phrase digitally**. Write it on paper or stamp it onto a metal plate, then store that plate in a fireproof safe or a bank deposit box. Consider a passphrase, the optional 25th word, which creates a hidden wallet accessible only with the additional word.

Hardware wallets are the gold standard for personal security. A hardware wallet is a dedicated device that stores private keys in a secure chip isolated from internet-connected computers. The keys never leave the device. When you sign a transaction, you verify the details on the hardware wallet's physical screen, not your computer screen. This prevents malware from showing you one transaction while signing another. Buy directly from the manufacturer. Third-party sellers on Amazon or eBay have been caught pre-loading devices with malware. Verify the transaction on the device screen every time. Never blind sign, which means approving a transaction without reading what it does.

Use authenticator apps like Google Authenticator or Authy, or better, hardware security keys like YubiKey that are phishing-resistant by design.`
        },
        {
          "id": "m6.3-page-2",
          "title": "When Prevention Fails — Incident Response and Safe Practices",
          "content": `Even with perfect habits, compromise happens. The difference between a total loss and a recoverable situation is knowing what to do in the first ten minutes.

### Incident Response in Four Steps

**Step one: stop the bleeding.** If you suspect a malicious approval, revoke it immediately. A token approval is a permission you grant to a smart contract, allowing it to move tokens from your wallet. Most DeFi protocols request unlimited approval by default, which means the contract can drain your entire balance of that token at any time. Use revoke.cash, Unrekt, or your wallet's built-in approval checker to audit and remove permissions you no longer need. This costs gas, but it is cheaper than losing everything.

**Step two: move remaining assets.** If a wallet is compromised, create a new wallet with a fresh seed phrase and transfer any assets that have not been taken. Do not reuse the compromised seed phrase. Do not assume the attacker only took one token.

**Step three: document everything.** Screenshot transaction hashes, note the time, and identify the contract address that drained the funds. This documentation helps with exchange reports, law enforcement, and community warnings.

**Step four: report.** Contact the exchange if funds moved through one. File a report with local cybercrime units. Post the contract address and attack pattern on X and in security-focused communities to warn others.

### The Blast Radius Strategy

The blast radius strategy prevents single points of failure from becoming total losses.

- **Hot wallet:** a software wallet on your phone or browser for daily spending and DeFi. Keep only what you need for the month.
- **Cold wallet:** a hardware device holding 80 to 90 percent of your portfolio. These keys never touch the internet.
- **Burner wallet:** a separate wallet for airdrops, new NFT mints, and untested dApps. Fund it with the bare minimum. If it gets drained, your savings are untouched.

### Transaction Hygiene

Transaction hygiene is non-negotiable. Check URLs character by character. Bookmark official sites. Send test transactions of $1 to $10 before large transfers. Verify recipient addresses on the hardware wallet screen, not the clipboard, because malware can replace addresses after you copy them. Treat every direct message as hostile. Legitimate support never contacts you first.

For DeFi specifically, start small. Test protocols with minimal amounts. Check whether the smart contracts have been audited by reputable firms like OpenZeppelin, Trail of Bits, or Spearbit. Read the audit reports, not just the badge. Understand that an audit reduces risk but does not eliminate it. **Do not trust. Verify.**`
        },
        {
          "id": "m6.3-quiz",
          "title": "Module 6.3 Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "What was the approximate total value of crypto lost to scams and fraud in 2025?",
              "options": [
                "$1.5 billion",
                "$820 million",
                "$17 billion",
                "$200 million"
              ],
              "correctAnswer": 2,
              "hintPageId": "m6.3-page-1"
            },
            {
              "id": "q2",
              "question": "According to Chainalysis, what percentage of deposits into scam wallets now come from operations using AI tools?",
              "options": [
                "Approximately 60 percent",
                "200 percent",
                "456 percent",
                "89 percent"
              ],
              "correctAnswer": 0,
              "hintPageId": "m6.3-page-1"
            },
            {
              "id": "q3",
              "question": "What is the primary purpose of a hardware wallet's physical screen during transaction signing?",
              "options": [
                "To display the current price of the cryptocurrency being sent",
                "To connect to the internet for real-time exchange rate data",
                "To store the seed phrase for backup purposes",
                "To verify transaction details independently of the computer, preventing malware from showing false information"
              ],
              "correctAnswer": 3,
              "hintPageId": "m6.3-page-1"
            },
            {
              "id": "q4",
              "question": "Why is SMS-based two-factor authentication considered unsafe for crypto accounts in 2026?",
              "options": [
                "Because SMS messages are encrypted end-to-end by default",
                "Because SIM-swap attacks allow criminals to intercept text messages by porting phone numbers",
                "Because SMS delivery is too slow for time-sensitive transactions",
                "Because mobile carriers have banned SMS for financial services"
              ],
              "correctAnswer": 1,
              "hintPageId": "m6.3-page-1"
            },
            {
              "id": "q5",
              "question": "What does a token approval allow a smart contract to do?",
              "options": [
                "Mine new tokens on behalf of the user",
                "Automatically stake tokens in a validator node",
                "Move specific tokens from the user's wallet within the granted permissions",
                "Change the user's seed phrase"
              ],
              "correctAnswer": 2,
              "hintPageId": "m6.3-page-2"
            },
            {
              "id": "q6",
              "question": "In the blast radius strategy, what is the recommended percentage of a portfolio to hold in a cold wallet?",
              "options": [
                "10 to 20 percent",
                "50 percent",
                "100 percent",
                "80 to 90 percent"
              ],
              "correctAnswer": 3,
              "hintPageId": "m6.3-page-2"
            },
            {
              "id": "q7",
              "question": "What is the correct first step when responding to a suspected wallet compromise?",
              "options": [
                "Revoke any suspicious token approvals to stop further unauthorized transfers",
                "Post about the incident on social media immediately",
                "Contact the hardware wallet manufacturer for a refund",
                "Reuse the same seed phrase on a new wallet"
              ],
              "correctAnswer": 0,
              "hintPageId": "m6.3-page-2"
            },
            {
              "id": "q8",
              "question": "What is blind signing, and why should it be avoided?",
              "options": [
                "A method of signing that requires no internet connection",
                "Signing a transaction without reading the details on the hardware wallet screen, which allows malware to execute hidden transfers",
                "A technique for signing multiple transactions simultaneously",
                "Signing with eyes closed for biometric verification"
              ],
              "correctAnswer": 1,
              "hintPageId": "m6.3-page-1"
            }
          ]
        }
      ]
    },
    {
      "id": "module-6.4",
      "title": "Module 6.4 — Putting It All Together: Your Blockchain World View",
      "pages": [
        {
          "id": "m6.4-page-1",
          "title": "How the Pieces Connect",
          "content": `You started six weeks ago not knowing what a hash is. Now you can trace a transaction from a wallet tap all the way down to the consensus layer and back up to a real-world use case. Before you graduate, you need to see the full picture in one place.

A single transaction ties everything together.

You open your wallet and send 50 USDC to a friend in another country. Your wallet is a smart contract wallet using ERC-4337 account abstraction, so you pay no gas because a paymaster sponsors it. The transaction hits a bundler, which packages it with others and submits it to a Layer 2 sequencer on Arbitrum. The sequencer orders transactions into a batch and posts a compressed data blob to Ethereum using EIP-4844. Ethereum validators, running proof of stake, include that blob in a block and attest to its validity. The USDC contract, deployed years ago and audited by three firms, updates its internal ledger: your balance decreases, your friend's increases. Your friend receives a notification on their mobile money app, which reads the on-chain event through an RPC provider and credits their local currency wallet. The whole thing took four seconds and cost a fraction of a cent.

Inside that one transaction, every concept from this course fired: hashing, public-key cryptography, consensus, Layer 2 scaling, account abstraction, stablecoin mechanics, RPC infrastructure, and real-world integration. None of it works in isolation.

The hash ensures nobody tampered with the transaction data. The consensus mechanism ensures the network agrees that the transaction happened. The Layer 2 ensures it was cheap and fast. The smart contract enforced the transfer rules without a middleman. The stablecoin kept the value steady, so your friend received what you sent. The mobile money integration meant your friend never saw a blockchain, just money arriving.

What looked like a simple payment is actually a symphony of interdependent systems, and you now understand every instrument in it.`
        }
      ]
    }
  ]
};
