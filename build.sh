#!/usr/bin/env bash

if ! type web-ext 1> /dev/null
then
    echo 'run "npm install web-ext"'
    exit 1
fi

# Build
web-ext build --overwrite-dest --ignore-files '*.iml'

# Interactive test
web-ext run


