/**
 * Created by robert.passmore on 2016/02/15.
 */
describe('String Calculator', function () {
    var strCalc;
    beforeEach(function () {
        strCalc = new StringCalculator();
    });

    it('should have a function called Add defined', function () {
        expect(strCalc.Add).toBeDefined();
    });

    describe('Add Function', function () {
        it('should take an empty string as input and return 0', function () {
            var input = '';
            var result = strCalc.Add(input);
            expect(result).toEqual(0);
        });
        it('should take a single number as input and return it', function () {
            var input = '1';
            var result = strCalc.Add(input);
            expect(result).toEqual(1);
        });

        it('should take two numbers as input and return their sum', function () {
            var input = '1,3';
            var result = strCalc.Add(input);
            expect(result).toEqual(4);
        });

        it('should take any number of numbers as input and return their sum', function () {
            var input = '1,3,1,1,1';
            var result = strCalc.Add(input);
            expect(result).toEqual(7);
        });

        it('should take any number of numbers as input, delimited by new lines and return their sum', function () {
            var input = '1\n3\n1\n1\n1';
            var result = strCalc.Add(input);
            expect(result).toEqual(7);
        });

        it('should take any number of numbers as input, delimited by new lines and commas and return their sum', function () {
            var input = '1,3\n1,1\n1';
            var result = strCalc.Add(input);
            expect(result).toEqual(7);
        });

        it('should take any number of numbers as input, delimited by new lines and return their sum', function () {
            var input = '1\n3\n1\n1\n1';
            var result = strCalc.Add(input);
            expect(result).toEqual(7);
        });

        it('should take any number of numbers as input, delimited by a custom delimiter and return their sum', function () {
            var input = '//~\n1~3~1~1~1';
            var result = strCalc.Add(input);
            expect(result).toEqual(7);
        });

        it('should take a negative number and throw an exception', function () {
            var input = '-1,-2';
            var result = function () {
                strCalc.Add(input);
            };
            expect(result).toThrowError("negatives not allowed: -1, -2");
        });

        it('should ignore any number greater than 1000', function () {
            var input = '1,3,1003';
            var result = strCalc.Add(input);
            expect(result).toEqual(4);
        })
    });
    describe('getIllegalOperands', function () {
        it('should take a list of numbers and return all the negative numbers', function () {
            var input = [1,-2,-2,3];
            var result = strCalc.getIllegalOperands(input);
            expect(result).toEqual([-2,-2]);
        });
    });
    describe('hasDelimiterDescription', function () {
        it('should take a string as input and identify if it has a custom delimiter described', function () {
            var input = '//~\n1~2~2~3';
            var result = strCalc.hasDelimiterDescription(input);
            expect(result).toBeTruthy();
        });

        it('should take a string as input and identify if it has multiple custom delimiters described', function () {
            var input = '//[~*~][---]\n1~*~2---2~*~3';
            var result = strCalc.hasDelimiterDescription(input);
            expect(result).toBeTruthy();
        });
    });
    describe('ExtractCustomDelimiter Function', function () {
        it('should take a string as input and extract the custom delimiter described', function () {
            var input = '//~\n1~2~2~3';
            var result = strCalc.ExtractCustomDelimiter(input);
            expect(result).toEqual(/~/);
        });

        it('should successfully extract delimiters of any length', function () {
            var input = '//~*~\n1~*~2~*~2~*~3';
            var result = strCalc.ExtractCustomDelimiter(input);
            expect(result).toEqual(/~*~/);
        });

        it('should successfully extract multiple delimiters of any length', function () {
            var input = '//[~*~][---]\n1~*~2---2~*~3';
            var result = strCalc.ExtractCustomDelimiter(input);
            expect(result).toEqual(/[~*~]|[---]/);
        });

    });


});