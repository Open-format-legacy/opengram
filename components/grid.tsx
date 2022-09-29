import Post from "./post";

interface Props {
  posts: React.ComponentProps<typeof Post>[];
}

function Grid({ posts }: Props) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <Post key={post.imageUrl} {...post} minimal />
        ))}
      </div>
    </>
  );
}

export default Grid;
