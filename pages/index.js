import Head from "next/head";
import Link from "next/link";

// ✅ This is your Navbar (Navigation Menu)
const Navbar = () => {
  return (
    <nav className="w-full bg-blue-700 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🚀 Trend Tracker</h1>
      <div className="flex space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
};

// ✅ This is your Homepage
export default function Home() {
  return (
    <>
      <Head>
        <title>Trend Tracker - Find Trending Products</title>
        <meta name="description" content="Track the latest trending keywords on Etsy, eBay, Amazon, and Twitter in real-time." />
      </Head>

      <Navbar />  {/* 👈 This line ensures the Navbar appears on top of the page */}

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Trend Tracker</h1>
        <p className="text-gray-600 text-center mt-2">
          Discover trending keywords before anyone else!
        </p>

        <div className="mt-6 flex space-x-2">
          <input type="text" placeholder="Search trends..." className="px-4 py-2 border rounded-lg" />
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
            Search
          </button>
        </div>
      </div>
    </>
  );
}