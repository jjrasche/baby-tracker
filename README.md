# BabyMonitor


## Steps in automation of data to github pages
1. Postman(newman) command line run collection to get csv data
    * `newman run BabyConnect.postman_collection.json -e BabyConnectRunnerEnv.postman_environment.json --export-environment data.json --reporters cli,json --reporter-json-export outputfile.json`
    * save file into git repo
1. git push new file data
1. build application around data
   * CSVParserService
   * EntryService
   * Create methods that slice up data
  
## Stretch Goals
1. Display data graphically
1. Use Tensor flow to play with machine learning




### working with Newman
Install: `npm install -g newman`

`newman run BabyConnect.postman_collection.json --environment BabyConnectRunnerEnv.postman_environment.json --reporters json --reporter-cli-no-summary	--reporter-cli-no-failures --reporter-cli-no-assertions --reporter-cli-no-success-assertions --reporter-cli-no-banner`


`newman run BabyConnect.postman_collection.json --environment BabyConnectRunnerEnv.postman_environment.json --reporter-cli-no-summary	--reporter-cli-no-failures --reporter-cli-no-assertions --reporter-cli-no-success-assertions --reporter-cli-no-banner`


