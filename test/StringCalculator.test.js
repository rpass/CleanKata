/**
 * Created by robert.passmore on 2016/02/15.
 */
describe('StringCalculator', function () {
    it('adds', function () {
        expect(Add('')).toEqual(0);
    });
    it('takes single input and returns it', function () {
        expect(Add('3')).toEqual(3);
    });

    it('takes two inputs and returns sum', function () {
        expect(Add('3,2')).toEqual(5);
    });

    it('takes any number of inputs and return their sum', function () {
        expect(Add('3,2,5')).toEqual(10);
    });

    it('takes any number of inputs, seperated by new lines and return their sum', function () {
        expect(Add('3\n2\n5')).toEqual(10);
    });

    it('takes any number of inputs, seperated by a custom delimiter and return their sum', function () {
        expect(Add('//~\n3~2~5')).toEqual(10);
    });

    it('takes any number of inputs, ignoring those > 1000 and return their sum', function () {
        expect(Add('3,2,5,1003')).toEqual(10);
    });

    it('takes any number of inputs, seperated by a custom delimiter of length > 1 and return their sum', function () {
        expect(Add('//[~~]\n3~~2~~5')).toEqual(10);
    });
});