import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-5 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold">My Portfolio</h1>
      <nav className="mt-4">
        <Link href="#about"><a className="mr-4">About</a></Link>
        <Link href="#projects"><a className="mr-4">Projects</a></Link>
        <Link href="#technologies"><a className="mr-4">Technologies</a></Link>
        <Link href="#contact"><a>Contact</a></Link>
      </nav>
    </header>
  );
};

export default Header;
