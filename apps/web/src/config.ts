import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  slug: "porter-finance",
  name: "Porter Finance",
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
  fallbackSignals: [
    {
      id: "20000000-0000-0000-0000-000000000001",
      headline: "Porter recommends sweeping idle stablecoins into a low-volatility Mantle yield route",
      summary:
        "The agent preserved a 20% cash buffer and proposed moving idle stable liquidity into a safer yield path.",
      confidence: 87,
      severity: "high",
      sourceProtocol: "Merchant Moe",
      destinationProtocol: "Merchant Moe",
      sourceAsset: "mETH",
      destinationAsset: "cmETH"
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
      destinationAsset: "USDY"
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
