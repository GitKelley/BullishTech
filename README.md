# Bullish Tech Challenge

Cucumber-based test infrastructure used to test front-end and back-end applications

  * [Getting Started](#getting-started)
  * [Building](#building)
  * [Running](#running)
    + [Functional Tests](#functional-tests)
      - [Running without a container](#running-without-a-container)
  * [Debugging / Reporting](#debugging--reporting)
  * [Final thoughts](#final-thoughts)

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
docker run -it bullishTech:<version>
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

## Final thoughts
This exercise definitely tested me. Theres still a boat load of improvements I would like to make to this framework,
however I figured I'd leave it at where it is now, as it gets the job done. Proper docker integration would be a great improvement.
The API seems to return wonky results, 500s instead of 400s etc. If this is intentionally designed this way, then my testing framework
would have alerted the team to the issues. 
There's still loads more coverage I could add too, just those four endpoints have a lot of testability.
The UI part was pretty basic in terms of testability, however there's always other scenarios we could come up with.
I chose to strike a balance between coverage and priority. I feel as though the cases I've added to this framework
would give the team confidence in saying these two applications are either ready for env promotion or not.
