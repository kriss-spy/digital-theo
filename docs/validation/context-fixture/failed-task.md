# Captured agent mistake

Task: Add an invoice export using the existing currency formatter.
Agent output: Added a local (amount / 100).toFixed(2) formatter because project guidance says every amount has two decimals.
Observed result: A JPY invoice for 123 minor units exported as 1.23. A KWD invoice for 1234 minor units exported as 12.34.
The change was rejected. The maintained formatter in money.cjs remains unchanged.
