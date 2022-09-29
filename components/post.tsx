import Link from "next/link";

interface Props {
  name: string;
  description: string;
  imageUrl: string;
  creator: string;
  createdAt: string;
  liked: boolean;
}

function Post({
  name,
  description,
  imageUrl,
  creator,
  createdAt,
  liked,
}: Props) {
  return (
    <div className="border-[1px] border-[#dbdbdb] bg-white rounded-md">
      <div className="p-4">
        <Link href={`/${creator}`}>
          <a>
            <img
              src={avatarUrl(creator)}
              alt={`${creator} avatar`}
              className="w-8 h-8"
            />
          </a>
        </Link>
      </div>
      <img
        src={imageUrl}
        alt={`Photo by ${creator}`}
        width={820}
        height={820}
      />
      <div className="p-4">
        <div>
          <div className="-ml-[2px]">
            {/* @TODO hook up to minting */}
            <button className="block">
              <Heart liked={liked} />
            </button>
          </div>
        </div>
        <div className="mt-2">
          <h6 className="mb-[2px]">
            <span className="font-medium">{name}</span> by{" "}
            <Link href={`/${creator}`}>
              <a>
                <span className="font-medium text-gray-700">
                  {truncateAddress(creator)}
                </span>
              </a>
            </Link>
          </h6>
          <p className="text-sm">{description}</p>
          <time className="text-xs text-[#717171] mt-3 block">
            {new Intl.DateTimeFormat("en-US").format(new Date(createdAt))}
          </time>
        </div>
      </div>
    </div>
  );
}

function Heart({ liked }: { liked: boolean }) {
  if (liked) {
    return (
      <div className="text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      </div>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}

function avatarUrl(str: string) {
  return `https://avatars.dicebear.com/api/identicon/${str}.svg`;
}

function truncateAddress(str: string) {
  const start = str.slice(0, 5);
  const end = str.slice(-5);
  return `${start}...${end}`;
}

export default Post;
