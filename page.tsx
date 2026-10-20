import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">
          Digital downloads and creative tools
        </p>

        <h1>Welcome to Smart AI Tools</h1>

        <p className="muted">
          Discover digital designs, PNG bundles,
          ebooks, templates, and useful AI tools.
        </p>

        <p>
          <a className="button" href="/products">
            Explore Products
          </a>{" "}
          <a className="button secondary" href="/tools">
            Try AI Tools
          </a>
        </p>
      </section>

      <h2>Featured Products</h2>

      <section className="grid">
        {products.map((product) => (
          <article className="card" key={product.slug}>
            <p className="eyebrow">{product.category}</p>
            <h3>{product.name}</h3>
            <p className="muted">{product.description}</p>
            <p className="price">{product.price}</p>

            <a
              className="button"
              href={`/products/${product.slug}`}
            >
              View Product
            </a>
          </article>
        ))}
      </section>
    </>
  );
    }
