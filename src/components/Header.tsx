
"use client";
import Image from "next/image";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import UserForm from "./UserForm";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  return (
    <nav className="w-full shadow-sm bg-[#1f2023] sticky top-0 z-50">
      <div className="main-container py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <Image
            src="/main_logo.png"
            alt="Dalal Street Logo"
            width={260}
            height={60}
            className="h-auto w-[55%]"
            priority
          />
        </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            <Link href="service" className="text-white font-medium text-sm tracking-wider hover:text-gray-300">
              Services
            </Link>
            <Link href="dalalfolios" className="text-white font-medium text-sm tracking-wider hover:text-gray-300">
              Dalal Folios
            </Link>
            {/* <Link href="dalalview" className="text-white font-medium text-sm tracking-wider hover:text-gray-300">
              Dalal View
            </Link> */}
            <button
            onClick={() => setIsOpenLogin(true)}
             className="text-white font-medium text-sm tracking-wider hover:text-gray-300">
              Research Report
            </button>
            </div>
            <div className="hidden md:flex space-x-4 items-center">
            <button
            onClick={() => setIsOpenLogin(true)} className="text-[#bd3f41] hover:text-gray-300 font-semibold">
              Log In
            </button>
            <button 
             onClick={() => setIsOpenForm(true)}
            className="bg-[#bd3f41] text-white px-4 py-3 font-semibold text-xs uppercase rounded-lg hover:bg-[#bd3f41]/90 cursor-pointer transition">
              Register
            </button>
            <Link href="tel:+919148638118" className="phone-btn cursor-pointer">
            <Phone className="w-5 h-5 text-blue-700 phone-icon" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      
      {/* Modal Form */}
      {isOpenForm && (
        <div
          onClick={() => setIsOpenForm(false)}
          className="fixed inset-0 z-[99] flex items-center justify-center bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md relative animate-slide-up"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpenForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-5">
              User Registration
            </h1>

            <UserForm onClose={() => setIsOpenForm(false)} />
          </div>
        </div>
      )}

            {/* Modal Login */}
      {isOpenLogin && (
        <div
          onClick={() => setIsOpenLogin(false)}
          className="fixed inset-0 z-[99] flex items-center justify-center bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md relative animate-slide-up"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpenLogin(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-5">
              {"You are not a paid user. For more information, please contact our support team."}
            </h1>

          </div>
        </div>
      )}

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md absolute top-full left-0 w-full z-50">
          <div className="px-6 py-4 space-y-4">
            <Link href="service" className="block text-gray-800 font-semibold hover:text-gray-300">
              Services
            </Link>
            <Link href="dalalfolios" className="block text-gray-800 font-semibold hover:text-gray-300">
              Dalalfolios
            </Link>
            {/* <Link href="dalalview" className="block text-gray-800 font-semibold hover:text-gray-300">
              Dalalview
            </Link> */}
            <button
            onClick={() => setIsOpenLogin(true)}
             className="block text-gray-800 font-semibold hover:text-gray-300">
              Research Report
            </button>
            <button onClick={() => setIsOpenLogin(true)} className="block text-[#bd3f41] font-semibold hover:text-gray-300">
              Log In
            </button>
            <button
            onClick={() => setIsOpenForm(true)}
             className=" bg-[#bd3f41] text-white px-4 py-3 font-semibold text-sm uppercase rounded-lg hover:bg-[#bd3f41]/90 transition">
              Register
            </button>
            <Link href="tel:+919148638118" className=" flex justify-center bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition w-fit">
              <Phone className="w-6 h-6 text-blue-700 phone-icon" />
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
}
