#!/bin/bash
set -e
source /etc/profile

export HUSKY_SKIP_INSTALL=true

npx @byted-eden/pipeline@0.2.19 --scene scm
