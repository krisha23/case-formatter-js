# case-formatter-js
Github repository for `case-formatter-js` npm package.

# How to use?
1. Install using *npm*

   Run `npm install case-formatter-js@latest`.
   
2. Import the module and initialize:

   `var CaseConverterJS = require('case-formatter-js')`;
   
   `var formatter = new CaseConverterJS();`
  
3. Use in your code:

   `formatter.snakeCase('your string);`
   
# Available Cases
1. `camelCase()`:

   eg: `formatter.camelCase('my awesome string');`
   
   returns "myAwesomeString".
   
2. `flatCase()`:

   eg: `formatter.flatCase('my awesome string');`
   
   returns "myawesomestring".
   
3. `upperFlatCase()`:

   eg: `formatter.upperFlatCase('MYAWESOMESTRING');`
   
   returns "myawesomestring".

4. `kebabCase()`:

   eg: `formatter.kebabCase('my awesome string');`
   
   returns "my-awesome-string".
   
5. `upperKebabCase()`:

   eg: `formatter.upperKebabCase('my awesome string');`
   
   returns "MY-AWESOME-STRING".
   
6. `pascalCase()`:

   eg: `formatter.camelCase('my awesome string');`
   
   returns "MyAwesomeString".
   
7. `snakeCase()`:

   eg: `formatter.snakeCase('my awesome string');`
   
   returns "my_awesome_string".
   
8. `upperSnakeCase()`:

   eg: `formatter.upperSnakeCase('my awesome string');`
   
   returns "MY_AWESOME_STRING".
