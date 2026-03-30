---
sidebar_position: 1
---

# Lighter.IM Official FAQ 

## 1. General Questions

### What is Lighter.IM?
Lighter.IM is a decentralized, non-custodial on/off-ramp protocol designed for secure and private fiat-crypto transactions. By leveraging **ZKP (Zero-Knowledge Proofs)** and the **Nostr Protocol**, we provide a trustless environment for P2P trading without the risks of central exchanges.

### What makes Lighter.IM different from other P2P platforms?
Unlike traditional platforms, Lighter.IM uses a **4-layer account system** (EOA, NFT, TBA, and Nostr). This architecture decouples your master wallet from your trading assets and communication, ensuring that your primary funds are never directly exposed to the counterparty or the escrow contract. 

---

## 2. The Account System & NFTs

### Why do I need to rent a Lighter Ticket NFT to trade?
The NFT acts as your **Sovereign Identity** within the protocol. It serves three main purposes:
* **Sybil Resistance:** The refundable rental fee prevents spam and malicious bot activity.
* **Asset Management:** Your NFT "owns" a **Token Bound Account (TBA)** via EIP-6551, which securely holds your trading funds.
* **Reputation:** Your successful trade history is tied to the NFT, allowing you to build a portable, on-chain credit score.

### Is the NFT rental fee refundable?
**Yes.** When you are finished with the service, you can "burn" (destroy) the NFT to claim your original deposit. **Warning: 
If you destroy the account, the control of the TBA account and the trading credit data will be suspended and lose association.**
*Note: Network gas fees paid to the blockchain for minting/burning are non-refundable.*

### What is the "Hierarchy" of TokenIDs?
Lighter.IM roles are hardcoded by their minting sequence:
* **IDs 1–9 (Genesis Council):** Reserved for Core DAO, Foundation, and Team.
* **IDs 10–100 (Arbitrators):** 91 specialized slots for network mediators.
* **IDs 10000+ (Traders):** Standard tickets for the global trading community.

---

## 3. Security & Trading

### What is a Token Bound Account (TBA)?
A TBA is a smart contract wallet (based on **EIP-6551**) controlled by your NFT. Instead of trading from your main wallet (MetaMask, etc.), all assets in escrow are held by the TBA. This provides a "sandbox" that protects your main EOA from potential contract vulnerabilities.

### How does the protocol ensure privacy?
Lighter.IM integrates the **Nostr Protocol** for decentralized, end-to-end encrypted messaging. Your trade intents and chat logs are stored on Nostr network, ensuring your financial privacy remains censorship-resistant.

---

## 4. Disputes & The "Time Escape Window"

### How do "Time Escape Windows" protect my funds?
The "Time Escape Window" is a fail-safe mechanism that prevents funds from being locked if a counterparty becomes unresponsive ("ghosts" you):
* **Payment Phase:** If a buyer fails to pay, the seller can unilaterally cancel and reclaim escrowed funds after the window expires.
* **Arbitration Phase:** If a party ignores a mediator’s ruling, the other party can execute the settlement on-chain once the window closes.

### Are the Arbitrators trustworthy?
Mediators are incentivized to be fair through **Economic Alignment**:
* **Staking:** Arbitrators must hold a specific NFT (IDs 10-100) and are often required to stake collateral.
* **Conflict of Interest Protection:** Arbitrator accounts have a **Permanent Zero-Trade Quota**. They cannot trade on the platform, ensuring their only role is unbiased mediation.
* **Reputation:** All rulings are transparently logged on-chain.

---

## 5. Troubleshooting & Limitations

### Why can't I burn my NFT for a refund?
You cannot destroy your NFT if you have **Pending Trades**. This is a safety lock to protect counterparties. Once all trades are settled or the "Time Escape Window" has cleared your quota, the refund function will be unlocked.

### My counterparty is not responding. What should I do?
1. Wait for the initial **Payment Window** to expire.
2. Trigger the on-chain request to cancel.
3. If they remain unresponsive, wait for the **Escape Window** to end, then unilaterally reclaim your assets.

---

> **Ready to trade?** > Join the Public Beta at [beta.lighter.im](https://beta.lighter.im) 🚀