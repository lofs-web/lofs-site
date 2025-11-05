"use client";
import { useState } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState("");
  const [activeBio, setActiveBio] = useState("");
  const [activePlayer, setActivePlayer] = useState(""); // for Bandcamp embed
  const [showReleases, setShowReleases] = useState(false);
  const [showRoster, setShowRoster] = useState(false);

  const releases = [
    {
      title: "LOFS031 · Eye Level, Aria SL, Daniel Ball – eye level are ¡ not ok! ",
      img: "/notok.jpg",
      link: "https://lofs.bandcamp.com/album/eye-level-are-not-ok",
      embed: "<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4044941049/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://lofs.bandcamp.com/album/eye-level-are-not-ok">eye level are ¡ not ok ! by Eye Level, Aria SL, Daniel Bal</a></iframe>",
    },
    {
      title: "LOFS030 · Cali Girl For Now – PITY PARTY",
      img: "/pityparty.jpg",
      link: "https://caligirlfornow.bandcamp.com/album/pity-party",
      embed: "<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4044941049/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://lofs.bandcamp.com/album/eye-level-are-not-ok">eye level are ¡ not ok ! by Eye Level, Aria SL, Daniel Bal</a></iframe>",
    },
    { title: "LOFS029 · e 0 - e 0", img: "/E O FINAL JPEG.jpg", link: "#", embed: "" },
    { title: "LOFS028 · Oshi Moon – rhinestones", img: "/rhinestones.jpg", link: "#", embed: "" },
    { title: "LOFS027 · eleu – r u shy or smthn", img: "/r u FINAL COVER.jpg", link: "#", embed: "" },
    { title: "LOFS026 · mega:oba – 001", img: "/001 FINAL COVER.jpg", link: "#", embed: "" },
    // ... other releases unchanged
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
            setActivePlayer("");
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
              setActivePlayer("");
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
              setActivePlayer("");
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

      {/* Scrollable releases */}
      {showReleases && (
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[40rem] max-h-[9rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400/0 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/50 scroll-smooth">
          <ul className="text-center text-sm space-y-1">
            {releases.map((release, index) => (
              <li
                key={index}
                onMouseEnter={() => {
                  setActiveImage(release.img);
                  setActiveBio("");
                  setActivePlayer("");
                }}
                className="cursor-pointer hover:opacity-60 transition whitespace-nowrap"
              >
                {release.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Non-scrollable roster */}
      {showRoster && (
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[40rem]">
          <ul className="text-center text-sm space-y-1">
            {roster.map((member, index) => (
              <li
                key={index}
                onMouseEnter={() => {
                  setActiveImage(member.img);
                  setActiveBio(member.bio);
                  setActivePlayer("");
                }}
                className="cursor-pointer hover:opacity-60 transition whitespace-nowrap"
              >
                {member.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Active image, bio, links, Bandcamp player */}
      {activeImage && (showReleases || showRoster) && (
        <div className="absolute top-20 right-20 text-right max-w-xs">
          <img
            src={activeImage}
            alt="cover"
            className="w-72 rounded-lg transition-all duration-300"
          />
          {activeBio && <p className="mt-2 text-xs">{activeBio}</p>}

          {showReleases && (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const current = releases.find(r => r.img === activeImage);
                setActivePlayer(activePlayer === current.embed ? "" : current.embed);
              }}
              className="text-xs block mt-1 hover:underline"
            >
              listen
            </a>
          )}

          {showRoster && (
            <>
              <a href="#" className="text-xs block mt-1 hover:underline">
                more
              </a>
              <a
                href="mailto:lofspublishing@gmail.com"
                className="text-xs block mt-1 hover:underline"
              >
                contact
              </a>
            </>
          )}

          {/* Bandcamp Embed */}
          {activePlayer && (
            <iframe
              style={{ border: 0, width: "100%", height: "120px", marginTop: "0.5rem" }}
              src={activePlayer}
              seamless
            ></iframe>
          )}
        </div>
      )}
    </main>
  );
}
