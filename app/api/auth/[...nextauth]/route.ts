import NextAuth from "next-auth";

// Import your providers here
import { authOptions } from "@/app/lib/authOptions";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };