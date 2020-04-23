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

* setup Static Website via Serverless:

  https://www.serverlessops.io/blog/static-websites-on-aws-s3-with-serverless-framework
  
* s3 bucket and policy

  https://github.com/serverless/examples/blob/master/aws-node-single-page-app-via-cloudfront/serverless.yml#L18
