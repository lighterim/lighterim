---
sidebar_position: 1
---

## Lighter.IM User Guide: The Safest, Most Private On/Off-Ramp in Web3

## Welcome to Lighter.IM Protocol

Lighter.IM is more than just an on/off-ramp platform; it is a decentralized protocol built on **Zero-Knowledge Proof (ZKP)** technology. Our mission is to provide you with a secure, efficient, and privacy-first channel for moving fiat currency into and out of the crypto world, giving you complete control over your sensitive information.

This guide explains how Lighter.IM utilizes cutting-edge Web3 technologies (such as **EIP-6551 TBA** and **Nostr**) to safeguard your assets and privacy, and how you can easily get started.

---

## Part 1: Lighter.IM's Three Core Security Guarantees

Traditional exchanges and centralized platforms store all your assets and identity information on their servers. If they are hacked, your data and funds are at risk. Lighter.IM adopts a fundamentally different approach: **we are non-custodial and never touch your sensitive private data.**

### 1\. Asset Isolation: The Token Bound Account (TBA) Smart Wallet 

With Lighter.IM, your assets and your trading identity are managed separately, providing a crucial double layer of protection.

| Concept | Function / Role | Why is this Safer? |
| :--- | :--- | :--- |
| **Wallet Address (EOA)** | Your primary wallet (e.g., MetaMask address) used to **own** the Lighter Ticket NFT.  | **Control:** Your EOA remains the master controller of your identity components. |
| **Lighter Ticket (NFT)** | Your exclusive **Lighter.IM Identity Marker**. It records your transaction behavior and fulfillment credit history.  | **Credit Attribution:** It is an independent identity for accumulating credit and establishing your reliability in the Lighter.IM community.  |
| **TBA Account** | A **mini smart contract wallet** based on EIP-6551, **uniquely bound** to your Lighter Ticket. It **owns** the assets involved in the trade.  | **Asset Segregation:** Assets are held by this smart contract, providing more flexible and secure control features than a standard EOA, and minimizing the risk to your primary wallet's funds.  |

**How are Your Assets Managed?**

You will primarily use the **dedicated Lighter.IM application interface** to view and control the assets held within your TBA (e.g., check balances or initiate withdrawals). Since the TBA adheres to the ERC-6551 standard, you can also manage assets using any compatible third-party TBA management tool. 

### 2\. Transaction Privacy: Zero-Knowledge Proofs (ZKP)

At the heart of the Lighter.IM Protocol is **ZKP technology**. Its purpose is to allow you to mathematically prove to the protocol that "you have indeed completed the fiat payment," without revealing your bank details, the exact transaction amount, or any sensitive information to anyone (including the Lighter.IM protocol itself). 

*   **Local Proof Generation:** After you complete the fiat payment off-chain, the Lighter.IM browser extension generates a ZKP proof **locally on your device**. 
*   **Privacy Protection:** Your sensitive data (such as bank transaction evidence) **never leaves your device**. The proof generation process uses only **desensitized data** and a **zkTLS session** as a witness, ensuring your privacy is absolutely protected. 

### 3\. Decentralized Communication: Nostr Protocol 

Your Lighter Ticket NFT is bound to an exclusive **Nostr Public Key**, which is used for publishing trading intents and secure user-to-user chat.

*   **Key Control:** You can choose to **import** a fresh Nostr key, or the Lighter.IM application can **generate a new public/private key pair locally** for you. The app provides backup and download tools, ensuring **you are the sole custodian of your private key.** (User Confirmation)
*   **Secure Communication:** All intents, transaction details, and chat messages utilize the public-key cryptography encryption capabilities of the Nostr Protocol, preventing unauthorized surveillance or tampering by centralized entities. 

---

## Part 2: How to Start Your First Trade

### Step 1: Acquire Your Lighter Ticket Identity (TBA Setup)

The Lighter Ticket is an **essential prerequisite** for engaging in Lighter.IM trades. This mechanism is crucial for maintaining a high-quality trading environment by preventing large-scale abuse and spam. (User Confirmation)

1.  **Rent the Lighter Ticket:** You must pay a refundable **rental fee** to acquire your exclusive Lighter Ticket NFT. (User Confirmation)
2.  **Identity Binding:** Once minted, the NFT is automatically bound to your EOA address, and a unique TBA account and a Nostr Public Key are generated and associated with it. 
3.  **Rental Refund Policy:** If you decide to stop using Lighter.IM, you can destroy the NFT, and the rental fee will be **fully refunded**. (User Confirmation)
    *   **Important Note:** Once the NFT is destroyed, the associated **TBA account will be permanently retired** and cannot be associated with any other NFT or account. Please ensure your TBA account is empty before proceeding with destruction. (User Confirmation)

### Step 2: Executing a Trade (Buyer's Perspective)

When you see a seller's intent on the Lighter.IM platform and decide to purchase, the transaction flow is as follows:

| Step | Your Action | Protocol Action |
| :--- | :--- | :--- |
| **1. Confirm Intent** | You click "Buy" and confirm the transaction intent. | **Asset Escrow:** The protocol immediately verifies the seller's signed Permit2 message and securely transfers the seller's assets into the Escrow custody contract.  |
| **2. Off-Chain Payment** | You complete the fiat payment (e.g., bank transfer) as required by the seller. | **Nostr Communication:** You can securely chat with the seller using the Nostr Protocol to confirm payment details.  |
| **3. Generate ZKP** | Via the Lighter.IM browser extension, you assist in generating the **Zero-Knowledge Proof** of the payment credential. | **Privacy Proof:** Mathematically proves the fact that you have paid, without leaking any sensitive bank data.  |
| **4. Submit & Receive** | The extension submits the proof to the ZKVerify network. Upon successful verification, you submit the verification result to the Lighter.IM contract. | **Verify & Release:** The contract validates the ZKP. Upon success, the crypto assets are immediately released from the Escrow contract into your **TBA Account**.  |

### Step 3: Managing Your Assets

Once crypto assets land in your TBA Account:

*   You can view the balance at any time via the Lighter.IM application interface.
*   You are free to withdraw the assets from the TBA to your EOA primary wallet or any other address—the assets are under your full control.

Lighter.IM is designed to give you the high-level security of decentralization combined with the convenience you expect from a Web2 product.