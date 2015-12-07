import { parseInstruction } from './fireHazard';
import expect from 'expect';


describe('fireHazard', function() {
    describe('parseInstruction', function() {
        it('should handle normal cases', function() {
            expect(
                parseInstruction("toggle 461,550 through 564,900")
            ).toEqual({
                from: [461, 550],
                to: [564, 900],
                command: 'toggle'
            });

            expect(
                parseInstruction("turn off 370,39 through 425,839")
            ).toEqual({
                from: [370, 39],
                to: [425, 839],
                command: 'off'
            });

            expect(
                parseInstruction("turn on 599,989 through 806,993")
            ).toEqual({
                from: [599, 989],
                to: [806, 993],
                command: 'on'
            });
        })
    });
});