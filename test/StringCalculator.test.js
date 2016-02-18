/**
 * Created by robert.passmore on 2016/02/15.
 */

// tests are here!
describe('StringCalculator', function () {
    var strCalc;
    beforeEach(function () {
        strCalc = new StringCalculator();
    });

    it('should take an empty string as input and returns 0', function () {
        var input = '';
        var actual = strCalc.Add(input);
        var expected = 0;

        expect(actual).toEqual(expected);
    });
    it('should take a single input as input and returns it', function () {
        var input = '4';
        var actual = strCalc.Add(input);
        var expected = 4;

        expect(actual).toEqual(expected);
    });

    it('should take 2 inputs and returns their sum', function () {
        var input = '1,4';
        var actual = strCalc.Add(input);
        var expected = 5;

        expect(actual).toEqual(expected);
    });

    it('should take any number of inputs and return their sum', function () {
        var input = '2,4,2';
        var actual = strCalc.Add(input);
        var expected = 8;

        expect(actual).toEqual(expected);
    });

    it('should take any number of inputs delimited by new lines and return their sum', function () {
        var input = '3\n4\n3';
        var actual = strCalc.Add(input);
        var expected = 10;

        expect(actual).toEqual(expected);
    });

    it('should take any number of inputs delimited by new lines and commas and return their sum', function () {
        var input = '3\n4,3';
        var actual = strCalc.Add(input);
        var expected = 10;

        expect(actual).toEqual(expected);
    });

    it('should take any number of inputs delimited by custom Delimiters and return their sum', function () {
        var input = '//~\n3~4~3';
        var actual = strCalc.Add(input);
        var expected = 10;

        expect(actual).toEqual(expected);
    });

    describe('hasCustomDelimiterDescription', function () {
        it('should return true if a given input has a custom delimiter described', function () {
            var input = '//~\n3~4~3';
            var actual = strCalc.hasCustomDelimiterDescribed(input);
            var expected = true;

            expect(actual).toEqual(expected);
        });
    });

    describe('ExtractCustomDelimiter', function () {
        it('should take an input with a customer delimiter described and return the delimiter', function () {
            var input = '//~\n3~4~3';
            var actual = strCalc.ExtractCustomDelimiter(input);
            var expected = '~';

            expect(actual).toEqual(expected);
        });

        it('should take an input with a customer delimiter of any length described and return the delimiter', function () {
            var input = '//[~~~]\n3~~~4~~~3';
            var actual = strCalc.ExtractCustomDelimiter(input);
            var expected = '~~~';

            expect(actual).toEqual(expected);
        });

    })

    it('should accept input with negative nuymbers but throw an error and list the negative nuymbers', function () {
        var input = '1,4,-2,-4';
        var actual = function () {
            strCalc.Add(input);
        };
        var expected = 'negatives not allowed: -2, -4';

        expect(actual).toThrowError(expected);
    });

    it('should ignore input with nuymbers bigger than 1000', function () {
        var input = '3,4,5,1000';
        var actual = strCalc.Add(input);
        var expected = 12;

        expect(actual).toEqual(expected);
    });


})
