#!/bin/bash
sudo cordova build ios
cd platforms/ios
rm -f build/teasr-ionic.ipa



if [ -z "$1" ]; then
  echo "Please pass a bundle version number to the command line."
  exit 1
fi
/usr/libexec/Plistbuddy -c "Set CFBundleVersion $1" "teasr-ionic/teasr-ionic-Info.plist"
/usr/libexec/Plistbuddy -c "Set CFBundleShortVersionString 0.0.1" "teasr-ionic/teasr-ionic-Info.plist"
/usr/libexec/PlistBuddy -c "Set :CFBundleIdentifier com.teasr.ionic" "teasr-ionic/teasr-ionic-Info.plist"

xcodebuild -scheme teasr-ionic PRODUCT_BUNDLE_IDENTIFIER="com.teasr.ionic" CODE_SIGN_IDENTITY="iPhone Distribution: Secret Location, Inc (HSV3S63A95)" clean archive -archivePath build/teasr-ionic
xcodebuild -exportArchive -exportFormat ipa -archivePath "build/teasr-ionic.xcarchive" -exportPath "build/teasr-ionic.ipa" -exportProvisioningProfile "Teasr App Store Prov Prof"

APP_ID="1099325013"
IPA_FILE="build/teasr-ionic.ipa"
IPA_FILENAME=$(basename $IPA_FILE)
MD5=$(md5 -q $IPA_FILE)
BYTESIZE=$(stat -f "%z" $IPA_FILE)

TEMPDIR=itsmp
# Remove previous temp
test -d ${TEMPDIR} && rm -rf ${TEMPDIR}
mkdir ${TEMPDIR}
mkdir ${TEMPDIR}/mybundle.itmsp

# You can see this debug info when you manually do an app upload with the Application Loader
# It's when you click activity

cat <<EOM > ${TEMPDIR}/mybundle.itmsp/metadata.xml
<?xml version="1.0" encoding="UTF-8"?>
<package version="software4.7" xmlns="http://apple.com/itunes/importer">
    <software_assets apple_id="$APP_ID">
        <asset type="bundle">
            <data_file>
                <file_name>$IPA_FILENAME</file_name>
                <checksum type="md5">$MD5</checksum>
                <size>$BYTESIZE</size>
            </data_file>
        </asset>
    </software_assets>
</package>
EOM

cp ${IPA_FILE} $TEMPDIR/mybundle.itmsp

echo -e "ItunesConnect username:"
read USER
echo "Please provide your password"
read -s -p "Password:" PASS
/Applications/Xcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m upload -f ${TEMPDIR} -u "$USER" -p "$PASS" -v detailed
