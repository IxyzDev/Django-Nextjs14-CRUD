import { IoCreate } from "react-icons/io5";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-header-bg-color p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="nav-text">
            <span className="primary-text">Desafío</span>{" "}
            <span className="secondary-text">Practicantes</span>
          </h1>
        </Link>
        <Link href="/create-event">
          <div className="flex items-center cursor-pointer">
            <IoCreate className="text-header-color text-4xl" />
            <span className="nav-text ml-2 text-header-color">
              Crear Evento
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
