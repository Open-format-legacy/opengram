import Post from "./post";

interface Props {
  posts: React.ComponentProps<typeof Post>[];
}

function Stream({ posts }: Props) {
  return (
    <>
      <div className="space-y-4">
        {posts.length > 0 ? (
          <>
            {posts.map((post) => (
              <Post key={post.imageUrl} {...post} />
            ))}
          </>
        ) : (
          <>
            <div className="py-9">
              <p className="text-center">No posts just yet</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Stream;
