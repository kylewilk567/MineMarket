import { SSTConfig } from "sst";
import { NextjsSite, Table } from "sst/constructs";
import table from "@packages/file"

export default {
  config(_input) {
    return {
      name: "webstore-admin",
      region: "us-east-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {

      // const table = new Table(stack, "myTable", {
      //   fields: {
      //     counter: "string",
      //   },
      //   primaryIndex: { partitionKey: "counter" },
      // });

      const site = new NextjsSite(stack, "site", {
        bind: [table(stack)],
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
