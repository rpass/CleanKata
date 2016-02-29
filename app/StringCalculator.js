/**
 * Created by robert.passmore on 2016/02/15.
 */
var StringCalculator = {
    Add: function (input) {
        var sum = 0;
        var delimiter = /,|\n/;
        if (input !== '') {
            var customDelimiterPattern = /\/\/(.)\n/;

            if (customDelimiterPattern.test(input)) {
                delimiter = input.match(customDelimiterPattern)[1];
                input = input.substr(input.indexOf('\n') + 1);
            }

            var illegalInputs = [];
            var inputs = input.split(delimiter)
                .filter(function (x) {
                    return x <= 1000;
                })
                .map(function (x) {
                    x = parseInt(x);
                    if (x < 0) {
                        illegalInputs.push(x);
                        return 0;
                    } else {
                        return x;
                    }
                });

            if (illegalInputs.length) {
                throw new Error('negatives not allowed: %s'.replace('%s', illegalInputs.join(', ')));
            };

            sum = inputs.reduce(function (prev, curr) {
                return prev + curr;
            });
        }
        return sum;

    }
}