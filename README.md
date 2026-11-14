# HTML Code

A small collection of self-contained HTML/CSS/JS demos.

**Live:** https://t57chh7v97-cloud.github.io/html-code/ (deployed automatically
from `main` via GitHub Actions — see `.github/workflows/deploy-pages.yml`).
If this is the first deploy, GitHub Pages needs to be enabled once under
*Settings → Pages → Build and deployment → Source: GitHub Actions*; after
that every push to `main` redeploys automatically.

## switch.HTML

A simple animated toggle switch, built with a checkbox input and a styled
label — no JavaScript required. Open the file directly in a browser to try it.

## EbikeMaps.html

An Apple Maps-style turn-by-turn navigation app built for ebike riders. Search
for a destination (or tap the map to drop a pin), get a bike-friendly route
with turn-by-turn directions, and start spoken navigation that tracks your
position as you ride. Ebike-specific touches: assist-mode presets (Eco/Normal/
Sport/Turbo) that drive the speed and ETA, a battery-use estimate that factors
in route distance and elevation gain/loss, and a low-charge warning if the
trip may outlast your battery. Runs entirely client-side against free,
no-API-key services — OpenStreetMap tiles, Nominatim search, the
routing.openstreetmap.de OSRM bike router, and Open-Elevation — so it needs
network access but no accounts or keys. Open the file directly in a browser,
or visit the live site above and use your browser's "Add to Home Screen" to
install it as an app icon for quick access on a ride. Units (km/mi) default
to your browser's locale and, along with every other setting, are then saved
on your device.

## EarthClock.html

A live 3D globe (Three.js) that shows you where and when you are. Earth spins
on its real 23.5° axial tilt with day and night shaded from an actual
sun-position calculation, rendered on real coastline data (Natural Earth, via
the `world-atlas` dataset) rather than a drawn approximation. Find your
location with one tap of "Use My Location" (real device GPS, permission
prompt and all), by searching any place by name, by typing coordinates, or by
clicking directly on the globe — the camera turns to face wherever you set.
The time panel shows your device's exact real clock (DST included) when
you're using your own location, a civil-time estimate for anywhere else, and
true solar time as a secondary reference, with a 12h/24h toggle. Switch to
"Your Orbit Around the Sun" to zoom out and see Earth's current position on
its yearly path, with the four equinox/solstice points marked and your
location still visible as a pin on the tiny Earth. Place search and GPS both
need network/device access, so they work fully on the live site above; a
sandboxed preview (like a Claude artifact) falls back to clicking the globe
or typing coordinates. Open the file directly in a browser, or visit the live
site above.

## globe/ — Where & When (Live Globe)

An upgraded live 3D globe (Three.js). Earth sits on its real 23.4° tilt and
turns in real time, with day, twilight and night computed from the actual Sun
position. The Moon is placed from a lunar ephemeris and lit by the Sun, so its
phase is correct. The map is drawn from Natural Earth coastlines, with
night-side city lights placed at real city coordinates.

- **Find a place:** "Use My Location" (device GPS, asked automatically on first
  visit), search about 193,000 cities, towns and villages offline (GeoNames
  `cities500`, including local-language names such as "München"), type
  coordinates, or tap the globe.
- **Time panel:**
  - your device clock, or the place's exact IANA time zone; 12h/24h
  - sunrise, sunset and day length
  - Moon phase, moonrise and moonset, and the next full and new moon
- **City names** appear on the globe and get denser as you zoom in.
- **Time travel:** step ±1 hour, day or month, or play at 1 hr/sec or 1 day/sec.
- **"Your Orbit Around the Sun":** Earth's current spot on its yearly path, the
  next equinoxes and solstices, the distance to the Sun and orbital speed.

- **Holiday themes** turn on automatically by the date at your pin. Each one
  adds its own colours, city lights, effects and a countdown:
  - 🎃 Halloween (Oct 1 – Nov 1): purple-and-orange lights and bats
  - 🦃 Thanksgiving (Nov 2 – Thanksgiving Day): falling leaves
  - 🎄 Christmas (day after Thanksgiving – Dec 29): snow and multicolour
    lights. On Christmas Eve, a Santa tracker flies **Google Santa Tracker's
    real 420-stop route** (the 2019 flight, shifted to this year), plus six
    stops added for the club: West Palm Beach and Wellington, FL; and Yonkers,
    Hempstead, Mount Pleasant and Pleasantville, NY. Each added stop is a
    30-second visit, and the nearby Google stops shift by only 1–3 minutes. Every
    stop comes with his
    path drawn in green (Google-tracker style) and a Google-style tracker card: when he arrives near you, a live
    gifts-delivered counter, and his next stop with an arrival countdown. Every
    stop is marked with a small gray dot. When Santa arrives, the dot flashes
    with red and green rings and then stays lit red and green. Santa is a round
    red marker, and city
    lights dim while he flies so he and his stops stand out. Tap a stop
    to see when Santa gets there. **🔍 Zoom in on Santa** swoops the camera to an
    animated 3D sleigh with Santa, his sack of presents and nine reindeer led by
    a glowing-nosed Rudolph, which you can orbit and pinch-zoom around. Up close,
    the ground is labelled with town and country names, and a banner says what
    Santa is flying over. At each stop the sleigh glides down and bounces onto
    a small snowy house that pops up out of the snow. The reindeer bunch up on
    the roof, and Santa hops onto the chimney with a present balanced on one
    finger. Then he wiggles, kicks and squeezes down it, disappears in a puff of
    soot, pops back out, has milk and cookies, and hops back into the sleigh.
    Each loop takes about 6½ seconds and repeats until he lifts off again.
    **At the North Pole**, the sleigh waits in Santa's Village beside the
    workshop, a Christmas tree and a candy-cane NORTH POLE sign. From 10 minutes
    before takeoff until 3 minutes after, Mrs. Claus and seven elves wave
    goodbye in speech bubbles, and Santa waves back. When he comes in to land
    on Christmas morning, they cheer and jump. For half an hour after he lands,
    they welcome him home, and Mrs. Claus has a mug of hot cocoa. A
    "Santa's coming to your house soon — go to bed now!" alert appears when he
    gets close.
  - 🎵 During Christmas, a 🎵 menu plays themed music and turns it on and off,
    with a next-song button and a volume slider. Sources:
    - **🎹 Chiptune carols:** Jingle Bells, Deck the Halls and We Wish You a
      Merry Christmas (all public domain), synthesised live in the browser
      with Web Audio. There's no player and no download.
    - **🎧 Club song:** `globe/music/christmas.mp3`, if it's added to the repo.
      It plays in the background.
    - **📁 A song from this device:** the viewer picks an audio file. It's kept
      only in their browser and plays in the background.
    - **📺 YouTube video:** YouTube's own player. It stays visible at 200×200,
      as YouTube requires, and can be dragged around.

    MP3 songs have a seek bar with ⏪ 10 s and 10 s ⏩ buttons. They also work
    with the phone's lock-screen and Control Center controls (play/pause,
    skip ±10 s, scrubbing).

    Browsers only allow sound after a tap, so music starts from the menu.
  - 🎆 New Year (Dec 30 – Jan 15): a countdown to midnight at your pin, and a
    30-second fireworks show each time you open the app. At midnight, wherever
    your pin is, another 30-second show plays (5 minutes long if the pin is in
    New York State). On the globe, fireworks burst
    over each city during the first two minutes after its own time zone
    reaches midnight. With a pin anywhere in New York State, "Theme from New
    York, New York" plays by itself at midnight. Each viewer picks their own copy
    of the song with "🗽 Choose your 'New York, New York' song file" on the
    time card. The file is kept only in that browser and is never uploaded. If
    `NY_SONG_URL` is set, YouTube's player is the fallback. Browsers allow the
    sound only after one tap on the page, and the page has to be open at
    midnight.

  - 🌍 **Regional and other important holidays** get full themes too, but
    only in the countries that celebrate them (based on the country of your
    pin). A holiday falling on its exact day wins over a longer season, and
    small holidays like Valentine's Day give way to bigger local ones:
    - Worldwide: Valentine's Day, St. Patrick's Day, Easter (Orthodox Easter in
      Orthodox countries), Lunar New Year, Diwali, Hanukkah, Ramadan, Eid
      al-Fitr and Eid al-Adha. Each appears only where it's widely observed.
    - USA: MLK Day, Presidents' Day, Memorial Day, the 4th of July, Labor Day,
      Veterans Day.
    - Canada Day and Canadian Thanksgiving; Remembrance Day (UK, Canada,
      Australia and others); Bastille Day; Guy Fawkes Night; Mexican
      Independence Day and Día de Muertos; Australia Day; Carnival; Indian
      Independence Day; China's National Day / Golden Week.

    Lunar dates (Lunar New Year, Diwali, Hanukkah, Ramadan, the Eids) are
    built in for 2025–2030. Fireworks holidays (like the 4th of July and
    Bastille Day) play a 20-second show. Solemn days (Memorial Day, Remembrance
    Day) use quiet poppies and no fireworks.

  Developers can preview any of them from ⏱ Time travel, which has a holiday
  picker. Anyone can turn them off with the 🎉 button.
- **Time travel (developer mode):** jump ±1 min, 30 min, 1 h, 1 d, 1 wk,
  1 mo, 6 mo or 1 yr, or go to an exact date and time at your pin. You can also
  play time at 1 hr/sec or 1 day/sec.
- **Developer mode:** ⏱ Time travel, including the holiday previews, is
  hidden unless you unlock it. Tap the big clock 5 times, or open the page with
  `#dev`, then enter the passphrase. It stays unlocked on that device until you
  tap 🔒 Lock. The page stores only a double SHA-256 hash of the passphrase, so the passphrase isn't in the code. The
  site has no server, so this hides the feature from normal use but can't stop
  someone who edits the page code.

Everything runs in the browser. The only network use is loading Three.js and
d3 from public CDNs.
