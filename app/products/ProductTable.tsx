import Link from "@/node_modules/next/link";
import React from "react";
import { sort } from "fast-sort";

interface Props {
  searchQuery: string;
}

interface User {
  id: number;
  body: string;
  title: string;
}

const ProductTable = async ({ searchQuery }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users: User[] = await res.json();
  const sortedUsers = sort(users).asc(
    searchQuery === "email"
      ? (user: User) => user.body
      : (user: User) => user.title
  );

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <Link href="/products?searchQuery=name">
              <th>Name</th>
            </Link>
            <Link href="/products?searchQuery=email">
              <th>Email</th>
            </Link>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user: User) => (
            <tr key={user.id}>
              <td>{user.title}</td>
              <td>{user.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
