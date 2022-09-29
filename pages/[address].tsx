import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/layout";

function Profile() {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>{`${query.address}'s profile`}</title>
      </Head>
      <Layout mode="full">
        <p>Profile</p>
      </Layout>
    </>
  );
}

export default Profile;
