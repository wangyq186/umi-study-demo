function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
}

describe('isNumber', () => {
  test('should return true for a number', () => {
    expect(isNumber(42)).toBe(true);
  });

  test('should return false for a non-number', () => {
    expect(isNumber('42')).toBe(false);
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(() => {})).toBe(false);
  });
});
