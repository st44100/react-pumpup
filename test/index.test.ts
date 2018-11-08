
import suckup, { provideSucks, propName } from '../src';

describe('provideSuckups', () => {
  test('attach propName and callback', () => {
    const Foo = () => {};

    const callback = (state: any, params: any) => {
      return 'result';
    };

    const sucks = provideSucks(callback);

    const ComposedComponent = sucks(Foo);

    expect(ComposedComponent[propName]).toEqual(callback);
  });
});

describe('suckup', () => {
  test('fire callback', () => {
    const Foo = () => {};

    const state = {
      foo: 'bar',
      foo1: 'bar1'
    };

    const props = {
      id: 'foo1'
    }

    const mockCallback = jest.fn((state: any, params: any) => {
      return state[params.id];
    });

    const sucks = provideSucks(mockCallback);

    const ComposedComponent = sucks(Foo);

    const result = suckup(ComposedComponent, state, props);

    expect(mockCallback).toHaveBeenCalled();
    expect(result[0]).toEqual('bar1');
  });
});