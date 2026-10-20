export type Product = {
  slug: string;
  name: string;
  description: string;
  price: string;
  category: string;
  checkoutUrl: string;
};

export const products: Product[] = [
  {
    slug: "mama-png-bundle",
    name: "Mama PNG Design",
    description: "Digital PNG design download.",
    price: "$3.00",
    category: "PNG Designs",
    checkoutUrl:
      "https://mstsabinakhatun.gumroad.com/l/szwmr",
  },
  {
    slug: "tshirt-graphics",
    name: "T-Shirt Graphics",
    description: "Creative digital T-shirt graphics.",
    price: "$4.00",
    category: "Designs",
    checkoutUrl:
      "https://mstsabinakhatun.gumroad.com/l/szwmr",
  },
  {
    slug: "kids-story-ebook",
    name: "Kids Story eBook",
    description: "A digital children's storybook.",
    price: "$3.00",
    category: "eBooks",
    checkoutUrl:
      "https://mstsabinakhatun.gumroad.com/l/szwmr",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
