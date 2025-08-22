import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition">
      <div className="relative w-full h-56">
        <Image
          src={product.image}
          alt={product.name || "Product image"}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-xl">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="font-bold text-green-600 mt-2">${product.price}</p>
        <Link
          href={`/products/${product._id}`}
          className="inline-block mt-3 px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600 transition font-semibold"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
