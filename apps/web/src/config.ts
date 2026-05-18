import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  slug: "porter-finance",
  name: "Porter Finance",
  tag: "Agentic Wallets & Economy",
  tagline: "Personal CFO agent for Mantle",
  valueProp:
    "Porter Finance turns plain-English financial intent into bounded Mantle wallet operations with cash buffers, approval classes, and transparent on-chain decision logging.",
  launchLabel: "Open CFO Console",
  docsLabel: "Read Agent Policy Stack",
  aiAwakeningFit:
    "Porter fits AI Awakening by showing an agentic wallet economy that converts human intent into constrained Mantle actions, while publishing decision trails that judges can inspect.",
  dashboardTitle: "Policy-aware wallet console",
  dashboardSubtitle:
    "Review live recommendations, keep risky actions behind approval boundaries, and publish the exact reasoning that shaped the wallet’s next move.",
  guideIntro:
    "Use Porter like a personal CFO: inspect the latest recommendation, choose a starter policy, then commit the thesis that explains why the wallet should act.",
  docsIntro:
    "Porter is designed for agentic finance on Mantle: readable controls, bounded automation, and a transparent thesis trail for every important move.",
  chainId: 5000,
  chainHex: "0x1388",
  chainName: "Mantle Mainnet",
  rpcUrl: "https://rpc.mantle.xyz",
  explorerBaseUrl: "https://mantlescan.xyz",
  contracts: {
    signalRegistry: "0x6Eea20692c0f1E0B3400b71a849c4DFAa169E14D",
    thesisRegistry: "0x3C1F34D1f93793Cc07747BE639A472C1e14f3f5f",
    adminController: "0x389cB8A4C506A68b8d1757de12A310C6efd981f9"
  },
  theme: {
    bg: "#0d0b16",
    surface: "rgba(23, 18, 37, 0.8)",
    surfaceStrong: "rgba(29, 24, 44, 0.98)",
    line: "rgba(255, 184, 255, 0.12)",
    text: "#faf5ff",
    muted: "#b5adc9",
    accent: "#f7b8ff",
    accentSoft: "rgba(247, 184, 255, 0.12)",
    accentStrong: "#f48fff",
    glowA: "rgba(244, 143, 255, 0.18)",
    glowB: "rgba(110, 99, 255, 0.16)",
    gradient: "linear-gradient(135deg, #f7b8ff 0%, #8ac8ff 100%)"
  },
  heroStats: [
    { label: "Cash buffer target", value: "20%" },
    { label: "Approval classes", value: "4" },
    { label: "Active policy rules", value: "11" }
  ],
  metrics: [
    {
      label: "Idle stable sweep",
      value: "$12.4k",
      detail: "Current ready capital eligible for low-volatility routing"
    },
    {
      label: "Manual approval load",
      value: "2 actions",
      detail: "Recommended actions still waiting for operator consent"
    },
    {
      label: "Primary objective",
      value: "Yield + liquidity",
      detail: "Maintain reserve while improving idle stable efficiency"
    }
  ],
  guideSteps: [
    {
      title: "Open the recommendation console",
      body: "Porter surfaces the current best move first, along with the policy boundary that allowed the suggestion."
    },
    {
      title: "Check the guardrails",
      body: "Review the route, concentration impact, and approval status before the wallet takes action."
    },
    {
      title: "Publish the CFO thesis",
      body: "Record the reasoning on Mantle so the recommendation can be benchmarked against the final transaction path."
    }
  ],
  docs: [
    {
      id: "problem",
      title: "Problem",
      body:
        "Most users do not want a trading bot. They want a careful financial operator that respects cash buffers, avoids surprise leverage, and explains itself.",
      bullets: [
        "Wallet automation often feels reckless.",
        "Users need clear approval boundaries.",
        "Judges need to see that the AI layer is constrained."
      ]
    },
    {
      id: "architecture",
      title: "Architecture",
      body:
        "Porter pairs an opinionated frontend with Mantle registries and health-aware runtime behavior so recommendations remain visible and the on-chain path remains usable when backend services degrade.",
      bullets: [
        "SignalRegistry stores the recommended move.",
        "ThesisRegistry stores the policy rationale.",
        "Health monitoring keeps backend failures readable instead of catastrophic."
      ]
    },
    {
      id: "awakening",
      title: "AI Awakening Fit",
      body:
        "This product belongs in Agentic Wallets & Economy because it gives a wallet an operating model rather than a chat interface: policy, memory, approval class, and execution trace.",
      bullets: [
        "Agent explains before it acts.",
        "Wallet actions are bounded by policy.",
        "On-chain records make the agent benchmarkable."
      ]
    }
  ],
  starterCards: [
    {
      id: "idle-stable",
      title: "Use the idle stable sweep policy",
      summary:
        "Pre-fill a thesis that keeps a 20% cash reserve while routing idle stablecoins into a lower-volatility Mantle yield path.",
      cta: "Use CFO thesis",
      signalId: "20000000-0000-0000-0000-000000000001",
      thesis:
        "The wallet should preserve an immediate 20% cash reserve and only deploy excess stable liquidity into low-volatility Mantle yield routes. This improves capital efficiency without breaking the user’s liquidity or leverage rules."
    },
    {
      id: "approval-rebalance",
      title: "Use the approval-gated rebalance note",
      summary:
        "Open a thesis for a manual-approval rebalance that reduces concentration before it becomes a policy breach.",
      cta: "Load rebalance thesis",
      signalId: "20000000-0000-0000-0000-000000000002",
      thesis:
        "This move should remain approval-gated because it changes the portfolio’s stable routing profile. The user should sign off before concentration is reduced into a new route, even though the recommendation is policy-safe."
    }
  ],
  fallbackSignals: [
    {
      id: "20000000-0000-0000-0000-000000000001",
      headline: "Porter recommends sweeping idle stablecoins into a low-volatility Mantle yield route",
      summary:
        "The agent preserved a 20% cash buffer and proposed moving idle stable liquidity into a safer yield path.",
      confidence: 87,
      severity: "high",
      sourceProtocol: "Wallet reserve",
      destinationProtocol: "Mantle yield route",
      sourceAsset: "USDe",
      destinationAsset: "USDY",
      createdAt: "2026-05-18T09:11:00.000Z"
    },
    {
      id: "20000000-0000-0000-0000-000000000002",
      headline: "Approval-gated rebalance trims concentration in a single stable route",
      summary:
        "Porter identified concentration drift and prepared a manual-approval rebalance plan.",
      confidence: 81,
      severity: "medium",
      sourceProtocol: "Agni Finance",
      destinationProtocol: "Ondo route",
      sourceAsset: "USDe",
      destinationAsset: "USDY",
      createdAt: "2026-05-18T08:30:00.000Z"
    }
  ],
  defaultAlerts: [
    {
      id: "pf-alert-1",
      channel: "telegram",
      condition: "Ping me when Porter wants to move idle stablecoins into a new yield route.",
      isEnabled: true
    },
    {
      id: "pf-alert-2",
      channel: "discord",
      condition: "Require approval when a single route exceeds the concentration policy.",
      isEnabled: true
    }
  ]
};
