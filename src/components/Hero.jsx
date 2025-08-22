"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-[95%] mx-auto h-[50vh] sm:h-[90vh] overflow-hidden rounded-2xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/Gym.jpg"
          alt="Gym Background"
          fill
          priority
          className="w-full h-full object-center object-cover sm:object-center md:object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 container">
        <div className="max-w-2xl">
          {/* Big Overlay Word */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white/20 leading-none">
            CREAT-IN
          </h1>

          {/* Main Title */}
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-5xl font-extrabold text-white">
            FITNESS <span className="text-green-500">PRODUCTS</span> <br />
            FOR MUSCLES
          </h2>

          {/* Subtitle */}
          <p className="mt-3 sm:ml-0 sm:mt-4 text-sm sm:text-base md:text-lg text-white leading-relaxed bg-black/30 backdrop-blur-xl py-2 sm:py-4 rounded-2xl">
            Fuel your workouts with creatine. Train harder, recover faster, and build real strength. Take your fitness to the next level.
          </p>

          {/* CTA Button */}
          <Link
            href="/products"
            className="mt-3 sm:mt-4 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-green-500 hover:bg-green-600 text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-lg transition"
          >
            Get Products
          </Link>

          {/* Stats */}
          <div className="flex sm:flex-row gap-4 sm:gap-8 md:gap-12 mt-4 sm:mt-6">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">4.9</p>
              <p className="text-gray-300 text-xs sm:text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">20K</p>
              <p className="text-gray-300 text-xs sm:text-sm">Members Transformed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
