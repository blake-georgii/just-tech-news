const {format_date} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural() correctly pluralizes words', () => {
    expect(format_plural('boat', 2).toBe('boats'));
    expect(format_plural('frog', 1).toBe('frog'));
});