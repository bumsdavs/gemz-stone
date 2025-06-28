export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-bold">VINCENT AND CO plc.</h2>
        <p className="text-sm md:text-base">
          Dealers in all kinds of gemstone, raw golds, antiques, turquoise and all kinds of fashion designs.
        </p>
        <p className="text-sm md:text-base">C.E.O: Susan Brenda Vincent</p>
        <p className="text-xs text-gray-400 mt-4">&copy; {new Date().getFullYear()} VINCENT AND CO plc. All rights reserved.</p>
      </div>
    </footer>
  );
}
