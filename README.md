# @cardash/config

Configuration management library, standardizes application storage and access.

## Install

```sh
npm install --save git@github.com:cardash/config
```

(Hopefully in the future this will be published and the install will be simpler)

## Usage

Create a `config` directory in the root of your application. Inside of this directory you can create various configuration files in either JSON or JS files that produce a config object on `module.exports`.

All `config` directories *MUST* have a `common.{js|json}` file to house configuration. It is recommended that this is a JS file so you can add comments on what the configuration options do in the code. It is recommended that ALL configuration options are specified in this file so they all have documentation.

Next create configuration files for each of your environments (e.g. `test.json`, `development.json`, `staging.js`, `production.json`, etc). It is recommended that these files be JSON files and only house the configurations that will be changed versus what is in `common`. If your `NODE_ENV` doesn't match any file in here, it will be skipped entirely and fall back to the `common` configuration.

Finally, you may optionally have a `secrets.{js|json}` file for secrets. This file should NOT be committed to the codebase, and instead injected during the build process from some secure vault system.

Once this is done, *anywhere* in your codebase you can get the configuration by requiring this library:

```js
const config = require('@cardash/config')
```

It uses the process's `cwd` to determine which configuration to load the first time, and then returns a frozen object on all subsequent `require`s within the codebase, so no clumsy relative file require is necessary.