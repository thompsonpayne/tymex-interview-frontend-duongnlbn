import data from "@/db.json";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({
            timestamp: new Date().toISOString(),
            data: data.products
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
    }
}
