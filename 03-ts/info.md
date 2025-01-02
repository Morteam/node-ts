https://gist.github.com/Klerith/47af527da090043f604b972b22dd4c01
https://nodejs.org/en/learn/typescript/introduction

* Install TS y Node types ``npm i -D typescript @types/node``
* Start TS config and create tsconfig.json with NPX (Node Package Execute) ``npx tsc --init --outDir dist/ --rootDir src``
* Old way to transpile and run:
    * Transpile TS -> JS in "dist" folder ``npx tsc`` or ``npx tsc --watch``, tsc means Typescript Compiler
    * Run JS Code of "dist" folder ``npx nodemon dist/``
* New way: 
    * ``npm install -D ts-node nodemon``, ``tsnode`` allows us execute directly TS code in Node (without handly transpile)
    * Configure Nodemon in nodemon.json:
    ```json
        {
            "watch": ["src"],
            "ext": ".ts,.js",
            "ignore": [],
            "exec": "npx ts-node ./src/app.ts"
        }
    ```
    * In package.json create ``"dev": "nodemon"`` and the run into console ``npm run dev``
    * Install Rimraf to rebuild the "dist" folder:
        * ``npm i -D rimraf``
        * Add in package.json the next command ``"build": "rimraf ./dist && tsc"``, this command remove the .dist folder and the rebuild it
        * Finally, in the same file package.json include the command start to do all job complete ``npm run build && node dist/app.js``, re build the dist and the run one time node (no watch)