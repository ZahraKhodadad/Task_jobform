"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HomeIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Fascinate_Inline } from "next/font/google";
const NavBar = () => {
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    if (theme === false) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="fixed top-0 left-0 right-0 shadow-md  shadow-slate-300 text-md  bg-slate-200 text-slate-800 ml-2 mb-4 p-3 dark:bg-slate-500 dark:text-slate-50 text-sm">
      <nav className="flex justify-between items-center">
        <ul className="w-80 flex justify-between items-center ml-2">
          <li>
            <Link href="/"><HomeIcon className="w-6 h-6"/></Link>
          </li>
          <li>
            <Link href="/about-us">درباره ما</Link>
          </li>
          <li>
            <Link href="/contact-us">تماس با ما</Link>
          </li>
        </ul>
        <div className="flex justify-between items-center p-2 ">
          <div
            className="border-1 border-slate-700 bg-slate-100 ml-2 px-2 rounded-xl"
            onClick={() => setTheme((t) => !t)}
          >
            {theme ? (
              <SunIcon className="w-6 h-6  text-yellow-400" />
            ) : (
              <MoonIcon className="w-6 h-6  text-yellow-400" />
            )}
          </div>
          <Link href="/signup">ثبت رزومه</Link><span className="px-2"> / </span><Link href="/signin">ورود</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
