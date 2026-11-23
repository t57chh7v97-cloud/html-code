# Putting Where & When on the App Store (iPhone)

This folder turns the website (`../globe`) into a real iPhone app with **Capacitor**.
The app bundles every map, library and font, so it opens instantly and works offline.

> ⏱ Plan on about an afternoon for the first build, then about a day (sometimes a few) for Apple's review.

## 0. What you need
1. **A Mac** with **Xcode** (free in the Mac App Store — it's big, start the download first).
2. **Node.js** (the "LTS" version from https://nodejs.org).
3. **An Apple Developer Program membership** — **$99 a year** at https://developer.apple.com/programs/.
   Apple requires the account holder to be **18 or older**. If you're under 18, a **parent or guardian enrolls
   with their Apple ID** and adds you to the team; the app is published under their name (or a family business).
4. An iPhone and a USB cable for testing (optional but recommended).

## 1. Build the app on the Mac (Terminal)
```bash
git clone https://github.com/t57chh7v97-cloud/html-code.git
cd html-code/app
npm install
npm run prepare-www        # copies the website into app/www with everything bundled
npx cap add ios            # creates the Xcode project (only the first time)
./scripts/ios-setup.sh     # adds the location/camera permission messages Apple requires
npx cap sync ios
npx cap open ios           # opens Xcode
```
Whenever the website changes later: `git pull`, then `npm run sync` (or `npm run ios` to also open Xcode).

## 2. Set it up in Xcode
1. Open **capacitor.config.json** first and change `com.CHANGEME.whereandwhen` to your own reverse-domain id,
   e.g. `com.yourfamilyname.whereandwhen` (it must be unique and can't change after release). Run `npx cap sync ios`.
2. In Xcode, click **App** (left sidebar) → **Signing & Capabilities** → Team: choose the developer account. Check the Bundle Identifier matches.
3. **App icon:** Assets → AppIcon → drag in `app/AppIcon-1024.png`.
4. **General** tab: set Display Name "Where & When", version 1.0, build 1, iPhone only, and portrait + landscape.
5. Plug in your iPhone, pick it at the top, press ▶︎ to test. (First time: on the iPhone, Settings → General → VPN & Device Management → trust the developer.)

## 3. Upload
1. In Xcode choose **Any iOS Device (arm64)** at the top, then **Product → Archive**.
2. When it finishes, **Distribute App → App Store Connect → Upload**.

## 4. App Store Connect (https://appstoreconnect.apple.com)
1. **My Apps → ＋ → New App**: iOS, name "Where & When — Live Globe", your bundle id, SKU `whereandwhen1`.
2. Fill in everything from **`store/LISTING.md`** (description, keywords, URLs, age rating, privacy answers, review notes).
3. Upload the five screenshots from **`store/screenshots/`** to the 6.9" iPhone slot.
4. Under **Build**, pick the build you uploaded (it appears ~15 minutes after uploading).
5. **Add for Review → Submit**. You'll get an email when it's approved (or what to fix).

## Things Apple checks (already handled)
- **Not "just a website"** (guideline 4.2): the app bundles all its content, works offline, and uses native features
  (location, camera, share sheet, notifications). If Apple still asks, adding Capacitor's Haptics and Local Notifications
  to the reminders is the usual fix — the plugins are already installed.
- **Privacy policy & support pages:** `globe/privacy.html` and `globe/support.html` (already live).
- **Accounts:** if accounts are on, **Sign in with Apple** must be offered (it is) and people must be able to **delete
  their account in the app** (👤 Account → Delete my account). See `../docs/ACCOUNTS.md` for the iPhone sign-in setup.
- **No made-up claims:** don't call it "the official Santa tracker" — the description says where Santa's route comes from.
