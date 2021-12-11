import autoprefixer from 'autoprefixer';
import browserslist from 'browserslist';
import cssdb from 'cssdb';
import postcssAttributeCaseInsensitive from 'postcss-attribute-case-insensitive';
import postcssBlankPseudo from 'css-blank-pseudo/postcss';
import postcssColorFunctionalNotation from 'postcss-color-functional-notation';
import postcssColorHexAlpha from 'postcss-color-hex-alpha';
import postcssColorRebeccapurple from 'postcss-color-rebeccapurple';
import postcssCustomMedia from 'postcss-custom-media';
import postcssCustomProperties from 'postcss-custom-properties';
import postcssCustomSelectors from 'postcss-custom-selectors';
import postcssDirPseudoClass from 'postcss-dir-pseudo-class';
import postcssDoublePositionGradients from 'postcss-double-position-gradients';
import postcssEnvFunction from 'postcss-env-function';
import postcssFocusVisible from 'postcss-focus-visible';
import postcssFocusWithin from 'postcss-focus-within';
import postcssFontVariant from 'postcss-font-variant';
import postcssGapProperties from 'postcss-gap-properties';
import postcssHasPseudo from 'css-has-pseudo/postcss';
import postcssImageSetPolyfill from 'postcss-image-set-function';
import postcssInitial from 'postcss-initial';
import postcssLabFunction from 'postcss-lab-function';
import postcssLogical from 'postcss-logical';
import postcssMediaMinmax from 'postcss-media-minmax';
import postcssNesting from 'postcss-nesting';
import postcssOverflowShorthand from 'postcss-overflow-shorthand';
import postcssPageBreak from 'postcss-page-break';
import postcssPlace from 'postcss-place';
import postcssPrefersColorScheme from 'css-prefers-color-scheme/postcss';
import postcssPseudoClassAnyLink from 'postcss-pseudo-class-any-link';
import postcssReplaceOverflowWrap from 'postcss-replace-overflow-wrap';
import postcssSelectorNot from 'postcss-selector-not';
import * as caniuse from 'caniuse-lite';
import fs from 'fs';
import path from 'path';

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
  'all-property': postcssInitial,
  'any-link-pseudo-class': postcssPseudoClassAnyLink,
  'blank-pseudo-class': postcssBlankPseudo,
  'break-properties': postcssPageBreak,
  'case-insensitive-attributes': postcssAttributeCaseInsensitive,
  'color-functional-notation': postcssColorFunctionalNotation,
  'custom-media-queries': postcssCustomMedia,
  'custom-properties': postcssCustomProperties,
  'custom-selectors': postcssCustomSelectors,
  'dir-pseudo-class': postcssDirPseudoClass,
  'double-position-gradients': postcssDoublePositionGradients,
  'environment-variables': postcssEnvFunction,
  'focus-visible-pseudo-class': postcssFocusVisible,
  'focus-within-pseudo-class': postcssFocusWithin,
  'font-variant-property': postcssFontVariant,
  'gap-properties': postcssGapProperties,
  'has-pseudo-class': postcssHasPseudo,
  'hexadecimal-alpha-notation': postcssColorHexAlpha,
  'image-set-function': postcssImageSetPolyfill,
  'lab-function': postcssLabFunction,
  'logical-properties-and-values': postcssLogical,
  'media-query-ranges': postcssMediaMinmax,
  'nesting-rules': postcssNesting,
  'not-pseudo-class': postcssSelectorNot,
  'overflow-property': postcssOverflowShorthand,
  'overflow-wrap-property': postcssReplaceOverflowWrap,
  'place-properties': postcssPlace,
  'prefers-color-scheme-query': postcssPrefersColorScheme,
  'rebeccapurple-color': postcssColorRebeccapurple,
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
  const caniuseFeature = caniuse.features[feature]; // if feature support can be determined

  if (caniuseFeature) {
    const stats = caniuse.feature(caniuseFeature).stats; // return an array of browsers and versions that do not support the feature

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

        const type = (opts.type || path.extname(opts.to).slice(1)).toLowerCase(); // transformed Exports

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
    fs.writeFile(to, text, error => {
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
  const stagedAutoprefixer = autoprefixerOptions === false ? () => {} : autoprefixer(Object.assign({
    overrideBrowserslist: browsers
  }, autoprefixerOptions)); // polyfillable features (those with an available postcss plugin)

  const polyfillableFeatures = cssdb.concat( // additional features to be inserted before cssdb features
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

  const supportedBrowsers = browserslist(browsers, {
    ignoreUnknownVersions: true
  }); // features supported by the stage and browsers

  const supportedFeatures = stagedFeatures.filter(feature => feature.id in features ? features[feature.id] : supportedBrowsers.some(supportedBrowser => browserslist(feature.browsers, {
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

export { plugin as default };
