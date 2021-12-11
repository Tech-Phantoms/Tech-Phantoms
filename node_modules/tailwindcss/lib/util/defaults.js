"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaults = defaults;
function defaults(target, ...sources) {
    for (let source of sources){
        for(let k in source){
            var ref;
            if (!(target === null || target === void 0 ? void 0 : (ref = target.hasOwnProperty) === null || ref === void 0 ? void 0 : ref.call(target, k))) {
                target[k] = source[k];
            }
        }
    }
    return target;
}
