---
slug: /contract-deployer
title: ContractDeployer Objects
hide_title: true
displayed_sidebar: python
---

<a id="core.classes.contract_deployer"></a>

# core.classes.contract_deployer

<a id="core.classes.contract_deployer.ContractDeployer"></a>

## ContractDeployer Objects

```python
class ContractDeployer(ProviderHandler)
```

<a id="core.classes.contract_deployer.ContractDeployer.deploy_nft_collection"></a>

#### deploy_nft_collection

```python
def deploy_nft_collection(metadata: NFTCollectionContractMetadata) -> str
```

Deploy an NFT Collection contract.

<a id="core.classes.contract_deployer.ContractDeployer.deploy_edition"></a>

#### deploy_edition

```python
def deploy_edition(metadata: EditionContractMetadata) -> str
```

Deploy an Edition contract

<a id="core.classes.contract_deployer.ContractDeployer.deploy_token"></a>

#### deploy_token

```python
def deploy_token(metadata: TokenContractMetadata) -> str
```

Deploy a Token contract

<a id="core.classes.contract_deployer.ContractDeployer.deploy_marketplace"></a>

#### deploy_marketplace

```python
def deploy_marketplace(metadata: MarketplaceContractMetadata) -> str
```

Deploy a Marketplace contract

<a id="core.classes.contract_deployer.ContractDeployer.deploy_nft_drop"></a>

#### deploy_nft_drop

```python
def deploy_nft_drop(metadata: NFTDropContractMetadata) -> str
```

Deploy an NFT Drop contract

<a id="core.classes.contract_deployer.ContractDeployer.deploy_edition_drop"></a>

#### deploy_edition_drop

```python
def deploy_edition_drop(metadata: EditionDropContractMetadata) -> str
```

Deploy an Edition Drop contract

<a id="core.classes.contract_deployer.ContractDeployer.deploy_multiwrap"></a>

#### deploy_multiwrap

```python
def deploy_multiwrap(metadata: MultiwrapContractMetadata) -> str
```

Deploy a Multiwrap contract
