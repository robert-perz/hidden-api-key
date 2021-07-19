# hidden-api-key

## Front-end setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

  
## Back-end setup
It is needed to have running back-end and front-end at the same time and generated API key:

- In the `server` folder rename `.env.temp` to `.env`
- Generate API key at https://openweathermap.org/api
- Add API key to the `server/.env`


### Install dependencies
```
cd server
npm install
```

### Start the server
```
nodemon index.js  or npm run start
```