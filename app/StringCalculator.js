/**
 * Created by robert.passmore on 2016/02/15.
 */
var StringCalculator = function () {
};

StringCalculator.prototype.hasCustomDelimiter = function (input) {
    var customDelimiterPattern = /\/\/(.*)\n/;
    return input.match(customDelimiterPattern) ? true : false;
}

StringCalculator.prototype.ExtractCustomDelimiter = function (input) {
    var customDelimiterPattern = /\/\/(.*)\n/;
    return new RegExp(input.match(customDelimiterPattern)[1]);
}

StringCalculator.prototype.Add = function (input) {
    var sum = 0;
    var operands = [];
    var delimiters = /[,]|[\n]/

    if (input !== '') {

        if (this.hasCustomDelimiter(input)) {
            delimiters = this.ExtractCustomDelimiter(input);
            input = input.substr(input.indexOf('\n' + 2));
        }

        operands = input.split(delimiters);

        var illegalOperands = [];
        var errorMessage = "negatives not allowed: %";

        for(var i = 0; i < operands.length; i++){
            if(+operands[i] < 0){
                illegalOperands.push(+operands[i]);
            }
        }

        if(illegalOperands.length > 0){
            throw new Error(errorMessage.replace('%', illegalOperands.join(', ')));
        }

        operands.map(function (x) {
            sum += +x;
        });
    }

    return sum;
}