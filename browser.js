/*
 * Basic config handling logic. This works on the following principles:
 * 1. The NODE_ENV chooses the environment and loads the configuration
 *    variables required for said environment.
 * 2. Configuration variables common to all or most environments should
 *    be stored in the common file. Only differences should be in stored
 *    elsewhere.
 * 3. Secrets, if they exists, will be loaded next. Should be injected by
 *    the build system.
 * 4. Environment variables override the configuration variables when
 *    necessary. (Usually only for local testing.)
 * 5. This configuration object cannot be modified after initializing
 *    to make production debugging issues much less painful. If you allow
 *    changes to the config object at runtime you also need to add change
 *    tracking and reporting to properly figure things out.
 */

/* eslint-disable import/no-dynamic-require */
import common from 'Config/common.js'

console.log('common', common)

const load_env_config = async (env) => {
  const config_path = `Config/${env}`
  let env_config
  try {
    env_config = await import(config_path)
  } catch {
    env_config = {}
  }
  return env_config
}

const env_config = load_env_config(process.env.NODE_ENV)

console.log('env', env_config)

const secrets = fs.existsSync(`${root}/secrets.json`) || fs.existsSync(`${root}/secrets.js`) ?
  require(`${root}/secrets`) : {}
///* eslint-enable import/no-dynamic-require */
//
//const overrides = Object.entries(process.env).map((entry) => {
//  try {
//    return [entry[0], JSON.parse(entry[1])]
//  } catch (e) {
//    return entry
//  }
//}).reduce((accum, entry) => {
//  accum[entry[0]] = entry[1]
//  return accum
//}, {})
//
//Object.assign(module.exports, common, config, secrets, overrides)
//Object.freeze(module.exports)
