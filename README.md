# GRPC Sample

## Setup

```sh
./scripts/setup.sh
```

## Rust

This is the sample code by [hyperium/tonic](https://github.com/hyperium/tonic/tree/b90bb7bbc012207451fe2788a8efd69023312425/examples).

### Build

```sh
cd rust
cargo build
```

### Server

```sh
cargo run --bin helloworld-server
```

### Client

```sh
cargo run --bin helloworld-client
```

## TypeScript

This is the sample code by [grpc/grpc](https://github.com/grpc/grpc/tree/0e20a5fce8e53510255fa1a5199544a86ebfcd8e/examples/node),
and use [agreatfool/grpc_tools_node_protoc_ts](https://github.com/agreatfool/grpc_tools_node_protoc_ts) to modify the typescript code.

### Build

```sh
cd typescript
yarn
```

### Server

```sh
yarn start --target [::1]:50051
```

### Client

```sh
yarn client world --target [::1]:50051
```

## Reference

- [grpc/grpc](https://github.com/grpc/grpc)

- [hyperium/tonic](https://github.com/hyperium/tonic)

- [agreatfool/grpc_tools_node_protoc_ts](https://github.com/agreatfool/grpc_tools_node_protoc_ts)
