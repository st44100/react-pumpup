export const propName = '@@suckup';

export const provideSucks = (callback: any) => (ComponsedComp: any) => {
  ComponsedComp[propName] = callback;
  return ComponsedComp;
};

export const suckup = (components: any, state: any, locals?: any) => {
  const results = (Array.isArray(components) ? components : [components])
    .filter((component) => component)
    .map((component) => ({
      component,
      suck: component[propName]
    }))
    .filter(({ suck }) => suck)
    .map(({ suck }) => {
      if (typeof suck !== 'function') {
        return;
      }
      return suck(state, locals);
    });

  return results;
};

export default suckup;