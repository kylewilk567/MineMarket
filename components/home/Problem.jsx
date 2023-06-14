import React from "react";
import ClientPrinter from "@components/shared/ClientPrinter";
import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  GetCommand,
  UpdateCommand,
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";

/*
    Bring up problem
    Agitate that pain (explain specifically the issue)

    Explain the solution

    Ex: Dogs are not well trained. They jump on people and eat birds. Get training!

    Also good to add a video or gif of some sort.
*/
const Problem = () => {
  /**
   *
   * @returns count
   */
  // const getCount = async () => {
  //   const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

  //   const get = new GetCommand({
  //     TableName: Table.myTable.tableName,
  //     Key: {
  //       counter: "hits",
  //     },
  //   });
  //   const results = await db.send(get);
  //   let count = results.Item ? results.Item.tally : 0;
  //   return count;
  // };

  // /**
  //  *
  //  * @returns new count
  //  */
  // const incrementCount = async () => {
  //   // Read from the table...
  //   let count = getCount();

  //   const update = new UpdateCommand({
  //     TableName: Table.myTable.tableName,
  //     Key: {
  //       counter: "hits",
  //     },
  //     UpdateExpression: "SET tally = :count",
  //     ExpressionAttributeValues: {
  //       ":count": ++count,
  //     },
  //   });
  //   await db.send(update);
  //   return count;
  // };

  return <div>{/* <ClientPrinter label="Table" value={tableOb} /> */}</div>;
};

const tableOb = Table.myTable.tableName;
console.log(tableOb);

export default Problem;
