import { useDeploy } from "@simpleweb/open-format-react";
import Head from "next/head";
import CreatePostForm from "../components/create-post-form";
import Layout from "../components/layout";

function Create() {
  const { deploy } = useDeploy();

  return (
    <>
      <Head>
        <title>Opengram - Create new post</title>
      </Head>

      <Layout>
        <CreatePostForm
          onSubmit={async (formData) => {
            await deploy({
              maxSupply: 1000,
              mintingPrice: 0.01,
              symbol: "OPENGRAM",
              releaseType: "image",
              name: formData.name,
              description: formData.description,
              image: formData.image,
              metadata: formData.metadata,
            });
          }}
        />
      </Layout>
    </>
  );
}

export default Create;
