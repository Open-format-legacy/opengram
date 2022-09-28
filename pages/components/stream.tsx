import Post from "./post";

interface Props {
  posts: React.ComponentProps<typeof Post>[];
}

function Stream({ posts }: Props) {
  return (
    <>
      <div className="space-y-4">
        {posts.map((post) => (
          <Post
            key={post.imageUrl}
            imageUrl={post.imageUrl}
            creator={post.creator}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    </>
  );
}

export default Stream;
