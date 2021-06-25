#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

mkdir -p ./rust/proto/
cp ./proto/helloworld.proto ./rust/proto/helloworld.proto

mkdir -p ./typescript/proto/
cp ./proto/helloworld.proto ./typescript/proto/helloworld.proto
