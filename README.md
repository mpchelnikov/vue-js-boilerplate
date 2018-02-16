# vue-js-boilerplate

> Vue.js boilerplate CLI include webpack, vue-router, vuex and HMR. Production ready

## Steps to quick start:
You can install boilerplate from npm or clone from gitlab and setup:

### 1. Install from npm
This CLI require modern node.js, npm and git installed.

Create or go to your project's directory
<br>
Run `npm i -g vue-js-boilerplate` (global flag is required)
<br>
Run `vue-bp-init`
<br>
Then you can run `npm install` and start developing

### 2. Cloning project

Clone project: `git clone https://gitlab.com/m_pchelnikov/vue-boilerplate.git my-project`
<br>
Go to new project's directory: `cd my-project/`

#### For Linux:
Make init.sh file executable: `chmod +x init.sh`
<br>
Execute it: `./init.sh`

#### For other OS or manual setup
All you need is in `./template/` directory

Install dependencies: `npm install`
<br>
Set remote: `git remote add origin https://github.com/user/repo.git`
<br>
Rename your project in `build/index.html`, `build/webpack.base.config.js` and `package.json`

## Build Setup
Serve with hot reload at localhost:8080 : `npm run dev`
<br>
Build for production with minification : `npm run build`

## Tips
- Mark `src` directory as source in your IDE
- Place all static files (images, fonts etc) in assets directory
- Make components as small as you can and collect them in page
- See how works router, component including and props passing, start from `router/index.js` file

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

<small>2018-02-15</small>
