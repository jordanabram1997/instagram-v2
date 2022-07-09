import Image from "next/image";
import React from "react";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
      {/* Left */}
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
          layout="fill"
          alt="Instagram Logo"
          className="object-contain"
        />
      </div>
      <div className="cursor-pointer h-24 w-10 relative lg:hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"
          layout="fill"
          alt="Instagram Logo"
          className="object-contain"
        />
      </div>

      {/* Middle */}
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <SearchIcon className="h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm rounded-md focus:border-black focus:ring-black"
        />
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center">
        <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
        <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
        <img
          src="https://pbs.twimg.com/profile_images/1522632973299994624/1ZmP8O38_400x400.jpg"
          alt="user-image"
          className="h-10 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
