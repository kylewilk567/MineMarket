import { Table } from "sst/constructs";

export default function table(stack) {
    return new Table(stack, "myTable", {
        fields: {
          counter: "string",
        },
        primaryIndex: { partitionKey: "counter" },
      });
}

