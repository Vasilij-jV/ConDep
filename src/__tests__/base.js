import demo from '../js/app';

test('test demo', () => {
  const unusedVariable = 'variable';

  expect(demo(unusedVariable)).toBe('variable');
});
