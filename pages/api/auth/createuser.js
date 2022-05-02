import { getSession } from "next-auth/react"

export default async (req, res) => {
const session = await getSession({ req });
console.log(session)
if (session && session.user.roll === "admin") {
	res.send({
    content:
      "This is protected content. You can access this content because you are signed in and you ar admin.",
  })
} else {
	res.send({
    error: "You must be sign in to view the protected content on this page.",
  })
}
}
