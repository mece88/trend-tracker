import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trend Tracker - Find Trending Products</title>
        <meta
          name="description"
          content="Track the latest trending keywords and product ideas on Etsy, eBay, Amazon, and Twitter in real-time."
        />
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <header className="w-full bg-blue-700 text-white py-6 text-center text-3xl font-bold">
          🚀 Trend Tracker - Discover What's Hot!
        </header>
        <main className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg mt-6">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Welcome to Trend Tracker
          </h1>
          <p className="text-gray-600 text-center mt-3 text-lg">
            The ultimate tool for discovering trending keywords and products before anyone else!
          </p>

          <div className="mt-8 flex justify-center">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 text-lg">
              Start Tracking Trends
            </button>
          </div>
        </main>
        <section className="w-full max-w-4xl mt-8 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800">Why Use Trend Tracker?</h2>
          <ul className="mt-4 text-lg text-gray-700 list-disc pl-6">
            <li>📈 Track trending products in real-time</li>
            <li>🔎 Discover hot keywords before they explode</li>
            <li>💰 Find profitable niches for your business</li>
          </ul>
        </section>
        <footer className="w-full text-center py-6 mt-6 text-gray-600">
          © {new Date().getFullYear()} Trend Tracker. All rights reserved.
        </footer>
      </div>
    </>
  );
}