A full stack app built using mongodb, expressjs, reactjs and nodejs

# [MERN Deployment](https://full-stack-mern-app.verecel.app) in Vercel

#### Step 1: Exclude client build from .gitignore

```javascript
# Production
# /build
```

#### Step 2: Configure scripts in package.json of the server

```javascript
...
"scripts": {
   "start": "node server.js"
}
...
```

#### Step 3: Configure server.js for production deployment

```javascript
if(process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}
```

#### Step 4: Configure vercel.json

```javascript
{
    "version": 2,
    "builds": [
        {
            "src": "./server.js",
            "use": "@vercel/node"
        }
    ],
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/server.js"
        }
    ]
}
```

#### Step 5: Login to Vercel with Github account, import the project and deploy by adding required .env credentials
