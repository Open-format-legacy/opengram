import Head from "next/head";
import CreatePostForm from "./components/create-post-form";

function Create() {
  return (
    <>
      <Head>
        <title>Opengram - Create new post</title>
      </Head>

      <CreatePostForm
        onSubmit={async () => {
          // @TODO handle minting
        }}
      />
    </>
  );
}

export default Create;
