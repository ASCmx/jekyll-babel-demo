#!/bin/bash

jekyll build
cd _deploy
firebase deploy