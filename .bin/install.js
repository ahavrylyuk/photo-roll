const validate = require('git-validate');

validate.configureHook('pre-commit', ['lint', 'test']);
