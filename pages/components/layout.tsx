import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <div className="pt-[60px]">
        <header className="border-b-[#dbdbdb] border-b-[1px] bg-white h-[60px] fixed top-0 left-0 right-0 flex items-center">
          <div className="px-5 max-w-[940px] mx-auto flex justify-between flex-auto">
            <div>
              <h1 className="text-2xl font-semibold leading-none text-slate-900">
                Opengram
              </h1>
            </div>

            <div className="flex space-x-4">
              {/* @TODO Connect wallet button */}
              <button>Connect</button>

              {/* @TODO show when connected */}
              <Link href="/post">
                <a className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Post
                </a>
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-[820px] mx-auto grid grid-cols-[470px_1fr] gap-10">
          <div className="py-7">{children}</div>
          <div className="py-7">
            <p className="uppercase text-sm text-[#968b8b]">
              &copy; 2022 Openformat × Simpleweb
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default Layout;
