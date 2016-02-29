/**
 * Created by robert.passmore on 2016/02/15.
 */
var Add = function (input) {
    var sum = 0;
    var patternsToReplace = /[\n]/g;
    var customDelimiterPattern = /\/\/(.)|(\[(.+)\])\n/;
    if (input !== '') {
        if (customDelimiterPattern.test(input)) {
            patternsToReplace = new RegExp(input.match(customDelimiterPattern)[1],'g');
            input = input.split('\n')[1];
        }
        input = input.replace(patternsToReplace, ',');
        console.log(input);
        var inputs = input.split(',').map(function (x) {
            return +x;
        });
        inputs = inputs.filter(function (x) {
            console.log(x);
            return x < 1000;
        })

        sum = inputs.reduce(function (prev, curr) {
            return prev + curr;
        });
    }
    return sum;
};