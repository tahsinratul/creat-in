import ProductCard from "../../components/ProductCard";
import dbConnect from "../../lib/dbConnect";

// Disable caching to always fetch fresh data
export const revalidate = 0;

export default async function ProductsPage() {
  try {
    // Connect to MongoDB and fetch all products
    const productsCollection = await dbConnect("products");
    const products = await productsCollection.find({}).toArray();

    return (
      <section className="py-12 px-4 sm:px-6 md:px-12">
        <div className="w-[85%] mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id.toString()} product={product} />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (err) {
    console.error("MongoDB fetch error:", err);
    return (
      <p className="text-center mt-20 text-red-600 font-bold">
        Failed to load products. Please check MongoDB connection.
      </p>
    );
  }
}
