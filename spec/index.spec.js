var CaseFormatter  = require('../index');
var formatter = new CaseFormatter();
var testString = 'my awesome string';

describe('Camel case', function () {
    it('should work', function() {
        let str = formatter.camelCase(testString);
        expect(str).toEqual('myAwesomeString');
    });
    it('should work', function() {
        let str = formatter.camelCase('test');
        expect(str).toEqual('test');
    });
    it('should work', function() {
        let str = formatter.camelCase(123);
        expect(str).toEqual('123');
    });
    it('should work', function() {
        let str = formatter.camelCase('123 abc def');
        expect(str).toEqual('123AbcDef');
    });
    it('should work', function() {
        let str = formatter.camelCase('123 456');
        expect(str).toEqual('123456');
    });
    it('should return empty', function() {
        let str = formatter.camelCase(null);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.camelCase(undefined);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.camelCase('');
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.camelCase('   ');
        expect(str).toEqual('');
    });
});

describe('Flat case', function () {
    it('should work', function() {
        let str = formatter.flatCase(testString);
        expect(str).toEqual('myawesomestring');
    });
    it('should work', function() {
        let str = formatter.camelCase('test');
        expect(str).toEqual('test');
    });
    it('should work', function() {
        let str = formatter.flatCase(123);
        expect(str).toEqual('123');
    });
    it('should work', function() {
        let str = formatter.flatCase('123 abc def');
        expect(str).toEqual('123abcdef');
    });
    it('should work', function() {
        let str = formatter.flatCase('123 456');
        expect(str).toEqual('123456');
    });
    it('should return empty', function() {
        let str = formatter.flatCase(null);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.flatCase(undefined);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.flatCase('');
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.flatCase('   ');
        expect(str).toEqual('');
    });
});

describe('Upper Flat case', function () {
    it('should work', function() {
        let str = formatter.upperFlatCase(testString);
        expect(str).toEqual('MYAWESOMESTRING');
    });
    it('should work', function() {
        let str = formatter.upperFlatCase('test');
        expect(str).toEqual('TEST');
    });
    it('should work', function() {
        let str = formatter.upperFlatCase(123);
        expect(str).toEqual('123');
    });
    it('should work', function() {
        let str = formatter.upperFlatCase('123 abc def');
        expect(str).toEqual('123ABCDEF');
    });
    it('should work', function() {
        let str = formatter.upperFlatCase('123 456');
        expect(str).toEqual('123456');
    });
    it('should return empty', function() {
        let str = formatter.upperFlatCase(null);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.upperFlatCase(undefined);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.upperFlatCase('');
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.upperFlatCase('   ');
        expect(str).toEqual('');
    });
});

describe('Kebab case', function () {
    it('should work', function() {
        let str = formatter.kebabCase(testString);
        expect(str).toEqual('my-awesome-string');
    });
    it('should work', function() {
        let str = formatter.kebabCase('test');
        expect(str).toEqual('test');
    });
    it('should work', function() {
        let str = formatter.kebabCase(123);
        expect(str).toEqual('123');
    });
    it('should work', function() {
        let str = formatter.kebabCase('123 abc def');
        expect(str).toEqual('123-abc-def');
    });
    it('should work', function() {
        let str = formatter.kebabCase('123 456');
        expect(str).toEqual('123-456');
    });
    it('should return empty', function() {
        let str = formatter.kebabCase(null);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.kebabCase(undefined);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.kebabCase('');
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.kebabCase('   ');
        expect(str).toEqual('');
    });
});

describe('Upper Kebab case', function () {
    it('should work', function() {
        let str = formatter.upperKebabCAse(testString);
        expect(str).toEqual('MY-AWESOME-STRING');
    });
    it('should work', function() {
        let str = formatter.upperKebabCAse('test');
        expect(str).toEqual('TEST');
    });
    it('should work', function() {
        let str = formatter.upperKebabCAse(123);
        expect(str).toEqual('123');
    });
    it('should work', function() {
        let str = formatter.upperKebabCAse('123 abc def');
        expect(str).toEqual('123-ABC-DEF');
    });
    it('should work', function() {
        let str = formatter.upperKebabCAse('123 456');
        expect(str).toEqual('123-456');
    });
    it('should return empty', function() {
        let str = formatter.upperKebabCAse(null);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.upperKebabCAse(undefined);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.upperKebabCAse('');
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.upperKebabCAse('   ');
        expect(str).toEqual('');
    });
});

describe('Pascal case', function () {
    it('should work', function() {
        let str = formatter.pascalCase(testString);
        expect(str).toEqual('MyAwesomeString');
    });
    it('should work', function() {
        let str = formatter.pascalCase('test');
        expect(str).toEqual('Test');
    });
    it('should work', function() {
        let str = formatter.pascalCase(123);
        expect(str).toEqual('123');
    });
    it('should work', function() {
        let str = formatter.pascalCase('123 abc def');
        expect(str).toEqual('123AbcDef');
    });
    it('should work', function() {
        let str = formatter.pascalCase('123 456');
        expect(str).toEqual('123456');
    });
    it('should return empty', function() {
        let str = formatter.pascalCase(null);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.pascalCase(undefined);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.pascalCase('');
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.pascalCase('   ');
        expect(str).toEqual('');
    });
});

describe('Snake case', function () {
    it('should work', function() {
        let str = formatter.snakeCase(testString);
        expect(str).toEqual('my_awesome_string');
    });
    it('should work', function() {
        let str = formatter.snakeCase('test');
        expect(str).toEqual('test');
    });
    it('should work', function() {
        let str = formatter.snakeCase(123);
        expect(str).toEqual('123');
    });
    it('should work', function() {
        let str = formatter.snakeCase('123 abc def');
        expect(str).toEqual('123_abc_def');
    });
    it('should work', function() {
        let str = formatter.snakeCase('123 456');
        expect(str).toEqual('123_456');
    });
    it('should return empty', function() {
        let str = formatter.snakeCase(null);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.snakeCase(undefined);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.snakeCase('');
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.snakeCase('   ');
        expect(str).toEqual('');
    });
});

describe('Upper snake case', function () {
    it('should work', function() {
        let str = formatter.upperSnakeCase(testString);
        expect(str).toEqual('MY_AWESOME_STRING');
    });
    it('should work', function() {
        let str = formatter.upperSnakeCase('test');
        expect(str).toEqual('TEST');
    });
    it('should work', function() {
        let str = formatter.upperSnakeCase(123);
        expect(str).toEqual('123');
    });
    it('should work', function() {
        let str = formatter.upperSnakeCase('123 abc def');
        expect(str).toEqual('123_ABC_DEF');
    });
    it('should work', function() {
        let str = formatter.upperSnakeCase('123 456');
        expect(str).toEqual('123_456');
    });
    it('should return empty', function() {
        let str = formatter.upperSnakeCase(null);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.upperSnakeCase(undefined);
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.upperSnakeCase('');
        expect(str).toEqual('');
    });
    it('should return empty', function() {
        let str = formatter.upperSnakeCase('   ');
        expect(str).toEqual('');
    });
});
