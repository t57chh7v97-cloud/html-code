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
