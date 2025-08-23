import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-black rounded-xl overflow-hidden transform hover:scale-105 transition border">
     <div className="relative w-full h-56 md:h-64 lg:h-72 bg-white flex items-center justify-center overflow-hidden rounded-t-xl">
  <Image
    src={product.image}
    alt={product.name || "Product image"}
    fill
    quality={100}
    className="object-contain transition-transform duration-500"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
    priority
  />
</div>
      <div className="p-4">
        <h2 className="font-semibold text-xl text-white">{product.name}</h2>
        <p className="text-white">{product.description}</p>
        <p className="font-bold text-white mt-2">${product.price}</p>
        <Link
          href={`/products/${product._id}`}
          className="inline-block mt-3 px-4 py-2 bg-green-500 text-black rounded-full hover:bg-green-600 transition font-semibold"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
