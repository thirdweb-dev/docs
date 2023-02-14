---
slug: /ERC1155ClaimConditions
title: ERC1155ClaimConditions
hide_title: true
displayed_sidebar: unity
---

# class `ERC1155ClaimConditions` {#class_thirdweb_1_1_e_r_c1155_claim_conditions}

```
class ERC1155ClaimConditions
  : public Thirdweb.Routable
```

Fetch claim conditions for a given [ERC1155](docs/unity/ERC1155.md#class_thirdweb_1_1_e_r_c1155) drop contract

## Summary

| Members                 | Type     | Descriptions                                                      |
| ----------------------- | -------- | ----------------------------------------------------------------- |
| ERC1155ClaimConditions  | function |                                                                   |
| GetActive               | function | Get the active claim condition                                    |
| CanClaim                | function | Check whether the connected wallet is eligible to claim           |
| GetIneligibilityReasons | function | Get the reasons why the connected wallet is not eligible to claim |
| GetClaimerProofs        | function | Get the special values set in the allowlist for the given wallet  |

### Members

**`public inline `[`ERC1155ClaimConditions`](#class_thirdweb_1_1_e_r_c1155_claim_conditions_1a56d86a9c9855fb91895d7a3dbaae2185)`(string parentRoute)`**

---

**`public inline async Task< `[`ClaimConditions`](docs/unity/ClaimConditions.md#class_thirdweb_1_1_claim_conditions)`>`[`GetActive`](#class_thirdweb_1_1_e_r_c1155_claim_conditions_1a4a260b29d5437ffe5faa86c68f736740)`(string tokenId)`**

Get the active claim condition

---

**`public inline async Task< bool > `[`CanClaim`](#class_thirdweb_1_1_e_r_c1155_claim_conditions_1a22575b16104b3f1808755f2c3532d7c9)`(string tokenId,int quantity,string addressToCheck)`**

Check whether the connected wallet is eligible to claim

---

**`public inline async Task< string[]> `[`GetIneligibilityReasons`](#class_thirdweb_1_1_e_r_c1155_claim_conditions_1a85344a89b01f9705f6cbfdcc75c2a8df)`(string tokenId,int quantity,string addressToCheck)`**

Get the reasons why the connected wallet is not eligible to claim

---

**`public inline async Task< bool > `[`GetClaimerProofs`](#class_thirdweb_1_1_e_r_c1155_claim_conditions_1a068cd91bf3040bce3a00410467e3706a)`(string tokenId,string claimerAddress)`**

Get the special values set in the allowlist for the given wallet

---
