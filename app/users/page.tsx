import Link from "@/node_modules/next/link";
import React from "react";

export interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  await res.json();

  return (
    <div>
      <ul>
        {/* {users &&
          users.map((user: User) => (
         
          ))} */}
        {/* < */}
        <Link href="api/auth/signin">Sign In</Link>
        <Link href="/products?searchQuery=email" className="ml-3">
          Products
        </Link>
      </ul>
    </div>
  );
}

export default Users;
