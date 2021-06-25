import parseArgs from "minimist";
import grpc from "grpc";
import messages from "./proto/helloworld_pb";
import services from "./proto/helloworld_grpc_pb";

function main() {
  const argv = parseArgs(process.argv.slice(2), {
    string: "target",
  });
  const target = argv.target ?? "[::1]:50051";
  const client = new services.GreeterClient(
    target,
    grpc.credentials.createInsecure()
  );
  const request = new messages.HelloRequest();
  const user = argv._.length > 0 ? argv._[0] : "world";
  request.setName(user);
  client.sayHello(request, function (_err, response) {
    console.log("Greeting:", response.getMessage());
  });
}

main();
