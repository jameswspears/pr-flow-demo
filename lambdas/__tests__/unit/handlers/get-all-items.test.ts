import { getAllItemsHandler } from '../../../src/handlers/get-all-items';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { mockClient } from 'aws-sdk-client-mock';
import type { APIGatewayEvent } from 'aws-lambda';

// This includes all tests for getAllItemsHandler()
describe('Test getAllItemsHandler', () => {
  const ddbMock = mockClient(DynamoDBDocumentClient);

  beforeEach(() => {
    ddbMock.reset();
  });

  it('should return ids', async () => {
    const items = [{ id: 'id1' }, { id: 'id2' }];

    // Return the specified value whenever the spied scan function is called
    ddbMock.on(ScanCommand).resolves({
      Items: items,
    });

    const event = {
      httpMethod: 'GET',
    };

    // Invoke helloFromLambdaHandler()
    const result = await getAllItemsHandler(event as APIGatewayEvent);

    const expectedResult = {
      statusCode: 200,
      body: JSON.stringify(items),
    };

    // Compare the result with the expected result
    expect(result).toEqual(expectedResult);
  });
});
