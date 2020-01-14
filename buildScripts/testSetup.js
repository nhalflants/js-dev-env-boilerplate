// Babel should transpile our test before Mocha can run the test
require('@babel/register');

// Disable webpack feature that Mocha doesn't understand 
require.extensions['css'] = function(){};
