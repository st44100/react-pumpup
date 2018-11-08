# React Suckup

⛲️ Suck up data from bottom to top. ⛲️

## About

Define data retrieve logic near component and Suck up data to Top of application.

## Install

```
$ npm install st44100/react-suckup
```

## Example

```Foo.jsx
import { provideSucks } from 'react-suckup';

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

console.log(suckedData[0]); // #=> 'value 2'
```