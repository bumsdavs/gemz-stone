import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

export default function Header() {
  return (
    <header>
      {/* Top Header */}
      <div className="bg-gray-800 text-white text-sm px-10 py-5">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center flex-wrap sm:flex-nowrap gap-4">
            <div className="flex items-center gap-1 w-full">
              <FaMapMarkerAlt />
              <span>1694 west Glendale Ave apt 161, Phoenix Arizona 8502</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEnvelope />
              <span>susanVincent528@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <IoCallSharp />
              <span>+1-602-456-6066</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b py-4">
        <div className="container mx-auto flex items-center justify-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center flex-col w-full">
              <img
                src="https://i.imgur.com/Dq05efQ.png"
                alt="Gemstone Logo"
                className="h-20"
              />
              <span className="text-lg">Dynamicstradevalue</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
