/**
 * Created by robert.passmore on 2016/02/15.
 */
var StringCalculator = function () {
};

StringCalculator.prototype.hasDelimiterDescription = function (input) {
    var DelimiterDescriptionPattern = /\/\/(.*)\n/;
    //var DelimiterDescription = input.substr(0, input.indexOf('\n') + 2);
    var DelimiterDescription = input.match(DelimiterDescriptionPattern);
    return DelimiterDescription !== null;
};

//@TODO: fix this hack
StringCalculator.prototype.ExtractCustomDelimiter = function (input) {
    var DelimiterDescriptionPattern = /\/\/(.*)\n/;
    var Delimiters = input.match(DelimiterDescriptionPattern)[1];

    var multipleDelimiterPattern = /\[(.*?)\]/g;
    var multipleDelimiters = Delimiters.match(multipleDelimiterPattern);

    return multipleDelimiters === null ? new RegExp(Delimiters) : new RegExp(multipleDelimiters.join('|'));
};

StringCalculator.prototype.getIllegalOperands = function (input) {
    var illegalOperands = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            illegalOperands.push(input[i]);
        }
    }
    return illegalOperands;
};

StringCalculator.prototype.Add = function (input) {
    var delimiter = /[,]|[\n]/;
    var sum = 0;

    if (this.hasDelimiterDescription(input)) {
        delimiter = this.ExtractCustomDelimiter(input);
        input = input.substr(input.indexOf('\n'));
    }

    var operands = input.split(delimiter).map(function (x) {
        return +x;
    });

    var illegalOperands = this.getIllegalOperands(operands);
    if (illegalOperands.length > 0) {
        var errorMessage = "negatives not allowed: %";
        throw new Error(errorMessage.replace('%', illegalOperands.join(', ')));
    }

    if (input !== '') {
        sum = operands.reduce(function (currentSum, currentOperand) {
            if(currentOperand > 1000){ currentOperand = 0; }
            return currentSum + currentOperand;
        });
    }

    return sum;
};