var propName = '@@pumpup';
var providePump = function (callback) { return function (ComponsedComp) {
    ComponsedComp[propName] = callback;
    return ComponsedComp;
}; };
var pumpup = function (components, state, locals) {
    var results = (Array.isArray(components) ? components : [components])
        .filter(function (component) { return component; })
        .map(function (component) { return ({
        component: component,
        pump: component[propName]
    }); })
        .filter(function (_a) {
        var pump = _a.pump;
        return pump;
    })
        .map(function (_a) {
        var pump = _a.pump;
        if (typeof pump !== 'function') {
            return;
        }
        return pump(state, locals);
    });
    return results;
};

export default pumpup;
export { propName, providePump, pumpup };
