# nodejs-api

### Create the following directories and folders

```
cd nodejs-api
touch server.js

mkdir api
mkdir api/controllers
mkdir api/models
mkdir api/routes

touch api/controllers/userController.js
touch api/models/userModel.js
touch api/routes/userRoutes.js
```

### Create package.json

```
npm init
```

### Install dependencies

```
npm i express cors body-parser mongoose
npm i nodemon --save-dev
```

### Update package.json

```
"scripts": {
  "start": "nodemon server.js"
},
```

### Run the api and mongodb

```
npm run start
mongod
```

### Test in browser or Postman

```
http://localhost:3000/
```
