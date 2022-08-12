import { getCdkProperty } from "resources";

export const nftTableDynamoDBReadPolicies = {
  Effect: 'Allow',
  Resource: [getCdkProperty('dynamodbArn')],
  Action: ['dynamodb:GetItem', 'dynamodb:Query'],
};
