export const propName = '@@pumpup';

export const providePump = (callback: any) => (ComponsedComp: any) => {
  ComponsedComp[propName] = callback;
  return ComponsedComp;
};

export const pumpup = (components: any, state: any, locals?: any) => {
  const results = (Array.isArray(components) ? components : [components])
    .filter((component) => component)
    .map((component) => ({
      component,
      pump: component[propName]
    }))
    .filter(({ pump }) => pump)
    .map(({ pump }) => {
      if (typeof pump !== 'function') {
        return;
      }
      return pump(state, locals);
    });

  return results;
};

export default pumpup;