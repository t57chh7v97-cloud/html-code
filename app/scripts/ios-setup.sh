#!/bin/bash
# Run once on the Mac, after `npx cap add ios`. Adds the permission messages Apple requires
# (location for "My Location", camera for the photo booth) and sets the app to dark/portrait-friendly defaults.
set -e
PLIST="ios/App/App/Info.plist"
[ -f "$PLIST" ] || { echo "Run 'npx cap add ios' first"; exit 1; }
PB=/usr/libexec/PlistBuddy
add(){ $PB -c "Delete :$1" "$PLIST" 2>/dev/null || true; $PB -c "Add :$1 $2 $3" "$PLIST"; }
add NSLocationWhenInUseUsageDescription string "Where & When uses your location to put your pin on the globe and show your local time, sunrise, weather and holidays."
add NSCameraUsageDescription string "The holiday photo booth uses the camera to take a festive selfie. Photos stay on your phone unless you share them."
add NSPhotoLibraryAddUsageDescription string "Lets you save your holiday cards and photos to your Photos."
add ITSAppUsesNonExemptEncryption bool false
add UIUserInterfaceStyle string Dark
echo "✅ Info.plist updated"
