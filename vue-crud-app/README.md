# vue-crud-app

## Project setup
```
npm install
```

### Add dependencies
```
npm install vue bootstrap-vue bootstrap
npm install vue-flash-message
npm install --save axios vue-axios
```

### Insert this in main.js
```
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### To access data from http
```
Vue.axios.get(api).then((response) => {
  console.log(response.data)
})
 
this.axios.get(api).then((response) => {
  console.log(response.data)
})
```

### References
https://vuejs.org/v2/guide/
https://bootstrap-vue.org/docs
https://www.npmjs.com/package/axios
https://mongoosejs.com/docs/connections.html
https://www.mongodb.com/cloud/atlas

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
