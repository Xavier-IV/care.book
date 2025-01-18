import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware({
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: ["/", "/student/:path*"],
  },
});

export const config = { matcher: ["/", "/home/:path*"] };
