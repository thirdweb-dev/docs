---
slug: /ERC20ClaimConditions
title: ERC20ClaimConditions
hide_title: true
displayed_sidebar: unity
---

# class `ERC20ClaimConditions` {#class_thirdweb_1_1_e_r_c20_claim_conditions}

```
class ERC20ClaimConditions
  : public Thirdweb.Routable
```

Fetch claim conditions for a given [ERC20](docs/unity/ERC20.md#class_thirdweb_1_1_e_r_c20) drop contract

# Summary

| Members                 | Type     | Descriptions                                                      |
| ----------------------- | -------- | ----------------------------------------------------------------- |
| ERC20ClaimConditions    | function |                                                                   |
| GetActive               | function | Get the active claim condition                                    |
| CanClaim                | function | Check whether the connected wallet is eligible to claim           |
| GetIneligibilityReasons | function | Get the reasons why the connected wallet is not eligible to claim |
| GetClaimerProofs        | function | Get the special values set in the allowlist for the given wallet  |

# Members

**`public inline `[`ERC20ClaimConditions`](#class_thirdweb_1_1_e_r_c20_claim_conditions_1af092ffd1d33b89eff3fb5aae38da50d7)`(string parentRoute)`**

---

**`public inline async Task< `[`ClaimConditions`](docs/unity/ClaimConditions.md#class_thirdweb_1_1_claim_conditions)`>`[`GetActive`](#class_thirdweb_1_1_e_r_c20_claim_conditions_1a9b3b8ed78acfbed1bb668b80317f7264)`()`**

Get the active claim condition

---

**`public inline async Task< bool > `[`CanClaim`](#class_thirdweb_1_1_e_r_c20_claim_conditions_1a24c23d6a498519ba782e6dd317e8bb2c)`(string quantity,string? addressToCheck)`**

Check whether the connected wallet is eligible to claim

---

**`public inline async Task< string[]> `[`GetIneligibilityReasons`](#class_thirdweb_1_1_e_r_c20_claim_conditions_1aa17c7838f1084749f8cd46515f2fc997)`(string quantity,string? addressToCheck)`**

Get the reasons why the connected wallet is not eligible to claim

---

**`public inline async Task< bool > `[`GetClaimerProofs`](#class_thirdweb_1_1_e_r_c20_claim_conditions_1a146c08501150a6340755d33620b4f758)`(string claimerAddress)`**

Get the special values set in the allowlist for the given wallet

---
