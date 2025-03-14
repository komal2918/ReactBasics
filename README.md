Hello Guys, I am learning react.

1. Dev Dependency vs normal dependency ? 
Dev Dependency is used only in development phase while other dependencies are used even in the production.
like parcel is dev dependency.
 

 commands used : 
 1. npm init (To init new/existing package by creating package.json file which might stores approximate versions of packages installed) 
 - tilde -> major version updates possible
 - caret -> minor version updates possible (perferred to use)
 2. npm install -D parcel  (To install the parcel package) (package-lock.json file created which stores exact package version which is used)
 3. npm install (to fetch node modules from the versions used in package.json and package-lock.json files)

