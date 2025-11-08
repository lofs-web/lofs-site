"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState("");
  const [activeBio, setActiveBio] = useState("");
  const [activePlayer, setActivePlayer] = useState("");
  const [showReleases, setShowReleases] = useState(false);
  const [showRoster, setShowRoster] = useState(false);

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

  const roster = [
    { 
      name: "Daniel Ball", 
      img: "/danielball.jpg", 
      bio: "Daniel Ball is a producer, DJ and multidisciplinary artist. Spanning commissioned composition for fashion and film, hyperactive dance pop with collaborators Elphi and Aria SL, and open format music research with project ending summers, his music is characterised by an early background in jazz and classical followed by a strong shift towards modern electronic production. Recent production work includes a score Yenesai’s SS25 runway show at the Palais De Tokyo (alongside longtime collaborator Aria SL) and Elphi’s ‘Lullaby’, alongside research into the affective nature of bass music through ending summers, and facilitating a non-profit recording studio for upcoming musicians at The Bath House community centre in Hackney Wick.",
      link: "https://www.instagram.com/__danielball__/"
    },
    { name: "FLOCO", img: "/floco.png", bio: "Singer, producer and violinist FLOCO inhabits a world between the old and the new. Weaving remnants of her musical upbringing on English folk music through live electronics and experimental production, FLOCO explores the more abstract lands of Cyberfolk and Dream Pop. ", link: "https://www.instagram.com/floco_rj/" },
    { name: "Halden Cooke", img: "/astralhalden.jpg", bio: "Astral Bandit crafts immersive sonic worlds that stretch between dreamlike introspection and kinetic dancefloor energy.  A core member of bands The Long Faces and Sons of Ivaldi with experimental and art folk touches, Astral Bandit is also drawn to the faster subgenres of techno and trance, they’ve shaped a signature sound defined by hypnotic pulses, shadowy textures, and unexpected twists at every turn.", link: "https://www.instagram.com/astral.bandit/" },
    { name: "Jabes", img: "/jabes copy.jpg", bio: "Jabes is a London-based composer and producer known for sculpting immersive, high-tension sound worlds that bridge experimental electronic music and cinematic design. With a background in UK club culture and a focus on sonic detail, his work is equally at home on the dancefloor or the screen.", link: "https://www.instagram.com/j.abes_/" },
    { name: "Olson", img: "/olson.jpg", bio: "Olson is a Sheffield-based producer and composer whose work drifts between introspective ambient soundscapes and high-velocity club mutations. Since 2023, he has been releasing a series of immersive projects via the LOFS label -  a diverse body of work, covering every shade of the ambient spectrum. Through heavy sample manipulation and synthesis, Olson creates vivid textural worlds - auditory myths that evoke something ambiguous yet ultimately peaceful and sincere. ", link: "https://www.instagram.com/olson_fus/" },
    { name: "Oshi Moon", img: "/jabes c.jpg", bio: " Underground Pop star Oshi Moon is obsessed with exploring duality through their art, treading the knife's edge of digital and analogue, hard and soft, masculine and feminine. Piecing together discarded fragments of the net, Oshi wields multiple creative disciplines to manifest his latest project CATFLAP.", link: "https://www.instagram.com/oshi_moon/" },
    { name: "Renslink", img: "/renslink3000.jpg", bio: "Renslink is an Electronic music producer and live performer based in Manchester UK. He cultivates a unique sound through deep experimentation and exploration of new and interesting ideas, pushing the boundaries of every corner of electronic music from Ambient to Club.", link: "https://www.instagram.com/renslink/" },
    { name: "Stolen Velour", img: "/jonas.png", bio: "Stolen Velour is a Leeds-based experimental club producer and vocalist whose music fuses glitch-inspired sound design, UK-funky rhythms, hyperpop energy, and euphoric club beats to create immersive, visceral electronic tracks. With collaborations like Cali Girl For Now, he blends pop sensibilities, nostalgic lo-fi textures, and post-internet experimentalism.", link: "https://www.instagram.com/stolenvelour__/" },
    { name: "Ziyiz", img: "/ZiyizPress 2.jpg", bio: "Ziyiz is a Leeds-based composer and sound artist whose work blends experimental electronics, ambient abstraction, and corrupted, immerseive techno. Drawing on generative processes, AI, and speculative design, their music constructs fractured sonic worlds where memory, artifact, and signal loss converge.", link: "https://www.instagram.com/ziyiziyiziyiz/" },
  ];

  // Preload all release and roster images
useEffect(() => {
  [...releases, ...roster].forEach(item => {
    const img = new Image();
    img.src = item.img;
  });
}, [releases, roster]);


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

      {/* Flower */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
        <img src="/flower.jpg" alt="flower" className="w-64" />
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
                    setActiveImage(release.img);
                    setActiveBio("");
                    setActivePlayer("");
                  }}
                >
                  {release.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Roster list */}
      {showRoster && (
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[40rem]">
          <ul className="text-center text-sm space-y-1">
            {roster.map((member, index) => (
              <li key={index} className="whitespace-nowrap">
                <span
                  className="cursor-pointer hover:opacity-60 transition"
                  onMouseEnter={() => {
                    setActiveImage(member.img);
                    setActiveBio(member.bio);
                    setActivePlayer("");
                  }}
                >
                  {member.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Active section */}
      {activeImage && (showReleases || showRoster) && (
        <div className="absolute top-20 right-20 text-right max-w-xs">
          <img src={activeImage} alt="cover" className="w-72 rounded-lg transition-all duration-300" />
          {activeBio && <p className="mt-2 text-xs">{activeBio}</p>}

          {/* Listen or More */}
          {showReleases ? (
            <button
              onClick={() => {
                const current = releases.find(r => r.img === activeImage);
                setActivePlayer(current?.embed || "");
              }}
              className="text-xs block mt-1 hover:underline cursor-pointer"
            >
              listen
            </button>
          ) : (
            <>
              <a
                href={roster.find(m => m.img === activeImage)?.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs block mt-1 hover:underline"
              >
                more
              </a>
              <a href="mailto:lofspublishing@gmail.com" className="text-xs block mt-1 hover:underline">contact</a>
            </>
          )}

          {/* Bandcamp embed */}
          {activePlayer && (
            <div className="mt-3" dangerouslySetInnerHTML={{ __html: activePlayer }} />
          )}
        </div>
      )}
    </main>
  );
}
