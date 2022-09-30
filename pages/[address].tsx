import { useRawRequest, useTokens } from "@simpleweb/open-format-react";
import { gql } from "graphql-request";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Avatar from "../components/avatar";
import Grid from "../components/grid";
import Layout from "../components/layout";
import Post from "../components/post";

interface Props {
  address: string;
}

function Profile({ address }: Props) {
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

  return (
    <>
      <Head>
        <title>{`${address}'s profile`}</title>
      </Head>

      <Layout mode="full">
        <div className="mb-20">
          <div className="flex space-x-6 items-center">
            <Avatar creator={address} />
            <h2 className="font-bold text-lg">{address}</h2>
          </div>
        </div>

        <div>
          {isLoading ? (
            <>
              <p className="text-center py-8">Loading...</p>
            </>
          ) : (
            <>
              <Grid posts={posts} />
            </>
          )}
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      address: context.params?.address,
    },
  };
};

export default Profile;
