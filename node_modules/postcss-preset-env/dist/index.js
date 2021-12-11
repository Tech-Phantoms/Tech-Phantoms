'use strict';

var autoprefixer = require('autoprefixer');
var browserslist = require('browserslist');
var cssdb = require('cssdb');
var postcssAttributeCaseInsensitive = require('postcss-attribute-case-insensitive');
var postcssBlankPseudo = require('css-blank-pseudo/postcss');
var postcssColorFunctionalNotation = require('postcss-color-functional-notation');
var postcssColorHexAlpha = require('postcss-color-hex-alpha');
var postcssColorRebeccapurple = require('postcss-color-rebeccapurple');
var postcssCustomMedia = require('postcss-custom-media');
var postcssCustomProperties = require('postcss-custom-properties');
var postcssCustomSelectors = require('postcss-custom-selectors');
var postcssDirPseudoClass = require('postcss-dir-pseudo-class');
var postcssDoublePositionGradients = require('postcss-double-position-gradients');
var postcssEnvFunction = require('postcss-env-function');
var postcssFocusVisible = require('postcss-focus-visible');
var postcssFocusWithin = require('postcss-focus-within');
var postcssFontVariant = require('postcss-font-variant');
var postcssGapProperties = require('postcss-gap-properties');
var postcssHasPseudo = require('css-has-pseudo/postcss');
var postcssImageSetPolyfill = require('postcss-image-set-function');
var postcssInitial = require('postcss-initial');
var postcssLabFunction = require('postcss-lab-function');
var postcssLogical = require('postcss-logical');
var postcssMediaMinmax = require('postcss-media-minmax');
var postcssNesting = require('postcss-nesting');
var postcssOverflowShorthand = require('postcss-overflow-shorthand');
var postcssPageBreak = require('postcss-page-break');
var postcssPlace = require('postcss-place');
var postcssPrefersColorScheme = require('css-prefers-color-scheme/postcss');
var postcssPseudoClassAnyLink = require('postcss-pseudo-class-any-link');
var postcssReplaceOverflowWrap = require('postcss-replace-overflow-wrap');
var postcssSelectorNot = require('postcss-selector-not');
var caniuse = require('caniuse-lite');
var fs = require('fs');
var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n["default"] = e;
	return Object.freeze(n);
}

var autoprefixer__default = /*#__PURE__*/_interopDefaultLegacy(autoprefixer);
var browserslist__default = /*#__PURE__*/_interopDefaultLegacy(browserslist);
var cssdb__default = /*#__PURE__*/_interopDefaultLegacy(cssdb);
var postcssAttributeCaseInsensitive__default = /*#__PURE__*/_interopDefaultLegacy(postcssAttributeCaseInsensitive);
var postcssBlankPseudo__default = /*#__PURE__*/_interopDefaultLegacy(postcssBlankPseudo);
var postcssColorFunctionalNotation__default = /*#__PURE__*/_interopDefaultLegacy(postcssColorFunctionalNotation);
var postcssColorHexAlpha__default = /*#__PURE__*/_interopDefaultLegacy(postcssColorHexAlpha);
var postcssColorRebeccapurple__default = /*#__PURE__*/_interopDefaultLegacy(postcssColorRebeccapurple);
var postcssCustomMedia__default = /*#__PURE__*/_interopDefaultLegacy(postcssCustomMedia);
var postcssCustomProperties__default = /*#__PURE__*/_interopDefaultLegacy(postcssCustomProperties);
var postcssCustomSelectors__default = /*#__PURE__*/_interopDefaultLegacy(postcssCustomSelectors);
var postcssDirPseudoClass__default = /*#__PURE__*/_interopDefaultLegacy(postcssDirPseudoClass);
var postcssDoublePositionGradients__default = /*#__PURE__*/_interopDefaultLegacy(postcssDoublePositionGradients);
var postcssEnvFunction__default = /*#__PURE__*/_interopDefaultLegacy(postcssEnvFunction);
var postcssFocusVisible__default = /*#__PURE__*/_interopDefaultLegacy(postcssFocusVisible);
var postcssFocusWithin__default = /*#__PURE__*/_interopDefaultLegacy(postcssFocusWithin);
var postcssFontVariant__default = /*#__PURE__*/_interopDefaultLegacy(postcssFontVariant);
var postcssGapProperties__default = /*#__PURE__*/_interopDefaultLegacy(postcssGapProperties);
var postcssHasPseudo__default = /*#__PURE__*/_interopDefaultLegacy(postcssHasPseudo);
var postcssImageSetPolyfill__default = /*#__PURE__*/_interopDefaultLegacy(postcssImageSetPolyfill);
var postcssInitial__default = /*#__PURE__*/_interopDefaultLegacy(postcssInitial);
var postcssLabFunction__default = /*#__PURE__*/_interopDefaultLegacy(postcssLabFunction);
var postcssLogical__default = /*#__PURE__*/_interopDefaultLegacy(postcssLogical);
var postcssMediaMinmax__default = /*#__PURE__*/_interopDefaultLegacy(postcssMediaMinmax);
var postcssNesting__default = /*#__PURE__*/_interopDefaultLegacy(postcssNesting);
var postcssOverflowShorthand__default = /*#__PURE__*/_interopDefaultLegacy(postcssOverflowShorthand);
var postcssPageBreak__default = /*#__PURE__*/_interopDefaultLegacy(postcssPageBreak);
var postcssPlace__default = /*#__PURE__*/_interopDefaultLegacy(postcssPlace);
var postcssPrefersColorScheme__default = /*#__PURE__*/_interopDefaultLegacy(postcssPrefersColorScheme);
var postcssPseudoClassAnyLink__default = /*#__PURE__*/_interopDefaultLegacy(postcssPseudoClassAnyLink);
var postcssReplaceOverflowWrap__default = /*#__PURE__*/_interopDefaultLegacy(postcssReplaceOverflowWrap);
var postcssSelectorNot__default = /*#__PURE__*/_interopDefaultLegacy(postcssSelectorNot);
var caniuse__namespace = /*#__PURE__*/_interopNamespace(caniuse);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

function postcssSystemUiFont() {
  return {
    postcssPlugin: 'postcss-system-ui-font',

    Declaration(
    /** @type {import('postcss').Declaration} */
    node) {
      if (propertyRegExp.test(node.prop)) {
        if (!node.value.includes(systemUiFamily.join(', '))) {
          node.value = node.value.replace(systemUiMatch, systemUiReplace);
        }
      }
    }

  };
}
postcssSystemUiFont.postcss = true;
const propertyRegExp = /(?:^(?:-|\\002d){2})|(?:^font(?:-family)?$)/i;
const whitespace = '[\\f\\n\\r\\x09\\x20]';
const systemUiFamily = ['system-ui',
/* macOS 10.11-10.12 */
'-apple-system',
/* Windows 6+ */
'Segoe UI',
/* Android 4+ */
'Roboto',
/* Ubuntu 10.10+ */
'Ubuntu',
/* Gnome 3+ */
'Cantarell',
/* KDE Plasma 5+ */
'Noto Sans',
/* fallback */
'sans-serif'];
const systemUiMatch = new RegExp(`(^|,|${whitespace}+)(?:system-ui${whitespace}*)(?:,${whitespace}*(?:${systemUiFamily.join('|')})${whitespace}*)?(,|$)`, 'i');
const systemUiReplace = `$1${systemUiFamily.join(', ')}$2`;

var plugins = {
  'all-property': postcssInitial__default["default"],
  'any-link-pseudo-class': postcssPseudoClassAnyLink__default["default"],
  'blank-pseudo-class': postcssBlankPseudo__default["default"],
  'break-properties': postcssPageBreak__default["default"],
  'case-insensitive-attributes': postcssAttributeCaseInsensitive__default["default"],
  'color-functional-notation': postcssColorFunctionalNotation__default["default"],
  'custom-media-queries': postcssCustomMedia__default["default"],
  'custom-properties': postcssCustomProperties__default["default"],
  'custom-selectors': postcssCustomSelectors__default["default"],
  'dir-pseudo-class': postcssDirPseudoClass__default["default"],
  'double-position-gradients': postcssDoublePositionGradients__default["default"],
  'environment-variables': postcssEnvFunction__default["default"],
  'focus-visible-pseudo-class': postcssFocusVisible__default["default"],
  'focus-within-pseudo-class': postcssFocusWithin__default["default"],
  'font-variant-property': postcssFontVariant__default["default"],
  'gap-properties': postcssGapProperties__default["default"],
  'has-pseudo-class': postcssHasPseudo__default["default"],
  'hexadecimal-alpha-notation': postcssColorHexAlpha__default["default"],
  'image-set-function': postcssImageSetPolyfill__default["default"],
  'lab-function': postcssLabFunction__default["default"],
  'logical-properties-and-values': postcssLogical__default["default"],
  'media-query-ranges': postcssMediaMinmax__default["default"],
  'nesting-rules': postcssNesting__default["default"],
  'not-pseudo-class': postcssSelectorNot__default["default"],
  'overflow-property': postcssOverflowShorthand__default["default"],
  'overflow-wrap-property': postcssReplaceOverflowWrap__default["default"],
  'place-properties': postcssPlace__default["default"],
  'prefers-color-scheme-query': postcssPrefersColorScheme__default["default"],
  'rebeccapurple-color': postcssColorRebeccapurple__default["default"],
  'system-ui-font-family': postcssSystemUiFont
};

// return a list of features to be inserted before or after cssdb features
function getTransformedInsertions(insertions, placement) {
  return Object.keys(insertions).map(id => [].concat(insertions[id]).map(plugin => ({
    [placement]: true,
    plugin,
    id
  }))).reduce((array, feature) => array.concat(feature), []);
}

function getUnsupportedBrowsersByFeature(feature) {
  const caniuseFeature = caniuse__namespace.features[feature]; // if feature support can be determined

  if (caniuseFeature) {
    const stats = caniuse__namespace.feature(caniuseFeature).stats; // return an array of browsers and versions that do not support the feature

    const results = Object.keys(stats).reduce((browsers, browser) => browsers.concat(Object.keys(stats[browser]).filter(version => stats[browser][version].indexOf('y') !== 0).map(version => `${browser} ${version}`)), []);
    return results;
  } else {
    // otherwise, return that the feature does not work in any browser
    return ['> 0%'];
  }
}

// ids ordered by required execution, then alphabetically
var idsByExecutionOrder = ['custom-media-queries', 'custom-properties', 'environment-variables', // run environment-variables here to access transpiled custom media params and properties
'image-set-function', // run images-set-function before nesting-rules so that it may fix nested media
'media-query-ranges', // run media-query-range and
'prefers-color-scheme-query', // run prefers-color-scheme-query here to prevent duplicate transpilation after nesting-rules
'nesting-rules', 'custom-selectors', // run custom-selectors after nesting-rules to correctly transpile &:--custom-selector
'any-link-pseudo-class', 'case-insensitive-attributes', 'focus-visible-pseudo-class', 'focus-within-pseudo-class', 'matches-pseudo-class', // run matches-pseudo-class and
'not-pseudo-class', // run not-pseudo-class after other selectors have been transpiled
'logical-properties-and-values', // run logical-properties-and-values before dir-pseudo-class
'dir-pseudo-class', 'all-property', // run all-property before other property polyfills
'color-functional-notation', 'double-position-gradients', 'hexadecimal-alpha-notation', 'lab-function', 'rebeccapurple-color', 'color-mod-function', // run color-mod after other color modifications have finished
'blank-pseudo-class', 'break-properties', 'font-variant-property', 'has-pseudo-class', 'gap-properties', 'overflow-property', 'overflow-wrap-property', 'place-properties', 'system-ui-font-family'];

/* eslint max-params: ["error", 4] */
/* Write Exports to CSS File
/* ========================================================================== */

function getCustomMediaAsCss(customMedia) {
  const cssContent = Object.keys(customMedia).reduce((cssLines, name) => {
    cssLines.push(`@custom-media ${name} ${customMedia[name]};`);
    return cssLines;
  }, []).join('\n');
  const css = `${cssContent}\n`;
  return css;
}

function getCustomPropertiesAsCss(customProperties) {
  const cssContent = Object.keys(customProperties).reduce((cssLines, name) => {
    cssLines.push(`\t${name}: ${customProperties[name]};`);
    return cssLines;
  }, []).join('\n');
  const css = `:root {\n${cssContent}\n}\n`;
  return css;
}

function getCustomSelectorsAsCss(customSelectors) {
  const cssContent = Object.keys(customSelectors).reduce((cssLines, name) => {
    cssLines.push(`@custom-selector ${name} ${customSelectors[name]};`);
    return cssLines;
  }, []).join('\n');
  const css = `${cssContent}\n`;
  return css;
}

async function writeExportsToCssFile(to, customMedia, customProperties, customSelectors) {
  const customPropertiesAsCss = getCustomPropertiesAsCss(customProperties);
  const customMediaAsCss = getCustomMediaAsCss(customMedia);
  const customSelectorsAsCss = getCustomSelectorsAsCss(customSelectors);
  const css = `${customMediaAsCss}\n${customSelectorsAsCss}\n${customPropertiesAsCss}`;
  await writeFile(to, css);
}
/* Write Exports to JSON file
/* ========================================================================== */


async function writeExportsToJsonFile(to, customMedia, customProperties, customSelectors) {
  const jsonContent = JSON.stringify({
    'custom-media': customMedia,
    'custom-properties': customProperties,
    'custom-selectors': customSelectors
  }, null, '  ');
  const json = `${jsonContent}\n`;
  await writeFile(to, json);
}
/* Write Exports to Common JS file
/* ========================================================================== */


function getObjectWithKeyAsCjs(key, object) {
  const jsContents = Object.keys(object).reduce((jsLines, name) => {
    jsLines.push(`\t\t'${escapeForJS(name)}': '${escapeForJS(object[name])}'`);
    return jsLines;
  }, []).join(',\n');
  const cjs = `\n\t${key}: {\n${jsContents}\n\t}`;
  return cjs;
}

async function writeExportsToCjsFile(to, customMedia, customProperties, customSelectors) {
  const customMediaAsCjs = getObjectWithKeyAsCjs('customMedia', customMedia);
  const customPropertiesAsCjs = getObjectWithKeyAsCjs('customProperties', customProperties);
  const customSelectorsAsCjs = getObjectWithKeyAsCjs('customSelectors', customSelectors);
  const cjs = `module.exports = {${customMediaAsCjs},${customPropertiesAsCjs},${customSelectorsAsCjs}\n};\n`;
  await writeFile(to, cjs);
}
/* Write Exports to Module JS file
/* ========================================================================== */


function getObjectWithKeyAsMjs(key, object) {
  const mjsContents = Object.keys(object).reduce((mjsLines, name) => {
    mjsLines.push(`\t'${escapeForJS(name)}': '${escapeForJS(object[name])}'`);
    return mjsLines;
  }, []).join(',\n');
  const mjs = `export const ${key} = {\n${mjsContents}\n};\n`;
  return mjs;
}

async function writeExportsToMjsFile(to, customMedia, customProperties, customSelectors) {
  const customMediaAsMjs = getObjectWithKeyAsMjs('customMedia', customMedia);
  const customPropertiesAsMjs = getObjectWithKeyAsMjs('customProperties', customProperties);
  const customSelectorsAsMjs = getObjectWithKeyAsMjs('customSelectors', customSelectors);
  const mjs = `${customMediaAsMjs}\n${customPropertiesAsMjs}\n${customSelectorsAsMjs}`;
  await writeFile(to, mjs);
}
/* Write Exports to Exports
/* ========================================================================== */


function writeToExports(customExports, destinations) {
  return Promise.all([].concat(destinations).map(async destination => {
    if (destination instanceof Function) {
      await destination({
        customMedia: getObjectWithStringifiedKeys(customExports.customMedia),
        customProperties: getObjectWithStringifiedKeys(customExports.customProperties),
        customSelectors: getObjectWithStringifiedKeys(customExports.customSelectors)
      });
    } else {
      // read the destination as an object
      const opts = destination === Object(destination) ? destination : {
        to: String(destination)
      }; // transformer for Exports into a JSON-compatible object

      const toJSON = opts.toJSON || getObjectWithStringifiedKeys;

      if ('customMedia' in opts || 'customProperties' in opts || 'customSelectors' in opts) {
        // write directly to an object as customProperties
        opts.customMedia = toJSON(customExports.customMedia);
        opts.customProperties = toJSON(customExports.customProperties);
        opts.customSelectors = toJSON(customExports.customSelectors);
      } else if ('custom-media' in opts || 'custom-properties' in opts || 'custom-selectors' in opts) {
        // write directly to an object as custom-properties
        opts['custom-media'] = toJSON(customExports.customMedia);
        opts['custom-properties'] = toJSON(customExports.customProperties);
        opts['custom-selectors'] = toJSON(customExports.customSelectors);
      } else {
        // destination pathname
        const to = String(opts.to || ''); // type of file being written to

        const type = (opts.type || path__default["default"].extname(opts.to).slice(1)).toLowerCase(); // transformed Exports

        const customMediaJSON = toJSON(customExports.customMedia);
        const customPropertiesJSON = toJSON(customExports.customProperties);
        const customSelectorsJSON = toJSON(customExports.customSelectors);

        if (type === 'css') {
          await writeExportsToCssFile(to, customMediaJSON, customPropertiesJSON, customSelectorsJSON);
        }

        if (type === 'js') {
          await writeExportsToCjsFile(to, customMediaJSON, customPropertiesJSON, customSelectorsJSON);
        }

        if (type === 'json') {
          await writeExportsToJsonFile(to, customMediaJSON, customPropertiesJSON, customSelectorsJSON);
        }

        if (type === 'mjs') {
          await writeExportsToMjsFile(to, customMediaJSON, customPropertiesJSON, customSelectorsJSON);
        }
      }
    }
  }));
}
/* Helper utilities
/* ========================================================================== */

function getObjectWithStringifiedKeys(object) {
  return Object.keys(object).reduce((objectJSON, key) => {
    objectJSON[key] = String(object[key]);
    return objectJSON;
  }, {});
}

function writeFile(to, text) {
  return new Promise((resolve, reject) => {
    fs__default["default"].writeFile(to, text, error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

function escapeForJS(string) {
  return string.replace(/\\([\s\S])|(')/g, '\\$1$2').replace(/\n/g, '\\n').replace(/\r/g, '\\r');
}

const plugin = opts => {
  // initialize options
  const features = Object(Object(opts).features);
  const insertBefore = Object(Object(opts).insertBefore);
  const insertAfter = Object(Object(opts).insertAfter);
  const browsers = Object(opts).browsers;
  const stage = 'stage' in Object(opts) ? opts.stage === false ? 5 : parseInt(opts.stage) || 0 : 2;
  const autoprefixerOptions = Object(opts).autoprefixer;
  const sharedOpts = initializeSharedOpts(Object(opts));
  const stagedAutoprefixer = autoprefixerOptions === false ? () => {} : autoprefixer__default["default"](Object.assign({
    overrideBrowserslist: browsers
  }, autoprefixerOptions)); // polyfillable features (those with an available postcss plugin)

  const polyfillableFeatures = cssdb__default["default"].concat( // additional features to be inserted before cssdb features
  getTransformedInsertions(insertBefore, 'insertBefore'), // additional features to be inserted after cssdb features
  getTransformedInsertions(insertAfter, 'insertAfter')).filter( // inserted features or features with an available postcss plugin
  feature => feature.insertBefore || feature.id in plugins).sort( // features sorted by execution order and then insertion order
  (a, b) => idsByExecutionOrder.indexOf(a.id) - idsByExecutionOrder.indexOf(b.id) || (a.insertBefore ? -1 : b.insertBefore ? 1 : 0) || (a.insertAfter ? 1 : b.insertAfter ? -1 : 0)).map( // polyfillable features as an object
  feature => {
    // target browsers for the polyfill
    const unsupportedBrowsers = getUnsupportedBrowsersByFeature(feature.caniuse);
    return feature.insertBefore || feature.insertAfter ? {
      browsers: unsupportedBrowsers,
      plugin: feature.plugin,
      id: `${feature.insertBefore ? 'before' : 'after'}-${feature.id}`,
      stage: 6
    } : {
      browsers: unsupportedBrowsers,
      plugin: plugins[feature.id],
      id: feature.id,
      stage: feature.stage
    };
  }); // staged features (those at or above the selected stage)

  const stagedFeatures = polyfillableFeatures.filter(feature => feature.id in features ? features[feature.id] : feature.stage >= stage).map(feature => {
    let options;
    let plugin;

    if (features[feature.id] === true) {
      // if the plugin is enabled
      options = sharedOpts ? Object.assign({}, sharedOpts) : undefined;
    } else {
      options = sharedOpts // if the plugin has shared options and individual options
      ? Object.assign({}, sharedOpts, features[feature.id]) // if the plugin has individual options
      : Object.assign({}, features[feature.id]);
    }

    if (feature.plugin.postcss) {
      plugin = feature.plugin(options);
    } else {
      plugin = feature.plugin;
    }

    return {
      browsers: feature.browsers,
      plugin,
      id: feature.id
    };
  }); // browsers supported by the configuration

  const supportedBrowsers = browserslist__default["default"](browsers, {
    ignoreUnknownVersions: true
  }); // features supported by the stage and browsers

  const supportedFeatures = stagedFeatures.filter(feature => feature.id in features ? features[feature.id] : supportedBrowsers.some(supportedBrowser => browserslist__default["default"](feature.browsers, {
    ignoreUnknownVersions: true
  }).some(polyfillBrowser => polyfillBrowser === supportedBrowser)));
  const usedPlugins = supportedFeatures.map(feature => feature.plugin);
  usedPlugins.push(stagedAutoprefixer);
  return {
    postcssPlugin: 'postcss-preset-env',
    plugins: usedPlugins,
    OnceExit: function () {
      if (Object(opts).exportTo) {
        writeToExports(sharedOpts.exportTo, opts.exportTo);
      }
    }
  };
};

const initializeSharedOpts = opts => {
  if ('importFrom' in opts || 'exportTo' in opts || 'preserve' in opts) {
    const sharedOpts = {};

    if ('importFrom' in opts) {
      sharedOpts.importFrom = opts.importFrom;
    }

    if ('exportTo' in opts) {
      sharedOpts.exportTo = {
        customMedia: {},
        customProperties: {},
        customSelectors: {}
      };
    }

    if ('preserve' in opts) {
      sharedOpts.preserve = opts.preserve;
    }

    return sharedOpts;
  }

  return false;
};

plugin.postcss = true;

module.exports = plugin;
