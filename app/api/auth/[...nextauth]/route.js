import NextAuth from "next-auth";
import GooglehubProvider from "next-auth/providers/Google";

export const handler = NextAuth({
  providers: [
    GooglehubProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };
