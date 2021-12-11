"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseColor = parseColor;
exports.formatColor = formatColor;
var _colorName = _interopRequireDefault(require("color-name"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let HEX = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
let SHORT_HEX = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
let VALUE = `(?:\\d+|\\d*\\.\\d+)%?`;
let SEP = `(?:\\s*,\\s*|\\s+)`;
let ALPHA_SEP = `\\s*[,/]\\s*`;
let RGB_HSL = new RegExp(`^(rgb|hsl)a?\\(\\s*(${VALUE})${SEP}(${VALUE})${SEP}(${VALUE})(?:${ALPHA_SEP}(${VALUE}))?\\s*\\)$`);
function parseColor(value) {
    if (typeof value !== 'string') {
        return null;
    }
    value = value.trim();
    if (value === 'transparent') {
        return {
            mode: 'rgb',
            color: [
                '0',
                '0',
                '0'
            ],
            alpha: '0'
        };
    }
    if (value in _colorName.default) {
        return {
            mode: 'rgb',
            color: _colorName.default[value].map((v)=>v.toString()
            )
        };
    }
    let hex = value.replace(SHORT_HEX, (_, r, g, b, a)=>[
            '#',
            r,
            r,
            g,
            g,
            b,
            b,
            a ? a + a : ''
        ].join('')
    ).match(HEX);
    if (hex !== null) {
        return {
            mode: 'rgb',
            color: [
                parseInt(hex[1], 16),
                parseInt(hex[2], 16),
                parseInt(hex[3], 16)
            ].map((v)=>v.toString()
            ),
            alpha: hex[4] ? (parseInt(hex[4], 16) / 255).toString() : undefined
        };
    }
    let match = value.match(RGB_HSL);
    if (match !== null) {
        var ref, ref1;
        return {
            mode: match[1],
            color: [
                match[2],
                match[3],
                match[4]
            ].map((v)=>v.toString()
            ),
            alpha: (ref = match[5]) === null || ref === void 0 ? void 0 : (ref1 = ref.toString) === null || ref1 === void 0 ? void 0 : ref1.call(ref)
        };
    }
    return null;
}
function formatColor({ mode , color , alpha  }) {
    let hasAlpha = alpha !== undefined;
    return `${mode}(${color.join(' ')}${hasAlpha ? ` / ${alpha}` : ''})`;
}
