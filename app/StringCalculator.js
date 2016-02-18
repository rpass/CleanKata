/**
 * Created by robert.passmore on 2016/02/15.
 */

var StringCalculator = function () {
};

StringCalculator.prototype.hasCustomDelimiterDescribed = function (input) {
    var delimiterDescriptionRE = /\/\/(.*)\n/;
    return delimiterDescriptionRE.test(input);
};

StringCalculator.prototype.ExtractCustomDelimiter = function (input) {
    var delimiterDescriptionRE = /\/\/(.)\n/;
    var longDelimiterDescriptionRE = /\/\/\[(.*)\]\n/;
    var delimiter = input.match(delimiterDescriptionRE)[1];
    console.log(delimiter);
    return delimiter;
}

StringCalculator.prototype.Add = function (input) {
    var sum = 0;
    var delimiters = [',', '\n'];
    var delimitersRE = new RegExp(delimiters.join('|'));
    if (input !== '') {

        if (this.hasCustomDelimiterDescribed(input)) {
            var custDelimiters = this.ExtractCustomDelimiter(input);
            delimiters.push(custDelimiters);
            delimitersRE = new RegExp(delimiters.join('|'));
            input = input.substr(input.indexOf('\n'));
        }

        var operands = input.split(delimitersRE).map(function (x) {
            if(+x < 1000){
                return +x;
            } else {
                return 0;
            }
        });

        var illegalOperands = [];
        var errorMessage = "negatives not allowed: %";
        operands.map(function (x) {
            if (x < 0) illegalOperands.push(x);
        });
        if (illegalOperands.length > 0) {
            throw new Error(errorMessage.replace('%', illegalOperands.join(', ')));
        }

        for (var i = 0; i < operands.length; i++) {
            sum += operands[i];
        }
    }

    return sum;
}
;