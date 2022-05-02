import SequelizeAdapter, { models } from "@next-auth/sequelize-adapter"
import Sequelize, { DataTypes } from "sequelize"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";

const sequelize = new Sequelize(process.env.COCKROACH_ALT_URI)

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET
    }),
    
  ],

  adapter: SequelizeAdapter(sequelize, {
    models: {
      User: sequelize.define("user", {
        ...models.User,
        role: {
          type: DataTypes.STRING,
          defaultValue: "guest"
        },
        phoneNumber: DataTypes.STRING,
      })
    }
  }),
  callbacks:{
    async session({ session, token, user }){
      console.log("session", session)
      console.log("token", token)
      console.log("user", user)
      // if (user.email === process.env.NEXT_PRIVATE_ADMIN_EMAIL_ONE || user.email === process.env.NEXT_PRIVATE_ADMIN_EMAIL_TWO){
      const isAdminCheck = (process.env.NEXT_PRIVATE_ADMIN_EMAIL_ONE === user.email || process.env.NEXT_PRIVATE_ADMIN_EMAIL_TWO === user.email)
      if (isAdminCheck){
        user.roll = "admin"
        console.log("admin logged in")
        console.log(isAdminCheck)
      }
      session.user.roll = user.roll;
      session.user.phoneNumber = user.phoneNumber;
      return session;
    }
  }
})


