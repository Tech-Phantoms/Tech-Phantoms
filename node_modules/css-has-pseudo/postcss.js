'use strict';

var parser = require('postcss-selector-parser');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var parser__default = /*#__PURE__*/_interopDefaultLegacy(parser);

const creator = (
/** @type {{ preserve: true | false }} */
opts) => {
  opts = typeof opts === 'object' && opts || defaultOptions;
  /** Whether the original rule should be preserved. */

  const shouldPreserve = Boolean('preserve' in opts ? opts.preserve : true);
  return {
    postcssPlugin: 'css-has-pseudo',
    Rule: rule => {
      if (rule.selector.includes(':has(')) {
        const fallbackSelector = getFallbackSelector(rule.selector);
        if (shouldPreserve) rule.cloneBefore({
          selector: fallbackSelector
        });else rule.assign({
          selector: fallbackSelector
        });
      }
    }
  };
};

creator.postcss = true;

const getFallbackSelector = (
/** @type {string} */
selectorText) => parser__default['default'](selectors => {
  selectors.walkPseudos(selector => {
    if (selector.value === ':has' && selector.nodes) {
      const isNotHas = isParentInNotPseudo(selector);
      selector.value = isNotHas ? ':not-has' : ':has';
      const attribute = parser__default['default'].attribute({
        attribute: getEscapedCss(String(selector))
      });

      if (isNotHas) {
        selector.parent.parent.replaceWith(attribute);
      } else {
        selector.replaceWith(attribute);
      }
    }
  });
}).processSync(selectorText);
/** Default options. */


const defaultOptions = {
  preserve: true
};
/** Returns the string as an escaped CSS identifier. */

const getEscapedCss = (
/** @type {string} */
value) => encodeURIComponent(value).replace(/%3A/g, ':').replace(/%5B/g, '[').replace(/%5D/g, ']').replace(/%2C/g, ',').replace(/[():%[\],]/g, '\\$&');
/** Returns whether the selector is within a `:not` pseudo-class. */


const isParentInNotPseudo = selector => {
  var _selector$parent, _selector$parent$pare;

  return ((_selector$parent = selector.parent) === null || _selector$parent === void 0 ? void 0 : (_selector$parent$pare = _selector$parent.parent) === null || _selector$parent$pare === void 0 ? void 0 : _selector$parent$pare.type) === 'pseudo' && selector.parent.parent.value === ':not';
};

module.exports = creator;
//# sourceMappingURL=postcss.js.map
