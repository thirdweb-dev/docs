---
title: Storage
hide_title: true
displayed_sidebar: react-native
---

# Storage

Get the instance of the `ThirdwebStorage` class being used by the [`ThirdwebProvider`](/react/react.thirdwebprovider).

Allows you to use the TypeScript SDK functionality of [Storage](/storage) in your React native app.

## API Key

You will require an API key to use thirdweb’s storage services with the SDK. If you haven’t created a key yet you can do so for free from the [**thirdweb dashboard**](https://thirdweb.com/create-api-key).

You can then obtain a `clientId` from the API key which you will need to pass to the [`ThirdwebProvider`](/react/react.thirdwebprovider) component:

```jsx
import { ThirdwebProvider } from "@thirdweb/react-native";

const App = () => {
  return (
    <ThirdwebProvider clientId="YOUR_CLIENT_ID">
      <YourApp />
    </ThirdwebProvider>
  );
};
```

Please note that you will also need to get your app's `bundleId` and pass it in the `Allowed Bundle IDs` section when creating your API key. Check [how you can get your app's `bundleId`](https://portal.thirdweb.com/api-keys#react-native).

## useStorage hook

Configurable in the [`storageInterface`](/react/react.thirdwebprovider#storageinterface-optional) prop of the [`ThirdwebProvider`](/react/react.thirdwebprovider).

The hook returns a [`ThirdwebStorage`](/typescript/storage) instance. View the [TypeScript Storage](/typescript/storage) documentation for more information.

```jsx
import { useStorage } from "@thirdweb/react-native";
```

### Usage

```jsx
import { useStorage } from "@thirdweb-dev/react-native";

export default function Component() {
  const storage = useStorage();
  ...
  // Now you can use the functionality of the ThirdwebStorage class:
  const resp = await storage?.download("ipfs-url"); // Download a file from IPFS
  if (resp.ok) {
    const value = await resp?.json();
  }

  const fileIpfsHash = await storage?.upload({
    name: 'file1',
    type: 'file-mime-type',
    uri: 'file-uri-on-device',
  }); // Upload a file to IPFS
  const objIpfsHash = await storage?.upload({key: 'value'}); // Upload an object to IPFS
  const strIpfsHash = await storage?.upload('string-to-upload'); // Upload a string to IPFS
}
```
