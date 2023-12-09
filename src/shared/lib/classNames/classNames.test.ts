import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with additional case', () => {
        const expected = 'class1 class2 class3 hovered scrollable';
        expect(
            classNames('class1', { hovered: true, scrollable: true }, [
                'class2',
                'class3',
            ]),
        ).toBe(expected);
    });
    test('with additional case', () => {
        const expected = 'class1 class2 class3 hovered';
        expect(
            classNames('class1', { hovered: true, scrollable: false }, [
                'class2',
                'class3',
            ]),
        ).toBe(expected);
    });

    test('with additional case', () => {
        const expected = 'class1 class2 class3 hovered';
        expect(
            classNames('class1', { hovered: true, scrollable: undefined }, [
                'class2',
                'class3',
            ]),
        ).toBe(expected);
    });
});
