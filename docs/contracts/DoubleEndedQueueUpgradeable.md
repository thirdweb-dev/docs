---
slug: /DoubleEndedQueueUpgradeable
title: DoubleEndedQueueUpgradeable
hide_title: true
displayed_sidebar: contracts
---

# DoubleEndedQueueUpgradeable

_A sequence of items with the ability to efficiently push and pop items (i.e. insert and remove) on both ends of the sequence (called front and back). Among other access patterns, it can be used to implement efficient LIFO and FIFO queues. Storage use is optimized, and all operations are O(1) constant time. This includes {clear}, given that the existing queue contents are left in storage. The struct is called `Bytes32Deque`. Other types can be cast to and from `bytes32`. This data structure can only be used in storage, and not in memory. `DoubleEndedQueue.Bytes32Deque queue;` *Available since v4.6.*_

## Errors

### Empty

```solidity
error Empty()
```

_An operation (e.g. {front}) couldn&#39;t be completed due to the queue being empty._

### OutOfBounds

```solidity
error OutOfBounds()
```

_An operation (e.g. {at}) couldn&#39;t be completed due to an index being out of bounds._
