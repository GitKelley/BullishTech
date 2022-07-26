# Bullish Tech Challenge

Cucumber-based test infrastructure used to test front-end and back-end applications

  * [Getting Started](#getting-started)
  * [Building](#building)
  * [Running](#running)
    + [Functional Tests](#functional-tests)
      - [Running without a container](#running-without-a-container)
  * [Debugging / Reporting](#debugging--reporting)

## Getting Started
- Download and JAR file from Box
- Pull repo locally
- `npm install`

## Building
This was designed to work with docker, however an issue with the chrome binary is preventing this usage, otherwise
Nothing special here:
```shell
docker build --tag bullishTech:<version> .
```
## Running
### Functional Tests
This needs to be run via node locally for now,
```shell
npm run all_tests
```
When docker is working, it will look something like this
```shell
docker run -it bcc:v1   
```

#### Running without a container
This is the only way the framework will currently run
```shell
npm run all_tests
```

***
## Debugging / Reporting
Reports currently reside in the /reports directory

| Artifact           | Path   | Description |
| ------------------ | ------ | ----------- |
| html-reports/         |  `/reports/html-reports/<version>.html`   | Html representation of generated JSON report for UI tests
| cucumber_report_api   |  `/reports/cucumber_report_api.html`      | Html representation of the API specific tests