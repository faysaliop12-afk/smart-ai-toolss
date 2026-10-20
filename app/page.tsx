
"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Mama & Baby PNG Bundle",
    price: "$4.99",
    category: "PNG Designs",
    emoji: "💗",
    url: "https://mstsabinakhatun.gumroad.com/l/szwmr",
  },
  {
    id: 2,
    name: "Christmas T-Shirt Designs",
    price: "$3.99",
    category: "T-Shirt Designs",
    emoji: "🎄",
    url: "",
  },
  {
    id: 3,
    name: "Social Media Templates",
    price: "$5.99",
    category: "Templates",
    emoji: "🎨",
    url: "",
  },
  {
    id: 4,
    name: "Kids Storybook",
    price: "$6.99",
    category: "Ebooks",
    emoji: "📚",
    url: "",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    (p.name + " " + p.category)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="flex items-center justify-between bg-white p-5 shadow-sm">
        <h1 className="text-xl font-black text-violet-700">
          ✨ Smart AI Tools
        </h1>
        <a href="#shop" className="font-semibold">
          Shop
        </a>
      </header>

      <section className="bg-gradient-to-r from-violet-900 to-indigo-700 px-5 py-20 text-center text-white">
        <h2 className="text-4xl font-black md:text-6xl">
          Digital Products
          <br />
          Made for Creators
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-violet-100">
          Discover digital designs, PNG bundles, templates
          and ebooks for your next creative project.
        </p>
        <a
          href="#shop"
          className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-bold text-violet-800"
        >
          Explore Products
        </a>
      </section>

      <section id="shop" className="mx-auto max-w-6xl p-6 py-12">
        <h2 className="text-3xl font-bold">Our Products</h2>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="mt-5 w-full rounded-xl border p-3"
        />

        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <div className="rounded-xl bg-violet-100 py-8 text-center text-6xl">
                {p.emoji}
              </div>
              <p className="mt-4 text-sm text-violet-700">
                {p.category}
              </p>
              <h3 className="mt-2 font-bold">{p.name}</h3>
              <p className="mt-3 text-xl font-black">{p.price}</p>

              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block rounded-lg bg-violet-700 p-3 text-center font-bold text-white"
                >
                  Buy Now
                </a>
              ) : (
                <p className="mt-4 text-sm text-slate-500">
                  Coming soon
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-slate-900 p-6 text-center text-white">
        © {new Date().getFullYear()} Smart AI Tools
        <p className="mt-2 text-sm text-slate-300">
          Create with AI. Sell Worldwide.
        </p>
      </footer>
    </main>
  );
    }
                  
