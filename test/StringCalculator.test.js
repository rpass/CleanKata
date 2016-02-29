/**
 * Created by robert.passmore on 2016/02/15.
 */
describe('String Calculator', function () {
    it('should return 0 if given \'\' as input', function () {
        var result = StringCalculator.Add('');
        var expected = 0;
        expect(result).toEqual(expected);
    });

    it('should return the argument if only argument given', function () {
        var result = StringCalculator.Add('2');
        var expected = 2;
        expect(result).toEqual(expected);
    });

    it('should return the sum fo the argument if more than one argument given', function () {
        var result = StringCalculator.Add('2,4');
        var expected = 6;
        expect(result).toEqual(expected);
    });

    it('should return the sum fo the argument when delimited by new lines', function () {
        var result = StringCalculator.Add('2\n4');
        var expected = 6;
        expect(result).toEqual(expected);
    });

    it('should return the sum fo the argument when delimited by a custom delimiter', function () {
        var result = StringCalculator.Add('//~\n2~4');
        var expected = 6;
        expect(result).toEqual(expected);
    });

    it('should throw an error when adding negative numbers', function () {
        var result = function() {
            return StringCalculator.Add('2,-4,-2,1');
        };
        var expected = 'negatives not allowed: -4, -2';
        expect(result).toThrowError(expected);
    });

    it('should return the sum fo the arguments ignorning inputs > 1000', function () {
        var result = StringCalculator.Add('2,1001,3');
        var expected = 5;
        expect(result).toEqual(expected);
    });
});