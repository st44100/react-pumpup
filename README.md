# React Pumpup

⛲️ Suck up data from bottom to top. ⛲️

## About

Define data retrieve logic near component and pump up data to Top of application.

## Install

```
$ npm install st44100/react-pumpup
```

## Example

```Foo.jsx
import { providePump } from 'react-pumpup';

// Define pumps
export const pumps = providePump((state: any, locals: any) => {
  const id = locals.id;
  return state[id];
};

// Component
export const Foo = () => <div>Foo</div>;

// Bind
return pumps(Foo);
```

```server.js
import pumpup from 'react-pumpup';
import Foo from 'Foo.jsx';

const preparedState = {
  00001: 'value 1',
  00010: 'value 2',
  10001: 'value 3',
  10010: 'value 4'
};

const pumpUpData = pumpup(preparedState, {
  id: '00010'
});

console.log(pumpUpData[0]); // #=> 'value 2'
```