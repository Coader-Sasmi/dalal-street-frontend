"use client";
import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#1f2023] text-gray-300 text-sm py-10">
      <div className="main-container flex flex-col gap-5">
            {/* Logo */}
          <div className=" flex items-center">
          <Image
            src="/main_logo.png"
            alt="Dalal Street Logo"
            width={200} // approximate width
            height={60} // approximate height
            className="h-auto md:w-[8%] w-[24%]"
            priority
          />

          </div>
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* Logo & Newsletter */}
        <div className="col-span-4">
          <h2 className="text-white text-2xl font-semibold mb-3">
            Subscribe to our newsletters
          </h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md focus:outline-none text-gray-900 bg-white"
            />
            <button className="bg-[#bd3f41] hover:bg-[#bd3f41]/90 cursor-pointer text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>

        {/* Company */}
        <div className="col-span-2">
          <h3 className="font-semibold text-white mb-5">Company</h3>
          <ul className="space-y-2 ">
            <li><a href="#" className="text-[0.8rem]">About</a></li>
            <li><Link href="service" className="text-[0.8rem]">Services</Link></li>
            <li><a href="#" className="text-[0.8rem]">Careers</a></li>
            <li><a href="#" className="text-[0.8rem]">Investor Charter</a></li>
            <li><a href="#" className="text-[0.8rem]">Premium Service</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="col-span-2">
          <h3 className="font-semibold text-white mb-5">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-[0.8rem]">Insights</a></li>
            <li><a href="#" className="text-[0.8rem]">Credit Research</a></li>
            <li><a href="#" className="text-[0.8rem]">Stocks</a></li>
            <li><a href="#" className="text-[0.8rem]">Calculators</a></li>
            <li><a href="#" className="text-[0.8rem]">Tools</a></li>
          </ul>
        </div>

        {/* Register */}
        <div className="col-span-2">
          <h3 className="font-semibold text-white mb-5">Register</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-[0.8rem]">Free Trial</a></li>
            <li><a href="#" className="text-[0.8rem]">Log In</a></li>
            <li><a href="#" className="text-[0.8rem]">Contact Us</a></li>
          </ul>
        </div>

        {/* Fine Print */}
        <div className="col-span-2">
          <h3 className="font-semibold text-white mb-5">Fine Print</h3>
          <ul className="space-y-2">
            <li><Link href="privacy" className="text-[0.8rem]">Privacy Policy</Link></li>
            <li><Link href="terms" className="text-[0.8rem]">Terms & Conditions</Link></li>
            <li><a href="#" className="text-[0.8rem]">Disclaimer</a></li>
            <li><a href="#" className="text-[0.8rem]">Grievance Redressal Process</a></li>
            <li><Link href="refund" className="text-[0.8rem]">Refund Policy</Link></li>
            <li><a href="#" className="text-[0.8rem]">Client Acceptance</a></li>
            <li><a href="#" className="text-[0.8rem]">User Agreement</a></li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-5">
        <div className="col-span-4">
            <p className="text-xl font-semibold text-white">
            Download the app to get started<br/> and stay informed on the go.
          </p>
          <div className="flex gap-3 mt-3">
          <Image
            src="/Google_Play_Store.svg"
            alt="Google Play"
            width={130}
            height={40}
            className="h-10"
          />

        <Image
          src="/app-store.svg"
          alt="App Store"
          width={130}
          height={40}
          className="h-10"
        />

          </div> 
        </div>
          <div className="col-span-4">
          <h3 className="font-semibold text-white mb-5">Stock Market Research</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-[0.8rem]">Beginner</a></li>
            <li><a href="#" className="text-[0.8rem]">Professional</a></li>
            <li><a href="#" className="text-[0.8rem]">Business Owners</a></li>
            <li><a href="#" className="text-[0.8rem]">Low Risk Investors</a></li>
          </ul>
        </div>

      {/* Social Media */}
      <div className="col-span-4 flex gap-4 md:justify-end justify-center items-end text-3xl text-white">
        <FaFacebookF className="border p-1 rounded-full cursor-pointer" />
        <FaInstagram className="border p-1 rounded-full cursor-pointer" />
        <IoLogoTwitter className="border p-1 rounded-full cursor-pointer" />
        <FaLinkedinIn className="border p-1 rounded-full cursor-pointer" />
        <FaTelegramPlane className="border p-1 rounded-full cursor-pointer" />
      </div>
      </div>

      {/* Divider */}
      <hr className="border-white" />

      {/* Bottom Section */}
      <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="">
          <h3 className="font-semibold text-white mb-5">
            SEBI Registration Details:
          </h3>
          <div className="flex flex-col gap-1">

          <p className="text-[0.8rem]">Name: Dalal Street Private Limited</p>
          <p className="text-[0.8rem]">Type: Non-Individual</p>
          {/* <p className="text-[0.8rem]">Reg. No: INH0000000</p>
          <p className="text-[0.8rem]">Validity: Perpetual</p>
          <p className="text-[0.8rem]">BSE Enlistment No: 1234</p> */}
          </div>

        </div>
        <div>
          <h3 className="font-semibold text-white mb-5">
            Company Registration Details:
          </h3>
          <div className="flex flex-col gap-1">

          <p className="text-[0.8rem]">Name: Dalal Street Private Limited</p>
          <p className="text-[0.8rem]">{`Address: SEBI Bhavan, Plot No.C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (East), Mumbai - 400051, Maharashtra.`}</p>
          <p className="text-[0.8rem]">Tel: +91-9148638118</p>
          <p className="text-[0.8rem]">Email: research@thedalastreethub.com</p>
          {/* <p className="text-[0.8rem]">CIN: U12345KA2025PTC123456</p> */}
          {/* <p className="text-[0.8rem]">GST: 29ABCDE1234F1Z0</p> */}
          </div>

        </div>
        <div>
          <h3 className="font-semibold text-white mb-5">
            Bank Account Details:
          </h3>
          <div className="flex flex-col gap-1">

          <p className="text-[0.8rem]">Name: Veergond Naik</p>
          <p className="text-[0.8rem]">Bank: ICICI Bank</p>
          <p className="text-[0.8rem]">AC No: 232201507172</p>
          <p className="text-[0.8rem]">IFSC: ICIC0002322</p>
          <p className="text-[0.8rem]">UPI ID: veergondnaik@okicici</p>
          </div>

        </div>
        <div>
          <h3 className="font-semibold text-white mb-5">SEBI Local Office:</h3>
          <div className="flex flex-col gap-1">

          <p className="text-[0.8rem]">Address: 19 FLOOR, PK TOWER, DALAL STREET, MUMBAI 400001 Maharashtra India</p>
          <p className="text-[0.8rem]">Tel: +91-9148638118</p>
          </div>

        </div>
        <div>
          <h3 className="font-semibold text-white mb-5">Compliance Officer:</h3>
          <div className="flex flex-col gap-1">

          <p className="text-[0.8rem]">Name: Mr Santosh Veergond naik</p>
          <p className="text-[0.8rem]">Email: compliance@thedalastreethub.com</p>
          <p className="text-[0.8rem]">Tel: +91-9148638118</p>
          </div>

        </div>
      </div>

      {/* Divider */}
      <hr className="border-white" />

      {/* Copyright */}
      <div className="py-4 flex md:flex-row flex-col items-center gap-3 justify-between text-white text-sm">
        <p>All Rights Reserved | © Copyright {new Date().getFullYear()}</p>
          <Link href="privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="terms" className="hover:text-white">Terms of Use</Link>
      </div>

      {/* Divider */}
      <hr className="border-white" />

      {/* Disclaimer */}
      <div className="pb-8 text-white text-xs">
        <p>
          Disclaimer: <br/>Investments in the securities market are subject to market
          risks. Read all related documents carefully before investing.<br/>
          Registration granted by SEBI, certification from NISM, and membership
          from BASL does not guarantee the intermediary’s performance or provide
          any assurance of returns to investors.
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
