## Steps

Add the Open Format React SDK and ethers.

```shell
yarn add @simpleweb/open-format-react ethers
```

Wrap \_app.tsx in the <OpenFormatProvider>

Get a UUID token from https://www.uuidgenerator.net/

Set the config with the token c94972f0-b156-4cc8-b390-22d2b04cd0d7 (or new one) and set network to mumbai

Sometimes next can crap out, delete the .next cache

In component/navigation.tsx, add the <ConnectButton />

Demo connect button.
