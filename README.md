# React Library Template
This is library template with **ReactJS v18**, **storybook v7**, **Typescript**, **SCSS**, **Rollup.js**.
<br/>

## Guide

### 🧩 Make Your Library Project with this template
<img width="919" alt="image" src="https://github.com/Moonchaeyeon/react-library-template/assets/49464171/9504d55d-14ee-4ec1-9aec-84dd0343f852">
<br/>

Click `Use this template` button to create new repository using this template <br/>
<br/>
Then clone that repository locally
<br/>

```bash
git clone "[github url using this template]"
```
<br/>

### ⚙️ Set Library Info
You can change library information in `package.json`
```json
{
	"name": "[library name]",
	"author": {
		"name": "[your name]",
		"email": "[your email]"
	},
	"version": "[library version]",
}
```
<br/>

### ☕️ Install Packages
Install related packages.
```bash
yarn
```
<br/>

### 🛍 Customize Your Library
* working directory : `./src`
* export your components, functions, etc. from `./src/index.ts`
<br/>


### 🧪 Test Your Library
You can test your UI components with `Storybook`
```bash
yarn storybook
```
<br/>

### 🔨 Build
Build your library with `Rollup.js.`
```bash
yarn build
```
* Your library build file will generate on `./dist`
<br/>

### 🎉 Publish Your Library to NPM
```
npm login
yarn publish --access public
```
* Login with your npm account
	* to create a new account 👉 https://www.npmjs.com/
* Publish your library
	* When publishing for the first time, the access property must be set to public.
	* The next publication should always be a higher version than the previous publication.
