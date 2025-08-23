// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/dbConnect";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const productsCollection = await dbConnect("products");

//     const result = await productsCollection.insertOne(body);

//     return NextResponse.json({ success: true, data: result });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }
// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const productsCollection = dbConnect("products");
//     const result = await productsCollection.insertOne(body);
//     return NextResponse.json({ success: true, data: result });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      category,
      name,
      brand,
      price,
      stock,
      img,
      quantity = 0,
      description,
      ratings = 0,
      ratingsCount = 0,
    } = body || {};

    if (!category || !name || !brand || !price || !stock || !img || !description) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const doc = {
      category,
      name,
      brand,
      price: Number(price),
      stock: Number(stock),
      img,
      quantity: Number(quantity ?? 0),
      description,
      ratings: Number(ratings ?? 0),
      ratingsCount: Number(ratingsCount ?? 0),
      createdAt: new Date(),
    };

    const productsCollection = dbConnect("products");
    const result = await productsCollection.insertOne(doc);

    return NextResponse.json(
      { success: true, _id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

