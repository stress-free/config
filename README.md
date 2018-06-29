# @cardash/config

[![CircleCI](https://circleci.com/gh/cardash/config.svg?style=svg&circle-token=08f5245c0844f58fdd8e431375b19305410264fa)](https://circleci.com/gh/cardash/config)

Configuration management library, standardizes application storage and access.

## Install

```sh
npm install --save @cardash/config
```

## Usage

Create a `config` directory in the root of your application. Inside of this directory you can create various configuration files in either JSON or JS files that produce a config object on `module.exports`.

For front end projects, create your `config` directory inside the `app` folder.

All `config` directories *MUST* have a `common.{js|json}` file to house configuration. It is recommended that this is a JS file so you can add comments on what the configuration options do in the code. It is recommended that ALL configuration options are specified in this file so they all have documentation.

Next create configuration files for each of your environments (e.g. `test.json`, `development.json`, `staging.js`, `production.json`, etc). It is recommended that these files be JSON files and only house the configurations that will be changed versus what is in `common`. If your `NODE_ENV` doesn't match any file in here, it will be skipped entirely and fall back to the `common` configuration.

Finally, you may optionally have a `secrets.{js|json}` file for secrets. This file should NOT be committed to the codebase, and instead injected during the build process from some secure vault system.

For front end projects, inside your `config` folder you must include an `index.js` file that exports all the configuration files as a default export. (This is provided for you in the `hello-react-frontend` template)

```
import common from './common'
import development from './local'
import production from './production'
import staging from './staging'
import secrets from './secrets'

const configs = {
  common,
  development,
  production,
  staging,
  secrets,
}

export default configs
```

Once this is done, *anywhere* in your codebase you can get the configuration by requiring this library:

```js
const config = require('@cardash/config')
```

or 

```js
import config from @cardash/config
```

It uses the process's `cwd` to determine which configuration to load the first time, and then returns a frozen object on all subsequent `require`s within the codebase, so no clumsy relative file require is necessary.
