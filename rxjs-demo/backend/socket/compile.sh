#!/usr/bin/env bash

#./node_modules/.bin/tsc-watch src/*.ts \
#	--outDir ./dist \
#	--onSuccess "node ./dist/server/socket.js" \
#	--onFailure "echo Beep! Compilation Failed"

tsc -w 
