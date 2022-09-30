import { useTokens } from "@simpleweb/open-format-react";
import Head from "next/head";
import Layout from "../components/layout";
import Post from "../components/post";
import Stream from "../components/stream";

function Home() {
  const { data, isLoading } = useTokens();

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
        <title>Opengram</title>
      </Head>

      <Layout>
        {isLoading ? (
          <>
            <p className="text-center py-8">Loading...</p>
          </>
        ) : (
          <>
            <Stream posts={posts} />
          </>
        )}
      </Layout>
    </>
  );
}

export default Home;
