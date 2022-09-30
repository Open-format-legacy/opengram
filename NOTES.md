## Steps

Add the Open Format React SDK and ethers.

```shell
yarn add @simpleweb/open-format-react ethers
```

Wrap \_app.tsx in the <OpenFormatProvider>

Get a UUID token from https://www.uuidgenerator.net/

Set the config with the token c94972f0-b156-4cc8-b390-22d2b04cd0d7 (or new one) and set network to mumbai

Set the nft token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVkMjJDZDg2M2Y2NUVBN0ZjZjI3MEE5MUY2NTE5Nzc4OGRhRjU4NmMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDUzMDk3NzkwNiwibmFtZSI6Ik9wZW5ncmFtIn0.FODpTH2Y8KlFqzaTJOnwiJmPzb5kyhv4WKcStmwejc0

Sometimes next can crap out, delete the .next cache

In component/navigation.tsx, add the <ConnectButton />

Demo connect button.

Then in the navigation also, use the isConnected check on the post button.

```tsx
const { isConnected } = useWallet();
```
