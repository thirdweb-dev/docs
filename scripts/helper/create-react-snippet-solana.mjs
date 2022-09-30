// Read in the react snippets
import reactSnippets from "../../submodules/js/packages/react/docs/solana/snippets.json" assert { type: "json" };

// Takes in a two keys and returns the react snippet defined here for that value
// TODO: This logic **Probably** doesn't belong here.
// We should add some way of mapping this in the react SDK itself
// that way it is more maintainable.

const reactMapping = {
  NFTCollection: {
    mainHook: "useNFTCollection",
    subHooks: {
      // methods
      getAll: "useNFTs",
      mintBatchTo: "",
      mintTo: "useMintNFT",
      balanceOf: "",
      get: "useNFT",
      transfer: "useTransferNFT",
    },
  },
  Token: {
    mainHook: "useToken",
    subHooks: {
      // methods
      mintTo: "useMintToken",
      balance: "",
      balanceOf: "useTokenBalance",
      get: "",
      totalSupply: "useTokenSupply",
      transfer: "useTransferToken",
    },
  },
  NFTDrop: {
    mainHook: "useNFTDrop",
    subHooks: {
      // methods
      claimTo: "useClaimNFT",
      lazyMint: "useLazyMintNFT",
      getAll: "useNFTs",
      getOwned: "useOwnedNFTs",
      totalClaimedSupply: "useClaimedSupply",
      totalUnclaimedSupply: "useUnclaimedSupply",
      balanceOf: "",
      get: "useNFT",
      transfer: "",
      // properties
      claimConditions: "",
      revealer: "",
      royalties: "",
    },
  },
  Program: {
    mainHook: "useProgram",
    subHooks: {},
  },
};

export default function createReactSnippetSolana(contractName, methodName) {
  const mainHookName = reactMapping[contractName]?.mainHook;
  const reactSubhookName = reactMapping[contractName]?.subHooks[methodName];

  const reactObject = reactSnippets?.[mainHookName];

  const reactSubhooks = reactObject?.subhooks;

  const reactSnippet = reactSubhooks?.find((s) => s.name === reactSubhookName);

  return reactSnippet ? reactSnippet : {};
}
