'use strict';

var postcssValuesParser = require('postcss-values-parser');

/** @type {(decl: CSSIdentifier) => void} Transform the rebeccapurple keyword. */
const onCSSIdentifier = node => {
  if (isRebeccaPurple(node.value)) node.value = '#639';
};
/** @type {(value: RegExp) => (value: string) => boolean} Return a function that checks whether the expression exists in a value. */

const createRegExpTest$1 = Function.bind.bind(RegExp.prototype.test);
/** Return whether the value is rebeccapurple. */

const isRebeccaPurple = createRegExpTest$1(/^rebeccapurple$/i);

var options = {
  /** Whether to preserve the original keyword. */
  preserve: false
};

/** @type {(decl: CSSDeclaration) => void} Transform the rebeccapurple keyword in CSS Declarations. */

const onCSSDeclaration = decl => {
  const {
    value: originalValue
  } = decl;

  if (hasAnyRebeccapurple(originalValue)) {
    const valueAST = postcssValuesParser.parse(originalValue);
    valueAST.walkType('word', onCSSIdentifier);
    const modifiedValue = String(valueAST);

    if (modifiedValue !== originalValue) {
      if (options.preserve) decl.cloneBefore({
        value: modifiedValue
      });else decl.value = modifiedValue;
    }
  }
};
/** @type {(value: RegExp) => (value: string) => boolean} Return a function that checks whether the expression exists in a value. */

const createRegExpTest = Function.bind.bind(RegExp.prototype.test);
/** Return whether the value has a rebeccapurple keyword. */

const hasAnyRebeccapurple = createRegExpTest(/(^|[^\w-])rebeccapurple([^\w-]|$)/i);
/** @typedef {import('postcss').Declaration} CSSDeclaration */

/** Transform the rebeccapurple keyword in CSS. */

function postcssColorRebeccaPurple(opts) {
  options.preserve = 'preserve' in Object(opts) ? Boolean(opts.preserve) : false;
  return {
    postcssPlugin: 'postcss-color-rebeccapurple',
    Declaration: onCSSDeclaration
  };
}

postcssColorRebeccaPurple.postcss = true;

module.exports = postcssColorRebeccaPurple;
//# sourceMappingURL=index.cjs.js.map
