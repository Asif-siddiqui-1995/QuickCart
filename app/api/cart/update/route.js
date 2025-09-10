import connectDb from "@/config/db";
import User from "@/models/user";
import {getAuth} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";

export async function POST(request) {
    try {
        const {userId} = getAuth(request);
        console.log("🟢 Clerk userId:", userId);

        const {cartData} = await request.json();
        console.log("🟢 Cart Data received:", cartData);

        await connectDb();
        const user = await User.findById(userId);
        console.log("🟢 Found user:", user);

        user.cartItems = cartData;
        await user.save();
        return NextResponse.json({success: true});
    } catch (error) {
        return NextResponse.json({success: false, message: error.message});
    }
}
