"use client";
import { useState } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState("/pityparty.jpg");

  const releases = [
    { title: "LOFS030 · Cali Girl For Now – PITY PARTY", img: "/pityparty.jpg" },
    { title: "LOFS029 · e 0 - e 0", img: "/e0.jpg" },
    { title: "LOFS028 · Oshi Moon – rhinestones", img: "/rhinestones.jpg" },
    { title: "LOFS027 · eleu – r u shy or smthn", img: "/eleu.jpg" },
    { title: "LOFS026 · megab0ba – 001", img: "/megab0ba.jpg" },
  ];

  return (
    <main className="bg-white text-gray-700 min-h-screen font-mono flex flex-col justify-center items-center relative">
      <div className="absolute top-8 left-8 text-xs">
        <p>✿ LOFS</p>
        <p>label discography · publishing roster</p>
      </div>

      <div className="text-center">
        <img src="/flower.jpg" alt="flower" className="opacity-10 w-64 mx-auto" />
        <ul className="text-sm mt-4 space-y-1">
          {releases.map((release, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveImage(release.img)}
              className="cursor-pointer hover:opacity-60 transition"
            >
              {release.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute top-20 right-20 text-right">
        <img src={activeImage} alt="release cover" className="w-48 rounded-lg transition-all duration-300" />
        <a href="#" className="text-xs block mt-1 hover:underline">listen</a>
      </div>
    </main>
  );
}
