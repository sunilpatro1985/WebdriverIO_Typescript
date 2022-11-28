# WebdriverIO_Typescript
WebdriverIO with Typescript topics &amp; framework

---------------------------------------------------------------
The "test" directory has all the basic topics to learn the webdriverIO (Basics to advanced)

Refer [wdio play list](https://youtube.com/playlist?list=PLPO0LFyCaSo3oedws079pCNtppXAZdjv6) for each wdio topic in detail

This includes
* Handling browser elements in wdio
* Performing browser actions and wdio apis
* Debugging tests
* Typescript basics wrt wdio
* Configurations
* Allure reporting
* Running tests using 
  * command line
  * GithubActions (manual & auto trigger)
  * Browserstack
* Parallel testing

  
------------------------------------
To run the tests locally or by using githubactions -   
Change the specs section of wdio.cong.ts file   
Open command prompt and navigate to project directory   
and run below command -   
`npm run wdio`

To run the tests on browserstack -  
Add a new file under the project directory as ".env" (no file name) with below value   
  BROWSERSTACK_USERNAME = "something"  
  BROWSERSTACK_ACCESS_KEY = "something"  
Change the specs section of wdio.cong.bstack.ts file and run below command -   
`npm run wdio:bstack`  

To run the tests by triggering githubactions manually -  
Switch to "practice branch"
Navigate to Actions tab  
click on the "CIBstack Dispatch" workflow  
Run workflow with proper parameter selection  

-----------------------------------------

  
  
  

