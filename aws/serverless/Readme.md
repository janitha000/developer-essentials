### Serverless patterns
- https://link.medium.com/IzLmRJJFXpb


### Best practices
- https://www.serverlessguru.com/blog/aws-serverless-development-coding-best-practices
- https://www.ranthebuilder.cloud/post/aws-lambda-cookbook-elevate-your-handler-s-code-part-5-input-validation

### Monolothis Lambda vs Many Lambda
- https://hackernoon.com/aws-lambda-should-you-have-few-monolithic-functions-or-many-single-purposed-functions-8c3872d4338f

### Limits to consider
- https://dev.to/aws-builders/aws-limits-to-keep-in-mind-while-developing-a-serverless-application-4oef

### Testing
- https://javascript.plainenglish.io/how-to-start-typescript-node-aws-function-with-serverlessjs-ef4b55910127
- https://levelup.gitconnected.com/unit-test-and-integration-test-for-aws-lambda-nodejs-in-typescript-2235a0f69f5

### Advanced with Typescript
- https://levelup.gitconnected.com/creating-a-simple-serverless-application-using-typescript-and-aws-part-1-be2188f5ff93
- https://levelup.gitconnected.com/creating-a-simple-serverless-application-using-typescript-and-aws-part-2-2f9192717015

### serverless doc
- https://www.serverless.com/framework/docs/providers/aws/events/apigateway#example-lambda-proxy-event-default

### Step function local development
- https://tsh.io/blog/aws-step-functions-local-tutorial/

- aws stepfunctions --endpoint-url http://localhost:8083 create-state-machine --definition file://state-machine.asl.json --name "HelloWorld" --role-arn "arn:aws:iam::012345678901:role/DummyRole"
- aws stepfunctions --endpoint-url http://localhost:8083 start-execution --state-machine-arn arn:aws:states:ap-southeast-1:123456789012:stateMachine:HelloWorld
- aws stepfunctions --endpoint-url http://localhost:8083 delete-state-machine --state-machine-arn arn:aws:states:ap-southeast-1:123456789012:stateMachine:HelloWorld

### Codepipelne with multiple yaml files
- https://seed.run/blog/how-to-build-a-cicd-pipeline-for-serverless-apps-with-codepipeline-and-codebuild.html

### Request validation along with documentation
- https://stackoverflow.com/questions/49133294/request-validation-using-serverless-framework

### Development with serverless.ts
- https://github.com/SamWSoftware/interviewAPI

### PostgreSQL
- https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface
