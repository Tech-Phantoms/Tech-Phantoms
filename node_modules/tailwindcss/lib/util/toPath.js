"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toPath = toPath;
function toPath(path) {
    if (Array.isArray(path)) return path;
    return path.split(/[\.\]\[]+/g);
}
