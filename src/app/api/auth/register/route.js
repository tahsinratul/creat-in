import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password)
      return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });

    const usersCollection = await dbConnect("users");
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser)
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "User registered", userId: result.insertedId }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Error registering user" }), { status: 500 });
  }
}
