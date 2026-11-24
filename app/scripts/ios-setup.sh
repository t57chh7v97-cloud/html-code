#!/bin/bash
# Run on the Mac after `npx cap add ios` (safe to run again any time).
# 1) adds the permission messages Apple requires (location, camera, photos)
# 2) raises the minimum iOS version to 15.0 — newer Xcode versions refuse to build for iOS 14
set -e
cd "$(dirname "$0")/.."
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

# minimum iOS 15.0 for the app…
sed -i '' 's/IPHONEOS_DEPLOYMENT_TARGET = 1[0-4]\.[0-9];/IPHONEOS_DEPLOYMENT_TARGET = 15.0;/g' ios/App/App.xcodeproj/project.pbxproj
# …and for every plugin (CocoaPods)
if [ -f ios/App/Podfile ]; then
  sed -i '' "s/platform :ios, '1[0-4]\.[0-9]'/platform :ios, '15.0'/" ios/App/Podfile
  grep -q "WW_MIN_IOS" ios/App/Podfile || perl -0pi -e "s/post_install do \|installer\|\n/post_install do |installer|\n  # WW_MIN_IOS\n  installer.pods_project.targets.each { |t| t.build_configurations.each { |c| c.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '15.0' } }\n/" ios/App/Podfile
  (cd ios/App && pod install)
fi
echo "✅ Minimum iOS set to 15.0"
