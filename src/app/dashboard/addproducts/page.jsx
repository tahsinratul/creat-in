"use client";

import { useState } from "react";

export default function AddProduct() {
  const [form, setForm] = useState({ name: "", description: "", price: "", image: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Product added successfully!");
        setForm({ name: "", description: "", price: "", image: "" });
      } else {
        setMessage(data.message || "Failed to add product");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error adding product");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
        {message && <p className="text-center mt-2">{message}</p>}
      </form>
    </div>
  );
}
