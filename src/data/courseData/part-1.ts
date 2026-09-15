export const part1 = {
  "id": "part-1",
  "title": "Part 1: The Foundation",
  "description": "Before anyone can understand blockchain, they need to understand the problem it was built to solve.",
  "modules": [
    {
      "id": "module-1.1",
      "title": "Module 1.1 — Decentralization and the Internet of Value",
      "pages": [
        {
          "id": "intro-video-1.1",
          "title": "Module Introduction",
          "type": "video",
          "youtubeId": "8XvTfgyXnAs"
        },
        {
          "id": "m1.1-page-1",
          "title": "The Problem With the Internet Today",
          "content": `You use the internet every day, streaming music, posting content, sending money to friends, and building audiences. But here's something most people never stop to think about: **almost everything you do online goes through someone else's system.**

When you stream a song on Spotify, Spotify decides how much the artist gets paid. When you post on Instagram, Instagram decides who sees it. When you send money on PayPal or Cash App, those companies decide whether the transaction goes through, how long it takes, and whether your account stays open.

**You are the user, but you are not in control.**

This is how the internet was built. Every app, every platform, every payment system you use is run by a company sitting in the middle of your transaction. They built the infrastructure, you agreed to their terms, and now they hold the keys.

The consequences show up in ways that feel unfair but are completely legal.

A content creator spends three years building an audience on YouTube, and one day, the algorithm changes. Their videos stop getting recommended, their income drops by 80% overnight, and they did nothing wrong. A small business owner tries to receive payment from a client abroad, and the wire transfer takes five days and costs fifteen dollars in fees, passing through several middlemen before it arrives.

These happen constantly, and they all share the same root cause: **somewhere between you and what you're trying to do, there is a company with the power to say no.**`
        },
        {
          "id": "m1.1-page-2",
          "title": "How Value Moves Online Right Now",
          "content": `Think about what happens when you send twenty dollars to a friend using your bank's app.

**No physical cash moves.** Your bank lowers the number in your account and sends a message to your friend's bank, which raises the number in your friend's account. Simple enough, but that message rarely travels in a straight line. It usually passes through one or more clearinghouses, sometimes multiple intermediary banks, each one adding a small cut or a delay.

Depending on where you are, a domestic bank transfer can take anywhere from a few seconds to several business days, and your transaction might only be processed on a business day, so weekends and public holidays push the wait even further. Cross-border transfers are worse, often stretching to **five business days or more**, and that's assuming no intermediary bank holds it up along the way. You're moving a number in a database, and somehow it takes longer than shipping a physical package.

Apps like Venmo or Cash App feel instant because they **cheat a little.** If you and your friend both use the same app, the company just updates two numbers on their internal spreadsheet, and no bank moves anything in that moment. That's also why sending money between users on the same app is usually free, as long as you're paying from your balance or a debit card.

Now think about value that isn't money.

You spend two years posting on TikTok and build 400,000 followers. That audience has real value, but **you don't own it.** If the app gets banned in your country or your account gets suspended, that entire audience disappears. You can't export it or take it somewhere else, because it lives on their servers, under their rules.

This is how value moves on the internet right now, through private pipes owned by companies you don't control, governed by terms of service you probably never read.`
        },
        {
          "id": "m1.1-page-3",
          "title": "Centralization vs. Decentralization",
          "content": `So what does it actually mean when something is **"centralized"**?

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
          "id": "m1.1-page-4",
          "title": "The Vision — An Internet of Value",
          "content": `Information on the internet moves freely. 
You can send an email to someone in Japan in under a second, share a video and have it watched by a million people overnight, and the cost of moving information across the world has dropped to almost zero.

**Moving value is a different story.** Sending money internationally still takes days, owning a digital asset still means trusting a company to hold it for you, and building an audience still means building it on someone else's platform.

The vision behind blockchain starts with a simple question: **What if value could move the way information moves?**

What if you could send money directly to someone in another country the same way you send them a text? What if you could own a digital asset the way you own a file on your hard drive, rather than as a number in some company's database? What if you could build an audience or a business on infrastructure that nobody controls and nobody can take from you?

That's the idea behind what we call the **"Internet of Value."** It's a fundamentally different model for how ownership and transactions work online, and blockchain is the technology being built to get there.

Keep this in mind as we go deeper into the technical stuff: every concept we cover in this course exists because someone was trying to solve the problems you just read about.`
        },
        {
          "id": "m1.1-page-5",
          "title": "Module Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "A content creator builds a massive audience on a platform, then loses access to their account overnight with no explanation. What does this situation best illustrate?",
              "options": [
                "The internet is too slow for modern use",
                "Centralized platforms have the power to take away access",
                "Content creators should use multiple platforms at once",
                "Social media companies are poorly managed"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.1-page-1"
            },
            {
              "id": "q2",
              "question": "When you send money through a banking app, what is actually happening behind the scenes?",
              "options": [
                "Physical cash is transported between bank vaults",
                "A government agency approves and moves the funds",
                "Your bank lowers a number in your account and messages the recipient's bank to raise a number in theirs",
                "The two banks exchange gold reserves to balance the transaction"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.1-page-2"
            },
            {
              "id": "q3",
              "question": "Why do apps like Venmo or Cash App feel instant when sending money to another user on the same platform?",
              "options": [
                "They use a faster version of the traditional banking system",
                "They have special government licenses that speed up transfers",
                "They bypass banks entirely for all transactions",
                "They just update two numbers on their own internal spreadsheet without involving external banks"
              ],
              "correctAnswer": 3,
              "hintPageId": "m1.1-page-2"
            },
            {
              "id": "q4",
              "question": "Which of these best describes a decentralized system?",
              "options": [
                "A system run by a very large company with many employees",
                "A system where control is spread across many participants rather than held by one entity",
                "A system that operates faster than traditional platforms",
                "A system owned jointly by two or more competing companies"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.1-page-3"
            },
            {
              "id": "q5",
              "question": "In the Google Doc versus printed flyer comparison, what point was being made about decentralization?",
              "options": [
                "Printed materials are more reliable than digital ones",
                "Google Docs is better for collaboration",
                "When a record exists across many copies, no single party can delete or alter it after the fact",
                "Decentralized systems work better offline"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.1-page-3"
            },
            {
              "id": "q6",
              "question": "A freelancer in Lagos waits two weeks for an international wire transfer to clear. What is the core reason this happens?",
              "options": [
                "African banks are less technologically advanced",
                "The freelancer's internet connection caused the delay",
                "International regulations require waiting periods for security",
                "The transaction has to pass through multiple intermediary banks, each adding fees and delays"
              ],
              "correctAnswer": 3,
              "hintPageId": "m1.1-page-2"
            },
            {
              "id": "q7",
              "question": "What is the main idea behind the \"Internet of Value\"?",
              "options": [
                "Making social media platforms pay creators more fairly",
                "Building faster internet infrastructure in developing countries",
                "Creating a digital world where value like money and assets can move as freely and directly as information does today",
                "Replacing physical banks with online-only banking apps"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.1-page-4"
            }
          ]
        }
      ]
    },
    {
      "id": "module-1.2",
      "title": "Module 1.2 — What Is Blockchain?",
      "pages": [
        {
          "id": "intro-video-1.2",
          "title": "Module Introduction",
          "type": "video",
          "youtubeId": "HYIxrVtJUF0"
        },
        {
          "id": "m1.2-page-1",
          "title": "What Is Blockchain?",
          "content": `A blockchain is a distributed ledger in which transactions are stored in blocks, and each block is linked to the one before it using a hash. That structure gives blockchain four core properties:

- **Decentralized** — there is no central point of failure or authority. No single company or government owns it.
- **Immutable** — everything recorded on the blockchain is permanent. Transactions cannot be reversed or quietly edited after the fact.
- **Transparent** — the entire record is open for anyone to see and verify.
- **Secure** — the whole system is protected by cryptography, which we'll get into properly in the next module.

What all that jargon means in plain terms is this: 

A Blockchain is a shared record book that nobody owns, but everybody can check. Transactions are grouped into blocks, each block is chained to the one before it, and thousands of computers around the world hold a copy of the whole thing. Because of that, nobody can sneak in and change the record without everyone else noticing.`
        },
        {
          "id": "m1.2-page-2",
          "title": "Why That Matters",
          "content": `Think about Walmart. Every day, thousands of transactions flow through their system: payments from customers, payments to suppliers, and internal transfers between departments. All of that data lives in a private database that Walmart controls. A database administrator with the right access could, in theory, delete certain transaction records and redirect that money elsewhere. The company would have to catch it through internal audits, which can be slow, incomplete, or manipulated by the same people running them.

On a blockchain, that kind of quiet manipulation is practically impossible. Every transaction is recorded permanently and visible to anyone, so there's no dark corner where money can disappear without a trace.

Now think about government spending. 

A country allocates billions of dollars to healthcare, education, and infrastructure every year. Citizens are told the money went where it was supposed to go, but verifying that is nearly impossible because the records are held by the same institutions spending the money. 

A blockchain-based system would let any citizen, journalist, or watchdog organisation track every single allocation in real time, from the government's wallet all the way to the contractor receiving payment—nothing hidden, nothing editable.

Voting works the same way. Elections get disputed because the counting process happens behind closed doors, and people have to trust that whoever is running it is being honest. With blockchain, every vote could be recorded as a transaction, permanently logged and publicly verifiable, so any voter could confirm their vote was counted correctly without revealing who they voted for. The result would be auditable by anyone, not just officials appointed by the same government running the election.

The pattern across all three of these is the same. Whenever you have a situation where one party controls an important record, and everyone else has to trust them, blockchain offers an alternative in which the record is owned by no one and verifiable by everyone. The blockchain is trust built into the system.`
        },
        {
          "id": "m1.2-page-3",
          "title": "Look into a blockchain",
          "type": "interactive",
          "componentId": "SolscanIframe"
        },
        {
          "id": "m1.2-page-4",
          "title": "Module Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "What does \"immutable\" mean in the context of blockchain?",
              "options": [
                "The blockchain can only be edited by verified administrators",
                "Only the most recent transactions can be modified",
                "The blockchain automatically corrects errors in transaction data",
                "Transactions recorded on the blockchain are permanent and cannot be changed or reversed"
              ],
              "correctAnswer": 3,
              "hintPageId": "m1.2-page-1"
            },
            {
              "id": "q2",
              "question": "What does it mean for a blockchain to be decentralized?",
              "options": [
                "There is no single central authority or point of failure controlling the system",
                "The blockchain is managed by a team of independent auditors",
                "Multiple companies share equal ownership of the blockchain",
                "The blockchain is stored on one very powerful server instead of many small ones"
              ],
              "correctAnswer": 0,
              "hintPageId": "m1.2-page-1"
            },
            {
              "id": "q3",
              "question": "In the Walmart example, what risk exists with a traditional private database?",
              "options": [
                "The database is too slow to handle large transaction volumes",
                "Private databases cannot store financial transactions securely",
                "Walmart's competitors can access and steal transaction data",
                "Someone with internal access could delete or alter records and pocket money without easy detection"
              ],
              "correctAnswer": 3,
              "hintPageId": "m1.2-page-2"
            },
            {
              "id": "q4",
              "question": "How would blockchain change government spending accountability?",
              "options": [
                "It would automatically redistribute funds if they were misallocated",
                "It would allow every allocation to be tracked in real time by anyone, making the quiet misuse of funds far harder",
                "It would replace government financial departments with automated systems",
                "It would give citizens the power to approve or reject government budgets"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.2-page-2"
            },
            {
              "id": "q5",
              "question": "Why would blockchain-based voting be more trustworthy than traditional voting systems?",
              "options": [
                "It would eliminate the need for candidates to campaign",
                "It would make voting faster and accessible from any smartphone",
                "It would prevent people from voting more than once by requiring ID verification",
                "Every vote would be permanently recorded and publicly verifiable, so anyone could confirm the count without trusting a central authority"
              ],
              "correctAnswer": 3,
              "hintPageId": "m1.2-page-2"
            },
            {
              "id": "q6",
              "question": "What is the simple, plain-English definition of a blockchain?",
              "options": [
                "An encrypted messaging system for sending money between users",
                "A shared record book that nobody owns but everybody can check, stored across thousands of computers",
                "A government-approved digital ledger for recording financial transactions",
                "A private database owned by a network of cooperating banks"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.2-page-1"
            },
            {
              "id": "q7",
              "question": "Which of these situations best describes a problem that blockchain is designed to solve?",
              "options": [
                "A payment app charging high fees for currency conversion",
                "A social media company struggling to moderate harmful content",
                "A streaming platform's servers going offline during peak hours",
                "A single party controlling an important record that everyone else has to trust without being able to verify"
              ],
              "correctAnswer": 3,
              "hintPageId": "m1.2-page-2"
            }
          ]
        }
      ]
    },
    {
      "id": "module-1.3",
      "title": "Module 1.3 — Blockchain Basics: Hashing",
      "pages": [
        {
          "id": "intro-video-1.3",
          "title": "Module Introduction",
          "type": "video",
          "youtubeId": "L6mI8VDXLoI"
        },
        {
          "id": "m1.3-page-1",
          "title": "What Is a Hash?",
          "content": `Before we get into how blockchain secures its data, we need to talk about one of the most important tools making it all work: the hash.

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
          "id": "m1.3-page-2",
          "title": "Why Hashes Are One-Way",
          "content": `Here's the part that makes hashing genuinely clever: you can run data through a hashing function and get an output, but you cannot work backwards from the output to figure out what the original input was. The process only goes one direction. This has a very practical implication: you can prove that you know something without ever revealing what that thing is.

Think about it like this. You and your friend are playing a prediction game. Before a match starts, you want to prove that you predicted the final score correctly, but you don't want to tell your friend your prediction upfront because that would let them just copy your answer.

So instead of telling them your prediction, you hash it and send them the hash. They write it down. The match ends, you reveal your original prediction, they run it through the same hashing function, and the output either matches what you sent them earlier or it doesn't. If it matches, you clearly had that prediction before the game started, because nobody could fake a hash that matches after the fact.

Your friend was able to verify your prediction without you ever revealing it before the game. That's the power of one-way hashing.

In blockchain, this matters enormously. Every block contains the hash of the block before it, which means the entire history of transactions can be verified by anyone without needing to expose or trust any raw data. If someone quietly edits an old transaction, its hash changes, which breaks the chain, and every computer on the network notices immediately.

Hashing is what makes the blockchain tamper-proof.`
        },
        {
          "id": "m1.3-page-3",
          "title": "Module Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "What is a hash?",
              "options": [
                "A password used to access a blockchain wallet",
                "A fixed-length output produced by running data through a hashing function, acting as a digital fingerprint for that data",
                "An encrypted message sent between two blockchain users",
                "A record of all transactions stored inside a single block"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.3-page-1"
            },
            {
              "id": "q2",
              "question": "If you hash the word \"blockchain\" today and hash it again next week on a different computer, what happens?",
              "options": [
                "The output will be slightly different each time due to processing variations",
                "The output will only match if both computers use the same internet connection",
                "The output will be completely different because hashing is random",
                "The output will be identical both times, because the same input always produces the same hash"
              ],
              "correctAnswer": 3,
              "hintPageId": "m1.3-page-1"
            },
            {
              "id": "q3",
              "question": "You change one letter in a sentence and hash it again. What happens to the output?",
              "options": [
                "The output changes slightly, reflecting the small edit",
                "The output stays the same because one character is too small to matter",
                "The output changes completely, bearing no resemblance to the original hash",
                "The hashing function returns an error when it detects a change"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.3-page-1"
            },
            {
              "id": "q4",
              "question": "What does it mean for a hashing function to be \"one-way\"?",
              "options": [
                "It can only be used once before it needs to be reset",
                "It works differently depending on which direction the data is travelling",
                "You can produce a hash from data, but you cannot work backwards from the hash to recover the original data",
                "It only processes data from left to right"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.3-page-2"
            },
            {
              "id": "q5",
              "question": "In the prediction game scenario, how does hashing allow you to prove your prediction without revealing it early?",
              "options": [
                "You encrypt your prediction and share the decryption key after the game",
                "You send the hash of your prediction before the game, then reveal the original prediction after, and anyone can verify they match",
                "You ask a referee to hold your prediction in a sealed envelope",
                "You post your prediction publicly, but in a language your friend doesn't understand"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.3-page-2"
            },
            {
              "id": "q6",
              "question": "Why does hashing make blockchain tamper-proof?",
              "options": [
                "Because only verified users are allowed to add new blocks",
                "Because the blockchain automatically restores deleted data from a backup",
                "Because each block contains the hash of the block before it, so editing any old transaction changes its hash and breaks the chain for every computer on the network",
                "Because hashing makes transaction data invisible to anyone without special access"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.3-page-2"
            },
            {
              "id": "q7",
              "question": "Which of these best describes the avalanche effect?",
              "options": [
                "When too many transactions happen at once, the blockchain slows down significantly",
                "When a hashing function produces longer outputs for larger inputs",
                "When a tiny change in the input causes a completely different hash output",
                "When one corrupted block causes all subsequent blocks to duplicate themselves"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.3-page-1"
            }
          ]
        }
      ]
    },
    {
      "id": "module-1.4",
      "title": "Module 1.4 — Blockchain Basics: Blocks",
      "pages": [
        {
          "id": "intro-video-1.4",
          "title": "Module Introduction",
          "type": "video",
          "youtubeId": "yVz8zWhl34w"
        },
        {
          "id": "m1.4-page-1",
          "title": "What Is a Block?",
          "content": `Think of a block as a page in a notebook. Every page holds a record of things that happened, and when the page is full, you start a new one. Blocks work the same way, except instead of handwritten notes, each block holds a structured set of data, and every single field in that structure has a specific job.

Here's what lives inside a block:

**Transactions:** This is the actual content of the block, the record of what happened. On Bitcoin, transactions are payments: who sent how much to whom. On other blockchains, transactions can be more complex, like executing a piece of code or recording ownership of an asset. A single block can hold hundreds or even thousands of transactions bundled together.

**Timestamp:** Every block carries a record of exactly when it was created. This makes the blockchain a chronological ledger, so you can always tell not just what happened, but when it happened relative to everything else.

**Previous Hash:** This is where things get interesting. Every block contains the hash of the block that came before it. That single field is what turns a collection of separate blocks into a chain. It's the block saying, "I am officially attached to what came before me." Remove or alter that field, and the connection breaks.

**Nonce:** The nonce is a number that miners adjust repeatedly while trying to solve the computational puzzle required to add a new block to the chain. We'll cover this properly in Module 1.6, but for now, just know it's there, and it plays a critical role in keeping the blockchain secure.

Each block is essentially a sealed package. Once it's added to the chain, everything inside it—the transactions, the timestamp, the hashes—is locked in permanently. Change anything inside, and the block's hash changes, which immediately signals to the entire network that something was tampered with.`
        },
        {
          "id": "m1.4-page-2",
          "title": "Why One Block Isn't Enough",
          "content": `A single block on its own is just a record. It's useful the same way a sticky note is useful: it holds information, but it has no real relationship to anything else. You could rewrite it, replace it, or throw it away, and nothing would stop you.

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
          "id": "m1.4-page-3",
          "title": "Module Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "What is the main purpose of the timestamp inside a block?",
              "options": [
                "It tells the network how long the block took to mine",
                "It records exactly when the block was created, making the blockchain a chronological ledger",
                "It sets an expiry date after which the block's data can be updated",
                "It synchronizes all computers on the network to the same clock"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.4-page-1"
            },
            {
              "id": "q2",
              "question": "What does the \"previous hash\" field inside a block actually do?",
              "options": [
                "It stores a backup copy of the previous block's transactions",
                "It records the identity of the miner who created the previous block",
                "It links the current block to the one before it, forming the chain",
                "It verifies that the current block's transactions are error-free"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.4-page-1"
            },
            {
              "id": "q3",
              "question": "What is a nonce?",
              "options": [
                "The unique identifier assigned to each transaction inside a block",
                "A number that miners adjust repeatedly while trying to solve the puzzle required to add a new block",
                "The digital signature of the person who initiated the most recent transaction",
                "A checksum used to detect errors in transaction data"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.4-page-1"
            },
            {
              "id": "q4",
              "question": "Why is a single block on its own easy to manipulate?",
              "options": [
                "Single blocks are not encrypted, so anyone can read and edit them",
                "They are stored on only one computer, making them easy to access",
                "They hold too many transactions to verify properly",
                "It has no mathematical relationship to any other record, so it can be altered without breaking anything else"
              ],
              "correctAnswer": 3,
              "hintPageId": "m1.4-page-2"
            },
            {
              "id": "q5",
              "question": "What is the Genesis Block?",
              "options": [
                "The block that contains the largest number of transactions ever recorded",
                "The most recently added block on the blockchain",
                "The very first block ever created, which every subsequent block traces back to",
                "A special block reserved for recording the identities of blockchain validators"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.4-page-2"
            },
            {
              "id": "q6",
              "question": "If someone alters a transaction inside block 200 of a blockchain, what happens?",
              "options": [
                "The network automatically corrects the error and restores the original transaction",
                "Only block 200 is affected, and the rest of the chain remains intact",
                "The hash of block 200 changes, breaking block 201 and every block after it, which every computer on the network notices immediately",
                "The altered block gets flagged and removed, but the chain continues normally"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.4-page-2"
            },
            {
              "id": "q7",
              "question": "What is the key difference between a single block and a chain of blocks?",
              "options": [
                "A chain of blocks holds more transactions per block than a single block does",
                "A single block is just a record, but a chain of blocks is a history that cannot be quietly rewritten because every block is mathematically dependent on the one before it",
                "A chain of blocks is faster to verify because each block is smaller",
                "A single block uses a different hashing algorithm than blocks inside a chain"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.4-page-2"
            }
          ]
        }
      ]
    },
    {
      "id": "module-1.5",
      "title": "Module 1.5 — Blockchain Basics: The Chain",
      "pages": [
        {
          "id": "intro-video-1.5",
          "title": "Module Introduction",
          "type": "video",
          "youtubeId": "bfe0rdpfps0"
        },
        {
          "id": "m1.5-page-1",
          "title": "Chaining the Blocks",
          "content": `You now know what lives inside a block. The transactions, the timestamp, the nonce, and crucially, the hash of the block that came before it. That last field is the one that does something remarkable: it turns a collection of separate blocks into a chain.

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
          "id": "m1.5-page-2",
          "title": "What Happens When You Tamper?",
          "content": `Now that you understand how the chain connects, let's see what happens when someone tries to mess with it.

Say a bad actor wants to go back and change a transaction in Block 2. Maybe they want to erase a payment they made or pretend a transfer never happened.

They go into Block 2 and edit the transaction. The moment they do that, the data inside Block 2 changes. And because the hash is a fingerprint of everything inside the block, the hash of Block 2 changes too. Where it used to say **B7D2**, it now produces a completely different hash, something like **X4K1**.

Here's where the chain fights back.

Block 3 was built using **B7D2** as its "previous hash." That's what it has stored inside it. But now Block 2's real hash is **X4K1**, so Block 3's previous hash field no longer matches reality. **Block 3 is now invalid.**

To fix that, the attacker would have to go into Block 3 and update its previous hash to **X4K1**. But the moment they touch Block 3, its own hash changes too, which breaks Block 4. Fixing Block 4 breaks Block 5. And so on, all the way up to the most recently added block.

So tampering with one block doesn't just corrupt that block. It forces the attacker to redo every single block that came after it, and on a blockchain that's been running for years, that could mean hundreds of thousands of blocks.

That's already an enormous amount of work. But on its own, it's still theoretically possible if someone has enough computing power. Which is exactly why the chain doesn't live on just one computer.`
        },
        {
          "id": "m1.5-page-3",
          "title": "Single Chain vs. Distributed Chain",
          "content": `Imagine the entire blockchain lived on one computer, owned by one company. Even with all the hashing and chaining, that company could theoretically sit down, redo all the blocks from scratch, and replace the chain with a fraudulent version. Nobody else has a copy to compare it against, so nobody would know.

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
          "id": "m1.5-page-4",
          "title": "Module Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "What specifically creates the \"chain\" in blockchain?",
              "options": [
                "Blocks are stored in the same database folder on every computer",
                "Each block contains the hash of the block before it, mathematically linking them together",
                "Transactions inside each block reference the transactions in the previous block",
                "Every block is digitally signed by the same network administrator"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.5-page-1"
            },
            {
              "id": "q2",
              "question": "In the three-block example, Block 3 stores Block 2's hash as its \"previous hash.\" What happens if Block 2's data is changed?",
              "options": [
                "Block 2 self-repairs using a backup stored in Block 3",
                "Only Block 2 becomes invalid while the rest of the chain stays intact",
                "Block 2's hash changes, making Block 3's previous hash field incorrect and invalidating Block 3 and everything after it",
                "The network pauses all new transactions until the error is resolved"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.5-page-2"
            },
            {
              "id": "q3",
              "question": "Why does tampering with one block force an attacker to redo every block that came after it?",
              "options": [
                "Because blockchain rules require all blocks to be re-verified every time one changes",
                "Because changing one block's data changes its hash, which breaks the next block's previous hash field, and fixing that breaks the one after, all the way up the chain",
                "Because nodes automatically delete any block that has been edited",
                "Because each block contains a copy of every previous block's full data"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.5-page-2"
            },
            {
              "id": "q4",
              "question": "Why would a blockchain stored on just one computer still be vulnerable, even with hashing and chaining in place?",
              "options": [
                "A single computer cannot process enough transactions to keep the chain running",
                "Hashing only works correctly when multiple computers verify it simultaneously",
                "The owner of that computer could redo all the blocks from scratch and replace the chain with a fraudulent version, with no other copy to compare against",
                "Single-computer blockchains cannot support the previous hash field in each block"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.5-page-3"
            },
            {
              "id": "q5",
              "question": "What is the longest chain rule?",
              "options": [
                "The rule that limits how many transactions can fit inside a single block",
                "When nodes disagree on which version of the chain is real, they accept the longest one because it represents the most cumulative honest work",
                "A rule requiring miners to always build on the most recently created block",
                "The rule that determines how long a block can remain unverified before being rejected"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.5-page-3"
            },
            {
              "id": "q6",
              "question": "Why is it practically impossible for an attacker to successfully rewrite blockchain history on a distributed network?",
              "options": [
                "Blockchain transactions are encrypted, so attackers cannot read what they are changing",
                "Nodes automatically ban any computer that attempts to submit an altered block",
                "The attacker would have to redo all tampered blocks and build a chain longer than what thousands of honest computers are actively adding to in real time, simultaneously",
                "Each block contains a digital lock that only the original creator can open"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.5-page-3"
            },
            {
              "id": "q7",
              "question": "What is a node?",
              "options": [
                "A single transaction stored inside a block",
                "The computer belonging to the person who created the blockchain",
                "A special type of block that contains no transactions, only security data",
                "One of the thousands of computers around the world that holds a complete copy of the blockchain"
              ],
              "correctAnswer": 3,
              "hintPageId": "m1.5-page-3"
            }
          ]
        }
      ]
    },
    {
      "id": "module-1.6",
      "title": "Module 1.6 — The Network: Nodes",
      "pages": [
        {
          "id": "intro-video-1.6",
          "title": "Module Introduction",
          "type": "video",
          "youtubeId": "l382DqXpJX8"
        },
        {
          "id": "m1.6-page-1",
          "title": "What Is a Node?",
          "content": `Every time a new transaction happens on a blockchain, someone has to record it, verify it, and make sure it's legitimate. There's no central office doing that job. Instead, it's handled by thousands of computers scattered across the world, each one running the blockchain's software and participating in keeping the network alive. Those computers are called **nodes**.

Think of nodes the way you'd think of witnesses. When something happens on the blockchain, the nodes are the ones watching, verifying, and keeping their own record of what occurred. The more witnesses there are, the harder it becomes for anyone to lie about what happened.

But not all nodes do the same job.

**Full Nodes:** A full node downloads and stores the entire history of the blockchain—every block, every transaction, all the way back to the Genesis Block. It independently verifies every new transaction and block against its own complete copy of the chain. Full nodes are the backbone of the network. They don't trust anyone else's version of events because they have everything they need to check for themselves.

Running a full node requires real storage space and computing power, since you're holding the entire chain locally. Anyone can run one, though, and that's the point. The more full nodes exist, the more decentralized and resilient the network becomes.

**Light Nodes:** A light node doesn't download the full blockchain. Instead, it downloads only the block headers, which are small summaries of each block containing just enough information to verify that a transaction is legitimate without storing everything. Most crypto wallets on your phone are light nodes. They're faster, use far less storage, and are good enough for everyday use, but they rely on full nodes to provide the complete picture when needed.

Together, full nodes and light nodes form a network where no single computer is in charge, but the whole system still functions reliably. One node going offline doesn't matter. A hundred going offline doesn't matter. The network keeps running because thousands of others are still holding their copy and doing their job.`
        },
        {
          "id": "m1.6-page-2",
          "title": "How the Network Reaches an Agreement",
          "content": `Here's a question worth sitting with for a moment. If thousands of computers are all independently holding copies of the blockchain, and new transactions are happening constantly, how does the network make sure every copy stays in sync? How does it decide which transactions are legitimate and which version of the chain is the real one?

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
          "id": "m1.6-page-3",
          "title": "Module Quiz",
          "type": "quiz",
          "questions": [
            {
              "id": "q1",
              "question": "What is a node on a blockchain network?",
              "options": [
                "A single transaction waiting to be added to a block",
                "A computer that holds a copy of the blockchain and participates in verifying transactions",
                "A company that regulates which transactions are allowed on the network",
                "A special type of block that stores network settings instead of transactions"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.6-page-1"
            },
            {
              "id": "q2",
              "question": "What is the main difference between a full node and a light node?",
              "options": [
                "A full node stores and independently verifies the entire blockchain history, while a light node only downloads block headers and relies on full nodes for complete verification",
                "Full nodes are faster than light nodes because they use more powerful hardware",
                "Full nodes are run by mining companies, while light nodes are run by regular users",
                "Full nodes only process payments, while light nodes handle smart contracts"
              ],
              "correctAnswer": 0,
              "hintPageId": "m1.6-page-1"
            },
            {
              "id": "q3",
              "question": "Why does the blockchain keep functioning even when some nodes go offline?",
              "options": [
                "A backup server automatically replaces any node that disconnects",
                "The remaining nodes redistribute the missing node's workload evenly",
                "Offline nodes automatically transfer their copy of the blockchain to a neighbouring node before disconnecting",
                "Because thousands of other nodes still hold their own complete copy of the chain and continue doing their job independently"
              ],
              "correctAnswer": 3,
              "hintPageId": "m1.6-page-1"
            },
            {
              "id": "q4",
              "question": "What does \"consensus\" mean in the context of a blockchain network?",
              "options": [
                "A monthly review process where nodes compare their copies of the blockchain and fix discrepancies",
                "A set of rules built into the network's software that all participants follow to automatically agree on what transactions are legitimate and what the true state of the chain is",
                "An agreement between major cryptocurrency exchanges on current coin prices",
                "A vote held by blockchain developers to approve changes to the network"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.6-page-2"
            },
            {
              "id": "q5",
              "question": "In the classroom analogy, what do the students writing the same answer represent?",
              "options": [
                "Miners competing to solve the next block's puzzle",
                "Developers voting on a new update to the blockchain's software",
                "The majority of honest nodes independently verifying a new block and arriving at the same conclusion",
                "Users confirming their own transactions before they are submitted to the network"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.6-page-2"
            },
            {
              "id": "q6",
              "question": "Why does a fraudulent block get rejected by the network?",
              "options": [
                "Because it doesn't match what the majority of honest nodes have on their own copy of the chain, so they reject it",
                "The network has a central moderator who reviews every new block before it's added",
                "Nodes automatically delete any block submitted by an unverified computer",
                "Fraudulent blocks are encrypted differently, making them easy to identify"
              ],
              "correctAnswer": 0,
              "hintPageId": "m1.6-page-2"
            },
            {
              "id": "q7",
              "question": "What is the most important idea to take away from Week 1?",
              "options": [
                "Blockchain is the fastest way to move money internationally",
                "The blockchain needs a trusted authority to function correctly",
                "Nodes are expensive to run, which is why only large companies operate them",
                "Blockchain replaces middlemen with software rules, so the network doesn't need anyone to trust anyone else because thousands of independent computers running the same rules all arrive at the same answer"
              ],
              "correctAnswer": 3,
              "hintPageId": "m1.6-page-2"
            },
            {
              "id": "q8",
              "question": "A blockchain has been running for five years and contains over 500,000 blocks. Why would it be practically impossible for an attacker to rewrite the transaction history from two years ago?",
              "options": [
                "Two-year-old blocks are stored on a separate archive chain that has no connection to the live network",
                "The network locks all blocks after 30 days, preventing any further changes",
                "They would have to redo every block from that point forward, faster than thousands of honest nodes are actively adding new blocks in real time, which is computationally unrealistic",
                "Blockchain transactions older than one year are automatically encrypted beyond recovery"
              ],
              "correctAnswer": 2,
              "hintPageId": "m1.6-page-2"
            },
            {
              "id": "q9",
              "question": "Someone tells you they own a crypto wallet on their phone. Based on what you now know, what type of node is their wallet most likely running?",
              "options": [
                "A mining node, because wallets need to solve puzzles to process transactions",
                "A light node, because it downloads only block headers rather than the full chain, making it practical for mobile use",
                "A full node, because phones are powerful enough to store the entire blockchain",
                "A consensus node, because wallets vote on which transactions get approved"
              ],
              "correctAnswer": 1,
              "hintPageId": "m1.6-page-1"
            },
            {
              "id": "q10",
              "question": "Which of these scenarios best describes how blockchain's consensus mechanism protects the network?",
              "options": [
                "Blockchain developers manually review disputed transactions and decide the outcome",
                "Transactions are held in a waiting pool for 24 hours so humans can flag anything suspicious",
                "A single powerful computer audits every transaction before it gets recorded",
                "One node submits a fraudulent block claiming a transaction never happened, but since it doesn't match what the majority of honest nodes have recorded, the network rejects it automatically"
              ],
              "correctAnswer": 3,
              "hintPageId": "m1.6-page-2"
            }
          ]
        },
        {
          "id": "m1.6-page-4",
          "title": "Week 1 Wrap-Up",
          "content": `You started this week with a problem. The internet, for all the ways it changed communication and information, never really solved the question of ownership and trust. Every time you move money, build an audience, or store something valuable online, you're doing it inside someone else's system, on their terms, with their finger on the off switch.

Blockchain exists as a direct response to that problem. Instead of routing trust through a company or institution, it builds trust into the system itself, through cryptographic hashing, chained blocks, and a distributed network of thousands of computers that nobody owns and nobody controls. The record is public, permanent, and tamper-proof because the math makes rewriting it practically impossible.

The mechanism behind that is what you spent most of this week understanding. Data gets fingerprinted with hashes. Those hashes get locked into blocks. Those blocks get chained together so that touching one breaks everything after it. That chain gets copied across thousands of nodes simultaneously, so there's no single version to corrupt and no single point of failure. And when those nodes disagree, a consensus rule settles it automatically, with no judge, no referee, and no company making the call.

That's the foundation. Everything that comes in the weeks ahead—smart contracts, wallets, DeFi, NFTs, DAOs—all of it is built on top of what you just learned. If something in a later week feels confusing, come back here. The answer is usually somewhere in Week 1.`
        }
      ]
    }
  ]
};
