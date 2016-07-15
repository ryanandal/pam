To develop

sudo npm install -g cordova
sudo npm install -g ionic
sudo npm install -g gulp
sudo npm install
bower install
gulp

#this command adds all the plugins and platforms in package.json to the project
ionic state reset

#By default the plugin for youtube video plays Android video in landscape mode.
# To change this go to /platforms/android/AndroidManifest.xml
# remove screenOrientation:Landscape from <activity android:name="com.keyes.youtube.OpenYouTubePlayerActivity" />
# Save the file.
# FUTURE BUILDS MUST USE 'ionic/cordova compile android' instead of 'ionic/cordova build android'.
# This is because the 'build' command fetches the plugin from github and will reset the Androidmanifest.xml according to the plugin.
# The 'compile' command simply compiles the current manifest file.

To develop
ionic serve

To build (must have Xcode and Android SDK and relevant java files installed already)
ionic build ios
ionic build android


TROUBLESHOOTING
While adding a platform if you notice a bunch of lines like the following:

"cp: no such file or directory: path_to_project/resources/android/splash/drawable-port-xhdpi-screen.png"

you will get the following error when building:
"processDebugResources path_to_project/platforms/android/build/intermediates/manifests/full/debug/AndroidManifest.xml:25:23-37 : AAPT: No resource found that matches the given name (at 'icon' with value '@drawable/icon')."

This is because ionic network was down when building. See: http://stackoverflow.com/questions/35969411/ionic-framework-ionic-resources-generating-empty-directories-with-no-icon-and

The solution is to go to your command line and type:

ionic resources

which will generate the relevant resources.

Then you can do ionic build android.
