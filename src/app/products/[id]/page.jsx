import { ObjectId } from "mongodb";
import dbConnect from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetails({ params }) {
  const products = await dbConnect("products");
  const product = await products.findOne({ _id: new ObjectId(params.id) });

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-red-600 font-semibold">Product not found.</p>
        <Link href="/products" className="inline-block mt-4 underline">
          ← Back to products
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
        {/* Left: Image */}
        <div className="relative w-full aspect-[4/3] md:aspect-[5/6] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name || "Product image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl md:text-3xl font-extrabold text-green-600">
              ${product.price}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/products"
              className="px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition"
            >
              Back to Products
            </Link>
          </div>

          {/* Optional: small stats / details */}
          <ul className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <li className="bg-gray-50 rounded-lg p-3">Fast shipping</li>
            <li className="bg-gray-50 rounded-lg p-3">Secure checkout</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
