var propName = '@@suckup';
var provideSucks = function (getSchema) { return function (ComponsedComp) {
    ComponsedComp[propName] = getSchema;
    return ComponsedComp;
}; };
var suckup = function (components, state, locals) {
    var results = (Array.isArray(components) ? components : [components])
        .filter(function (component) { return component; })
        .map(function (component) { return ({
        component: component,
        suck: component[propName]
    }); })
        .filter(function (_a) {
        var suck = _a.suck;
        return suck;
    })
        .map(function (_a) {
        var suck = _a.suck;
        if (typeof suck !== 'function') {
            return;
        }
        return suck(state, locals);
    });
    return results;
};

export { provideSucks, suckup };
