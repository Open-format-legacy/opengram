import Head from "next/head";
import CreatePostForm from "../components/create-post-form";

function Create() {
  return (
    <>
      <Head>
        <title>Opengram - Create new post</title>
      </Head>

      <CreatePostForm
        onSubmit={async (formData) => {
          // @TODO handle minting
          console.log({ formData });

          await new Promise((resolve) => setTimeout(resolve, 2000));
        }}
      />
    </>
  );
}

export default Create;
