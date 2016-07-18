#!/bin/bash

me="$(whoami)"

sudo chown -Rv $me /Users/travisn/.config/configstore/update-notifier-cordova.json
sudo chown -Rv $me platforms/*

echo "chown'd the above files to" $me
