# Oltrix Website

## Run locally web app

```sh
npm start
```

## Deploy to AWS

```sh
sls deploy --stage dev
```

## Run tests

```sh
npm run test
```

## Done:
* Serverless initial setup
* integrated TypeScript and ESLinter
* integrated Parcel bundler
* local dev server
* React Hello World App
* S3 bucket setup and asset deployment
* S3 public access

## TODO:
* integrate Route53
* move secure data to Secret Manager or private Github repository, start with: aliasHostedZoneId, aliasDNSName, webS3Bucket
* support staging environments via Route53
* integrate CloudFormation
* SSL only
* minimize JavaScript assets
* select and integrate testing framework: Jest vs Mocha vs Ava
* implement basic UI :)
* configure GitHub Actions for building and deploying

#### Online useful Resources:

* Structure Environments Across AWS Accounts

  https://serverless-stack.com/chapters/structure-environments-across-aws-accounts.html
  
* Setup Static Website via Serverless:

  https://serverless-stack.com/chapters/share-route-53-domains-across-aws-accounts.html

  https://www.serverlessops.io/blog/static-websites-on-aws-s3-with-serverless-framework

  https://github.com/tobilg/serverless-aws-static-websites
  
* S3 bucket policy and CloudFront settings

  https://github.com/serverless/examples/blob/master/aws-node-single-page-app-via-cloudfront/serverless.yml#L18



https://www.serverless.com/learn/
https://www.serverless.com/learn/courses/full-stack-application-development-on-aws/
https://www.serverless.com/learn/courses/serverless-for-frontend-developers/ !
https://www.serverless.com/learn/tutorial/amazon-route-53-domain-registration/ !