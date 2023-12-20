import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-y-4">
       <h1>Dashboard</h1>
       <UserButton afterSignOutUrl="/sign-in"/>
    </main>
  )
}
