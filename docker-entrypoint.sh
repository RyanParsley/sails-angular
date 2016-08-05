#!/bin/bash

pm2 start app.js -x --no-daemon -- --prod
