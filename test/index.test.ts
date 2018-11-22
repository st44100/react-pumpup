
import pumpup, { providePump, propName } from '../src';

describe('providePump', () => {
  test('attach propName and callback', () => {
    const Foo = () => {};

    const callback = (state: any, params: any) => {
      return 'result';
    };

    const pumps = providePump(callback);

    const ComposedComponent = pumps(Foo);

    expect(ComposedComponent[propName]).toEqual(callback);
  });
});

describe('pumpup', () => {
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

    const pumps = providePump(mockCallback);

    const ComposedComponent = pumps(Foo);

    const result = pumpup(ComposedComponent, state, props);

    expect(mockCallback).toHaveBeenCalled();
    expect(result[0]).toEqual('bar1');
  });
});