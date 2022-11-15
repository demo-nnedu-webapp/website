import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="bg-blue-500 w-full h-full min-h-screen">
      <h1 className="bg-red-500 p-4 w-full h-full font-montserrat font-bold text-3xl">Welcome to NNEDU</h1>
      <Link to="/about">About</Link>
    </div>
  );
}
