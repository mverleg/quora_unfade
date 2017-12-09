#!/usr/bin/env bash

if ! type web-ext 1> /dev/null
then
    echo 'run "npm install web-ext"'
    exit 1
fi

# Check
if ! web-ext lint --warnings-as-errors --ignore-files '*.iml' '*.sh'
then
    exit 2
fi

# Build
web-ext build --overwrite-dest --ignore-files '*.iml' '*.sh'

# Interactive test
web-ext run


