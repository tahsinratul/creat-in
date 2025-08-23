import { ObjectId } from "mongodb";
import dbConnect from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetails({ params }) {
  const products = await dbConnect("products");

  // ✅ Safe check for invalid ObjectId
  if (!ObjectId.isValid(params.id)) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-red-600 font-semibold">Invalid product ID.</p>
        <Link href="/products" className="inline-block mt-4 underline">
          ← Back to products
        </Link>
      </div>
    );
  }

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
    <section className="max-w-7xl mx-auto px-8 py-5  bg-white md:h-[57vh] mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 items-center md:mx-4">
        
        {/* Left: Product Image */}
       <div className="relative rounded-2xl overflow-hidden">
 <Image
  src={product.image}
  alt={product.name || "Product image"}
  width={400} // set to your image's actual width
  height={400} // set height according to aspect ratio
  className="object-cover rounded-2xl transition-transform duration-500"
  quality={100}
  unoptimized
  priority
/>

</div>


        {/* Right: Product Info */}
        <div className="space-y-6 mt-4 md:mt-0">
          {/* Title & Description */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            {product.name}
          </h1>
          <p className="mt-3 text-black leading-relaxed text-base sm:text-lg">
            {product.description}
          </p>

          {/* Price & Stock Badge */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black drop-shadow">
              ${product.price}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <Link
              href="/products"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-green-500 hover:bg-green-600 text-black transition font-semibold w-full sm:w-auto text-center"
            >
              ← Back to Products
            </Link>
          </div>

          {/* Highlights Section */}
          <div className="pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-black mb-3">
              Why choose this product?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-black text-sm">
              <li className="bg-white border rounded-xl p-3 flex items-center gap-2 sm:gap-3">
                🚚 <span>Fast & Free Shipping</span>
              </li>
              <li className="bg-white border rounded-xl p-3 flex items-center gap-2 sm:gap-3">
                🔒 <span>Secure Checkout</span>
              </li>
              <li className="bg- border rounded-xl p-3 flex items-center gap-2 sm:gap-3">
                ⭐ <span>Top Rated Quality</span>
              </li>
              <li className="bg-white border rounded-xl p-3 flex items-center gap-2 sm:gap-3">
                💳 <span>Easy Returns Policy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
