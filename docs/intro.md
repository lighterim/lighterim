---
sidebar_position: 1
---
## Lighter.IM Protocol: A Zero-Knowledge Proof-Powered Decentralized On/Off-Ramp

## Executive Summary

Lighter.IM Protocol is a pioneering decentralized fiat on/off-ramp solution that leverages Zero-Knowledge Proof (ZKP) technology. Its mission is to lower the barrier for ordinary users entering and exiting the Web3 ecosystem by providing an environment that is safe, efficient, and easy to use.

The protocol's core innovation lies in combining the non-custodial security of decentralized finance (DeFi) with ZKP-based verification of off-chain fiat payments. By enabling the buyer to generate a ZKP of their payment credential locally on a browser extension, Lighter.IM allows the on-chain smart contract to trust the fiat transaction **without requiring the user to disclose any sensitive bank information**. Lighter.IM acts as a faithful fiduciary for the seller's intent, automatically releasing escrowed assets upon successful proof verification.

-----

## 1\. Core Architecture and Trust Model

Lighter.IM’s architecture is built upon three foundational pillars: Tokenized Identity, Non-Custodial Asset Management, and Decentralized Communication.

### 1.1. Tokenized Identity: The Lighter Ticket (ERC-6551 TBA)

The **Lighter Ticket** serves as a user's identity marker when participating in the Lighter.IM Protocol. Crucially, the Ticket is not merely an NFT but an account built on the **ERC-6551 standard (Token Bound Account, TBA)** (Confirmed by user).

This identity structure enables the essential separation of asset control from transactional history and fulfillment record. While the Lighter Ticket owns the history of transaction behavior and fulfillment, the actual assets remain controlled by a separate, dedicated Escrow contract. This design maximizes asset security by ensuring that even if the identity token (Ticket) is compromised, the assets are independently secured, while simultaneously allowing the user to conveniently accumulate verifiable on-chain credit.

### 1.2. Non-Custodial Escrow via Uniswap Permit2

The protocol’s asset custody mechanism is entirely non-custodial, relying on Uniswap’s **Permit2** standard for delegated token transfers, rather than traditional unlimited ERC-20 `approve` grants.

  * **Seller Intent Signature:** When a seller publishes their intent to sell, they sign a message based on Permit2. This signature sets critical transfer parameters, including the expiry deadline, amount, the authorized spender (the Escrow contract), and a nonce.
  * **Witnessing Data:** Permit2 allows the inclusion of **witnessing data**, such as the specific details of the seller’s intent—amount, price, and payment method.
  * **Fidelity:** This setup ensures that Lighter.IM can faithfully execute the transaction precisely according to the seller’s signed intent. Assets are transferred to the Escrow contract *only when a transaction actually occurs* (i.e., when a buyer confirms the intent), mitigating the security risk of assets being indefinitely held in pre-approved allowance.

### 1.3. Decentralized Communication: Nostr Protocol

The **Nostr Protocol** serves as the infrastructure layer for secure, decentralized communication. It provides a public-key cryptography-encrypted protocol for publishing sell intents, exchanging transaction details, and facilitating user-to-user communication (chat). Sellers publish their intents to a Nostr Relayer, ensuring that the dissemination of transaction information is decentralized and cryptographically secured.

-----

## 2\. Canonical Transaction Flow (ZKP-Enabled)

The Lighter.IM transaction flow combines the finality of on-chain smart contracts with the privacy of off-chain ZKP verification, structured into the following key steps:

![transaction flow](/static/img/lighter_im_tx_flow.jpg)

| Step | Role | Operation |
| :--- | :--- | :--- |
| **1** | **Seller** | Signs the Permit2-based sell intent and publishes it to the Nostr Relayer. |
| **2** | **Buyer** | Confirms the seller's intent and initiates the Escrow transaction.<br/>**•** The seller's assets are transferred to the Escrow custody contract, verified by the Permit2 signature. The protocol verifies the match between the seller's intent and the transaction details. |
| **3** | **Buyer** | **Off-Chain Payment:** The buyer completes the fiat payment (e.g., bank transfer) off-chain as required by the transaction details. |
| **4** | **Buyer (Prover)** | **ZKP Generation & Privacy:** The buyer uses the Lighter.IM browser extension (Prover) to generate the ZKP proof.<br/>**•** The extension establishes a zkTLS session via the zkTLS Proxy (Verifier), which witnesses the payment credential information.<br/>**•** The Prover generates the ZKP using **desensitized data and witnessing information** (assisted by the user). Crucially, sensitive payment data **never leaves the user's device**. |
| **5** | **ZKVerify & On-Chain Release** | **Cross-Chain Verification & State Relay:**<br/>**•** The Prover submits the proof to the **ZKVerify relay**.<br/>**•** ZKVerify (utilizing Horizen infrastructure) verifies the proof on its application chain and performs **state aggregation/relay** to the Lighter.IM contract on the Base chain (Confirmed by user).<br/>**•** The buyer submits the final proof and transaction information to the Lighter.IM protocol contract on the Base chain. Upon successful verification of the ZKP, the contract releases the escrowed assets to the buyer. |

-----

## 3\. Key Infrastructure and ZKP Mechanism

### 3.1. ZKVerify: Cross-Chain Verifiable Computing Environment

Horizen/ZKVerify provides the necessary infrastructure and runtime environment for the specialized ZKP generation and verification processes within the Lighter.IM Protocol.

Lighter.IM utilizes ZKVerify to achieve **cross-chain verifiability** and standardize the proof mechanism. This strategic partnership allows the computationally intensive ZKP verification to be offloaded to the ZKVerify application chain. The result is then securely communicated back to the Lighter.IM main contract on the Base chain via a **state aggregation and relay** mechanism (Confirmed by user). This approach significantly optimizes Gas costs and enhances the overall efficiency of the transaction finalization on the destination chain.

### 3.2. Privacy Assurance via zkTLS Session

The protocol relies on zkTLS technology to securely and privately attest to the existence of the off-chain payment credential.

  * **Prover (Browser Extension):** Runs locally on the user's device. It obtains the necessary payment information (with user assistance) and uses it as the secret input (Witness) for the ZKP.
  * **zkTLS Proxy (Verifier):** Acts as a trustless witness, establishing a zkTLS session with the Prover.
  * **The Guarantee:** Within this session, the Proxy can attest to the validity of the payment credential without ever accessing or decrypting the raw, sensitive payment data itself. The Prover uses the desensitized, witnessed information to construct the ZKP, mathematically proving the truth of the statement (payment made) without revealing the underlying secrets.

This mechanism is central to Lighter.IM's trust model: the protocol can operate on the principle of **"Don't Trust, Verify"** by relying on cryptographic soundness to confirm the payment, rather than trusting the user's direct claim or requiring disclosure of private data.[2, 3]

### 3.3. Security and Future Outlook

The security of the Lighter.IM Protocol is derived from its non-custodial design, the time/amount-bounded nature of Permit2, and the cryptographic guarantee of ZKP against fraud.

By tokenizing user identity into an ERC-6551 TBA and delegating ZKP validation to specialized infrastructure (ZKVerify), Lighter.IM achieves a level of security, verifiability, and decentralization rarely found in traditional fiat on/off-ramp services. As users continue to transact, the fulfillment history accumulated by the Lighter Ticket is poised to become a vital foundation for decentralized credit within the broader Web3 ecosystem.
