# Invoice guidance update

Updated `/tmp/digital-theo-context.JbIIcR/AGENTS.md` only within the fixture.

The captured task showed an agent following the two-decimal instruction and dividing all amounts by 100. The maintained formatter already handles currency-specific precision. The guidance now directs invoice-export work to `formatMinor(amount, currency)` in `money.cjs`, explains the JPY/KWD failure, and points to existing checks. Existing command and invoice-identifier guidance remains.

Verification:

- `npm test` passed: `Money examples pass`. It checks USD, JPY, KWD, and unsupported-currency errors.
- SHA-256 values before and after match for `money.cjs`, `check-money.cjs`, `package.json`, and `failed-task.md`.
- Inspected the root `AGENTS.md` and searched the fixture for conflicting guidance. The superseded instruction remains only in the captured failure record.

Behavior limits: The fixture contains no executor configuration or session trace that confirms automatic loading of root `AGENTS.md`. No fresh-agent session was run, and no invoice-export implementation exists in the fixture to exercise. Passing formatter tests verifies existing formatter behavior, not whether the next agent will load or follow the guidance. No agents were spawned.

User-facing answer:

Fixed the rule that caused the mistake in `AGENTS.md`. Invoice exports now point agents to the existing currency formatter. Invoice code stays unchanged.

`npm test` passes for USD, JPY, KWD, and unsupported currencies. I haven't verified a fresh agent loading and following the guidance.
