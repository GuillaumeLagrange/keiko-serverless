import { PARTITION_KEY, SORT_KEY } from './dynamoDB';
import ServerlessCdkPlugin, { ServerlessProps } from '@swarmion/serverless-cdk-plugin';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class OrchestratorDynamodb extends ServerlessCdkPlugin.ServerlessConstruct {
  public dynamodbArn: string;
  public dynamodbName: string;

  constructor(scope: Construct, id: string, serverlessProps: ServerlessProps) {
    super(scope, id, serverlessProps);

    const table = new Table(this, 'OrchestratorTable', {
      partitionKey: { name: PARTITION_KEY, type: AttributeType.STRING },
      sortKey: { name: SORT_KEY, type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
    });

    this.dynamodbArn = table.tableArn;
    this.dynamodbName = table.tableName;
  }
}

export const getCdkProperty =
  ServerlessCdkPlugin.getCdkPropertyHelper<OrchestratorDynamodb>;
