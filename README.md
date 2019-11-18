# kintone-ui-component Auto
Applying Automation in kintoneUIComponent testing

### Clone source to local machine
```
$ mkdir Tesing-Automation-Project
$ cd Tesing-Automation-Project
```

1. Download selenium-server-standalone
```
$ mkdir webdriverio-test
$ cd webdriverio-test
$ curl -O http://selenium-release.storage.googleapis.com/3.5/selenium-server-standalone-3.141.59.jar
```
2. Download chromedriver <br>
http://chromedriver.chromium.org/downloads

3. Clone source
```
$ cd Tesing-Automatio-Project
$ git clone https://github.dev.cybozu.co.jp/SDVN/kintone-UI-Component-Auto-test.git$ 
$ cd kintone-UI-Component-Auto-test
$ npm install
```
### Run Test 
1 Start selenium-standalone
```
$ java -jar -Dwebdriver.chrome.driver=./chromedriver.exe selenium-server-standalone-3.141.59.jar
```
2. At config.json 
- Edit testing domain and app test suitably
- Config folder test
```
"folderTest": "xxx" (js or react) , default value is 'react'
```
5. Run test 
```
$ npm test
```

