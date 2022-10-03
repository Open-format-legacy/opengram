import { GetServerSideProps } from "next";
import Head from "next/head";
import Avatar from "../components/avatar";
import Grid from "../components/grid";
import Layout from "../components/layout";

interface Props {
  address: string;
}

function Profile({ address }: Props) {
  // @TODO hookup loading state
  const isLoading = false;

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
              <Grid
                // @TODO hookup to creator's NFTs
                posts={[
                  {
                    id: "0x01",
                    name: "The sea",
                    description: "People by the sea",
                    imageUrl:
                      "https://images.unsplash.com/photo-1477069077421-fb436712c28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80",
                    creator: "0xeFeA490bc73005ceBe13140D197BAE7290d14d51",
                    createdAt: "2022-09-28T13:42:01.597Z",
                  },
                  {
                    id: "0x02",
                    name: "The mountains",
                    description: "Layers of mountains as the sun rise",
                    imageUrl:
                      "https://images.unsplash.com/photo-1570030990547-f6b13f3062ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80",
                    creator: "0xeFeA490bc73005ceBe13140D197BAE7290d14d51",
                    createdAt: "2022-09-28T13:42:01.597Z",
                  },
                  {
                    id: "0x03",
                    name: "Woods",
                    description: "Mist through the trees",
                    imageUrl:
                      "https://images.unsplash.com/photo-1431965400057-a84b80cfdbff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80",
                    creator: "0xeFeA490bc73005ceBe13140D197BAE7290d14d51",
                    createdAt: "2022-09-28T13:42:01.597Z",
                  },
                ]}
              />
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
