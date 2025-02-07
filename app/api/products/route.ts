import { NextResponse } from "next/server";
import data from "@/db.json";

export async function GET() {
    try {
        return NextResponse.json({
            timestamp: new Date().toISOString(), // This forces a change every request
            data: data.products
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
    }
}
