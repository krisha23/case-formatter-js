# case-formatter-js
Github repository for `case-formatter-js` npm package.

# How to use?
1. Install using *npm*

   Run `npm install case-formatter-js`.
   
2. Import the module and initialize:

   `var CaseConverterJS = require('case-formatter-js')`;
   
   `var formatter = new CaseConverterJS();`
  
3. Use in your code:

   `formatter.snakeCase('your string);`
   
# Available Cases
1. `camelCase()`:

   eg: `formatter.camelCase('my awesome string);`
   
   returns "myAwesomeString".
   
2. `flatCase()`:

   eg: `formatter.flatCase('my awesome string);`
   
   returns "myawesomestring".

3. `kebabCase()`:

   eg: `formatter.kebabCase('my awesome string);`
   
   returns "my-awesome-string".
   
4. `pascalCase()`:

   eg: `formatter.camelCase('my awesome string);`
   
   returns "MyAwesomeString".
   
5. `snakeCase()`:

   eg: `formatter.snakeCase('my awesome string);`
   
   returns "my_awesome_string".
   
6. `upperSnakeCase()`:

   eg: `formatter.upperSnakeCase('my awesome string);`
   
   returns "My Awesome String".