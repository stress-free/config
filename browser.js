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

import config from '../../../config'

const merged = Object.assign({}, config.common, config[process.env.NODE_ENV] || {}, config.secrets || {})

export default Object.freeze(merged)
