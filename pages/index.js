import Head from "next/head";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="mx-1 bg-white py-3">
      <Head>
        <title>Casa health care</title>
        <meta name="description" content="Casa health care" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <nav className="flex justify-between">
          <div className="m-5 ">
            <h1 className="roboto font-semibold text-3xl text-black">La vue sur votre solution de santé</h1>
          </div>
          <div className="mx-5 my-6">
            <Icon icon="carbon:notification" color="black" width={32} height={32} />
          </div>
        </nav>
        <div className="m-3">
          <form>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
              Search
            </label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for Doctors..."
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 green hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}
