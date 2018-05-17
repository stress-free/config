// Config files can either be JSON or JS files that export
// their config via module.exports. The latter allows for
// configuration to be based on the results of a function.
// 
// "With great power comes great responsibility." Be careful
// when attempting to use those sorts of features. The
// configuration here is primarily meant to be static and
// easy to understand, so conditional configuration will
// make it harder to reason about how your code works in
// production.
//
// But we do get the nice advantage of comments in the our
// configuration this way (as can be seen here!) so it can
// still be worthwhile to at least have the `common` file
// in JS just to leave explanatory comments on each of the
// configuration options.

Object.assign(module.exports, {
  foo: 'bar', // what example can be complete without this?
  holyHandGrenadeOrdering: [1, 2, 5, 3], // arrays!
  mySqlConfig: {
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: 'SECRETSWILLREPLACETHIS',
    database: 'db',
  }, // nested objects you can easily use in your libraries!
  // The following is a good idea. Even if every environment
  // will have a different value for a configuration variable
  // defining it in common with a definition makes it clear to
  // anyone reviewing the configuration that it actually exists
  // and what it's for.
  toBeReplaced: 'willneverseethis', // replaceable
  // The following is a bad idea, conflating config with
  // utility functions, don't do this normally without a
  // VERY good reason why it makes sense as part of a config
  unixSec: d => (d.getTime() - (d.getTime() % 1000)) / 1000,
})

