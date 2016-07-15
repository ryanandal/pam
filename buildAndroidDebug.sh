#!/bin/bash
# go to your project folder and change permissions to make this file executable with the following command:
# chmod +x buildAndroiDebug.sh
# now run this in the terminal: (NAME is what you want the file to be named, useful for versioning)
# ./buildAndroidDebug.sh NAME

sudo cordova compile android

# this section for signed apks and currently commented out. IMPORTANT: you must remember the password when prompted otherwise you wont be able to update your app
# `keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000`
# `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore $1-release-unsigned.apk alias_name`
# `$ANDROID_HOME/${BUILD_TOOLS_VERSION_FOLDER_NAME}/zipalign -v 4 $1-release unsigned.apk $1.apk`

#upload to dropbox (this is my tchow@thesecretlocation.com dropbox accessToken)
# public  folder is available at https://www.dropbox.com/sh/muoowe3t2l6mxme/AACFuZzA-iTT51sJ5lzDc-vZa?dl=0
accessToken="YdAv_01SdEAAAAAAAAAAKbIf-hCbtWSGJzeNf6qL94hJQvgC1_f95jF2j-Dney7U"

if [ -z "$1" ]; then
  sudo curl -H "Authorization: Bearer $accessToken" https://api-content.dropbox.com/1/files_put/auto/ -T platforms/android/build/outputs/apk/android-debug.apk
  sudo mv platforms/android/build/outputs/apk/android-debug.apk builds/debug/android/android-debug.apk

else
  sudo curl -H "Authorization: Bearer $accessToken" https://api-content.dropbox.com/1/files_put/auto/ -T builds/debug/android/$1.apk
  sudo mv platforms/android/build/outputs/apk/android-debug.apk builds/debug/android/$1.apk
fi
