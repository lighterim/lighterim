---
sidebar_position: 1
---

# Getting Started: Master Sovereign P2P Trading with Lighter.IM

Welcome to **Lighter.IM**, a decentralized, non-custodial on/off-ramp protocol engineered for secure and private fiat-crypto transactions. By integrating **Zero-Knowledge Proofs (ZKP)** and the **Nostr Protocol**, we provide a trustless environment where you retain full sovereignty over your assets without the risks of centralized exchanges.

---

## 1. Core Architecture: The 4-Layer Account System
Lighter.IM utilizes a unique **4-layer account architecture** to ensure your primary funds are never directly exposed to counterparties or escrow contracts. This strategic separation of identity, assets, and communication is our "layered defense":

*   **EOA (Master Wallet)**: Your primary wallet (e.g., MetaMask) that holds your identity NFT.
*   **Lighter Ticket NFT**: Your **Sovereign Identity** within the protocol. Your TokenID defines your role (e.g., IDs 10000+ for standard traders).
*   **TBA (Token Bound Account)**: A smart contract wallet based on **EIP-6551** controlled by your NFT. It acts as a **"Security Sandbox"** for all trading assets.
*   **Nostr**: A decentralized protocol for end-to-end encrypted, censorship-resistant communication.

---

## 2. Onboarding & Trading Guide

### Step 1: Secure Your Lighter Ticket NFT
To trade, you must first rent a Lighter Ticket NFT (typically **TokenID 10000+** for global traders).
*   **Sybil Resistance**: The refundable rental fee prevents malicious bot activity and spam.
*   **Identity Activation**: Upon minting, the protocol automatically deploys your **TBA** and links it to your **Nostr public key**.

### Step 2: Create a Trading Intent (Maker)
As a Maker, you use **EIP-712** to sign your trade intents (Sellers will use **Uniswap Permit2**). You can customize your intent to ensure compliance with your trading goals:
*   **Asset Specs**: Target Token, Quantity, and Price.
*   **Pricing Strategy**: Set a **Limit Price** or track market price with a specified **Slippage** (in BPS).
*   **Preferences**: Supported payment methods, fiat currency, and expiration time.
*   **Counterparty Requirements**: Filter peers by their on-chain reputation (e.g., total volume or completion rate).

### Step 3: Browse & Take an Intent (Taker)
Find an intent that matches your needs and initiate the trade. The protocol will automatically verify pre-conditions, including:
*   **Dynamic Volume**: If the Maker allows, you can select any amount within their specified range.
*   **Price Sync**: Displays either the fixed limit price or the real-time market price with applied slippage.
*   **Payment Match**: You must have a payment method that matches the Maker’s requirements.

---

## 3. Trade Execution & Flow
Once a trade is initiated, participants enter a private, encrypted **Nostr session**. There are three primary paths:

### A. The Standard Path (Manual vs. Automated)
1.  **Manual/Alternating Flow**: Both parties follow a three-step cycle: **Escrow**, **Paid**, and **Release**.
    *   **Escrow**: Seller’s tokens are locked in the Lighter.IM Protocol.
    *   **Paid**: The Buyer sends fiat and marks the trade as "Paid" on-chain.
    *   **Release**: The Seller verifies receipt and releases the escrowed funds to the Buyer.
2.  **Automated Flow (TLSN Proof)**: 
    *   The Buyer pays fiat and uses the **TLSN Browser Extension** to generate a **TLSN Proof** of the bank transfer.
    *   The Buyer submits the Proof to the session, and once verified, they can call **Release (with TLSN Proof)** to automatically claim the escrowed funds without waiting for the Seller.

### B. The Cancellation Path
*   **Timeout Fail-safe**: If a Buyer fails to pay within the window, the Seller can **Request Cancel**. If the Buyer remains unresponsive, the Seller can unilaterally reclaim their assets after the **Time Escape Window** expires.
*   **Mutual Consent**: If the Buyer cancels the trade at any time, the Seller can immediately reclaim the escrowed assets.

### C. The Dispute Path
*   In case of conflict, either party can trigger a **Dispute**.
*   **Mediators**: Arbitrators (**IDs 10-100**) join the session to review evidence. They are held to a **Zero-Trade Quota** to ensure unbiased mediation.
*   **Enforcement**: If a party ignores the mediator’s ruling, the other party can execute the final settlement on-chain once the **Arbitration Escape Window** closes.

---

## 4. Reputation & Privacy
*   **Private Communication**: All trade intents and chat logs are stored on the Nostr network, ensuring your financial privacy remains censorship-resistant.
*   **On-chain Credit Score**: Your successful trade history is permanently tied to your NFT, building a **portable reputation**. Data points include completion rate, average release time, and dispute history.

---

## 5. Exit: Burning & Refunds
When you are finished with the service:
1.  **Burn NFT**: Destroy the NFT to claim your original **rental deposit**.
2.  **Safety Lock**: You cannot burn your NFT if you have **Pending Trades**.
3.  **Warning**: Burning the NFT terminates your control over the TBA and loses association with your trading credit data. *Note: Network gas fees are non-refundable.*

---

**Ready to trade with total sovereignty?**
Join the Public Beta at [lighter.im](https://lighter.im) 🚀