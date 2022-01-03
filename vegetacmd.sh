#!/bin/sh
echo "GET http://127.0.0.1:30080" | vegeta attack -rate=1 -duration=8m | vegeta report
