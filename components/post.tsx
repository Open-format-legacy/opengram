import Link from "next/link";
import { useState } from "react";
import Avatar from "./avatar";
import MintHeart from "./mint-heart";

type Attribute = "camera" | "aperture" | "focalLength" | "iso";

interface Props {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  creator: string;
  createdAt: string;
  minimal?: boolean;
  metadata?: {
    [key in Attribute]?: string;
  };
}

function Post({
  id,
  name,
  description,
  imageUrl,
  creator,
  createdAt,
  minimal,
  metadata,
}: Props) {
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);

  const attributes = Object.entries(metadata ?? {});

  function getPrefix(attributeKey: string) {
    if (attributeKey === "iso") {
      return "ISO ";
    }

    if (attributeKey === "aperture") {
      return "ƒ/";
    }

    return "";
  }

  function getSuffix(attributeKey: string) {
    if (attributeKey === "focalLength") {
      return "mm";
    }

    return "";
  }

  return (
    <>
      <div className="border-[1px] border-[#dbdbdb] bg-white rounded-md overflow-hidden flex flex-col">
        {!minimal && (
          <div className="p-4">
            <Link href={`/${creator}`}>
              <a>
                <Avatar creator={creator} />
              </a>
            </Link>
          </div>
        )}
        <button onClick={() => setIsLightboxVisible(true)}>
          <img
            src={imageUrl}
            alt={`Photo by ${creator}`}
            width={820}
            height={820}
            className="aspect-square object-cover"
          />
        </button>
        <div className="p-4 flex-1 flex flex-col">
          <div className="mb-2">
            <div className="-ml-[2px]">
              {/* @TODO hook up to minting */}
              <MintHeart id={id} />
            </div>
          </div>
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
          <p className="text-sm mb-3">{description}</p>
          <time className="text-xs text-[#717171] mt-auto block">
            {new Intl.DateTimeFormat("en-US").format(new Date(createdAt))}
          </time>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 ${
          isLightboxVisible ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/60"
          onClick={() => setIsLightboxVisible(false)}
        ></div>

        <div className="fixed inset-0 flex pointer-events-none">
          <div className="m-auto p-8 pointer-events-auto">
            <div className="relative">
              <img
                src={imageUrl}
                alt={`Photo by ${creator}`}
                width={820}
                height={820}
                className="max-h-full max-w-full shadow-2xl"
              />

              {attributes.length > 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 flex items-end">
                  <div className="text-white p-4 flex space-x-4">
                    {CameraIcon}
                    {attributes.map(([key, value]) => (
                      <span key={key}>{`${getPrefix(key)}${value}${getSuffix(
                        key
                      )}`}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const CameraIcon = (
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
      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
    />
  </svg>
);

function truncateAddress(str: string) {
  const start = str.slice(0, 5);
  const end = str.slice(-5);
  return `${start}...${end}`;
}

export default Post;
