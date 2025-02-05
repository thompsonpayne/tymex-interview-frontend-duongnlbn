import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  try {
    console.log({req})
    // const { searchParams } = new URL(req.url);
    // const minAge = searchParams.get("minAge") ? parseInt(searchParams.get("minAge"), 10) : 0;

    const filePath = path.join(process.cwd(), "public", "db.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    // Filter users based on minAge
    // const filteredUsers = users.filter((user: any) => user.age >= minAge);

    return NextResponse.json(data);
  } catch (error) {
    console.error({error})
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}