import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/about">To About</Link>
    </div>
  );
};

export default HomePage;
