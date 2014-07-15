Configurable wrapper of the `winston` package supporting:

 - `simple` logging (console logging)
 - `file` logging (logging to a file)
 - `loggly` logging (logging to loggly.com)


## Options
See sample configuration files for expected structure of `options` parameter.

If `handleExceptions` is not provided in `details` section of the options then its value will be defaulted to true. I.e. the logger handle exceptions by default.