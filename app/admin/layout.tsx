import { redirect } from "next/navigation";
import { getAuthFromCookies } from "@/app/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await getAuthFromCookies();

  if (!auth) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>

        <form action="/api/auth/logout" method="post">
          <button className="rounded bg-black px-4 py-2 text-white">
            Logout
          </button>
        </form>
      </header>

      <main>{children}</main>
    </div>
  );
}
