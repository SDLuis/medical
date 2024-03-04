

import {IconMenu} from "../../components/icons/menu";

export function Header() {
  return (
 <header className="flex pt-6 px-4 md:px-10 items-center md:items-start justify-between w-full lg:fixed lg:z-10 bg-[#DEE9FF]">
      <a href="/" className="pointer-events-none">
        <div className="flex flex-row gap-2 items-center">
        <img
          className="max-h-14 pointer-events-auto"
          width={'auto'}
          src='./header-img.png'
          alt=""
        />
        <p className="text-2xl pointer-events-auto text-[#199ED3] font-bold">Home Nurses</p>
      </div>
      </a>
      <input type="checkbox" id="menu" hidden className="peer " />
      <label
        htmlFor="menu"
        className="relative z-50 lg:hidden peer-checked:[&>.first]:hidden peer-checked:[&>.last]:block text-blue-800"
      >
        <IconMenu />
      </label>
      <nav className="absolute h-screen lg:h-auto top-0 left-0 right-0 z-40 hidden min-h-screen py-24 bg-white peer-checked:block lg:block lg:static lg:bg-inherit lg:py-0 lg:min-h-0 bg-opacity-40 backdrop-blur-lg lg:backdrop-blur-0">
        <ul className="grid place-items-center lg:flex h-[60%] lg:h-auto lg:items-start lg:flex-row font-semibold tracking-tight text-xl gap-x-8 text-[#199ED3] [&>li>a]:border-b-2 [&>li>a]:border-b-transparent [&>li>a]:transition-all gap-y-4">
          <li className="flex">
            <a href="/" className="relative hover:border-b-[#199ED3]">
              Inicio
            </a>
          </li>
          <li className="relative flex lg:flex-col">
            <a
              href={"/nurses"}
              className="relative hover:border-b-[#199ED3] hover:text-red cursor-pointer"
            >
              Encuentra una enfermera
            </a>
          </li>
          <li className="relative flex lg:flex-col">
            <a
              href={"/aboutUs"}
              className="relative hover:border-b-[#199ED3] hover:text-red cursor-pointer"
            >
              Sobre nosotros
          </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
