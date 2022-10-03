## Steps

Add the Open Format React SDK and ethers.

```shell
yarn add @simpleweb/open-format-react ethers
```

Wrap \_app.tsx in the <OpenFormatProvider>

Get a UUID token from https://www.uuidgenerator.net/

Set the config with the token c94972f0-b156-4cc8-b390-22d2b04cd0d7 (or new one) and set network to mumbai

Set the nft token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVkMjJDZDg2M2Y2NUVBN0ZjZjI3MEE5MUY2NTE5Nzc4OGRhRjU4NmMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDUzMDk3NzkwNiwibmFtZSI6Ik9wZW5ncmFtIn0.FODpTH2Y8KlFqzaTJOnwiJmPzb5kyhv4WKcStmwejc0
https://nft.storage/

Sometimes next can crap out, delete the .next cache

In component/navigation.tsx, add the <ConnectButton />

Demo connect button.

Then in the navigation also, use the isConnected check on the post button.

```tsx
const { isConnected } = useWallet();
```

Add deploy function to create.tsx

```tsx
deploy({
  maxSupply: 1000,
  mintingPrice: 0.01,
  symbol: "OPENGRAM",
  releaseType: "image",
  name: formData.name,
  description: formData.description,
  image: formData.image,
  metadata: formData.metadata,
});
```

Check the graph
https://api.thegraph.com/subgraphs/name/simpleweb/open-format/graphql

query:

```graphql
query TokensForFactory {
  tokens(where: { factory_id: "c94972f0-b156-4cc8-b390-22d2b04cd0d7" }) {
    id
    createdAt
    release_type
    symbol
    creator {
      id
    }
    properties {
      key
      value
    }
  }
}
```

Pull in tokens from the home page with useTokens

Data then needs formatting:

```tsx
const posts: React.ComponentProps<typeof Post>[] = (data?.tokens ?? []).map(
  (token) => {
    const getProperty = (key: string) =>
      token.properties.find((property) => property.key === key)?.value ?? "";

    return {
      id: token.id,
      name: getProperty("name"),
      description: getProperty("description"),
      imageUrl: getProperty("image").replace(
        "ipfs://",
        "https://ipfs.io/ipfs/"
      ),
      creator: token.creator.id,
      createdAt: new Date(parseInt(token.createdAt) * 1000).toISOString(),
      liked: false,
      metadata: token.properties
        .filter((property) =>
          ["camera", "aperture", "iso", "focalLength"].includes(property.key)
        )
        .reduce(
          (previous, current) => ({
            ...previous,
            [current.key]: current.value,
          }),
          {}
        ),
    };
  }
);
```

Then on the address page hook up the data...

```tsx
const { data, isLoading } = useRawRequest<
  ReturnType<typeof useTokens>["data"],
  any
>({
  query: gql`
    query CreatorsTokens($creatorId: String!) {
      tokens(
        where: {
          factory_id: "c94972f0-b156-4cc8-b390-22d2b04cd0d7"
          creator_: { id: $creatorId }
        }
      ) {
        id
        createdAt
        release_type
        symbol
        creator {
          id
        }
        properties {
          key
          value
        }
      }
    }
  `,
  variables: {
    creatorId: address,
  },
});
```

In mint-heart.tsx, mint the Nft when clicked

```tsx
const nft = useNFT(id);
const { mint } = useMint(nft);
```

Get the number of likes/hearts

```tsx
const { data } = useSaleData({ tokenId: id });
const mintedCount = data?.token?.saleData.totalSold ?? 0;
```
