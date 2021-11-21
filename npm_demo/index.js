var _ = require('underscore');

// Core module
// Files or folder
// node_module

var contains = _.contains([1,2,3],2);
console.log(contains);

// if in any package the dependicies has a different 
// version then it is saved in the particular package folder
// rather then node_module.

/*
    version: 'x.x.x' => major.minor.patch
    ^dgt.x.x => dgt <= major version should be same
    ~dgt.x.x => dgt.x <= minor version should be same
    dgt.x.x => dgt.x.x <= exact same version
*/

// we can list the version of dependicies as
/*
    npm list => only dependicies in package.json
    npm list -a => all the dependencies in node_module
    npm list --depth=0 => till depth 0 dependicies
    npm view mongoose dependencies
    npm view mongoose versions
*/

// for installing specific version
/*
    npm i package_name@version
*/

// for development dependencies
/*
    npm install package_name --save-dev => Only for devlopment purpose
*/

// for uninstalling a package
/*
    npm un package_name
*/

// for publishing a package
/**
 * make the directory with files used
 * create an account
 *      -> npm adduser
 * login to account
 *      -> npm login
 * npm publish
 * -> name should be unique
 * this package can be installed by
 *      npm install package_name
 */
