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

A 3D model (Three.js) of Earth spinning on its real 23.5° axial tilt while it
orbits the Sun with the Moon in tow. Set your location by clicking the globe,
searching a city, typing coordinates, or using your device's time zone as a
rough guess — no GPS is used, since the browser sandbox here can't request
it — and the panel shows your local solar time, whether you're in daylight
or night, the current season for your hemisphere, and a countdown to the
next equinox/solstice. The Equator, Tropics and Arctic/Antarctic Circles are
drawn on the globe as the lines that mark the seasons. Four view presets
(Surface, Globe, Earth–Moon, Solar System) zoom out to show the Moon's orbit
and then Earth's orbit around the Sun, each labeled with its direction of
travel, with your location marker staying visible even at the zoomed-out
solar view. A speed control lets the simulated clock run in real time or
fast-forward (up to a simulated week per second) to watch the seasons cycle.
Everything is procedurally generated (no external map imagery), so it needs
network access only to load the Three.js library and fonts. Open the file
directly in a browser, or visit the live site above.
