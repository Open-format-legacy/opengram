import Post from "./post";

interface Props {
  posts: React.ComponentProps<typeof Post>[];
}

function Grid({ posts }: Props) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {posts.length > 0 ? (
          <>
            {posts.map((post) => (
              <Post key={post.imageUrl} {...post} minimal />
            ))}
          </>
        ) : (
          <>
            <div className="py-9 col-span-3">
              <p className="text-center">No posts just yet</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Grid;
