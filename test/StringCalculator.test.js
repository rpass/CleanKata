/**
 * Created by robert.passmore on 2016/02/15.
 */
describe('String Calculator', function () {
    var strCalc;
    beforeEach(function () {
        strCalc = new StringCalculator();
    })

    it('should take an empty string as input and return 0', function () {
        var input = '';
        var expected = 0;
        var actual = strCalc.Add(input);
        expect(actual).toEqual(expected);
    });

    it('should take a number as input and return it', function () {
        var input = '3';
        var expected = 3;
        var actual = strCalc.Add(input);
        expect(actual).toEqual(expected);
    });

    it('should take two numbers as input and return their sum', function () {
        var input = '3,2';
        var expected = 5;
        var actual = strCalc.Add(input);
        expect(actual).toEqual(expected);
    });

    it('should take any number of inputs and return their sum', function () {
        var input = '1,2,3';
        var expected = 6;
        var actual = strCalc.Add(input);
        expect(actual).toEqual(expected);
    });
    it('should take any number of inputs, delimited by new lines and return their sum', function () {
        var input = '1\n2\n3';
        var expected = 6;
        var actual = strCalc.Add(input);
        expect(actual).toEqual(expected);
    });
    it('should take any number of inputs, delimited by new lines and commas and return their sum', function () {
        var input = '1\n2,3\n4';
        var expected = 10;
        var actual = strCalc.Add(input);
        expect(actual).toEqual(expected);
    });

    it('should take any number of inputs, delimited by a custom delimiter and return their sum', function () {
        var input = '//~\n1~2~3~4';
        var expected = 9;
        var actual = strCalc.Add(input);
        expect(actual).toEqual(expected);
    });

    it('should take any number of inputs, ignore numbers larger than 1000 and return the sum of the rest', function () {
        var input = '1,2,3,1000';
        var expected = 6;
        var actual = strCalc.Add(input);
        expect(actual).toEqual(expected);
    });

    describe('hasCustomDelimiterDescription', function () {
        it('should take an input with a custom delimiter described and return true', function () {
            var input = '//~\n1~2~3~4';
            var expected = true;
            var actual = strCalc.hasCustomDelimiterDescription(input);
            expect(actual).toEqual(expected);
        })
    })

    describe('ExtractCustomDelimiter', function () {
        it('should take an input with a custom delimiter described and return the delimiter', function () {
            var input = '//~\n1~2~3~4';
            var expected = /~/;
            var actual = strCalc.ExtractCustomDelimiter(input);
            expect(actual).toEqual(expected);
        })

        it('should take an input with a custom delimiter of any length described and return the delimiter', function () {
            var input = '//~~~\n1~~~2~~~3~~~4';
            var expected = /~~~/;
            var actual = strCalc.ExtractCustomDelimiter(input);
            expect(actual).toEqual(expected);
        })

        it('should take an input with multiple custom delimiters described and return the delimiters', function () {
            var input = '//[~~][**]\n1[~~][**]2[~~][**]3[~~][**]4';
            var expected = /[~~]|[**]/;
            var actual = strCalc.ExtractCustomDelimiter(input);
            expect(actual).toEqual(expected);
        })
    })
});