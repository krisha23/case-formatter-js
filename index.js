'use strict';

function getStringArr(str) {
    if (str === null || str === undefined || typeof str === 'undefined' || str.toString().trim().length <= 0) {
        return [];
    }

    str = str.replace(/\s\s+/g, ' ');
    return str.split(' ');
}

function getCaseFormattedArr(strArr, capitalizeString = false) {
    var lowerArr = [];
    for (var i = 0; i < strArr.length; i++) {
        lowerArr[i] = capitalizeString === true ?
            strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1, strArr[i].length) :
            strArr[i].toLowerCase();
    }

    return lowerArr;
}

function CaseFormatter() {}

CaseFormatter.prototype.camelCase = function (str) {
    var strArr = getCaseFormattedArr(getStringArr(str), true);
    var capitalizedStr = strArr.length <= 0 ? '' :  strArr.join('');
    return capitalizedStr.charAt(0).toLowerCase() + capitalizedStr.slice(1, capitalizedStr.length);
};

CaseFormatter.prototype.flatCase = function (str) {
    var strArr = getCaseFormattedArr(getStringArr(str));
    return strArr.length <= 0 ? '' :  strArr.join('');
};

CaseFormatter.prototype.kebabCase = function (str) {
    var strArr = getCaseFormattedArr(getStringArr(str));
    return strArr.length <= 0 ? '' :  strArr.join('-');
};

CaseFormatter.prototype.pascalCase = function (str) {
    var strArr = getCaseFormattedArr(getStringArr(str), true);
    return strArr.length <= 0 ? '' :  strArr.join('');
};

CaseFormatter.prototype.snakeCase = function (str) {
    var strArr = getCaseFormattedArr(getStringArr(str));
    return strArr.length <= 0 ? '' :  strArr.join('_');
};

CaseFormatter.prototype.upperSnakeCase = function (str) {
    var strArr = getStringArr(str);
    var upperArr = [];
    for (var i = 0; i < strArr.length; i++) {
        upperArr[i] = strArr[i].toUpperCase();
    }

    return upperArr.length <= 0 ? '' :  upperArr.join('_');
};
