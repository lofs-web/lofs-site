"use client";
import { useState, useEffect } from "react";

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
    { title: "LOFS022 · Jamie Genome - Not Quite", img: "/COVER PROJECT 7 BRIGHTER JPEG.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=399362207/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://jamiegenome.bandcamp.com/album/not-quite">Not Quite by Jamie Genome</a></iframe>' },
    { title: "LOFS021 · Olson - Diegesis", img: "/Diegesis Cover.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2123132406/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://olson.bandcamp.com/album/diegesis">Diegesis by Olson</a></iframe>' },
    { title: "LOFS020 · Number One - Solar Breath", img: "/solar breath cover.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1730995778/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://number-one.bandcamp.com/album/solar-breath">Solar Breath by Number One</a></iframe>' },
    { title: "LOFS019 · Yilan - Baraka Baile", img: "/YilanCover.v3.19.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3372038372/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://lofs.bandcamp.com/album/baraka-baile">Baraka Baile by Yilan</a></iframe>' },
    { title: "LOFS018 · Oshi Moon - CATFLAP", img: "/FINAL CATFLAP COVER .jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2207536627/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://oshimoon.bandcamp.com/album/catflap">CATFLAP by Oshi Moon</a></iframe>' },
    { title: "LOFS017 · FLOCO - Like the soil", img: "/COVER REALLY SMALL.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2512586847/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://flocouniverse.bandcamp.com/album/like-the-soil">Like the soil by FLOCO</a></iframe>' },
    { title: "LOFS016 · Chud God & 96 Back - Burn Tool (96 Back’s Scorched Earth Reburn)", img: "/FINAL REMIX COVER.png", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1575541151/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://96back1.bandcamp.com/track/burn-tool-96-back-s-scorched-earth-reburn">Burn Tool (96 Back’s Scorched Earth Reburn) by Chud God &amp; 96 Back</a></iframe>' },
    { title: "LOFS015 · Number One - The Star", img: "/FINLA V2.png", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=85280984/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://number-one.bandcamp.com/album/the-star">The Star by Number One</a></iframe>' },
    { title: "LOFS014 · eleu - Dolce Cabana", img: "/Dolce FINAL COVER BANDCAMP.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=2735137211/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://eleu.bandcamp.com/track/dolce-cabana">Dolce Cabana by eleu</a></iframe>' },
    { title: "LOFS013 · Olson - Overlapping Shadows", img: "/OS FINAL COVER SMALL BANDCAMP.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2569098894/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://olson.bandcamp.com/album/overlapping-shadows">Overlapping Shadows by Olson</a></iframe>' },
    { title: "LOFS012 · eleu - SOFT CUTE HARD", img: "/SCH FINAL COVER.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1404255832/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://eleu.bandcamp.com/album/soft-cute-hard">SOFT CUTE HARD by eleu</a></iframe>' },
    { title: "LOFS011 · Number One - BOWCHICKAWOW", img: "/BOWCHICKAWOW 2.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1599040288/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://number-one.bandcamp.com/album/bowchickawow">BOWCHICKAWOW by Number One</a></iframe>' },
    { title: "LOFS010 · The LOFS Megachurch - God Loves Gabber 2", img: "/GLG2 FINAL COVER.png", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1746583162/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://lofs.bandcamp.com/album/god-loves-gabber-2">God Loves Gabber 2 by The LOFS Megachurch</a></iframe>' },
    { title: "LOFS009 · Ancestral Vision - Sidecar Dream Session", img: "/Sidecardreamsession117.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1683837324/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://ancestralvisi0n.bandcamp.com/album/sidecar-dream-session">Sidecar Dream Session by Ancestral Vision</a></iframe>' },
    { title: "LOFS008 · x u - Drink all your favourite drinks to full on Yizhong Street", img: "/x u EPM COVER.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1996779836/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://lofs.bandcamp.com/track/drink-all-your-favourite-drinks-to-full-on-yizhong-street">Drink all your favourite drinks to full on Yizhong Street by x u</a></iframe>' },
    { title: "LOFS007 · Renslink - Pull On", img: "/Renslink EP Cover.jpeg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3056036308/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://renslink.bandcamp.com/album/pull-on">Pull On by Renslink</a></iframe>' },
    { title: "LOFS006 · Number One - Dedication", img: "/Dedication EP Cover.png", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2764773825/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://number-one.bandcamp.com/album/dedication">Dedication by Number One</a></iframe>' },
    { title: "LOFS005 · Olson - Halogen", img: "/OlsonCover.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3491184767/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://olson.bandcamp.com/album/halogen">Halogen by Olson</a></iframe>' },
    { title: "LOFS004 · Oshi Moon - cyber_crush", img: "/CC FINAL COVER BANDCAMP.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1109250630/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://oshimoon.bandcamp.com/album/cyber-crush">cyber_crush by Oshi Moon</a></iframe>' },
    { title: "LOFS003 · Ziyiz - Spells", img: "/Spells FINAL COVER.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=229374855/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://lofs.bandcamp.com/album/spells">Spells by Ziyiz</a></iframe>' },
    { title: "LOFS002 · Chud God - Chud Tools", img: "/Chud toolsEPM COVER.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4224251050/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://lofs.bandcamp.com/album/chud-tools">Chud Tools by Chud God</a></iframe>' },
    { title: "LOFS001 · Mike Drones - 3D EP", img: "/MIKE DRONES EPM COVER.jpg", embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2658570006/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://lofs.bandcamp.com/album/3d-ep">3D EP by Mike Drones</a></iframe>' },
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

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Preload images once
  useEffect(() => {
    const cache = {};
    releases.forEach((release) => {
      const img = new Image();
      img.src = release.img;
      cache[release.img] = img;
    });
    setPreloadedImages(cache);
  }, []); // run only once

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
          <img
            src={activeRelease.img}
            alt={activeRelease.title}
            className="w-full rounded-lg mb-4"
            loading="eager"
          />
          <div dangerouslySetInnerHTML={{ __html: activeRelease.embed }} />
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
