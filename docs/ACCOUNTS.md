# Turning on sign in / sign up (Firebase)

The account code is already in the app — it stays hidden until you add a Firebase config.
Firebase is free for an app this size. Google requires the account owner to be 13+; a parent can create it.

## 1. Create the Firebase project (website, 10 minutes)
1. Go to https://console.firebase.google.com → **Add project** → name it `where-and-when` → you can turn off Google Analytics.
2. Click the **</>** (Web) icon → name it "Where & When web" → **Register**. Firebase shows a `firebaseConfig = { … }` block.
3. In `globe/index.html` (and `site/index.src.html` if you use the source), find
   `var FIREBASE_CONFIG=null;` and replace `null` with that block, e.g.
   ```js
   var FIREBASE_CONFIG={apiKey:"AIza…",authDomain:"where-and-when.firebaseapp.com",projectId:"where-and-when",appId:"1:…:web:…"};
   ```
   (These keys are meant to be public — the security rules below are what protect people's data.)

## 2. Turn on sign-in methods
Build → **Authentication → Get started → Sign-in method**:
- **Email/Password** → Enable.
- **Google** → Enable → pick a support email.
- **Apple** → Enable. This needs your Apple Developer account:
  1. developer.apple.com → Certificates, IDs & Profiles → **Identifiers**: on your app's App ID, tick **Sign in with Apple**.
  2. Create a **Services ID** (e.g. `com.yourfamilyname.whereandwhen.web`), tick Sign in with Apple, and add the return URL that Firebase shows
     (`https://where-and-when.firebaseapp.com/__/auth/handler`) and the domain `where-and-when.firebaseapp.com`.
  3. **Keys** → new key with Sign in with Apple → download the .p8 file. Paste the Services ID, Team ID, Key ID and the key into Firebase's Apple settings.
- Authentication → **Settings → Authorized domains** → add `t57chh7v97-cloud.github.io`.

## 3. Database + security rules
Build → **Firestore Database → Create database** (production mode, a US location) → **Rules** tab → paste the contents of
`firestore.rules` from this repo → **Publish**. Each person can only read and write their own data.

## 4. In the iPhone app
Inside the app, Apple and Google sign-in use the phone's native sheets through a plugin:
```bash
cd app
npm install @capacitor-firebase/authentication firebase
npx cap sync ios
```
1. Firebase console → Project settings → **Add app → iOS** with your bundle id → download **GoogleService-Info.plist** →
   drag it into Xcode under App/App (tick "Copy items").
2. In `capacitor.config.json` add inside `"plugins"`:
   `"FirebaseAuthentication": { "skipNativeAuth": true, "providers": ["apple.com", "google.com"] }`
3. Xcode → Signing & Capabilities → **＋ Capability → Sign in with Apple**.
4. For Google: copy `REVERSED_CLIENT_ID` from GoogleService-Info.plist → Xcode → Info → URL Types → ＋ → paste it as the URL scheme.

The web code already detects the app and uses the native sheets (`signInWith()` in `globe/index.html`).

## 5. Test
Open the site, tap 👤 **Sign in** in the top bar → create an account → change a setting → sign in on another device → it syncs.
Then try **Delete my account** (Apple requires that it works).
