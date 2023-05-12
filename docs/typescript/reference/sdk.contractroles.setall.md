---
slug: /reference/sdk.contractroles.setall
title: ContractRoles.setAll property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# ContractRoles.setAll property

Overwrite the list of members for specific roles

## Example

Say you want to overwrite the list of addresses that are members of the minter role.

```javascript
const minterAddresses = await contract.roles.get("minter");
await contract.roles.setAll({
  minter: [],
});
console.log(await contract.roles.get("minter")); // No matter what members had the role before, the new list will be set to []
```

**Signature:**

```typescript
setAll: {
        (rolesWithAddresses: { [key in TRole]?: string[] | undefined; }): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (rolesWithAddresses: { [key in TRole]?: string[] | undefined; }) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
```

## Remarks

Every role in the list will be overwritten with the new list of addresses provided with them. If you want to add or remove addresses for a single address use [ContractRoles.grant](./sdk.contractroles.grant.md) and [ContractRoles.revoke](./sdk.contractroles.revoke.md) respectively instead.