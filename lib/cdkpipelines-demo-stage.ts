import {CdkpipelinesDemoStack} from "./cdkpipelines-demo-stack"
import * as cdk from "@aws-cdk/core"

export class CdkPipelineDemStage extends cdk.Stage {
    public readonly urlOutput: cdk.CfnOutput
    constructor(scope:cdk.Construct,id:string,props:cdk.StageProps){
        super(scope,id,props)

        const service = new CdkpipelinesDemoStack(this,'WebService')

        this.urlOutput = service.url

    }

}