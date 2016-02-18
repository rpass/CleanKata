/**
 * Created by robert.passmore on 2016/02/15.
 */
describe('StringCalculator', function () {
    var stringCalculator;
    beforeEach(function () {
        stringCalculator = new StringCalculator();
    });

    it('should take an empty string as input and return 0', function () {
        var input = '';
        var result = 0;
        var actual = stringCalculator.Add(input);
        expect(actual).toEqual(result);
    });

    it('should take a single number as input and return that number', function () {
        var input = '3';
        var result = 3;
        var actual = stringCalculator.Add(input);
        expect(actual).toEqual(result);
    });

    it('should take two numbers as input and return their sum', function () {
        var input = '2,3';
        var result = 5;
        var actual = stringCalculator.Add(input);
        expect(actual).toEqual(result);
    });
    it('should take any number of numbers as input and return their sum', function () {
        var input = '2,3,5,3';
        var result = 13;
        var actual = stringCalculator.Add(input);
        expect(actual).toEqual(result);
    });

    it('should take any number of numbers as input delimited by new lines and return their sum', function () {
        var input = '2\n3\n5\n3';
        var result = 13;
        var actual = stringCalculator.Add(input);
        expect(actual).toEqual(result);
    });

    it('should take any number of numbers as input delimited by new lines and commas and return their sum', function () {
        var input = '2\n3,5\n3';
        var result = 13;
        var actual = stringCalculator.Add(input);
        expect(actual).toEqual(result);
    });

    it('should take any number of numbers as input delimited by a custom delimiter and return their sum', function () {
        var input = '//~\n2~3~5~3';
        var result = 13;
        var actual = stringCalculator.Add(input);
        expect(actual).toEqual(result);
    });

    it('should take a number of inputs and if any of them are negative, throw an error listing the negative inputs', function () {
        var input = '2,-3,-5,3';
        var result = "negatives not allowed: -3, -5";
        var actual = function () {
            stringCalculator.Add(input);
        };
        expect(actual).toThrowError(result);
    });

    describe('ExtractCustomDelimiter', function () {
        it('should take an input and detect if a custom delimiter is defined', function () {
            var input = '//~\n2~3~5~3';
            var result = true;
            var actual = stringCalculator.hasCustomDelimiter(input);
            expect(actual).toEqual(result);
        });

        it('should take an input and extract the custom delimiter', function () {
            var input = '//~\n2~3~5~3';
            var result = /~/;
            var actual = stringCalculator.ExtractCustomDelimiter(input);
            expect(actual).toEqual(result);
        });
    })
});