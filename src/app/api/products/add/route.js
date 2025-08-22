import dbConnect from "../../../../lib/dbConnect";

export async function POST(req) {
  const body = await req.json();
  const { name, description, price, image } = body;

  if (!name || !description || !price || !image) {
    return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
  }

  try {
    const productsCollection = await dbConnect("products");
    const result = await productsCollection.insertOne({
      name,
      description,
      price: parseFloat(price),
      image,
    });

    return new Response(JSON.stringify({ message: "Product added", id: result.insertedId }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Failed to add product" }), { status: 500 });
  }
}
