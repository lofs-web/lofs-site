"use client";
import { useState } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState("");
  const [activeBio, setActiveBio] = useState("");
  const [showReleases, setShowReleases] = useState(false);
  const [showRoster, setShowRoster] = useState(false);

  const releases = [
    { title: "LOFS031 · Eye Level, Aria SL, Daniel Ball – eye level are ¡ not ok! ", img: "/notok.jpg", link: "https://lofs.bandcamp.com/album/eye-level-are-not-ok" },
    { title: "LOFS030 · Cali Girl For Now – PITY PARTY", img: "/pityparty.jpg", link: "https://caligirlfornow.bandcamp.com/album/pity-party" },
    { title: "LOFS029 · e 0 - e 0", img: "/E O FINAL JPEG.jpg", link: "https://example.com/lofs029" },
    { title: "LOFS028 · Oshi Moon – rhinestones", img: "/rhinestones.jpg", link: "https://example.com/lofs028" },
    { title: "LOFS027 · eleu – r u shy or smthn", img: "/r u FINAL COVER.jpg", link: "https://example.com/lofs027" },
    { title: "LOFS026 · mega:oba – 001", img: "/001 FINAL COVER.jpg", link: "https://example.com/lofs026" },
    { title: "LOFS025 · Eye Level, Aria SL, Daniel Ball – Eye Level", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS024 · Chud God - CHUD2", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS023 · Renslink - In Hope House", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS022 · Jamie Genome - Not Quite", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS021 · Olson - Diegesis", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS020 · Number One - Solar Breath", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS019 · Yilan - Baraka Baile", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS018 · Oshi Moon - CATFLAP", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS017 · FLOCO - Like the soil", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS016 · Chud God & 96 Back - Burn Tool (96 Back’s Scorched Earth Reburn)", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS015 · Number One - The Star", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS014 · eleu - Dolce Cabana", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS013 · Olson - Overlapping Shadows", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS012 · eleu - SOFT CUTE HARD", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS011 · Number One - BOWCHICKAWOW", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS010 · The LOFS Megachurch - God Loves Gabber 2", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS009 · Ancestral Vision - Sidecar Dream Session", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS008 · x u - Drink all your favourite drinks to full on Yizhong Street", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS007 · Renslink - Pull On", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS006 · Number One - Dedication", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS005 · Olson - Halogen", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS004 · Oshi Moon - cyber_crush", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS003 · Ziyiz - Spells", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS002 · Chud God - Chud Tools", img: "/placeholder.jpg", link: "#" },
    { title: "LOFS001 · Mike Drones - 3D EP", img: "/placeholder.jpg", link: "#" },
  ];

  const roster = [
    { name: "Olson", img: "/olson.jpg", bio: "Olson is a Sheffield-based producer and composer whose work drifts between introspective ambient soundscapes and high-velocity club mutations." },
    { name: "Stolen Velour", img: "/stolenvelour.jpg", bio: "Stolen Velour is known for ambient textures..." },
    { name: "FLOCO", img: "/floco.jpg", bio: "FLOCO mixes jazz influences with modern beats..." },
    { name: "Renslink", img: "/renslink.jpg", bio: "Renslink is an electronic musician..." },
    { name: "Daniel Ball", img: "/danielball.jpg", bio: "Daniel Ball is a multi-instrumentalist..." },
    { name: "Jabes", img: "/jabes.jpg", bio: "Jabes blends lo-fi and synth-heavy sounds..." },
    { name: "Ziyiz", img: "/ziyiz.jpg", bio: "Ziyiz focuses on experimental textures..." },
    { name: "Oshi Moon", img: "/oshimoon.jpg", bio: "Oshi Moon combines ethereal vocals with beats..." },
    { name: "Astral Bandit", img: "/astralbandit.jpg", bio: "Astral Bandit creates cinematic soundscapes..." },
  ];

  return (
    <main className="bg-white text-gray-700 min-h-screen font-mono relative">

      {/* Top-left menu */}
      <div className="absolute top-8 left-8 text-xs flex flex-col space-y-1">
        <p
          className="cursor-pointer"
          onClick={() => {
            setShowReleases(false);
            setShowRoster(false);
            setActiveImage("");
            setActiveBio("");
          }}
        >
          ✿ LOFS
        </p>

        <p className="cursor-default">
          <span
            className="hover:underline cursor-pointer"
            onMouseEnter={() => {
              setShowReleases(true);
              setShowRoster(false);
              setActiveImage("");
              setActiveBio("");
            }}
          >
            label discography
          </span>
          {" · "}
          <span
            className="hover:underline cursor-pointer"
            onMouseEnter={() => {
              setShowRoster(true);
              setShowReleases(false);
              setActiveImage("");
              setActiveBio("");
            }}
          >
            publishing roster
          </span>
        </p>
      </div>

      {/* Flower fixed */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
        <img src="/flower.jpg" alt="flower" className="w-64" />
      </div>

      {/* Scrollable releases list with smooth scroll and subtle fade-in scrollbar */}
      {showReleases && (
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[40rem] max-h-[9rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400/0 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/50 scroll-smooth">
          <ul className="text-center text-sm space-y-1">
            {releases.map((release, index) => (
              <li
                key={index}
                onMouseEnter={() => {
                  setActiveImage(release.img);
                  setActiveBio("");
                }}
                className="cursor-pointer hover:opacity-60 transition whitespace-nowrap"
              >
                {release.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Non-scrollable roster list */}
      {showRoster && (
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[40rem]">
          <ul className="text-center text-sm space-y-1">
            {roster.map((member, index) => (
              <li
                key={index}
                onMouseEnter={() => {
                  setActiveImage(member.img);
                  setActiveBio(member.bio);
                }}
                className="cursor-pointer hover:opacity-60 transition whitespace-nowrap"
              >
                {member.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Active image, bio, links */}
      {activeImage && (showReleases || showRoster) && (
        <div className="absolute top-20 right-20 text-right max-w-xs">
          <img
            src={activeImage}
            alt="cover"
            className="w-72 rounded-lg transition-all duration-300"
          />
          {activeBio && <p className="mt-2 text-xs">{activeBio}</p>}
          <a
            href={
              showReleases
                ? releases.find(r => r.img === activeImage)?.link
                : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs block mt-1 hover:underline"
          >
            {showReleases ? "listen" : "more"}
          </a>
          {showRoster && (
            <a
              href="mailto:lofspublishing@gmail.com"
              className="text-xs block mt-1 hover:underline"
            >
              contact
            </a>
          )}
        </div>
      )}

    </main>
  );
}
