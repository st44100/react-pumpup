# React Suckup


⛲️ Suck up data from bottom to top. ⛲️

## Install

T.B.D.

## Example

```Foo.jsx
import { provideSucks } from 'react-sucks';

// Define sucks
export const sucks = provideSuckup((state: any, locals: any) => {
  const id = locals.id;
  return state[id];
};

// Component
export const Foo = () => <div>Foo</div>;

// Bind
return sucks(Foo);
```

```server.js
import { renderToString } from 'react-dom/server';
import Foo from 'Foo.jsx';

const preparedState = {
  00001: 'value 1',
  00010: 'value 2',
  10001: 'value 3',
  10010: 'value 4'
};

const suckedData = suckup(preparedState, {
  id: '00010'
});

console.log(suckedData); // #=> 'value 2'
```