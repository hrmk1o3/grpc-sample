#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

PROTO_JS_DEST=./dist/proto
PROTO_TS_DEST=./src/proto

mkdir -p ${PROTO_JS_DEST}
mkdir -p ${PROTO_TS_DEST}

# JavaScript code generation
npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_JS_DEST} \
    --grpc_out=${PROTO_JS_DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./proto \
    proto/*.proto

# TypeScript code generation
npx grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_TS_DEST} \
    -I ./proto \
    proto/*.proto

npx grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_JS_DEST} \
    -I ./proto \
    proto/*.proto
