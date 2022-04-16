### Sample for organize multiple functions with cloud function

1. Create a Firebase Project
2. set up firebase cli

```
$ npm install firebase-functions@latest firebase-admin@latest --save
$ npm install -g firebase-tools
```

3. Initialize your project

```
$ firebase login
$ firebase init firestore
$ firebase init functions
```

4. Emulate execution of your functions

```
$ npm run serve
```