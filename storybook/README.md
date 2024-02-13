# creditsystem.core.front

## Users

<b>npm.reader</b> permissions readonly

<b>npm.writer</b> permissions read & write

## Registry URL

http://ec2-3-123-8-188.eu-central-1.compute.amazonaws.com:808/repository/npm/

## Commands

### Login:

```
npm login --registry=<Registry URL>
```

or

```
npm-cli-login -u <user> -p <password> -e <email> -r <Registry URL>
```

## Publish:

```
npm publish
```

## Install:

```
yarn add <package>@<version> --registry=<Registry URL>
```
