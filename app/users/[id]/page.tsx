import React from "react";
interface Props {
  params: { id: number };
}

function UserDetailsPage({ params: { id } }: Props) {
  return <div>UserDetailsPage {id}</div>;
}

export default UserDetailsPage;
