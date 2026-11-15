# Project guidance

Use the commands defined in package.json.
When formatting invoice exports, pass amounts in minor units and their currency to `formatMinor(amount, currency)` from `money.cjs`.
Use that formatter's currency-specific precision and unsupported-currency errors; a fixed divisor of 100 corrupts JPY and KWD amounts.
Keep currency rules in `money.cjs`. See `check-money.cjs` for supported-currency examples and the unsupported-currency check.
Preserve invoice identifiers in exported files.
