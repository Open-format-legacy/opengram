import { ConnectButton, useWallet } from "@simpleweb/open-format-react";
import Link from "next/link";

function Navigation() {
  const { isConnected } = useWallet();

  return (
    <div className="flex space-x-4">
      {isConnected && (
        <Link href="/create">
          <a className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Post
          </a>
        </Link>
      )}

      <ConnectButton />
    </div>
  );
}

export default Navigation;
