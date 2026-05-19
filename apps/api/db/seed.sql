insert into users (id, email, role)
values
  ('00000000-0000-0000-0000-000000000001', 'ops@porter_finance.ai', 'ops_admin'),
  ('00000000-0000-0000-0000-000000000002', 'analyst@porter_finance.ai', 'analyst')
on conflict (email) do nothing;

insert into wallet_entities (id, address, label, category, conviction)
values
  ('10000000-0000-0000-0000-000000000001', '0x9c9a4a45b0f6b9c4d6e54c8ddf8457085e8f4a11', 'Sticky Yield Cohort 01', 'smart-lp', 92),
  ('10000000-0000-0000-0000-000000000002', '0x5cb912f87af0f4607d3fa10a1d7d00f7d8b96cc2', 'Treasury Pattern Wallet', 'treasury', 76)
on conflict (address) do nothing;

insert into rotation_signals (
  id,
  headline,
  summary,
  confidence,
  severity,
  source_protocol,
  destination_protocol,
  source_asset,
  destination_asset,
  evidence_hash
)
values
  (
    '20000000-0000-0000-0000-000000000001',
    'Porter recommends sweeping idle stablecoins into a low-volatility Mantle yield route',
    'The agent preserved a 20% cash buffer and proposed moving idle stable liquidity into a safer yield path.',
    87,
    'high',
    'Merchant Moe',
    'Merchant Moe',
    'mETH',
    'cmETH',
    '0xaaa111'
  ),
  (
    '20000000-0000-0000-0000-000000000002',
    'Approval-gated rebalance trims concentration in a single stable route',
    'Porter identified concentration drift and prepared a manual-approval rebalance plan.',
    81,
    'medium',
    'Agni Finance',
    'Ondo route',
    'USDe',
    'USDY',
    '0xbbb222'
  )
on conflict (id) do nothing;

insert into signal_evidence (id, signal_id, evidence_type, title, body)
values
  (
    '30000000-0000-0000-0000-000000000001',
    '20000000-0000-0000-0000-000000000001',
    'wallet-cluster',
    '5-wallet LP cohort overlap',
    'Five correlated LP addresses exited mETH/MNT within 14 minutes and rebuilt into cmETH/USDe with similar range width.'
  ),
  (
    '30000000-0000-0000-0000-000000000002',
    '20000000-0000-0000-0000-000000000001',
    'yield-shift',
    'Defensive yield repositioning',
    'The cohort reduced directional MNT beta while preserving yield exposure through cmETH and stable routing.'
  ),
  (
    '30000000-0000-0000-0000-000000000003',
    '20000000-0000-0000-0000-000000000002',
    'treasury-pattern',
    'Low-turnover wallet behavior',
    'Observed addresses historically rotate capital only during mandate or yield-thesis changes and maintain longer holding periods.'
  )
on conflict (id) do nothing;

insert into starter_workflows (id, title, summary, cta, thesis, signal_id)
values
  (
    '50000000-0000-0000-0000-000000000001',
    'Launch the idle stablecoin sweep',
    'Start with a seeded Porter policy that protects cash buffers while moving idle stable liquidity into a low-volatility Mantle route.',
    'Use this policy',
    'Porter keeps 20% of the account liquid and routes the remaining idle stable balance into a conservative yield path. The policy is built for reliability first, upside second.',
    '20000000-0000-0000-0000-000000000001'
  ),
  (
    '50000000-0000-0000-0000-000000000002',
    'Load the approval-gated rebalance',
    'Open a seeded action plan that requires human approval before concentration risk is trimmed.',
    'Load approval plan',
    'This action is intentionally gated. Porter detected concentration drift and prepared the rebalance, but the final move should remain manually approved under the current risk profile.',
    '20000000-0000-0000-0000-000000000002'
  )
on conflict (id) do nothing;

insert into alert_rules (id, user_id, channel, condition, is_enabled)
values
  (
    '60000000-0000-0000-0000-000000000001',
    '00000000-0000-0000-0000-000000000002',
    'telegram',
    'Alert when idle cash exceeds the configured cash buffer by more than 15%.',
    true
  ),
  (
    '60000000-0000-0000-0000-000000000002',
    '00000000-0000-0000-0000-000000000002',
    'email',
    'Notify when an approval-gated rebalance plan is ready for review.',
    true
  )
on conflict (id) do nothing;

insert into audit_logs (id, actor_email, action, target_type, target_id, reason)
values
  (
    '40000000-0000-0000-0000-000000000001',
    'ops@porter_finance.ai',
    'seeded_dataset',
    'system',
    'porter_finance',
    'Initial reference implementation bootstrap'
  )
on conflict (id) do nothing;
