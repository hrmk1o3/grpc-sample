import parseArgs from "minimist";
import { HelloRequest, HelloReply } from "./proto/helloworld_pb";
import services from "./proto/helloworld_grpc_pb";
import grpc from "grpc";
import type { ServerUnaryCall, sendUnaryData } from "grpc";

/**
 * Implements the SayHello RPC method.
 */
const sayHello = (
  call: ServerUnaryCall<HelloRequest>,
  callback: sendUnaryData<HelloReply>
) => {
  const reply = new HelloReply();
  reply.setMessage("Hello " + call.request.getName());
  callback(null, reply);
};

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
const main = () => {
  const argv = parseArgs(process.argv.slice(2), {
    string: "target",
  });
  const target = argv.target ?? "[::1]:50051";
  const server = new grpc.Server();
  server.addService(services.GreeterService, { sayHello: sayHello });
  server.bindAsync(target, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
  console.log(`server listening on ${target}`);
};

main();
