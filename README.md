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
    extra stops: West Palm Beach and Wellington, FL; and Yonkers, Hempstead,
    Mount Pleasant and Pleasantville, NY. Each added stop is a 30-second visit,
    and the nearby Google stops shift by only 1–3 minutes. Every
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
    Santa is flying over. At each stop the sleigh glides in from behind, nose
    down, while a small snowy cottage rises out of the snow to meet it; the
    runners kick up a puff of snow and the sleigh bounces on its springs. The reindeer bunch up on
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
    - **🎧 Bonus song:** `globe/music/christmas.mp3`, if it's added to the repo.
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
    Day) are quiet, with gentle stars or poppies and no fireworks.

  - 🌍 Earth Day (Apr 22), π Pi Day (Mar 14, with fireworks at 1:59:26 PM)
    and 🎮 Video Game Day (Sep 12) for everyone.
  - 🌌 **Sky events** are added on top of any theme, at the pin's own date:
    - solstices and equinoxes, with their exact time and a gold ring
      along the day/night line
    - meteor-shower peaks (Quadrantids, Lyrids, Eta Aquariids, Perseids,
      Orionids, Leonids, Geminids), with shooting stars across the screen
    - solar eclipses: the Moon's real shadow darkens the globe live (2027–2030
      eclipses are listed by name), and "show me" flies to it
  - 🎈 On US Thanksgiving morning (9 AM–noon Eastern), giant balloons float over
    New York City. "Watch the balloons" zooms in close.
  - 📅 An advent calendar (Dec 1–24): a door opens each day with a fact, a joke,
    a carol or a little surprise.
  - ✉️ A letter to Santa, kept only on the device. Santa reads it when he
    reaches your area on Christmas Eve, and his reply appears. In the Claude
    version, Claude writes Santa's reply from what the letter says (it asks
    the viewer's permission the first time). On this site, Santa's reply picks
    up what the letter mentions (the gift asked for, video games, pets,
    family, questions and more) without any server or API key.
  - After Santa lands, the North Pole village, his full path and the lit-up
    stops stay on the globe until the New Year theme starts on Dec 30.
  - 🦌 In Santa cam, each reindeer has a name tag.
  - 🎆 New Year's Eve: a gold midnight line sweeps west across the globe, "Next
    to celebrate" counts down to the next big cities, and with a pin in New York
    State, a Times Square ball drops for the last 60 seconds.
  - 🎂 Birthday mode (saved on the device): confetti, fireworks and "Happy
    Birthday" in chiptune on your day.
  - 🎵 The 🎵 music menu appears for more holidays, with public-domain chiptune:
    Silent Night (added to the carols), In the Hall of the Mountain King
    (Halloween), Yankee Doodle (4th of July), Auld Lang Syne (New Year), Happy
    Birthday, and an original "Level Up!" for Video Game Day.
  - 📸 Postcard: saves or shares a picture of the globe with a holiday greeting.
- **🗺️ Live layers** (from public services; nothing to sign up for):
  - 🛰️ **Space station:** the ISS's live position and next orbit (SGP4 from a
    fresh CelesTrak orbit via satellite.js), plus when you can see it fly over
    your pin: you in darkness, the station in sunlight, at least 10° up.
  - ☁️ **Clouds:** a live global cloud map, updated every 3 hours from
    weather satellites (clouds.matteason.co.uk), with yesterday's NASA GIBS
    mosaic as a backup.
  - 🌎 **Earthquakes** from the past day (USGS, magnitude 2.5+). Tap one for
    details.
  - 🌌 **Aurora** from NOAA's 30-minute forecast, with a "lights possible
    tonight" note when your pin has a chance.
  These need the GitHub site; the Claude version can't reach outside data.
- **🎯 Where & When challenge:** guess a city from its local time, day/night
  and daylight hours. 5 rounds, up to 5,000 points each, with a high score
  per mode:
  - 🟢 **Easy:** the 150 biggest cities, and the country is shown.
  - 🟡 **Medium:** big cities, with an optional hint for half points.
  - 🔴 **Hard:** any city over 150,000 people, only the time and the sky, and
    a 30-second timer (faster answers score more).
  Streaks and bullseyes get fireworks.
  **👥 Play with friends** (Claude version, page shared with friends): the host
  starts each round, everyone plays the same cities, and scores show live.
- **🕒 World clocks**, **🔔 reminders** (sunrise, sunset, ISS flyovers, Santa's
  takeoff), and **📲 install as an app** (manifest + service worker, so it
  opens offline after the first visit).
- **💬 Feedback** opens a pre-filled GitHub issue (or copies the message).
  Setting `DONATE_URL` in `globe/index.html` adds a 💖 Donate button.
- The advent calendar has 25 doors, each with a bonus quiz question, and
  "Good King Wenceslas" joins the chiptune carols. **Door 25 (Christmas Day)**
  is a giant present to shake open. **Santa brings a different present every
  year** (2026: 🛷 Sleigh Pilot Kit: fly the sleigh, drop presents on real
  towns and race the missions · 2027: 🎨 Sleigh Paint Shop · 2028: 🔮 Snow
  Globe Mode, shake your phone to swirl the snow · 2029: 🧝 Official Elf Pack,
  a certificate and an elf hat on your pin; then it repeats). Presents you've
  collected live in ⋯ More, but only during the Christmas season: like
  everything Christmas (tracker, music, advent, sleigh), they're put away
  when the season ends and come back the next year.
- **📅 Daily challenge:** the same 5 cities for everyone each day, one try,
  with a streak counter and a shareable 🟩🟨🟧🟥 result. The challenge also
  has 🔊 sound effects: dings for close guesses, a buzzer when time runs out,
  ticking in the last 5 seconds of Hard mode, and a fanfare at the end.
- **🎯 Sleigh missions** (once the sleigh is unlocked): Big Apple Run, Grand
  Tour of Europe, East Asia Express, Around the World and Present Rush.
  Glowing rings mark each city, the banner points to the next one with an
  arrow and distance, and your best times are saved.
- **❄️ Snow cover** layer from NASA MODIS (the last 3 days combined).
- **⛅ Live weather** for the pin (Open-Meteo, no key needed): the temperature
  and how it feels, conditions, wind and humidity, a 6-day forecast, °F/°C,
  snow alerts ("snow day? 🛷"), rain warnings and a White Christmas check once
  Dec 25 is in the forecast. GitHub site only.
- More **🗺️ layers**: 🌡️ a live temperature map (Open-Meteo) and 🌧️ rain & snow
  (NASA IMERG, a few hours behind). Flight tracking lives in Flightflow.
- **🔭 Tonight's sky:** which planets you can see from your pin tonight
  (NASA JPL approximate orbits), when and where to look, and a sky map with
  the brightest stars, the Big Dipper, Orion, Cassiopeia and the Southern
  Cross.
- **🏅 Achievements:** 26 badges for exploring, the challenge, Christmas,
  Halloween, the sleigh and more.
- **🏆 Friends leaderboard** for the daily challenge (Claude version, using its
  shared data store; friends need Contributor access).
- **🎈 Thanksgiving parades across the US:** balloons float over each city
  while its parade is on, with a parade guide (official names, editions, start
  times in your time zone, and where to watch):
  - Plymouth, MA: America's Hometown Thanksgiving Celebration (Saturday before)
  - Charlotte: Novant Health Thanksgiving Eve Parade (Wednesday evening)
  - New York City: Macy's (100th) · Philadelphia: 6abc Dunkin' (107th, the
    oldest) · Detroit: America's Thanksgiving Parade (100th) · Chicago (92nd) ·
    Houston: H-E-B (77th), all on Thanksgiving morning
  The day before, the card mentions New York's balloon inflation (1–6 PM ET).
  From an hour before each parade until 30 minutes after it ends, the card
  shows a red ▶️ Watch on YouTube button for it, with a pulsing 🔴 LIVE NOW
  while it's marching.
- **🎉 The 100th Macy's Thanksgiving Day Parade (Nov 26, 2026):** a countdown,
  a gold "100" balloon leading New York's balloons, fun facts, confetti when
  it starts at 8:30 AM ET, and links to watch it on YouTube. During any
  parade, tapping its city opens "Watch on YouTube", and your pin steps
  aside while a parade is marching over it.
- **🔭 Sky map:** a 🧍 "Facing one way" view (like looking through a window:
  horizon at the bottom, your left is left) with N E S W buttons, dragging,
  and 🧭 compass mode that follows your phone as you turn (GitHub site in
  Safari/Chrome; the compass can't reach the app inside Claude). There's also
  a 🔭 "Whole sky" view, step-by-step how-tos for both, and ◀ ▶ to see the sky
  later tonight.
- **🎅 Santa stats:** how far he is from your pin, his speed, and the snacks
  he's been left (2–4 cookies, 1 glass of milk and 3–4 carrots per house),
  with the gift counter ticking up smoothly the whole night, plus **🍪 Leave cookies out**: Santa leaves a thank-you note when
  he reaches your area.
- **🎃 Trick-or-treating around the world** on Halloween night: pumpkins
  light up in towns where it's 5–9 PM. Tap them for candy (or a trick!).
- On phones the time card scrolls inside itself, so its ▾/▴ button always
  stays reachable.
- **⏳ Countdowns** to Christmas, New Year, your birthday and the next holiday.
  The one you pick shows as a number on the app's icon once it's installed.
- **⚙️ Settings** (the ⚙️ button in the top bar): time & date from
  the pin's location, your phone, or a time zone you choose · °F/°C/auto ·
  US or metric distances and speeds · 12/24-hour clock · game sounds ·
  holiday effects · holiday themes.
- **Even more holidays:**
  - Themes: 🎭 Mardi Gras (with a catch-the-beads mini-game), 🇲🇽 Cinco de
    Mayo, 🎨 Holi (tap to throw colour), 🥮 Mid-Autumn Festival (when the full
    moon rises), ✊🏿 Juneteenth.
  - Round two: 🦫 Groundhog Day (guess whether Phil sees his shadow), 🃏 April
    Fools' (the globe pranks you), 🌸 Nowruz (countdown to the exact moment of
    spring), 🍷 Passover, 🍎 Rosh Hashanah and 🕯️ Yom Kippur (sunset reminders),
    💐 Mother's Day and 👔 Father's Day (card maker), 💦 Songkran (tap for a
    water splash), 🐉 Dragon Boat Festival (tap-to-paddle race), 🎋 Tanabata
    (hang a wish on the bamboo), 🥨 Oktoberfest, 🌌 May the 4th (hyperspace
    streaks when you fly).
  - 🌑 Winter solstice countdown and daylight gained afterwards · 🎁 Boxing Day
    · 🏴 Hogmanay · 🌍 Holiday hopper (every holiday on Earth today, in More).
  - Thanksgiving parades fold into one "LIVE NOW · 5 parades" line with a Watch
    button when several are on at once.
  - Round three: 👞 St. Nicholas shoe · 🕯️ St. Lucia · 🌟 Las Posadas candles ·
    👑 Three Kings king cake game · ☦️ Orthodox Christmas · 🎭 Purim mask maker
    and grogger · 🧡 King's Day · 🪷 Vesak · 🎖️ Anzac Day · 🐘 Ganesh Chaturthi ·
    🪔 Navratri & Dussehra · 🌕 Chuseok · 🌿 Sukkot (build a sukkah) · 🏴‍☠️ Talk
    Like a Pirate Day (the card talks pirate) · 🐸 Leap Day.
  - 🕐 Clocks-change heads-up for the pin's time zone · 🌕 full moon names ·
    😱 Friday the 13th glitches · 🔔 holiday reminders the day before.
  - 🃏 April Fools' now has 9 different pranks, a few times through the day.
  - US extras: 🎃 pumpkin carver and 🎭 costume spinner (Halloween), 🦃 turkey
    timer, 🥧 pie vote and 🛍️ Black Friday → Giving Tuesday (Thanksgiving),
    🎄 tree decorator and 🎅 Secret Santa name draw (Christmas).
  - 🎁 Boxing Day now covers Jamaica, the Caribbean, Africa, Hong Kong and more.
  - More US extras — 🎃 Halloween: haunted house builder, monster maker, candy
    trade (with friends in the Claude version, or the Candy Witch), an orange
    Moon and purple-orange glow after dark on Oct 31. 🦃 Thanksgiving: dinner
    planner, trivia, travel check (distance, drive/flight time, the weather
    there), leftover sandwich stacker, wishbone pull. 🎄 Christmas: sleeps
    countdown, naughty-or-nice quiz, ugly sweater maker, gingerbread house,
    reindeer roll call, Christmas morning presents to unwrap, snow day
    predictor. The turkey timer can plan cooking the day before for travelers.
  - Even more: 🎃 Sleepy Hollow night (the Headless Horseman rides across the
    screen), spooky story maker (Claude writes it in the Claude version),
    haunted places tour · 🍁 Friendsgiving sign-up (shared in Claude), 🫙
    thankful jar, 🏃 Turkey Trot tips · 📸 holiday photo booth, 📮 Santa's
    postcards (collect a country at each stop you watch), ❄️ first snow alert,
    ☕ hot cocoa meter · 🎯 resolution tracker, 📊
    year in review with 🏅 holiday badges · 🌍 holiday challenge game.
- **More everyday features:** 👀 Glance (a big, simple clock + weather + next
  holiday), 💡 a daily world fact, 🌅 "Where's the sun rising?" game, 🏆 a
  monthly season on top of the daily leaderboard, ♿ bigger text / high
  contrast / calm mode (no effects) in Settings, 📴 an offline badge, 📅 your
  own events with countdowns, 👫 a friend's time with good times to call, and
  ⚡ a faster start (the drawn Earth maps are saved after the first visit).
- **🌐 Language** in Settings: System language (follows your phone) or English,
  Español, Français, Deutsch, Português, Italiano, 中文 or 日本語 — buttons,
  menus, settings and dates change; some holiday messages stay in English.
- **👤 Accounts (optional):** sign in / sign up with email, Google or Apple
  through Firebase, syncing settings and progress across devices, with
  account deletion. Switched on by filling in `FIREBASE_CONFIG` — see
  `docs/ACCOUNTS.md`.
  - 🕎 Light the menorah each night of Hanukkah at sunset · 🕯️ Kwanzaa kinara
    with the day's principle.
  - 🎄 Rockefeller Center tree lighting countdown and LIVE NOW button (Dec 2,
    2026, 7 PM ET) · ✨ holiday lights tour with sparkles on the globe.
  - 🧝 Elf Maker · ❄️ snowball fight (with friends, Claude version) · 🍂 gratitude
    wall at Thanksgiving (shared in the Claude version).
  - 🧧 Lunar New Year red envelopes over cities · 🥚 Easter egg hunt (12 eggs,
    zoom in close) · 🌈 St. Patrick's pot of gold with warmer/colder hints.
  - 🎆 4th of July: fireworks pop over each US city at 9 PM local time, plus a
    quick US history card.
  - ✉️ New Year time capsule that unlocks the next New Year's Day.
  - 🌗 On solstices and equinoxes: how much daylight changes tomorrow.
  - 🎒 Countdowns to the last day of school and winter break, estimated
    from the town (by US region or country) and adjustable.
- **＋ / − / ◎ buttons** on the right zoom in and out (globe, Santa cam or orbit
  view) and fly back to your location (using GPS if needed).
- **⛶ Hide panels** clears everything off the screen so you can see the whole
  globe (or Santa); 👁 Show panels brings it back. On phones, the Santa
  tracker shrinks to one line (tap it to expand), and Santa cam only keeps
  "Back to Earth" and the music button.
- **🔗 Share:** shows a QR code for the app (good for putting on a projector),
  a Copy link button, and the phone's share sheet. The QR code is made in the
  page with qrcode-generator by Kazuhiko Arase (MIT license).

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

### Holiday round 15
- 🎃 Halloween: broomstick ride to spooky places, escape-the-haunted-house riddles, trick-or-treat planner (sunset, dark time, forecast, safety tips), costume contest
- 🦃 Thanksgiving: turkey hunt (10 turkeys hidden in US & Canadian cities), dinner wave across US time zones, leftover ideas, pie slicing game
- 🎄 Christmas: elf hide-and-seek (Dec 1–24), snowflake maker, town lights around your pin, wish list, reindeer games, 12 Days of Christmas (Dec 25–Jan 5), workshop toy counter + present-wrapping game
- 🎅 Santa: Nice List certificate, live sleigh dashboard on Christmas Eve (speed, Rudolph's nose, sack, weather where Santa is)

### Holiday round 16
- 🎃 Candy log with a trade meter, Halloween-night spooky meter (moon + weather), best trick-or-treat streets list
- 🎅 Santa 1-hour / 30-min / 10-min warnings, "your town is stop #N", Santa cam photo, live sleigh radio
- 🎈 Macy's parade bingo, guess-the-balloons picks, balloon wind check (23 mph / 34 mph gust rule)
- 🍗 Carving countdown, seating chart, kids' table games
- 🕎 Dreidel, 🎆 New Year's midnight wave, 💝 valentine maker, 🌳 Earth Day tree planting
- Fix: turkeys/eggs hiding under a city name can now be tapped

### Holiday round 17
- 🎅 "Santa is in your country!" alert, countries visited tonight, guess his arrival time, friends' cookie count (Claude version), tap Santa to spot the sleigh, reindeer team jobs
- 🎈 Macy's parade: live "Herald Square now" timeline, route line on the globe + viewing spots, balloon sizes, favorite-balloon vote, packing checklist, design your own balloon and fly it down the route

### Holiday round 18
- 📬 Santa's mailbag counter, 📖 bedtime story from Santa, 🪟 spot-Santa window game, ⏰ Christmas morning wake-up countdown
- 🎈 100 years of parade trivia, 🏆 balloon of the year, parade-eve balloon note
- 🏈 Thanksgiving football kickoff times, 🛍️ nap or shop?, 🥪 leftover sandwich ratings
- 📅 a mini-game behind each advent door, 🎉 New Year's confetti cannon
- 2026 updates: Macy's parade moved to Saturday Nov 28 (storm); Charlotte's Thanksgiving Eve Parade and Philadelphia's street parade canceled (weather)

### Holiday round 19
- 🦃 Hand turkey maker, turkey size/thaw/roast calculator, leftovers timer, family pick'em, recipe box, thankful paper chain, who-hosts-next-year spinner, turkey pardon facts, parade watch party (Claude version)
- 🏠 Hosting: oven timeline, guest list, house-prep countdown · 🚗 road trip games (license plates, I spy, 20 questions)
- 📆 Special days: Native American Heritage Day, Donut Day, Dog Day, Grandparents Day, Siblings Day, World Kindness Week, World Emoji Day, first day of school
- Fix: search results no longer slide under the buttons

### Holiday round 20 — Thanksgiving travel
- 🌧️ Storm check along your route, ⏰ best time to leave (Wednesday & Sunday traffic chart), 📍 "are we there yet?" live GPS progress, 🛑 rest stops every ~2 hours, 🌤️ weather when you arrive
- 🎒 Packing list, 🚙 carpool planner, 🍿 snack & fun timer, ✅ arrived-safe message, 🔙 Sunday traffic warning
