import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";

const configuration = {
  apiVersion: "2012-08-10",
  endpoint: "http://localhost:8000",
};

const ddbClient = new DynamoDBClient(configuration);

const params = {
  AttributeDefinitions: [
    {
      AttributeName: "id",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "id",
      KeyType: "HASH",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "SampleTable",
  StreamSpecification: {
    StreamEnabled: false,
  },
};

const run = async () => {
  try {
    const table = await ddbClient.send(new CreateTableCommand(params));
    return table;
  } catch (err) {
    console.error(err);
  }
};

run();
