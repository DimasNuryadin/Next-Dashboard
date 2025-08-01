export { default } from "next-auth/middleware";
export const config = {
  matcher: [
    // Atur route yang ingin diawasi middleware
    "/dashboard/:path*",
    "/admin/:path*",
    "/user/:path*",
    "/category/:path*",
    "/products/:path*",
    "/banks/:path*",
    "/payments/:path*",
  ],
}