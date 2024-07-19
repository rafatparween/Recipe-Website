import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/carts">
        Cart
      </Link>
    </nav>
  );
};

export default Navbar;
