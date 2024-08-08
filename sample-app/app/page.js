import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Test</h1>
      <Link href="/about" className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
