const AWS = require("aws-sdk");
const { get } = require("lodash");

const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
  async get(ID, TableName) {
    const params = {
      TableName,
      Key: {
        ID,
      },
    };

    const data = await documentClient.get(params).promise();

    if (!data || !data.Item) {
      throw Error(
        `There was error returning data for id ${ID} from table ${TableNAme}`
      );
    }

    console.log(data);

    return data.Item;
  },

  async write(data, TableName) {
    if (!data.ID) {
      throw Error("There was no id on the item data");
    }

    const params = {
      TableName,
      Item: data,
    };

    const res = await documentClient.put(params).promise();

    if (!res) {
      throw Error(
        `There was an error inserting ID of ${ID} on table ${TableNAme}`
      );
    }

    return data;
  },

  update: async ({
    tableName,
    primaryKey,
    primaryKeyValue,
    updateKey,
    updateValue,
  }) => {
    const params = {
      TableName: tableName,
      Key: { [primaryKey]: primaryKeyValue },
      UpdateExpression: `set ${updateKey} = :updateValue`,
      ExpressionAttributeValues: {
        ":updateValue": updateValue,
      },
    };

    return documentClient.update(params).promise();
  },
};

module.exports = Dynamo;
