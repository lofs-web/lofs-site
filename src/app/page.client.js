"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState("");
  const [activePlayer, setActivePlayer] = useState("");
  const [showReleases, setShowReleases] = useState(false);

  const releases = [
    { title: "LOFS031 · Eye Level, Aria SL, Daniel Ball – eye level are ¡ not ok!", img: "/notok.jpg", embed: `<iframe style="border:0; width:100%; height:120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4044941049/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href='https://lofs.bandcamp.com/album/eye-level-are-not-ok'>eye level are ¡ not ok ! by Eye Level, Aria SL, Daniel Ball</a></iframe>` },
    { title: "LOFS030 · Cali Girl For Now – PITY PARTY", img: "/pityparty.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2262603832/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://caligirlfornow.bandcamp.com/album/pity-party">PITY PARTY by Cali Girl For Now</a></iframe>' },
    { title: "LOFS029 · e O - e O", img: "/E O FINAL JPEG.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1610928897/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://lofs.bandcamp.com/album/e-o">e O by e O</a></iframe>' },
    // … keep rest unchanged
  ];

  useEffect(() => {
    releases.forEach(item => {
      const img = new Image();
      img.src = item.img;
    });
  }, [releases]);

  // detect mobile for tap-based behavior
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <main className="bg-white text-gray-700 min-h-screen font-mono relative overflow-x-hidden">
      
      {/* Top-left menu */}
      <div className="absolute top-8 left-8 text-xs flex flex-col space-y-1 z-20">
        <p
          className="cursor-pointer"
          onClick={() => {
            setShowReleases(false);
            setActiveImage("");
            setActivePlayer("");
          }}
        >
          ✿ LOFS
        </p>

        <p className="cursor-default">
          <span
            className="hover:underline cursor-pointer"
            onMouseEnter={() => !isMobile && setShowReleases(true)}
            onClick={() => isMobile && setShowReleases(!showReleases)}
          >
            label discography
          </span>
        </p>
      </div>

      {/* Flower */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-0">
        <img src="/flower.jpg" alt="flower" className="w-64 max-w-[60vw]" />
      </div>

      {/* Releases list */}
      {showReleases && (
        <div className="absolute md:top-[55%] top-[50%] left-1/2 transform -translate-x-1/2 w-[90vw] md:w-[40rem] max-h-[12rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400/0 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/50 scroll-smooth z-10">
          <ul className="text-center text-sm space-y-1">
            {releases.map((release, index) => (
              <li key={index} className="whitespace-nowrap">
                <span
                  className="cursor-pointer hover:opacity-60 transition"
                  onMouseEnter={() => !isMobile && setActiveImage(release.img)}
                  onClick={() => {
                    if (isMobile) {
                      setActiveImage(release.img);
                      setActivePlayer("");
                    }
                  }}
                >
                  {release.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Active section */}
      {activeImage && showReleases && (
        <div className="absolute top-20 md:right-20 right-1/2 md:translate-x-0 translate-x-1/2 md:text-right text-center max-w-xs w-[80vw] md:w-auto">
          <img
            src={activeImage}
            alt="cover"
            className="w-64 md:w-72 rounded-lg mx-auto md:mx-0 transition-all duration-300"
          />

          {/* Listen button */}
          <button
            onClick={() => {
              const current = releases.find(r => r.img === activeImage);
              setActivePlayer(current?.embed || "");
            }}
            className="text-xs block mt-2 hover:underline cursor-pointer"
          >
            listen
          </button>

          {/* Bandcamp embed */}
          {activePlayer && (
            <div
              className="mt-3 w-full md:w-[18rem] mx-auto md:mx-0"
              dangerouslySetInnerHTML={{ __html: activePlayer }}
            />
          )}
        </div>
      )}
    </main>
  );
}
