# full-stack-mern-app
A full stack app built using mongodb, expressjs, reactjs and nodejs

# Vercel Deployment

#### Step 1: Exclude client build from .gitignore

#### Step 2: Configure scripts in package.json of the server

```javascript
...
"scripts": {
   "start": "node server.js"
}
...
```
#### Step 3: Configure vercel.json

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
