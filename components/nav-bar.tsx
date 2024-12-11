import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/lib/auth";

export async function NavBar() {
  const session = await auth();

  return (
    <nav className="bg-white w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                My App
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {session ? (
              <>
                <span className="mr-4">Welcome, {session.user?.email}</span>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <Button variant="outline" type="submit">
                    Logout
                  </Button>
                </form>
              </>
            ) : (
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
