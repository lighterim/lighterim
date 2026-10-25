---
slug: horizen-l3-shutdown
title: Lighter.IM Moves to Base as the Horizen L3 Winds Down
tags: [Horizen, Base, EIP-8004, ERC-8183, Staking]
---

Lighter.IM Moves to Base as the Horizen L3 Winds Down
======

**Lighter.IM is moving to Base with the Horizen ecosystem.** The Horizen L3 is winding down because Base’s Denim upgrade will break OP Stack chains that settle to Base. We are using the move to open the protocol to agents, to publish identity, honour, and behavior on shared Ethereum standards, and to open [staking.lighter.im](https://staking.lighter.im) the day ZEN staking goes live on Base.

<!-- truncate -->

## What is happening

On 23 October 2026, Horizen announced that the Horizen L3 will shut down over the following two weeks. The post is [Changes for Horizen](https://blog.horizen.io/changes-for-horizen). Base has scheduled its Denim upgrade for **5 November 2026, 18:00 UTC**. Denim shortens Base blocks to 200 milliseconds. OP Stack L3s that settle to Base, including Horizen, cannot follow that change. About forty minutes after activation, the L3 can no longer include user transactions. Horizen reproduced this on Base Sepolia, where Denim is already live, and the infrastructure provider has confirmed there is no fix.

Bridging from the L3 to Base closes at **13:00 UTC on Tuesday, 4 November 2026**, one day before the chain stops, so the closing snapshot is taken while nothing is still in flight.

Horizen is not rebuilding the L3, for a reason that matches how Lighter.IM is built. Zero-knowledge proofs, and confidential execution in trusted execution environments such as Vela, do their work without a chain of their own. ZEN already exists natively on Base. Base becomes the home chain of the ecosystem, and the settlement chain for Lighter.IM.

## If you hold assets on the Horizen L3

Move them before the bridge closes. Withdrawing now is the fastest path back to Base. The steps below are Horizen’s. If a detail here differs from [their announcement](https://blog.horizen.io/changes-for-horizen), follow that post. Ignore any other “migration helper.”

- Staking rewards on the L3 end on **25 October 2026**. If you are staking ZEN, withdraw the stake and claim rewards at [staking.horizen.io](https://staking.horizen.io) before you bridge.
- Bridge ZEN and USDC.e to Base through [Stargate](https://stargate.finance). USDC.e is operated by Stargate. The DAO return does not cover it, so it has to leave the L3 before 4 November.
- Withdraw ETH through the native bridge at [bridge.horizen.io](https://bridge.horizen.io). Start before 4 November. Finality on Base takes about two weeks. ETH left on the L3 below 0.001 ETH will not be returned. If you need gas to bridge other assets out, bridge only the minimum ETH the bridge allows.
- After 13:00 UTC on 4 November, Horizen will snapshot every balance and staking position, publish the snapshot for a one-week public review, and return ZEN — including unclaimed staking rewards — and ETH above 0.001 ETH to the same address on Base. The expected window is the second half of November. A smart-contract wallet on the L3 that does not exist in the same form on Base should write to [security@horizen.io](mailto:security@horizen.io) before 4 November.

Lighter.IM will not ask you for a seed phrase, a private key, or a transfer of funds to “complete a migration.” Horizen will not either. Use the official channels listed at the end of this post.

## What Lighter.IM ships with the move

The chain change is the moment for three upgrades.

### 1. A protocol agents can operate

A Lighter trade is already a signed intent: price, size, deadline, counterparty bounds, and a Permit2 authorization. That object is something software can read, carry, and settle.

The upgrade makes agents first-class participants. An agent will be able to discover a counterparty, post or take an intent, and carry the trade through to settlement on the same non-custodial path a person uses in the app. The wallet still signs. The Lighter Ticket’s Token Bound Account still holds the trading assets. A zkTLS proof still shows that the fiat payment happened, while the bank statement stays on the user’s device.

People keep the app. Agents get the same actions as callable endpoints, so a trade no longer depends on someone clicking through a page.

### 2. Identity, honour, and behavior on EIP-8004 and ERC-8183

The Lighter Ticket, an ERC-6551 token-bound account, is already the identity that accumulates fulfillment history as on-chain honour. We are extending that record so another application, or another agent, can read who a participant is, which role they hold, and how they have behaved.

**[EIP-8004](https://eips.ethereum.org/EIPS/eip-8004) (Trustless Agents)** is the discovery and trust layer. It defines three registries:

- **Identity.** An ERC-721 agent id plus a registration file: name, description, and the endpoints where the agent can be reached.
- **Reputation.** Signed feedback from a client to an agent, with a score, tags, and an optional evidence URI. Any application can read it. Scoring stays outside the registry, so honour can be interpreted without being locked to one formula.
- **Validation.** A request from an agent and a response from an independent checker. The checker can be a zero-knowledge verifier or a TEE attestation, which is the kind of evidence Lighter.IM already produces when a payment proof clears.

**[ERC-8183](https://eips.ethereum.org/EIPS/eip-8183) (Agentic Commerce)** is the job those agents settle. A client funds an escrowed budget, a provider submits the deliverable, and one evaluator attests completion or rejection. A job moves from Open, to Funded, to Submitted, and then to Completed, Rejected, or Expired. The attestation can carry a reason hash into an EIP-8004 feedback entry, so the outcome of the job becomes a public behavior record.

On Lighter.IM those roles already exist in the trade. The participant who commits the intent, the participant who performs, and the verification step that releases escrow line up with client, provider, and evaluator. Fulfillment, expiry, and rejection stay attached to the Lighter Ticket as honour, and they become portable reputation and validation. An outside agent can check that record before it takes the other side of a trade.

Further posts will cover the registration format, the feedback tags we will write, and how a settled intent becomes an ERC-8183 job. This post is the commitment: identity, role, honour, and behavior will live on these two standards, on Base.

### 3. staking.lighter.im opens with ZEN staking on Base

ZEN staking on the L3 ends with this wind-down. Horizen expects to redeploy staking on Base, still funded under ZenIP-42408, on the chain where ZEN already lives.

**[staking.lighter.im](https://staking.lighter.im) will open at the same time** as that program, and will keep serving the Horizen community from Base. Withdrawing L3 stake now is what places ZEN where that program can use it. We will publish the staking guide when Horizen publishes the program rules. Until then, unstaking and bridging stay on Horizen’s official sites, not on ours.

## Dates

| When (UTC) | What |
| --- | --- |
| 25 October 2026 | L3 staking rewards end. Withdraw stake and claim, then bridge. |
| 4 November 2026, 13:00 | L3 to Base bridging closes. Horizen snapshots balances and staking positions. |
| 5 November 2026, 18:00 | Base Denim activates. The L3 stops processing transactions. |
| When Base staking launches | [staking.lighter.im](https://staking.lighter.im) opens with it. |

## Where to go next

Trust the official sources for the bridge, and this site for Lighter.IM.

- Horizen’s announcement: [Changes for Horizen](https://blog.horizen.io/changes-for-horizen)
- Horizen: [horizen.io](https://horizen.io), [Discord](https://horizen.io/invite/discord), [Telegram community](https://t.me/horizencommunity), [Telegram news](https://t.me/horizenglobal), [X](https://x.com/horizenglobal)
- Questions about a Safe or other contract wallet on the L3: [security@horizen.io](mailto:security@horizen.io)
- Lighter.IM app: [beta.lighter.im](https://beta.lighter.im)
- Lighter.IM docs: [docs.lighter.im](https://docs.lighter.im)

---

**About Lighter.IM**

Lighter.IM is a non-custodial on/off-ramp. A Lighter Ticket (ERC-6551) holds trading identity and honour, Permit2 moves assets only inside a signed intent, Nostr carries the conversation, and a zkTLS proof shows that fiat payment happened. We are taking that design to Base, and opening it to agents.
