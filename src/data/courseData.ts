export const courseData = {
  id: "blockchain-101",
  title: "Blockchain 101",
  description: "Comprehensive, interactive courses designed to take you from blockchain beginner to Web3 native.",
  introduction: [
    {
      id: "welcome-intro",
      title: "Video: Welcome to Blockchain 101",
      type: "video",
      videoUrl: "https://supercut.ai/embed/haneefff/5cvLyx0yEaSTGXsFXkSdx5?embed=sidebar",
      isWelcome: true
    }
  ],
  parts: [
    {
      id: "part-1",
      title: "Part 1: The Foundation",
      description: "Before anyone can understand blockchain, they need to understand the problem it was built to solve.",
      modules: [
        {
          id: "module-1.1",
          title: "Module 1.1 — Decentralization and the Internet of Value",
          pages: [
            {
              id: "intro-video-1.1",
              title: "Module Introduction",
              type: "video",
              youtubeId: "8XvTfgyXnAs" // Placeholder
            },
            {
              id: "m1.1-page-1",
              title: "The Problem With the Internet Today",
              content: `You use the internet every day, streaming music, posting content, sending money to friends, and building audiences. But here's something most people never stop to think about: **almost everything you do online goes through someone else's system.**

When you stream a song on Spotify, Spotify decides how much the artist gets paid. When you post on Instagram, Instagram decides who sees it. When you send money on PayPal or Cash App, those companies decide whether the transaction goes through, how long it takes, and whether your account stays open.

**You are the user, but you are not in control.**

This is how the internet was built. Every app, every platform, every payment system you use is run by a company sitting in the middle of your transaction. They built the infrastructure, you agreed to their terms, and now they hold the keys.

The consequences show up in ways that feel unfair but are completely legal.

A content creator spends three years building an audience on YouTube, and one day, the algorithm changes. Their videos stop getting recommended, their income drops by 80% overnight, and they did nothing wrong. A small business owner tries to receive payment from a client abroad, and the wire transfer takes five days and costs fifteen dollars in fees, passing through several middlemen before it arrives.

These happen constantly, and they all share the same root cause: **somewhere between you and what you're trying to do, there is a company with the power to say no.**`
            },
            {
              id: "m1.1-page-2",
              title: "How Value Moves Online Right Now",
              content: `Think about what happens when you send twenty dollars to a friend using your bank's app.

**No physical cash moves.** Your bank lowers the number in your account and sends a message to your friend's bank, which raises the number in your friend's account. Simple enough, but that message rarely travels in a straight line. It usually passes through one or more clearinghouses, sometimes multiple intermediary banks, each one adding a small cut or a delay.

Depending on where you are, a domestic bank transfer can take anywhere from a few seconds to several business days, and your transaction might only be processed on a business day, so weekends and public holidays push the wait even further. Cross-border transfers are worse, often stretching to **five business days or more**, and that's assuming no intermediary bank holds it up along the way. You're moving a number in a database, and somehow it takes longer than shipping a physical package.

Apps like Venmo or Cash App feel instant because they **cheat a little.** If you and your friend both use the same app, the company just updates two numbers on their internal spreadsheet, and no bank moves anything in that moment. That's also why sending money between users on the same app is usually free, as long as you're paying from your balance or a debit card.

Now think about value that isn't money.

You spend two years posting on TikTok and build 400,000 followers. That audience has real value, but **you don't own it.** If the app gets banned in your country or your account gets suspended, that entire audience disappears. You can't export it or take it somewhere else, because it lives on their servers, under their rules.

This is how value moves on the internet right now, through private pipes owned by companies you don't control, governed by terms of service you probably never read.`
            },
            {
              id: "m1.1-page-3",
              title: "Centralization vs. Decentralization",
              content: `So what does it actually mean when something is **"centralized"**?

It means one entity controls the system. One company owns the servers, one platform sets the rules, one bank holds the ledger. When you use that system, you are a guest in someone else's house, and they decide what you can do and when you can leave.

Almost everything you use online is centralized. Google controls search, Meta controls Facebook and Instagram, and Visa and Mastercard control most of the world's card payments. These companies built real infrastructure that solved real problems, but centralization comes with trade-offs that mostly benefit the company rather than you.

**Decentralization** flips that model. Instead of one entity controlling everything, control is spread across many participants, with no single point of failure and no single company with the power to shut things down. The rules are written into the system itself. Trust is built into the system.

Here's a concrete way to think about it. Imagine a **Google Doc** versus a **printed flyer.**
The Google Doc lives on Google's servers, which means Google can delete it, restrict access to it, or change the rules around it at any time. The printed flyer, once it's out in the world, exists across hundreds of copies. Nobody can unpublish it or change what it says after the fact.

Decentralized systems work more like the flyer. The record exists across many computers at once, and no single person or company owns the master copy.

~~~interactive-network
~~~`
            },
            {
              id: "m1.1-page-4",
              title: "The Vision — An Internet of Value",
              content: `Information on the internet moves freely. 
You can send an email to someone in Japan in under a second, share a video and have it watched by a million people overnight, and the cost of moving information across the world has dropped to almost zero.

**Moving value is a different story.** Sending money internationally still takes days, owning a digital asset still means trusting a company to hold it for you, and building an audience still means building it on someone else's platform.

The vision behind blockchain starts with a simple question: **What if value could move the way information moves?**

What if you could send money directly to someone in another country the same way you send them a text? What if you could own a digital asset the way you own a file on your hard drive, rather than as a number in some company's database? What if you could build an audience or a business on infrastructure that nobody controls and nobody can take from you?

That's the idea behind what we call the **"Internet of Value."** It's a fundamentally different model for how ownership and transactions work online, and blockchain is the technology being built to get there.

Keep this in mind as we go deeper into the technical stuff: every concept we cover in this course exists because someone was trying to solve the problems you just read about.`
            },
            {
              id: "m1.1-page-5",
              title: "Module Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "A content creator builds a massive audience on a platform, then loses access to their account overnight with no explanation. What does this situation best illustrate?",
                  options: [
                    "The internet is too slow for modern use",
                    "Centralized platforms have the power to take away access",
                    "Content creators should use multiple platforms at once",
                    "Social media companies are poorly managed"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.1-page-1"
                },
                {
                  id: "q2",
                  question: "When you send money through a banking app, what is actually happening behind the scenes?",
                  options: [
                    "Physical cash is transported between bank vaults",
                    "A government agency approves and moves the funds",
                    "Your bank lowers a number in your account and messages the recipient's bank to raise a number in theirs",
                    "The two banks exchange gold reserves to balance the transaction"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.1-page-2"
                },
                {
                  id: "q3",
                  question: "Why do apps like Venmo or Cash App feel instant when sending money to another user on the same platform?",
                  options: [
                    "They use a faster version of the traditional banking system",
                    "They have special government licenses that speed up transfers",
                    "They bypass banks entirely for all transactions",
                    "They just update two numbers on their own internal spreadsheet without involving external banks"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m1.1-page-2"
                },
                {
                  id: "q4",
                  question: "Which of these best describes a decentralized system?",
                  options: [
                    "A system run by a very large company with many employees",
                    "A system where control is spread across many participants rather than held by one entity",
                    "A system that operates faster than traditional platforms",
                    "A system owned jointly by two or more competing companies"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.1-page-3"
                },
                {
                  id: "q5",
                  question: "In the Google Doc versus printed flyer comparison, what point was being made about decentralization?",
                  options: [
                    "Printed materials are more reliable than digital ones",
                    "Google Docs is better for collaboration",
                    "When a record exists across many copies, no single party can delete or alter it after the fact",
                    "Decentralized systems work better offline"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.1-page-3"
                },
                {
                  id: "q6",
                  question: "A freelancer in Lagos waits two weeks for an international wire transfer to clear. What is the core reason this happens?",
                  options: [
                    "African banks are less technologically advanced",
                    "The freelancer's internet connection caused the delay",
                    "International regulations require waiting periods for security",
                    "The transaction has to pass through multiple intermediary banks, each adding fees and delays"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m1.1-page-2"
                },
                {
                  id: "q7",
                  question: "What is the main idea behind the \"Internet of Value\"?",
                  options: [
                    "Making social media platforms pay creators more fairly",
                    "Building faster internet infrastructure in developing countries",
                    "Creating a digital world where value like money and assets can move as freely and directly as information does today",
                    "Replacing physical banks with online-only banking apps"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.1-page-4"
                }
              ]
            }
          ]
        },
        {
          id: "module-1.2",
          title: "Module 1.2 — What Is Blockchain?",
          pages: [
            {
              id: "intro-video-1.2",
              title: "Module Introduction",
              type: "video",
              youtubeId: "HYIxrVtJUF0"
            },
            {
              id: "m1.2-page-1",
              title: "What Is Blockchain?",
              content: `A blockchain is a distributed ledger in which transactions are stored in blocks, and each block is linked to the one before it using a hash. That structure gives blockchain four core properties:

- **Decentralized** — there is no central point of failure or authority. No single company or government owns it.
- **Immutable** — everything recorded on the blockchain is permanent. Transactions cannot be reversed or quietly edited after the fact.
- **Transparent** — the entire record is open for anyone to see and verify.
- **Secure** — the whole system is protected by cryptography, which we'll get into properly in the next module.

What all that jargon means in plain terms is this: 

A Blockchain is a shared record book that nobody owns, but everybody can check. Transactions are grouped into blocks, each block is chained to the one before it, and thousands of computers around the world hold a copy of the whole thing. Because of that, nobody can sneak in and change the record without everyone else noticing.`
            },
            {
              id: "m1.2-page-2",
              title: "Why That Matters",
              content: `Think about Walmart. Every day, thousands of transactions flow through their system: payments from customers, payments to suppliers, and internal transfers between departments. All of that data lives in a private database that Walmart controls. A database administrator with the right access could, in theory, delete certain transaction records and redirect that money elsewhere. The company would have to catch it through internal audits, which can be slow, incomplete, or manipulated by the same people running them.

On a blockchain, that kind of quiet manipulation is practically impossible. Every transaction is recorded permanently and visible to anyone, so there's no dark corner where money can disappear without a trace.

Now think about government spending. 

A country allocates billions of dollars to healthcare, education, and infrastructure every year. Citizens are told the money went where it was supposed to go, but verifying that is nearly impossible because the records are held by the same institutions spending the money. 

A blockchain-based system would let any citizen, journalist, or watchdog organisation track every single allocation in real time, from the government's wallet all the way to the contractor receiving payment—nothing hidden, nothing editable.

Voting works the same way. Elections get disputed because the counting process happens behind closed doors, and people have to trust that whoever is running it is being honest. With blockchain, every vote could be recorded as a transaction, permanently logged and publicly verifiable, so any voter could confirm their vote was counted correctly without revealing who they voted for. The result would be auditable by anyone, not just officials appointed by the same government running the election.

The pattern across all three of these is the same. Whenever you have a situation where one party controls an important record, and everyone else has to trust them, blockchain offers an alternative in which the record is owned by no one and verifiable by everyone. The blockchain is trust built into the system.`
            },
            {
              id: "m1.2-page-3",
              title: "Look into a blockchain",
              type: "interactive",
              componentId: "SolscanIframe"
            },
            {
              id: "m1.2-page-4",
              title: "Module Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "What does \"immutable\" mean in the context of blockchain?",
                  options: [
                    "The blockchain can only be edited by verified administrators",
                    "Only the most recent transactions can be modified",
                    "The blockchain automatically corrects errors in transaction data",
                    "Transactions recorded on the blockchain are permanent and cannot be changed or reversed"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m1.2-page-1"
                },
                {
                  id: "q2",
                  question: "What does it mean for a blockchain to be decentralized?",
                  options: [
                    "There is no single central authority or point of failure controlling the system",
                    "The blockchain is managed by a team of independent auditors",
                    "Multiple companies share equal ownership of the blockchain",
                    "The blockchain is stored on one very powerful server instead of many small ones"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m1.2-page-1"
                },
                {
                  id: "q3",
                  question: "In the Walmart example, what risk exists with a traditional private database?",
                  options: [
                    "The database is too slow to handle large transaction volumes",
                    "Private databases cannot store financial transactions securely",
                    "Walmart's competitors can access and steal transaction data",
                    "Someone with internal access could delete or alter records and pocket money without easy detection"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m1.2-page-2"
                },
                {
                  id: "q4",
                  question: "How would blockchain change government spending accountability?",
                  options: [
                    "It would automatically redistribute funds if they were misallocated",
                    "It would allow every allocation to be tracked in real time by anyone, making the quiet misuse of funds far harder",
                    "It would replace government financial departments with automated systems",
                    "It would give citizens the power to approve or reject government budgets"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.2-page-2"
                },
                {
                  id: "q5",
                  question: "Why would blockchain-based voting be more trustworthy than traditional voting systems?",
                  options: [
                    "It would eliminate the need for candidates to campaign",
                    "It would make voting faster and accessible from any smartphone",
                    "It would prevent people from voting more than once by requiring ID verification",
                    "Every vote would be permanently recorded and publicly verifiable, so anyone could confirm the count without trusting a central authority"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m1.2-page-2"
                },
                {
                  id: "q6",
                  question: "What is the simple, plain-English definition of a blockchain?",
                  options: [
                    "An encrypted messaging system for sending money between users",
                    "A shared record book that nobody owns but everybody can check, stored across thousands of computers",
                    "A government-approved digital ledger for recording financial transactions",
                    "A private database owned by a network of cooperating banks"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.2-page-1"
                },
                {
                  id: "q7",
                  question: "Which of these situations best describes a problem that blockchain is designed to solve?",
                  options: [
                    "A payment app charging high fees for currency conversion",
                    "A social media company struggling to moderate harmful content",
                    "A streaming platform's servers going offline during peak hours",
                    "A single party controlling an important record that everyone else has to trust without being able to verify"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m1.2-page-2"
                }
              ]
            }
          ]
        },
        {
          id: "module-1.3",
          title: "Module 1.3 — Blockchain Basics: Hashing",
          pages: [
            {
              id: "intro-video-1.3",
              title: "Module Introduction",
              type: "video",
              youtubeId: "L6mI8VDXLoI"
            },
            {
              id: "m1.3-page-1",
              title: "What Is a Hash?",
              content: `Before we get into how blockchain secures its data, we need to talk about one of the most important tools making it all work: the hash.

A hash is essentially a digital fingerprint. You feed any piece of data into a hashing function, whether that's a single word, a paragraph, or an entire file, and it spits out a fixed-length string of letters and numbers. That output is the hash.

Here's what makes it interesting.

The same input will always produce the exact same output, every single time, no matter which computer runs it or where in the world it happens. "Hello" will always hash to the same string. Always.

But change even one tiny thing about the input, swap a capital H for a lowercase h, add a single space, change one digit in a number, and the output changes completely. Not slightly. Completely. A totally different string comes out, with no resemblance to the original hash whatsoever. This is called the avalanche effect, and it's exactly what makes hashing so powerful for security.

~~~interactive-hash
~~~

To make this concrete, imagine you have a combination lock, and instead of storing the actual combination, the lock only stores a scrambled version of it. When you enter your combination, the lock scrambles what you typed and checks if the scrambled version matches what it stored. It never needs to know your actual combination to verify you got it right.

That's essentially what a hash does.`
            },
            {
              id: "m1.3-page-2",
              title: "Why Hashes Are One-Way",
              content: `Here's the part that makes hashing genuinely clever: you can run data through a hashing function and get an output, but you cannot work backwards from the output to figure out what the original input was. The process only goes one direction. This has a very practical implication: you can prove that you know something without ever revealing what that thing is.

Think about it like this. You and your friend are playing a prediction game. Before a match starts, you want to prove that you predicted the final score correctly, but you don't want to tell your friend your prediction upfront because that would let them just copy your answer.

So instead of telling them your prediction, you hash it and send them the hash. They write it down. The match ends, you reveal your original prediction, they run it through the same hashing function, and the output either matches what you sent them earlier or it doesn't. If it matches, you clearly had that prediction before the game started, because nobody could fake a hash that matches after the fact.

Your friend was able to verify your prediction without you ever revealing it before the game. That's the power of one-way hashing.

In blockchain, this matters enormously. Every block contains the hash of the block before it, which means the entire history of transactions can be verified by anyone without needing to expose or trust any raw data. If someone quietly edits an old transaction, its hash changes, which breaks the chain, and every computer on the network notices immediately.

Hashing is what makes the blockchain tamper-proof.`
            },
            {
              id: "m1.3-page-3",
              title: "Module Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "What is a hash?",
                  options: [
                    "A password used to access a blockchain wallet",
                    "A fixed-length output produced by running data through a hashing function, acting as a digital fingerprint for that data",
                    "An encrypted message sent between two blockchain users",
                    "A record of all transactions stored inside a single block"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.3-page-1"
                },
                {
                  id: "q2",
                  question: "If you hash the word \"blockchain\" today and hash it again next week on a different computer, what happens?",
                  options: [
                    "The output will be slightly different each time due to processing variations",
                    "The output will only match if both computers use the same internet connection",
                    "The output will be completely different because hashing is random",
                    "The output will be identical both times, because the same input always produces the same hash"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m1.3-page-1"
                },
                {
                  id: "q3",
                  question: "You change one letter in a sentence and hash it again. What happens to the output?",
                  options: [
                    "The output changes slightly, reflecting the small edit",
                    "The output stays the same because one character is too small to matter",
                    "The output changes completely, bearing no resemblance to the original hash",
                    "The hashing function returns an error when it detects a change"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.3-page-1"
                },
                {
                  id: "q4",
                  question: "What does it mean for a hashing function to be \"one-way\"?",
                  options: [
                    "It can only be used once before it needs to be reset",
                    "It works differently depending on which direction the data is travelling",
                    "You can produce a hash from data, but you cannot work backwards from the hash to recover the original data",
                    "It only processes data from left to right"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.3-page-2"
                },
                {
                  id: "q5",
                  question: "In the prediction game scenario, how does hashing allow you to prove your prediction without revealing it early?",
                  options: [
                    "You encrypt your prediction and share the decryption key after the game",
                    "You send the hash of your prediction before the game, then reveal the original prediction after, and anyone can verify they match",
                    "You ask a referee to hold your prediction in a sealed envelope",
                    "You post your prediction publicly, but in a language your friend doesn't understand"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.3-page-2"
                },
                {
                  id: "q6",
                  question: "Why does hashing make blockchain tamper-proof?",
                  options: [
                    "Because only verified users are allowed to add new blocks",
                    "Because the blockchain automatically restores deleted data from a backup",
                    "Because each block contains the hash of the block before it, so editing any old transaction changes its hash and breaks the chain for every computer on the network",
                    "Because hashing makes transaction data invisible to anyone without special access"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.3-page-2"
                },
                {
                  id: "q7",
                  question: "Which of these best describes the avalanche effect?",
                  options: [
                    "When too many transactions happen at once, the blockchain slows down significantly",
                    "When a hashing function produces longer outputs for larger inputs",
                    "When a tiny change in the input causes a completely different hash output",
                    "When one corrupted block causes all subsequent blocks to duplicate themselves"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.3-page-1"
                }
              ]
            }
          ]
        },
        {
          id: "module-1.4",
          title: "Module 1.4 — Blockchain Basics: Blocks",
          pages: [
            {
              id: "intro-video-1.4",
              title: "Module Introduction",
              type: "video",
              youtubeId: "yVz8zWhl34w"
            },
            {
              id: "m1.4-page-1",
              title: "What Is a Block?",
              content: `Think of a block as a page in a notebook. Every page holds a record of things that happened, and when the page is full, you start a new one. Blocks work the same way, except instead of handwritten notes, each block holds a structured set of data, and every single field in that structure has a specific job.

Here's what lives inside a block:

**Transactions:** This is the actual content of the block, the record of what happened. On Bitcoin, transactions are payments: who sent how much to whom. On other blockchains, transactions can be more complex, like executing a piece of code or recording ownership of an asset. A single block can hold hundreds or even thousands of transactions bundled together.

**Timestamp:** Every block carries a record of exactly when it was created. This makes the blockchain a chronological ledger, so you can always tell not just what happened, but when it happened relative to everything else.

**Previous Hash:** This is where things get interesting. Every block contains the hash of the block that came before it. That single field is what turns a collection of separate blocks into a chain. It's the block saying, "I am officially attached to what came before me." Remove or alter that field, and the connection breaks.

**Nonce:** The nonce is a number that miners adjust repeatedly while trying to solve the computational puzzle required to add a new block to the chain. We'll cover this properly in Module 1.6, but for now, just know it's there, and it plays a critical role in keeping the blockchain secure.

Each block is essentially a sealed package. Once it's added to the chain, everything inside it—the transactions, the timestamp, the hashes—is locked in permanently. Change anything inside, and the block's hash changes, which immediately signals to the entire network that something was tampered with.`
            },
            {
              id: "m1.4-page-2",
              title: "Why One Block Isn't Enough",
              content: `A single block on its own is just a record. It's useful the same way a sticky note is useful: it holds information, but it has no real relationship to anything else. You could rewrite it, replace it, or throw it away, and nothing would stop you.

That's the problem with storing data in isolated records. They're easy to manipulate because they don't depend on each other. A corrupt database administrator, a dishonest official, or anyone with access can quietly edit a standalone record without leaving a visible trail.

**The chain changes that completely.**

Because every block contains the hash of the block before it, each block is mathematically dependent on its entire history. Block 500 doesn't just know what happened in block 500; it carries a fingerprint of block 499, which carried a fingerprint of block 498, all the way back to the very first block ever created, which is called the **Genesis Block**.

This means if you go back and try to alter a transaction in block 200, the hash of block 200 changes. That change breaks block 201, which breaks block 202, and so on, all the way up the chain. Every computer on the network, holding its own copy of the blockchain, would see the discrepancy instantly.

~~~interactive-block
~~~

One block is a record. A chain of blocks is a history that cannot be quietly rewritten.

That's what we're building towards, and in the next module, we'll get into exactly how the chain works and what happens when someone tries to break it.`
            },
            {
              id: "m1.4-page-3",
              title: "Module Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "What is the main purpose of the timestamp inside a block?",
                  options: [
                    "It tells the network how long the block took to mine",
                    "It records exactly when the block was created, making the blockchain a chronological ledger",
                    "It sets an expiry date after which the block's data can be updated",
                    "It synchronizes all computers on the network to the same clock"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.4-page-1"
                },
                {
                  id: "q2",
                  question: "What does the \"previous hash\" field inside a block actually do?",
                  options: [
                    "It stores a backup copy of the previous block's transactions",
                    "It records the identity of the miner who created the previous block",
                    "It links the current block to the one before it, forming the chain",
                    "It verifies that the current block's transactions are error-free"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.4-page-1"
                },
                {
                  id: "q3",
                  question: "What is a nonce?",
                  options: [
                    "The unique identifier assigned to each transaction inside a block",
                    "A number that miners adjust repeatedly while trying to solve the puzzle required to add a new block",
                    "The digital signature of the person who initiated the most recent transaction",
                    "A checksum used to detect errors in transaction data"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.4-page-1"
                },
                {
                  id: "q4",
                  question: "Why is a single block on its own easy to manipulate?",
                  options: [
                    "Single blocks are not encrypted, so anyone can read and edit them",
                    "They are stored on only one computer, making them easy to access",
                    "They hold too many transactions to verify properly",
                    "It has no mathematical relationship to any other record, so it can be altered without breaking anything else"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m1.4-page-2"
                },
                {
                  id: "q5",
                  question: "What is the Genesis Block?",
                  options: [
                    "The block that contains the largest number of transactions ever recorded",
                    "The most recently added block on the blockchain",
                    "The very first block ever created, which every subsequent block traces back to",
                    "A special block reserved for recording the identities of blockchain validators"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.4-page-2"
                },
                {
                  id: "q6",
                  question: "If someone alters a transaction inside block 200 of a blockchain, what happens?",
                  options: [
                    "The network automatically corrects the error and restores the original transaction",
                    "Only block 200 is affected, and the rest of the chain remains intact",
                    "The hash of block 200 changes, breaking block 201 and every block after it, which every computer on the network notices immediately",
                    "The altered block gets flagged and removed, but the chain continues normally"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.4-page-2"
                },
                {
                  id: "q7",
                  question: "What is the key difference between a single block and a chain of blocks?",
                  options: [
                    "A chain of blocks holds more transactions per block than a single block does",
                    "A single block is just a record, but a chain of blocks is a history that cannot be quietly rewritten because every block is mathematically dependent on the one before it",
                    "A chain of blocks is faster to verify because each block is smaller",
                    "A single block uses a different hashing algorithm than blocks inside a chain"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.4-page-2"
                }
              ]
            }
          ]
        },
        {
          id: "module-1.5",
          title: "Module 1.5 — Blockchain Basics: The Chain",
          pages: [
            {
              id: "intro-video-1.5",
              title: "Module Introduction",
              type: "video",
              youtubeId: "bfe0rdpfps0"
            },
            {
              id: "m1.5-page-1",
              title: "Chaining the Blocks",
              content: `You now know what lives inside a block. The transactions, the timestamp, the nonce, and crucially, the hash of the block that came before it. That last field is the one that does something remarkable: it turns a collection of separate blocks into a chain.

Here's how to picture it.

Imagine three blocks sitting in a row.

**Block 1 (The Genesis Block)**
Transactions: Alice sends 5 coins to Bob
Timestamp: Jan 1, 2024
Previous Hash: 00000 (none, this is the first block)
Its own Hash: **A3F9**

**Block 2**
Transactions: Bob sends 3 coins to Carol.
Timestamp: Jan 1, 2024.
Previous Hash: **A3F9** (Block 1's hash)
Its own Hash: **B7D2**

**Block 3**
Transactions: Carol sends 1 coin to Dave.
Timestamp: Jan 1, 2024.
Previous Hash: **B7D2** (Block 2's hash)
Its own Hash: **C1E8**

See what's happening? Block 2 is holding Block 1's hash inside it. Block 3 is holding Block 2's hash inside it. Each block is mathematically gripping the one before it, like links in a physical chain. Pull one out, and the connection snaps.

Because each block's hash is calculated from everything inside it, including the previous block's hash, every single block in the chain is a product of everything that came before it. The entire history of the blockchain is baked into every new block added.`
            },
            {
              id: "m1.5-page-2",
              title: "What Happens When You Tamper?",
              content: `Now that you understand how the chain connects, let's see what happens when someone tries to mess with it.

Say a bad actor wants to go back and change a transaction in Block 2. Maybe they want to erase a payment they made or pretend a transfer never happened.

They go into Block 2 and edit the transaction. The moment they do that, the data inside Block 2 changes. And because the hash is a fingerprint of everything inside the block, the hash of Block 2 changes too. Where it used to say **B7D2**, it now produces a completely different hash, something like **X4K1**.

Here's where the chain fights back.

Block 3 was built using **B7D2** as its "previous hash." That's what it has stored inside it. But now Block 2's real hash is **X4K1**, so Block 3's previous hash field no longer matches reality. **Block 3 is now invalid.**

To fix that, the attacker would have to go into Block 3 and update its previous hash to **X4K1**. But the moment they touch Block 3, its own hash changes too, which breaks Block 4. Fixing Block 4 breaks Block 5. And so on, all the way up to the most recently added block.

So tampering with one block doesn't just corrupt that block. It forces the attacker to redo every single block that came after it, and on a blockchain that's been running for years, that could mean hundreds of thousands of blocks.

That's already an enormous amount of work. But on its own, it's still theoretically possible if someone has enough computing power. Which is exactly why the chain doesn't live on just one computer.`
            },
            {
              id: "m1.5-page-3",
              title: "Single Chain vs. Distributed Chain",
              content: `Imagine the entire blockchain lived on one computer, owned by one company. Even with all the hashing and chaining, that company could theoretically sit down, redo all the blocks from scratch, and replace the chain with a fraudulent version. Nobody else has a copy to compare it against, so nobody would know.

This is why the blockchain is **distributed**.

Thousands of computers around the world, called **nodes**, each hold a complete copy of the entire blockchain. When a new block is added, it gets broadcast to all of them, and they all update their copy. There is no master server. There is no headquarters. The chain exists across all of them simultaneously.

Now think about what that means for our attacker.

To successfully tamper with Block 2, they don't just have to redo every block after it on their own copy. They have to redo all of those blocks faster than the rest of the network is adding new honest blocks, and then convince the majority of thousands of computers around the world to accept their fraudulent version instead.

This is where the **longest chain rule** comes in.

When nodes on the network disagree about which version of the chain is the real one, they follow a simple rule: **the longest chain wins.** The reasoning is straightforward. The longest chain represents the most cumulative work done. It's the one that most computers have been honestly building on. A shorter chain, even a technically valid one, gets rejected in favour of the longer one.

So an attacker trying to rewrite history would have to build a fraudulent chain that is not just valid, but longer than the honest chain that thousands of computers are actively adding to in real time. The honest network is always moving forward, always adding blocks, always getting longer. The attacker would have to outpace all of that simultaneously while also redoing all the historical blocks they tampered with.

At any realistic scale, that's practically impossible. And that's the point.

~~~interactive-chain
~~~

One block is a record. A chain of blocks is a history that cannot be quietly rewritten.

That's what we're building towards, and in the next module, we'll get into exactly how the chain works and what happens when someone tries to break it.`
            },
            {
              id: "m1.5-page-4",
              title: "Module Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "What specifically creates the \"chain\" in blockchain?",
                  options: [
                    "Blocks are stored in the same database folder on every computer",
                    "Each block contains the hash of the block before it, mathematically linking them together",
                    "Transactions inside each block reference the transactions in the previous block",
                    "Every block is digitally signed by the same network administrator"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.5-page-1"
                },
                {
                  id: "q2",
                  question: "In the three-block example, Block 3 stores Block 2's hash as its \"previous hash.\" What happens if Block 2's data is changed?",
                  options: [
                    "Block 2 self-repairs using a backup stored in Block 3",
                    "Only Block 2 becomes invalid while the rest of the chain stays intact",
                    "Block 2's hash changes, making Block 3's previous hash field incorrect and invalidating Block 3 and everything after it",
                    "The network pauses all new transactions until the error is resolved"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.5-page-2"
                },
                {
                  id: "q3",
                  question: "Why does tampering with one block force an attacker to redo every block that came after it?",
                  options: [
                    "Because blockchain rules require all blocks to be re-verified every time one changes",
                    "Because changing one block's data changes its hash, which breaks the next block's previous hash field, and fixing that breaks the one after, all the way up the chain",
                    "Because nodes automatically delete any block that has been edited",
                    "Because each block contains a copy of every previous block's full data"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.5-page-2"
                },
                {
                  id: "q4",
                  question: "Why would a blockchain stored on just one computer still be vulnerable, even with hashing and chaining in place?",
                  options: [
                    "A single computer cannot process enough transactions to keep the chain running",
                    "Hashing only works correctly when multiple computers verify it simultaneously",
                    "The owner of that computer could redo all the blocks from scratch and replace the chain with a fraudulent version, with no other copy to compare against",
                    "Single-computer blockchains cannot support the previous hash field in each block"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.5-page-3"
                },
                {
                  id: "q5",
                  question: "What is the longest chain rule?",
                  options: [
                    "The rule that limits how many transactions can fit inside a single block",
                    "When nodes disagree on which version of the chain is real, they accept the longest one because it represents the most cumulative honest work",
                    "A rule requiring miners to always build on the most recently created block",
                    "The rule that determines how long a block can remain unverified before being rejected"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.5-page-3"
                },
                {
                  id: "q6",
                  question: "Why is it practically impossible for an attacker to successfully rewrite blockchain history on a distributed network?",
                  options: [
                    "Blockchain transactions are encrypted, so attackers cannot read what they are changing",
                    "Nodes automatically ban any computer that attempts to submit an altered block",
                    "The attacker would have to redo all tampered blocks and build a chain longer than what thousands of honest computers are actively adding to in real time, simultaneously",
                    "Each block contains a digital lock that only the original creator can open"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.5-page-3"
                },
                {
                  id: "q7",
                  question: "What is a node?",
                  options: [
                    "A single transaction stored inside a block",
                    "The computer belonging to the person who created the blockchain",
                    "A special type of block that contains no transactions, only security data",
                    "One of the thousands of computers around the world that holds a complete copy of the blockchain"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m1.5-page-3"
                }
              ]
            }
          ]
        },
        {
          id: "module-1.6",
          title: "Module 1.6 — The Network: Nodes",
          pages: [
            {
              id: "intro-video-1.6",
              title: "Module Introduction",
              type: "video",
              youtubeId: "l382DqXpJX8"
            },
            {
              id: "m1.6-page-1",
              title: "What Is a Node?",
              content: `Every time a new transaction happens on a blockchain, someone has to record it, verify it, and make sure it's legitimate. There's no central office doing that job. Instead, it's handled by thousands of computers scattered across the world, each one running the blockchain's software and participating in keeping the network alive. Those computers are called **nodes**.

Think of nodes the way you'd think of witnesses. When something happens on the blockchain, the nodes are the ones watching, verifying, and keeping their own record of what occurred. The more witnesses there are, the harder it becomes for anyone to lie about what happened.

But not all nodes do the same job.

**Full Nodes:** A full node downloads and stores the entire history of the blockchain—every block, every transaction, all the way back to the Genesis Block. It independently verifies every new transaction and block against its own complete copy of the chain. Full nodes are the backbone of the network. They don't trust anyone else's version of events because they have everything they need to check for themselves.

Running a full node requires real storage space and computing power, since you're holding the entire chain locally. Anyone can run one, though, and that's the point. The more full nodes exist, the more decentralized and resilient the network becomes.

**Light Nodes:** A light node doesn't download the full blockchain. Instead, it downloads only the block headers, which are small summaries of each block containing just enough information to verify that a transaction is legitimate without storing everything. Most crypto wallets on your phone are light nodes. They're faster, use far less storage, and are good enough for everyday use, but they rely on full nodes to provide the complete picture when needed.

Together, full nodes and light nodes form a network where no single computer is in charge, but the whole system still functions reliably. One node going offline doesn't matter. A hundred going offline doesn't matter. The network keeps running because thousands of others are still holding their copy and doing their job.`
            },
            {
              id: "m1.6-page-2",
              title: "How the Network Reaches an Agreement",
              content: `Here's a question worth sitting with for a moment. If thousands of computers are all independently holding copies of the blockchain, and new transactions are happening constantly, how does the network make sure every copy stays in sync? How does it decide which transactions are legitimate and which version of the chain is the real one?

The answer is **consensus**.

Consensus just means the network has a set of rules that all participants follow to agree on what's true. Nobody is in charge of calling the vote. The rules are built into the software every node is running, and as long as the majority of nodes are honest and following those rules, the network reaches agreement automatically.

Here's a simple way to picture it. Imagine a classroom where the teacher asks a question, and instead of one student answering, every student in the room writes their answer on a piece of paper simultaneously. If the overwhelming majority write the same answer, that answer is accepted as correct. One student writing something different doesn't change the outcome, because they're outvoted by everyone else.

The blockchain works similarly. When a new block is proposed, nodes check it against their own copy of the chain. If it's valid, they accept it and add it to their chain. If the majority of nodes accept it, it becomes part of the official record. A fraudulent block, one that tries to include invalid transactions or tamper with history, gets rejected because it doesn't match what the majority of honest nodes have on record.

~~~interactive-consensus
~~~

The specific method the network uses to reach consensus varies between different blockchains. Bitcoin uses one called Proof of Work. Others use different approaches. We'll get deep into those mechanisms in the weeks ahead.

For now, the important thing to carry out of Week 1 is this: the blockchain doesn't need anyone to trust anyone else, because the rules are the authority. The network agrees on what's true because thousands of independent computers running the same rules all arrived at the same answer.

That's the foundation everything else is built on.`
            },
            {
              id: "m1.6-page-3",
              title: "Module Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "What is a node on a blockchain network?",
                  options: [
                    "A single transaction waiting to be added to a block",
                    "A computer that holds a copy of the blockchain and participates in verifying transactions",
                    "A company that regulates which transactions are allowed on the network",
                    "A special type of block that stores network settings instead of transactions"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.6-page-1"
                },
                {
                  id: "q2",
                  question: "What is the main difference between a full node and a light node?",
                  options: [
                    "A full node stores and independently verifies the entire blockchain history, while a light node only downloads block headers and relies on full nodes for complete verification",
                    "Full nodes are faster than light nodes because they use more powerful hardware",
                    "Full nodes are run by mining companies, while light nodes are run by regular users",
                    "Full nodes only process payments, while light nodes handle smart contracts"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m1.6-page-1"
                },
                {
                  id: "q3",
                  question: "Why does the blockchain keep functioning even when some nodes go offline?",
                  options: [
                    "A backup server automatically replaces any node that disconnects",
                    "The remaining nodes redistribute the missing node's workload evenly",
                    "Offline nodes automatically transfer their copy of the blockchain to a neighbouring node before disconnecting",
                    "Because thousands of other nodes still hold their own complete copy of the chain and continue doing their job independently"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m1.6-page-1"
                },
                {
                  id: "q4",
                  question: "What does \"consensus\" mean in the context of a blockchain network?",
                  options: [
                    "A monthly review process where nodes compare their copies of the blockchain and fix discrepancies",
                    "A set of rules built into the network's software that all participants follow to automatically agree on what transactions are legitimate and what the true state of the chain is",
                    "An agreement between major cryptocurrency exchanges on current coin prices",
                    "A vote held by blockchain developers to approve changes to the network"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.6-page-2"
                },
                {
                  id: "q5",
                  question: "In the classroom analogy, what do the students writing the same answer represent?",
                  options: [
                    "Miners competing to solve the next block's puzzle",
                    "Developers voting on a new update to the blockchain's software",
                    "The majority of honest nodes independently verifying a new block and arriving at the same conclusion",
                    "Users confirming their own transactions before they are submitted to the network"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.6-page-2"
                },
                {
                  id: "q6",
                  question: "Why does a fraudulent block get rejected by the network?",
                  options: [
                    "Because it doesn't match what the majority of honest nodes have on their own copy of the chain, so they reject it",
                    "The network has a central moderator who reviews every new block before it's added",
                    "Nodes automatically delete any block submitted by an unverified computer",
                    "Fraudulent blocks are encrypted differently, making them easy to identify"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m1.6-page-2"
                },
                {
                  id: "q7",
                  question: "What is the most important idea to take away from Week 1?",
                  options: [
                    "Blockchain is the fastest way to move money internationally",
                    "The blockchain needs a trusted authority to function correctly",
                    "Nodes are expensive to run, which is why only large companies operate them",
                    "Blockchain replaces middlemen with software rules, so the network doesn't need anyone to trust anyone else because thousands of independent computers running the same rules all arrive at the same answer"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m1.6-page-2"
                },
                {
                  id: "q8",
                  question: "A blockchain has been running for five years and contains over 500,000 blocks. Why would it be practically impossible for an attacker to rewrite the transaction history from two years ago?",
                  options: [
                    "Two-year-old blocks are stored on a separate archive chain that has no connection to the live network",
                    "The network locks all blocks after 30 days, preventing any further changes",
                    "They would have to redo every block from that point forward, faster than thousands of honest nodes are actively adding new blocks in real time, which is computationally unrealistic",
                    "Blockchain transactions older than one year are automatically encrypted beyond recovery"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m1.6-page-2"
                },
                {
                  id: "q9",
                  question: "Someone tells you they own a crypto wallet on their phone. Based on what you now know, what type of node is their wallet most likely running?",
                  options: [
                    "A mining node, because wallets need to solve puzzles to process transactions",
                    "A light node, because it downloads only block headers rather than the full chain, making it practical for mobile use",
                    "A full node, because phones are powerful enough to store the entire blockchain",
                    "A consensus node, because wallets vote on which transactions get approved"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m1.6-page-1"
                },
                {
                  id: "q10",
                  question: "Which of these scenarios best describes how blockchain's consensus mechanism protects the network?",
                  options: [
                    "Blockchain developers manually review disputed transactions and decide the outcome",
                    "Transactions are held in a waiting pool for 24 hours so humans can flag anything suspicious",
                    "A single powerful computer audits every transaction before it gets recorded",
                    "One node submits a fraudulent block claiming a transaction never happened, but since it doesn't match what the majority of honest nodes have recorded, the network rejects it automatically"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m1.6-page-2"
                }
              ]
            },
            {
              id: "m1.6-page-4",
              title: "Week 1 Wrap-Up",
              content: `You started this week with a problem. The internet, for all the ways it changed communication and information, never really solved the question of ownership and trust. Every time you move money, build an audience, or store something valuable online, you're doing it inside someone else's system, on their terms, with their finger on the off switch.

Blockchain exists as a direct response to that problem. Instead of routing trust through a company or institution, it builds trust into the system itself, through cryptographic hashing, chained blocks, and a distributed network of thousands of computers that nobody owns and nobody controls. The record is public, permanent, and tamper-proof because the math makes rewriting it practically impossible.

The mechanism behind that is what you spent most of this week understanding. Data gets fingerprinted with hashes. Those hashes get locked into blocks. Those blocks get chained together so that touching one breaks everything after it. That chain gets copied across thousands of nodes simultaneously, so there's no single version to corrupt and no single point of failure. And when those nodes disagree, a consensus rule settles it automatically, with no judge, no referee, and no company making the call.

That's the foundation. Everything that comes in the weeks ahead—smart contracts, wallets, DeFi, NFTs, DAOs—all of it is built on top of what you just learned. If something in a later week feels confusing, come back here. The answer is usually somewhere in Week 1.`
            }
          ]
        }
      ]
    },
    {
      id: "part-2",
      title: "Part 2: How Blockchain Actually Works",
      description: "Transactions, wallets, consensus, and the mechanics under the hood",
      modules: [
        {
          id: "module-2.1",
          title: "Module 2.1 — Wallets and Keys",
          pages: [
            {
              id: "intro-video-2.1",
              title: "Module Introduction",
              type: "video",
              youtubeId: "uy2mbYgDPJE"
            },
            {
              id: "m2.1-page-1",
              title: "What a Wallet Actually Is",
              content: `When you hear the word **"wallet,"** your brain probably pictures something that holds things. Your physical wallet holds cash, cards, maybe a crumpled receipt from six months ago. So when people say **"crypto wallet,"** it's natural to assume it works the same way and that your Bitcoin or Ethereum is sitting inside it somewhere. Well, it isn’t.

Your crypto **lives on the blockchain**. What your wallet holds are keys. Specifically, a **private key**: a piece of cryptographic data that proves you have the right to move the funds recorded against your address on that ledger.

Think of it this way. Imagine there's a transparent locker in a public square. Everyone can see what's inside. Anyone can drop something in. But only the person with the right key can open it and take anything out. The locker is your address on the blockchain. Your wallet holds the key.

This matters because if your wallet held actual coins (crypto), losing the wallet would mean losing the coins. But because the coins live on the blockchain and your wallet holds the key, losing your wallet app doesn't automatically mean losing your funds. Your funds are still there, recorded on the chain. What you need to recover access is your key.

That's also why, if someone steals your key, it's game over. They don't need your phone. They don't need your password. With the private key, they can move your funds from anywhere in the world, and there is no bank to call, no chargeback, no fraud department. The blockchain just sees a valid signature and processes the transaction.

So the wallet is really a **key manager**. It generates keys, stores them, and uses them to sign transactions on your behalf. The coins are always on the chain. Your wallet is just how you prove you own them.`
            },
            {
              id: "m2.1-page-2",
              title: "Public Keys and Private Keys",
              content: `Every crypto wallet is built on a pair of keys. They're generated together, mathematically linked, and they work as a team. But they do very different jobs.

Start with the **private key**. This is a long string of random characters, and it is yours alone. You *never* share it. You *never* paste it anywhere. You *never* screenshot it. It's the master proof of ownership that lets you authorize a transaction and say, to the whole network, "yes, I approved this move."

The **public key** is derived from the private key using a one-way mathematical function. One-way means you can go from private to public easily, but you cannot reverse-engineer the private key from the public key.

Your public key is like a **padlock you hand out freely**. Anyone can use it to lock a box and send it to you. But only you have the key that opens it. You can share the padlock with the whole world and it doesn't matter, because having the padlock tells you nothing about how to make the key.

In practice, when someone wants to send you crypto, they use your public key (or more accurately, your wallet address, which is derived from your public key) to direct the funds to you. When you want to send crypto out, your wallet uses your private key to sign the transaction.The network checks the signature against your public key, confirms it matches, and processes the transaction.

Nobody ever sees your private key. The signature it produces is what the network verifies, not the key itself.

So to recap: the **private key is your proof of ownership**, kept completely secret. The **public key is what the world uses to send things to you**. One is the lock, one is the key, and the math between them is what makes trustless transactions possible without anyone needing to know who you are.`
            },
            {
              id: "m2.1-page-3",
              title: "Your Wallet Address",
              content: `You've heard people say "send it to my wallet address." But an address isn't the same thing as a wallet, and it isn't the same thing as a public key either.

Your **wallet address** is derived from your public key. The process runs the public key through a hashing function, shortens it, and formats it into something readable. On Ethereum, that looks like this: \`0x71C7656EC7ab88b098defB751B7401B5f6d8976F\`. On Bitcoin, it looks slightly different. Either way, it's a compressed, shareable version of your public key.

Think of it like an **email address**. Your email address isn't your identity, your inbox, or your password. It's just the thing you hand someone so they can reach you. Your wallet address works the same way. You share it freely, people use it to send funds to you, and it reveals nothing about your private key.

You can have multiple addresses from a single wallet. Most modern wallets generate a new address for every transaction you receive. All of those addresses trace back to the same private key, so the funds are still yours and still accessible from one place. The multiple addresses are just for privacy, so that someone receiving your address can't easily trace your full transaction history on the blockchain.

**What your address is not:** it is not your password, it is not your private key, and sharing it does not give anyone the ability to move your funds. They can see your balance (remember, the blockchain is public), but *seeing is very different from touching*.

So the chain goes: private key generates the public key, the public key gets hashed down into the wallet address. The **address** is what you share. The **public key** is what the network uses to verify your signatures. The **private key** is what you *never share with anyone, ever*.`
            },
            {
              id: "m2.1-page-4",
              title: "Types of Wallets: Custodial vs. Non-Custodial Wallets",
              content: `Now that you know a wallet is really a key manager, the most important question you can ask about any wallet is: **Who is actually holding the keys?**

The answer splits every wallet in existence into one of two categories.

A **custodial wallet** is one where someone else holds your private key on your behalf. When you create an account on Binance, Coinbase, or any centralized exchange, they generate a wallet for you, and they hold the keys. You get a username and password, and the experience feels familiar, like online banking. But you don't control the keys. The exchange does.

This has real consequences. If the exchange gets hacked, your funds are at risk. If the exchange freezes withdrawals (it has happened, more than once), you can't move your money. If your account gets flagged, support decides what happens next. You're trusting a company the same way you trust a bank, and that trust can break. FTX collapsed in 2022, and billions in customer funds were lost. Customers didn't lose their passwords. They lost because the company holding their keys failed.

A **non-custodial wallet** is the opposite. You hold the private key yourself. Nobody else has it, nobody else can freeze it, and nobody else can recover it if you lose it. Wallets like MetaMask, Trust Wallet, and Phantom are non-custodial. When you set one up, you generate the keys on your own device and take full responsibility for keeping them safe.

The upside is total control. The downside is total responsibility. There is no support ticket, no account recovery, and no fraud team. If you lose your private key and your seed phrase, your funds are gone permanently.

Custodial wallets are easier and more forgiving for beginners. And your choice between both types of wallets depends on what you are more comfortable with.

And remember, *"not your keys, not your coins."*`
            },
            {
              id: "m2.1-page-5",
              title: "Types of Wallets: Hot Wallets vs. Cold Wallets",
              content: `You now know the difference between custodial and non-custodial. There's a second way wallets get categorized, and it cuts across the first one. The question this time isn't who holds the keys. It's where the keys live, and whether that place is connected to the internet.

A **hot wallet** is any wallet that is connected to the internet. Your MetaMask browser extension is a hot wallet. The wallet inside your Binance app is a hot wallet. They're called "hot" because they're always on, always accessible, always ready to sign a transaction. That convenience is real. You can send funds in seconds from anywhere.

The trade-off is exposure. A device connected to the internet is a device that can be attacked. Malware, phishing sites, browser exploits, and compromised apps — all of these are real vectors that target hot wallets specifically. The keys are on an internet-connected device, which means a sophisticated enough attacker has a potential path to them.

A **cold wallet** moves the keys completely offline. The most common form is a hardware wallet, a small physical device (Ledger and Trezor are the two most recognized brands) that stores your private key in a secure chip that never connects to the internet directly. When you want to sign a transaction, it’s signed on the device and passes only the signed output to your computer. The private key itself never touches an online environment.

Think of it like this. A hot wallet is cash in your trouser pocket. Convenient for daily use, but if you get pickpocketed, it's gone. A cold wallet is cash locked in a safe at home. Less convenient, but a pickpocket on the street has no path to it.

Most people who hold significant amounts of crypto use both. Hot wallets for everyday transactions and smaller amounts. Cold wallets for long-term storage of anything they can't afford to lose.

Cold wallets are non-custodial by nature since you hold the device and the keys. Hot wallets can be either custodial or non-custodial, depending on whether you or a third party controls the keys on that internet-connected device.`
            },
            {
              id: "m2.1-page-6",
              title: "Seed Phrases",
              content: `Every non-custodial wallet gives you a **seed phrase** when you first set it up. It's usually 12 or 24 ordinary English words, presented in a specific order. Something like: *carpet, river, lion, table, frost, mirror, candle, stone, echo, branch, silver, dawn*.

That sequence of words is **everything**.

Your seed phrase is the master key from which your entire wallet is generated. Every private key, every public key, every address your wallet has ever produced or will ever produce traces back to that phrase. If your phone breaks, if you delete the app, if your laptop is stolen, anyone who has that seed phrase can restore your complete wallet on any compatible device and access every coin associated with it.

This is why wallets don't ask you to back up a long string of cryptographic characters. Twelve real words in the right order are much easier for a human to write down and store than a 256-bit private key. The words are just a human-readable version of the same underlying data.

The implications cut both ways. Your seed phrase lets you recover everything. It also means **anyone who gets hold of it can take everything**, instantly, from anywhere in the world. No confirmation, no delay, no reversal.

How to protect it is straightforward, even if it feels old-fashioned. Write it down on paper, by hand, the moment your wallet shows it to you. Store that paper somewhere physically secure. Some people use a fireproof safe. Some engrave it on a metal plate because paper can burn or get water-damaged. **Never** type it into any app, website, or chat. **Never** store it in your photos, notes app, or email. **Never** share it with anyone claiming to be support, because no legitimate wallet or exchange will ever ask for it.

A common mistake is assuming a screenshot is a safe backup. Screenshots live on your device and often sync automatically to cloud storage, which puts them on an internet-connected server, and that defeats the entire point of keeping the phrase offline.

Your seed phrase doesn't expire, doesn't need to be renewed, and doesn't care which device you use to restore from. It is the one thing that stands between you and permanent loss of access. Treat it accordingly.`
            },
            {
              id: "video-wallet-demo",
              title: "Video: How to Open a Wallet Step-by-Step",
              type: "video",
              youtubeId: "jBCXf8yylQA" // Placeholder, to be replaced by the user later
            },
            {
              id: "quiz-2.1",
              title: "Module 2.1 Quiz — Wallets: Your Gateway to Blockchain",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "Where does your cryptocurrency actually live?",
                  options: [
                    "Inside your wallet app",
                    "On the blockchain",
                    "On your device's hard drive",
                    "On the exchange you bought it from"
                  ],
                  correctAnswer: 1, // B. On the blockchain
                  hintPageId: "m2.1-page-1"
                },
                {
                  id: "q2",
                  question: "What does a crypto wallet actually store?",
                  options: [
                    "Your coins and tokens",
                    "Your transaction history",
                    "Your bank account details",
                    "Your private and public keys"
                  ],
                  correctAnswer: 3, // D. Your private and public keys
                  hintPageId: "m2.1-page-1"
                },
                {
                  id: "q3",
                  question: "What is the relationship between a public key and a private key?",
                  options: [
                    "They are created independently by the wallet provider",
                    "The private key generates the public key through a one-way function",
                    "The public key generates the private key",
                    "They are identical and interchangeable"
                  ],
                  correctAnswer: 1, // B
                  hintPageId: "m2.1-page-2"
                },
                {
                  id: "q4",
                  question: "Which of the following best describes a private key?",
                  options: [
                    "A password you create when setting up your wallet",
                    "A code sent to your phone to confirm transactions",
                    "A username that identifies you on the blockchain",
                    "Cryptographic data that proves your right to move funds"
                  ],
                  correctAnswer: 3, // D
                  hintPageId: "m2.1-page-2"
                },
                {
                  id: "q5",
                  question: "What is a wallet address?",
                  options: [
                    "The physical location of your wallet device",
                    "Another name for your private key",
                    "A compressed, shareable version of your public key",
                    "A username assigned by your exchange"
                  ],
                  correctAnswer: 2, // C
                  hintPageId: "m2.1-page-3"
                },
                {
                  id: "q6",
                  question: "What is the key difference between a custodial and a non-custodial wallet?",
                  options: [
                    "In a custodial wallet, a third party holds your private keys",
                    "Custodial wallets are free, non-custodial wallets cost money",
                    "Non-custodial wallets can only hold Bitcoin",
                    "Custodial wallets work online, non-custodial wallets work offline"
                  ],
                  correctAnswer: 0, // A
                  hintPageId: "m2.1-page-4"
                },
                {
                  id: "q7",
                  question: "Why can a single wallet have multiple addresses?",
                  options: [
                    "Each device you use gets its own address",
                    "Exchanges assign new addresses to prevent fraud",
                    "Each address holds a different type of cryptocurrency",
                    "Multiple addresses are generated for privacy, all tracing back to the same private key"
                  ],
                  correctAnswer: 3, // D
                  hintPageId: "m2.1-page-3"
                },
                {
                  id: "q8",
                  question: "What happened to FTX customers when the exchange collapsed in 2022?",
                  options: [
                    "Their wallets were automatically transferred to another exchange",
                    "They lost access because the company holding their keys failed",
                    "Their funds were moved to a government account",
                    "They lost their passwords and could not log in"
                  ],
                  correctAnswer: 1, // B
                  hintPageId: "m2.1-page-4"
                },
                {
                  id: "q9",
                  question: "Which of the following best describes a cold wallet?",
                  options: [
                    "A wallet app that requires two-factor authentication",
                    "A wallet that only holds stablecoins",
                    "A wallet stored on a cloud server for safekeeping",
                    "A wallet that stores private keys completely offline"
                  ],
                  correctAnswer: 3, // D
                  hintPageId: "m2.1-page-5"
                },
                {
                  id: "q10",
                  question: "Which phrase best captures the risk of using a custodial wallet?",
                  options: [
                    "\"Not your exchange, not your coins\"",
                    "\"Not your keys, not your coins\"",
                    "\"Not your address, not your coins\"",
                    "\"Not your phone, not your coins\""
                  ],
                  correctAnswer: 1, // B
                  hintPageId: "m2.1-page-4"
                },
                {
                  id: "q11",
                  question: "What is a seed phrase?",
                  options: [
                    "A code your wallet provider sends when you forget your password",
                    "A password you set when creating your wallet account",
                    "A list of all the addresses your wallet has ever generated",
                    "A sequence of words that can restore your entire wallet on any compatible device"
                  ],
                  correctAnswer: 3, // D
                  hintPageId: "m2.1-page-6"
                },
                {
                  id: "q12",
                  question: "Which of the following is the most secure way to back up your seed phrase?",
                  options: [
                    "Take a screenshot and save it to your iCloud or Google Photos",
                    "Write it down on paper and store it in a physically secure location",
                    "Save it in a password-locked Word document on your laptop",
                    "Encrypt it and save it to a USB drive"
                  ],
                  correctAnswer: 1, // B
                  hintPageId: "m2.1-page-6"
                }
              ]
            }
          ]
        },
        {
          id: "module-2.2",
          title: "Module 2.2 — Exchanges: Where Tokens Trade",
          pages: [
            {
              id: "intro-video-2.2",
              title: "Module Introduction",
              type: "video",
              youtubeId: "meqZh0uwl2M"
            },
            {
              id: "m2.2-page-1",
              title: "What Is a Centralized Exchange (CEX)?",
              content: `When most people buy crypto for the first time, they do it through a **centralised exchange**. Binance, Coinbase, Kraken — these are all CEXs. They're the on-ramp most beginners walk through, and for good reason. They're familiar, they have customer support, and the experience feels close enough to online banking that it doesn't require much adjustment.

But a CEX is **not a bank**.

A bank holds your money and is legally obligated to protect it. In most countries, deposits are insured up to a certain amount. If your bank gets robbed, you don't personally lose your savings. The institution absorbs the loss, regulators get involved, and protections kick in. A centralised exchange has none of that infrastructure by default. When you deposit crypto onto an exchange, you are handing your assets to a private company and trusting them to keep them safe.

What a CEX actually does is act as a **middleman and a matchmaker**. It holds an order book, a live list of everyone who wants to buy and everyone who wants to sell, and matches them against each other. When you place an order to buy ETH, the exchange finds someone on the other side willing to sell at your price and executes the trade. You never deal with that person directly. The exchange sits in the middle, handles the transaction, and updates both balances in its internal records.

Those internal records are the other key thing to understand. When you trade on a CEX, the transaction **does not happen on the blockchain in real time**. The exchange updates its own database to reflect your new balance. The actual crypto moves on-chain *only* when you withdraw to your own wallet. Until then, what you have is an IOU from the exchange, not crypto you actually control.

That's the trade-off a CEX offers: convenience, speed, and familiarity, in exchange for custody of your assets and dependence on a private company's solvency and integrity.`
            },
            {
              id: "m2.2-page-2",
              title: "What Is a Decentralized Exchange (DEX)?",
              content: `A **decentralised exchange** does what a CEX does — lets you trade one token for another — but without a company in the middle. No headquarters, no customer support line, no CEO, no account registration. Just code running on a blockchain, open to anyone with a wallet.

When you trade on a DEX, you are not trading with the exchange. You are trading with a **smart contract**, a self-executing piece of code that holds tokens and executes swaps automatically based on rules written into it. Nobody approves your transaction. Nobody can freeze your account. The contract just runs.

This is what **peer-to-protocol** means. On a CEX, you are trusting a company to match you with another person and hold everything in between. On a DEX, you connect your wallet directly to a protocol, and the swap happens on-chain, in real time, with no intermediary taking custody of your funds at any point.

Uniswap is the most well-known DEX. Pancakeswap, Curve, and Jupiter are others. Each one is essentially a set of smart contracts deployed on a blockchain, with a front-end interface sitting on top so the experience feels usable. The front-end can go down, but the contracts underneath cannot be switched off.

If a fintech app freezes your account because of a compliance flag. You call support, wait days, and hope for the best. That scenario is impossible on a DEX because there is no account to freeze. Your wallet connects, the smart contract executes, and the transaction either goes through or it doesn't based purely on whether you have the funds and the network accepts it.

DEXs have no customer support. If you send funds to the wrong address or approve a malicious contract, nobody can reverse it. The interface can also be genuinely confusing for beginners. And because anyone can list any token on most DEXs, scam tokens exist alongside legitimate ones with no filter in between.

A CEX holds your hand and holds your keys. A DEX holds neither.`
            },
            {
              id: "m2.2-page-3",
              title: "Reading a Trading Pair",
              content: `Every trade on a crypto exchange involves a pair. Not just one asset, but two. That's because you can't buy something without paying for it with something else. A **trading pair** is simply the exchange rate between two assets, written in a specific format so you always know exactly what you're looking at.

Take **ETH/USDC**. The asset on the left is called the **base currency**. The asset on the right is called the **quote currency**. The number shown for the pair tells you how much of the quote currency you need to buy one unit of the base currency. So if ETH/USDC shows 3,200, that means one ETH costs 3,200 USDC right now.

The format never changes. Left is what you're buying. Right is what you're paying with. ETH/USDC means you're buying ETH and paying in USDC. Flip it to USDC/ETH and the whole thing reverses.

USDC is a **stablecoin**, a token pegged to the US dollar. Stablecoin-quoted pairs have become dominant in crypto markets because they offer a stable reference point in a highly volatile asset class. When you're trying to figure out how much your ETH is worth in real money terms, a pair like ETH/USDC gives you a clean answer. One ETH equals however many USDC the pair shows, and one USDC equals roughly one dollar.

Not all pairs involve stablecoins, though. In a pair like ETH/BTC, Ethereum is the base currency, and Bitcoin is the quote currency, meaning the price tells you how much BTC is required to buy one ETH. These crypto-to-crypto pairs exist because traders often want to move between assets directly without converting to dollars or stablecoins in between.

The airport currency exchange is a useful mental model here. When you land in Lagos and want naira for your dollars, the board shows NGN/USD with a number next to it. That number is the rate. Crypto trading pairs work the same way, just between digital assets instead of national currencies.

Popular pairs like BTC/USDT and ETH/USDC typically offer better liquidity and more stable trading conditions, making them the most practical starting point for beginners. **Liquidity** matters because it affects how quickly your trade executes and how close the price you get is to the price you see. Thinly traded pairs can *slip*, meaning the actual price you pay ends up worse than the one displayed.

Once you can read a pair, you can read any market on any exchange.`
            },
            {
              id: "m2.2-page-4",
              title: "Order Books vs. Liquidity Pools",
              content: `When you place a trade on any exchange, something has to figure out the price and find the other side of your transaction. Two very different systems have been built to do that job. Understanding both is worth your time, even at an introductory level, because they represent two fundamentally different philosophies about how markets should work.

The first is the **order book**. An order book is a live list of open buy and sell orders on an exchange for a specific trading pair, showing both the price each user is willing to trade at and the volume they want to trade. Buy orders are called **bids**. Sell orders are called **asks**. When a bid and an ask match on price, the exchange executes the trade automatically. This is how Binance, Coinbase, and most centralised exchanges operate, and it's also how traditional stock markets like the Nigerian Exchange or the Johannesburg Stock Exchange have always worked.

The order book model is powerful for high-volume markets. Prices reflect real human decisions about what an asset is worth right now, and deep books with lots of activity mean your trade executes close to the price you see. The weakness is that it needs participants. A thinly traded pair with few buyers and sellers produces a messy, unreliable book where large trades can move the price significantly.

The second model is the **liquidity pool**. A liquidity pool is cryptocurrency locked in a smart contract on a decentralised exchange, funded by users called liquidity providers who deposit their assets to create a market. Instead of matching your trade against another person's order, traders swap directly against the pool, with prices determined algorithmically based on the relative quantities of tokens in it. No order book, no matching engine, no waiting for a counterparty. The smart contract is always there, always ready to trade.

This is how Uniswap works, and it's why DEXs became viable. You don't need a large active trading community to bootstrap a market. You just need enough tokens deposited into a pool.

Both models have real trade-offs, and that's a conversation worth having properly. We'll go deep on how liquidity pools actually work, what liquidity providers earn, and what the risks are in Week 4. For now, the key distinction is simply this: **order books match people with people, liquidity pools match people with pooled funds managed by code.**`
            },
            {
              id: "m2.2-page-5",
              title: "Buying, Selling, and Swapping",
              content: `Three words get used constantly in crypto: buying, selling, and swapping. They sound interchangeable, but they mean different things in practice, and knowing the distinction helps you understand what's actually happening when you trade.

**Buying** means acquiring a token, usually by exchanging fiat currency or a stablecoin for it. You put in naira, cedis, dollars, or USDC, and you get ETH or BTC or whatever token you're purchasing in return. This is typically how most people enter crypto for the first time, through a CEX that accepts fiat deposits.

**Selling** is the reverse. You exchange a token back into fiat or a stablecoin. You're exiting a position, converting your crypto into something more stable or into local currency, you can withdraw to a bank account.

**Swapping** is different. It's a direct, wallet-to-wallet exchange of one digital asset for another without fiat currency, order books, or third-party custody. Instead of selling your ETH for dollars and then buying USDC, a swap takes you from ETH to USDC in a single step. All you need to swap is a self-custody wallet, funds in that wallet, and enough of the network's native token to cover gas fees.

Swapping happens primarily on DEXs. The flow is straightforward: you connect your wallet, select the token you're sending, select the token you want to receive, review the rate and fees, and confirm. The smart contract handles the rest.

One thing worth knowing before you swap: **slippage**. When you request a swap, the price shown is an estimate based on the current state of the liquidity pool. By the time your transaction is processed, the price may have shifted slightly. That difference is called slippage. Most DEX interfaces let you set a slippage tolerance, a maximum percentage you're willing to accept above or below the quoted price. Setting it too tight means your transaction might fail. Setting it too wide means you might get a worse rate than expected.

CEXs also offer swapping features, often labelled "Convert" on platforms like Binance. These use the exchange's internal liquidity reserves and offer a simpler interface for users who don't want to navigate a full trading interface.`
            },
            {
              id: "demo-cexdex",
              title: "Interactive Demo: CEX vs. DEX Trade Simulator",
              type: "interactive",
              componentId: "CexDexDemo"
            },
            {
              id: "quiz-2.2",
              title: "Module 2.2 Quiz — Exchanges: Where Tokens Trade",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "What is the key difference between a CEX and a bank?",
                  options: [
                    "CEXs charge higher fees than banks",
                    "CEXs only support crypto-to-crypto trading",
                    "Banks have legal deposit protections; CEXs are private companies with no such guarantees by default",
                    "Banks are available 24/7, CEXs are not"
                  ],
                  correctAnswer: 2, // C
                  hintPageId: "m2.2-page-1"
                },
                {
                  id: "q2",
                  question: "When you trade on a CEX, when does your transaction actually settle on the blockchain?",
                  options: [
                    "After the exchange verifies your identity",
                    "Within 10 minutes of the trade completing",
                    "Immediately when you place the order",
                    "Only when you withdraw to your own wallet"
                  ],
                  correctAnswer: 3, // D
                  hintPageId: "m2.2-page-1"
                },
                {
                  id: "q3",
                  question: "What does it mean to trade on a DEX?",
                  options: [
                    "You trade via smart contracts with no third party holding your funds",
                    "You trade through a licensed broker who processes orders manually",
                    "You trade using fiat currency converted by the platform",
                    "You trade against a company's internal reserves"
                  ],
                  correctAnswer: 0, // A
                  hintPageId: "m2.2-page-2"
                },
                {
                  id: "q4",
                  question: "In the trading pair ETH/USDC, what does the price tell you?",
                  options: [
                    "The average value of both tokens combined",
                    "How many ETH you need to buy one USDC",
                    "The current dollar value of the pair as a whole",
                    "How much USDC you need to buy one ETH"
                  ],
                  correctAnswer: 3, // D
                  hintPageId: "m2.2-page-3"
                },
                {
                  id: "q5",
                  question: "What is an order book?",
                  options: [
                    "A smart contract that automatically prices tokens based on pool ratios",
                    "A list of open buy and sell orders on an exchange for a specific trading pair",
                    "A log of user accounts and their balances on a CEX",
                    "A record of all transactions ever processed on a blockchain"
                  ],
                  correctAnswer: 1, // B
                  hintPageId: "m2.2-page-4"
                },
                {
                  id: "q6",
                  question: "How does a liquidity pool determine the price of a token swap?",
                  options: [
                    "The price is fixed by the exchange at the start of each trading day",
                    "The exchange matches the swap against the highest available bid",
                    "A team of market makers manually sets prices based on demand",
                    "An algorithm prices the swap based on the ratio of tokens in the pool"
                  ],
                  correctAnswer: 3, // D
                  hintPageId: "m2.2-page-4"
                },
                {
                  id: "q7",
                  question: "What is slippage in the context of a token swap?",
                  options: [
                    "The fee charged by a DEX for processing a transaction",
                    "The loss incurred when withdrawing funds from a CEX",
                    "The difference between the quoted swap price and the actual executed price",
                    "The delay between placing an order and it being confirmed on-chain"
                  ],
                  correctAnswer: 2, // C
                  hintPageId: "m2.2-page-5"
                },
                {
                  id: "q8",
                  question: "What is the main practical difference between swapping and selling crypto?",
                  options: [
                    "Swapping converts crypto to fiat; selling exchanges one token for another",
                    "Selling converts crypto to fiat or stablecoins; swapping exchanges one token directly for another",
                    "Swapping requires identity verification; selling does not",
                    "Selling is only available on DEXs; swapping works on both"
                  ],
                  correctAnswer: 1, // B
                  hintPageId: "m2.2-page-5"
                }
              ]
            }
          ]
        },
        {
          id: "module-2.3",
              title: "Module 2.3 — The Transaction Lifecycle",
              pages: [
                {
                  id: "intro-video-2.3",
                  title: "Module Introduction",
                  type: "video",
                  youtubeId: "A8Z-W0e7vxQ" // Placeholder
                },
                {
                  id: "m2.3-page-1",
                  title: "What Happens When You Send Crypto?",
                  content: `You open your wallet app, type in an address, enter an amount, and hit send. Two minutes later, the person on the other end has it. From the outside, it looks like moving money on any app you've ever used.

What's happening underneath is completely different.

When you send crypto, you're not moving coins from one place to another the way you'd slide cash across a table. No coins are travelling anywhere. What you're actually doing is **broadcasting a message to a global network of computers**, telling them to update a shared record. You're saying: "The balance associated with this address should go down. The balance associated with that address should go up. And here's my cryptographic proof that I have the right to make this request."

The network doesn't trust you because you say so. It trusts you because the math checks out.

That proof is your **private key**, doing its job invisibly in the background. Your wallet uses it to sign the transaction before sending it out. Anyone on the network can verify the signature without ever seeing your private key. They just need your public key, which is derived from it. If the signature is valid, the transaction is legitimate. If not, the network rejects it outright.

Once your signed transaction leaves your wallet, it doesn't go straight into the blockchain. There's a waiting room first. Thousands of other transactions are sitting there too, all competing for the same limited space in the next block. Miners or validators pick which ones make the cut, and they don't pick randomly. They pick based on who's offering to pay more. That's where **gas fees** come in, and we'll get into the mechanics of that on the next page.

The full journey from "send" to "confirmed" typically takes anywhere from a few seconds to several minutes, depending on the network and how much you're willing to pay to skip the queue. On Ethereum, during a busy period, it can cost more in fees than the amount you're sending. On Solana, it's fractions of a cent. The tradeoffs between speed, cost, and decentralisation show up here as clearly as anywhere in crypto.

What you're about to learn across this module is that journey, broken into each stage. By the end, when you look at any transaction on a block explorer, you'll know exactly what every field means and why it matters.`
                },
                {
                  id: "m2.3-page-2",
                  title: "From Creation to Confirmation",
                  content: `A transaction doesn't just happen. It moves through a series of distinct stages, and each one has a job to do. Miss one, and the transaction either fails, stalls, or never makes it onto the chain at all.

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
                  id: "m2.3-page-3",
                  title: "Gas Fees",
                  content: `Every transaction on a blockchain costs something beyond the amount you're sending. That cost is the **gas fee**, and it exists for a reason that has nothing to do with anyone making money off you.

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
                  id: "m2.3-page-4",
                  title: "Reading a Transaction on a Block Explorer",
                  content: `Every transaction that has ever been confirmed on a public blockchain is visible to anyone with an internet connection. No account needed. No permission required. You just need to know where to look and what you're looking at.

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
                  id: "m2.3-page-5",
                  title: "Interactive Demo: Follow a Live Transaction",
                  type: "interactive",
                  componentId: "TransactionLifecycleDemo"
                },
                {
                  id: "quiz-2.3",
                  title: "Module 2.3 Quiz — The Transaction Lifecycle",
                  type: "quiz",
                  questions: [
                    {
                      id: "q1",
                      question: "When you send crypto, what are you actually doing?",
                      options: [
                        "Moving digital coins from your device to the recipient's device",
                        "Instructing your bank to update its records on your behalf",
                        "Broadcasting a signed message asking the network to update a shared record",
                        "Transferring ownership through a central exchange database"
                      ],
                      correctAnswer: 2, // C
                      hintPageId: "m2.3-page-1"
                    },
                    {
                      id: "q2",
                      question: "What is the mempool?",
                      options: [
                        "A type of crypto wallet used for pending transactions",
                        "A private database maintained by the blockchain's founders",
                        "The final record where confirmed transactions are permanently stored",
                        "A waiting room where transactions sit before being included in a block"
                      ],
                      correctAnswer: 3, // D
                      hintPageId: "m2.3-page-2"
                    },
                    {
                      id: "q3",
                      question: "Why do gas fees exist?",
                      options: [
                        "To generate profit for the blockchain's founding team",
                        "To compensate the network for the computational work of processing transactions",
                        "To slow down transactions and prevent the network from growing too fast",
                        "To replace the role of interest rates in traditional banking"
                      ],
                      correctAnswer: 1, // B
                      hintPageId: "m2.3-page-3"
                    },
                    {
                      id: "q4",
                      question: "What happens if you set your gas fee too low on a network where fees are manual?",
                      options: [
                        "Your transaction is immediately rejected and your funds are lost",
                        "The network automatically tops up the fee from your wallet balance",
                        "Your transaction is flagged as suspicious and frozen",
                        "Your transaction waits at the back of the queue and may eventually be dropped"
                      ],
                      correctAnswer: 3, // D
                      hintPageId: "m2.3-page-3"
                    },
                    {
                      id: "q5",
                      question: "A transaction has a \"Success\" status on the block explorer but the gas fee was still charged. Why?",
                      options: [
                        "The explorer is showing an error — failed transactions are never charged",
                        "Gas fees are only charged on Bitcoin, not Ethereum",
                        "The network did the computational work regardless of outcome, so the fee applies",
                        "The fee was charged by the wallet app, not the blockchain"
                      ],
                      correctAnswer: 2, // C
                      hintPageId: "m2.3-page-4"
                    },
                    {
                      id: "q6",
                      question: "What does the nonce field in a transaction record tell you?",
                      options: [
                        "The encryption method used to secure the transaction",
                        "How many confirmations the transaction has received",
                        "The exchange rate at the time the transaction was created",
                        "How many transactions that wallet has sent, used to order them correctly"
                      ],
                      correctAnswer: 3, // D
                      hintPageId: "m2.3-page-4"
                    },
                    {
                      id: "q7",
                      question: "Why is blockchain described as pseudonymous rather than anonymous?",
                      options: [
                        "Wallet addresses are encrypted and only visible to regulators",
                        "Transactions are hidden for 30 days before becoming public",
                        "Wallet addresses are public and all activity tied to them is visible, even without names attached",
                        "Only the sender can see transaction details, not the recipient"
                      ],
                      correctAnswer: 2, // C
                      hintPageId: "m2.3-page-4"
                    },
                    {
                      id: "q8",
                      question: "What is a transaction hash?",
                      options: [
                        "The gas fee calculation formula used by the network",
                        "A unique identifier assigned to a transaction that lets anyone look it up on a block explorer",
                        "The encrypted version of a wallet's private key",
                        "A code generated by the recipient to request payment"
                      ],
                      correctAnswer: 1, // B
                      hintPageId: "m2.3-page-4"
                    }
                  ]
                }
              ]
        },
        {
          id: "module-2.4",
          title: "Module 2.4 — Consensus Mechanisms",
          pages: [
            {
              id: "m2.4-page-0",
              title: "Module Introduction",
              type: "video",
              youtubeId: "L1niiOUzxMY",
              content: "In this module, we look at how thousands of strangers agree on a single version of the truth without a leader. We'll break down Proof of Work, Proof of Stake, and why these mechanisms are the heartbeat of any decentralized network."
            },
            {
              id: "m2.4-page-1",
              title: "What Is Consensus and Why Does a Network Need It?",
              content: `Imagine you and **nine friends** are splitting a restaurant bill. Nobody has cash, so you're all transferring money to one person who'll pay. The problem is simple: you need **everyone to agree** on how much each person owes before any transfers happen. If four of you have different numbers in your heads, the whole thing falls apart.

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
              id: "m2.4-page-2",
              title: "Proof of Work",
              content: `Bitcoin had to solve a problem nobody had fully cracked before. How do you get thousands of strangers, scattered across the world, to agree on a **shared financial record** without any of them trusting each other and without anyone being in charge?

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
              id: "m2.4-page-3",
              title: "Proof of Stake",
              content: `Proof of Work works. Bitcoin has proven that for over fifteen years. But it has one problem that was always going to matter eventually: it is **extremely expensive to run**. Not just in money, but in energy. And as blockchains started to grow in ambition, that cost became harder to justify.

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
              id: "m2.4-page-4",
              title: "Delegated Proof of Stake and Other Mechanisms",
              content: `PoW and PoS are the two dominant models, but they're not the only ones. As blockchain use cases expanded beyond open public networks into enterprises, high-speed apps, and new scaling approaches, developers kept asking the same question: what if we adjusted the rules to fit the problem better?
              
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
              id: "m2.4-page-5",
              title: "Consensus, Security, and Decentralisation",
              content: `Every consensus mechanism you've seen in this module is an answer to the same underlying question: how do you build a network that thousands of strangers can use, that nobody controls, and that nobody can successfully cheat? The mechanisms differ. The question never changes.

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
              id: "m2.4-page-6",
              title: "Interactive: Consensus Scenario Simulator",
              type: "interactive",
              componentId: "ConsensusSimulator",
              content: ""
            },
            {
              id: "quiz-2.4",
              title: "Module 2.4 Quiz — Consensus Mechanisms",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "Thousands of nodes are spread across the world. If two different versions of the transaction history appear, how does the network know which one is the \"truth\"?",
                  options: [
                    "It follows the rules of the consensus mechanism, like the longest chain rule",
                    "The network pauses all transactions until a developer chooses the correct version",
                    "It chooses the version that was submitted by the most expensive hardware",
                    "The nodes vote manually using a private chat system"
                  ],
                  correctAnswer: 0, // A
                  hintPageId: "m2.4-page-1"
                },
                {
                  id: "q2",
                  question: "Bitcoin uses Proof of Work to stay secure. What is a common criticism of this specific mechanism?",
                  options: [
                    "It is too easy for a single person to manipulate",
                    "It does not allow for international transactions",
                    "It requires a massive amount of electricity to keep the hardware running",
                    "It is slower than traditional banking apps in all situations"
                  ],
                  correctAnswer: 2, // C
                  hintPageId: "m2.4-page-2"
                },
                {
                  id: "q3",
                  question: "Proof of Stake is an alternative to mining. Instead of buying expensive hardware, what do participants do to earn the right to validate blocks?",
                  options: [
                    "They pay a monthly subscription fee to the blockchain foundation",
                    "They lock up their own tokens as collateral in the network",
                    "They provide their legal identity and address to the network",
                    "They solve complex mathematical riddles using their phone"
                  ],
                  correctAnswer: 1, // B
                  hintPageId: "m2.4-page-3"
                },
                {
                  id: "q4",
                  question: "Why is it so difficult for a single person to lie to the network about a transaction?",
                  options: [
                    "The blockchain is owned by a large company that monitors for fraud",
                    "Every user must have their account verified by a bank first",
                    "Hashing makes it impossible to see the transaction data",
                    "Their version of the ledger will be rejected by the majority of honest nodes"
                  ],
                  correctAnswer: 3, // D
                  hintPageId: "m2.4-page-1"
                },
                {
                  id: "q5",
                  question: "Delegated Proof of Stake (DPoS) is often compared to a representative democracy. How do the validators get chosen in this system?",
                  options: [
                    "Regular token holders vote for a specific group of representatives to run the nodes",
                    "The network randomly selects one person every hour to be the leader",
                    "The largest crypto exchanges decide who is allowed to validate",
                    "Validators must be approved by the government of the country where they live"
                  ],
                  correctAnswer: 0, // A
                  hintPageId: "m2.4-page-4"
                },
                {
                  id: "q6",
                  question: "Consensus is about reaching agreement without a leader. If a network only has 10 validators instead of 10,000, what is the most likely result?",
                  options: [
                    "The network becomes more secure because there are fewer points of failure",
                    "It is more centralized and easier for a single group to control or shut down",
                    "Transactions become significantly more expensive for the average user",
                    "The blockchain stops being transparent to the public"
                  ],
                  correctAnswer: 1, // B
                  hintPageId: "m2.4-page-5"
                },
                {
                  id: "q7",
                  question: "If a group of miners or stakers coordinates to take over the network, it is often called a 51% attack. What is the real danger of this situation?",
                  options: [
                    "They can steal tokens from wallets they do not own",
                    "They can increase the total supply of the coin indefinitely",
                    "They can stop the internet from working in specific regions",
                    "They can approve fraudulent transactions or rewrite recent history"
                  ],
                  correctAnswer: 3, // D
                  hintPageId: "m2.4-page-2"
                },
                {
                  id: "q8",
                  question: "Why does a consensus mechanism matter for a creator in Nigeria sending money to a collaborator in Mauritius?",
                  options: [
                    "It allows the banks in both countries to communicate faster",
                    "It automatically converts the currency to the local naira or rupee",
                    "It ensures the transaction settles permanently without needing a bank to verify it",
                    "It protects their personal data from being seen by other nodes"
                  ],
                  correctAnswer: 2, // C
                  hintPageId: "m2.4-page-5"
                }
              ]
            }
          ]
        },
        {
          id: "module-2.5",
          title: "Module 2.5 — Blockchain and Incentive Alignment",
          pages: [
            {
              id: "m2.5-page-0",
              title: "Module Introduction",
              type: "video",
              youtubeId: "jThX6cgw2WQ"
            },
            {
              id: "m2.5-page-1",
              title: "Why Would Anyone Mine or Validate?",
              content: `Blockchain is decentralized, which sounds like a great idea for fairness, but it relies on thousands of independent computers working together to stay alive. These computers are owned by real people who have bills to pay. Running a high-end mining rig or a validation server costs a lot of money in electricity and hardware. If the network didn't offer a reward, nobody would bother doing the work.

Think about a **side hustle**. You wouldn't spend your weekends designing logos or editing videos for a stranger for free. You do it because there is a payoff at the end. The people who secure a blockchain are essentially running a business where their job is to be the honest witness for the rest of the world.

If the system relied on everyone being nice, it would fail the moment things got difficult. Greed is a powerful motivator. **Satoshi Nakamoto**, the creator of Bitcoin, understood this. Instead of trying to fight human nature, he decided to use it to secure the network. He built a system where the easiest way to make money is to follow the rules, and the most expensive way to lose money is to try and break them.

This system is a masterpiece of economic design. We call this **incentive alignment**. When you align what is good for the individual with what is good for the network, you create a system that can run itself for decades without a central manager.

The network stays secure because the people running it are incentivized to keep it that way. On the next page, we will break down the two ways these participants actually get paid: block rewards and transaction fees.`
            },
            {
              id: "m2.5-page-2",
              title: "Block Rewards and Transaction Fees",
              content: `If you're running a server or a mining rig to support a blockchain, you have two main ways of getting paid for your trouble. These two income streams are what keep the lights on for the people securing the network.

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
              id: "m2.5-page-3",
              title: "Game Theory in Blockchain",
              content: `You might think that keeping a global network secure requires everyone to be a "good person," but blockchain works the opposite way. It assumes that everyone is looking out for themselves. This is where **Game Theory** comes in. It is the study of how people make choices when their success depends on the choices of others.

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
              id: "m2.5-page-4",
              title: "When Incentives Break — Real-World Counterexamples",
              content: `Incentive alignment sounds airtight on paper. Make honesty profitable, make cheating expensive, and the network runs itself. The logic is clean. But clean logic only works when the model matches how humans actually behave in the wild. When the incentives are badly designed, or when they depend on conditions that can't last, things break. And they break fast.

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
              id: "m2.5-page-5",
              title: "Interactive: Incentive Design Lab",
              type: "interactive",
              componentId: "IncentiveDesignLab",
              content: ""
            }
          ]
        },
        {
          id: "module-week-2-review",
          title: "Week 2 Full Review Quiz",
          pages: [
            {
              id: "week-2-wrap-up",
              title: "Week 2 Wrap Up",
              content: `You started this week knowing what a blockchain is. You end it knowing how one actually runs, and more importantly, why it keeps running.

**Wallets** came first, because without them nothing else is yours. Your private key is the only proof of ownership that matters on a blockchain, and whoever holds it holds the funds. **Exchanges** showed you the two ways people actually move tokens: through companies that take custody of your assets and offer convenience in return, or through protocols that hold nothing and trust no one, including you. 

The **transaction lifecycle** pulled back the curtain on what happens between hitting send and seeing a confirmation—the broadcast, the mempool, the gas fee, the block, the explorer entry that exists forever on a public ledger. 

**Consensus mechanisms** answered the question that makes the whole system coherent: how thousands of computers that don't know each other, spread across every continent, manage to agree on a single version of who owns what. 

And **incentive alignment** showed you why that agreement holds, because Satoshi didn't build Bitcoin on goodwill. He built it so that honesty is simply the better business decision.

These five modules are one idea. A blockchain is an economic system where the math, the rules, and the incentives are all written into the same place. Nobody has to trust anyone. The design does the work.

Week 3 asks what happens when you take that foundation and make it programmable. Bitcoin proved you could move value without a bank. Ethereum asked a bigger question: what if the blockchain could run any program at all? Next week is about **smart contracts**, **tokens**, and what it actually means when the code itself becomes the agreement.`
            },
            {
              id: "week-2-quiz",
              title: "Review Quiz: The Mechanics of Blockchain",
              type: "quiz",
              questions: [
                {
                  id: "w2-q1",
                  question: "Your friend says \"I lost my crypto wallet app, so my Bitcoin is gone.\" What's wrong with that statement?",
                  options: [
                    "The crypto lives on the blockchain, not inside the app. Losing the app doesn't mean losing the funds — losing the private key does.",
                    "Bitcoin wallets are backed up automatically by the exchange, so the funds are always recoverable.",
                    "Wallet apps store coins locally, so the funds are gone only if the device is physically destroyed.",
                    "The statement is correct. Deleting a wallet app permanently removes access to all associated funds."
                  ],
                  correctAnswer: 0,
                  hintPageId: "m2.2-page-1"
                },
                {
                  id: "w2-q2",
                  question: "What is the mathematical relationship between a private key and a public key?",
                  options: [
                    "They are identical strings stored in two different locations for redundancy.",
                    "The public key is created first and the private key is derived from it later.",
                    "The private key is encrypted using the public key and can be decoded with the right password.",
                    "The public key is derived from the private key using a one-way function, meaning the private key cannot be reverse-engineered from the public key."
                  ],
                  correctAnswer: 3,
                  hintPageId: "m2.2-page-3"
                },
                {
                  id: "w2-q3",
                  question: "Why do modern wallets generate a new address for every incoming transaction?",
                  options: [
                    "Each address can only receive one transaction before it becomes invalid.",
                    "Exchanges require a fresh address for every deposit to comply with anti-money-laundering rules.",
                    "New addresses increase the wallet's storage capacity for larger transactions.",
                    "It's a privacy measure — using different addresses makes it harder to trace your full transaction history on the public ledger."
                  ],
                  correctAnswer: 3,
                  hintPageId: "m2.2-page-4"
                },
                {
                  id: "w2-q4",
                  question: "FTX collapsed in 2022 and billions in customer funds were lost. What does this illustrate about custodial wallets?",
                  options: [
                    "Hardware wallets are the only safe way to store crypto long-term.",
                    "Centralized exchanges should only be used for trading, never for storage.",
                    "Custodial wallets are illegal in most jurisdictions following the FTX collapse.",
                    "When you use a custodial wallet, you are trusting a private company with your keys — and if that company fails, your funds can go with it."
                  ],
                  correctAnswer: 3,
                  hintPageId: "m2.2-page-5"
                },
                {
                  id: "w2-q5",
                  question: "What is the core difference between a hot wallet and a cold wallet?",
                  options: [
                    "Hot wallets are always custodial. Cold wallets are always non-custodial.",
                    "Hot wallets are used for Bitcoin only. Cold wallets support all tokens.",
                    "Cold wallets cost a monthly subscription fee. Hot wallets are always free.",
                    "A hot wallet is connected to the internet and is more convenient but more exposed. A cold wallet stores keys offline and removes the remote attack surface entirely."
                  ],
                  correctAnswer: 3,
                  hintPageId: "m2.2-page-6"
                },
                {
                  id: "w2-q6",
                  question: "A seed phrase is 12 or 24 words. Why does the wallet use ordinary words instead of the raw private key?",
                  options: [
                    "Ordinary words are harder for hackers to guess than random characters.",
                    "The seed phrase is a human-readable encoding of the underlying cryptographic data, making it easier to write down and recover accurately than a raw 256-bit key.",
                    "Regulators in most countries require wallets to use word-based backups for legal compliance.",
                    "The words are encrypted and can only be decoded by the original wallet app that generated them."
                  ],
                  correctAnswer: 1,
                  hintPageId: "m2.2-page-7"
                },
                {
                  id: "w2-q7",
                  question: "When you trade on a centralized exchange, when does your transaction actually settle on the blockchain?",
                  options: [
                    "Immediately, because CEXs process all trades on-chain in real time.",
                    "After 10 confirmations, which takes roughly 10 minutes on most networks.",
                    "Never — CEX trades are internal database updates. The crypto only moves on-chain when you withdraw to your own wallet.",
                    "Within 24 hours, once the exchange's compliance team reviews and approves the trade."
                  ],
                  correctAnswer: 2,
                  hintPageId: "m2.3-page-2"
                },
                {
                  id: "w2-q8",
                  question: "What does \"peer-to-protocol\" mean in the context of a DEX?",
                  options: [
                    "Two users negotiate a trade directly through a private messaging system built into the exchange.",
                    "Your wallet connects directly to a smart contract that executes the swap on-chain, with no company taking custody of your funds at any point.",
                    "The DEX matches buyers and sellers through a central order book managed by its founding team.",
                    "Trades are routed through a network of licensed brokers who execute on your behalf."
                  ],
                  correctAnswer: 1,
                  hintPageId: "m2.3-page-2"
                },
                {
                  id: "w2-q9",
                  question: "ETH/USDC is showing 3,200. What does that number mean?",
                  options: [
                    "The total trading volume of ETH in USDC over the past 24 hours.",
                    "The number of USDC tokens currently locked in the liquidity pool.",
                    "The percentage gain ETH has made against USDC this month.",
                    "One ETH costs 3,200 USDC right now. The left asset is what you're buying. The right asset is what you're paying with."
                  ],
                  correctAnswer: 3,
                  hintPageId: "m2.3-page-3"
                },
                {
                  id: "w2-q10",
                  question: "What is slippage, and when does it matter most?",
                  options: [
                    "A penalty fee charged when a trade takes longer than 30 seconds to execute.",
                    "The difference between the gas fee you set and the fee the network actually charges.",
                    "The gap between the price displayed when you initiate a trade and the price at which it actually executes, most significant in thinly traded markets or large orders.",
                    "The delay between submitting a transaction and receiving confirmation on the block explorer."
                  ],
                  correctAnswer: 2,
                  hintPageId: "m2.3-page-3"
                },
                {
                  id: "w2-q11",
                  question: "What happens to a transaction that is set with a gas fee that is too low?",
                  options: [
                    "It sits in the mempool, gets deprioritized by validators, and may eventually be dropped if it waits too long without being picked up.",
                    "The network automatically increases the fee by drawing the difference from the sender's wallet balance.",
                    "The transaction is immediately rejected and the sender receives an error before it ever reaches the network.",
                    "The transaction is processed normally but flagged for review by the exchange's compliance team."
                  ],
                  correctAnswer: 0,
                  hintPageId: "m2.3-page-4"
                },
                {
                  id: "w2-q12",
                  question: "A transaction on Etherscan shows \"Success\" but the gas fee was still charged. A student says this must be an error. What would you tell them?",
                  options: [
                    "They're right — a failed transaction is always refunded in full including gas.",
                    "The network executed the computational work regardless of the outcome. Gas pays for that work, not for a guaranteed result.",
                    "The fee shown is a deposit, not a charge. It will be refunded within 48 hours.",
                    "Gas fees on Ethereum are only charged on successful transactions. The student should contact support."
                  ],
                  correctAnswer: 1,
                  hintPageId: "m2.3-page-5"
                },
                {
                  id: "w2-q13",
                  question: "What does the nonce field in a transaction record tell you, and why does it exist?",
                  options: [
                    "It shows the gas price the sender was willing to pay, used to calculate the total fee.",
                    "It records the block number where the transaction was first broadcast to the network.",
                    "It is a sequential counter tracking how many transactions that wallet has sent, used to order them correctly and prevent the same transaction from being processed twice.",
                    "It stores the encrypted version of the sender's private key for verification purposes."
                  ],
                  correctAnswer: 2,
                  hintPageId: "m2.3-page-5"
                },
                {
                  id: "w2-q14",
                  question: "Why is blockchain described as pseudonymous rather than anonymous?",
                  options: [
                    "Wallet addresses are public and all activity tied to them is visible on the ledger — but without names attached by default. If anyone connects an address to a real identity, every transaction it ever made becomes traceable.",
                    "Blockchain transactions are hidden for 90 days before becoming publicly visible on the explorer.",
                    "Only regulators and exchange compliance teams can view wallet activity. Regular users see only their own transactions.",
                    "Transactions are anonymous unless the sender voluntarily reveals their identity during the transfer."
                  ],
                  correctAnswer: 0,
                  hintPageId: "m2.3-page-6"
                },
                {
                  id: "w2-q15",
                  question: "What problem does a consensus mechanism solve that a traditional centralized database does not have?",
                  options: [
                    "Traditional databases charge high fees per transaction. Consensus mechanisms eliminate those fees.",
                    "Traditional databases can only store financial data. Consensus mechanisms allow any kind of data to be recorded.",
                    "In a centralized system, one authority holds the official record and resolves disputes. In a decentralized network with no authority, the mechanism is what gets thousands of independent nodes to agree on the same version of history automatically.",
                    "Traditional databases are too slow for international transfers. Consensus mechanisms speed up settlement times."
                  ],
                  correctAnswer: 2,
                  hintPageId: "m2.4-page-1"
                },
                {
                  id: "w2-q16",
                  question: "Ethereum reduced its energy consumption by approximately 99.84% in September 2022. What caused that reduction?",
                  options: [
                    "The network switched from Proof of Work, which requires miners to burn energy competing to solve puzzles, to Proof of Stake, which replaces that energy expenditure with staked collateral.",
                    "Ethereum upgraded its mining hardware to chips that are significantly more energy efficient than the previous generation.",
                    "The network reduced its transaction throughput by 99% to lower the computational load on validators.",
                    "Ethereum outsourced its validation to a consortium of renewable energy data centers, cutting the carbon footprint without changing the consensus mechanism."
                  ],
                  correctAnswer: 0,
                  hintPageId: "m2.4-page-3"
                },
                {
                  id: "w2-q17",
                  question: "What is slashing in a Proof of Stake network?",
                  options: [
                    "A fee validators pay when they go offline temporarily during a scheduled maintenance window.",
                    "The process of splitting a validator's stake across multiple nodes to reduce risk.",
                    "A reputation penalty that temporarily suspends a validator from proposing new blocks.",
                    "The destruction of some or all of a validator's staked collateral as punishment for provably dishonest behavior, such as proposing conflicting blocks."
                  ],
                  correctAnswer: 3,
                  hintPageId: "m2.4-page-4"
                },
                {
                  id: "w2-q18",
                  question: "The Axie Infinity collapse is used in the course as an example of incentive design failure. What was the fundamental flaw in its model?",
                  options: [
                    "The game relied on a small group of developers to manually issue rewards, creating a single point of failure.",
                    "Player earnings depended on continuous new player inflow to sustain token demand. When growth stopped, the entire reward structure collapsed.",
                    "Axie used a Proof of Work mechanism that made the cost of earning tokens higher than their market value.",
                    "The game's smart contracts contained a coding error that allowed a small group of wallets to drain the reward pool."
                  ],
                  correctAnswer: 1,
                  hintPageId: "m2.5-page-4"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "part-3",
      title: "PART 3: Smart Contracts, Tokens & The Programmable Blockchain",
      modules: [
        {
          id: "module-3.1",
          title: "Module 3.1 — The Bitcoin-Ethereum Glow up",
          pages: [
            {
              id: "m3.1-page-0",
              title: "Module Introduction",
              type: "video",
              content: "In this module, we explore the transition from Bitcoin's single-purpose design to Ethereum's programmable vision. We'll learn what Bitcoin was missing and how smart contracts turned the blockchain into a global computer."
            },
            {
              id: "m3.1-page-1",
              title: "What Bitcoin Was Missing",
              content: `Bitcoin solved a real problem. Before it existed, sending money across borders meant trusting a bank, a wire service, or a remittance company to move it for you. Those middlemen charged fees, took days, and could freeze your funds. Bitcoin removed the middleman. Two people anywhere in the world could transact directly, with no bank in the middle, and no single authority that could reverse or block the transaction.

That was genuinely new. But Bitcoin was built to do one thing: move value from one address to another. Its scripting language is intentionally limited. You can set conditions on a transaction, such as requiring multiple signatures before funds move, but you cannot build complex logic on top of it. You cannot tell Bitcoin: "hold these funds, and only release them if a delivery is confirmed by a third party within 48 hours." Bitcoin does not have the machinery to execute that kind of instruction.

This limitation was a design choice, not an oversight. Bitcoin's creators prioritized security and simplicity over flexibility. A narrow system with a small attack surface is harder to break. But that narrowness also meant Bitcoin could not become a platform. It could store value and move it. Everything else was out of scope.

By 2013, a teenager named **Vitalik Buterin** had read enough Bitcoin developer discussions to understand exactly where that ceiling was, and had started thinking seriously about what it would take to remove it.`
            },
            {
              id: "m3.1-page-2",
              title: "Vitalik's Insight: A Blockchain That Runs Code",
              content: `Vitalik Buterin was 19 when he published the Ethereum whitepaper in late 2013. He had been writing for Bitcoin Magazine, studying how developers were trying to build applications on top of Bitcoin, and watching them repeatedly hit the same wall. Every new use case required a new blockchain built from scratch, because Bitcoin's base layer could not support it. 

He proposed to build a blockchain with a general-purpose programming language built into it. Instead of a ledger that only tracks who owns what, build a ledger that can also store and execute code. Any developer, anywhere, could then deploy a program onto this blockchain, and that program would run exactly as written, every time, without any company or server behind it.

The key insight was that the blockchain's properties, specifically its decentralization, its resistance to tampering, and its public verifiability, could apply to code, not just to money. A program running on this blockchain would inherit all of those guarantees. Nobody could take it down, alter its rules, or selectively apply it to some users and not others.

Ethereum launched on mainnet in July 2015. The core addition it brought was the ability to deploy what Buterin called **smart contracts**: programs that live on the blockchain and execute automatically when their conditions are met. That one addition changed what a blockchain could be used for, and the rest of this module is about understanding exactly how.`
            },
            {
              id: "m3.1-page-3",
              title: "The Ethereum Virtual Machine (EVM)",
              content: `When you run an app on your phone, your phone's processor executes the code. The app runs on your hardware, in your device's environment. That works fine for regular software, but it creates a problem for a decentralized blockchain: if a smart contract runs on one person's computer, whose computer do you trust? What stops that computer from running the code differently, or lying about the result?

Ethereum solves this with the **Ethereum Virtual Machine**, or **EVM**. The EVM is a sandboxed computing environment that runs identically on every node in the Ethereum network. When a smart contract is executed, every node runs it independently through its own copy of the EVM, and they all arrive at the same result. If they don't, the network rejects the output. The EVM is what makes "the code runs as written, every time" technically enforceable.

Think of it this way. Imagine a calculator that every participant in a game carries. The rules say that whenever a calculation needs to happen, everyone runs it on their calculator simultaneously, and the answer only counts if everyone gets the same result. The EVM is that calculator, except instead of arithmetic, it executes smart contract logic, and instead of a few players, there are thousands of nodes checking each other's work.

The EVM does not run regular code directly. Developers write smart contracts in higher-level languages, most commonly **Solidity**, and those get compiled down to **EVM bytecode**, which is what actually gets deployed and executed on-chain. You do not need to read bytecode to use Ethereum, but understanding that this translation layer exists explains why smart contracts behave consistently regardless of what machine is running them.

One more thing worth knowing: because the EVM became a standard, other blockchains adopted it. Chains like **BNB Chain**, **Polygon**, **Avalanche**, and **Base** are all **EVM-compatible**, meaning smart contracts written for Ethereum can run on them with little or no modification. The EVM became the default runtime environment for a large portion of the entire blockchain ecosystem.`
            },
            {
              id: "m3.1-quiz",
              title: "Module 3.1 Quiz",
              type: "quiz",
              questions: [
                {
                  id: "m3.1-q1",
                  question: "What was Bitcoin's primary limitation that Ethereum was designed to address?",
                  options: [
                    "Bitcoin transactions were too slow to be useful",
                    "Bitcoin could not run general-purpose programs or complex logic",
                    "Bitcoin had no way to store value across borders",
                    "Bitcoin required a central authority to validate transactions"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m3.1-page-1"
                },
                {
                  id: "m3.1-q2",
                  question: "What did Vitalik Buterin observe developers doing before Ethereum existed?",
                  options: [
                    "Building wallets that couldn't connect to the internet",
                    "Copying Ethereum's codebase without permission",
                    "Building new blockchains from scratch for every new use case",
                    "Trying to use Bitcoin as a storage network for files"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m3.1-page-2"
                },
                {
                  id: "m3.1-q3",
                  question: "What is the Ethereum Virtual Machine (EVM)?",
                  options: [
                    "A programming language used to write smart contracts",
                    "A wallet interface for interacting with Ethereum applications",
                    "A physical server farm that Ethereum rents to run its network",
                    "A sandboxed computing environment that runs identically on every Ethereum node"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m3.1-page-3"
                },
                {
                  id: "m3.1-q4",
                  question: "Why does every node run the EVM independently when a smart contract executes?",
                  options: [
                    "To allow developers to test contracts before they go live",
                    "To give miners a chance to earn extra fees",
                    "So no single machine can control or manipulate the outcome",
                    "Because Ethereum nodes are too slow to share results in real time"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m3.1-page-3"
                },
                {
                  id: "m3.1-q5",
                  question: "What language do most developers use to write Ethereum smart contracts?",
                  options: [
                    "Solidity",
                    "Python",
                    "Rust",
                    "JavaScript"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m3.1-page-3"
                },
                {
                  id: "m3.1-q6",
                  question: "What does it mean for a blockchain to be EVM-compatible?",
                  options: [
                    "It shares Ethereum's transaction history and token balances",
                    "It uses the same proof-of-work mining algorithm as Ethereum",
                    "It must upgrade its software every time Ethereum upgrades",
                    "It can run smart contracts written for Ethereum with little or no modification"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m3.1-page-3"
                },
                {
                  id: "m3.1-q7",
                  question: "Which of the following best describes Ethereum's core addition over Bitcoin?",
                  options: [
                    "The ability to deploy programs that live and execute on the blockchain",
                    "A built-in exchange for trading tokens peer to peer",
                    "Faster block times and lower fees on all transactions",
                    "A governance system that lets token holders vote on network changes"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m3.1-page-2"
                },
                {
                  id: "m3.1-q8",
                  question: "Which of these chains is EVM-compatible?",
                  options: [
                    "Bitcoin",
                    "Cardano",
                    "Base",
                    "Cosmos"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m3.1-page-3"
                }
              ]
            }
          ]
        },
        {
          id: "module-3.2",
          title: "Module 3.2 — Smart Contracts",
          pages: [
            {
              id: "m3.2-page-0",
              title: "Module Introduction",
              type: "video",
              content: "In this module, we dive into the core engine of the programmable blockchain: Smart Contracts. We'll explore how they work, why the vending machine is the perfect analogy, and how they replace institutional trust with mathematical certainty."
            },
            {
              id: "m3.2-page-1",
              title: "What Is a Smart Contract?",
              content: `A smart contract is a program that lives on the blockchain and executes automatically when its conditions are met. No company runs it, no employee triggers it, and no administrator can alter it once it is deployed. The code is the agreement, and the blockchain is the enforcement mechanism.

The **vending machine** is the cleanest analogy for how this works. When you put money into a vending machine and select a drink, the machine does not consult anyone. It checks whether you have met the condition (correct amount inserted, valid selection made), and if you have, it releases the product. If you haven't, it returns your money. There is no cashier involved, no negotiation, and no discretion. The logic is fixed, and it runs the same way every time.

A smart contract works on the same principle. A developer writes the conditions into code and deploys it to the blockchain. From that point on, anyone who meets those conditions triggers the contract's execution automatically. The blockchain records every interaction, the outcome is publicly verifiable, and nobody can interfere with it mid-execution.

This matters because most agreements in the real world depend on trusting a third party to enforce them. A landlord and tenant trust a court system. A buyer and seller on a marketplace trust the platform. A musician licensing their work trusts a collecting society. Smart contracts **replace that trust with code**. If the conditions are met, the outcome happens, and no institution needs to stand behind it.

One thing to be clear about from the start: smart contracts are **not intelligent**. They do not make judgments, they do not adapt to circumstances, and they cannot read information from the outside world on their own. They execute the logic they were given, nothing more.`
            },
            {
              id: "m3.2-page-2",
              title: "What Smart Contracts Can and Can't Do",
              content: `Smart contracts are precise and reliable within a specific boundary.

### What smart contracts can do
A smart contract can **hold funds** and release them when conditions are met. It can **mint tokens**, burn them, or transfer them between addresses based on rules written into it at deployment. It can record data permanently on-chain, enforce voting rules in a decentralized organization, split revenue automatically between multiple parties, and execute trades between tokens without a centralized exchange involved. Every one of these actions happens **deterministically**, meaning the same inputs always produce the same outputs, and every action is recorded on a public ledger that anyone can verify.

### What smart contracts cannot do
A smart contract **cannot reach outside the blockchain** on its own. It cannot check whether a package was delivered, whether a football match ended in a draw, or whether a specific bank account received a payment. The blockchain is a closed system, and smart contracts only have access to data that exists within it. To act on real-world information, a smart contract needs an **oracle**, which is an external service that feeds verified off-chain data onto the blockchain.

Smart contracts also **cannot be changed** after deployment. This is both their strength and their most significant risk. **Immutability** means nobody can alter the rules after the fact, which is what makes them trustworthy. But it also means a bug in the code is a permanent bug. Several of the largest losses in blockchain history trace back to smart contract vulnerabilities that could not be patched because the contract was already live and immutable. Some development teams build in upgrade mechanisms, but those mechanisms introduce their own trust assumptions about who controls the upgrade.

Finally, a smart contract **cannot enforce anything in the physical world**. It can release funds when conditions on-chain are met, but it has no power to compel a real person to deliver goods, show up to an event, or honor an agreement that exists outside the blockchain.`
            },
            {
              id: "m3.2-page-3",
              title: "Gas: Paying for Computation",
              content: `Every instruction a smart contract executes costs something. Adding two numbers, storing a value, transferring a token, etc., each consumes computational resources across every node in the Ethereum network simultaneously. **Gas** is the unit that measures how much computation a given operation requires, and it is how the network prices those operations.

When you send a transaction on Ethereum, you are asking thousands of nodes to process and verify that transaction, update their copies of the ledger, and reach consensus on the result. Gas is how you pay for that collective effort. The more complex the operation—a simple token transfer uses less gas than executing a multi-step DeFi trade—the more you pay.

The actual cost you pay is calculated by multiplying the amount of gas an operation uses by the current **gas price**, which is denominated in **gwei**. Gwei is a small unit of ETH: one gwei is one billionth of one ETH. When the network is busy, and many transactions are competing to be included in the next block, gas prices rise because users bid higher to get their transactions processed faster. When the network is quiet, gas prices fall. This is the same supply and demand logic as any congested system: more demand for limited block space pushes the price up.

Gas serves a second function beyond payment: it **prevents abuse**. Without a cost attached to computation, someone could deploy a contract with an infinite loop and force every node on the network to run it forever. Gas caps that risk. Every transaction specifies a **gas limit**, the maximum amount of gas the sender is willing to consume. If the contract's execution hits that limit before finishing, it stops, the transaction fails, and the gas already used is not refunded. The network was still doing work, and that work still costs something.

A network that thousands of people depend on cannot allow any single actor to consume unlimited resources for free. Gas is the mechanism that keeps that from happening.`
            },
            {
              id: "m3.2-demo",
              title: "Contract Simulator Demo: Trigger a Smart Contract Without Writing Code",
              type: "interactive",
              componentId: "EscrowSimulator"
            },
            {
              id: "m3.2-quiz",
              title: "Module 3.2 Quiz",
              type: "quiz",
              questions: [
                {
                  id: "m3.2-q1",
                  question: "Which analogy best describes how a smart contract works?",
                  options: [
                    "A lawyer who negotiates terms between two parties",
                    "A vending machine that executes automatically when conditions are met",
                    "A bank that holds funds and releases them on request",
                    "A marketplace platform that moderates disputes between buyers and sellers"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m3.2-page-1"
                },
                {
                  id: "m3.2-q2",
                  question: "What does a smart contract need in order to act on real-world information, such as whether a package was delivered?",
                  options: [
                    "An oracle that feeds verified off-chain data onto the blockchain",
                    "A direct connection to shipping company databases",
                    "A developer to manually confirm the event on-chain",
                    "A second smart contract running on a different blockchain"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m3.2-page-2"
                },
                {
                  id: "m3.2-q3",
                  question: "Why can a smart contract bug be especially dangerous compared to a bug in regular software?",
                  options: [
                    "Smart contract bugs always drain user wallets immediately",
                    "Developers cannot access the contract's code after deployment",
                    "Smart contracts are immutable, so a deployed bug cannot be patched",
                    "Smart contract bugs are invisible to auditors and security researchers"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m3.2-page-2"
                },
                {
                  id: "m3.2-q4",
                  question: "What is gas in the context of Ethereum?",
                  options: [
                    "The programming language used to write smart contracts",
                    "A fee paid to the wallet provider for processing transactions",
                    "A unit that measures the computational work a transaction requires",
                    "The unit used to measure how much computation a transaction requires and price it accordingly"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m3.2-page-3"
                },
                {
                  id: "m3.2-q5",
                  question: "Why do gas prices rise when the Ethereum network is busy?",
                  options: [
                    "Ethereum's protocol automatically increases fees to slow down usage",
                    "More transactions competing for limited block space drives the price up",
                    "Validators charge more when they process complex smart contracts",
                    "The ETH token price increases during periods of high network activity"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m3.2-page-3"
                },
                {
                  id: "m3.2-q6",
                  question: "A musician deploys a smart contract to split revenue from sales. What happens when a sale executes?",
                  options: [
                    "The platform holds the funds and distributes them at the end of the month",
                    "The musician manually triggers the split after confirming the sale",
                    "The contract splits and transfers funds to all parties simultaneously and automatically",
                    "The collecting society receives the full payment and handles distribution"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m3.2-page-2"
                },
                {
                  id: "m3.2-q7",
                  question: "In the escrow demo, why does the contract check who is calling each function before executing?",
                  options: [
                    "To make sure only the correct party can trigger each stage of the contract",
                    "To calculate how much gas each party owes for their share of the transaction",
                    "To record the caller's identity permanently in the contract's public log",
                    "To prevent the contract from being deployed more than once"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m3.2-demo"
                },
                {
                  id: "m3.2-q8",
                  question: "What does a gas limit on a transaction do?",
                  options: [
                    "It sets the maximum ETH price the sender is willing to pay per unit of gas",
                    "It caps the number of transactions a wallet can send per day",
                    "It restricts which smart contracts a wallet address is allowed to interact with",
                    "It sets the maximum computation the transaction is allowed to consume before it stops"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m3.2-page-3"
                }
              ]
            }
          ]
        },
        {
          id: "module-3.3",
          title: "Module 3.3 — Token Economics Foundations",
          pages: [
            {
              id: "m3.3-page-0",
              title: "Module Introduction",
              type: "video",
              youtubeId: "6PADQLplsdU",
              content: "Welcome to Module 3.3. In this module, we'll dive into the foundations of token economics, exploring the difference between coins and tokens, understanding token standards, and learning what truly gives a token value."
            },
            {
              id: "m3.3-page-1",
              title: "Coins vs Tokens: What's the Difference?",
              content: "People use \"coin\" and \"token\" interchangeably in casual conversation, but they describe two different things.\n\n**A coin** is the native currency of a blockchain. ETH is the coin of Ethereum. BTC is the coin of Bitcoin. SOL is the coin of Solana. Coins exist at the protocol level, meaning they are built into the blockchain itself. They are used to pay for transactions on that network, to reward validators, and to denominate value within the ecosystem. You cannot have Ethereum without ETH. The coin is fundamental to how the network operates.\n\n**A token** is different. Tokens are created by deploying a smart contract on top of an existing blockchain. They do not exist at the protocol level; they exist within a contract that lives on the chain. USDC, for example, is a token that runs on Ethereum. So is UNI, the governance token of the Uniswap exchange, and LINK, the token used by the Chainlink oracle network. None of these are coins. They are programs that track balances and transfers according to rules written into their contracts.\n\nTokens depend on the blockchain they are built on. If Ethereum went down, every token running on Ethereum would be inaccessible until it came back. Tokens inherit the security, speed, and cost structure of their underlying chain.\n\nOne more distinction: **stablecoins are tokens**. USDC, USDT, and DAI are not coins in the technical sense. They are smart contract tokens designed to maintain a stable value relative to a reference currency, usually the US dollar."
            },
            {
              id: "m3.3-page-2",
              title: "Fungible and Non-Fungible Tokens: ERC-20, ERC-721, ERC-1155",
              content: "Before getting into standards, the underlying concept needs to be clear.\n\n### Fungibility\n\nA **fungible asset** is one where every unit is identical and interchangeable. If you lend a friend 500 Kenyan shillings and they pay you back with a different 500 shilling note, nothing has been lost or changed. The specific note does not matter; only the value does. ETH is fungible. One ETH is identical to every other ETH. USDC is fungible. Every unit of a fungible token is indistinguishable from every other unit of the same token, and that is precisely what makes it useful as money or as a tradeable asset.\n\nA **non-fungible asset** is one where every unit is unique and not interchangeable. A concert ticket for Row A, Seat 12 is not the same as a ticket for Row F, Seat 7, even if they cost the same. A land title for a specific plot in Kumasi is not interchangeable with a land title for a different plot. Non-fungible tokens (NFTs) apply this logic on-chain: each token has a unique identifier that distinguishes it from every other token in the same contract.\n\n### Token Standards\n\n**ERC-20**  \nERC-20 is the standard for fungible tokens on Ethereum. ERC stands for Ethereum Request for Comments, the process by which the Ethereum developer community proposes and agrees on technical standards. ERC-20 defines a common set of rules that every fungible token contract must follow: how balances are tracked, how transfers work, how a contract can authorize another address to spend tokens on its behalf. Because all ERC-20 tokens follow the same rules, wallets and exchanges can support any ERC-20 token without needing custom code for each one. USDC, LINK, UNI, and thousands of other tokens are all ERC-20.\n\n**ERC-721**  \nERC-721 is the standard for non-fungible tokens. Each token in an ERC-721 contract has a unique ID, and ownership of that specific ID is what the token represents. Two tokens in the same ERC-721 contract can have completely different values because they are not interchangeable. Most NFT collections, from digital art to on-chain credentials to gaming items, are built on ERC-721.\n\n**ERC-1155**  \nERC-1155 is a multi-token standard that handles both fungible and non-fungible tokens within a single contract. A game developer, for example, might need thousands of identical gold coins (fungible) alongside a small number of unique legendary weapons (non-fungible). Deploying two separate contracts for this is inefficient. ERC-1155 allows both types to coexist in one contract, reducing deployment costs and simplifying how assets are managed. Gaming and digital collectibles projects use ERC-1155 heavily for exactly this reason.\n\nThe standard a token uses determines what the token can do, how wallets interpret it, and what rules govern its transfers. When you see a token listed on a block explorer, the standard it follows tells you immediately whether you are looking at a currency-like asset, a unique item, or a hybrid collection."
            },
            {
              id: "m3.3-page-3",
              title: "What Gives a Token Value?",
              content: "This is one of the most important questions in the entire course. Token value comes from a combination of factors, and understanding each one separately gives you a framework for evaluating any token you encounter.\n\n### Supply\n\nEvery token has a supply structure. Some tokens have a fixed maximum supply: Bitcoin is capped at 21 million, and once that limit is reached, no new BTC will ever be created. Others have an inflationary supply, meaning new tokens are continuously issued, usually to reward validators or incentivize participation. Others have a deflationary mechanism, where tokens are permanently removed from circulation through a process called burning. Supply structure matters because scarcity, or the absence of it, directly affects price. A token with unlimited issuance and no demand sink will trend toward zero over time regardless of what the project does.\n\n### Demand\n\nSupply alone does not determine value. Demand is what interacts with supply to produce a price. Demand for a token comes from multiple sources: people buying it to use a protocol that requires it, investors speculating on its future price, institutions holding it as a reserve asset, or users needing it to pay transaction fees. The more genuine and diverse the sources of demand, the more stable and defensible the token's value tends to be. Demand driven entirely by speculation is fragile; demand driven by actual utility is stickier.\n\n### Utility\n\nUtility means the token does something useful within its ecosystem. ETH has utility because you need it to pay gas on Ethereum. LINK has utility because the Chainlink oracle network requires it for payments between data requesters and node operators. A token with genuine utility has a built-in reason for people to acquire and hold it beyond price speculation. When evaluating a token, the question to ask is: what breaks if this token did not exist? If the answer is nothing, the utility is probably cosmetic.\n\n### Narrative\n\nNarrative is real, even if it feels less tangible than the other factors. Bitcoin's digital gold narrative, the idea that BTC is a scarce, censorship-resistant store of value, drives significant institutional demand. That narrative is a social consensus that has built up over fifteen years. Narratives can accelerate adoption far beyond what fundamentals alone would justify, and they can also collapse, taking token prices with them. The Terra/LUNA collapse in 2022 is an example: the narrative that an algorithmic stablecoin could maintain its peg through market incentives alone fell apart under stress, and billions of dollars of value evaporated in days.\n\nThese four factors do not operate independently. A token with strong utility and a fixed supply cap still needs demand to have value. A compelling narrative without utility is a short-term price driver at best. The most resilient tokens tend to score reasonably well across all four, and the riskiest ones tend to be propped up by narrative alone."
            },
            {
              id: "m3.3-page-4",
              title: "Tokenomics: Supply, Distribution, Vesting, and Burns",
              content: "Tokenomics is the study of how a token's economic system is designed. The word combines \"token\" and \"economics,\" and it covers every decision a project makes about how many tokens exist, who gets them, when they can be sold, and what happens to them over time. A project can have strong technology and a real use case and still fail because its tokenomics were designed poorly or dishonestly. Reading tokenomics critically is one of the most practical skills this course will give you.\n\n### Supply Caps\n\nA supply cap is the maximum number of tokens that will ever exist. Bitcoin's 21 million cap is the most well-known example. A hard cap creates a ceiling on supply, which means demand growth is not diluted by new issuance. Not every token has a cap: ETH has no hard cap, though its issuance rate is low and its burn mechanism means it can become deflationary under certain network conditions. When evaluating a token, the first question is whether the supply is fixed or open-ended, and if open-ended, what controls issuance.\n\n### Distribution\n\nDistribution describes who receives tokens and in what proportions. A typical token distribution might allocate percentages to the founding team, early investors, a community treasury, ecosystem grants, and a public sale.\n\nThe split matters a lot. A project where 40% of all tokens go to founders and 30% go to venture capital firms leaves only 30% for the public and the ecosystem. That concentration means a small group holds most of the supply and can exert significant downward pressure on price if they sell. Healthy distributions tend to favor community ownership and ecosystem growth over insider allocations.\n\n### Vesting\n\nVesting is a schedule that controls when token recipients are allowed to sell or transfer their allocation. A typical vesting schedule for a founding team might include a one-year cliff, meaning no tokens are released at all for the first year, followed by a linear unlock over three years after that. Vesting exists to align incentives: if founders can sell everything on day one, they have limited financial reason to keep building. When you review a project's tokenomics, look at when large allocations unlock. A wave of tokens becoming available after a vesting cliff often creates selling pressure, and knowing when that cliff hits is relevant information.\n\n### Burn Mechanisms\n\nBurning means permanently removing tokens from circulation by sending them to an address that nobody controls, making them irretrievable. Burns reduce the circulating supply over time, which can create deflationary pressure if demand stays constant or grows. Ethereum introduced a burn mechanism with EIP-1559 in 2021, where a portion of every transaction fee is burned rather than paid to validators. During periods of high network activity, Ethereum burns more ETH than it issues, making it net deflationary. Some projects use manual burns, where a percentage of protocol revenue is used to buy tokens from the market and burn them. The key question is whether a burn mechanism is meaningful in scale or just a marketing narrative with negligible real impact."
            },
            {
              id: "m3.3-demo-1",
              title: "Token Supply Simulator: Adjust the Levers, Watch the Economy",
              type: "interactive",
              componentId: "token-supply-simulator",
              content: "### Interactive Token Economy Dashboard\n\nExplore how tokenomics design choices shape a token’s circulating supply over time. Adjust sliders for **total supply**, **burn rate**, **vesting unlock schedule**, and **airdrop percentage**. The live chart updates to show the effect on inflation, scarcity, and circulating supply.\n\n~~~token-supply-simulator~~~\n"
            },
            {
              id: "m3.3-quiz-1",
              title: "Module 3.3 Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "What is the key difference between a coin and a token?",
                  options: [
                    "Coins can only be used for payments while tokens can be traded on exchanges",
                    "Tokens are created by miners while coins are created by smart contracts",
                    "A coin is native to a blockchain at the protocol level while a token is created by a smart contract on top of a blockchain",
                    "Coins have a fixed supply while tokens do not"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m3.3-page-1"
                },
                {
                  id: "q2",
                  question: "Which token standard would a developer use to create a currency-like asset where every unit is identical?",
                  options: [
                    "ERC-20",
                    "ERC-721",
                    "ERC-1155",
                    "ERC-4337"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m3.3-page-2"
                },
                {
                  id: "q3",
                  question: "What makes a non-fungible token different from a fungible one?",
                  options: [
                    "Non-fungible tokens can only exist on Ethereum",
                    "Non-fungible tokens are always worth more than fungible tokens",
                    "Non-fungible tokens cannot be transferred between wallets",
                    "Each non-fungible token has a unique identifier that makes it distinct from every other token in the same contract"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m3.3-page-2"
                },
                {
                  id: "q4",
                  question: "A game needs thousands of identical in-game coins alongside a small number of unique legendary weapons. Which token standard handles both asset types within a single contract?",
                  options: [
                    "ERC-20, because it supports multiple token types natively",
                    "ERC-1155, because it supports both fungible and non-fungible tokens in one contract",
                    "ERC-721, because it assigns unique IDs to every asset including identical ones",
                    "ERC-4337, because it was designed for gaming applications specifically"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m3.3-page-2"
                },
                {
                  id: "q5",
                  question: "Which of the following best describes genuine token utility?",
                  options: [
                    "The token is required to perform a specific function within its ecosystem, so demand for it is tied to actual usage",
                    "The token has a compelling brand story that drives investor interest",
                    "The token is listed on major exchanges and easy to buy",
                    "The token's price has increased consistently over the past six months"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m3.3-page-3"
                },
                {
                  id: "q6",
                  question: "What does a vesting schedule achieve in a token project?",
                  options: [
                    "It increases the token's total supply over time to reward early holders",
                    "It prevents the token from being listed on exchanges before launch",
                    "It controls when team members and investors can sell their allocations, aligning their incentives with the project's long-term success",
                    "It determines the percentage of tokens burned after each transaction"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m3.3-page-4"
                },
                {
                  id: "q7",
                  question: "What happened to Terra/LUNA in 2022 that makes it a relevant lesson in token value?",
                  options: [
                    "The project was shut down by regulators for operating without a license",
                    "The narrative that its algorithmic stablecoin could maintain its peg collapsed under stress, wiping out billions in value within days",
                    "The founding team sold their entire allocation before the vesting cliff, triggering a price crash",
                    "A smart contract exploit drained the project's treasury and made the token worthless"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m3.3-page-3"
                },
                {
                  id: "q8",
                  question: "What does burning tokens do to a token's economy?",
                  options: [
                    "It transfers burned tokens to a community treasury for redistribution",
                    "It temporarily removes tokens from circulation until the project needs them again",
                    "It rewards validators by converting burned tokens into staking rewards",
                    "It permanently removes tokens from circulation, reducing supply and creating potential deflationary pressure"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m3.3-page-4"
                }
              ]
            }
          ]
        },
        {
          id: "module-3.4",
          title: "Module 3.4 — NFTs: Beyond the Hype",
          pages: [
            {
              id: "m3.4-video",
              title: "NFTs Explained",
              type: "video",
              youtubeId: "FkUn86bH34M",
              content: "In this module introduction, we explore what NFTs actually are and why they represent a paradigm shift in digital ownership."
            },
            {
              id: "m3.4-page-1",
              title: "What Is an NFT, Really?",
              content: "NFT stands for **non-fungible token**. The technical definition was covered in Module 3.3: it is a token with a unique identifier, built on a standard like ERC-721, where no two tokens are identical and no two are interchangeable. But this alone does not explain why NFTs became significant, or why they are worth understanding beyond the headlines about expensive JPEGs.\n\nThe core idea behind an NFT is **provable digital ownership**. Before NFTs existed, digital files could be copied infinitely with no way to distinguish an original from a copy. If an artist sold a digital painting, the buyer received a file that was identical to every other copy of that file on the internet. There was no meaningful sense in which that buyer \"owned\" something distinct. NFTs changed that by anchoring ownership to the blockchain. The token is the record of ownership, and that record is public, permanent, and cannot be duplicated.\n\nThe token itself is a unique entry on the blockchain. It has an ID, an owner address, and a pointer to metadata, which is a set of information describing what the token represents: a name, a description, and usually a link to an image or file. **The token is not the image.** The token is the record that says a specific address owns a specific item.\n\nThe \"expensive JPEG\" narrative captured one use case, speculative digital art, while the underlying technology was quietly being applied to event ticketing, music rights, gaming assets, academic credentials, and digital identity. Those applications are where NFTs become genuinely interesting for the long term, and they are what this module is actually about."
            },
            {
              id: "m3.4-page-2",
              title: "What You Actually Own When You Own an NFT",
              content: "When you buy an NFT, you own **the token**. That statement sounds obvious until you unpack what the token actually is and what it is not, because the gap between the two is where most people get confused or misled.\n\nThe token is a unique entry on the blockchain that records your wallet address as the current owner of a specific token ID within a specific smart contract. That record is genuine, verifiable, and tamper-proof. Nobody can take it from you without access to your private key, and anyone can verify your ownership by reading the blockchain. That part is real and meaningful.\n\nWhat the token does **not** automatically give you is ownership of the underlying asset the token points to. When an NFT represents a digital artwork, the token contains a link to that artwork, not the artwork itself. The image typically lives somewhere else, either on a centralized server, on a decentralized storage network like IPFS, or in rare cases encoded directly on the blockchain. Owning the token means owning the pointer, and a pointer is only as valuable as the thing it points to, and only as permanent as the storage holding that thing.\n\n### Copyright is an entirely separate matter\n\nBuying an NFT of an artwork does not transfer the copyright of that artwork to you unless the creator explicitly includes that transfer in a legal agreement attached to the sale. Copyright is a legal construct that exists outside the blockchain. The blockchain records token ownership; it does not record intellectual property rights. Several high-profile disputes have emerged from buyers assuming that purchasing an NFT meant they could reproduce, license, or commercialize the underlying work. In most cases, they could not. What they owned was the token, which carried social and community value within a specific ecosystem, but no legal reproduction rights.\n\nA concert ticket NFT gives you verifiable access rights to an event. An on-chain credential NFT gives you a tamper-proof record of an achievement. A gaming asset NFT gives you provable ownership of an item within a game ecosystem. In each of these cases, the value of the token is clear and specific. The problems arise when buyers assume ownership of the token extends further than the project or the law actually supports."
            },
            {
              id: "m3.4-page-3",
              title: "On-Chain vs Off-Chain Metadata: Where the File Actually Lives",
              content: "Every NFT points to metadata. Metadata is the information that describes what the token represents: a name, a description, a list of attributes, and a link to the media file the token is associated with, usually an image, a video, or an audio file. Where that metadata lives, and where the media file itself lives, determines how permanent and trustworthy your NFT actually is.\n\n### On-Chain Metadata\n\nOn-chain metadata means the token's descriptive information is stored directly on the blockchain, inside the smart contract or encoded into the token itself. This is the most permanent option available. Because the blockchain is immutable and decentralized, on-chain metadata cannot be altered, deleted, or lost as long as the blockchain exists. Fully on-chain NFTs, where even the artwork is generated and stored on-chain as code, are considered the gold standard for permanence. CryptoPunks and Nouns are examples of projects where the core asset data lives entirely on Ethereum. The tradeoff is cost: storing data on-chain is expensive because every byte consumes block space and therefore costs gas.\n\n### Off-Chain Metadata with IPFS\n\nMost NFT projects store their metadata and media files off-chain to avoid the cost of on-chain storage. The most common decentralized option is **IPFS**, the InterPlanetary File System. IPFS is a peer-to-peer storage network where files are addressed by their content rather than their location. Instead of a URL that says \"find this file at this server address,\" an IPFS link is a hash of the file's actual content. If the file changes, the hash changes, which means you can verify that what you are retrieving is exactly what was originally linked. This makes IPFS significantly more trustworthy than a centralized server, but it is not fully permanent. Files on IPFS only persist as long as at least one node on the network is actively storing and serving them, a process called pinning. If nobody pins a file, it can disappear.\n\n### Off-Chain Metadata with Centralized Servers\n\nSome projects store their metadata on regular web servers they control. This is the cheapest and easiest option, and it is also the most fragile. If the company behind the project shuts down, stops paying for server hosting, or simply changes the files at that URL, the NFT's metadata changes or disappears entirely. The token on the blockchain remains, but it now points to nothing, or to something different from what the buyer originally purchased. This has already happened with real projects. Tokens that once pointed to artwork now return 404 errors because the hosting lapsed.\n\nThe storage method an NFT project uses is publicly verifiable. Before buying any NFT, checking where the metadata lives is a basic due diligence step. A token on a decentralized blockchain with metadata on a centralized server the project controls is not as permanent as it might appear. That does not make it worthless, but it does mean part of what you are trusting is the project's continued operation."
            },
            {
              id: "m3.4-page-4",
              title: "NFT Use Cases Beyond Art",
              content: "### Event Ticketing\n\nTicket fraud and scalping are billion-dollar problems in the live events industry. A paper or PDF ticket can be duplicated. A ticket sold on a secondary market may be counterfeit. NFT tickets solve both problems simultaneously. Each ticket is a unique token issued by the event organizer, so counterfeiting is impossible: the blockchain shows exactly how many tickets were issued and who currently holds each one. Programmable resale rules mean the organizer can cap secondary market prices or collect a royalty on every resale automatically.\n\n### Academic and Professional Credentials\n\nUniversities and professional bodies issue certificates on paper or PDF, both of which can be forged. An on-chain credential is a token issued by the awarding institution to the recipient's wallet address. Any employer can verify it instantly by reading the blockchain, no phone calls to registrar offices, no third-party verification services, no waiting. The recipient controls their credential and can share it with anyone without involving the issuing institution. Several universities across Africa and Southeast Asia are already piloting on-chain degree certificates for exactly this reason.\n\n### Gaming Assets\n\nIn traditional games, items you earn or buy exist only within that game's servers. If the game shuts down, the items disappear. If the developer decides to change the rules, your inventory changes. NFT-based gaming assets exist in your wallet, outside the game's control. You own them independently of the game, can trade them on open markets, and in some ecosystems can use them across multiple games that support the same asset standard.\n\n### Music Rights and Royalties\n\nA musician can issue an NFT that represents a ownership stake in a song's future royalties. Buyers of that token receive a proportional share of streaming and licensing revenue automatically through the smart contract, with no label or collecting society intermediary taking a cut of the distribution. Royal and similar platforms have already facilitated this for artists with measurable audiences.\n\n### Digital Identity\n\nSelf-sovereign identity is the idea that individuals should control their own identity data rather than having it stored and managed by governments, platforms, or corporations. NFT-based identity tokens can represent verified attributes, a government-issued ID check, a proof of address, a credit history, without centralizing that data in a single database that can be hacked or sold. The token lives in the user's wallet; they choose what to share and with whom."
            },
            {
              id: "m3.4-demo-1",
              title: "Inspect NFT Metadata",
              type: "interactive",
              componentId: "nft-metadata-inspector",
              content: "### NFT Metadata Inspector\n\nExplore three pre-loaded NFT examples: an art NFT, an event ticket NFT, and an on-chain credential. For each, click **Inspect Metadata** to see the actual JSON the token contains, with labels explaining each field. Compare how one uses IPFS storage, one uses fully on-chain storage, and one uses a centralized server — highlighting the difference in permanence and trust.\n\n~~~nft-metadata-inspector~~~"
            },
            {
              id: "m3.4-quiz-1",
              title: "Module 3.4 Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "What did NFTs introduce that did not exist for digital assets before?",
                  options: [
                    "A way to establish provable, unique ownership of a digital item recorded permanently on a blockchain",
                    "A method for converting physical assets into digital files",
                    "A system for encrypting digital files so they cannot be copied",
                    "A marketplace where digital artists could sell their work directly to buyers"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m3.4-page-1"
                },
                {
                  id: "q2",
                  question: "When you buy an NFT, what do you definitively own?",
                  options: [
                    "The copyright to the underlying artwork or media file",
                    "A copy of the media file stored permanently on the blockchain",
                    "The unique token recorded on the blockchain that points to the associated metadata",
                    "The smart contract that governs the entire NFT collection"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m3.4-page-2"
                },
                {
                  id: "q3",
                  question: "Why is storing NFT metadata on a centralized server considered the most fragile option?",
                  options: [
                    "Centralized servers are more vulnerable to hacking than IPFS nodes",
                    "Centralized storage costs more than on-chain storage over time",
                    "Centralized servers require gas fees to retrieve metadata",
                    "If the project stops paying for hosting or shuts down, the metadata can change or disappear entirely"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m3.4-page-3"
                },
                {
                  id: "q4",
                  question: "What makes IPFS a more trustworthy storage option than a centralized server for NFT metadata?",
                  options: [
                    "Files on IPFS are addressed by their content hash, so any change to the file produces a different address, making tampering verifiable",
                    "IPFS stores files directly on the Ethereum blockchain, making them fully permanent",
                    "IPFS is owned and maintained by the Ethereum Foundation, guaranteeing long-term availability",
                    "Files stored on IPFS are automatically backed up to every node in the Ethereum network"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m3.4-page-3"
                },
                {
                  id: "q5",
                  question: "How do NFT tickets solve the problem of ticket scalping?",
                  options: [
                    "Programmable resale rules can be baked into the token, capping secondary prices or returning a royalty to the organizer on every resale automatically",
                    "NFT tickets can only be transferred once, preventing any secondary market activity entirely",
                    "NFT ticket prices are fixed by the blockchain and cannot be changed after issuance",
                    "NFT tickets are anonymous, making it impossible for scalpers to identify high-demand events"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m3.4-page-4"
                },
                {
                  id: "q6",
                  question: "Why are on-chain credentials useful for employers verifying qualifications?",
                  options: [
                    "On-chain credentials are issued by a central government authority, making them legally binding in all jurisdictions",
                    "On-chain credentials encrypt the holder's personal data so only the employer can access it",
                    "On-chain credentials are stored in a universal database that all employers can subscribe to",
                    "Any employer can verify an on-chain credential instantly by reading the blockchain, without contacting the issuing institution"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m3.4-page-4"
                },
                {
                  id: "q7",
                  question: "What is the key advantage of NFT-based gaming assets over items in traditional games?",
                  options: [
                    "NFT gaming assets have higher resale value than traditional in-game items",
                    "NFT gaming assets load faster because they are stored on decentralized networks",
                    "The player owns the asset in their wallet independently of the game, so it persists even if the game shuts down",
                    "NFT gaming assets cannot be duplicated by other players within the game environment"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m3.4-page-4"
                },
                {
                  id: "q8",
                  question: "Buying an NFT of a digital artwork typically gives the buyer what rights regarding that artwork?",
                  options: [
                    "Full copyright including the right to reproduce and license the work commercially",
                    "Ownership of the token and whatever rights the project explicitly grants, which in most cases does not include copyright",
                    "Exclusive display rights preventing the original creator from showing the work publicly",
                    "Automatic licensing rights proportional to the resale value of the token"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m3.4-page-2"
                }
              ]
            }
          ]
        },
        {
          id: "module-3.5",
          title: "Module 3.5 — Layer 1 and Layer 2: Scaling Blockchains",
          pages: [
            {
              id: "m3.5-video",
              title: "Module Introduction",
              type: "video",
              youtubeId: "LorgQfXpuK0",
              content: "Welcome to Module 3.5. We'll explore the difference between Layer 1 and Layer 2 blockchains, and how scaling solutions are being built to handle the next billion users."
            },
            {
              id: "m3.5-page-1",
              title: "What Is a Layer 1 Blockchain?",
              content: "A **Layer 1 blockchain** is the base layer: the foundational network that handles everything from scratch. It maintains its own consensus mechanism, its own validator set, its own transaction history, and its own native currency. When people say \"the Ethereum network\" or \"the Bitcoin network,\" they are referring to Layer 1. Nothing underneath it is doing the work. It is the ground floor.\n\nEvery Layer 1 makes a set of foundational decisions at the protocol level that shape everything built on top of it. How are transactions validated? Who can participate in validation? How many transactions can fit in a block? How often are blocks produced? These decisions determine the network's security, its speed, and its cost structure. Changing them after the fact is extraordinarily difficult because every node in the network has to agree to the change, and tens of thousands of independent operators do not coordinate easily.\n\nThe major Layer 1 blockchains each made different tradeoffs. **Bitcoin** prioritizes security and decentralization above all else, accepting slow throughput and limited programmability as the cost of those properties. **Ethereum** prioritizes programmability and decentralization. **Solana** prioritizes throughput and low fees, achieved through a more centralized validator structure and a different consensus design. **BNB Chain** prioritizes low fees and EVM compatibility, with a smaller and more permissioned validator set than Ethereum.\n\nUnderstanding Layer 1s matters because every application, token, and smart contract inherits the properties of the chain it runs on."
            },
            {
              id: "m3.5-page-2",
              title: "The Scaling Problem: Why Ethereum Gets Congested",
              content: "Ethereum processes transactions in blocks, and each block has a size limit that caps how much computation it can contain. In practical terms, Ethereum's base layer handles roughly **15 to 30 transactions per second** under normal conditions.\n\nKeeping blocks small means that running a full Ethereum node does not require industrial hardware. A developer in Kampala or a student in Accra can run a node on a consumer laptop and participate in validating the network. If blocks were arbitrarily large, only well-resourced operators could afford to run nodes, and the network would become more centralized over time. Ethereum's block size limit is a deliberate tradeoff: accept lower throughput to preserve broad participation in validation.\n\nThe problem surfaces when demand exceeds that throughput limit. When more transactions are waiting to be processed than can fit in the next block, users compete by offering higher gas fees to have their transactions prioritized. During periods of high activity, such as a popular NFT mint, a major DeFi event, or a sudden market movement, this competition can push gas fees to levels that make small transactions economically irrational. Sending 10 dollars worth of ETH becomes absurd when the gas fee to do so costs 50 dollars. Ordinary users get priced out, and the network becomes effectively accessible only to those moving large amounts.\n\nThis is called the **blockchain trilemma** (discussed in part 2), a term coined to describe the tension between three properties every blockchain tries to achieve: decentralization, security, and scalability. The argument is that optimizing strongly for any two of these makes the third harder to achieve. Ethereum chose decentralization and security at the base layer, accepting limited scalability there, with the explicit intention of solving scalability through other means. Those other means are what Layer 2s provide."
            },
            {
              id: "m3.5-page-3",
              title: "What Is a Layer 2 and Why Does It Exist?",
              content: "A **Layer 2** is a separate network built on top of a Layer 1 blockchain that handles transactions off the main chain, then reports the results back to it. The Layer 1 remains the source of truth and the final settlement layer. The Layer 2 does the heavy lifting of processing transactions quickly and cheaply, then anchors that work to the security of the base layer beneath it.\n\nThe simplest way to understand this is through an analogy. Imagine a busy government land registry office where every property transaction in the country must be recorded. The office is authoritative and trustworthy, but it is slow and expensive to use because demand is high and capacity is limited. A Layer 2 is like a trusted notary service that batches hundreds of transactions, processes them quickly in their own office, and then submits a single consolidated record to the government registry at the end of the day. The registry does not need to process each transaction individually; it just needs to verify and record the final summary. The result is the same authoritative record, achieved at a fraction of the cost and time.\n\nLayer 2s exist because the alternative solutions to Ethereum's scaling problem both come with significant downsides. Simply increasing Ethereum's block size would speed things up but would price out independent node operators and centralize the network over time. Building entirely separate Layer 1 chains means abandoning Ethereum's security and its existing developer ecosystem. Layer 2s offer a third path: scale the throughput without compromising the base layer's security or decentralization.\n\n**Arbitrum**, **Optimism**, **Base**, **zkSync**, and **Polygon's zkEVM** (all Layer 2 blockchains) collectively process more transactions daily than Ethereum's base layer. Fees on these networks are a fraction of mainnet costs, often below one cent per transaction, making use cases that were economically impossible on mainnet, such as micropayments, casual gaming transactions, and small remittances, genuinely viable."
            },
            {
              id: "m3.5-page-4",
              title: "Optimistic Rollups vs ZK Rollups",
              content: "Both optimistic rollups and ZK rollups solve the same problem: how to process transactions off Ethereum's main chain while still inheriting its security. They take fundamentally different approaches to proving that the transactions they processed were valid, and those differences have real consequences for speed, cost, and trust assumptions.\n\n### Optimistic Rollups\n\nOptimistic rollups take their name from their core assumption: **transactions are assumed to be valid by default**. The rollup processes a batch of transactions off-chain, compresses them, and posts the results to Ethereum mainnet without providing immediate proof that every transaction was legitimate. Instead, there is a **challenge window**, typically seven days, during which anyone can examine the posted data and submit a fraud proof if they find an invalid transaction. If a fraud proof is submitted and verified, the invalid transaction is rejected and the party that submitted it is penalized. If nobody challenges the batch within the window, it is accepted as final.\n\nThe practical consequence of this design is a **withdrawal delay**. Moving assets from an optimistic rollup back to Ethereum mainnet requires waiting out the full challenge window, currently seven days on networks like Arbitrum and Optimism, because finality cannot be confirmed until the challenge period closes. Liquidity providers have built services that let users exit faster by fronting the funds for a fee, but the underlying delay is a structural feature of the design. The upside is that optimistic rollups are relatively straightforward to build and are fully EVM-compatible, meaning any Ethereum smart contract can be deployed on them with minimal modification.\n\n### ZK Rollups\n\nZK rollups use a different mechanism entirely. ZK stands for **zero-knowledge**, referring to a cryptographic technique called a zero-knowledge proof. Instead of assuming transactions are valid and waiting for someone to challenge them, a ZK rollup generates a cryptographic proof for every batch of transactions it processes. This proof mathematically demonstrates that all transactions in the batch were valid, without revealing the details of each transaction. The proof is posted to Ethereum alongside the transaction data, and Ethereum's smart contracts verify it automatically.\n\nThe result is **near-instant finality**. Once the proof is verified on-chain, the batch is final. There is no challenge window, no withdrawal delay, and no reliance on someone watching for fraud. The cryptographic proof does the verification work that the challenge period does in optimistic rollups in seconds. ZK rollups are also more efficient in terms of the data they post to mainnet because the proof compresses verification into a small piece of data regardless of how many transactions it covers.\n\nNeither type is universally superior. Optimistic rollups currently have deeper liquidity, more deployed applications, and a longer track record. ZK rollups have stronger finality guarantees and a technical architecture that many researchers consider more sound for the long term. In practice, both are running at scale, and a developer or user choosing between them today is making a decision based on specific application requirements."
            },
            {
              id: "m3.5-page-5",
              title: "Bridges, Sidechains, and Moving Assets Between Chains",
              content: "As the blockchain ecosystem expanded beyond a single chain, a new problem emerged: assets and data native to one chain cannot move to another chain on their own. Ethereum does not know what is happening on Solana. Bitcoin does not know what is happening on Ethereum. Each chain is a closed system with its own state, its own validators, and its own rules. Bridges and related infrastructure exist to connect these isolated systems, and understanding how they work is also understanding where some of the largest losses in blockchain history have occurred.\n\n### Bridges\n\nA bridge is a protocol that allows assets to move between two separate blockchain networks. The most common mechanism works through a **lock-and-mint model**. When you bridge an asset from Ethereum to Base, for example, your ETH is locked inside a smart contract on Ethereum. The bridge then mints a representative token on Base, typically called wrapped ETH or WETH, that represents your locked ETH one-to-one. When you want to return to the Ethereum mainnet, you burn the wrapped token on Base, and the bridge releases your original ETH from the smart contract on Ethereum.\n\nThe security of this process depends entirely on the bridge's smart contracts and, in many cases, on a set of validators or a multisig that controls the locked funds. This concentration of value in bridge contracts has made them the single largest target for exploits in blockchain history. The **Ronin bridge lost over 600 million dollars** in 2022. The **Wormhole bridge lost 320 million dollars** the same year. In both cases, attackers found ways to mint wrapped tokens without actually locking the underlying assets, draining the reserves. Bridges are a necessary infrastructure, but they are also a place where the security assumptions are different from the underlying chains they connect, and that gap has been exploited repeatedly.\n\n### Sidechains\n\nA sidechain is a separate blockchain that runs alongside a main chain and has its own consensus mechanism and validator set. It connects to the main chain through a bridge, but it does **not** inherit the main chain's security. Polygon's original proof-of-stake chain, before it transitioned to a ZK rollup, was a sidechain. Transactions on a sidechain are validated by the sidechain's own validators, not by Ethereum's. If those validators collude or are compromised, the sidechain's security fails independently of Ethereum. Sidechains can be fast and cheap, but users need to understand they are trusting a separate security model, not Ethereum's.\n\n### Rollups vs Sidechains\n\nThe distinction matters practically. A rollup posts its transaction data and proofs back to Ethereum, meaning Ethereum's validators ultimately verify the rollup's work. A sidechain does not. A rollup's security is therefore derived from Ethereum. A sidechain's security is its own, for better or worse. This is why the Ethereum developer community strongly favors rollups over sidechains as the preferred scaling solution: rollups extend Ethereum's security to a faster and cheaper environment, while sidechains create a separate security environment that users may not fully understand they are entering.\n\n### Validiums\n\nA validium is a hybrid design that uses ZK proofs like a ZK rollup for transaction validity but stores data off-chain rather than posting it to Ethereum. This makes Validiums extremely cheap to operate but introduces a **data availability risk**: if the off-chain data storage goes down, users may be unable to prove their balances and withdraw their funds. Validiums make sense for applications where throughput and cost matter more than the strongest possible security guarantees, such as certain gaming applications or payment systems with trusted operators."
            },
            {
              id: "m3.5-demo-1",
              title: "Bridge Flow Simulator: Move an Asset from Ethereum to Base",
              type: "interactive",
              componentId: "bridge-flow-simulator",
              content: "### Interactive Bridge Flow Simulator\n\nStep through bridging **1 ETH** from Ethereum mainnet to Base, watching each stage of the lock-and-mint process animate in sequence.\n\n- **Stage 1 – Initiate:** Click \"Bridge 1 ETH to Base.\" The Ethereum card highlights.\n- **Stage 2 – Lock:** An animated ETH token moves into the bridge contract. Your ETH balance drops, the bridge contract balance rises. Label: \"Your ETH is now locked. Nothing moves on Base yet.\"\n- **Stage 3 – Mint:** A wrapped WETH token appears on Base. Label: \"Wrapped ETH minted on Base. This represents your locked ETH one-to-one.\"\n- **Stage 4 – Complete:** Balances settle, total fee shown, fee comparison bar reveals the cost difference between L1 and Base.\n\nA \"Bridge Back\" button reverses the flow: WETH burns on Base, ETH unlocks on Ethereum. \n\n~~~bridge-flow-simulator~~~\n"
            },
            {
              id: "m3.5-quiz",
              title: "Module 3.5 Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "What is a Layer 1 blockchain?",
                  options: [
                    "A scaling solution built on top of Ethereum to handle transactions more cheaply",
                    "A blockchain that relies on another network for its security and settlement",
                    "A bridge protocol that connects two separate blockchain networks",
                    "The foundational base layer network that maintains its own consensus, validators, and transaction history"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m3.5-page-1"
                },
                {
                  id: "q2",
                  question: "Why does Ethereum deliberately keep its block size small?",
                  options: [
                    "Smaller blocks allow Ethereum to charge higher gas fees during periods of high demand",
                    "Keeping blocks small means running a full node does not require industrial hardware, preserving broad participation in validation",
                    "Smaller blocks make it easier for developers to deploy smart contracts on the network",
                    "Ethereum's block size is determined by validator votes and has never been deliberately set"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m3.5-page-2"
                },
                {
                  id: "q3",
                  question: "What is the blockchain trilemma?",
                  options: [
                    "The three-way competition between Bitcoin, Ethereum, and Solana for developer adoption",
                    "The challenge of building bridges that connect three or more blockchains simultaneously",
                    "The tension between decentralization, security, and scalability, where optimizing strongly for two makes the third harder to achieve",
                    "The tradeoff between transaction speed, token price, and network uptime on any given blockchain"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m3.5-page-2"
                },
                {
                  id: "q4",
                  question: "What tradeoff did Solana make compared to Ethereum at the base layer?",
                  options: [
                    "Solana prioritizes throughput and low fees, achieved through a more centralized validator structure than Ethereum",
                    "Solana prioritizes security over speed, accepting slower transaction times in exchange for stronger decentralization",
                    "Solana uses optimistic rollups natively at the base layer to achieve higher throughput",
                    "Solana sacrifices programmability to achieve faster block times, similar to Bitcoin's design philosophy"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m3.5-page-1"
                },
                {
                  id: "q5",
                  question: "How does an optimistic rollup determine whether a batch of transactions is valid?",
                  options: [
                    "It generates a cryptographic proof for every batch and posts it to Ethereum for immediate verification",
                    "It submits transactions to Ethereum validators, who check each one individually before confirming the batch",
                    "It assumes transactions are valid by default and relies on a challenge window during which anyone can submit a fraud proof",
                    "It uses a committee of trusted nodes that vote on whether each batch meets the validity criteria"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m3.5-page-4"
                },
                {
                  id: "q6",
                  question: "What is the main practical consequence of the seven-day challenge window on optimistic rollups?",
                  options: [
                    "Developers cannot deploy new smart contracts on the rollup during the challenge period",
                    "Gas fees on the rollup increase for the duration of the challenge window",
                    "Validators must remain online continuously for seven days after each batch is submitted",
                    "Withdrawing assets back to the Ethereum mainnet requires waiting out the full seven-day period before funds are accessible"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m3.5-page-4"
                },
                {
                  id: "q7",
                  question: "What gives ZK rollups near-instant finality compared to optimistic rollups?",
                  options: [
                    "A cryptographic proof is generated for every batch and verified on-chain immediately, eliminating the need for a challenge window",
                    "ZK rollups use a smaller validator set that can reach consensus faster than Ethereum's full validator network",
                    "ZK rollups post transactions directly to Ethereum without compression, making verification straightforward",
                    "ZK rollups operate on a separate consensus mechanism that finalizes blocks every ten seconds"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m3.5-page-4"
                },
                {
                  id: "q8",
                  question: "How does the lock-and-mint bridge mechanism work?",
                  options: [
                    "The asset is destroyed on the source chain and recreated from scratch on the destination chain",
                    "The asset is locked in a smart contract on the source chain while a representative wrapped token is minted on the destination chain",
                    "The asset is split into fragments that travel independently across the bridge and reassemble on arrival",
                    "The asset transfers directly between validators on each chain who verify the transaction simultaneously"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m3.5-page-5"
                },
                {
                  id: "q9",
                  question: "Why have blockchain bridges been such frequent targets for exploits?",
                  options: [
                    "Bridges operate without smart contracts, relying on human operators who can be socially engineered",
                    "Bridge protocols are not open source, so security researchers cannot audit them for vulnerabilities",
                    "Bridges require users to share their private keys during the transfer process, exposing them to theft",
                    "Bridge smart contracts concentrate large amounts of locked assets in one place, making security failures catastrophic"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m3.5-page-5"
                },
                {
                  id: "q10",
                  question: "What is the key security difference between a rollup and a sidechain?",
                  options: [
                    "Rollups use proof-of-work while sidechains use proof-of-stake, making rollups more energy-intensive",
                    "Sidechains post cryptographic proofs to Ethereum while rollups manage their own independent security",
                    "A rollup posts its data and proofs back to Ethereum, so its security is derived from Ethereum, while a sidechain runs its own independent security model",
                    "Rollups require more validators than sidechains, making them more decentralized but slower"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m3.5-page-5"
                },
                {
                  id: "q11",
                  question: "What is a validium, and what tradeoff does it make?",
                  options: [
                    "A validium is an optimistic rollup that reduces its challenge window to 24 hours in exchange for higher fees",
                    "A validium uses ZK proofs for transaction validity but stores data off-chain, making it cheap to operate, but introducing data availability risk",
                    "A validium is a sidechain that posts fraud proofs to Ethereum without storing transaction data on-chain",
                    "A validium is a bridge design that locks assets on both chains simultaneously to prevent double-spending"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m3.5-page-5"
                },
                {
                  id: "q12",
                  question: "Which of the following best describes why the Ethereum community favors rollups over sidechains as the preferred scaling solution?",
                  options: [
                    "Rollups extend Ethereum's security to a faster and cheaper environment, while sidechains create a separate security model that users may not fully understand",
                    "Rollups process more transactions per second than sidechains under equivalent hardware conditions",
                    "Rollups have been live longer than sidechains and therefore have a more established security track record",
                    "Rollups are cheaper to deploy than sidechains, making them more accessible to independent developers"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m3.5-page-5"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "part-4",
      title: "Part 4: DeFi, DAOs & The New Financial System",
      description: "Decentralized Finance, governance, and the future of on-chain organizations.",
      modules: [
        {
          id: "module-4.1",
          title: "Module 4.1 — DeFi: What The Fi Is DeFi?",
          pages: [
            {
              id: "m4.1-video",
              title: "DeFi: What The Fi Is DeFi?",
              type: "video",
              youtubeId: "SZXwDhcx9uY",
              content: "Welcome to Module 4.1. Let's dive into Decentralized Finance (DeFi) and explore how smart contracts are replacing traditional financial intermediaries."
            },
            {
              id: "m4.1-page-1",
              title: "The Financial Primitives",
              content: "Every financial system ever built does five things: it lets people store value, move value, borrow against value, lend value to others, and earn a return on value sitting idle. Banks do all five. Mobile money platforms do some of them. **DeFi does all five**, and it does them without a single company, employee, or office building in the loop.\n\n**DeFi** stands for **Decentralized Finance**. It is a collection of financial services built on top of smart contracts, running on public blockchains, open to anyone with an internet connection and a wallet. No account application. No identity verification. No business hours. The protocols run continuously, governed by code.\n\nTo understand what that actually means, we'll be comparing three systems:\n\n### The Traditional Bank\n\nA bank account in Kenya, Nigeria, or Ghana requires a national ID, a physical address, proof of income in many cases, and the bank's approval. The bank decides your credit limit, your interest rate, your transfer limits, and whether your account stays open. If the bank freezes your account, your money is inaccessible until they decide otherwise. **The bank is the single point of control.**\n\n### Mobile Money (M-Pesa)\n\nM-Pesa and similar mobile money systems removed some of that friction. You can store and send value with just a phone number. But M-Pesa is still a centralized service run by Safaricom. The float that backs your balance sits in commercial banks. If Safaricom's systems go down, or if regulators instruct them to block a category of transactions, they comply.\n\n### DeFi\n\nDeFi removes the operator entirely. When you interact with a DeFi lending protocol, you are sending a transaction to a smart contract. The contract holds the funds in escrow, enforces the terms, and releases the funds when the conditions are met. **Nobody at a head office can override it, freeze it, or change the rate after the fact.**\n\n### The Five Core Primitives\n\nThe five core actions in DeFi map directly to what traditional finance does:\n\n- **Swap** is the DeFi equivalent of currency exchange or asset trading. You exchange one token for another through a decentralized exchange, with no broker in the middle.\n- **Lend** means depositing tokens into a protocol so others can borrow them. The protocol pays you interest automatically, drawn from borrowers' payments.\n- **Borrow** means taking a loan from a protocol by putting up collateral. The protocol releases funds instantly when your collateral meets the requirements, with no credit check.\n- **Earn** covers yield-generating strategies beyond simple lending: providing liquidity to trading pools, staking tokens in protocols, or participating in incentive programs.\n- **Govern**: In DeFi, the protocols themselves are often owned and directed by their users through governance tokens. Holding governance tokens gives you a vote on protocol changes, fee structures, and treasury spending."
            },
            {
              id: "m4.1-page-2",
              title: "Total Value Locked and the Composability of DeFi",
              content: "When people measure the size of the traditional banking system, they look at assets under management, loan books, and market capitalization. DeFi has its own measuring stick: **Total Value Locked**, almost always written as **TVL**.\n\nTVL counts the total value of crypto assets deposited into DeFi protocols at any given moment. If you deposit $500 worth of ETH into a lending protocol as collateral, that $500 is counted in TVL. If a liquidity provider puts $10,000 into a trading pool, that $10,000 is counted. TVL across all DeFi protocols combined tells you roughly how much capital the ecosystem is actively working with.\n\nAs of early 2026, DeFi's total TVL sits between **$130 and $140 billion**, though it has fluctuated — reaching approximately $860 billion by May 2026 after starting the year near $1,200 billion. TVL is useful but imperfect. It counts the same dollar multiple times if that dollar moves through several protocols, which happens constantly in DeFi. It also moves with asset prices — a 30% drop in ETH price drops TVL even if no funds were withdrawn. **Read TVL as a directional indicator of ecosystem activity, not a precise accounting figure.**\n\n### Composability: Money Legos\n\nThe reason the same dollar can move through multiple protocols is DeFi's most important structural property: **composability**.\n\nComposability means DeFi protocols are designed to interoperate. Any protocol can call any other protocol. Any token that one protocol produces can be used as an input in another. There is no proprietary wall between them, because they all run on the same public blockchain and speak the same smart contract language.\n\nThe clearest way to see composability in action is to follow a single deposit through the system. You deposit ETH into **Lido**, a liquid staking protocol. Lido gives you **stETH** — a token representing your staked ETH plus the staking rewards it accumulates. You take that stETH and deposit it into **Aave** as collateral. Aave lets you borrow USDC against it. You take that USDC and supply it to a **Uniswap** liquidity pool, earning trading fees. **Three protocols, one original deposit, three simultaneous yield streams** — and none of those protocols needed permission from the others to accept your assets.\n\nThis is why DeFi developers call the ecosystem **\"money legos.\"** Each protocol is a building block with standardized inputs and outputs. You can stack them in combinations that the original builders never anticipated.\n\n### The Dark Side of Composability\n\nComposability is genuinely powerful, and it creates a specific category of systemic risk that traditional finance does not have in the same form. When protocols are deeply interconnected, a failure in one propagates through all the others that depend on it. Composability means protocols stack like Lego blocks, creating an exponential attack surface area.\n\nIn April 2026, the **KelpDAO / Aave incident** demonstrated this vividly. Hackers exploited a bridge vulnerability to forge rsETH tokens with no genuine collateral backing. These forged assets were deposited into Aave and used as collateral to borrow nearly 100,000 ETH. Aave's own risk logic had not failed — but its reliance on external asset credibility had been breached. Risk was transmitted through cross-protocol pathways in what became a landmark systemic event.\n\nIn March 2023, when Silicon Valley Bank collapsed, and USDC briefly lost its dollar peg because Circle kept reserves there, every DeFi protocol that used USDC as a stable base asset wobbled simultaneously. The composability that makes DeFi efficient also makes it brittle under stress."
            },
            {
              id: "m4.1-page-3",
              title: "Risks in DeFi",
              content: "DeFi is not a safer version of finance. It is a different version of finance, with different risks, most of which traditional finance does not prepare you to recognize. Before you put a single dollar into any DeFi protocol, you need to understand what can go wrong and how.\n\n### Smart Contract Risk\n\nSmart contract risk is the most fundamental. Every DeFi protocol runs on code. If that code has a bug, an attacker who finds it can drain the protocol's funds in a single transaction. There is no fraud department, no chargeback, and no insurance payout in most cases. The code runs, and the money is gone. **In 2021 alone, over $1.3 billion was lost to smart contract exploits.** Audits reduce this risk, but do not eliminate it, as several audited protocols have still been exploited. The longer a contract has been deployed without incident and the more it has been audited by independent firms, the lower the risk, but **it never reaches zero**.\n\n### Liquidation Risk\n\nLiquidation risk applies any time you borrow against collateral. DeFi lending is **overcollateralized**, meaning you must deposit more value than you borrow. If your collateral drops in price and your position falls below the required ratio, the protocol automatically sells your collateral to repay the loan. You do not get a phone call first. You do not get a grace period. The liquidation happens the moment the threshold is crossed, triggered by code or by bots watching the chain. If you borrow $700 against $1,000 of ETH and ETH drops 35%, you can lose your entire collateral position.\n\n### Impermanent Loss\n\nImpermanent loss affects liquidity providers specifically. When you deposit two assets into a trading pool, the pool's algorithm automatically rebalances them as prices shift. If the relative price of the two assets changes significantly while your funds are in the pool, you end up with less value than if you had simply held the assets in your wallet. The word \"impermanent\" refers to the fact that the loss only crystallizes when you withdraw — but if you withdraw at the wrong time, it is permanent. Module 4.3 covers the mechanics in full.\n\n### Rug Pulls\n\nRug pulls are not a technical failure but a human one. A team launches a protocol, attracts liquidity, and then withdraws all the funds and disappears. The smart contract was written to allow it, either with a hidden admin function or with a token that inflates the team's share before they sell. In 2023, rug pulls and exit scams accounted for over 60% of all crypto fraud by volume.\n\n### Oracle Manipulation\n\nOracle manipulation is less discussed but has caused some of the largest exploits in DeFi history. DeFi protocols need external price data — the price of ETH in dollars, for example — to function. They get this from oracle networks like Chainlink. If an attacker can manipulate the price feed, even briefly, they can trick a lending protocol into thinking their collateral is worth far more than it is, borrow against it, and exit before the price corrects. Flash loan attacks often use this mechanism.\n\n### Real-World Asset (RWA) Risk\n\nOne more development that changes the risk landscape in 2026: **real-world assets** are entering DeFi as collateral. Tokenized treasury bills, corporate bonds, and real estate are now accepted as collateral in some lending protocols. This introduces **counterparty risk** that purely on-chain DeFi avoided — if the legal entity backing a tokenized bond defaults or the tokenization platform fails, the on-chain representation of that asset can go to zero regardless of what the smart contract says. RWA collateral brings DeFi closer to traditional finance in yield, and also in the risks traditional finance carries.\n\n---\n\nNone of this means DeFi should be avoided. It means DeFi should be approached with the same rigor you would apply to any financial decision, plus the additional technical literacy this course is building."
            },
            {
              id: "m4.1-quiz",
              title: "Module 4.1 Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "What does TVL measure in DeFi?",
                  options: [
                    "The number of tokens listed across all decentralized exchanges",
                    "The maximum transaction value a protocol is permitted to process",
                    "The total value of assets deposited into DeFi protocols at a given moment",
                    "The combined market capitalization of all governance tokens in circulation"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.1-page-2"
                },
                {
                  id: "q2",
                  question: "Which of the following best describes composability in DeFi?",
                  options: [
                    "A compliance framework that allows DeFi protocols to operate across different legal jurisdictions",
                    "The ability of DeFi protocols to interoperate, so the output of one can be used as the input of another",
                    "A security mechanism that isolates protocols from each other to prevent exploit contagion",
                    "The process by which governance token holders vote on protocol upgrades"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.1-page-2"
                },
                {
                  id: "q3",
                  question: "You deposit ETH as collateral into a lending protocol and borrow USDC against it. ETH's price drops sharply. What does the protocol do?",
                  options: [
                    "Pauses your loan until ETH recovers to its original price",
                    "Contacts you to request additional collateral before taking any action",
                    "Converts your USDC debt into ETH automatically to rebalance the position",
                    "Liquidates your collateral automatically once your position falls below the required ratio"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m4.1-page-3"
                },
                {
                  id: "q4",
                  question: "What is a rug pull?",
                  options: [
                    "A fraud where a project team attracts liquidity into a protocol, then withdraws the funds and disappears",
                    "A smart contract exploit where an attacker drains a protocol using a flash loan",
                    "A market event where multiple large holders sell simultaneously, collapsing a token's price",
                    "A governance attack where a whale acquires enough tokens to pass a malicious proposal"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m4.1-page-3"
                },
                {
                  id: "q5",
                  question: "Why does composability create systemic risk in DeFi?",
                  options: [
                    "It forces protocols to share the same liquidity pools, making them compete for the same capital",
                    "It prevents security auditors from reviewing protocols independently of each other",
                    "A failure in one protocol can propagate instantly through every other protocol that depends on it",
                    "It requires all protocols to denominate their reserves in the same stablecoin"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.1-page-2"
                },
                {
                  id: "q6",
                  question: "Which of the following is NOT one of the five core DeFi primitives covered in this module?",
                  options: [
                    "Swap",
                    "Borrow",
                    "Earn",
                    "Insure"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m4.1-page-1"
                },
                {
                  id: "q7",
                  question: "A lending protocol has been running without exploit for three years and holds audits from four independent security firms. What is true about its smart contract risk?",
                  options: [
                    "The risk only exists in the first 90 days after deployment and is negligible after that",
                    "The risk is reduced but not eliminated — no audit or track record guarantees the code is safe",
                    "The risk transfers to the audit firms, who are now legally liable for any losses",
                    "The risk is zero — sustained deployment and multiple audits confirm the contract is secure"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.1-page-3"
                },
                {
                  id: "q8",
                  question: "DefiLlama shows a 30-day TVL decline for a specific protocol. What does this most likely indicate?",
                  options: [
                    "The protocol's smart contract has been paused pending a security review",
                    "The protocol has been delisted from major decentralized exchanges",
                    "The value of assets deposited has fallen, due to withdrawals, falling asset prices, or both",
                    "The protocol's governance token has lost its voting rights following a community dispute"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.1-page-2"
                }
              ]
            }
          ]
        },
        {
          id: "module-4.2",
          title: "Module 4.2 — Stablecoins",
          pages: [
            {
              id: "m4.2-video",
              title: "Stablecoins Explained",
              type: "video",
              youtubeId: "vx_JyxuV1DE",
              content: "Welcome to Module 4.2. In this module, we will explore stablecoins, comparing fiat-backed, crypto-backed, and algorithmic stablecoin mechanisms, and learn about their real-world impact and risks."
            },
            {
              id: "m4.2-page-1",
              title: "Why Stablecoins Exist and How They Work",
              content: "Every DeFi primitive covered in Module 4.1 has a volatility problem. If you want to lend your crypto and earn interest, but the asset you lent drops 40% in value overnight, your yield means nothing. If you want to borrow against your ETH to buy something, but ETH's price swings 20% in a day, your collateral ratio becomes unpredictable. If you want to send value to a family member in another country, but the token you sent loses a third of its value between the moment you send it and the moment they receive it, the transfer has failed its basic purpose.\n\n**Stablecoins solve this.** A stablecoin is a crypto token designed to maintain a stable value relative to a reference asset, almost always the US dollar. One stablecoin equals one dollar. That stability is what makes stablecoins the base layer of DeFi — the asset against which everything else prices itself, the unit people save and transact in when they want to stay on-chain without exposure to volatility.\n\nThere are three mechanisms used to achieve that stability, and they are not equally reliable.\n\n### Fiat-Backed Stablecoins\n\nThese are the simplest. A company holds dollars in a bank account and issues tokens representing those dollars one-for-one. **USDC**, issued by Circle, works this way. For every USDC in circulation, Circle holds one dollar in cash or cash-equivalent reserves. The peg is maintained because holders can always redeem USDC for real dollars through Circle directly, which means arbitrageurs will buy USDC whenever it trades below $1 and sell it whenever it trades above $1, keeping the price anchored. The mechanism is straightforward, and it works.\n\nThe tradeoff is that it reintroduces centralization. Circle can freeze specific USDC addresses, has done so at the request of law enforcement, and holds its reserves in the traditional banking system. When Silicon Valley Bank failed in March 2023, Circle had $3.3 billion of USDC reserves deposited there. USDC briefly traded at $0.87 before the US government guaranteed SVB deposits, and the peg recovered. **A fiat-backed stablecoin is only as stable as the institution backing it.**\n\n### Crypto-Backed Stablecoins\n\nThese remove the bank from the picture. **DAI**, created by MakerDAO, maintains its dollar peg through overcollateralization with crypto assets. To mint one DAI, you deposit more than one dollar's worth of crypto into a MakerDAO smart contract called a Vault. The standard collateralization ratio has historically been 150%, meaning that to mint 100 DAI, you must deposit at least $150 worth of ETH. If your collateral drops in value and your ratio falls below the minimum, your position is liquidated automatically, and the protocol sells your collateral to buy back and burn the DAI you minted. The DAI supply contracts and the peg holds. No company holds dollars in a bank. The entire system runs on smart contracts and on-chain collateral. The tradeoff is **capital inefficiency**: you must lock up more value than you borrow, which limits how much DAI can exist relative to the collateral in the system.\n\n### Algorithmic Stablecoins\n\nThese attempt to maintain a peg without collateral at all, using code and incentive mechanisms to expand and contract supply in response to price. When the token trades above $1, the protocol mints more to push the price down. When it trades below $1, the protocol burns supply to push the price up. The theory is elegant. The practice, in the most prominent case, was catastrophic. That case is the subject of the next page."
            },
            {
              id: "m4.2-page-2",
              title: "Terra/LUNA: What Algorithmic Failure Actually Looks Like",
              content: "In May 2022, approximately **$40 billion in value was destroyed in 72 hours.** No exchange was hacked. No smart contract was exploited. The code ran exactly as designed. The design itself was the failure.\n\nTerra was a blockchain built by Terraform Labs, founded by Do Kwon. Its algorithmic stablecoin was called **UST**. The mechanism that kept UST at $1 was a burn-and-mint relationship with Terra's native token, **LUNA**.\n\nThe logic worked like this: if UST traded above $1, anyone could burn $1 worth of LUNA to mint one UST and sell it for a profit, increasing UST supply and pushing the price back down to $1. If UST traded below $1, anyone could burn one UST to receive $1 worth of newly minted LUNA, reducing UST supply and pushing the price back up. The peg was maintained entirely by this arbitrage loop — no dollars in a bank, no ETH locked in a vault, just the relationship between two tokens and the assumption that arbitrageurs would always act rationally to close the gap.\n\nThe system depended on one condition holding: that LUNA had sufficient market value to absorb UST redemptions at scale. As long as people believed in LUNA, the arbitrage loop worked. The moment belief wavered, the loop reversed.\n\nIn early May 2022, large withdrawals from **Anchor Protocol**, a DeFi platform on Terra that was paying 20% APY on UST deposits — a yield that had no sustainable source — began pushing UST below its peg. As UST fell below $1, the mint mechanism kicked in: UST holders burned their UST to receive LUNA. This minted enormous quantities of new LUNA, flooding the market with supply. LUNA's price collapsed under the selling pressure. As LUNA's value fell, each UST redemption required more and more newly minted LUNA to cover it, which further collapsed LUNA, which made UST harder to defend, which triggered more redemptions. **The loop fed on itself.** Within 72 hours, UST had fallen to $0.10, and LUNA had fallen from approximately $80 to fractions of a cent.\n\nAn estimated $40 billion in combined market value was gone. Hundreds of thousands of retail investors, many of them in South Korea, Southeast Asia, and parts of Africa, who had parked savings in Anchor's 20% yield, lost most or everything they had deposited. Do Kwon was subsequently arrested in Montenegro in 2023 and faced fraud charges across multiple jurisdictions.\n\n### Three Fatal Flaws\n\n1. **The 20% yield on Anchor had no organic source.** It was subsidized from a reserve fund that was being depleted. A yield that cannot be explained is a yield that cannot be sustained.\n2. **The peg mechanism had no floor.** A collateralized stablecoin like DAI has hard assets backing it — if the system breaks, there is collateral to sell. UST had only LUNA, whose value was itself contingent on the same belief that the peg depended on.\n3. **The system had never been stress-tested at scale under adversarial conditions.** Growth had been treated as proof of soundness. It was not.\n\nAlgorithmic stablecoins have not disappeared from DeFi. Newer designs with partial collateralization and more conservative incentive structures exist. But Terra/LUNA is the reference case for what happens when a stablecoin mechanism relies entirely on reflexive belief with no hard asset floor. Every time you see a new stablecoin promising a yield that seems implausible, the question to ask is: **where does the yield actually come from?** If the answer is unclear, the Terra answer is the one to remember."
            },
            {
              id: "m4.2-page-3",
              title: "Stablecoins in the Real World",
              content: "The theoretical case for stablecoins is easy to make. The practical case is already being made by millions of people who are not thinking about DeFi at all — they are thinking about whether their savings will be worth the same next month.\n\n**Nigeria** has one of the highest stablecoin adoption rates in the world, driven primarily by the naira's persistent devaluation. Between 2020 and 2024, the naira lost over 70% of its value against the dollar. For anyone holding savings in naira, that loss was unavoidable unless they had access to foreign currency. Traditional access to dollars in Nigeria requires a bank account, a documented reason for the exchange, and the Central Bank's willingness to supply dollars to commercial banks — all of which have been restricted at various points. USDC requires none of that. A phone, a wallet, and an internet connection are enough to hold dollar-denominated savings outside the reach of currency devaluation.\n\nThe same pattern appears across Ghana, Ethiopia, Zimbabwe, Argentina, Turkey, and Lebanon, where local currency instability has pushed ordinary people toward dollar stablecoins, not because they are interested in crypto, but because they need a store of value that holds.\n\n### Remittances\n\nBeyond savings, stablecoins are restructuring remittances. Sending money from the UK to Ghana through a traditional remittance provider costs between 5% and 9% in fees and takes one to three business days. Sending USDC on a Layer 2 network costs less than a cent and settles in seconds. The recipient can hold USDC, convert it to local currency through a peer-to-peer market, or spend it directly with merchants who accept it. The infrastructure for the last step — local currency off-ramps — is still developing in many African markets, but it is developing fast.\n\n### The Settlement Layer of DeFi\n\nIn trading and DeFi specifically, stablecoins function as the settlement layer. When you exit a volatile position, you move into a stablecoin. When you provide liquidity to a trading pool, one side of the pair is usually a stablecoin. When a DAO pays contributors, it prioritizes payment stability. When a protocol stores its treasury, a portion sits in stablecoins as runway against market downturns.\n\n### The Regulatory Picture (2026)\n\nThe European Union's **MiCA regulation**, which came into full effect in 2024, requires stablecoin issuers operating in Europe to hold reserves in regulated European banks, publish monthly attestations, and obtain an e-money license. Issuers that cannot comply have been restricted from European markets. In the United States, stablecoin legislation has moved closer to passing after years of stalling, with proposed frameworks requiring reserve transparency and federal oversight of large issuers.\n\nAcross Africa, regulatory approaches vary widely: some central banks have issued guidance that treats stablecoins as foreign currency subject to existing exchange controls, others have issued blanket restrictions, and several have taken a wait-and-see position. The regulatory environment is not settled anywhere, which means the legal status of holding and transacting in stablecoins depends heavily on where you are.\n\nWhat is settled is that stablecoins are used, and they solve a real problem."
            },
            {
              id: "m4.2-quiz",
              title: "Module 4.2 Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "What is the main advantage of fiat-backed stablecoins like USDC?",
                  options: [
                    "They are fully decentralized with no company controlling the reserves",
                    "Their peg is maintained by a simple and transparent one-to-one reserve model that arbitrageurs can enforce",
                    "They generate high yields for holders through algorithmic interest mechanisms",
                    "They are immune to banking system failures because reserves are held in crypto"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.2-page-1"
                },
                {
                  id: "q2",
                  question: "How does DAI maintain its peg to the dollar?",
                  options: [
                    "By holding an equivalent amount of US dollars in a bank account for every DAI in circulation",
                    "Through overcollateralization with crypto assets in smart contract Vaults that get liquidated if collateral ratios fall",
                    "By using an algorithmic burn-and-mint mechanism tied to the price of MakerDAO's governance token",
                    "Through a network of approved validators who vote on the price of DAI every 24 hours"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.2-page-1"
                },
                {
                  id: "q3",
                  question: "What was the core mechanism that Terra's UST used to maintain its $1 peg?",
                  options: [
                    "A centralized reserve of US Treasury bonds managed by Terraform Labs",
                    "A collateral vault system where users locked ETH and BTC to mint UST",
                    "A burn-and-mint relationship with LUNA, where arbitrageurs could profit by correcting the peg",
                    "A network of oracles that adjusted UST supply based on the Consumer Price Index"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.2-page-2"
                },
                {
                  id: "q4",
                  question: "Why did Terra's LUNA token collapse alongside UST in May 2022?",
                  options: [
                    "A smart contract exploit allowed an attacker to mint unlimited LUNA, diluting the supply",
                    "The SEC ordered Terraform Labs to shut down the protocol and liquidate all assets",
                    "UST redemptions minted enormous amounts of LUNA, flooding the market and crashing the price in a self-reinforcing death spiral",
                    "Anchor Protocol was hacked, and the stolen UST was sold for LUNA on the open market"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.2-page-2"
                },
                {
                  id: "q5",
                  question: "What made Anchor Protocol's 20% yield unsustainable?",
                  options: [
                    "The yield was subsidized from a depleting reserve fund with no organic source of revenue",
                    "The yield was denominated in UST, which was not accepted by any merchants",
                    "The yield required users to lock their deposits for a minimum of one year",
                    "The yield was a promotional rate that Anchor publicly stated would end after six months"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m4.2-page-2"
                },
                {
                  id: "q6",
                  question: "Which of the following best describes the capital efficiency tradeoff of crypto-backed stablecoins like DAI?",
                  options: [
                    "They require no collateral, making them highly capital efficient but vulnerable to bank runs",
                    "They are overcollateralized, which makes the peg robust but limits how many stablecoins can be minted relative to locked assets",
                    "They rely on a centralized issuer to manage reserves, reducing trust in the system",
                    "They require users to pay a variable interest rate that fluctuates with network congestion"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.2-page-1"
                },
                {
                  id: "q7",
                  question: "Why have stablecoins seen high adoption in countries like Nigeria, Ghana, and Argentina?",
                  options: [
                    "These countries have banned traditional banking, making stablecoins the only available financial service",
                    "Local currency devaluation has pushed people toward dollar-denominated stablecoins as a store of value that holds its purchasing power",
                    "These governments have issued national stablecoins that citizens are required to use for all transactions",
                    "International remittance companies in these regions offer discounts for stablecoin transfers"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.2-page-3"
                },
                {
                  id: "q8",
                  question: "A new algorithmic stablecoin launches and offers a 15% APY on deposits. Based on the Terra/LUNA lesson, what is the most important question to ask?",
                  options: [
                    "Is the protocol audited by at least three security firms?",
                    "Where does the yield actually come from?",
                    "What is the maximum supply cap of the stablecoin?",
                    "Which Layer 1 blockchain is the stablecoin built on?"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.2-page-2"
                }
              ]
            }
          ]
        },
        {
          id: "module-4.3",
          title: "Module 4.3 — Decentralized Exchanges & Trading",
          pages: [
            {
              id: "m4.3-video",
              title: "Decentralized Exchanges & Trading",
              type: "video",
              youtubeId: "2tTVJL4bpTU",
              content: "Welcome to Module 4.3. In this module, we will explore decentralized exchanges (DEXs), Automated Market Makers (AMMs), how liquidity pools function, and the concept of impermanent loss."
            },
            {
              id: "m4.3-page-1",
              title: "Order Books vs. AMMs: The Payoff",
              content: "Back in Week 2, you learned that blockchains can execute logic automatically through smart contracts. This module is where that idea connects to something tangible: a financial market that runs with no exchange operator, no trading desk, and no one deciding who gets matched with whom.\n\nTo understand why that matters, you need to understand how traditional exchanges actually work.\n\nA traditional **order book** is a live list of buy and sell intentions. Every buyer submits a bid: the maximum price they are willing to pay and the quantity they want. Every seller submits an ask: the minimum price they are willing to accept. The exchange's matching engine scans the book constantly, and when a bid price meets or exceeds an ask price, a trade executes. The difference between the best bid and the best ask at any moment is called the **spread**, and it reflects the gap between what buyers are offering and what sellers are demanding. Liquid markets with many active participants have tight spreads; thinly traded markets have wide ones.\n\nThe problem for early decentralized exchanges was not conceptual. On-chain order books work fine in theory, but executing them on Ethereum is expensive. Every order placement, every cancellation, and every update requires a transaction, which means a gas fee. A market maker maintaining hundreds of orders simultaneously would burn through fees faster than any realistic spread could compensate. For most of Ethereum's early years, this made on-chain order books practically unusable.\n\n**Automated Market Makers** (AMMs) solved this by replacing the counterparty entirely. Instead of matching one buyer with one seller, an AMM holds a pool of two assets and uses a mathematical formula to determine the price of any trade automatically.\n\nThe most widely deployed formula is **x × y = k**, where x is the quantity of token A in the pool, y is the quantity of token B, and k is a constant that must remain unchanged after every trade. You want to buy token A from the pool. The pool gives you some of token A. To keep k constant, you must add enough of token B to compensate. The pool adjusts its price based purely on the new ratio of assets after the trade. No order book required, no counterparty required, and the whole thing runs as a smart contract with no one in charge of it.\n\nThis is why DEXes became viable at scale. Uniswap launched in 2018 and demonstrated that an AMM could handle real trading volume. By 2026, decentralized exchanges account for a substantial portion of on-chain trading activity across Ethereum, Arbitrum, Base, Solana, and dozens of other chains."
            },
            {
              id: "m4.3-page-2",
              title: "Liquidity Pools and the Trading Mechanics",
              content: "An AMM pool does not conjure its assets from nowhere. Someone has to deposit them first. The people who do that are called **liquidity providers**, often shortened to **LPs**, and they are the silent infrastructure behind every AMM trade.\n\nA liquidity provider deposits two assets into a pool in equal value. If you want to provide liquidity to an ETH/USDC pool on Uniswap when ETH is trading at $3,000, you might deposit 1 ETH and 3,000 USDC simultaneously. Your deposit increases the pool's depth, which affects how well the pool handles large trades, and in return you receive an **LP token**: a receipt that records your proportional share of that pool's total liquidity. When you want to withdraw, you hand back the LP token and receive your share of whatever assets are currently in the pool, plus any fees that accumulated while you were providing liquidity.\n\nEvery trade on a Uniswap-style AMM pays a fee to the pool, typically between 0.05% and 1% depending on the fee tier selected for that pair. Those fees accumulate in the pool and are distributed proportionally to LPs when they withdraw.\n\n### Slippage and Price Impact\n\n**Slippage** is the difference between the price you expect to receive when you submit a trade and the price you actually receive when it executes. It happens because the act of trading changes the pool's asset ratio, which changes the price. A small trade in a large, deep pool moves the ratio very little, so slippage is minimal. A large trade in a shallow pool moves the ratio significantly, which means the effective price you receive gets worse as your trade size increases.\n\nThis version of slippage, where your own trade moves the price against you, is called **price impact**, and AMM interfaces display it as a percentage before you confirm any swap. A price impact of 0.1% is routine. A price impact of 5% or higher is a warning that the pool is too shadow for the trade size you are attempting, and you should either split the trade, find a deeper pool, or reconsider the size.\n\n### Trade Deadlines\n\n**Trade deadlines** are a related protection. Because blockchain transactions can sit in a mempool for seconds or minutes before executing, the price can shift between when you submit a trade and when it actually processes. A trade deadline, sometimes called a deadline parameter, specifies a maximum time window within which the transaction must execute. If the deadline passes before the transaction is confirmed, the transaction reverts automatically. This protects you from a situation where a swap you submitted during a calm market executes much later during a volatile one.\n\n### Pool Depth\n\nPool depth determines everything about how an AMM behaves in practice. A pool with $10 million in liquidity can absorb a $50,000 trade with negligible price impact. The same $50,000 trade in a $200,000 pool will move the price noticeably. For major token pairs like ETH/USDC, pool depth is rarely a concern. For newer or less popular tokens, it is often the first thing a trader checks before placing a significant order."
            },
            {
              id: "m4.3-page-3",
              title: "Impermanent Loss",
              content: "Providing liquidity earns you fees. It also exposes you to a risk that has no equivalent in traditional finance, one with a name that significantly undersells how real and permanent the damage can be.\n\n**Impermanent loss** occurs when the price ratio between the two assets you deposited into a pool changes after your deposit. Because the AMM constantly rebalances the pool's composition to maintain its formula, you end up holding a different ratio of assets than you originally deposited, and that difference in ratio translates into a difference in value compared to simply holding the same assets in a wallet.\n\nA concrete example makes this clearer. You deposit 1 ETH and 1,000 USDC into a pool when ETH is priced at $1,000. The pool's total value is $2,000, and you own 100% of it for simplicity. ETH then doubles in price to $2,000. Arbitrage traders, who constantly scan for price differences between markets, will buy ETH from the pool at its stale price until the pool's ratio reflects the new market price. When they finish, the pool no longer holds 1 ETH and 1,000 USDC. It now holds approximately 0.707 ETH and 1,414 USDC. The total value of the pool at the new ETH price is approximately $2,828. If you had simply held 1 ETH and 1,000 USDC in a wallet, you would have $3,000. The difference, roughly $172 in this example, is the impermanent loss.\n\nThe \"impermanent\" label comes from the fact that if ETH returns to exactly $1,000, the pool rebalances back to its original composition and the loss disappears entirely. That is theoretically true. In practice, token prices rarely return precisely to the level at which you deposited, which means for most liquidity providers, the loss is realized when they withdraw. A more honest framing: the loss is unrealized until withdrawal, not guaranteed to reverse.\n\n### Scale and Mitigation\n\nThe size of impermanent loss scales with the magnitude of the price divergence. A 25% price move produces a modest loss. A 5x price move produces a significant one. The only way impermanent loss becomes a non-issue for an LP is if trading fee income is large enough to compensate. High-volume, stable pairs like USDC/USDT generate enormous fee revenue relative to their tiny price divergence, which makes them among the most reliable pools for liquidity providers. Volatile pairs can generate higher fees, but they also carry higher impermanent loss risk, and whether the fee income exceeds the loss depends entirely on the specific pair, the fee tier, and the magnitude of price moves during the period you are providing liquidity.\n\nThere is no formula that tells you in advance whether a pool will be profitable for an LP. Historical fee data, pool depth, and asset volatility are the variables you analyze, and they are all backward-looking. Anyone selling LP positions as guaranteed yield without mentioning impermanent loss is not telling you the full picture."
            },
            {
              id: "m4.3-quiz",
              title: "Module 4.3 Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "Why did traditional order book exchanges struggle to operate on Ethereum's mainnet?",
                  options: [
                    "Order books require a central authority to verify trade settlements",
                    "Ethereum's smart contract language cannot represent bids and asks natively",
                    "Every order update requires an on-chain transaction, making gas costs prohibitive",
                    "Order books are incompatible with ERC-20 token standards"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.3-page-1"
                },
                {
                  id: "q2",
                  question: "In the AMM formula x × y = k, what does k represent?",
                  options: [
                    "The current market price of token X relative to token Y",
                    "The total fee collected by the protocol across all trades in the pool",
                    "The minimum liquidity required for the pool to execute trades",
                    "A constant that must remain unchanged before and after every trade"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m4.3-page-1"
                },
                {
                  id: "q3",
                  question: "What does a liquidity provider receive when they deposit assets into an AMM pool?",
                  options: [
                    "An LP token representing their proportional share of the pool",
                    "A fixed interest payment distributed at the end of each trading day",
                    "A governance token that grants voting rights over that pool's fee tier",
                    "A guaranteed yield based on the pool's 30-day average trading volume"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m4.3-page-2"
                },
                {
                  id: "q4",
                  question: "A trader submits a large order in a shallow liquidity pool. What is the most likely outcome?",
                  options: [
                    "The trade reverts automatically because the pool cannot handle large orders",
                    "Significant price impact, meaning the trader receives a worse effective price",
                    "The protocol routes the order to a deeper pool on a different chain automatically",
                    "The pool's fee tier increases temporarily to compensate liquidity providers"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.3-page-2"
                },
                {
                  id: "q5",
                  question: "What protects a trader from a swap executing at a much worse price due to delays in transaction confirmation?",
                  options: [
                    "The liquidity provider's LP token locking the price at deposit time",
                    "The AMM formula, which holds k constant regardless of market conditions",
                    "A slippage warning that blocks the transaction if price impact exceeds 1%",
                    "A transaction deadline parameter that reverts the swap if not confirmed in time"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m4.3-page-2"
                },
                {
                  id: "q6",
                  question: "When does impermanent loss occur for a liquidity provider?",
                  options: [
                    "When the trading fee income for a pool drops below its 30-day average",
                    "When the protocol upgrades its smart contracts and resets pool compositions",
                    "When the price ratio between the two deposited assets changes after deposit",
                    "When another LP deposits a larger share and dilutes the original provider's position"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.3-page-3"
                },
                {
                  id: "q7",
                  question: "Why is the term \"impermanent\" considered misleading by many practitioners?",
                  options: [
                    "The loss is actually permanent from the moment the first trade executes in the pool",
                    "Prices rarely return precisely to the deposit level, so the loss is usually realized on withdrawal",
                    "Impermanent loss only applies to stablecoin pairs where price divergence is mathematically impossible",
                    "The term was coined by a protocol that later admitted it underestimated the effect"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.3-page-3"
                },
                {
                  id: "q8",
                  question: "Which type of liquidity pool is most likely to generate fee income that outweighs impermanent loss?",
                  options: [
                    "Stablecoin pairs like USDC/USDT where price divergence is minimal and volume is high",
                    "High-volatility token pairs with a 1% fee tier and low total value locked",
                    "New token launches where price discovery create significant trading volume",
                    "Single-asset pools where the protocol insures LPs against directional price movement"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m4.3-page-3"
                }
              ]
            }
          ]
        },
        {
          id: "module-4.4",
          title: "Module 4.4 — Lending & Borrowing",
          pages: [
            {
              id: "m4.4-video",
              title: "Lending & Borrowing",
              type: "video",
              youtubeId: "6ezVZZioQjg",
              content: "Welcome to Module 4.4. In this module, we will dive into decentralized lending & borrowing, exploring how smart contracts enforce loans through overcollateralization, looking at liquidations, and major protocols like Aave and Compound."
            },
            {
              id: "m4.4-page-1",
              title: "How Decentralized Lending Works",
              content: "Traditional lending requires a bank to verify your identity, check your credit history, and decide whether you're trustworthy enough to receive funds. DeFi lending skips all of that. There is no credit check, no loan officer, and no application form. Instead, the protocol enforces the rules automatically through smart contracts, and it does this by requiring borrowers to put up more value than they want to borrow.\n\nThat requirement is called **overcollateralization**, and it is the load-bearing idea behind every major DeFi lending protocol.\n\nHere is what it means in practice: if you want to borrow $100 worth of USDC, you might need to deposit $150 worth of ETH as collateral first. The protocol holds your ETH, hands you USDC, and keeps a constant watch on the ratio between the two. Why $150 and not $100? Because crypto assets are volatile. If ETH drops 20% overnight, the protocol still needs enough collateral to cover the loan and wind things down safely. The excess buffer is the protocol's insurance policy, not yours.\n\nThis makes DeFi lending the opposite of how most people think of borrowing. You already need assets to get assets. That might seem circular, but it is useful: you can access liquidity without selling your ETH, keep your exposure to an asset you believe in, and deploy the borrowed funds elsewhere, all without a bank knowing you exist.\n\n**Supply APY** is the annual percentage yield paid to depositors who provide funds to the lending pool. When you deposit USDC into Aave, you become the lender. Borrowers pay interest, and that interest flows back to you proportionally based on how much you deposited. **Borrow APY** is the rate borrowers pay to use those funds.\n\nNeither rate is fixed by a board or a committee. They move automatically, driven by a single variable called the **utilization ratio**: the percentage of a pool's total deposits that are currently out on loan.\n\nWhen utilization is low, meaning most of the pool is sitting idle, the protocol drops interest rates to attract more borrowers. When utilization is high, meaning almost everything has been lent out, the protocol raises rates sharply to incentivize depositors to add more liquidity and encourage existing borrowers to repay. The model is self-regulating. No human sets the rate; the ratio sets the rate. That is the interest rate model, and every major DeFi lending protocol runs some version of it."
            },
            {
              id: "m4.4-page-2",
              title: "Liquidation and Real-World Asset Collateral",
              content: "When you take out a DeFi loan, the protocol assigns your position a **health factor**: a number that summarizes the safety of your collateral relative to your debt. A health factor above 1.0 means you are safe. A health factor below 1.0 means your collateral is no longer sufficient to cover what you owe.\n\nThe protocol does not send you a warning letter. It opens your position to anyone willing to act as a **liquidator**.\n\nLiquidation is the process by which an outside participant repays part of your debt in exchange for buying your collateral at a discount. If ETH drops sharply and your health factor falls below 1.0, a liquidator can step in, pay off a portion of your loan, and receive a percentage bonus worth of your collateral as compensation. This happens on-chain, automatically, and can complete in a single transaction. The borrower loses a portion of their collateral. The liquidator earns a small profit. The protocol keeps its books clean.\n\nThe **liquidation threshold** is the specific collateral-to-debt ratio at which this process triggers. Different assets have different thresholds, because more volatile assets carry higher risk and therefore require more conservative buffers. On Aave, ETH has a liquidation threshold around 82.5%, while less liquid or more volatile tokens sit considerably lower.\n\n**Real-world assets as collateral** represent a significant shift in how DeFi lending protocols are sourcing collateral in 2026. Tokenized US Treasury bills, real estate debt instruments, and private credit products are now accepted as collateral on platforms like Aave and MakerDAO. This matters because these assets have historically low volatility compared to crypto, which means they can support more favorable loan-to-value ratios. A borrower posting tokenized T-bills faces less liquidation risk than one posting ETH.\n\nWhat changes with RWA collateral is the risk profile, not just the opportunity. Tokenized real-world assets rely on legal frameworks, custodians, and off-chain enforcement mechanisms that pure crypto collateral does not need. If the custodian holding the underlying T-bills fails, or if the tokenization issuer has a legal problem, on-chain liquidation logic cannot resolve it. The smart contract can hold the token, but it cannot compel a court to honor the underlying claim."
            },
            {
              id: "m4.4-page-3",
              title: "Major Lending Protocols",
              content: "**Aave** and **Compound** are the two protocols that built DeFi lending into what it is today. They share the same core mechanic: deposit assets, earn yield; post collateral, borrow assets. But they have made different choices about architecture, asset support, and governance.\n\nAave has expanded more aggressively, supporting a wider range of assets, cross-chain deployments, and specialized pools including isolated markets for newer tokens with higher risk. It introduced credit delegation, allowing depositors to extend borrowing capacity to trusted counterparties, and it has been more active in integrating RWA collateral types. Compound took a leaner approach, sticking closer to its original permissioned asset model for longer, and has historically prioritized simplicity over breadth.\n\nBoth protocols have governance tokens: **AAVE** and **COMP** respectively. Holding these tokens grants voting rights over protocol parameters, including which assets can be listed, what the collateral factors are, how interest rate curves are configured, and how treasury funds are allocated. In practice, governance participation is concentrated among large holders, and low voter turnout on routine proposals is a persistent problem across both communities.\n\n**Flash loans** are one of the genuinely novel primitives that DeFi makes possible, and they have no equivalent in traditional finance. A flash loan lets you borrow any amount from a lending pool with zero collateral, on a single condition: the borrowed funds must be returned within the same transaction block, along with a small fee. If the loan is not repaid before the transaction closes, the entire transaction reverts, as if it never happened. The protocol is never at risk.\n\nThis is only possible on-chain because a blockchain transaction is atomic, meaning it either completes in full or is entirely undone. Flash loans are used legitimately for arbitrage between DEXes, for collateral swaps where a user replaces one collateral type with another in a single action, and for self-liquidations where a borrower cleans up their own position before an external liquidator can do it at a worse price. They are also used in exploits, because the ability to access enormous sums with zero upfront capital amplifies the damage possible from a smart contract vulnerability. Flash loan attacks on lending protocols and AMMs have resulted in hundreds of millions of dollars in losses since 2020."
            },
            {
              id: "m4.4-quiz",
              title: "Module 4.4 Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "Why does DeFi lending require overcollateralization?",
                  options: [
                    "To give the protocol a fee revenue source beyond transaction costs",
                    "Because borrowers cannot be verified through identity checks and credit scores",
                    "To prevent governance token holders from manipulating interest rates",
                    "Because decentralized protocols cannot hold fiat currency as security"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.4-page-1"
                },
                {
                  id: "q2",
                  question: "What does the utilization ratio measure?",
                  options: [
                    "The percentage of protocol revenue paid out to governance token holders",
                    "The ratio of a pool's current borrow APY to its supply APY",
                    "The share of a lending pool's total deposits that are currently out on loan",
                    "The total value locked across all Aave deployments on a given chain"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.4-page-1"
                },
                {
                  id: "q3",
                  question: "A borrower's health factor drops below 1.0. What happens next?",
                  options: [
                    "The protocol automatically raises their interest rate to compensate for the risk",
                    "Their position becomes eligible for liquidation by any outside participant",
                    "The borrower receives a notification and has 24 hours to add more collateral",
                    "Their loan is paused until the collateral value recovers"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.4-page-2"
                },
                {
                  id: "q4",
                  question: "What does a liquidator receive in a DeFi liquidation?",
                  options: [
                    "A share of the protocol's governance token reserve",
                    "The borrower's remaining collateral after their debt is cleared",
                    "A discounted purchase of a portion of the borrower's collateral",
                    "An interest rate bonus applied to their next supply position"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.4-page-2"
                },
                {
                  id: "q5",
                  question: "What new risk does real-world asset collateral introduce into DeFi lending?",
                  options: [
                    "Reliance on off-chain legal structures that smart contracts cannot enforce",
                    "Higher volatility in the collateral value compared to crypto assets",
                    "An inability to calculate a health factor in real time",
                    "Governance token holders gaining control over custody of the underlying assets"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m4.4-page-2"
                },
                {
                  id: "q6",
                  question: "What do the governance tokens AAVE and COMP give holders the ability to do?",
                  options: [
                    "Earn a fixed yield guaranteed by the protocol treasury",
                    "Liquidate undercollateralized positions before other participants",
                    "Borrow from the protocol without posting collateral",
                    "Vote on parameters like asset listings, collateral factors, and treasury allocation"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m4.4-page-3"
                },
                {
                  id: "q7",
                  question: "What is the condition that must be met for a flash loan to succeed?",
                  options: [
                    "The borrower must hold an equivalent amount of collateral in another protocol",
                    "The loan must be approved by a governance vote before the transaction executes",
                    "The borrowed funds must be repaid within the same transaction block",
                    "The borrower must supply funds to the protocol for at least 30 days beforehand"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.4-page-3"
                },
                {
                  id: "q8",
                  question: "How does Aave's interest rate model respond when utilization is very high?",
                  options: [
                    "It caps borrowing activity until more deposits arrive from new users",
                    "It raises both supply and borrow rates to attract more deposits and slow borrowing",
                    "It distributes excess yield to governance token holders as a stability reserve",
                    "It lowers borrow rates to reduce the cost burden on existing borrowers"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.4-page-1"
                }
              ]
            }
          ]
        },
        {
          id: "module-4.5",
          title: "Module 4.5 — Staking",
          pages: [
            {
              id: "m4.5-video",
              title: "Staking Explained",
              type: "video",
              youtubeId: "vZ2UZdB07fo",
              content: "Welcome to Module 4.5. In this module, we will explore consensus staking versus DeFi yield staking, liquid staking with Lido and Rocket Pool, restaking through EigenLayer, and the associated risks like slashing."
            },
            {
              id: "m4.5-page-1",
              title: "What Staking Is and Why It Exists",
              content: "Staking means locking up crypto to help run a blockchain network. The network pays you for doing it. But the word “staking” shows up in two different places and they are not the same thing. One keeps a blockchain alive. The other just generates yield inside a DeFi app. You need to know the difference.\n\nThe first kind of staking is **for consensus**. Proof-of-stake blockchains like Ethereum, Solana, and Cardano don’t use miners. They use validators. A validator locks up a minimum amount of the chain’s native token — **32 ETH** on Ethereum — and runs software that proposes new blocks and checks other validators’ work. If you do your job honestly, you earn staking rewards paid in newly issued tokens plus a share of network fees. If you try to cheat or your validator goes offline for too long, the network slashes part of your stake. **Slashing** means the protocol destroys a chunk of your locked tokens. It is not a fine you can pay later. It is an automatic, irreversible deletion. That is how proof-of-stake makes attacking the network expensive and self-destructive.\n\nThe second kind of staking has nothing to do with securing a chain. You see it all over DeFi: “stake your LP tokens,” “stake to earn CAKE,” “stake and earn.” This is **not consensus staking**. You are depositing tokens into a smart contract that pays you rewards, often in a governance token, as an incentive to keep your funds parked there. The protocol might use your deposit for liquidity or just as a gamified loyalty programme. There is no validator software to run, no slashing by a layer-1 protocol, and no network security role. The only risk you take is smart contract risk and token price movement. When someone says “the staking APY on this pool is 40%,” they are almost always talking about DeFi yield staking, not consensus staking.\n\nWhy does consensus staking exist in the first place? Before proof-of-stake, blockchains like Bitcoin used proof-of-work: spend real-world electricity, solve a puzzle, win the right to produce a block. That works, but it consumes enormous energy and concentrates power in whoever can buy the most mining hardware. Proof-of-stake replaces electricity bills with capital at risk. You don’t prove you spent resources. You prove you have skin in the game. That shift cuts energy use by over 99% and opens participation to anyone who holds the token, though the 32 ETH minimum on Ethereum is a real barrier. Pooled staking services and liquid staking protocols break that barrier down. We will get to those."
            },
            {
              id: "m4.5-page-2",
              title: "Liquid Staking and Restaking",
              content: "Staking ETH on Ethereum used to be a one-way door. You deposited 32 ETH into the staking contract, your funds were locked until an upgrade enabled withdrawals, and you couldn’t use that ETH anywhere else. If you wanted to earn yield in DeFi on top of staking rewards, you were out of luck. **Liquid staking** changed that.\n\nA liquid staking protocol takes your ETH, stakes it on your behalf, and gives you a receipt token in return. On **Lido**, you deposit ETH and receive **stETH**. On **Rocket Pool**, you receive **rETH**. These tokens represent your staked position plus the rewards accruing over time. stETH is not pegged 1:1 to ETH by some algorithm. It grows in value relative to ETH as staking rewards accumulate, or it trades at a slight discount when markets panic. The key feature is that stETH is a standard ERC-20 token. You can deposit it into lending protocols like Aave as collateral, provide it as liquidity on a DEX, or swap it back for ETH on the open market. Your stake is now liquid. You earn the base Ethereum staking yield, and you can layer DeFi yield on top.\n\nLiquid staking solved the liquidity problem. But the yield from the base Ethereum staking rate — roughly 3-4% APY in 2026 — is modest. That is where **restaking** enters.\n\n**EigenLayer** introduced restaking in 2023 and it went fully live with slashing conditions in 2024. The idea: your staked ETH is already securing Ethereum. EigenLayer lets you opt in to secure additional services — bridges, data availability layers, oracles — using the same staked capital. These services are called **Actively Validated Services (AVSs)**. By restaking, you commit to running additional software and following the rules of those AVSs, on top of Ethereum’s own consensus rules. If you violate an AVS’s conditions, your stake can be slashed by that AVS’s smart contract, not just by Ethereum’s protocol. In return, you earn additional fees from the AVSs you secure. Restaking is like renting out your capital multiple times to multiple tenants at once. The yield goes up. So does the list of things that can get you slashed.\n\nLet me be direct: restaking is still maturing. EigenLayer operators have slashing risk from AVS code that is much younger and less battle-tested than Ethereum’s core protocol. The promise is higher yield. The price is layered risk. Anyone telling you restaking is free money is either lying or doesn’t understand it.\n\n**Liquid restaking tokens (LRTs)** add another layer. They tokenize your restaked position so you can trade it or deploy it elsewhere. That means you might hold a token that represents restaked ETH securing three different AVSs, and a slashing event in any one of those AVSs feeds backward into the token’s value. Composability is powerful. It also propagates risk faster than any spreadsheet can model."
            },
            {
              id: "m4.5-page-3",
              title: "Staking Risks",
              content: "Every yield in crypto has a source, and every source has a counterparty, a codebase, or a set of rules that can fail. Staking is no exception.\n\n**Slashing** is the most distinct risk. If your validator double-signs a block or suffers extended downtime, the protocol destroys a portion of your stake. For a solo validator running their own hardware, a misconfiguration or a power outage during a critical window could trigger slashing. For liquid staking protocols, slashing events are socialized across all token holders. That means when a Lido validator gets slashed, the loss reduces the value of every stETH holder’s position proportionally. You may not even see an alert. The stETH/ETH ratio just drifts down a fraction of a percent. In 2025, a series of correlated validator outages on a minority client sparked a debate about whether staking pools should compensate holders out of their treasury. No settlement was reached. The risk sits with the token holder, not the protocol.\n\n**Lock-up periods and withdrawal queues** are a different kind of friction. On Ethereum, exiting a validator position involves a queue. During periods of high exit demand, that queue can stretch to days or weeks. If you need your ETH back immediately, you sell your liquid staking token on the secondary market. If panic has hit the market and stETH trades at a 2% discount, you eat that loss. The promise of liquidity doesn’t guarantee you get a fair price in a crisis.\n\n**Smart contract risk** lives in every liquid staking protocol. Lido, Rocket Pool, and EigenLayer are all collections of smart contracts. A bug in the withdrawal logic, the reward distribution mechanism, or the slashing handling code could drain funds or lock them permanently. These protocols are heavily audited and insured to varying degrees, but no audit guarantees zero bugs. In 2026, liquid staking protocols collectively hold over $30 billion in ETH. That is a big honeypot.\n\nThen there is the **yield mirage**. A dashboard that says “5.2% APY” is quoting the gross reward rate before any risk premium is priced in. The true net yield after accounting for slashing probability, smart contract risk, token discount risk, and gas costs to enter and exit is lower. By how much? Nobody knows exactly."
            },
            {
              id: "m4.5-quiz",
              title: "Module 4.5 Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "What is the minimum amount of ETH required to run a solo validator on Ethereum?",
                  options: [
                    "16 ETH",
                    "32 ETH",
                    "64 ETH",
                    "8 ETH"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.5-page-1"
                },
                {
                  id: "q2",
                  question: "A liquid staking token like stETH allows you to:",
                  options: [
                    "Avoid all smart contract risk because the token is backed 1:1 by ETH in a bank",
                    "Validate blocks without running any software",
                    "Use your staked position in DeFi protocols while still earning staking rewards",
                    "Stake ETH without any risk of slashing"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.5-page-2"
                },
                {
                  id: "q3",
                  question: "Restaking through EigenLayer means:",
                  options: [
                    "Converting your stETH back to ETH through a centralized exchange",
                    "Using your already-staked ETH to secure additional services and earn extra fees",
                    "Staking ETH on multiple different Layer 1 blockchains simultaneously",
                    "Lending your ETH to a DAO in exchange for governance tokens"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.5-page-2"
                },
                {
                  id: "q4",
                  question: "What does slashing refer to in proof-of-stake?",
                  options: [
                    "The protocol selling a portion of your stake to pay network fees",
                    "A temporary freeze on your staking rewards due to high network congestion",
                    "The reduction of staking APY when too many validators join the network",
                    "The automatic and irreversible destruction of part of your staked tokens as a penalty for misbehavior"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m4.5-page-1"
                },
                {
                  id: "q5",
                  question: "Why might stETH trade at a slight discount to ETH during a market panic?",
                  options: [
                    "Smart contracts automatically adjust the stETH supply downward in a panic",
                    "Lido mints extra stETH to stabilise the price",
                    "Holders want instant liquidity and are willing to sell below the fair value, plus the withdrawal queue on Ethereum delays native redemptions",
                    "The Ethereum protocol punishes liquid staking tokens during high volatility"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.5-page-2"
                },
                {
                  id: "q6",
                  question: "Which of the following is a risk specific to restaking that does not apply to basic liquid staking?",
                  options: [
                    "Your staked ETH is exposed to slashing conditions from multiple external services, not just Ethereum’s protocol",
                    "The staking APY can go down over time",
                    "You need at least 32 ETH to participate",
                    "The staking rewards are paid in a token that might lose value"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m4.5-page-2"
                },
                {
                  id: "q7",
                  question: "When a liquid staking protocol socializes a slashing loss, what happens?",
                  options: [
                    "The validator who caused the slashing event is the only one who loses funds",
                    "The protocol’s insurance fund fully reimburses every holder",
                    "All staking rewards are paused until the slashed amount is recovered",
                    "The loss is distributed proportionally across all token holders, slightly reducing the value of each token"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m4.5-page-3"
                },
                {
                  id: "q8",
                  question: "A friend tells you, “I’m getting 12% APY on a restaking strategy, it’s basically free money.” The most accurate response is:",
                  options: [
                    "That yield looks high because it doesn’t yet include a premium for the layered slashing and smart contract risks you are taking on.",
                    "“You are right, restaking is a zero-risk way to earn extra yield.”",
                    "“The 12% APY is guaranteed by EigenLayer’s insurance fund and can never drop.”",
                    "“Restaking yields are only available to institutional investors, so you are probably misreading the dashboard.”"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m4.5-page-3"
                }
              ]
            }
          ]
        },
        {
          id: "module-4.6",
          title: "Module 4.6 — DAOs: Theory and Practice",
          pages: [
            {
              id: "m4.6-video",
              title: "DAOs: Theory and Practice",
              type: "video",
              youtubeId: "KHm0uUPqmVE",
              content: "Welcome to Module 4.6. In this module, we will explore what a Decentralized Autonomous Organization (DAO) is, how voting executions work on-chain, our treasury structures, quadratic funding, and case studies of real DAOs."
            },
            {
              id: "m4.6-page-1",
              title: "What a DAO Actually Is",
              content: "A DAO is a **Decentralized Autonomous Organization**. That name is a promise and a problem. Let me break down what the words claim, what they actually deliver in 2026, and where the gap lives.\n\nA DAO is a group of people who coordinate through a shared set of smart contracts instead of through a legal entity with a CEO. The rules are written in code. Decisions get made by token holders voting on proposals. When a proposal passes, the smart contract executes the result automatically. Nobody can veto it, and nobody needs to manually send a bank transfer. The code does the work.\n\nThe **\"decentralized\"** part means no single person or company controls the organization. In theory, the token holders collectively steer it. In practice, token ownership is often concentrated. A small number of wallets hold enough voting power to pass or block proposals. When three addresses control 51% of a governance token supply, calling the organization decentralized is more of an aspiration than a description.\n\nThe **\"autonomous\"** part means the organization runs on code that can't be stopped. But autonomy is also partial. A DAO can vote to change its own rules, upgrade its smart contracts, or hire a development team. The code doesn't manage payroll or settle disputes. People still intervene. The autonomy is in the treasury and the proposal execution, not in every operational detail.\n\n### The Lifecycle of a DAO Proposal\n\nHere is how a typical DAO proposal works. Someone posts an idea in the governance forum. Discussion happens. If it gains traction, the proposer formalizes it into a proposal on a platform like Snapshot or directly on-chain. Token holders vote. If it meets quorum and passes, the proposal moves to execution. For on-chain proposals, a timelock contract enforces a delay (often 24 to 48 hours) before the code executes, giving people time to exit if they disagree with the outcome. After the timelock, the smart contract function is called and the change happens: funds move, a parameter updates, a new contract gets whitelisted.\n\n**Governance tokens** are what you use to vote. One token, one vote is common, but some DAOs use quadratic voting or delegation. You earn governance tokens by providing liquidity, participating in the community, or buying them on the open market. Holding the token doesn't give you equity in a company. It gives you voting rights in a protocol. The distinction matters because a governance token's value often depends on the protocol's fee generation, not on any legal claim to assets.\n\nWhy would anyone use a DAO? For a group of strangers on the internet who want to pool money and make decisions without incorporating in a specific jurisdiction, a DAO is the fastest way to start. For communities that distrust centralized gatekeepers, DAOs offer a transparent alternative. And for protocols that manage billions in user funds, DAOs let the users become the stewards."
            },
            {
              id: "m4.6-page-2",
              title: "How a DAO Vote Executes On-Chain",
              content: "In Week 3 you learned that a smart contract is a set of functions triggered by transactions. A DAO takes that logic and attaches it to a voting process. A passed proposal doesn't end with a handshake or a press release. It ends with a function call.\n\nWhen a DAO wants to spend treasury funds, the funds sit in a smart contract that only responds to certain commands. The most important command is an approval from the governance contract. The proposal says: \"Send 100,000 USDC to this address for developer grants.\" Token holders vote. If the vote passes and the timelock expires, the governance contract calls the transfer function on the treasury contract. The treasury contract checks that the caller is the governance contract, verifies the parameters match the passed proposal, and then executes the transfer. No human intermediary touches the funds. The code enforces the decision.\n\n**Timelock contracts** are the safety valve. They introduce a mandatory waiting period between a vote passing and the execution of its outcome. If a malicious proposal somehow passes, token holders have a window to exit the protocol before the funds move. In a lending protocol, you might withdraw your deposit. In a DEX, you might pull your liquidity. The timelock doesn't stop the bad proposal. It gives you time to react.\n\nThe bridge between smart contracts and DAOs is what makes on-chain governance different from a company poll. A company's employee survey can say \"we want better snacks,\" and management might ignore it. A DAO proposal that passes with sufficient quorum triggers code that no manager can override. That is both the superpower and the threat. If the code is bug-free and the governance process is legitimate, the treasury is safer from human corruption than any corporate bank account. If the code has a flaw or the voting is captured by a single whale, the treasury can be drained just as automatically.\n\nThis is not hypothetical. In 2022, the Beanstalk Farms DAO suffered a governance attack. An attacker borrowed governance tokens through a flash loan, voted through a malicious proposal, and drained $182 million from the treasury, all within a single transaction. The code did exactly what it was told. The lesson: an on-chain vote is only as robust as the governance token distribution and the quorum rules that constrain it."
            },
            {
              id: "m4.6-page-3",
              title: "Treasury, Public Goods, and Real DAOs",
              content: "A DAO's **treasury** is the pool of assets it controls. For a protocol like Uniswap, the treasury holds UNI tokens and a portion of trading fees. For a grant-giving DAO like Gitcoin, the treasury funds public goods in the Ethereum ecosystem. How that treasury is managed determines whether the DAO survives.\n\nMost DAOs hold the majority of their treasury in their own governance token. That's risky, because a sharp price drop shrinks the runway overnight. Mature DAOs diversify. MakerDAO holds a mix of stablecoins, ETH, and real-world assets. Uniswap DAO holds UNI and has debated fee switches that would route protocol revenue to token holders. Nouns DAO uses a daily auction of its NFTs to fund whimsical and creative projects, from sending a Nouns-themed coffee cup to space to funding on-chain art experiments. Each of these treasuries is managed entirely through proposals and votes.\n\n### Quadratic Funding\n\nGitcoin introduced **quadratic funding** as a way to allocate public goods money. Instead of one token one vote, quadratic funding weights votes by the number of unique contributors, not the size of the contribution. A project backed by 100 people each giving 1 gets more matching funds than a project backed by one person giving 100. The goal is to fund what the community actually values, not what a few rich donors prefer. Quadratic funding is not perfect — collusion and Sybil attacks are constant threats — but it is one of the more honest attempts to solve the problem of public goods in a permissionless system.\n\n### Real DAOs\n\n**MakerDAO** governs the Maker protocol and the DAI stablecoin. It has one of the most active governance processes in DeFi, with regular executive votes that adjust risk parameters. Its treasury is massive, diversified, and highly scrutinized. Voter participation varies but is generally concentrated among a few large delegates. MakerDAO has survived market crashes and regulatory pressure, which makes it one of the few DAOs that can claim genuine resilience.\n\n**Uniswap DAO** governs the largest DEX in crypto. Its treasury holds billions in UNI tokens. For years, the community debated whether to activate a fee switch that would direct a small portion of trading fees to token holders. In 2024, the DAO finally approved a proposal to turn on fees for select pools, a decision that will shape how DEX governance tokens are valued going forward. The debate exposed the tension between users who want low fees and token holders who want revenue.\n\n**Nouns DAO** is an experiment in daily governance. Every day, one Nouns NFT is auctioned, and the winner joins the DAO with voting rights. The treasury funds proposals that range from clever to chaotic. Nouns has produced some of the most creative on-chain projects and also some of the most wasteful spending. It's a living demonstration that a DAO can be fast, fun, and financially irresponsible all at once."
            },
            {
              id: "m4.6-quiz",
              title: "Module 4.6 Quiz",
              type: "quiz",
              questions: [
                {
                  id: "q1",
                  question: "What is quorum in DAO governance?",
                  options: [
                    "The maximum number of proposals a DAO can have open simultaneously",
                    "The share of the treasury that must be held in stablecoins before a vote can proceed",
                    "The minimum level of token holder participation required for a vote to be considered valid",
                    "The number of core team members who must approve a proposal before it goes to a community vote"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.6-page-1"
                },
                {
                  id: "q2",
                  question: "A DAO votes to pay a contractor 10,000 USDC. The proposal includes an executable payload. What happens when the vote passes and the timelock expires?",
                  options: [
                    "The governance contract automatically calls the treasury contract, which transfers the USDC without any human signing the transaction",
                    "The DAO's multisig signers receive a notification and must manually approve the transfer within 48 hours",
                    "The contractor submits an invoice to the grants committee, which processes payment in the next funding cycle",
                    "The proposal is recorded on-chain as a resolution, but payment requires a separate vote with a higher quorum threshold"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m4.6-page-2"
                },
                {
                  id: "q3",
                  question: "Why did several DAO treasuries lose most of their value during the 2022 bear market?",
                  options: [
                    "Smart contract exploits drained treasury funds across multiple protocols simultaneously",
                    "Regulatory actions in the US forced DAOs to convert treasury assets to fiat at a loss",
                    "Governance token holders voted to distribute treasury funds as dividends before prices fell",
                    "Treasuries were predominantly held in the protocol's own governance token, which lost most of its value when the broader market declined"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m4.6-page-3"
                },
                {
                  id: "q4",
                  question: "What makes quadratic funding different from a simple donation-matching program?",
                  options: [
                    "Quadratic funding only matches donations made in ETH, not stablecoins",
                    "The matching formula amplifies projects with many small donors rather than a few large ones, reducing the influence of wealthy participants on funding outcomes",
                    "Quadratic funding requires a DAO governance vote for every individual grant, unlike direct matching which is automated",
                    "The matching pool in quadratic funding is drawn from protocol trading fees rather than direct donor contributions"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.6-page-3"
                },
                {
                  id: "q5",
                  question: "In the Uniswap governance dispute over deploying v3 to the BNB chain, what did the outcome reveal about voting power distribution?",
                  options: [
                    "Retail token holders coordinated successfully to override a decision by large investors",
                    "The proposal failed because Uniswap's quorum threshold was not met, despite strong community interest",
                    "A small number of venture capital firms held enough UNI to determine the outcome regardless of broader community sentiment",
                    "Uniswap's governance contract malfunctioned during the vote and the proposal had to be resubmitted"
                  ],
                  correctAnswer: 2,
                  hintPageId: "m4.6-page-3"
                },
                {
                  id: "q6",
                  question: "What is the primary purpose of a timelock contract in DAO governance?",
                  options: [
                    "To prevent token holders from selling governance tokens in the 72 hours before a vote closes",
                    "To ensure that large treasury transfers are reviewed by a legal entity before execution",
                    "To slow down voter participation so that only committed community members can influence outcomes",
                    "To create a delay between a passed vote and its execution, giving the community a window to detect errors or malicious proposals"
                  ],
                  correctAnswer: 3,
                  hintPageId: "m4.6-page-2"
                },
                {
                  id: "q7",
                  question: "What is a governance token?",
                  options: [
                    "A transferable token whose holders have voting rights in a protocol's decision-making process, where more tokens typically means more votes",
                    "An NFT issued to DAO members that proves their identity for off-chain voting purposes",
                    "A non-transferable credential assigned by the DAO's founding team to trusted contributors",
                    "A stablecoin used specifically to pay for gas fees during on-chain governance transactions"
                  ],
                  correctAnswer: 0,
                  hintPageId: "m4.6-page-1"
                },
                {
                  id: "q8",
                  question: "Nouns DAO added a \"rage quit\" mechanism after a 2023 internal dispute. What does this type of mechanism allow?",
                  options: [
                    "Token holders to veto any proposal within 24 hours by burning their tokens",
                    "Dissenting members to exit the DAO and receive their proportional share of the treasury rather than remaining in a community they disagree with",
                    "The founding team to dissolve the DAO and distribute remaining treasury funds if governance participation falls below a minimum threshold",
                    "Any member to nullify a passed proposal if they can demonstrate the vote was influenced by a coordinated token purchase"
                  ],
                  correctAnswer: 1,
                  hintPageId: "m4.6-page-3"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
