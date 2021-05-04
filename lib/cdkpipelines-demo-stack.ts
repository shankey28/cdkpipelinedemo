import * as cdk from '@aws-cdk/core';
import * as apigtwy from '@aws-cdk/aws-apigateway'
import * as lambda from '@aws-cdk/aws-lambda'
import { CfnOutput } from '@aws-cdk/core';

export class CdkpipelinesDemoStack extends cdk.Stack {

  public readonly url:cdk.CfnOutput
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new lambda.Function(this,'HelloWorld',{
      code: lambda.Code.fromAsset('lambda'),
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler.hello'

    })

    const api = new apigtwy.LambdaRestApi(this,'HelloworldApi',{
      description: 'Rest API for a simple App',
      handler: handler
    })

    this.url = new CfnOutput(this,'ApiUrl',{
      value: api.url
    })



  }
}
