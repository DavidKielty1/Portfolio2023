"use client";
import Image from "next/image";
import { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";

export default function Nav() {
  const [open, setOpen] = useState<boolean>(false);

  function opened() {
    setOpen(true);
    console.log("opened");
  }

  return (
    <nav className=" flex justify-center z-50 text-slate-600/80 w-screen fixed">
      <div className="flex justify-between w-screen 2xl:max-w-screen-3xl py-4 mx-10 tracking-wide text-2xl font-worksans font-medium">
        <div className="text-start">
          <a href="#home">DAVID KIELTY</a>
        </div>
        <div className="justify-end gap-4 hidden xl:flex">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
        <div className="flex items-center xl:hidden">
          <button
            onClick={opened}
            aria-expanded={open}
            aria-controls="sidebar"
            aria-label="Open Menu"
          >
            <Image
              className="block xl:hidden"
              src="/icon-menu.svg"
              alt="Menu"
              width={28}
              height={28}
            />
          </button>
          <div>
            <Transition show={open}>
              {/* Sliding sidebar */}
              <Transition.Child
                className="fixed right-0 top-0 w-[250px] z-30 h-screen"
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div
                  id="sidebar"
                  className={`fixed right-0 top-0 w-[250px] h-screen bg-slate-300/30  pt-20  z-50 backdrop-blur-md bg-opacity-95 text-white `}
                >
                  <div className="flex justify-center">
                    <button
                      onClick={() => setOpen(false)}
                      aria-expanded={open}
                      aria-controls="sidebar"
                      className="justify-center  text-3xl py-4 hover:bg-slate-300/20 w-full font-raleway"
                    >
                      X
                    </button>
                  </div>
                  <ul className="flex flex-col  font-worksans justify-center">
                    <li className="py-4 w-full hover:bg-slate-300/20 justify-center flex">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="text-center font-medium flex items-center  hover:text-slate-200">
                              <a href="#home" className="text-2xl ">
                                Home
                              </a>
                            </Disclosure.Button>
                          </>
                        )}
                      </Disclosure>
                    </li>
                    <li className="py-4 w-full hover:bg-slate-300/20 justify-center flex">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="text-center font-medium flex items-center  hover:text-slate-200">
                              <a href="#projects" className="text-2xl ">
                                Projects
                              </a>
                            </Disclosure.Button>
                          </>
                        )}
                      </Disclosure>
                    </li>
                    <li className="py-4 w-full hover:bg-slate-300/20 flex justify-center">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="text-center flex items-center  hover:text-slate-200">
                              <a
                                href="#about"
                                className="font-medium text-2xl "
                              >
                                About
                              </a>
                            </Disclosure.Button>
                          </>
                        )}
                      </Disclosure>
                    </li>
                  </ul>
                </div>
                {/* ... */}
              </Transition.Child>
              <Transition.Child
                enter="transition-opacity ease-linear duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {/* ... */}
                <div
                  onClick={() => setOpen(false)}
                  className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}
                ></div>
              </Transition.Child>
            </Transition>
          </div>
        </div>
      </div>
    </nav>
  );
}
