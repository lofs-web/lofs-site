"use client";
import { useState, useEffect, useRef } from "react";

// ---- Releases array moved outside the component to avoid re-render loops ----
const releases = [
  { title: "LOFS031 · Eye Level, Aria SL, Daniel Ball – eye level are ¡ not ok!", img: "/notok.jpg", embed: `<iframe style="border:0; width:100%; height:120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4044941049/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href='https://lofs.bandcamp.com/album/eye-level-are-not-ok'>eye level are ¡ not ok ! by Eye Level, Aria SL, Daniel Ball</a></iframe>` },
  { title: "LOFS030 · Cali Girl For Now – PITY PARTY", img: "/pityparty.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2262603832/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://caligirlfornow.bandcamp.com/album/pity-party">PITY PARTY by Cali Girl For Now</a></iframe>' },
  { title: "LOFS029 · e O - e O", img: "/E O FINAL JPEG.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1610928897/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://lofs.bandcamp.com/album/e-o">e O by e O</a></iframe>' },
  { title: "LOFS028 · Oshi Moon – rhinestones", img: "/rhinestones.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=4028889802/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://oshimoon.bandcamp.com/track/rhinestones">rhinestones by Oshi Moon</a></iframe>' },
  { title: "LOFS027 · eleu – r u shy or smthn", img: "/r u FINAL COVER.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3260262845/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://eleu.bandcamp.com/track/r-u-shy-or-smthn">r u shy or smthn by eleu</a></iframe>' },
  { title: "LOFS026 · mega:oba – 001", img: "/001 FINAL COVER.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1428793710/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://megaoba.bandcamp.com/album/001">001 by mega:oba</a></iframe>' },
  { title: "LOFS025 · Eye Level, Aria SL, Daniel Ball – Eye Level", img: "/EYELEVEL ARTWORK.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2724882092/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://lofs.bandcamp.com/album/eye-level">Eye Level by Eye Level, Aria SL, Daniel Ball</a></iframe>' },
  { title: "LOFS024 · Chud God - CHUD2", img: "/CHUD2COVER.jpeg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=423342926/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://lofs.bandcamp.com/album/chud2">CHUD2 by Chud God</a></iframe>' },
  { title: "LOFS023 · Renslink - In Hope House", img: "/FINAL hopehouse.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=2347743000/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://renslink.bandcamp.com/track/in-hope-house">In Hope House by Renslink</a></iframe>' },
  // ...keep the rest of the releases unchanged
];

export default function Home() {
  const [activeImage, setActiveImage] = useState("");
  const [activeBio, setActiveBio] = useState("");
  const [activePlayer, setActivePlayer] = useState("");
  const [showReleases, setShowReleases] = useState(false);
  const [activeRelease, setActiveRelease] = useState(null); // mobile full-screen release
  const [showMailingList, setShowMailingList] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState({});
  const [mobileActiveImage, setMobileActiveImage] = useState(null);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Preload images once (desktop only)
  useEffect(() => {
    if (!isMobile) {
      const cache = {};
      releases.forEach((release) => {
        const img = new Image();
        img.src = release.img;
        cache[release.img] = img;
      });
      setPreloadedImages(cache);
    }
  }, [isMobile]);

  // Reset mobile image on release change
  useEffect(() => {
    if (isMobile && activeRelease) {
      setMobileActiveImage(null);
    }
  }, [activeRelease, isMobile]);

  const handleSubscribe = async () => {
    if (!email) return;
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccessMessage("Thanks :)");
        setEmail("");
      } else {
        setErrorMessage(data.error || "Could not subscribe");
      }
    } catch {
      setErrorMessage("Network error, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white text-gray-700 min-h-screen font-mono relative">
      {/* Top-left menu */}
      <div className="absolute top-8 left-8 text-xs flex flex-col space-y-1">
        <p
          className="cursor-pointer"
          onClick={() => {
            setShowReleases(false);
            setActiveImage("");
            setActiveBio("");
            setActivePlayer("");
            setActiveRelease(null);
            setShowMailingList(false);
          }}
        >
          ✿ LOFS
        </p>
        <p className="cursor-default">
          <span
            className="hover:underline cursor-pointer"
            onMouseEnter={() => {
              if (!isMobile) {
                setShowReleases(true);
                setShowMailingList(false);
                setActiveImage("");
                setActiveBio("");
                setActivePlayer("");
              }
            }}
            onClick={() => {
              if (isMobile) {
                setShowReleases(true);
                setShowMailingList(false);
              }
            }}
          >
            label discography
          </span>
          <span className="mx-2">·</span>
          <span
            className="hover:underline cursor-pointer"
            onMouseEnter={() => {
              if (!isMobile) {
                setShowMailingList(true);
                setShowReleases(false);
              }
            }}
            onClick={() => {
              if (isMobile) {
                setShowMailingList(true);
                setShowReleases(false);
              }
            }}
          >
            mailing list
          </span>
        </p>
      </div>

      {/* Flower */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
        <img src="/flower.jpg" alt="flower" className="w-64" loading="eager" />
      </div>

      {/* Releases list */}
      {showReleases && (
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[40rem] max-h-[9rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400/0 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/50 scroll-smooth">
          <ul className="text-center text-sm space-y-1">
            {releases.map((release, index) => (
              <li key={index} className="whitespace-nowrap">
                <span
                  className="cursor-pointer hover:opacity-60 transition"
                  onMouseEnter={() => {
                    if (!isMobile) {
                      setActiveImage(release.img);
                      setActivePlayer("");
                    }
                  }}
                  onClick={() => {
                    if (isMobile) {
                      setActiveRelease(release);
                      setShowMailingList(false);
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

      {/* Desktop hover preview */}
      {activeImage && showReleases && !isMobile && (
        <div className="absolute top-20 right-20 text-right max-w-xs">
          <img
            src={activeImage}
            alt="cover"
            className="w-72 rounded-lg transition-all duration-300"
            loading="eager"
          />
          {activeBio && <p className="mt-2 text-xs">{activeBio}</p>}
          <button
            onClick={() => {
              const current = releases.find((r) => r.img === activeImage);
              setActivePlayer(current?.embed || "");
            }}
            className="text-xs block mt-1 hover:underline cursor-pointer"
          >
            listen
          </button>
          {activePlayer && (
            <div className="mt-2" dangerouslySetInnerHTML={{ __html: activePlayer }} />
          )}
        </div>
      )}

      {/* Mailing list box (desktop) */}
      {showMailingList && !isMobile && (
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[28rem] flex flex-col space-y-2">
          <div className="flex space-x-2 items-center">
            <input
              type="email"
              placeholder="email address"
              className="border px-2 py-1 flex-1 rounded text-xs outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-gray-800 text-white px-3 py-1 rounded text-xs"
              onClick={handleSubscribe}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Sign up"}
            </button>
          </div>
          {successMessage && <p className="text-green-600 text-xs">{successMessage}</p>}
          {errorMessage && <p className="text-red-600 text-xs">{errorMessage}</p>}
        </div>
      )}

      {/* Mobile full-screen release */}
      {isMobile && activeRelease && (
        <div className="fixed inset-0 bg-white z-50 p-6 overflow-auto">
          <button
            className="text-xs mb-4 underline"
            onClick={() => setActiveRelease(null)}
          >
            ✕ close
          </button>

          {/* Image appears only after iframe has loaded */}
          {mobileActiveImage && (
            <img
              src={mobileActiveImage}
              alt={activeRelease.title}
              className="w-full rounded-lg mb-4"
              loading="eager"
            />
          )}

          <div
            dangerouslySetInnerHTML={{ __html: activeRelease.embed }}
            onLoad={() => {
              if (isMobile && activeRelease) {
                setMobileActiveImage(activeRelease.img);
              }
            }}
          />
        </div>
      )}

      {/* Mobile mailing list */}
      {isMobile && showMailingList && (
        <div className="fixed inset-0 bg-white z-50 p-6">
          <button
            className="text-xs mb-4 underline"
            onClick={() => setShowMailingList(false)}
          >
            ✕ close
          </button>
          <div className="flex space-x-2 items-center">
            <input
              type="email"
              placeholder="email address"
              className="border px-2 py-1 flex-1 rounded text-xs outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-gray-800 text-white px-3 py-1 rounded text-xs"
              onClick={handleSubscribe}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Sign up"}
            </button>
          </div>
          {successMessage && <p className="text-green-600 text-xs mt-1">{successMessage}</p>}
          {errorMessage && <p className="text-red-600 text-xs mt-1">{errorMessage}</p>}
        </div>
      )}
    </main>
  );
}
