/**
 * Created by robert.passmore on 2016/02/15.
 */
var StringCalculator = function () {

};

StringCalculator.prototype.hasCustomDelimiterDescription = function (input) {
    var delimiterDescriptionPattern = /\/\/(.*)\n/;
    var hasDelimiter = delimiterDescriptionPattern.test(input);
    return hasDelimiter;
}

StringCalculator.prototype.ExtractCustomDelimiter = function (input) {
    var delimiterDescriptionPattern = /\/\/(.*)\n/;
    //var delimiterDescriptionPattern = /\/\/\[(.+?)\]\n/g;
    var delimiters = input.match(delimiterDescriptionPattern);
    console.log(delimiters);
    return new RegExp(delimiters[1]);
};

StringCalculator.prototype.Add = function (input) {
    var sum = 0;
    var delimiters = /[,]|[\n]/;

    if (input !== '') {

        if(this.hasCustomDelimiterDescription(input)){
            delimiters = this.ExtractCustomDelimiter(input);
            input = input.substr(input.indexOf('\n') + 2);
        }

        var operands = input.split(delimiters);

        operands.map(function (x) {
            sum += +x < 1000 ? +x : 0;
        })
    }

    return sum;
};