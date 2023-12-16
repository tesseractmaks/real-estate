// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"46McK":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
/* =================================
------------------------------------
	LERAMIZ - Landing Page Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/ // import { jsonToData, setStorageData, deleteStorageData } from "./utils.js"
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "router", ()=>router);
// var window_w = $(window).innerWidth();
// $(window).on('load', function () {
// 	/*------------------
// 		Preloder
// 	--------------------*/
// 	$(".loader").fadeOut();
// 	$("#preloder").delay(400).fadeOut("slow");
// });
/*------------------
			DOM
		--------------------*/ parcelHelpers.export(exports, "mainSiteData", ()=>mainSiteData);
parcelHelpers.export(exports, "getPageContainer", ()=>getPageContainer);
parcelHelpers.export(exports, "pageContainer", ()=>pageContainer);
parcelHelpers.export(exports, "headerSection", ()=>headerSection);
parcelHelpers.export(exports, "heroBlock", ()=>heroBlock);
parcelHelpers.export(exports, "heroBlockDetail", ()=>heroBlockDetail);
parcelHelpers.export(exports, "footerBlock", ()=>footerBlock);
var _headerJs = require("./components/header.js");
var _heroJs = require("./components/hero.js");
var _heroDetailJs = require("./components/hero-detail.js");
// import { filterFormSection } from './components/filter-form.js'
// import { gallerySection } from './components/gallery.js'
// import { feturesSection } from "./components/fetures-section.js"
// import { reviewSection } from "./components/review-slider.js"
var _listPropertiesJs = require("./components/list-properties.js");
var _detailPropertyJs = require("./pages/detail-property.js");
var _detailPropertyEditJs = require("./pages/detail-property-edit.js");
var _mainPageJs = require("./pages/main-page.js");
var _footerSectionJs = require("./components/footer-section.js");
const router = new Navigo("/");
async function mainSiteData() {
    let response = await fetch("http://127.0.0.1:8000/api/v1/main_site/");
    const mainData = await response.json();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    return mainData;
}
const app = document.querySelector("#app");
function getPageContainer() {
    const page = document.createElement("container");
    page.classList.add("container");
    // if (pages) {
    // 	page.append(pages)
    // 	console.log(page,"==")
    // 	app.append(
    // 		headerSection, 
    // 		page,
    // 		pageContainer,
    // 		footerBlock,
    // 		)
    // }
    return page;
}
const pageContainer = getPageContainer();
const headerSection = (0, _headerJs.getHeader)(mainSiteData);
console.log(headerSection.then((res)=>res));
const heroBlock = (0, _heroJs.heroSection)(mainSite);
const heroBlockDetail = await (0, _heroDetailJs.heroSectionDetail)();
// Filter form section
// const filterForm = filterFormSection()
// 
// Gallery section
// const galleryBlock = await gallerySection()
// Feature section
const mainPage = await (0, _mainPageJs.mainContainer)();
const footerBlock = await (0, _footerSectionJs.footerSection)(mainSite);
// export const detailBlockEdit = detailNew()
// main.append(feturesBlock, servicesBlock, reviewBlock, footerBlock)
// pageContainer.innerHTML = ""
// pageContainer.append(detailBlock)
// pageContainer.append(detailBlockEdit)
// pageContainer.append(heroBlockDetail, detailBlock)
const mainContaner = document.createElement("contaner");
router.on("/", function() {
    mainContaner.innerHTML = "";
    pageContainer.innerHTML = "";
    if (mainPage != "undefined") pageContainer.append(mainPage);
    mainContaner.append(heroBlock, pageContainer);
});
router.on("/detail/:id", async function(e) {
    console.log(e.data.id);
    mainContaner.innerHTML = "";
    pageContainer.innerHTML = "";
    const detailData = await (0, _listPropertiesJs.getOnePropery)(e.data.id);
    const detailBlock = await (0, _detailPropertyJs.slDetailFeatures)(detailData);
    pageContainer.append(detailBlock);
    mainContaner.append(heroBlockDetail, pageContainer);
});
router.on("/edit/property/:id", async function(e) {
    console.log(e.data.id);
    mainContaner.innerHTML = "";
    pageContainer.innerHTML = "";
    const detailData = await (0, _listPropertiesJs.getOnePropery)(e.data.id);
    let sectionNewDetail = await (0, _detailPropertyEditJs.detailNew)(detailData);
    pageContainer.innerHTML = "";
    pageContainer.append(sectionNewDetail);
    mainContaner.append(heroBlockDetail, pageContainer);
});
// app.innerHTML = ""
// app.append(
// headerSection, 
// 	heroBlockDetail,
// 	// filterForm,
// 	pageContainer,
// 	footerBlock,
// 	)
router.resolve();
app.innerHTML = "";
app.append(headerSection, // filterForm,
mainContaner, footerBlock);
// router.resolve();
// let seconds = 1000 * 3
// let timerImg = setInterval(() =>slowSlider(), seconds);
let counterPointsSlow = 0;
// let counterSlow = 0;
// pointsSlider()
function slowSlider() {
    let points = document.querySelectorAll(".point");
    let images = document.querySelectorAll(".img-item");
    if (points[0]) {
        points[0].classList.add("active-image");
        images[0].classList.add("active-image");
        for(let i = 0; i < images.length; i++){
            for(let p = 0; p < points.length; p++)points[p].classList.remove("active-image");
            images[i].classList.remove("active-image");
        }
        counterSlow++;
        if (counterSlow >= images.length) counterSlow = 0;
        if (counterPointsSlow > points.length - 1) counterPointsSlow = 0;
        points[counterPointsSlow].classList.add("active-image");
        counterPointsSlow++;
        images[counterSlow].classList.add("active-image");
    }
}
// slowSlider()
// let seconds = 1000 * 30
// let timerImg = setInterval(() =>slowSlider(), seconds);
// let counterPointsSlow = 0;
let counterSlow = 0;
function slowSlider2() {
    // let points = document.querySelectorAll(".point")
    let images = document.querySelectorAll(".review-item");
    // if(points[0]) {
    // points[0].classList.add("active-image")
    images[0].classList.add("active-image");
    for(let i = 0; i < images.length; i++)// for(let p = 0; p < points.length; p++) {
    // 	points[p].classList.remove("active-image")
    // };
    images[i].classList.remove("active-image");
    counterSlow++;
    if (counterSlow >= images.length) counterSlow = 0;
    // if (counterPointsSlow > points.length-1) {
    // 	counterPointsSlow = 0
    // }
    // points[counterPointsSlow].classList.add("active-image")
    // counterPointsSlow++
    images[counterSlow].classList.add("active-image");
// };
}
slowSlider2();
// let seconds = 1000 * 3
// let timerImg = setInterval(() =>slowSliderclients(), seconds);
let counterSlowclients = 0;
function slowSliderclients() {
    // let points = document.querySelectorAll(".point")
    let images = document.querySelectorAll(".clients-slider");
    // let images = document.querySelectorAll(".clients-item")
    // if(points[0]) {
    // points[0].classList.add("active-image")
    images[0].classList.add("active-clients");
    // console.log(images)
    for(let i = 0; i < images.length; i++)// for(let p = 0; p < points.length; p++) {
    // 	points[p].classList.remove("active-image")
    // };
    images[i].classList.remove("active-clients");
    counterSlowclients++;
    if (counterSlowclients >= images.length) counterSlowclients = 0;
    // if (counterPointsSlow > points.length-1) {
    // 	counterPointsSlow = 0
    // }
    // points[counterPointsSlow].classList.add("active-image")
    // counterPointsSlow++
    images[counterSlowclients].classList.add("active-clients");
// };
}
 // slowSliderclients()
 // slowSlider()
 // let divPagina = document.querySelector(".site-pagination")
 // if (divPagina) {
 // 	let pages = divPagina.childNodes[0].children
 // 	for (let link of pages){
 // 		link.addEventListener('click', async function (e) {
 // 			e.preventDefault();
 // 			let page = link.childNodes[0].textContent
 // 			window.scrollTo({ top: 1900, behavior: 'smooth' })
 // 			// console.log(page, '+----')
 // 			const feturesBloc = await feturesSection(page = +page)
 // 			console.log(feturesBloc, '----------------')
 // 			app.innerHTML = ""
 // 			app.append(
 // 				headerSection,
 // 					heroBlock,
 // 					filterForm,
 // 					galleryBlock,
 // 					feturesBloc,
 // 					paginationBlock
 // 					)
 // 		});
 // 	};
 // };
 // let seconds = 1000 * 3
 // let timerImg = setInterval(() =>slowSlider(), seconds);
 // // Slider features Detail
 // function singleList(detailData){
 // 	let divSingleList = document.createElement("div")
 // 	divSingleList.classList.add("single-list-content")
 // 	let divRow = document.createElement("div")
 // 	divRow.classList.add("row")
 // 	let divCol8 = document.createElement("div")
 // 	divCol8.classList.add("col-xl-8")
 // 	divCol8.classList.add("sl-title")
 // 	let h2 = document.createElement("h2")
 // 	h2.textContent = detailData.street
 // 	let p = document.createElement("p")
 // 	let i = document.createElement("i")
 // 	i.classList.add("fa")
 // 	i.classList.add("fa-map-marker")
 // 	p.textContent = `${detailData.city}, ${detailData.state} ${detailData.postal_code}`
 // 	p.prepend(i)
 // 	divCol8.append(h2, p)
 // 	let divCol4 = document.createElement("div")
 // 	let a = document.createElement("a")
 // 	a.setAttribute("href", "#")
 // 	a.textContent = detailData.price
 // 	a.classList.add("price-btn")
 // 	divCol4.classList.add("col-xl-4")
 // 	divCol4.append(a)
 // 	divRow.append(divCol8, divCol4)
 // 	divSingleList.append(divRow)
 //     // Property Details
 // 	let h3 = document.createElement("h3")
 // 	h3.classList.add("sl-sp-title")
 // 	h3.textContent = "Property Details"
 // 	let divRowProperty = document.createElement("div")
 // 	divRowProperty.classList.add("row")
 // 	divRowProperty.classList.add("property-details-list")
 // 	let div461 = document.createElement("div")
 // 	div461.classList.add("col-md-4")
 // 	div461.classList.add("col-sm-6")
 // 	let pLarge = document.createElement("p")
 // 	pLarge.textContent = `${detailData.house_area} Square foot`
 // 	let iLarge = document.createElement("i")
 // 	iLarge.classList.add("fa")
 // 	iLarge.classList.add("fa-th-large")
 // 	pLarge.prepend(iLarge)
 // 	let pBed = document.createElement("p")
 // 	pBed.textContent = `${detailData.bedrooms} Bedrooms`
 // 	let iBed = document.createElement("i")
 // 	iBed.classList.add("fa")
 // 	iBed.classList.add("fa-bed")
 // 	pBed.prepend(iBed)
 // 	let pUser = document.createElement("p")
 // 	pUser.textContent = `${detailData.users.profile.first_name} Bedrooms`
 // 	let iUser = document.createElement("i")
 // 	iUser.classList.add("fa")
 // 	iUser.classList.add("fa-user")
 // 	pUser.prepend(iUser)
 // 	div461.append(pLarge, pBed, pUser)
 // 	let div462 = document.createElement("div")
 // 	div462.classList.add("col-md-4")
 // 	div462.classList.add("col-sm-6")
 // 	let pCar = document.createElement("p")
 // 	pCar.textContent = `${detailData.garages} Garages`
 // 	let iCar = document.createElement("i")
 // 	iCar.classList.add("fa")
 // 	iCar.classList.add("fa-car")
 // 	pCar.prepend(iCar)
 // 	let pBuilding = document.createElement("p")
 // 	pBuilding.textContent = `${detailData.categories.title}`
 // 	let iBuilding = document.createElement("i")
 // 	iBuilding.classList.add("fa")
 // 	iBuilding.classList.add("fa-building-o")
 // 	pBuilding.prepend(iBuilding)
 // 	let pClock = document.createElement("p")
 // 	pClock.textContent = `${detailData.time_published} days ago`
 // 	let iClock = document.createElement("i")
 // 	iClock.classList.add("fa")
 // 	iClock.classList.add("fa-clock-o")
 // 	pClock.prepend(iClock)
 // 	div462.append(pCar, pBuilding, pClock)
 // 	let div4Bath = document.createElement("div")
 // 	div4Bath.classList.add("col-md-4")
 // 	let pBath = document.createElement("p")
 // 	pBath.textContent = `${detailData.bathrooms} Bathrooms`
 // 	let iBath = document.createElement("i")
 // 	iBath.classList.add("fa")
 // 	iBath.classList.add("a-bath")
 // 	pBath.prepend(iBath)
 // 	let pTrophy = document.createElement("p")
 // 	pTrophy.textContent = `${detailData.age} years age`
 // 	let iTrophy = document.createElement("i")
 // 	iTrophy.classList.add("fa")
 // 	iTrophy.classList.add("fa-trophy")
 // 	pTrophy.prepend(iTrophy)
 // 	div4Bath.append(pBath, pTrophy)
 // 	divRowProperty.append(div461, div462, div4Bath)
 // 	let h3Descr = document.createElement("h3")
 // 	h3Descr.classList.add("sl-sp-title")
 // 	let divDescr = document.createElement("div")
 // 	divDescr.classList.add("description")
 // 	let pDescr = document.createElement("p")
 // 	pDescr.textContent = `${detailData.description}`
 // 	divDescr.append(pDescr)
 // 	let accordionPlanContent = accordionPlan(detailData)
 // 	divSingleList.append(h3, divRowProperty, h3Descr, divDescr, accordionPlanContent)
 // 	return divSingleList
 // };
 // // Accordion features Detail
 // function accordionPlan(detailData) {
 // 	// let accordion = document.querySelector("#accordion")
 // 	// let span = accordion.querySelector("#headingOne .panel-link span")
 // 	// span.textContent = `${detailData.house_area} Square foot`
 // 	// console.log(span)
 // 	let  h3Title = document.createElement("h3")
 // 	h3Title.classList.add("sl-sp-title")
 // 	h3Title.classList.add("bd-no")
 // 	h3Title.textContent = "Floor plans"
 // 	let  divAccordion = document.createElement("div")
 // 	divAccordion.setAttribute("id","accordion")
 // 	divAccordion.classList.add("plan-accordion")
 // 	let counterFloors = 1;
 // 	if(detailData.first_floor_area > 0){
 // 		counterFloors++
 // 	};
 // 	if(detailData.second_floor_area > 0){
 // 		counterFloors++
 // 	};
 // 	if(detailData.third_floor_area > 0){
 // 		counterFloors++
 // 	};
 // 	// console.log(counterFloors)
 // 	for(let item = 1; item < counterFloors; item++){
 // 		let  divPanel = document.createElement("div")
 // 		divPanel.classList.add("panel")
 // 		let  divPanelHeader = document.createElement("div")
 // 		divPanelHeader.classList.add("panel-header")
 // 		divPanelHeader.setAttribute("id","headingOne")
 // 		let  button = document.createElement("button")
 // 		button.classList.add("panel-link")
 // 		if(item == 1){
 // 			button.classList.add("active")
 // 		};
 // 		button.setAttribute("data-toggle","collapse")
 // 		button.setAttribute("data-target",`#collapse${item}`)
 // 		button.setAttribute("aria-expanded","false")
 // 		button.setAttribute("aria-controls",`collapse${item}`)
 // 		if(item == 1){
 // 			button.textContent = "First Floor:"
 // 		};
 // 		if(item == 2){
 // 			button.textContent = "Second Floor:"
 // 		};
 // 		if(item == 3){
 // 			button.textContent = "Third Floor:"
 // 		};
 // 		let  span = document.createElement("span")
 // 		span.textContent = `${detailData.house_area} Square foot`
 // 		let  i = document.createElement("i")
 // 		i.classList.add("fa")
 // 		i.classList.add("fa-angle-down")
 // 		button.append(span, i)
 // 		divPanelHeader.append(button)
 // 		let divCollapse = document.createElement("div")
 // 		divCollapse.classList.add("collapse")
 // 		if(item == 1){
 // 			divCollapse.classList.add("show")
 // 			divCollapse.setAttribute("aria-labelledby", "headingOne")
 // 		};
 // 		if(item == 2){
 // 			divCollapse.setAttribute("aria-labelledby", "headingTwo")
 // 		};
 // 		if(item == 3){
 // 			divCollapse.setAttribute("aria-labelledby", "headingThree")
 // 		};
 // 		divCollapse.setAttribute("id",`collapse${item}`)
 // 		divCollapse.setAttribute("data-parent", "#accordion")
 // 		let divPanelBody = document.createElement("div")
 // 		divPanelBody.classList.add("panel-body")
 // 		let img = document.createElement("img")
 // 		img.setAttribute("src", "img/plan-sketch.jpg")
 // 		img.setAttribute("alt", "img")
 // 		divPanelBody.append(img)
 // 		divCollapse.append(divPanelBody)
 // 		divPanel.append(divPanelHeader, divCollapse)
 // 		divAccordion.append(divPanel)
 // 	};
 // 	return divAccordion
 // };
 // async function slDetailFeatures() {
 // 	let currentPage = "currentPage"
 // 	let detailData;
 // 	let p_url = location.search.substring(1)
 // 	if (localStorage[currentPage]) {
 // 		let storage = jsonToData(localStorage[currentPage]);
 // 		storage.forEach(function(elem, index) {
 // 			if (Number(elem.id) == Number(p_url)) {
 // 				detailData = elem};
 // 		});
 // 	}
 // 	else{
 // 		response = await fetch(`http://127.0.0.1:8000/api/v1/properties/${p_url}/`);
 // 		detailData = await response.json();
 // 		console.log(detailData)
 // 	};
 // 	if (detailData) {
 // 	// console.log(detailData)
 // 		let colSlider = document.querySelector(".col-lg-8")
 // 		let divslider = document.createElement("div")
 // 		divslider.setAttribute("id", "sl-slider")
 // 		// divslider.classList.add("single-list-slider")
 // 		divslider.classList.add("block-slider")
 // 		let divAreaSlider = document.createElement("div")
 // 		divAreaSlider.classList.add("block-area-slider")
 // 		//Arrows
 // 		let divBtns = document.createElement("div")
 // 		divBtns.classList.add("btnsAreaSize")
 // 		let divArrowLeft = document.createElement("div")
 // 		divArrowLeft.classList.add("blockArrow")
 // 		divArrowLeft.setAttribute("id", "left-btn")
 // 		let iArrowLeft = document.createElement("i")
 // 		iArrowLeft.classList.add("fa")
 // 		iArrowLeft.classList.add("fa-angle-left")
 // 		iArrowLeft.setAttribute("aria-hidden", "true")
 // 		divArrowLeft.append(iArrowLeft)
 // 		let divArrowRight = document.createElement("div")
 // 		divArrowRight.classList.add("blockArrow")
 // 		divArrowRight.setAttribute("id", "right-btn")
 // 		let iArrowRight = document.createElement("i")
 // 		iArrowRight.classList.add("fa")
 // 		iArrowRight.classList.add("fa-angle-right")
 // 		iArrowRight.setAttribute("aria-hidden", "true")
 // 		divArrowRight.append(iArrowRight)
 // 		divBtns.append(divArrowLeft, divArrowRight)
 // 		// Points
 // 		let divPoint = document.createElement("div")
 // 		divPoint.classList.add("point-size")
 // 		for(let i=0; i < 3; i++){
 // 			let spanPoint = document.createElement("span")
 // 			spanPoint.classList.add("point")
 // 			divPoint.append(spanPoint)
 // 		};
 // 		// Images
 // 		let divImgArea = document.createElement("div")
 // 		divImgArea.classList.add("img-area")
 // 		detailData["photo"].forEach(function (elem) {
 // 			let divImg = document.createElement("img")
 // 			divImg.classList.add("img-item")
 // 			divImg.setAttribute("src", elem)
 // 			divImg.setAttribute("alt", "img")
 // 			divImg.setAttribute("alt", "img")
 // 			divImgArea.append(divImg)
 // 		});
 // 		divAreaSlider.append(divImgArea, divPoint, divBtns)
 // 		divslider.append(divAreaSlider)
 // 		let singleListContent = singleList(detailData)
 // 		colSlider.prepend(divslider, singleListContent)
 // 		pointsSlider ()
 // 		let mainBlockSliderRun = document.querySelector("#sl-slider")
 // 		mainBlockSliderRun.addEventListener("mouseover", ()=>{
 // 			clearInterval(timerImg)
 // 		});
 // 		mainBlockSliderRun.addEventListener("mouseleave", ()=>{
 // 			timerImg = setInterval(() =>slowSlider(), seconds);
 // 		});
 // 	};
 // };
 // let counterPointsSlow = 0;
 // let counterSlow = 0;
 // function slowSlider() {
 // 	let points = document.querySelectorAll(".point")
 // 	let images = document.querySelectorAll(".img-item")
 // 	if(points[0]) {
 // 		points[0].classList.add("active-image")
 // 		images[0].classList.add("active-image")
 // 		for(let i = 0; i < images.length; i++) {
 // 			for(let p = 0; p < points.length; p++) {
 // 				points[p].classList.remove("active-image")
 // 			};
 // 			images[i].classList.remove("active-image")
 // 		};
 // 		counterSlow++
 // 		if (counterSlow >= images.length) {
 // 			counterSlow =  0
 // 		}
 // 		if (counterPointsSlow > points.length-1) {
 // 			counterPointsSlow = 0
 // 		}
 // 		points[counterPointsSlow].classList.add("active-image")
 // 		counterPointsSlow++
 // 		images[counterSlow].classList.add("active-image")
 // 	};
 // };
 // function pointsSlider () {
 // 	let leftBtn = document.querySelector("#left-btn")
 // 	let rightBtn = document.querySelector("#right-btn")
 // 	let points = document.querySelectorAll(".point")
 // 	let images = document.querySelectorAll(".img-item")
 // 	points[0].classList.add("active-image")
 // 	images[0].classList.add("active-image")
 // 	let counter = 0;
 // 	for(let i = 0; i < points.length; i++) {
 // 		points[i].addEventListener("click", ()=>{
 // 			for(let k = 0; k < images.length; k++) {
 // 				for(let p = 0; p < points.length; p++) {
 // 					points[p].classList.remove("active-image")
 // 				};
 // 				images[k].classList.remove("active-image")
 // 			};
 // 			counter = i; 
 // 			points[counter].classList.add("active-image")
 // 			images[counter].classList.add("active-image")
 // 		});
 // 	};
 // 	let counterPoints = 0;
 // 	leftBtn.addEventListener("click", ()=> {
 // 		for(let i = 0; i < images.length; i++) {
 // 			for(let p = 0; p < points.length; p++) {
 // 				points[p].classList.remove("active-image")
 // 			};
 // 			images[i].classList.remove("active-image")
 // 		};
 // 		counter--
 // 		if (counter < 0) {
 // 			counter =  images.length - 1
 // 		}
 // 		if (counterPoints > points.length-1) {
 // 			counterPoints = 0
 // 		}
 // 		// console.log(counterPoints,'==')
 // 		points[counterPoints].classList.add("active-image")
 // 		counterPoints++
 // 		images[counter].classList.add("active-image")
 // 	})
 // 	rightBtn.addEventListener("click", ()=> {
 // 		for(let i = 0; i < images.length; i++) {
 // 			for(let p = 0; p < points.length; p++) {
 // 				points[p].classList.remove("active-image")
 // 			};
 // 			images[i].classList.remove("active-image")
 // 		};
 // 		counter++
 // 		if (counter >= images.length) {
 // 			counter =  0
 // 		}
 // 		if (counterPoints > points.length-1) {
 // 			counterPoints = 0
 // 		}
 // 		// console.log(counterPoints,'==')
 // 		points[counterPoints].classList.add("active-image")
 // 		counterPoints++
 // 		images[counter].classList.add("active-image")
 // 	});
 // };
 // function getIdFeature(itemRow) {
 // 	let rowFeature = itemRow.querySelectorAll(".col-lg-4 a")
 // 	for (let i = 0; i < rowFeature.length; i++) {
 // 		rowFeature[i].addEventListener("click", async function (elem) {
 // 			location.href = `${rowFeature[i].href}?` + rowFeature[i].id
 // 		});
 // 	};
 // };
 // slDetailFeatures()
 // // Pagination
 // async function pagination(propertyData, currentPage) {
 // 	// console.log(propertyData["pages"], currentPage, '----')
 // 	window.scrollTo({ top: 1900, behavior: 'smooth' })
 // 	if (propertyData["pages"] > 0) {
 // 		let divPagina = document.querySelector(".site-pagination")
 // 		divPagina.innerHTML = ""
 // 		let aPreview = document.createElement("a")
 // 		let iLeft = document.createElement("i")
 // 		aPreview.setAttribute("href", `?page=${propertyData["page"] - 1}`)
 // 		iLeft.classList.add("fa")
 // 		iLeft.classList.add("fa-angle-left")
 // 		aPreview.append(iLeft)
 // 		let aNext = document.createElement("a")
 // 		let iRight = document.createElement("i")
 // 		aNext.setAttribute("href", `?page=${propertyData["page"] + 1}`)
 // 		iRight.classList.add("fa")
 // 		iRight.classList.add("fa-angle-right")
 // 		aNext.append(iRight)
 // 		let liNext = document.createElement("li")
 // 		liNext.setAttribute("style", "display: inline-block")
 // 		liNext.append(aNext)
 // 		let ul = document.createElement("ul")
 // 		ul.setAttribute("style", "list-style-type: none")
 // 		let liPreview = document.createElement("li")
 // 		liPreview.setAttribute("style", "display: none")
 // 		if (propertyData["page"] > 1) {
 // 			liPreview.style.display = "inline-block"
 // 			liPreview.append(aPreview)
 // 		};
 // 		ul.append(liPreview)
 // 		for (let element = 1; element <= propertyData["pages"]; element++) {
 // 			let a = document.createElement("a")
 // 			let li = document.createElement("li")
 // 			a.setAttribute("style", "display='none'")
 // 			li.setAttribute("style", "display='none'")
 // 			if (element >= (propertyData["page"] - 2) && element <= (propertyData["page"] + 2)) {
 // 				a.setAttribute("href", `?page=${element}`)
 // 				a.textContent = element
 // 				li.setAttribute("style", "display: inline-block")
 // 				li.append(a)
 // 				ul.append(li)
 // 			};
 // 			if (element == propertyData["page"]) {
 // 				a.removeAttribute("href")
 // 				a.style.color = "#d4d2d2"
 // 			};
 // 		};
 // 		if (currentPage == propertyData["pages"]) {
 // 			liNext.style.display = "none"
 // 		};
 // 		ul.append(liNext)
 // 		divPagina.append(ul)
 // 	};
 // };
 // let sitePagination = document.querySelector('.site-pagination')
 // if (sitePagination) {
 // 	sitePagination.addEventListener('click', function (e) {
 // 		if (e.target.tagName == "A") {
 // 			e.preventDefault();
 // 			let url = String(e.target.href)
 // 			let page = url.slice(url.length - 3, url.length).match(/\d+/)[0]
 // 			window.scrollTo({ top: 1900, behavior: 'smooth' })
 // 			feturesSection(page = +page, params = params,)
 // 		}
 // 	});
 // };
 // // Services section
 // async function servicesSection() {
 // 	let itemElement = document.querySelector(".services-section")
 // 	let container;
 // 	if (itemElement) {
 // 		container = itemElement.querySelector(".col-lg-6")
 // 		let element = main_site["servicesSection"]
 // 		let img = document.createElement("img")
 // 		img.setAttribute("src", element["image"])
 // 		img.setAttribute("alt", "service")
 // 		container.append(img)
 // 		let sectionTitle = itemElement.querySelector(".section-title")
 // 		let h3 = document.createElement("h3")
 // 		let p = document.createElement("p")
 // 		h3.textContent = element["h3"]
 // 		p.textContent = element["p"]
 // 		sectionTitle.append(h3, p)
 // 		let services = itemElement.querySelector(".services")
 // 		element["serviceItems"].forEach(function (element, idx) {
 // 			let div = document.createElement("div")
 // 			div.classList.add("service-item")
 // 			let i = document.createElement("i")
 // 			i.classList.add("fa")
 // 			if (idx == 0) { i.classList.add("fa-comments") }
 // 			if (idx == 1) { i.classList.add("fa-home") }
 // 			if (idx == 2) { i.classList.add("fa-briefcase") }
 // 			div.append(i)
 // 			let div2 = document.createElement("div")
 // 			let h5 = document.createElement("h5")
 // 			let p = document.createElement("p")
 // 			h5.textContent = element["h5"]
 // 			p.textContent = element["p"]
 // 			div2.classList.add("service-text")
 // 			div2.append(h5, p)
 // 			div.append(div2)
 // 			services.append(div)
 // 		});
 // 	};
 // };
 // // Review section
 // async function reviewSection() {
 // 	let element = main_site["review"]
 // 	let itemElement = document.querySelector(".review-section")
 // 	let reviewSlider;
 // 	if (itemElement) {
 // 		reviewSlider = itemElement.querySelector(".review-slider")
 // 		reviewSlider.classList.add("owl-carousel")
 // 		reviewSlider.classList.add("owl-item")
 // 		reviewSlider.classList.add("owl-drag")
 // 		reviewSlider.classList.add("owl-loaded")
 // 		element["reviewItems"].forEach(function (elem, idx) {
 // 			let h5 = document.createElement("h5")
 // 			let p = document.createElement("p")
 // 			let span = document.createElement("span")
 // 			let div2 = document.createElement("div")
 // 			let div3 = document.createElement("div")
 // 			div2.classList.add("rating")
 // 			div3.classList.add("review-item")
 // 			div3.classList.add("text-white")
 // 			for (let num = 0; num < 5; num++) {
 // 				let i = document.createElement("i")
 // 				i.classList.add("fa")
 // 				i.classList.add("fa-star")
 // 				div2.append(i)
 // 			}
 // 			p.textContent = elem["p"]
 // 			h5.textContent = elem["h5"]
 // 			span.textContent = elem["span"]
 // 			let div = document.createElement("div")
 // 			div.classList.add("clint-pic")
 // 			div.classList.add("set-bg")
 // 			div.setAttribute("data-setbg", `${elem["image"]}`)
 // 			div.setAttribute("style", `background-image: url(${elem["image"]});`)
 // 			div3.append(p, h5, span, div, div2)
 // 			reviewSlider.append(div3)
 // 		});
 // 		return reviewSlider
 // 	};
 // };
 // // Clients section 
 // async function clientsSection() {
 // 	let element = main_site["clients"]
 // 	let itemElement = document.querySelector(".clients-section")
 // 	let clientsSlider = itemElement.querySelector(".clients-slider")
 // 	clientsSlider.classList.add("owl-carousel")
 // 	clientsSlider.classList.add("owl-loaded")
 // 	clientsSlider.classList.add("owl-drag")
 // 	element.forEach(function (elem, idx) {
 // 		let link = document.createElement("a")
 // 		link.setAttribute("href", "https://ya.ru")
 // 		let img = document.createElement("img")
 // 		img.setAttribute("src", elem)
 // 		img.setAttribute("alt", "client")
 // 		link.append(img)
 // 		clientsSlider.append(link)
 // 	});
 // 	return clientsSlider
 // };
 // // Footer section
 // async function footerSection() {
 // 	let element = main_site["footer"]
 // 	let itemElement = document.querySelector(".footer-section")
 // 	let rowElement = itemElement.querySelector(".row")
 // 	for (let idx = 0; idx < 4; idx++) {
 // 		let divCol = document.createElement("div")
 // 		divCol.classList.add("col-lg-3")
 // 		divCol.classList.add("col-md-6")
 // 		divCol.classList.add("footer-widget")
 // 		if (idx == 0) {
 // 			let img = document.createElement("img")
 // 			img.setAttribute("src", element["image"])
 // 			img.setAttribute("alt", "logo")
 // 			let p = document.createElement("p")
 // 			p.textContent = element["p"]
 // 			let divLinks = document.createElement("div")
 // 			divLinks.classList.add("social")
 // 			element["socialLinks"].forEach(function (elem, idx) {
 // 				let a = document.createElement("a")
 // 				a.setAttribute("href", elem)
 // 				let i = document.createElement("i")
 // 				i.classList.add("fa")
 // 				if (idx == 0) { i.classList.add("fa-facebook") }
 // 				if (idx == 1) { i.classList.add("fa-twitter") }
 // 				if (idx == 2) { i.classList.add("fa-instagram") }
 // 				if (idx == 3) { i.classList.add("fa-pinterest") }
 // 				if (idx == 4) { i.classList.add("fa-linkedin") }
 // 				a.append(i)
 // 				divLinks.append(a)
 // 			});
 // 			divCol.append(img, p, divLinks)
 // 		};
 // 		rowElement.append(divCol)
 // 		if (idx == 1) {
 // 			let divContact = document.createElement("div")
 // 			divContact.classList.add("contact-widget")
 // 			let h5 = document.createElement("h5")
 // 			h5.classList.add("fw-title")
 // 			h5.textContent = "CONTACT US"
 // 			divContact.append(h5)
 // 			element["contacts"].forEach(function (elem, idx) {
 // 				let p = document.createElement("p");
 // 				let i = document.createElement("i")
 // 				i.classList.add("fa")
 // 				if (idx == 0) {
 // 					p.textContent = elem
 // 					i.classList.add("fa-map-marker")
 // 				};
 // 				if (idx == 1) {
 // 					p.textContent = elem
 // 					i.classList.add("fa-phone")
 // 				};
 // 				if (idx == 2) {
 // 					p.textContent = elem
 // 					i.classList.add("fa-envelope")
 // 				};
 // 				if (idx == 3) {
 // 					p.textContent = elem
 // 					i.classList.add("fa-clock-o")
 // 				};
 // 				p.prepend(i)
 // 				divContact.append(p)
 // 			});
 // 			divCol.prepend(divContact)
 // 		};
 // 		if (idx == 2) {
 // 			let divDouble = document.createElement("div")
 // 			divDouble.classList.add("double-menu-widget")
 // 			let h5 = document.createElement("h5")
 // 			h5.classList.add("fw-title")
 // 			h5.textContent = "POPULAR PLACES"
 // 			divDouble.append(h5)
 // 			let ul = document.createElement("ul")
 // 			element["popularPlacesLinks"][0].forEach(function (elem, idx) {
 // 				let li = document.createElement("li");
 // 				let a = document.createElement("a");
 // 				a.setAttribute("href", "https://ya.ru")
 // 				a.textContent = elem["title"]
 // 				li.append(a)
 // 				ul.append(li)
 // 			});
 // 			divDouble.append(ul)
 // 			let ul2 = document.createElement("ul")
 // 			element["popularPlacesLinks"][1].forEach(function (elem, idx) {
 // 				let li = document.createElement("li");
 // 				let a = document.createElement("a");
 // 				a.setAttribute("href", "https://ya.ru")
 // 				a.textContent = elem["title"]
 // 				li.append(a)
 // 				ul2.append(li)
 // 			});
 // 			divDouble.append(ul2)
 // 			divCol.append(divDouble)
 // 		};
 // 		rowElement.append(divCol)
 // 		if (idx == 3) {
 // 			let divNewslatter = document.createElement("div")
 // 			divNewslatter.classList.add("newslatter-widget")
 // 			let h5 = document.createElement("h5")
 // 			h5.classList.add("fw-title")
 // 			h5.textContent = "NEWSLETTER"
 // 			let p = document.createElement("p")
 // 			p.textContent = "Subscribe your email to get the latest news and new offer also discount"
 // 			let form = document.createElement("form")
 // 			form.classList.add("footer-newslatter-form")
 // 			let input = document.createElement("input")
 // 			input.setAttribute("type", "text")
 // 			input.setAttribute("placeholder", "Email address")
 // 			let button = document.createElement("button")
 // 			let i = document.createElement("i")
 // 			i.classList.add("fa")
 // 			i.classList.add("fa-send")
 // 			button.append(i)
 // 			form.append(input, button)
 // 			divNewslatter.append(h5, p, form)
 // 			divCol.append(divNewslatter)
 // 		};
 // 		rowElement.append(divCol)
 // 	};
 // };
 // async function footerBbottom() {
 // 	let element = main_site["footer"]
 // 	let itemElement = document.querySelector(".footer-section")
 // 	let containerElement = itemElement.querySelector(".container")
 // 	let divBottom = document.createElement("div")
 // 	divBottom.classList.add("footer-bottom")
 // 	let nav = document.createElement("div")
 // 	nav.classList.add("footer-nav")
 // 	let divCopyright = document.createElement("div")
 // 	divCopyright.classList.add("copyright")
 // 	let p = document.createElement("p")
 // 	p.innerHTML = `Copyright &copy ${new Date().getFullYear()} All rights reserved `
 // 	divCopyright.append(p)
 // 	let ul = document.createElement("ul")
 // 	element["footerBottom"].forEach(function (elem, idx) {
 // 		let li = document.createElement("li");
 // 		let a = document.createElement("a");
 // 		a.setAttribute("href", elem["link"])
 // 		a.textContent = elem["text"]
 // 		li.append(a)
 // 		ul.append(li)
 // 	});
 // 	nav.append(ul)
 // 	divBottom.append(nav, divCopyright)
 // 	containerElement.append(divBottom)
 // };
 // mainMenu()
 // heroSection()
 // servicesSection()
 // footerSection()
 // footerBbottom()
 // feturesSection()
 // gallerySection()
 // jQuery
 // 	/*------------------
 // 		Navigation
 // 	--------------------*/
 // 	$('.nav-switch').on('click', function (event) {
 // 		$('.main-menu').slideToggle(400);
 // 		event.preventDefault();
 // 	});
 // 	/*------------------
 // 		Background set
 // 	--------------------*/
 // 	$('.set-bg').each(function () {
 // 		var bg = $(this).data('setbg');
 // 		$(this).css('background-image', 'url(' + bg + ')');
 // 	});
 // 	$('.gallery').find('.gallery-item').each(function () {
 // 		var pi_height1 = $(this).outerWidth(true),
 // 			pi_height2 = pi_height1 / 2;
 // 		if ($(this).hasClass('grid-long') && window_w > 991) {
 // 			$(this).css('height', pi_height2);
 // 		} else {
 // 			$(this).css('height', Math.abs(pi_height1));
 // 		}
 // 	});
 // 	$('.gallery').masonry({
 // 		itemSelector: '.gallery-item',
 // 		columnWidth: '.grid-sizer',
 // 		gutter: 20
 // 	});
 // 	/*------------------
 // 		Review Slider
 // 	--------------------*/
 // 	$('.review-slider').append(reviewSection())
 // 	$('.review-slider').owlCarousel({
 // 		loop: true,
 // 		margin: 0,
 // 		nav: false,
 // 		items: 1,
 // 		dots: true,
 // 		autoplay: true,
 // 	});
 // 	$('.clients-slider').append(clientsSection())
 // 	$('.clients-slider').owlCarousel({
 // 		loop: true,
 // 		autoplay: true,
 // 		margin: 30,
 // 		nav: false,
 // 		dots: true,
 // 		responsive: {
 // 			0: {
 // 				items: 2,
 // 				margin: 10
 // 			},
 // 			600: {
 // 				items: 3
 // 			},
 // 			800: {
 // 				items: 3
 // 			},
 // 			1000: {
 // 				items: 5
 // 			}
 // 		}
 // 	});
 // 	// // /*------------------
 // 	// // 	Review Slider
 // 	// // --------------------*/
 // 	// var sync1 = $("#sl-slider") //.append(slDetailFeatures())
 // 	// var sync2 = $("#sl-slider-thumb") //.append(thumbDetailFeatures());
 // 	var slidesPerPage = 4; //globaly define number of elements per page
 // 	var syncedSecondary = true;
 // 	// sync1.owlCarousel({
 // 	// 	items: 1,
 // 	// 	slideSpeed: 2000,
 // 	// 	nav: false,
 // 	// 	autoplay: true,
 // 	// 	dots: true,
 // 	// 	loop: true,
 // 	// 	responsiveRefreshRate: 200,
 // 	// }).on('changed.owl.carousel', syncPosition);
 // 	// sync2.on('initialized.owl.carousel', function () {
 // 	// 	sync2.find(".owl-item").eq(0).addClass("current");
 // 	// }).owlCarousel({
 // 	// 	items: slidesPerPage,
 // 	// 	dots: true,
 // 	// 	nav: true,
 // 	// 	margin: 10,
 // 	// 	smartSpeed: 200,
 // 	// 	slideSpeed: 500,
 // 	// 	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
 // 	// 	slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
 // 	// 	responsiveRefreshRate: 100
 // 	// }).on('changed.owl.carousel', syncPosition2);
 // 	function syncPosition(el) {
 // 		//if you set loop to false, you have to restore this next line
 // 		var current = el.item.index;
 // 		//if you disable loop you have to comment this block
 // 		var count = el.item.count - 1;
 // 		var current = Math.round(el.item.index - (el.item.count / 2) - .5);
 // 		if (current < 0) {
 // 			current = count;
 // 		}
 // 		if (current > count) {
 // 			current = 0;
 // 		}
 // 		//end block
 // 		sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
 // 		var onscreen = sync2.find('.owl-item.active').length - 1;
 // 		var start = sync2.find('.owl-item.active').first().index();
 // 		var end = sync2.find('.owl-item.active').last().index();
 // 		if (current > end) {
 // 			sync2.data('owl.carousel').to(current, 100, true);
 // 		}
 // 		if (current < start) {
 // 			sync2.data('owl.carousel').to(current - onscreen, 100, true);
 // 		}
 // 	}
 // 	function syncPosition2(el) {
 // 		if (syncedSecondary) {
 // 			var number = el.item.index;
 // 			sync1.data('owl.carousel').to(number, 100, true);
 // 		}
 // 	}
 // 	// sync2.on("click", ".owl-item", function (e) {
 // 	// 	e.preventDefault();
 // 	// 	var number = $(this).index();
 // 	// 	sync1.data('owl.carousel').to(number, 300, true);
 // 	// });
 // 	/*------------------
 // 		Accordions
 // 	--------------------*/
 // 	$('.panel-link').on('click', function (e) {
 // 		$('.panel-link').removeClass('active');
 // 		var $this = $(this);
 // 		if (!$this.hasClass('active')) {
 // 			$this.addClass('active');
 // 		}
 // 		e.preventDefault();
 // 	});
 // 	$('.video-link').magnificPopup({
 // 		disableOn: 700,
 // 		type: 'iframe',
 // 		mainClass: 'mfp-fade',
 // 		removalDelay: 160,
 // 		preloader: false,
 // 	});
 // // (jQuery);

},{"./components/header.js":"iODzc","./components/hero.js":"5XWAP","./components/hero-detail.js":"7dTVO","./components/list-properties.js":"cNDET","./pages/detail-property.js":"ctXjF","./pages/detail-property-edit.js":"4begh","./pages/main-page.js":"8PfDb","./components/footer-section.js":"eD0QE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iODzc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "headerTopLeft", ()=>headerTopLeft);
parcelHelpers.export(exports, "headerTopRight", ()=>headerTopRight);
parcelHelpers.export(exports, "mainMenu", ()=>mainMenu);
parcelHelpers.export(exports, "getHeader", ()=>getHeader);
var _elementsJs = require("./elements.js");
function headerTopLeft(main_site) {
    let topLeft = document.createElement("div");
    topLeft.classList.add("col-lg-6");
    topLeft.classList.add("header-top-left");
    let faClass;
    let textPart1;
    for(let i = 1; i < 3; i++){
        let div = document.createElement("div");
        div.classList.add("top-info");
        // console.log(main_site)
        switch(i){
            case 1:
                faClass = "fa-phone", textPart1 = " " + main_site["header"]["phone"];
                break;
            case 2:
                faClass = "fa-envelope", textPart1 = " " + main_site["header"]["email"];
                break;
        }
        let iElem = (0, _elementsJs.Ielement)(faClass, textPart1);
        div.append(iElem);
        topLeft.append(div);
    }
    return topLeft;
}
function headerTopRight(main_site) {
    let topRight = document.createElement("div");
    topRight.classList.add("col-lg-6");
    topRight.classList.add("text-lg-right");
    topRight.classList.add("header-top-right");
    let topSocial = document.createElement("div");
    topSocial.classList.add("top-social");
    let links = main_site["header"]["socialLinks"];
    let faClass;
    for(let i = 0; i < links.length; i++){
        switch(i){
            case 0:
                faClass = "fa-facebook";
                break;
            case 1:
                faClass = "fa-twitter";
                break;
            case 2:
                faClass = "fa-instagram";
                break;
            case 3:
                faClass = "fa-pinterest";
                break;
            case 4:
                faClass = "fa-linkedin";
                break;
        }
        let a = (0, _elementsJs.aIelements)(links[i], faClass);
        topSocial.append(a);
    }
    let divUserPanel = document.createElement("div");
    divUserPanel.classList.add("user-panel");
    let aRegister = (0, _elementsJs.aIelements)("#", "fa-user-circle-o", " Register");
    let aLogin = (0, _elementsJs.aIelements)("#", "fa-sign-in", " Login");
    divUserPanel.append(aRegister, aLogin);
    topRight.append(topSocial, divUserPanel);
    return topRight;
}
function mainMenu(main_site) {
    const divContainer = document.createElement("div");
    divContainer.classList.add("container");
    let divRow = document.createElement("div");
    divRow.classList.add("row");
    let divCol12 = document.createElement("div");
    divCol12.classList.add("col-12");
    let divNavbar = document.createElement("div");
    divNavbar.classList.add("site-navbar");
    let aLogo = document.createElement("a");
    aLogo.href = "/";
    aLogo.classList.add("site-logo");
    let imgLogo = document.createElement("img");
    imgLogo.setAttribute("src", "../img/logo.png");
    imgLogo.setAttribute("alt", "logo");
    aLogo.append(imgLogo);
    let divNaSwich = document.createElement("div");
    divNaSwich.classList.add("nav-switch");
    let i = (0, _elementsJs.Ielement)("fa-bars");
    divNaSwich.append(i);
    let links = main_site["header"]["mainMenu"];
    let ulMenu = (0, _elementsJs.ulAelement)("main-menu", links);
    divNavbar.append(aLogo, divNaSwich, ulMenu);
    divCol12.append(divNavbar);
    divRow.append(divCol12);
    divContainer.append(divRow);
    return divContainer;
}
async function getHeader(mainSite) {
    let main_site = await mainSite();
    const headerElement = document.createElement("header");
    headerElement.classList.add("header-section");
    let divHeader = document.createElement("div");
    divHeader.classList.add("header-top");
    let divContainerHeader = document.createElement("div");
    divContainerHeader.classList.add("container");
    let divRowHeader = document.createElement("div");
    divRowHeader.classList.add("row");
    const headerLeft = headerTopLeft(main_site);
    const headerRight = headerTopRight(main_site);
    const headerMainMenu = mainMenu(main_site);
    divRowHeader.append(headerLeft, headerRight);
    divContainerHeader.append(divRowHeader);
    divHeader.append(divContainerHeader, headerMainMenu);
    headerElement.append(divHeader);
    return headerElement;
}

},{"./elements.js":"rwZfZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"rwZfZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "anyIelements", ()=>anyIelements);
parcelHelpers.export(exports, "pIelements", ()=>pIelements);
parcelHelpers.export(exports, "aIelements", ()=>aIelements);
parcelHelpers.export(exports, "aElements", ()=>aElements);
parcelHelpers.export(exports, "Ielement", ()=>Ielement);
parcelHelpers.export(exports, "ulAelement", ()=>ulAelement);
parcelHelpers.export(exports, "anyElement", ()=>anyElement);
parcelHelpers.export(exports, "buttonElement", ()=>buttonElement);
parcelHelpers.export(exports, "imgElement", ()=>imgElement);
function anyIelements(tagname, faClass, textPart1 = "") {
    let any = document.createElement(tagname);
    any.textContent = textPart1;
    let i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add(faClass);
    any.prepend(i);
    return any;
}
function pIelements(faClass, textPart1 = "") {
    let p = document.createElement("p");
    p.textContent = textPart1;
    let i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add(faClass);
    p.prepend(i);
    return p;
}
function aIelements(link, faClass, textPart1 = "", textPart2 = "") {
    let a = document.createElement("a");
    a.href = link;
    let i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add(faClass);
    a.textContent = textPart1 + textPart2;
    a.prepend(i);
    return a;
}
function aElements(link, aClass, textPart1 = "", textPart2 = "") {
    let a = document.createElement("a");
    a.classList.add(aClass);
    a.href = link;
    a.textContent = textPart1 + textPart2;
    return a;
}
function Ielement(faClass, textPart1 = "", textPart2 = "") {
    let i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add(faClass);
    i.textContent = textPart1 + textPart2;
    return i;
}
function ulAelement(ulClass = "", collection = "") {
    let ul = document.createElement("ul");
    ul.classList.add(ulClass);
    collection.forEach(function(element, index) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = element["link"];
        a.textContent = element["text"];
        li.append(a);
        ul.append(li);
    });
    return ul;
}
function anyElement(tag, classes = [], content) {
    const node = document.createElement(tag);
    if (classes.length) node.classList.add(...classes);
    if (content) node.textContent = content;
    return node;
}
async function buttonElement(content, classes = [], idElem) {
    const button = document.createElement("button");
    if (classes.length) button.classList.add(...classes);
    if (content) button.textContent = content;
    if (idElem) button.id = idElem;
    return button;
}
async function imgElement(src, alt) {
    const img = document.createElement("img");
    if (src) img.src = src;
    if (alt) img.alt = alt;
    return img;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5XWAP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "heroSection", ()=>heroSection);
function heroSection(main_site) {
    const section = document.createElement("section");
    section.classList.add("hero-section", "set-bg");
    section.setAttribute("data-setbg", "../img/bg.jpg");
    section.setAttribute("style", "background-image: url(../img/bg.jpg);");
    let container = document.createElement("div");
    container.classList.add("container", "hero-text", "text-white");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let link = document.createElement("a");
    let element = main_site["hero"];
    h2.textContent = element["h2"];
    p.textContent = element["p"];
    link.classList.add("site-btn");
    link.href = element["button"]["link"];
    link.textContent = element["button"]["text"];
    container.append(h2, p, link);
    section.append(container);
    return section;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7dTVO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "heroSectionDetail", ()=>heroSectionDetail);
async function heroSectionDetail() {
    const section = document.createElement("section");
    section.classList.add("page-top-section", "set-bg");
    section.setAttribute("data-setbg", "../img/page-top-bg.jpg");
    section.setAttribute("style", "background-image: url(../img/page-top-bg.jpg);");
    let container = document.createElement("div");
    container.classList.add("container", "text-white");
    let h2 = document.createElement("h2");
    h2.textContent = "Detail- ?????";
    container.append(h2);
    section.append(container);
    return section;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cNDET":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getListProperties", ()=>getListProperties);
parcelHelpers.export(exports, "getSidebarProperties", ()=>getSidebarProperties);
parcelHelpers.export(exports, "getOnePropery", ()=>getOnePropery);
parcelHelpers.export(exports, "deleteOnePropery", ()=>deleteOnePropery);
parcelHelpers.export(exports, "onUpload", ()=>onUpload);
async function getListProperties(page = 1, params = {}) {
    let response;
    for(var key in params)if (params[key] == null) params[key] = "";
    if (JSON.stringify(params) === "{}") response = await fetch(`http://127.0.0.1:8000/api/v1/properties/?page=${page}`);
    else response = await fetch(`http://127.0.0.1:8000/api/v1/properties/?page=${page}&city=${params["city"]}&state=${params["state"]}&category=${params["category"]}&status=${params["status"]}&bedrooms=${params["rooms"]}`);
    const propertyData = await response.json();
    return propertyData;
}
async function getSidebarProperties() {
    let response = await fetch(`http://127.0.0.1:8000/api/v1/properties/sidebar`);
    const propertyData = await response.json();
    return propertyData;
}
async function getOnePropery(idNum) {
    let response = await fetch(`http://127.0.0.1:8000/api/v1/properties/${idNum}/`);
    const propertyData = await response.json();
    return propertyData;
}
async function deleteOnePropery(idNum) {
    console.log(idNum, "------");
    await fetch(`http://127.0.0.1:8000/api/v1/properties/${idNum}`, {
        method: "DELETE"
    });
}
async function onUpload(files, blocks) {
    console.log(files);
    const formData = new FormData();
    for(let i = 0; i < files.length; i++){
        formData.append("photos", files[i]);
        const block = blocks[i].querySelector(".preview-info-progress");
        try {
            const block = blocks[i].querySelector(".preview-info-progress");
            let xhr = new XMLHttpRequest();
            xhr.upload.onprogress = function(event) {
                // console.log(`Отправлено ${event.loaded} из ${event.total}`);
                const percentage = (event.loaded / event.total * 100).toFixed() + "%";
                block.textContent = percentage;
                block.style.width = percentage;
            };
            xhr.onloadend = function() {
                if (xhr.status == 200) console.log("\u0423\u0441\u043F\u0435\u0445");
                else console.log("\u041E\u0448\u0438\u0431\u043A\u0430 " + this.status);
            };
            xhr.open("PATCH", "http://127.0.0.1:8000/api/v1/properties/upload/4/");
            xhr.send(formData);
        } catch (error) {
            console.error("\u041E\u0448\u0438\u0431\u043A\u0430:", error);
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ctXjF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slDetailFeatures", ()=>slDetailFeatures);
var _utilsJs = require("../utils.js");
var _sidebarJs = require("../components/sidebar.js");
var _elementsJs = require("../components/elements.js");
var _listPropertiesJs = require("../components/list-properties.js");
var _mainJs = require("../main.js");
// Slider features Detail
function singleList(detailData) {
    // let filter = document.querySelector(".filter-search")
    // console.log(filter)
    // filter.classList.add("filter-search-hide")
    let divSingleList = document.createElement("div");
    divSingleList.classList.add("single-list-content");
    let divRow = document.createElement("div");
    divRow.classList.add("row");
    let divCol8 = document.createElement("div");
    divCol8.classList.add("col-xl-8");
    divCol8.classList.add("sl-title");
    let h2 = document.createElement("h2");
    h2.textContent = detailData.street;
    let p = document.createElement("p");
    let i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add("fa-map-marker");
    p.textContent = `${detailData.city}, ${detailData.state} ${detailData.postal_code}`;
    p.prepend(i);
    divCol8.append(h2, p);
    let divCol4 = document.createElement("div");
    let a = document.createElement("a");
    a.setAttribute("href", "#");
    a.textContent = detailData.price;
    a.classList.add("price-btn");
    divCol4.classList.add("col-xl-4");
    divCol4.append(a);
    divRow.append(divCol8, divCol4);
    divSingleList.append(divRow);
    // Property Details
    let h3 = document.createElement("h3");
    h3.classList.add("sl-sp-title");
    h3.textContent = "Property Details";
    let divRowProperty = document.createElement("div");
    divRowProperty.classList.add("row");
    divRowProperty.classList.add("property-details-list");
    let div461 = document.createElement("div");
    div461.classList.add("col-md-4");
    div461.classList.add("col-sm-6");
    let pLarge = document.createElement("p");
    pLarge.textContent = `${detailData.house_area} Square foot`;
    let iLarge = document.createElement("i");
    iLarge.classList.add("fa");
    iLarge.classList.add("fa-th-large");
    pLarge.prepend(iLarge);
    let pBed = document.createElement("p");
    pBed.textContent = `${detailData.bedrooms} Bedrooms`;
    let iBed = document.createElement("i");
    iBed.classList.add("fa");
    iBed.classList.add("fa-bed");
    pBed.prepend(iBed);
    let pUser = document.createElement("p");
    pUser.textContent = "---";
    // pUser.textContent = `${detailData.users.profile.first_name} Bedrooms`
    let iUser = document.createElement("i");
    iUser.classList.add("fa");
    iUser.classList.add("fa-user");
    pUser.prepend(iUser);
    div461.append(pLarge, pBed, pUser);
    let div462 = document.createElement("div");
    div462.classList.add("col-md-4");
    div462.classList.add("col-sm-6");
    let pCar = document.createElement("p");
    pCar.textContent = `${detailData.garages} Garages`;
    let iCar = document.createElement("i");
    iCar.classList.add("fa");
    iCar.classList.add("fa-car");
    pCar.prepend(iCar);
    let pBuilding = document.createElement("p");
    // pBuilding.textContent = `${detailData.categories.title}`
    pBuilding.textContent = `-re--`;
    let iBuilding = document.createElement("i");
    iBuilding.classList.add("fa");
    iBuilding.classList.add("fa-building-o");
    pBuilding.prepend(iBuilding);
    let pClock = document.createElement("p");
    pClock.textContent = `${detailData.time_published} days ago`;
    let iClock = document.createElement("i");
    iClock.classList.add("fa");
    iClock.classList.add("fa-clock-o");
    pClock.prepend(iClock);
    div462.append(pCar, pBuilding, pClock);
    let div4Bath = document.createElement("div");
    div4Bath.classList.add("col-md-4");
    let pBath = document.createElement("p");
    pBath.textContent = `${detailData.bathrooms} Bathrooms`;
    let iBath = document.createElement("i");
    iBath.classList.add("fa");
    iBath.classList.add("fa-bath");
    pBath.prepend(iBath);
    let pTrophy = document.createElement("p");
    pTrophy.textContent = `${detailData.age} years age`;
    let iTrophy = document.createElement("i");
    iTrophy.classList.add("fa");
    iTrophy.classList.add("fa-trophy");
    pTrophy.prepend(iTrophy);
    div4Bath.append(pBath, pTrophy);
    divRowProperty.append(div461, div462, div4Bath);
    let h3Descr = document.createElement("h3");
    h3Descr.classList.add("sl-sp-title");
    let divDescr = document.createElement("div");
    divDescr.classList.add("description");
    let pDescr = document.createElement("p");
    pDescr.textContent = `${detailData.description}`;
    divDescr.append(pDescr);
    let accordionPlanContent = accordionPlan(detailData);
    divSingleList.append(h3, divRowProperty, h3Descr, divDescr, accordionPlanContent);
    return divSingleList;
}
// Accordion features Detail
function accordionPlan(detailData) {
    // let accordion = document.querySelector("#accordion")
    // let span = accordion.querySelector("#headingOne .panel-link span")
    // span.textContent = `${detailData.house_area} Square foot`
    // console.log(span)
    let h3Title = document.createElement("h3");
    h3Title.classList.add("sl-sp-title");
    h3Title.classList.add("bd-no");
    h3Title.textContent = "Floor plans";
    let divAccordion = document.createElement("div");
    divAccordion.setAttribute("id", "accordion");
    divAccordion.classList.add("plan-accordion");
    let counterFloors = 1;
    if (detailData.first_floor_area > 0) counterFloors++;
    if (detailData.second_floor_area > 0) counterFloors++;
    if (detailData.third_floor_area > 0) counterFloors++;
    // console.log(counterFloors)
    for(let item = 1; item < counterFloors; item++){
        let divPanel = document.createElement("div");
        divPanel.classList.add("panel");
        let divPanelHeader = document.createElement("div");
        divPanelHeader.classList.add("panel-header");
        divPanelHeader.setAttribute("id", "headingOne");
        let button = document.createElement("button");
        button.classList.add("panel-link");
        if (item == 1) button.classList.add("active");
        button.setAttribute("data-toggle", "collapse");
        button.setAttribute("data-target", `#collapse${item}`);
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", `collapse${item}`);
        if (item == 1) button.textContent = "First Floor:";
        if (item == 2) button.textContent = "Second Floor:";
        if (item == 3) button.textContent = "Third Floor:";
        let span = document.createElement("span");
        span.textContent = `${detailData.house_area} Square foot`;
        let i = document.createElement("i");
        i.classList.add("fa");
        i.classList.add("fa-angle-down");
        button.append(span, i);
        divPanelHeader.append(button);
        let divCollapse = document.createElement("div");
        divCollapse.classList.add("collapse");
        if (item == 1) {
            divCollapse.classList.add("show");
            divCollapse.setAttribute("aria-labelledby", "headingOne");
        }
        if (item == 2) divCollapse.setAttribute("aria-labelledby", "headingTwo");
        if (item == 3) divCollapse.setAttribute("aria-labelledby", "headingThree");
        divCollapse.setAttribute("id", `collapse${item}`);
        divCollapse.setAttribute("data-parent", "#accordion");
        let divPanelBody = document.createElement("div");
        divPanelBody.classList.add("panel-body");
        let img = document.createElement("img");
        img.setAttribute("src", "../img/plan-sketch.jpg");
        img.setAttribute("alt", "img");
        divPanelBody.append(img);
        divCollapse.append(divPanelBody);
        divPanel.append(divPanelHeader, divCollapse);
        divAccordion.append(divPanel);
    }
    for (let panel of divAccordion.querySelectorAll(".panel"))panel.children[0].children[0].addEventListener("click", function(e) {
        panel.children[0].children[0].classList.toggle("active");
        panel.children[1].classList.toggle("show");
        e.preventDefault();
    });
    return divAccordion;
}
async function breadcrumb() {
    const divBread = document.createElement("div");
    divBread.classList.add("site-breadcrumb");
    let containerBread = document.createElement("div");
    containerBread.classList.add("container");
    let a = (0, _elementsJs.aIelements)("/", "fa-home", "Home");
    let span = (0, _elementsJs.anyIelements)("span", "fa-angle-right", "Single Listing");
    containerBread.append(a, span);
    divBread.append(containerBread);
    return divBread;
}
async function slDetailFeatures(detailData) {
    const sectionDetail = document.createElement("section");
    let breadcr = await breadcrumb();
    // console.log(breadcr)
    sectionDetail.append(breadcr);
    sectionDetail.classList.add("page-section");
    let spanButtons = document.createElement("span");
    let buttonEdit = await (0, _elementsJs.buttonElement)("\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", [
        "editButton"
    ], "edit");
    let buttonDelete = await (0, _elementsJs.buttonElement)("\u0443\u0434\u0430\u043B\u0438\u0442\u044C", [
        "deleteButton"
    ], "delete");
    let divButton = document.createElement("div");
    divButton.classList.add("detailButtons");
    spanButtons.append(buttonDelete, buttonEdit);
    divButton.append(spanButtons);
    let containerDetail = document.createElement("div");
    containerDetail.classList.add("container");
    containerDetail.append(divButton);
    let rowDetail = document.createElement("div");
    rowDetail.classList.add("row");
    // let currentPage = "currentPage"
    // let detailData;
    // let p_url = location.search.substring(1)
    // if (localStorage[currentPage]) {
    //     let storage = jsonToData(localStorage[currentPage]);
    //     storage.forEach(function(elem, index) {
    //         if (Number(elem.id) == Number(p_url)) {
    //             detailData = elem};
    //     });
    // }
    // else{
    //     // response = await fetch(`http://127.0.0.1:8000/api/v1/properties/${p_url}/`);
    //     response = await fetch(`http://127.0.0.1:8000/api/v1/properties/1/`);
    //     detailData = await response.json();
    //     console.log(detailData)
    // };
    let currentPage = "currentPage";
    // let detailData;
    let response;
    // response = await fetch(`http://127.0.0.1:8000/api/v1/properties/2/`);
    // detailData = await response.json();
    if (detailData) {
        // console.log(detailData)
        let colSlider = document.createElement("div");
        colSlider.classList.add("col-lg-8", "single-list-page");
        let divslider = document.createElement("div");
        divslider.setAttribute("id", "sl-slider");
        // divslider.classList.add("single-list-slider")
        divslider.classList.add("block-slider");
        let divAreaSlider = document.createElement("div");
        divAreaSlider.classList.add("block-area-slider");
        //Arrows
        let divBtns = document.createElement("div");
        divBtns.classList.add("btnsAreaSize");
        let divArrowLeft = document.createElement("div");
        divArrowLeft.classList.add("blockArrow");
        divArrowLeft.setAttribute("id", "left-btn");
        let iArrowLeft = document.createElement("i");
        iArrowLeft.classList.add("fa");
        iArrowLeft.classList.add("fa-angle-left");
        iArrowLeft.setAttribute("aria-hidden", "true");
        divArrowLeft.append(iArrowLeft);
        let divArrowRight = document.createElement("div");
        divArrowRight.classList.add("blockArrow");
        divArrowRight.setAttribute("id", "right-btn");
        let iArrowRight = document.createElement("i");
        iArrowRight.classList.add("fa");
        iArrowRight.classList.add("fa-angle-right");
        iArrowRight.setAttribute("aria-hidden", "true");
        divArrowRight.append(iArrowRight);
        divBtns.append(divArrowLeft, divArrowRight);
        // Points
        let divPoint = document.createElement("div");
        divPoint.classList.add("point-size");
        for(let i = 0; i < 3; i++){
            let spanPoint = document.createElement("span");
            spanPoint.classList.add("point");
            divPoint.append(spanPoint);
        }
        // Images
        let divImgArea = document.createElement("div");
        divImgArea.classList.add("img-area");
        detailData["photo"].forEach(function(elem) {
            let divImg = document.createElement("img");
            divImg.classList.add("img-item");
            divImg.setAttribute("src", `${elem}`);
            // divImg.setAttribute("src", elem)
            divImg.setAttribute("alt", "img");
            divImg.setAttribute("alt", "img");
            divImgArea.append(divImg);
        });
        divAreaSlider.append(divImgArea, divPoint, divBtns);
        divslider.append(divAreaSlider);
        let singleListContent = singleList(detailData);
        let sidebarElement = await (0, _sidebarJs.sidebarAgent)();
        // console.log(colSlider)
        colSlider.prepend(divslider, singleListContent);
        rowDetail.append(colSlider, sidebarElement);
        containerDetail.append(rowDetail);
        sectionDetail.append(containerDetail);
        pointsSlider(divArrowLeft, divArrowRight, divPoint, divImgArea);
    // pointsSlider()
    // let mainBlockSliderRun = document.querySelector("#sl-slider")
    // mainBlockSliderRun.addEventListener("mouseover", ()=>{
    //     clearInterval(timerImg)
    // });
    // mainBlockSliderRun.addEventListener("mouseleave", ()=>{
    //     timerImg = setInterval(() =>slowSlider(), seconds);
    // });
    }
    buttonDelete.addEventListener("click", async function(elem) {
        elem.preventDefault();
        console.log(detailData["id"], "=====");
        await (0, _listPropertiesJs.deleteOnePropery)(detailData["id"]);
        (0, _mainJs.router).navigate("/");
        window.location.reload();
    });
    buttonEdit.addEventListener("click", async function(elem) {
        elem.preventDefault();
        (0, _mainJs.router).navigate("/edit/property/" + `${detailData["id"]}`);
    });
    return sectionDetail;
}
let counterPointsSlow = 0;
let counterSlow = 0;
function slowSlider() {
    let points = document.querySelectorAll(".point");
    let images = document.querySelectorAll(".img-item");
    if (points[0]) {
        points[0].classList.add("active-image");
        images[0].classList.add("active-image");
        for(let i = 0; i < images.length; i++){
            for(let p = 0; p < points.length; p++)points[p].classList.remove("active-image");
            images[i].classList.remove("active-image");
        }
        counterSlow++;
        if (counterSlow >= images.length) counterSlow = 0;
        if (counterPointsSlow > points.length - 1) counterPointsSlow = 0;
        points[counterPointsSlow].classList.add("active-image");
        counterPointsSlow++;
        images[counterSlow].classList.add("active-image");
    }
}
function pointsSlider(leftBtn, rightBtn, pointsRow, imagesRow) {
    let points = pointsRow.children;
    let images = imagesRow.children;
    // export function pointsSlider() {
    //     let leftBtn = document.querySelector("#left-btn")
    //     let rightBtn = document.querySelector("#right-btn")
    //     let points = document.querySelectorAll(".point")
    //     let images = document.querySelectorAll(".img-item")
    points[0].classList.add("point-active");
    images[0].classList.add("active-image");
    let counter = 0;
    for(let i = 0; i < points.length; i++)points[i].addEventListener("click", ()=>{
        console.log("===");
        for(let k = 0; k < images.length; k++){
            for(let p = 0; p < points.length; p++)points[p].classList.remove("point-active");
            images[k].classList.remove("active-image");
        }
        counter = i;
        points[counter].classList.add("point-active");
        images[counter].classList.add("active-image");
    });
    let counterPoints = 0;
    leftBtn.addEventListener("click", ()=>{
        console.log("---");
        for(let i = 0; i < images.length; i++){
            for(let p = 0; p < points.length; p++)points[p].classList.remove("point-active");
            images[i].classList.remove("active-image");
        }
        counter--;
        if (counter < 0) counter = images.length - 1;
        if (counterPoints > points.length - 1) counterPoints = 0;
        // console.log(counterPoints,'==')
        points[counterPoints].classList.add("point-active");
        counterPoints++;
        images[counter].classList.add("active-image");
    });
    rightBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        for(let i = 0; i < images.length; i++){
            for(let p = 0; p < points.length; p++)points[p].classList.remove("point-active");
            images[i].classList.remove("active-image");
        }
        counter++;
        if (counter >= images.length) counter = 0;
        if (counterPoints > points.length - 1) counterPoints = 0;
        // console.log(counterPoints,'==')
        points[counterPoints].classList.add("point-active");
        counterPoints++;
        images[counter].classList.add("active-image");
    });
}
 // function getIdFeature(itemRow) {
 //     let rowFeature = itemRow.querySelectorAll(".col-lg-4 a")
 //     for (let i = 0; i < rowFeature.length; i++) {
 //         rowFeature[i].addEventListener("click", async function (elem) {
 //             location.href = "index.html"
 //             // location.href = `${rowFeature[i].href}?` + rowFeature[i].id
 //         });
 //     };
 // };

},{"../utils.js":"72Dku","../components/sidebar.js":"eeKUW","../components/elements.js":"rwZfZ","../components/list-properties.js":"cNDET","../main.js":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72Dku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "jsonToData", ()=>jsonToData);
parcelHelpers.export(exports, "setStorageData", ()=>setStorageData);
parcelHelpers.export(exports, "deleteStorageData", ()=>deleteStorageData);
function jsonToData(data) {
    return JSON.parse(data);
}
function setStorageData(listName, data) {
    return localStorage.setItem(listName, JSON.stringify(data));
}
function deleteStorageData(dataId, key) {
    let storage = jsonToData(localStorage[key]);
    storage.forEach(function(elem, index) {
        if (elem.id == dataId) storage.splice(index, 1);
    });
    setStorageData(key, storage);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeKUW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sidebarAgent", ()=>sidebarAgent);
parcelHelpers.export(exports, "authorCard", ()=>authorCard);
parcelHelpers.export(exports, "contactFormCard", ()=>contactFormCard);
parcelHelpers.export(exports, "relatedProperties", ()=>relatedProperties);
var _elementsJs = require("./elements.js");
var _formJs = require("./form.js");
var _listPropertiesJs = require("./list-properties.js");
async function sidebarAgent() {
    const divSidebar = document.createElement("div");
    divSidebar.classList.add("col-lg-4");
    divSidebar.classList.add("col-md-7");
    divSidebar.classList.add("sidebar");
    let authorCardElem = await authorCard();
    let contactFormCardElem = await contactFormCard();
    let relatedPropertiesElem = await relatedProperties();
    divSidebar.append(authorCardElem, contactFormCardElem, relatedPropertiesElem);
    return divSidebar;
}
async function authorCard() {
    let divAuthor = document.createElement("div");
    divAuthor.classList.add("author-card");
    let divAuthorImg = document.createElement("div");
    divAuthorImg.classList.add("author-img");
    divAuthorImg.classList.add("set-bg");
    divAuthorImg.setAttribute("data-setbg", "../img/author.jpg");
    divAuthorImg.setAttribute("style", `background-image: url(../img/author.jpg);`);
    let divAuthorInfo = document.createElement("div");
    divAuthorInfo.classList.add("author-info");
    let divAuthorH5 = document.createElement("h5");
    divAuthorH5.textContent = "Gina Wesley";
    let divAuthorP = document.createElement("p");
    divAuthorP.textContent = "Real Estate Agent";
    divAuthorInfo.append(divAuthorH5, divAuthorP);
    let divAuthorContact = document.createElement("div");
    divAuthorContact.classList.add("author-contact");
    let pPhone = (0, _elementsJs.pIelements)("fa-phone", "(567) 666 121 2233");
    let pEnvelope = (0, _elementsJs.pIelements)("fa-envelope", "ginawesley26@gmail.com");
    divAuthorContact.append(pPhone, pEnvelope);
    divAuthor.append(divAuthorImg, divAuthorInfo, divAuthorContact);
    return divAuthor;
}
async function contactFormCard() {
    let divContact = document.createElement("div");
    divContact.classList.add("contact-form-card");
    let divH5 = document.createElement("h5");
    divH5.textContent = "Do you have any question?";
    let formElem = document.createElement("form");
    let formInputName = (0, _formJs.formInputElement)("your-name", "", "text", "your-name", "Your name");
    let formInputEmail = (0, _formJs.formInputElement)("your-email", "", "text", "your-email", "Your email");
    let sendButton = document.createElement("button");
    sendButton.textContent = "SEND";
    let textArea = document.createElement("textarea");
    textArea.setAttribute("placeholder", "Your question");
    textArea.classList.add("input-form");
    textArea.style.minWidth = "270px";
    formInputName.style.minWidth = "270px";
    formInputName.style.padding = "0";
    formInputEmail.style.minWidth = "270px";
    formInputEmail.style.padding = "0";
    formInputName.querySelector("label").remove();
    formInputEmail.querySelector("label").remove();
    let block = document.createElement("div");
    block.classList.add("input-form-sidebar");
    block.style.minWidth = "270px";
    block.style.padding = "0";
    block.append(formInputName, formInputEmail, textArea, sendButton);
    formElem.append(block);
    divContact.append(divH5, formElem);
    return divContact;
}
async function relatedProperties() {
    let divProperties = document.createElement("div");
    divProperties.classList.add("related-properties");
    let propertyData = await (0, _listPropertiesJs.getSidebarProperties)();
    let divH2 = document.createElement("h2");
    divH2.textContent = "Related Property";
    divProperties.append(divH2);
    // console.log(propertyData)
    propertyData.forEach(function(element) {
        // for(let i=0; i < 4; i++){
        let divItem = document.createElement("div");
        divItem.classList.add("rp-item");
        let divPic = document.createElement("div");
        divPic.classList.add("rp-pic");
        divPic.classList.add("set-bg");
        divPic.setAttribute("data-setbg", `${element["photo"][0]}`);
        divPic.setAttribute("style", `background-image: url(${element["photo"][0]});`);
        let divSale = document.createElement("div");
        if (element["status"] == "sale") {
            divSale.classList.add("sale-notic");
            divSale.textContent = "FOR SALE";
        }
        if (element["status"] == "rent") {
            divSale.classList.add("rent-notic");
            divSale.textContent = "FOR RENT";
        }
        divPic.append(divSale);
        let divInfo = document.createElement("div");
        divInfo.classList.add("rp-info");
        let infoH5 = document.createElement("h5");
        infoH5.textContent = element["street"];
        let address = ` ${element["city"]}, ${element["state"]} ${element["postal_code"]}`;
        let pAdr = (0, _elementsJs.pIelements)("fa-map-marker", address);
        divInfo.append(infoH5, pAdr);
        let btn = (0, _elementsJs.aElements)(element["id"], "rp-price", element["price"]);
        divItem.append(divPic, divInfo, btn);
        divProperties.append(divItem);
    // };
    });
    return divProperties;
}

},{"./elements.js":"rwZfZ","./form.js":"88Tkc","./list-properties.js":"cNDET","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"88Tkc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formInputElement", ()=>formInputElement);
parcelHelpers.export(exports, "formElement", ()=>formElement);
parcelHelpers.export(exports, "textareaElement", ()=>textareaElement);
function formInputElement(idElement = "", labelText = "", typeInput = "", typeName = "", placeholderTitle = "") {
    let divInput = document.createElement("div");
    divInput.classList.add("input-form");
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", idElement);
    labelElement.textContent = labelText;
    let inputElement = document.createElement("input");
    inputElement.setAttribute("id", idElement);
    inputElement.setAttribute("type", typeInput);
    inputElement.setAttribute("name", typeName);
    inputElement.setAttribute("autocomplete", "off");
    inputElement.setAttribute("placeholder", placeholderTitle);
    divInput.append(labelElement, inputElement);
    return divInput;
}
function formElement(buttonElement) {
    const form = document.createElement("form");
    form.setAttribute("action", "");
    let divInput = document.createElement("div");
    divInput.classList.add("input-form");
    divInput.append(buttonElement);
    form.append(divInput);
    return form;
}
function textareaElement(idElement, labelText, typeName, placeholderTitle) {
    let divTextarea = document.createElement("div");
    divTextarea.classList.add("textarea-form");
    divTextarea.classList.add("input-form");
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", idElement);
    labelElement.textContent = labelText;
    let textareaElement = document.createElement("textarea");
    textareaElement.setAttribute("id", idElement);
    textareaElement.setAttribute("name", typeName);
    textareaElement.setAttribute("autocomplete", "off");
    textareaElement.setAttribute("placeholder", placeholderTitle);
    divTextarea.append(labelElement, textareaElement);
    return divTextarea;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4begh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Slider features Detail
parcelHelpers.export(exports, "detailNew", ()=>detailNew);
parcelHelpers.export(exports, "slDetailFeatures", ()=>slDetailFeatures);
var _utilsJs = require("../utils.js");
var _formJs = require("../components/form.js");
var _elementsJs = require("../components/elements.js");
var _uploadJs = require("../components/upload.js");
async function detailNew(detailData) {
    // let filter = document.querySelector(".filter-search")
    // console.log(filter)
    // filter.classList.add("filter-search-hide")
    let containerForm = document.createElement("div");
    containerForm.classList.add("container");
    let divSingleList = document.createElement("div");
    divSingleList.classList.add("single-list-content");
    let divRow = document.createElement("div");
    divRow.classList.add("row");
    divRow.classList.add("edit-contaner");
    let buttonSave = await (0, _elementsJs.buttonElement)("\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", [
        "saveButton"
    ], "save");
    const formElem = (0, _formJs.formElement)(buttonSave);
    formElem.classList.add("form-edit");
    formElem.classList.add("col-lg-8");
    formElem.classList.add("single-list-page");
    let uploadElem = await (0, _uploadJs.upload)([
        "input-form"
    ], [
        "uploadBtn"
    ], {
        accept: [
            ".png",
            ".jpg",
            ".jpeg",
            ".gif"
        ]
    });
    // console.log(uploadElem)
    let listContent = [
        {
            "\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435": detailData.description,
            "id": "description"
        },
        {
            "\u0443\u043B\u0438\u0446\u0430": detailData.street,
            "id": "srteet"
        },
        {
            "\u0433\u043E\u0440\u043E\u0434": detailData.city,
            "id": "city"
        },
        {
            "\u043E\u0431\u043B\u0430\u0441\u0442\u044C": detailData.state,
            "id": "state"
        },
        {
            "\u0438\u043D\u0434\u0435\u043A\u0441": detailData.postal_code,
            "id": "postal_code"
        },
        {
            "\u0446\u0435\u043D\u0430": detailData.price,
            "id": "price"
        },
        {
            "\u043F\u043B\u043E\u0449\u0430\u0434\u044C": detailData.house_area,
            "id": "house_area"
        },
        {
            "\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043C\u043D\u0430\u0442": detailData.bedrooms,
            "id": "bedrooms"
        },
        {
            "\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0433\u0430\u0440\u0430\u0436\u0435\u0439": detailData.garages,
            "id": "garages"
        },
        {
            "\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F": detailData.category_id,
            "id": "title"
        },
        {
            "\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0430\u043D\u043D\u044B\u0445 \u043A\u043E\u043C\u043D\u0430\u0442": detailData.bathrooms,
            "id": "bathrooms"
        },
        {
            "\u0432\u043E\u0437\u0440\u0430\u0441\u0442": detailData.age,
            "id": "age"
        }
    ];
    listContent.forEach(function(item) {
        let idElement = Object.values(item)[1];
        let labelText = Object.keys(item)[0];
        let typeName = Object.values(item)[1];
        let placeholderTitle = Object.keys(item)[0];
        let inputElem;
        let typeInput;
        if ([
            "postal_code",
            "price",
            "house_area",
            "bedrooms",
            "garages",
            "bathrooms",
            "age"
        ].includes(Object.values(item)[1])) typeInput = "number";
        else typeInput = "text";
        inputElem = (0, _formJs.formInputElement)(idElement, labelText, typeInput, typeName, placeholderTitle);
        if (Object.values(item)[1] == "description") inputElem = (0, _formJs.textareaElement)(idElement, labelText, typeName, placeholderTitle);
        formElem.prepend(inputElem);
    });
    formElem.prepend(uploadElem);
    divRow.append(formElem);
    // let divCol8 = document.createElement("div")
    // divCol8.classList.add("col-xl-8")
    // divCol8.classList.add("sl-title")
    // let h2 = document.createElement("h2")
    // h2.textContent = detailData.street
    // let p = document.createElement("p")
    // let i = document.createElement("i")
    // i.classList.add("fa")
    // i.classList.add("fa-map-marker")
    // p.textContent = `${detailData.city}, ${detailData.state} ${detailData.postal_code}`
    // p.prepend(i)
    // divCol8.append(h2, p)
    // let divCol4 = document.createElement("div")
    // let a = document.createElement("a")
    // a.setAttribute("href", "#")
    // a.textContent = detailData.price
    // a.classList.add("price-btn")
    // divCol4.classList.add("col-xl-4")
    // divCol4.append(a)
    // divRow.append(divCol8, divCol4)
    containerForm.append(divRow);
    divSingleList.append(containerForm);
    // Property Details
    // let h3 = document.createElement("h3")
    // h3.classList.add("sl-sp-title")
    // h3.textContent = "Property Details"
    // let divRowProperty = document.createElement("div")
    // divRowProperty.classList.add("row")
    // divRowProperty.classList.add("property-details-list")
    // let div461 = document.createElement("div")
    // div461.classList.add("col-md-4")
    // div461.classList.add("col-sm-6")
    // let pLarge = document.createElement("p")
    // pLarge.textContent = `${detailData.house_area} Square foot`
    // let iLarge = document.createElement("i")
    // iLarge.classList.add("fa")
    // iLarge.classList.add("fa-th-large")
    // pLarge.prepend(iLarge)
    // let pBed = document.createElement("p")
    // pBed.textContent = `${detailData.bedrooms} Bedrooms`
    // let iBed = document.createElement("i")
    // iBed.classList.add("fa")
    // iBed.classList.add("fa-bed")
    // pBed.prepend(iBed)
    // let pUser = document.createElement("p")
    // pUser.textContent = "---"
    // // pUser.textContent = `${detailData.users.profile.first_name} Bedrooms`
    // let iUser = document.createElement("i")
    // iUser.classList.add("fa")
    // iUser.classList.add("fa-user")
    // pUser.prepend(iUser)
    // div461.append(pLarge, pBed, pUser)
    // let div462 = document.createElement("div")
    // div462.classList.add("col-md-4")
    // div462.classList.add("col-sm-6")
    // let pCar = document.createElement("p")
    // pCar.textContent = `${detailData.garages} Garages`
    // let iCar = document.createElement("i")
    // iCar.classList.add("fa")
    // iCar.classList.add("fa-car")
    // pCar.prepend(iCar)
    // let pBuilding = document.createElement("p")
    // // pBuilding.textContent = `${detailData.categories.title}`
    // pBuilding.textContent = `-re--`
    // let iBuilding = document.createElement("i")
    // iBuilding.classList.add("fa")
    // iBuilding.classList.add("fa-building-o")
    // pBuilding.prepend(iBuilding)
    // let pClock = document.createElement("p")
    // pClock.textContent = `${detailData.time_published} days ago`
    // let iClock = document.createElement("i")
    // iClock.classList.add("fa")
    // iClock.classList.add("fa-clock-o")
    // pClock.prepend(iClock)
    // div462.append(pCar, pBuilding, pClock)
    // let div4Bath = document.createElement("div")
    // div4Bath.classList.add("col-md-4")
    // let pBath = document.createElement("p")
    // pBath.textContent = `${detailData.bathrooms} Bathrooms`
    // let iBath = document.createElement("i")
    // iBath.classList.add("fa")
    // iBath.classList.add("fa-bath")
    // pBath.prepend(iBath)
    // let pTrophy = document.createElement("p")
    // pTrophy.textContent = `${detailData.age} years age`
    // let iTrophy = document.createElement("i")
    // iTrophy.classList.add("fa")
    // iTrophy.classList.add("fa-trophy")
    // pTrophy.prepend(iTrophy)
    // div4Bath.append(pBath, pTrophy)
    // divRowProperty.append(div461, div462, div4Bath)
    // let h3Descr = document.createElement("h3")
    // h3Descr.classList.add("sl-sp-title")
    // let divDescr = document.createElement("div")
    // divDescr.classList.add("description")
    // let pDescr = document.createElement("p")
    // pDescr.textContent = `${detailData.description}`
    // divDescr.append(pDescr)
    let accordionPlanContent = accordionPlan(detailData);
    divSingleList.append(accordionPlanContent);
    return divSingleList;
}
// Accordion features Detail
function accordionPlan(detailData) {
    // let accordion = document.querySelector("#accordion")
    // let span = accordion.querySelector("#headingOne .panel-link span")
    // span.textContent = `${detailData.house_area} Square foot`
    // console.log(span)
    let h3Title = document.createElement("h3");
    h3Title.classList.add("sl-sp-title");
    h3Title.classList.add("bd-no");
    h3Title.textContent = "Floor plans";
    let divAccordion = document.createElement("div");
    divAccordion.setAttribute("id", "accordion");
    divAccordion.classList.add("plan-accordion");
    let counterFloors = 1;
    if (detailData.first_floor_area > 0) counterFloors++;
    if (detailData.second_floor_area > 0) counterFloors++;
    if (detailData.third_floor_area > 0) counterFloors++;
    // console.log(counterFloors)
    for(let item = 1; item < counterFloors; item++){
        let divPanel = document.createElement("div");
        divPanel.classList.add("panel");
        let divPanelHeader = document.createElement("div");
        divPanelHeader.classList.add("panel-header");
        divPanelHeader.setAttribute("id", "headingOne");
        let button = document.createElement("button");
        button.classList.add("panel-link");
        if (item == 1) button.classList.add("active");
        button.setAttribute("data-toggle", "collapse");
        button.setAttribute("data-target", `#collapse${item}`);
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", `collapse${item}`);
        if (item == 1) button.textContent = "First Floor:";
        if (item == 2) button.textContent = "Second Floor:";
        if (item == 3) button.textContent = "Third Floor:";
        let span = document.createElement("span");
        span.textContent = `${detailData.house_area} Square foot`;
        let i = document.createElement("i");
        i.classList.add("fa");
        i.classList.add("fa-angle-down");
        button.append(span, i);
        divPanelHeader.append(button);
        let divCollapse = document.createElement("div");
        divCollapse.classList.add("collapse");
        if (item == 1) {
            divCollapse.classList.add("show");
            divCollapse.setAttribute("aria-labelledby", "headingOne");
        }
        if (item == 2) divCollapse.setAttribute("aria-labelledby", "headingTwo");
        if (item == 3) divCollapse.setAttribute("aria-labelledby", "headingThree");
        divCollapse.setAttribute("id", `collapse${item}`);
        divCollapse.setAttribute("data-parent", "#accordion");
        let divPanelBody = document.createElement("div");
        divPanelBody.classList.add("panel-body");
        let img = document.createElement("img");
        img.setAttribute("src", "../img/plan-sketch.jpg");
        img.setAttribute("alt", "img");
        divPanelBody.append(img);
        divCollapse.append(divPanelBody);
        divPanel.append(divPanelHeader, divCollapse);
        divAccordion.append(divPanel);
    }
    for (let panel of divAccordion.querySelectorAll(".panel"))panel.children[0].children[0].addEventListener("click", function(e) {
        panel.children[0].children[0].classList.toggle("active");
        panel.children[1].classList.toggle("show");
        e.preventDefault();
    });
    return divAccordion;
}
async function breadcrumb() {
    const divBread = document.createElement("div");
    divBread.classList.add("site-breadcrumb");
    let containerBread = document.createElement("div");
    containerBread.classList.add("container");
    let a = (0, _elementsJs.aIelements)("/", "fa-home", "Home");
    let span = (0, _elementsJs.anyIelements)("span", "fa-angle-right", "Single Listing");
    containerBread.append(a, span);
    divBread.append(containerBread);
    return divBread;
}
async function slDetailFeatures() {
    const sectionDetail = document.createElement("section");
    let breadcr = await breadcrumb();
    console.log(breadcr);
    sectionDetail.append(breadcr);
    sectionDetail.classList.add("page-section");
    let containerDetail = document.createElement("div");
    containerDetail.classList.add("container");
    let rowDetail = document.createElement("div");
    rowDetail.classList.add("row");
    // let currentPage = "currentPage"
    // let detailData;
    // let p_url = location.search.substring(1)
    // if (localStorage[currentPage]) {
    //     let storage = jsonToData(localStorage[currentPage]);
    //     storage.forEach(function(elem, index) {
    //         if (Number(elem.id) == Number(p_url)) {
    //             detailData = elem};
    //     });
    // }
    // else{
    //     // response = await fetch(`http://127.0.0.1:8000/api/v1/properties/${p_url}/`);
    //     response = await fetch(`http://127.0.0.1:8000/api/v1/properties/1/`);
    //     detailData = await response.json();
    //     console.log(detailData)
    // };
    let currentPage = "currentPage";
    let detailData;
    let response;
    response = await fetch(`http://127.0.0.1:8000/api/v1/properties/2/`);
    detailData = await response.json();
    if (detailData) {
        // console.log(detailData)
        let colSlider = document.createElement("div");
        colSlider.classList.add("col-lg-8", "single-list-page");
        let divslider = document.createElement("div");
        divslider.setAttribute("id", "sl-slider");
        // divslider.classList.add("single-list-slider")
        divslider.classList.add("block-slider");
        let divAreaSlider = document.createElement("div");
        divAreaSlider.classList.add("block-area-slider");
        //Arrows
        let divBtns = document.createElement("div");
        divBtns.classList.add("btnsAreaSize");
        let divArrowLeft = document.createElement("div");
        divArrowLeft.classList.add("blockArrow");
        divArrowLeft.setAttribute("id", "left-btn");
        let iArrowLeft = document.createElement("i");
        iArrowLeft.classList.add("fa");
        iArrowLeft.classList.add("fa-angle-left");
        iArrowLeft.setAttribute("aria-hidden", "true");
        divArrowLeft.append(iArrowLeft);
        let divArrowRight = document.createElement("div");
        divArrowRight.classList.add("blockArrow");
        divArrowRight.setAttribute("id", "right-btn");
        let iArrowRight = document.createElement("i");
        iArrowRight.classList.add("fa");
        iArrowRight.classList.add("fa-angle-right");
        iArrowRight.setAttribute("aria-hidden", "true");
        divArrowRight.append(iArrowRight);
        divBtns.append(divArrowLeft, divArrowRight);
        // Points
        let divPoint = document.createElement("div");
        divPoint.classList.add("point-size");
        for(let i = 0; i < 3; i++){
            let spanPoint = document.createElement("span");
            spanPoint.classList.add("point");
            divPoint.append(spanPoint);
        }
        // Images
        let divImgArea = document.createElement("div");
        divImgArea.classList.add("img-area");
        detailData["photo"].forEach(function(elem) {
            let divImg = document.createElement("img");
            divImg.classList.add("img-item");
            divImg.setAttribute("src", `${elem}`);
            // divImg.setAttribute("src", elem)
            divImg.setAttribute("alt", "img");
            divImg.setAttribute("alt", "img");
            divImgArea.append(divImg);
        });
        divAreaSlider.append(divImgArea, divPoint, divBtns);
        divslider.append(divAreaSlider);
        let singleListContent = singleList(detailData);
        // console.log(colSlider)
        colSlider.prepend(divslider, singleListContent);
        rowDetail.append(colSlider);
        containerDetail.append(rowDetail);
        sectionDetail.append(containerDetail);
        pointsSlider(divArrowLeft, divArrowRight, divPoint, divImgArea);
    // pointsSlider()
    // let mainBlockSliderRun = document.querySelector("#sl-slider")
    // mainBlockSliderRun.addEventListener("mouseover", ()=>{
    //     clearInterval(timerImg)
    // });
    // mainBlockSliderRun.addEventListener("mouseleave", ()=>{
    //     timerImg = setInterval(() =>slowSlider(), seconds);
    // });
    }
    return sectionDetail;
}
let counterPointsSlow = 0;
let counterSlow = 0;
function slowSlider() {
    let points = document.querySelectorAll(".point");
    let images = document.querySelectorAll(".img-item");
    if (points[0]) {
        points[0].classList.add("active-image");
        images[0].classList.add("active-image");
        for(let i = 0; i < images.length; i++){
            for(let p = 0; p < points.length; p++)points[p].classList.remove("active-image");
            images[i].classList.remove("active-image");
        }
        counterSlow++;
        if (counterSlow >= images.length) counterSlow = 0;
        if (counterPointsSlow > points.length - 1) counterPointsSlow = 0;
        points[counterPointsSlow].classList.add("active-image");
        counterPointsSlow++;
        images[counterSlow].classList.add("active-image");
    }
}
function pointsSlider(leftBtn, rightBtn, pointsRow, imagesRow) {
    let points = pointsRow.children;
    let images = imagesRow.children;
    // export function pointsSlider() {
    //     let leftBtn = document.querySelector("#left-btn")
    //     let rightBtn = document.querySelector("#right-btn")
    //     let points = document.querySelectorAll(".point")
    //     let images = document.querySelectorAll(".img-item")
    points[0].classList.add("point-active");
    images[0].classList.add("active-image");
    let counter = 0;
    for(let i = 0; i < points.length; i++)points[i].addEventListener("click", ()=>{
        console.log("===");
        for(let k = 0; k < images.length; k++){
            for(let p = 0; p < points.length; p++)points[p].classList.remove("point-active");
            images[k].classList.remove("active-image");
        }
        counter = i;
        points[counter].classList.add("point-active");
        images[counter].classList.add("active-image");
    });
    let counterPoints = 0;
    leftBtn.addEventListener("click", ()=>{
        console.log("---");
        for(let i = 0; i < images.length; i++){
            for(let p = 0; p < points.length; p++)points[p].classList.remove("point-active");
            images[i].classList.remove("active-image");
        }
        counter--;
        if (counter < 0) counter = images.length - 1;
        if (counterPoints > points.length - 1) counterPoints = 0;
        // console.log(counterPoints,'==')
        points[counterPoints].classList.add("point-active");
        counterPoints++;
        images[counter].classList.add("active-image");
    });
    rightBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        for(let i = 0; i < images.length; i++){
            for(let p = 0; p < points.length; p++)points[p].classList.remove("point-active");
            images[i].classList.remove("active-image");
        }
        counter++;
        if (counter >= images.length) counter = 0;
        if (counterPoints > points.length - 1) counterPoints = 0;
        // console.log(counterPoints,'==')
        points[counterPoints].classList.add("point-active");
        counterPoints++;
        images[counter].classList.add("active-image");
    });
}
 // function getIdFeature(itemRow) {
 //     let rowFeature = itemRow.querySelectorAll(".col-lg-4 a")
 //     for (let i = 0; i < rowFeature.length; i++) {
 //         rowFeature[i].addEventListener("click", async function (elem) {
 //             location.href = "index.html"
 //             // location.href = `${rowFeature[i].href}?` + rowFeature[i].id
 //         });
 //     };
 // };

},{"../utils.js":"72Dku","../components/form.js":"88Tkc","../components/elements.js":"rwZfZ","../components/upload.js":"03L6e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03L6e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// function noop() {}
parcelHelpers.export(exports, "upload", ()=>upload);
var _elementsJs = require("./elements.js");
var _listPropertiesJs = require("./list-properties.js");
function formatBytes(bytes) {
    if (!+bytes) return "0 Bytes";
    const k = 1024;
    const sizes = [
        "Bytes",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed())} ${sizes[i]}`;
}
async function upload(classesDiv = [], classesBtn = [], options = {}) {
    let classDiv;
    let classBtn;
    let files = [];
    // const onUpload = options.onUpload ?? noop
    const preview = await (0, _elementsJs.anyElement)("div", [
        "preview"
    ]);
    if (classesDiv) classDiv = classesDiv;
    if (classesBtn) classBtn = classesBtn;
    const open = await (0, _elementsJs.buttonElement)("\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C", classBtn);
    const upload = await (0, _elementsJs.buttonElement)("\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C", [
        classBtn,
        "primary"
    ]);
    upload.style.display = "none";
    const divBlock = await (0, _elementsJs.anyElement)("div", classDiv);
    const input = await (0, _elementsJs.anyElement)("input");
    input.type = "file";
    input.id = "file";
    input.multiple = true;
    if (options.accept && Array.isArray(options.accept)) input.accept = options.accept.join(",");
    open.addEventListener("click", function(event) {
        event.preventDefault();
        input.click();
    });
    input.addEventListener("change", function(event) {
        if (!event.target.files.length) return;
        files = Array.from(event.target.files);
        preview.innerHTML = "";
        upload.style.display = "inline";
        files.forEach((file)=>{
            if (!file.type.match("image")) return;
            const reader = new FileReader();
            reader.onload = async (ev)=>{
                // console.log(ev)
                let src = ev.target.result;
                const previewImg = await (0, _elementsJs.anyElement)("div", [
                    "preview-image"
                ]);
                let previewRemove = await (0, _elementsJs.anyElement)("div", [
                    "preview-remove"
                ]);
                previewRemove.setAttribute("data-name", file.name);
                previewRemove.innerHTML = "&times;";
                let previewInfo = await (0, _elementsJs.anyElement)("div", [
                    "preview-info"
                ]);
                let previewSpanName = await (0, _elementsJs.anyElement)("span", [], file.name);
                let previewSpanSize = await (0, _elementsJs.anyElement)("span", [], formatBytes(file.size));
                previewInfo.append(previewSpanName, previewSpanSize);
                const img = await (0, _elementsJs.imgElement)(src, file.name);
                previewImg.append(img, previewRemove, previewInfo);
                preview.append(previewImg);
            };
            // const block = preview.querySelector(`[data-name="${name}"]`).closest(".preview-image")
            // console.log(preview.dataset.name)
            reader.readAsDataURL(file);
        });
    });
    preview.addEventListener("click", function(event) {
        if (!event.target.dataset.name) return;
        const { name } = event.target.dataset;
        files = files.filter((file)=>file.name !== name);
        if (!files.length) upload.style.display = "none";
        const block = preview.querySelector(`[data-name="${name}"]`).closest(".preview-image");
        block.classList.add("removing");
        setTimeout(()=>block.remove(), 300);
    });
    upload.addEventListener("click", function(event) {
        if (!event.target.dataset.name) return;
        const { name } = event.target.dataset;
        files = files.filter((file)=>file.name !== name);
        const block = preview.querySelector(`[data-name="${name}"]`).closest(".preview-image");
        block.classList.add("removing");
        setTimeout(()=>block.remove(), 300);
    });
    const clearPreview = (el)=>{
        el.style.bottom = "0";
        el.innerHTML = '<div class="preview-info-progress"></div>';
    };
    upload.addEventListener("click", async function(event) {
        event.preventDefault();
        Array.from(preview.querySelectorAll(".preview-remove")).forEach((e)=>e.remove());
        let previewInfo = preview.querySelectorAll(".preview-info");
        Array.from(previewInfo).forEach(clearPreview);
        await (0, _listPropertiesJs.onUpload)(files, previewInfo);
    });
    divBlock.append(input, open, upload, preview);
    return divBlock;
}

},{"./elements.js":"rwZfZ","./list-properties.js":"cNDET","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8PfDb":[function(require,module,exports) {
//  import { getHeader } from "./components/header.js"
//  import { heroSection } from "./components/hero.js"
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//  import { footerSection } from "./components/footer-section.js"
//  import { footerSection } from "./components/footer-section.js"
// var window_w = $(window).innerWidth();
// $(window).on('load', function () {
// 	/*------------------
// 		Preloder
// 	--------------------*/
// 	$(".loader").fadeOut();
// 	$("#preloder").delay(400).fadeOut("slow");
// });
/*------------------
             DOM
         --------------------*/ //  const app = document.querySelector("#app")
// export async function pageMainContainer() {
//     const page = document.createElement("container")
//     page.classList.add("container")
//     return page
// }
// export let mainPage = await pageMainContainer()
// let parameters = {
//     "feturesBlock": null,
//     "heroSection": null,
//     "filterForm": null,
//     "filterForm": null,
// }
parcelHelpers.export(exports, "mainContainer", ()=>mainContainer);
var _filterFormJs = require("../components/filter-form.js");
var _galleryJs = require("../components/gallery.js");
var _feturesSectionJs = require("../components/fetures-section.js");
var _reviewSliderJs = require("../components/review-slider.js");
var _servicesJs = require("../components/services.js");
//  import { heroSection } from "../components/hero.js"
var _mainJs = require("../main.js");
async function mainContainer(feturesBloc, cityName = "") {
    const mainPage = document.createElement("container");
    mainPage.classList.add("container");
    mainPage.innerHTML = "";
    // export const mainPage = pageContainer()
    const mainSite = await (0, _mainJs.mainSiteData)();
    // Header section 
    //  const headerSection = getHeader(main_site)
    // Hero section 
    // const heroBlock = await heroSection(mainSite)
    // Filter form section
    const filterForm = await (0, _filterFormJs.filterFormSection)(cityName);
    // Gallery section
    const galleryBlock = await (0, _galleryJs.gallerySection)();
    // Feature section
    // let feturesBloc;
    let feturesBlock;
    if (feturesBloc === undefined) {
        feturesBlock = await (0, _feturesSectionJs.feturesSection)();
        const galleryBlock = await (0, _galleryJs.gallerySection)();
    } else {
        // let cityName = await gallerySection()
        let cityElem = filterForm.querySelector("#inCity");
        cityElem.value = cityName;
        feturesBlock = feturesBloc;
        galleryBlock.setAttribute("style", "display: none");
    }
    // // Review section
    const reviewBlock = await (0, _reviewSliderJs.reviewSection)();
    // Services section
    const servicesBlock = await (0, _servicesJs.servicesSection)(mainSite);
    // Clients section
    // const clientsBlock = await clientsSection(main_site)
    // Footer section
    //  const footerBlock = await footerSection(main_site)
    mainPage.innerHTML = "";
    mainPage.append(// heroBlock,
    filterForm, galleryBlock, feturesBlock, reviewBlock, servicesBlock);
    return mainPage;
}
// let seconds = 1000 * 30
// let timerImg = setInterval(() =>slowSlider(), seconds);
// let counterPointsSlow = 0;
let counterSlow = 0;
function slowSlider() {
    // let points = document.querySelectorAll(".point")
    let images = document.querySelectorAll(".review-item");
    // if(points[0]) {
    // points[0].classList.add("active-image")
    images[0].classList.add("active-image");
    for(let i = 0; i < images.length; i++)// for(let p = 0; p < points.length; p++) {
    // 	points[p].classList.remove("active-image")
    // };
    images[i].classList.remove("active-image");
    counterSlow++;
    if (counterSlow >= images.length) counterSlow = 0;
    // if (counterPointsSlow > points.length-1) {
    // 	counterPointsSlow = 0
    // }
    // points[counterPointsSlow].classList.add("active-image")
    // counterPointsSlow++
    images[counterSlow].classList.add("active-image");
// };
}
// let seconds = 1000 * 3
// let timerImg = setInterval(() =>slowSliderclients(), seconds);
let counterSlowclients = 0;
function slowSliderclients() {
    // let points = document.querySelectorAll(".point")
    let images = document.querySelectorAll(".clients-slider");
    // let images = document.querySelectorAll(".clients-item")
    // if(points[0]) {
    // points[0].classList.add("active-image")
    images[0].classList.add("active-clients");
    // console.log(images)
    for(let i = 0; i < images.length; i++)// for(let p = 0; p < points.length; p++) {
    // 	points[p].classList.remove("active-image")
    // };
    images[i].classList.remove("active-clients");
    counterSlowclients++;
    if (counterSlowclients >= images.length) counterSlowclients = 0;
    // if (counterPointsSlow > points.length-1) {
    // 	counterPointsSlow = 0
    // }
    // points[counterPointsSlow].classList.add("active-image")
    // counterPointsSlow++
    images[counterSlowclients].classList.add("active-clients");
// };
}
 // slowSliderclients()
 //  slowSlider()
 // let divPagina = document.querySelector(".site-pagination")
 // if (divPagina) {
 // 	let pages = divPagina.childNodes[0].children
 // 	for (let link of pages){
 // 		link.addEventListener('click', async function (e) {
 // 			e.preventDefault();
 // 			let page = link.childNodes[0].textContent
 // 			window.scrollTo({ top: 1900, behavior: 'smooth' })
 // 			// console.log(page, '+----')
 // 			const feturesBloc = await feturesSection(page = +page)
 // 			console.log(feturesBloc, '----------------')
 // 			app.innerHTML = ""
 // 			app.append(
 // 				headerSection,
 // 					heroBlock,
 // 					filterForm,
 // 					galleryBlock,
 // 					feturesBloc,
 // 					paginationBlock
 // 					)
 // 		});
 // 	};
 // };
 // let seconds = 1000 * 3
 // let timerImg = setInterval(() =>slowSlider(), seconds);
 // // Slider features Detail
 // function singleList(detailData){
 // 	let divSingleList = document.createElement("div")
 // 	divSingleList.classList.add("single-list-content")
 // 	let divRow = document.createElement("div")
 // 	divRow.classList.add("row")
 // 	let divCol8 = document.createElement("div")
 // 	divCol8.classList.add("col-xl-8")
 // 	divCol8.classList.add("sl-title")
 // 	let h2 = document.createElement("h2")
 // 	h2.textContent = detailData.street
 // 	let p = document.createElement("p")
 // 	let i = document.createElement("i")
 // 	i.classList.add("fa")
 // 	i.classList.add("fa-map-marker")
 // 	p.textContent = `${detailData.city}, ${detailData.state} ${detailData.postal_code}`
 // 	p.prepend(i)
 // 	divCol8.append(h2, p)
 // 	let divCol4 = document.createElement("div")
 // 	let a = document.createElement("a")
 // 	a.setAttribute("href", "#")
 // 	a.textContent = detailData.price
 // 	a.classList.add("price-btn")
 // 	divCol4.classList.add("col-xl-4")
 // 	divCol4.append(a)
 // 	divRow.append(divCol8, divCol4)
 // 	divSingleList.append(divRow)
 //     // Property Details
 // 	let h3 = document.createElement("h3")
 // 	h3.classList.add("sl-sp-title")
 // 	h3.textContent = "Property Details"
 // 	let divRowProperty = document.createElement("div")
 // 	divRowProperty.classList.add("row")
 // 	divRowProperty.classList.add("property-details-list")
 // 	let div461 = document.createElement("div")
 // 	div461.classList.add("col-md-4")
 // 	div461.classList.add("col-sm-6")
 // 	let pLarge = document.createElement("p")
 // 	pLarge.textContent = `${detailData.house_area} Square foot`
 // 	let iLarge = document.createElement("i")
 // 	iLarge.classList.add("fa")
 // 	iLarge.classList.add("fa-th-large")
 // 	pLarge.prepend(iLarge)
 // 	let pBed = document.createElement("p")
 // 	pBed.textContent = `${detailData.bedrooms} Bedrooms`
 // 	let iBed = document.createElement("i")
 // 	iBed.classList.add("fa")
 // 	iBed.classList.add("fa-bed")
 // 	pBed.prepend(iBed)
 // 	let pUser = document.createElement("p")
 // 	pUser.textContent = `${detailData.users.profile.first_name} Bedrooms`
 // 	let iUser = document.createElement("i")
 // 	iUser.classList.add("fa")
 // 	iUser.classList.add("fa-user")
 // 	pUser.prepend(iUser)
 // 	div461.append(pLarge, pBed, pUser)
 // 	let div462 = document.createElement("div")
 // 	div462.classList.add("col-md-4")
 // 	div462.classList.add("col-sm-6")
 // 	let pCar = document.createElement("p")
 // 	pCar.textContent = `${detailData.garages} Garages`
 // 	let iCar = document.createElement("i")
 // 	iCar.classList.add("fa")
 // 	iCar.classList.add("fa-car")
 // 	pCar.prepend(iCar)
 // 	let pBuilding = document.createElement("p")
 // 	pBuilding.textContent = `${detailData.categories.title}`
 // 	let iBuilding = document.createElement("i")
 // 	iBuilding.classList.add("fa")
 // 	iBuilding.classList.add("fa-building-o")
 // 	pBuilding.prepend(iBuilding)
 // 	let pClock = document.createElement("p")
 // 	pClock.textContent = `${detailData.time_published} days ago`
 // 	let iClock = document.createElement("i")
 // 	iClock.classList.add("fa")
 // 	iClock.classList.add("fa-clock-o")
 // 	pClock.prepend(iClock)
 // 	div462.append(pCar, pBuilding, pClock)
 // 	let div4Bath = document.createElement("div")
 // 	div4Bath.classList.add("col-md-4")
 // 	let pBath = document.createElement("p")
 // 	pBath.textContent = `${detailData.bathrooms} Bathrooms`
 // 	let iBath = document.createElement("i")
 // 	iBath.classList.add("fa")
 // 	iBath.classList.add("a-bath")
 // 	pBath.prepend(iBath)
 // 	let pTrophy = document.createElement("p")
 // 	pTrophy.textContent = `${detailData.age} years age`
 // 	let iTrophy = document.createElement("i")
 // 	iTrophy.classList.add("fa")
 // 	iTrophy.classList.add("fa-trophy")
 // 	pTrophy.prepend(iTrophy)
 // 	div4Bath.append(pBath, pTrophy)
 // 	divRowProperty.append(div461, div462, div4Bath)
 // 	let h3Descr = document.createElement("h3")
 // 	h3Descr.classList.add("sl-sp-title")
 // 	let divDescr = document.createElement("div")
 // 	divDescr.classList.add("description")
 // 	let pDescr = document.createElement("p")
 // 	pDescr.textContent = `${detailData.description}`
 // 	divDescr.append(pDescr)
 // 	let accordionPlanContent = accordionPlan(detailData)
 // 	divSingleList.append(h3, divRowProperty, h3Descr, divDescr, accordionPlanContent)
 // 	return divSingleList
 // };
 // // Accordion features Detail
 // function accordionPlan(detailData) {
 // 	// let accordion = document.querySelector("#accordion")
 // 	// let span = accordion.querySelector("#headingOne .panel-link span")
 // 	// span.textContent = `${detailData.house_area} Square foot`
 // 	// console.log(span)
 // 	let  h3Title = document.createElement("h3")
 // 	h3Title.classList.add("sl-sp-title")
 // 	h3Title.classList.add("bd-no")
 // 	h3Title.textContent = "Floor plans"
 // 	let  divAccordion = document.createElement("div")
 // 	divAccordion.setAttribute("id","accordion")
 // 	divAccordion.classList.add("plan-accordion")
 // 	let counterFloors = 1;
 // 	if(detailData.first_floor_area > 0){
 // 		counterFloors++
 // 	};
 // 	if(detailData.second_floor_area > 0){
 // 		counterFloors++
 // 	};
 // 	if(detailData.third_floor_area > 0){
 // 		counterFloors++
 // 	};
 // 	// console.log(counterFloors)
 // 	for(let item = 1; item < counterFloors; item++){
 // 		let  divPanel = document.createElement("div")
 // 		divPanel.classList.add("panel")
 // 		let  divPanelHeader = document.createElement("div")
 // 		divPanelHeader.classList.add("panel-header")
 // 		divPanelHeader.setAttribute("id","headingOne")
 // 		let  button = document.createElement("button")
 // 		button.classList.add("panel-link")
 // 		if(item == 1){
 // 			button.classList.add("active")
 // 		};
 // 		button.setAttribute("data-toggle","collapse")
 // 		button.setAttribute("data-target",`#collapse${item}`)
 // 		button.setAttribute("aria-expanded","false")
 // 		button.setAttribute("aria-controls",`collapse${item}`)
 // 		if(item == 1){
 // 			button.textContent = "First Floor:"
 // 		};
 // 		if(item == 2){
 // 			button.textContent = "Second Floor:"
 // 		};
 // 		if(item == 3){
 // 			button.textContent = "Third Floor:"
 // 		};
 // 		let  span = document.createElement("span")
 // 		span.textContent = `${detailData.house_area} Square foot`
 // 		let  i = document.createElement("i")
 // 		i.classList.add("fa")
 // 		i.classList.add("fa-angle-down")
 // 		button.append(span, i)
 // 		divPanelHeader.append(button)
 // 		let divCollapse = document.createElement("div")
 // 		divCollapse.classList.add("collapse")
 // 		if(item == 1){
 // 			divCollapse.classList.add("show")
 // 			divCollapse.setAttribute("aria-labelledby", "headingOne")
 // 		};
 // 		if(item == 2){
 // 			divCollapse.setAttribute("aria-labelledby", "headingTwo")
 // 		};
 // 		if(item == 3){
 // 			divCollapse.setAttribute("aria-labelledby", "headingThree")
 // 		};
 // 		divCollapse.setAttribute("id",`collapse${item}`)
 // 		divCollapse.setAttribute("data-parent", "#accordion")
 // 		let divPanelBody = document.createElement("div")
 // 		divPanelBody.classList.add("panel-body")
 // 		let img = document.createElement("img")
 // 		img.setAttribute("src", "img/plan-sketch.jpg")
 // 		img.setAttribute("alt", "img")
 // 		divPanelBody.append(img)
 // 		divCollapse.append(divPanelBody)
 // 		divPanel.append(divPanelHeader, divCollapse)
 // 		divAccordion.append(divPanel)
 // 	};
 // 	return divAccordion
 // };
 // async function slDetailFeatures() {
 // 	let currentPage = "currentPage"
 // 	let detailData;
 // 	let p_url = location.search.substring(1)
 // 	if (localStorage[currentPage]) {
 // 		let storage = jsonToData(localStorage[currentPage]);
 // 		storage.forEach(function(elem, index) {
 // 			if (Number(elem.id) == Number(p_url)) {
 // 				detailData = elem};
 // 		});
 // 	}
 // 	else{
 // 		response = await fetch(`http://127.0.0.1:8000/api/v1/properties/${p_url}/`);
 // 		detailData = await response.json();
 // 		console.log(detailData)
 // 	};
 // 	if (detailData) {
 // 	// console.log(detailData)
 // 		let colSlider = document.querySelector(".col-lg-8")
 // 		let divslider = document.createElement("div")
 // 		divslider.setAttribute("id", "sl-slider")
 // 		// divslider.classList.add("single-list-slider")
 // 		divslider.classList.add("block-slider")
 // 		let divAreaSlider = document.createElement("div")
 // 		divAreaSlider.classList.add("block-area-slider")
 // 		//Arrows
 // 		let divBtns = document.createElement("div")
 // 		divBtns.classList.add("btnsAreaSize")
 // 		let divArrowLeft = document.createElement("div")
 // 		divArrowLeft.classList.add("blockArrow")
 // 		divArrowLeft.setAttribute("id", "left-btn")
 // 		let iArrowLeft = document.createElement("i")
 // 		iArrowLeft.classList.add("fa")
 // 		iArrowLeft.classList.add("fa-angle-left")
 // 		iArrowLeft.setAttribute("aria-hidden", "true")
 // 		divArrowLeft.append(iArrowLeft)
 // 		let divArrowRight = document.createElement("div")
 // 		divArrowRight.classList.add("blockArrow")
 // 		divArrowRight.setAttribute("id", "right-btn")
 // 		let iArrowRight = document.createElement("i")
 // 		iArrowRight.classList.add("fa")
 // 		iArrowRight.classList.add("fa-angle-right")
 // 		iArrowRight.setAttribute("aria-hidden", "true")
 // 		divArrowRight.append(iArrowRight)
 // 		divBtns.append(divArrowLeft, divArrowRight)
 // 		// Points
 // 		let divPoint = document.createElement("div")
 // 		divPoint.classList.add("point-size")
 // 		for(let i=0; i < 3; i++){
 // 			let spanPoint = document.createElement("span")
 // 			spanPoint.classList.add("point")
 // 			divPoint.append(spanPoint)
 // 		};
 // 		// Images
 // 		let divImgArea = document.createElement("div")
 // 		divImgArea.classList.add("img-area")
 // 		detailData["photo"].forEach(function (elem) {
 // 			let divImg = document.createElement("img")
 // 			divImg.classList.add("img-item")
 // 			divImg.setAttribute("src", elem)
 // 			divImg.setAttribute("alt", "img")
 // 			divImg.setAttribute("alt", "img")
 // 			divImgArea.append(divImg)
 // 		});
 // 		divAreaSlider.append(divImgArea, divPoint, divBtns)
 // 		divslider.append(divAreaSlider)
 // 		let singleListContent = singleList(detailData)
 // 		colSlider.prepend(divslider, singleListContent)
 // 		pointsSlider ()
 // 		let mainBlockSliderRun = document.querySelector("#sl-slider")
 // 		mainBlockSliderRun.addEventListener("mouseover", ()=>{
 // 			clearInterval(timerImg)
 // 		});
 // 		mainBlockSliderRun.addEventListener("mouseleave", ()=>{
 // 			timerImg = setInterval(() =>slowSlider(), seconds);
 // 		});
 // 	};
 // };
 // let counterPointsSlow = 0;
 // let counterSlow = 0;
 // function slowSlider() {
 // 	let points = document.querySelectorAll(".point")
 // 	let images = document.querySelectorAll(".img-item")
 // 	if(points[0]) {
 // 		points[0].classList.add("active-image")
 // 		images[0].classList.add("active-image")
 // 		for(let i = 0; i < images.length; i++) {
 // 			for(let p = 0; p < points.length; p++) {
 // 				points[p].classList.remove("active-image")
 // 			};
 // 			images[i].classList.remove("active-image")
 // 		};
 // 		counterSlow++
 // 		if (counterSlow >= images.length) {
 // 			counterSlow =  0
 // 		}
 // 		if (counterPointsSlow > points.length-1) {
 // 			counterPointsSlow = 0
 // 		}
 // 		points[counterPointsSlow].classList.add("active-image")
 // 		counterPointsSlow++
 // 		images[counterSlow].classList.add("active-image")
 // 	};
 // };
 // function pointsSlider () {
 // 	let leftBtn = document.querySelector("#left-btn")
 // 	let rightBtn = document.querySelector("#right-btn")
 // 	let points = document.querySelectorAll(".point")
 // 	let images = document.querySelectorAll(".img-item")
 // 	points[0].classList.add("active-image")
 // 	images[0].classList.add("active-image")
 // 	let counter = 0;
 // 	for(let i = 0; i < points.length; i++) {
 // 		points[i].addEventListener("click", ()=>{
 // 			for(let k = 0; k < images.length; k++) {
 // 				for(let p = 0; p < points.length; p++) {
 // 					points[p].classList.remove("active-image")
 // 				};
 // 				images[k].classList.remove("active-image")
 // 			};
 // 			counter = i; 
 // 			points[counter].classList.add("active-image")
 // 			images[counter].classList.add("active-image")
 // 		});
 // 	};
 // 	let counterPoints = 0;
 // 	leftBtn.addEventListener("click", ()=> {
 // 		for(let i = 0; i < images.length; i++) {
 // 			for(let p = 0; p < points.length; p++) {
 // 				points[p].classList.remove("active-image")
 // 			};
 // 			images[i].classList.remove("active-image")
 // 		};
 // 		counter--
 // 		if (counter < 0) {
 // 			counter =  images.length - 1
 // 		}
 // 		if (counterPoints > points.length-1) {
 // 			counterPoints = 0
 // 		}
 // 		// console.log(counterPoints,'==')
 // 		points[counterPoints].classList.add("active-image")
 // 		counterPoints++
 // 		images[counter].classList.add("active-image")
 // 	})
 // 	rightBtn.addEventListener("click", ()=> {
 // 		for(let i = 0; i < images.length; i++) {
 // 			for(let p = 0; p < points.length; p++) {
 // 				points[p].classList.remove("active-image")
 // 			};
 // 			images[i].classList.remove("active-image")
 // 		};
 // 		counter++
 // 		if (counter >= images.length) {
 // 			counter =  0
 // 		}
 // 		if (counterPoints > points.length-1) {
 // 			counterPoints = 0
 // 		}
 // 		// console.log(counterPoints,'==')
 // 		points[counterPoints].classList.add("active-image")
 // 		counterPoints++
 // 		images[counter].classList.add("active-image")
 // 	});
 // };
 // function getIdFeature(itemRow) {
 // 	let rowFeature = itemRow.querySelectorAll(".col-lg-4 a")
 // 	for (let i = 0; i < rowFeature.length; i++) {
 // 		rowFeature[i].addEventListener("click", async function (elem) {
 // 			location.href = `${rowFeature[i].href}?` + rowFeature[i].id
 // 		});
 // 	};
 // };
 // slDetailFeatures()
 // // Pagination
 // async function pagination(propertyData, currentPage) {
 // 	// console.log(propertyData["pages"], currentPage, '----')
 // 	window.scrollTo({ top: 1900, behavior: 'smooth' })
 // 	if (propertyData["pages"] > 0) {
 // 		let divPagina = document.querySelector(".site-pagination")
 // 		divPagina.innerHTML = ""
 // 		let aPreview = document.createElement("a")
 // 		let iLeft = document.createElement("i")
 // 		aPreview.setAttribute("href", `?page=${propertyData["page"] - 1}`)
 // 		iLeft.classList.add("fa")
 // 		iLeft.classList.add("fa-angle-left")
 // 		aPreview.append(iLeft)
 // 		let aNext = document.createElement("a")
 // 		let iRight = document.createElement("i")
 // 		aNext.setAttribute("href", `?page=${propertyData["page"] + 1}`)
 // 		iRight.classList.add("fa")
 // 		iRight.classList.add("fa-angle-right")
 // 		aNext.append(iRight)
 // 		let liNext = document.createElement("li")
 // 		liNext.setAttribute("style", "display: inline-block")
 // 		liNext.append(aNext)
 // 		let ul = document.createElement("ul")
 // 		ul.setAttribute("style", "list-style-type: none")
 // 		let liPreview = document.createElement("li")
 // 		liPreview.setAttribute("style", "display: none")
 // 		if (propertyData["page"] > 1) {
 // 			liPreview.style.display = "inline-block"
 // 			liPreview.append(aPreview)
 // 		};
 // 		ul.append(liPreview)
 // 		for (let element = 1; element <= propertyData["pages"]; element++) {
 // 			let a = document.createElement("a")
 // 			let li = document.createElement("li")
 // 			a.setAttribute("style", "display='none'")
 // 			li.setAttribute("style", "display='none'")
 // 			if (element >= (propertyData["page"] - 2) && element <= (propertyData["page"] + 2)) {
 // 				a.setAttribute("href", `?page=${element}`)
 // 				a.textContent = element
 // 				li.setAttribute("style", "display: inline-block")
 // 				li.append(a)
 // 				ul.append(li)
 // 			};
 // 			if (element == propertyData["page"]) {
 // 				a.removeAttribute("href")
 // 				a.style.color = "#d4d2d2"
 // 			};
 // 		};
 // 		if (currentPage == propertyData["pages"]) {
 // 			liNext.style.display = "none"
 // 		};
 // 		ul.append(liNext)
 // 		divPagina.append(ul)
 // 	};
 // };
 // let sitePagination = document.querySelector('.site-pagination')
 // if (sitePagination) {
 // 	sitePagination.addEventListener('click', function (e) {
 // 		if (e.target.tagName == "A") {
 // 			e.preventDefault();
 // 			let url = String(e.target.href)
 // 			let page = url.slice(url.length - 3, url.length).match(/\d+/)[0]
 // 			window.scrollTo({ top: 1900, behavior: 'smooth' })
 // 			feturesSection(page = +page, params = params,)
 // 		}
 // 	});
 // };
 // // Services section
 // async function servicesSection() {
 // 	let itemElement = document.querySelector(".services-section")
 // 	let container;
 // 	if (itemElement) {
 // 		container = itemElement.querySelector(".col-lg-6")
 // 		let element = main_site["servicesSection"]
 // 		let img = document.createElement("img")
 // 		img.setAttribute("src", element["image"])
 // 		img.setAttribute("alt", "service")
 // 		container.append(img)
 // 		let sectionTitle = itemElement.querySelector(".section-title")
 // 		let h3 = document.createElement("h3")
 // 		let p = document.createElement("p")
 // 		h3.textContent = element["h3"]
 // 		p.textContent = element["p"]
 // 		sectionTitle.append(h3, p)
 // 		let services = itemElement.querySelector(".services")
 // 		element["serviceItems"].forEach(function (element, idx) {
 // 			let div = document.createElement("div")
 // 			div.classList.add("service-item")
 // 			let i = document.createElement("i")
 // 			i.classList.add("fa")
 // 			if (idx == 0) { i.classList.add("fa-comments") }
 // 			if (idx == 1) { i.classList.add("fa-home") }
 // 			if (idx == 2) { i.classList.add("fa-briefcase") }
 // 			div.append(i)
 // 			let div2 = document.createElement("div")
 // 			let h5 = document.createElement("h5")
 // 			let p = document.createElement("p")
 // 			h5.textContent = element["h5"]
 // 			p.textContent = element["p"]
 // 			div2.classList.add("service-text")
 // 			div2.append(h5, p)
 // 			div.append(div2)
 // 			services.append(div)
 // 		});
 // 	};
 // };
 // // Review section
 // async function reviewSection() {
 // 	let element = main_site["review"]
 // 	let itemElement = document.querySelector(".review-section")
 // 	let reviewSlider;
 // 	if (itemElement) {
 // 		reviewSlider = itemElement.querySelector(".review-slider")
 // 		reviewSlider.classList.add("owl-carousel")
 // 		reviewSlider.classList.add("owl-item")
 // 		reviewSlider.classList.add("owl-drag")
 // 		reviewSlider.classList.add("owl-loaded")
 // 		element["reviewItems"].forEach(function (elem, idx) {
 // 			let h5 = document.createElement("h5")
 // 			let p = document.createElement("p")
 // 			let span = document.createElement("span")
 // 			let div2 = document.createElement("div")
 // 			let div3 = document.createElement("div")
 // 			div2.classList.add("rating")
 // 			div3.classList.add("review-item")
 // 			div3.classList.add("text-white")
 // 			for (let num = 0; num < 5; num++) {
 // 				let i = document.createElement("i")
 // 				i.classList.add("fa")
 // 				i.classList.add("fa-star")
 // 				div2.append(i)
 // 			}
 // 			p.textContent = elem["p"]
 // 			h5.textContent = elem["h5"]
 // 			span.textContent = elem["span"]
 // 			let div = document.createElement("div")
 // 			div.classList.add("clint-pic")
 // 			div.classList.add("set-bg")
 // 			div.setAttribute("data-setbg", `${elem["image"]}`)
 // 			div.setAttribute("style", `background-image: url(${elem["image"]});`)
 // 			div3.append(p, h5, span, div, div2)
 // 			reviewSlider.append(div3)
 // 		});
 // 		return reviewSlider
 // 	};
 // };
 // // Clients section 
 // async function clientsSection() {
 // 	let element = main_site["clients"]
 // 	let itemElement = document.querySelector(".clients-section")
 // 	let clientsSlider = itemElement.querySelector(".clients-slider")
 // 	clientsSlider.classList.add("owl-carousel")
 // 	clientsSlider.classList.add("owl-loaded")
 // 	clientsSlider.classList.add("owl-drag")
 // 	element.forEach(function (elem, idx) {
 // 		let link = document.createElement("a")
 // 		link.setAttribute("href", "https://ya.ru")
 // 		let img = document.createElement("img")
 // 		img.setAttribute("src", elem)
 // 		img.setAttribute("alt", "client")
 // 		link.append(img)
 // 		clientsSlider.append(link)
 // 	});
 // 	return clientsSlider
 // };
 // // Footer section
 // async function footerSection() {
 // 	let element = main_site["footer"]
 // 	let itemElement = document.querySelector(".footer-section")
 // 	let rowElement = itemElement.querySelector(".row")
 // 	for (let idx = 0; idx < 4; idx++) {
 // 		let divCol = document.createElement("div")
 // 		divCol.classList.add("col-lg-3")
 // 		divCol.classList.add("col-md-6")
 // 		divCol.classList.add("footer-widget")
 // 		if (idx == 0) {
 // 			let img = document.createElement("img")
 // 			img.setAttribute("src", element["image"])
 // 			img.setAttribute("alt", "logo")
 // 			let p = document.createElement("p")
 // 			p.textContent = element["p"]
 // 			let divLinks = document.createElement("div")
 // 			divLinks.classList.add("social")
 // 			element["socialLinks"].forEach(function (elem, idx) {
 // 				let a = document.createElement("a")
 // 				a.setAttribute("href", elem)
 // 				let i = document.createElement("i")
 // 				i.classList.add("fa")
 // 				if (idx == 0) { i.classList.add("fa-facebook") }
 // 				if (idx == 1) { i.classList.add("fa-twitter") }
 // 				if (idx == 2) { i.classList.add("fa-instagram") }
 // 				if (idx == 3) { i.classList.add("fa-pinterest") }
 // 				if (idx == 4) { i.classList.add("fa-linkedin") }
 // 				a.append(i)
 // 				divLinks.append(a)
 // 			});
 // 			divCol.append(img, p, divLinks)
 // 		};
 // 		rowElement.append(divCol)
 // 		if (idx == 1) {
 // 			let divContact = document.createElement("div")
 // 			divContact.classList.add("contact-widget")
 // 			let h5 = document.createElement("h5")
 // 			h5.classList.add("fw-title")
 // 			h5.textContent = "CONTACT US"
 // 			divContact.append(h5)
 // 			element["contacts"].forEach(function (elem, idx) {
 // 				let p = document.createElement("p");
 // 				let i = document.createElement("i")
 // 				i.classList.add("fa")
 // 				if (idx == 0) {
 // 					p.textContent = elem
 // 					i.classList.add("fa-map-marker")
 // 				};
 // 				if (idx == 1) {
 // 					p.textContent = elem
 // 					i.classList.add("fa-phone")
 // 				};
 // 				if (idx == 2) {
 // 					p.textContent = elem
 // 					i.classList.add("fa-envelope")
 // 				};
 // 				if (idx == 3) {
 // 					p.textContent = elem
 // 					i.classList.add("fa-clock-o")
 // 				};
 // 				p.prepend(i)
 // 				divContact.append(p)
 // 			});
 // 			divCol.prepend(divContact)
 // 		};
 // 		if (idx == 2) {
 // 			let divDouble = document.createElement("div")
 // 			divDouble.classList.add("double-menu-widget")
 // 			let h5 = document.createElement("h5")
 // 			h5.classList.add("fw-title")
 // 			h5.textContent = "POPULAR PLACES"
 // 			divDouble.append(h5)
 // 			let ul = document.createElement("ul")
 // 			element["popularPlacesLinks"][0].forEach(function (elem, idx) {
 // 				let li = document.createElement("li");
 // 				let a = document.createElement("a");
 // 				a.setAttribute("href", "https://ya.ru")
 // 				a.textContent = elem["title"]
 // 				li.append(a)
 // 				ul.append(li)
 // 			});
 // 			divDouble.append(ul)
 // 			let ul2 = document.createElement("ul")
 // 			element["popularPlacesLinks"][1].forEach(function (elem, idx) {
 // 				let li = document.createElement("li");
 // 				let a = document.createElement("a");
 // 				a.setAttribute("href", "https://ya.ru")
 // 				a.textContent = elem["title"]
 // 				li.append(a)
 // 				ul2.append(li)
 // 			});
 // 			divDouble.append(ul2)
 // 			divCol.append(divDouble)
 // 		};
 // 		rowElement.append(divCol)
 // 		if (idx == 3) {
 // 			let divNewslatter = document.createElement("div")
 // 			divNewslatter.classList.add("newslatter-widget")
 // 			let h5 = document.createElement("h5")
 // 			h5.classList.add("fw-title")
 // 			h5.textContent = "NEWSLETTER"
 // 			let p = document.createElement("p")
 // 			p.textContent = "Subscribe your email to get the latest news and new offer also discount"
 // 			let form = document.createElement("form")
 // 			form.classList.add("footer-newslatter-form")
 // 			let input = document.createElement("input")
 // 			input.setAttribute("type", "text")
 // 			input.setAttribute("placeholder", "Email address")
 // 			let button = document.createElement("button")
 // 			let i = document.createElement("i")
 // 			i.classList.add("fa")
 // 			i.classList.add("fa-send")
 // 			button.append(i)
 // 			form.append(input, button)
 // 			divNewslatter.append(h5, p, form)
 // 			divCol.append(divNewslatter)
 // 		};
 // 		rowElement.append(divCol)
 // 	};
 // };
 // async function footerBbottom() {
 // 	let element = main_site["footer"]
 // 	let itemElement = document.querySelector(".footer-section")
 // 	let containerElement = itemElement.querySelector(".container")
 // 	let divBottom = document.createElement("div")
 // 	divBottom.classList.add("footer-bottom")
 // 	let nav = document.createElement("div")
 // 	nav.classList.add("footer-nav")
 // 	let divCopyright = document.createElement("div")
 // 	divCopyright.classList.add("copyright")
 // 	let p = document.createElement("p")
 // 	p.innerHTML = `Copyright &copy ${new Date().getFullYear()} All rights reserved `
 // 	divCopyright.append(p)
 // 	let ul = document.createElement("ul")
 // 	element["footerBottom"].forEach(function (elem, idx) {
 // 		let li = document.createElement("li");
 // 		let a = document.createElement("a");
 // 		a.setAttribute("href", elem["link"])
 // 		a.textContent = elem["text"]
 // 		li.append(a)
 // 		ul.append(li)
 // 	});
 // 	nav.append(ul)
 // 	divBottom.append(nav, divCopyright)
 // 	containerElement.append(divBottom)
 // };
 // mainMenu()
 // heroSection()
 // servicesSection()
 // footerSection()
 // footerBbottom()
 // feturesSection()
 // gallerySection()
 // jQuery
 // 	/*------------------
 // 		Navigation
 // 	--------------------*/
 // 	$('.nav-switch').on('click', function (event) {
 // 		$('.main-menu').slideToggle(400);
 // 		event.preventDefault();
 // 	});
 // 	/*------------------
 // 		Background set
 // 	--------------------*/
 // 	$('.set-bg').each(function () {
 // 		var bg = $(this).data('setbg');
 // 		$(this).css('background-image', 'url(' + bg + ')');
 // 	});
 // 	$('.gallery').find('.gallery-item').each(function () {
 // 		var pi_height1 = $(this).outerWidth(true),
 // 			pi_height2 = pi_height1 / 2;
 // 		if ($(this).hasClass('grid-long') && window_w > 991) {
 // 			$(this).css('height', pi_height2);
 // 		} else {
 // 			$(this).css('height', Math.abs(pi_height1));
 // 		}
 // 	});
 // 	$('.gallery').masonry({
 // 		itemSelector: '.gallery-item',
 // 		columnWidth: '.grid-sizer',
 // 		gutter: 20
 // 	});
 // 	/*------------------
 // 		Review Slider
 // 	--------------------*/
 // 	$('.review-slider').append(reviewSection())
 // 	$('.review-slider').owlCarousel({
 // 		loop: true,
 // 		margin: 0,
 // 		nav: false,
 // 		items: 1,
 // 		dots: true,
 // 		autoplay: true,
 // 	});
 // 	$('.clients-slider').append(clientsSection())
 // 	$('.clients-slider').owlCarousel({
 // 		loop: true,
 // 		autoplay: true,
 // 		margin: 30,
 // 		nav: false,
 // 		dots: true,
 // 		responsive: {
 // 			0: {
 // 				items: 2,
 // 				margin: 10
 // 			},
 // 			600: {
 // 				items: 3
 // 			},
 // 			800: {
 // 				items: 3
 // 			},
 // 			1000: {
 // 				items: 5
 // 			}
 // 		}
 // 	});
 // 	// // /*------------------
 // 	// // 	Review Slider
 // 	// // --------------------*/
 // 	// var sync1 = $("#sl-slider") //.append(slDetailFeatures())
 // 	// var sync2 = $("#sl-slider-thumb") //.append(thumbDetailFeatures());
 // 	var slidesPerPage = 4; //globaly define number of elements per page
 // 	var syncedSecondary = true;
 // 	// sync1.owlCarousel({
 // 	// 	items: 1,
 // 	// 	slideSpeed: 2000,
 // 	// 	nav: false,
 // 	// 	autoplay: true,
 // 	// 	dots: true,
 // 	// 	loop: true,
 // 	// 	responsiveRefreshRate: 200,
 // 	// }).on('changed.owl.carousel', syncPosition);
 // 	// sync2.on('initialized.owl.carousel', function () {
 // 	// 	sync2.find(".owl-item").eq(0).addClass("current");
 // 	// }).owlCarousel({
 // 	// 	items: slidesPerPage,
 // 	// 	dots: true,
 // 	// 	nav: true,
 // 	// 	margin: 10,
 // 	// 	smartSpeed: 200,
 // 	// 	slideSpeed: 500,
 // 	// 	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
 // 	// 	slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
 // 	// 	responsiveRefreshRate: 100
 // 	// }).on('changed.owl.carousel', syncPosition2);
 // 	function syncPosition(el) {
 // 		//if you set loop to false, you have to restore this next line
 // 		var current = el.item.index;
 // 		//if you disable loop you have to comment this block
 // 		var count = el.item.count - 1;
 // 		var current = Math.round(el.item.index - (el.item.count / 2) - .5);
 // 		if (current < 0) {
 // 			current = count;
 // 		}
 // 		if (current > count) {
 // 			current = 0;
 // 		}
 // 		//end block
 // 		sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
 // 		var onscreen = sync2.find('.owl-item.active').length - 1;
 // 		var start = sync2.find('.owl-item.active').first().index();
 // 		var end = sync2.find('.owl-item.active').last().index();
 // 		if (current > end) {
 // 			sync2.data('owl.carousel').to(current, 100, true);
 // 		}
 // 		if (current < start) {
 // 			sync2.data('owl.carousel').to(current - onscreen, 100, true);
 // 		}
 // 	}
 // 	function syncPosition2(el) {
 // 		if (syncedSecondary) {
 // 			var number = el.item.index;
 // 			sync1.data('owl.carousel').to(number, 100, true);
 // 		}
 // 	}
 // 	// sync2.on("click", ".owl-item", function (e) {
 // 	// 	e.preventDefault();
 // 	// 	var number = $(this).index();
 // 	// 	sync1.data('owl.carousel').to(number, 300, true);
 // 	// });
 // 	/*------------------
 // 		Accordions
 // 	--------------------*/
 // 	$('.panel-link').on('click', function (e) {
 // 		$('.panel-link').removeClass('active');
 // 		var $this = $(this);
 // 		if (!$this.hasClass('active')) {
 // 			$this.addClass('active');
 // 		}
 // 		e.preventDefault();
 // 	});
 // 	$('.video-link').magnificPopup({
 // 		disableOn: 700,
 // 		type: 'iframe',
 // 		mainClass: 'mfp-fade',
 // 		removalDelay: 160,
 // 		preloader: false,
 // 	});
 // // (jQuery);

},{"../components/filter-form.js":"aXGWt","../components/gallery.js":"go77g","../components/fetures-section.js":"14Sqm","../components/review-slider.js":"c9Rve","../components/services.js":"5ARAb","../main.js":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aXGWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Filter form section
parcelHelpers.export(exports, "filterFormSection", ()=>filterFormSection);
var _feturesSectionJs = require("./fetures-section.js");
var _mainPageJs = require("../pages/main-page.js");
var _mainJs = require("../main.js");
function filterFormSection(cityName) {
    const divFilter = document.createElement("div");
    divFilter.classList.add("filter-search");
    const divContainer = document.createElement("div");
    divContainer.classList.add("container");
    let filterForm = document.createElement("form");
    filterForm.classList.add("filter-form");
    let inputCity = document.createElement("input");
    inputCity.id = "inCity";
    inputCity.type = "text";
    inputCity.setAttribute("value", "");
    inputCity.placeholder = "City";
    filterForm.append(inputCity);
    let inputState = document.createElement("input");
    inputState.id = "inState";
    inputState.type = "text";
    inputState.placeholder = "State";
    filterForm.append(inputState);
    let selectRentSaleFlat = document.createElement("select");
    selectRentSaleFlat.id = "rentSaleFlat";
    let optionRent = document.createElement("option");
    optionRent.id = "rent";
    optionRent.textContent = "rent";
    let optionSale = document.createElement("option");
    optionSale.id = "sale";
    optionSale.textContent = "sale";
    selectRentSaleFlat.append(optionRent, optionSale);
    let selectHouse = document.createElement("select");
    selectHouse.id = "sellFlatHouse";
    let optionFlat = document.createElement("option");
    optionFlat.id = "flat";
    optionFlat.value = "1";
    optionFlat.textContent = "flat";
    let optionHouse = document.createElement("option");
    optionHouse.id = "house";
    optionHouse.value = "2";
    optionHouse.textContent = "house";
    selectHouse.append(optionFlat, optionHouse);
    let selectSellRooms = document.createElement("select");
    selectSellRooms.id = "sellRooms";
    for(let i = 1; i < 6; i++){
        let optionRoom = document.createElement("option");
        optionRoom.id = `${i}room`;
        optionRoom.textContent = `${i}-room`;
        selectSellRooms.append(optionRoom);
    }
    let btn = document.createElement("button");
    btn.classList.add("site-btn", "fs-submit");
    btn.textContent = "\u041D\u0410\u0419\u0422\u0418";
    btn.type = "submit";
    filterForm.append(selectRentSaleFlat, selectHouse, selectSellRooms, btn);
    selectHouse.addEventListener("click", function(e) {
        e.preventDefault();
        selectSellRooms.removeAttribute("disabled");
        if (e.target.value == "2") selectSellRooms.setAttribute("disabled", "disabled");
    });
    let params = {};
    filterForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        let city;
        if (cityName) city = cityName;
        else city = filterForm.inCity.value;
        let state = filterForm.inState.value;
        let flatHouse = filterForm.sellFlatHouse.value;
        let rentSale = rentSaleFlat.value;
        let roomsFlat = filterForm.sellRooms.value;
        let rooms = 0;
        if (!selectSellRooms.disabled) rooms = roomsFlat.at(0);
        params = {
            "city": city,
            "state": state,
            "category": flatHouse,
            "status": rentSale,
            "rooms": +rooms
        };
        for(var key in params)if (params[key] == null) params[key] = "";
        let page;
        // window.scrollTo({ top: 1900, behavior: 'smooth' })
        divContainer.append(filterForm);
        divFilter.append(divContainer);
        let feturesBlock = await (0, _feturesSectionJs.feturesSection)(page, params);
        // const mainPage = pageContainer()
        // mainPage.append(feturesBlock)
        (0, _mainJs.pageContainer).innerHTML = "";
        let feturesBlockNew = await (0, _mainPageJs.mainContainer)(feturesBlock, city);
        (0, _mainJs.pageContainer).append(feturesBlockNew);
        window.scrollTo({
            top: 1000,
            behavior: "smooth"
        });
    // return feturesBlock
    });
    divContainer.append(filterForm);
    divFilter.append(divContainer);
    return divFilter;
}

},{"./fetures-section.js":"14Sqm","../pages/main-page.js":"8PfDb","../main.js":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14Sqm":[function(require,module,exports) {
// import { setStorageData } from "../utils.js"
// import { filterFormSection } from './filter-form.js'
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "feturesSection", ()=>feturesSection);
var _paginationJs = require("./pagination.js");
var _listPropertiesJs = require("./list-properties.js");
// import { gallerySection } from '../components/gallery.js'
// import { reviewSection } from "../components/review-slider.js"
// import { servicesSection } from "../components/services.js"
// import { heroSection } from "../components/hero.js"
// import { mainSiteData } from "../main.js"
var _mainPageJs = require("../pages/main-page.js");
var _mainJs = require("../main.js");
async function feturesSection(page = 1, params = {}) {
    // mainPage.innerHTML = ""
    const featureSection = document.createElement("section");
    featureSection.classList.add("feature-section", "spad");
    featureSection.innerHTML = "";
    let container = document.createElement("div");
    container.classList.add("container");
    let listings = document.createElement("div");
    listings.classList.add("section-title", "text-center");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    h3.textContent = "Featured Listings";
    p.textContent = "Browse houses and flats for sale and to rent in your area";
    listings.append(h3, p);
    container.append(listings);
    let row = document.createElement("div");
    row.classList.add("row");
    let propertyData = params;
    if (JSON.stringify(propertyData) !== "{}" && propertyData["items"]) // page = propertyData["page"]
    params = propertyData["items"];
    // else{
    // propertyData = propertyData = await getListProperties(page, params);
    // }
    propertyData = propertyData = await (0, _listPropertiesJs.getListProperties)(page, params);
    // setStorageData("currentPage", propertyData["items"])
    propertyData["items"].forEach(function(element) {
        let divCol = document.createElement("div");
        divCol.classList.add("col-lg-4");
        divCol.classList.add("col-md-6");
        divCol.setAttribute("data-id", `${element["id"]}`);
        let button = document.createElement("a");
        // button.setAttribute("href", `./single-list.html` + `?${element["id"]}`)
        button.setAttribute("id", element["id"]);
        button.href = "/detail/" + `${element["id"]}`;
        // button.setAttribute("data-navigo", true)
        button.addEventListener("click", function(e) {
            e.preventDefault();
            (0, _mainJs.router).navigate("/detail/" + `${element["id"]}`);
        });
        let divFeature = document.createElement("div");
        divFeature.classList.add("feature-item");
        let divFeaturePic = document.createElement("div");
        divFeaturePic.classList.add("feature-pic");
        divFeaturePic.classList.add("set-bg");
        divFeaturePic.setAttribute("data-setbg", element["photo"][0]);
        divFeaturePic.setAttribute("style", `background-image: url(${element["photo"][0]});`);
        let divSale = document.createElement("div");
        if (element["status"] == "sale") {
            divSale.classList.add("sale-notic");
            divSale.textContent = "FOR SALE";
        }
        if (element["status"] == "rent") {
            divSale.classList.add("rent-notic");
            divSale.textContent = "FOR RENT";
        }
        divFeaturePic.append(divSale);
        let divFeatureText = document.createElement("div");
        divFeatureText.classList.add("feature-text");
        let divTextCenter = document.createElement("div");
        divTextCenter.classList.add("text-center");
        divTextCenter.classList.add("feature-title");
        let h5 = document.createElement("h5");
        h5.textContent = element["street"];
        let p = document.createElement("p");
        let i = document.createElement("i");
        i.classList.add("fa");
        i.classList.add("fa-map-marker");
        p.textContent = ` ${element["city"]}, ${element["state"]} ${element["postal_code"]}`;
        p.prepend(i);
        divTextCenter.append(h5, p);
        let divRoomW = document.createElement("div");
        divRoomW.classList.add("room-info-warp");
        let divRoom1 = document.createElement("div");
        divRoom1.classList.add("room-info");
        let divRfL = document.createElement("div");
        divRfL.classList.add("rf-left");
        let p1 = document.createElement("p");
        let i1 = document.createElement("i");
        i1.classList.add("fa");
        i1.classList.add("fa-th-large");
        p1.textContent = `${element["house_area"]} Square foot`;
        p1.prepend(i1);
        let p2 = document.createElement("p");
        let i2 = document.createElement("i");
        i2.classList.add("fa");
        i2.classList.add("fa-bed");
        p2.textContent = `${element["bedrooms"]} Bedrooms`;
        p2.prepend(i2);
        divRfL.append(p1, p2);
        let divRfR = document.createElement("div");
        divRfR.classList.add("rf-right");
        let pR1 = document.createElement("p");
        let iR1 = document.createElement("i");
        iR1.classList.add("fa");
        iR1.classList.add("fa-car");
        pR1.textContent = `${element["garages"]} Garages`;
        pR1.prepend(iR1);
        let pR2 = document.createElement("p");
        let iR2 = document.createElement("i");
        iR2.classList.add("fa");
        iR2.classList.add("fa-bath");
        pR2.textContent = `${element["bathrooms"]} Bathrooms`;
        pR2.prepend(iR2);
        divRfR.append(pR1, pR2);
        let divRoom2 = document.createElement("div");
        divRoom2.classList.add("room-info");
        let divU = document.createElement("div");
        divU.classList.add("rf-left");
        let pU = document.createElement("p");
        let iU = document.createElement("i");
        iU.classList.add("fa");
        iU.classList.add("fa-user");
        let a = document.createElement("a");
        a.href = "#";
        // a.setAttribute("data-navigo", true)
        a.textContent = element["agent_id"];
        pU.append(a);
        pU.prepend(iU);
        divU.append(pU);
        let divC = document.createElement("div");
        divC.classList.add("rf-right");
        let pC = document.createElement("p");
        let iC = document.createElement("i");
        iC.classList.add("fa");
        iC.classList.add("fa-clock-o");
        pC.textContent = `${element["time_published"]} days ago`;
        pC.prepend(iC);
        divC.append(pC);
        let divPrice = document.createElement("div");
        divPrice.classList.add("room-price");
        divPrice.textContent = element["price"];
        divRoom2.append(divU, divC);
        divRoom1.append(divRfL, divRfR);
        divRoomW.append(divRoom1, divRoom2);
        divFeatureText.append(divTextCenter, divRoomW, divPrice);
        divFeature.append(divFeaturePic, divFeatureText);
        button.append(divFeature);
        divCol.append(button);
        row.append(divCol);
    });
    // const mainSite = await mainSiteData()
    // const heroBlock1 = await heroSection(mainSite)
    // // Filter form section
    // const filterForm1 = await filterFormSection()
    // // Gallery section
    // const galleryBlock1 = await gallerySection()
    // // // Review section
    // const reviewBlock1 = await reviewSection()
    // // Services section
    // const servicesBlock1 = await servicesSection(mainSite)
    // Pagination
    let divPagina = await (0, _paginationJs.pagination)(page, propertyData);
    container.append(row, divPagina);
    featureSection.append(container);
    // const mainPage = getPageContainer()
    let pages = divPagina.childNodes[0].children;
    for (let link of pages)link.addEventListener("click", async function(e) {
        console.log("===");
        e.preventDefault();
        let cityElem = document.querySelector("#inCity");
        cityElem.value = params.city;
        let page = link.childNodes[0].textContent;
        const feturesBlock = await feturesSection(page = +page, params);
        // mainPage.innerHTML= ""
        (0, _mainJs.pageContainer).innerHTML = "";
        let feturesBlockNew = await (0, _mainPageJs.mainContainer)(feturesBlock, params.city);
        (0, _mainJs.pageContainer).append(feturesBlockNew);
        // const mainPage = pageContainer()
        // mainPage.append(
        //     heroBlock,
        //     filterForm,
        //     galleryBlock,
        //     feturesBlock, 
        //      reviewBlock,
        //      servicesBlock,
        //      )
        window.scrollTo({
            top: 1000,
            behavior: "smooth"
        });
        // console.log(mainPage,"=")
        return feturesBlock;
    });
    // main.append(featureSection)
    // console.log(main, '----')
    // return main
    // console.log(featureSection, '----')
    // let featureSection1 = featureSection
    // mainPage.append(
    //     heroBlock1,
    //     filterForm1,
    //     galleryBlock1,
    //     featureSection1, 
    //      reviewBlock1,
    //      servicesBlock1,
    //      )
    // console.log(mainPage)
    return featureSection;
}
 // function getIdFeature(itemRow) {
 // 	let rowFeature = itemRow.querySelectorAll(".col-lg-4 a")
 // 	for (let i = 0; i < rowFeature.length; i++) {
 // 		rowFeature[i].addEventListener("click", async function (elem) {
 // 			location.href = `${rowFeature[i].href}?` + rowFeature[i].id
 // 		});
 // 	};
 // };

},{"./pagination.js":"hN7NQ","./list-properties.js":"cNDET","../pages/main-page.js":"8PfDb","../main.js":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hN7NQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pagination", ()=>pagination);
var _listPropertiesJs = require("./list-properties.js");
async function pagination(page = 1, params = {}) {
    const divPagina = document.createElement("div");
    divPagina.classList.add("site-pagination");
    divPagina.innerHTML = "";
    let propertyData = params;
    if (JSON.stringify(params) === "{}") propertyData = await (0, _listPropertiesJs.getListProperties)(page, params);
    else propertyData = params;
    // window.scrollTo({ top: 1900, behavior: 'smooth' })
    if (propertyData["pages"] > 0) {
        let aPreview = document.createElement("a");
        let iLeft = document.createElement("i");
        aPreview.setAttribute("href", `?page=${propertyData["page"]}`);
        iLeft.classList.add("fa");
        iLeft.classList.add("fa-angle-left");
        aPreview.setAttribute("style", "color: transparent;");
        iLeft.setAttribute("style", "color: #717171;");
        aPreview.append(iLeft);
        let aNext = document.createElement("a");
        let iRight = document.createElement("i");
        aNext.setAttribute("href", `?page=${propertyData["page"] + 1}`);
        aNext.textContent = propertyData["page"] + 1;
        aNext.setAttribute("style", "color: transparent;");
        iRight.classList.add("fa");
        iRight.classList.add("fa-angle-right");
        iRight.setAttribute("style", "color: #717171;");
        aNext.append(iRight);
        let liNext = document.createElement("li");
        liNext.setAttribute("style", "display: inline-block");
        liNext.append(aNext);
        let ul = document.createElement("ul");
        ul.setAttribute("style", "list-style-type: none;");
        let liPreview = document.createElement("li");
        liPreview.setAttribute("style", "display: none;");
        aPreview.disabled = true;
        aPreview.textContent = 1;
        liPreview.append(aPreview);
        if (propertyData["page"] > 1) {
            aPreview.textContent = propertyData["page"] - 1;
            liPreview.style.display = "inline-block";
            aPreview.setAttribute("style", "color: transparent;");
            iLeft.setAttribute("style", "color: #717171; font-size: 18px; font-weight: 100");
            aPreview.append(iLeft);
            liPreview.append(aPreview);
        }
        ul.append(liPreview);
        for(let element = 1; element <= propertyData["pages"]; element++){
            let a = document.createElement("a");
            let li = document.createElement("li");
            a.setAttribute("style", "display='none'");
            li.setAttribute("style", "display='none'");
            if (element >= propertyData["page"] - 2 && element <= propertyData["page"] + 2) {
                a.setAttribute("href", `?page=${element}`);
                a.textContent = element;
                li.setAttribute("style", "display: inline-block");
                li.append(a);
                ul.append(li);
            }
            if (element == propertyData["page"]) {
                a.removeAttribute("href");
                a.style.color = "#d4d2d2";
            }
        }
        if (page == propertyData["pages"]) liNext.style.display = "none";
        ul.append(liNext);
        divPagina.append(ul);
    }
    // window.scrollTo({ top: 1900, behavior: 'smooth' })
    // if (divPagina.childNodes[0]) {
    //     let pages = divPagina.childNodes[0].children
    //     for (let link of pages){
    //         link.addEventListener('click', async function (e) {
    //             // e.preventDefault();
    //             let page = link.childNodes[0].textContent
    //             window.scrollTo({ top: 1900, behavior: 'smooth' })
    //             await feturesSection(page = +page)
    //         });
    //     };
    // };
    return divPagina;
}
 // let aCollect = Array.from(divGallery.childNodes).splice(1, divGallery.childNodes.length)
 //     let params;
 //     for (let link of aCollect){

},{"./list-properties.js":"cNDET","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"go77g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gallerySection", ()=>gallerySection) // import { filterFormSection } from './filter-form.js'
 // import { reviewSection } from "./review-slider.js"
 // import { servicesSection } from "./services.js"
 // import { heroSection } from "./hero.js"
 // import { mainSiteData } from "../main.js"
 // // import { headerSection, footerBlock, pageContainer } from '../main.js'
 // async function render(feturesBlock){
 //     const mainSite = await mainSiteData()
 //     // const app = document.querySelector("#app")
 //     const mainPage = await mainContainer()
 //     // const pageContainer =  getPageContainer()
 //     const heroBlock1 = await heroSection(mainSite)
 //     const filterForm1 = await filterFormSection()
 //     const reviewBlock1 = await reviewSection()
 //     const servicesBlock1 = await servicesSection(mainSite)
 //     pageContainer.innerHTML = ""
 //     mainPage.append(
 //         // heroBlock1,
 //         // filterForm1,
 //         feturesBlock, 
 //         // reviewBlock1,
 //         // servicesBlock1,
 //         )
 //     // console.log(pageContainer,"++++---==")
 //     pageContainer.append(mainPage1)
 //     return pageContainer
 //     // return mainPage1
 //     // app.append(
 //     //     headerSection, 
 //     //     // filterForm,
 //     //     pageContainer,
 //     //     footerBlock,
 //     //     )
 //     // return app
 // }
;
var _feturesSectionJs = require("./fetures-section.js");
var _mainPageJs = require("../pages/main-page.js");
var _mainJs = require("../main.js");
async function gallerySection() {
    const sectionGallery = document.createElement("section");
    sectionGallery.classList.add("gallery-section", "spad");
    let container = document.createElement("div");
    container.classList.add("container");
    let response = await fetch(`http://127.0.0.1:8000/api/v1/properties/count-sities`);
    const propertyData = await response.json();
    let popular = document.createElement("div");
    popular.classList.add("section-title", "text-center");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    h3.textContent = "Popular Places";
    p.textContent = "We understand the value and importance of place";
    popular.append(h3, p);
    container.append(popular);
    let divGallery = document.createElement("div");
    divGallery.classList.add("gallery");
    divGallery.setAttribute("style", "position: relative; height: 590px;");
    let divSizer = document.createElement("div");
    divSizer.classList.add("grid-sizer");
    divGallery.append(divSizer);
    propertyData["cities"].forEach(function(element, index) {
        let link = document.createElement("a");
        // link.setAttribute("href", "#")
        link.setAttribute("href", element[0]);
        link.setAttribute("data-setbg", `img/gallery/${index + 1}.jpg`);
        link.classList.add("gallery-item");
        link.classList.add("set-bg");
        if (index + 1 == 1) {
            link.classList.add("grid-long");
            link.setAttribute("style", `background-image: url(../img/gallery/${index + 1}.jpg); height: 570px; left: 580px; top: 0px;`);
        }
        if (index + 1 == 2) {
            link.classList.add("grid-wide");
            link.setAttribute("style", `background-image: url(../img/gallery/${index + 1}.jpg);`);
        }
        if (index + 1 == 3) link.setAttribute("style", `background-image: url(../img/gallery/${index + 1}.jpg); height: 270px; position: absolute; left: 0px; top: 300px;`);
        if (index + 1 == 4) link.setAttribute("style", `background-image: url(../img/gallery/${index + 1}.jpg); height: 270px; position: absolute; left: 290px; top: 300px;`);
        let divGiinfo = document.createElement("div");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        h3.textContent = element[0];
        p.textContent = `${element[1]} Properties`;
        divGiinfo.classList.add("gi-info");
        divGiinfo.append(h3, p);
        link.append(divGiinfo);
        divGallery.append(link);
    });
    container.append(divGallery);
    sectionGallery.append(container);
    let aCollect = Array.from(divGallery.childNodes).splice(1, divGallery.childNodes.length);
    let params;
    for (let link of aCollect)link.addEventListener("click", async function(e) {
        e.preventDefault();
        let cityName = link.children[0].children[0].textContent;
        let state = "";
        let flatHouse = 0;
        let rentSale = "";
        let room = 0;
        let page;
        params = {
            "city": cityName,
            "state": state,
            "category": flatHouse,
            "status": rentSale,
            "rooms": +room
        };
        // if (cityName) {
        //     let cityElem = document.querySelector("#inCity")
        //     cityElem.value = cityName
        // }
        sectionGallery.setAttribute("style", "display: none");
        let feturesBlock = await (0, _feturesSectionJs.feturesSection)(page, params);
        // console.log(feturesBlock,"---==")
        // await render(feturesBlock)
        (0, _mainJs.pageContainer).innerHTML = "";
        let feturesBlockNew = await (0, _mainPageJs.mainContainer)(feturesBlock, cityName);
        (0, _mainJs.pageContainer).append(feturesBlockNew);
        const slow = 2000;
        // window.scrollTo({ top: 1000, behavior: 'smooth' })
        scrollTo(1000, 2000);
    // getPageContainer(mainPage)
    // console.log(pageContainer,"+++")
    // mainPage.innerHTML = ""
    // mainPage.append(feturesBlock)
    // return mainPage
    // return feturesBlock
    });
    return sectionGallery;
}

},{"./fetures-section.js":"14Sqm","../pages/main-page.js":"8PfDb","../main.js":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9Rve":[function(require,module,exports) {
// Review section
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reviewSection", ()=>reviewSection);
async function reviewSection() {
    let response = await fetch("http://127.0.0.1:8000/api/v1/main_site/");
    const main_site = await response.json();
    let element = main_site["review"];
    const sectionReview = document.createElement("section");
    sectionReview.classList.add("review-section", "set-bg");
    // sectionReview.setAttribute("data-setbg", `${element["image"]}`)
    sectionReview.setAttribute("data-setbg", `../img/review-bg.jpg`);
    // sectionReview.setAttribute("style", `background-image: url(${element["image"]});`)
    sectionReview.setAttribute("style", `background-image: url(../img/review-bg.jpg);`);
    let divContaner = document.createElement("div");
    divContaner.classList.add("container");
    // let divslider = document.createElement("div")
    // divslider.setAttribute("id", "sl-slider")
    // // divslider.classList.add("single-list-slider")
    // divslider.classList.add("block-slider")
    // let divAreaSlider = document.createElement("div")
    // divAreaSlider.classList.add("block-area-slider")
    let reviewSlider = document.createElement("div");
    reviewSlider.classList.add("review-slider");
    element["reviewItems"].forEach(function(elem, idx) {
        let h5 = document.createElement("h5");
        let p = document.createElement("p");
        let span = document.createElement("span");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("span");
        div2.classList.add("rating");
        div4.classList.add("review-item");
        div3.classList.add("text-white");
        for(let num = 0; num < 5; num++){
            let i = document.createElement("i");
            i.classList.add("fa");
            i.classList.add("fa-star");
            div2.append(i);
        }
        p.textContent = elem["p"];
        h5.textContent = elem["h5"];
        span.textContent = elem["span"];
        let div = document.createElement("div");
        div.classList.add("clint-pic");
        div.classList.add("set-bg");
        div.setAttribute("data-setbg", `../img/review/1.jpg`);
        div.setAttribute("style", `background-image: url(../img/review/1.jpg);`);
        // div.setAttribute("data-setbg", `${elem["image"]}`)
        // div.setAttribute("style", `background-image: url(${elem["image"]});`)
        div3.append(div2, p, h5, span, div);
        div4.append(div3);
        reviewSlider.append(div4);
    });
    divContaner.append(reviewSlider);
    sectionReview.append(divContaner);
    return sectionReview;
}
 // export async function reviewSection() {
 //     let response = await fetch('http://127.0.0.1:8000/api/v1/main_site/');
 // 	const main_site = await response.json();
 //     let element = main_site["review"]
 //     const sectionReview = document.createElement("section")
 //     sectionReview.classList.add("review-section", "set-bg")
 //     // sectionReview.setAttribute("data-setbg", `${element["image"]}`)
 //     sectionReview.setAttribute("data-setbg", `../img/review-bg.jpg`)
 //     // sectionReview.setAttribute("style", `background-image: url(${element["image"]});`)
 //     sectionReview.setAttribute("style", `background-image: url(../img/review-bg.jpg);`)
 //     let divContaner = document.createElement("div")
 //     divContaner.classList.add("container")
 //     let reviewSlider = document.createElement("div")
 //     reviewSlider.classList.add("review-slider")
 //     reviewSlider.classList.add("owl-carousel")
 //     reviewSlider.classList.add("owl-item")
 //     reviewSlider.classList.add("owl-drag")
 //     reviewSlider.classList.add("owl-loaded")
 //     element["reviewItems"].forEach(function (elem, idx) {
 //         let h5 = document.createElement("h5")
 //         let p = document.createElement("p")
 //         let span = document.createElement("span")
 //         let div2 = document.createElement("div")
 //         let div3 = document.createElement("div")
 //         div2.classList.add("rating")
 //         div3.classList.add("review-item")
 //         div3.classList.add("text-white")
 //         for (let num = 0; num < 5; num++) {
 //             let i = document.createElement("i")
 //             i.classList.add("fa")
 //             i.classList.add("fa-star")
 //             div2.append(i)
 //         }
 //         p.textContent = elem["p"]
 //         h5.textContent = elem["h5"]
 //         span.textContent = elem["span"]
 //         let div = document.createElement("div")
 //         div.classList.add("clint-pic")
 //         div.classList.add("set-bg")
 //         // div.setAttribute("data-setbg", `${elem["image"]}`)
 //         div.setAttribute("data-setbg", `../img/review-bg.jpg`)
 //         // div.setAttribute("style", `background-image: url(${elem["image"]});`)
 //         div.setAttribute("style", `background-image: url(../img/review-bg.jpg);`)
 //         div3.append(p, h5, span, div, div2)
 //         reviewSlider.append(div3)
 //     });
 //     divContaner.append(reviewSlider)
 //     sectionReview.append(divContaner)
 //     // $('.review-slider').append(reviewSlider())
 //     return sectionReview
 //     };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ARAb":[function(require,module,exports) {
// Services section
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "servicesSection", ()=>servicesSection);
async function servicesSection(main_site) {
    let element = main_site["servicesSection"];
    // console.log(main_site)
    const sectionServices = document.createElement("section");
    sectionServices.classList.add("services-section", "spad", "set-bg");
    sectionServices.setAttribute("data-setbg", "../img/service-bg.jpg");
    sectionServices.setAttribute("style", "background-image: url(../img/service-bg.jpg);");
    let containerServices = document.createElement("container");
    containerServices.classList.add("container");
    let rowServices = document.createElement("div");
    rowServices.classList.add("row");
    let col6Services = document.createElement("div");
    col6Services.classList.add("col-lg-6");
    let img = document.createElement("img");
    // img.setAttribute("src", element["image"])
    img.setAttribute("src", "../img/service.jpg");
    img.setAttribute("alt", "service");
    col6Services.append(img);
    let col5Services = document.createElement("div");
    col5Services.classList.add("col-lg-5", "offset-lg-1", "pl-lg-0");
    let textServices = document.createElement("div");
    textServices.classList.add("section-title", "text-white");
    let h3Serv = document.createElement("h3");
    let pServ = document.createElement("p");
    h3Serv.textContent = element["h3"];
    pServ.textContent = element["p"];
    textServices.append(h3Serv, pServ);
    let servicesServices = document.createElement("div");
    servicesServices.classList.add("services");
    element["serviceItems"].forEach(function(element, idx) {
        let divServ = document.createElement("div");
        divServ.classList.add("service-item");
        let iServ = document.createElement("i");
        iServ.classList.add("fa");
        if (idx == 0) iServ.classList.add("fa-comments");
        if (idx == 1) iServ.classList.add("fa-home");
        if (idx == 2) iServ.classList.add("fa-briefcase");
        divServ.append(iServ);
        let div2 = document.createElement("div");
        let h5Serv = document.createElement("h5");
        let p2 = document.createElement("p");
        h5Serv.textContent = element["h5"];
        p2.textContent = element["p"];
        div2.classList.add("service-text");
        div2.append(h5Serv, p2);
        divServ.append(div2);
        servicesServices.append(divServ);
    });
    col5Services.append(textServices, servicesServices);
    rowServices.append(col6Services, col5Services);
    containerServices.append(rowServices);
    sectionServices.append(containerServices);
    return sectionServices;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eD0QE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Footer section
parcelHelpers.export(exports, "footerSection", ()=>footerSection);
var _clientsSliderJs = require("./clients-slider.js");
async function footerSection(main_site) {
    let element = main_site["footer"];
    let footer = document.createElement("footer");
    footer.classList.add("footer-section", "set-bg");
    footer.setAttribute("data-setbg", "../img/footer-bg.jpg");
    footer.setAttribute("style", "background-image: url(../img/footer-bg.jpg)");
    let footerContainer = document.createElement("div");
    footerContainer.classList.add("container");
    let rowElement = document.createElement("div");
    rowElement.classList.add("row");
    for(let idx = 0; idx < 4; idx++){
        let divCol = document.createElement("div");
        divCol.classList.add("col-lg-3");
        divCol.classList.add("col-md-6");
        divCol.classList.add("footer-widget");
        if (idx == 0) {
            let img = document.createElement("img");
            img.setAttribute("src", "../img/logo.png");
            // img.setAttribute("src", element["image"])
            img.setAttribute("alt", "logo");
            let p = document.createElement("p");
            p.textContent = element["p"];
            let divLinks = document.createElement("div");
            divLinks.classList.add("social");
            element["socialLinks"].forEach(function(elem, idx) {
                let a = document.createElement("a");
                a.setAttribute("href", elem);
                let i = document.createElement("i");
                i.classList.add("fa");
                if (idx == 0) i.classList.add("fa-facebook");
                if (idx == 1) i.classList.add("fa-twitter");
                if (idx == 2) i.classList.add("fa-instagram");
                if (idx == 3) i.classList.add("fa-pinterest");
                if (idx == 4) i.classList.add("fa-linkedin");
                a.append(i);
                divLinks.append(a);
            });
            divCol.append(img, p, divLinks);
        }
        rowElement.append(divCol);
        if (idx == 1) {
            let divContact = document.createElement("div");
            divContact.classList.add("contact-widget");
            let h5 = document.createElement("h5");
            h5.classList.add("fw-title");
            h5.textContent = "CONTACT US";
            divContact.append(h5);
            element["contacts"].forEach(function(elem, idx) {
                let p = document.createElement("p");
                let i = document.createElement("i");
                i.classList.add("fa");
                if (idx == 0) {
                    p.textContent = elem;
                    i.classList.add("fa-map-marker");
                }
                if (idx == 1) {
                    p.textContent = elem;
                    i.classList.add("fa-phone");
                }
                if (idx == 2) {
                    p.textContent = elem;
                    i.classList.add("fa-envelope");
                }
                if (idx == 3) {
                    p.textContent = elem;
                    i.classList.add("fa-clock-o");
                }
                p.prepend(i);
                divContact.append(p);
            });
            divCol.prepend(divContact);
        }
        if (idx == 2) {
            let divDouble = document.createElement("div");
            divDouble.classList.add("double-menu-widget");
            let h5 = document.createElement("h5");
            h5.classList.add("fw-title");
            h5.textContent = "POPULAR PLACES";
            divDouble.append(h5);
            let ul = document.createElement("ul");
            element["popularPlacesLinks"][0].forEach(function(elem, idx) {
                let li = document.createElement("li");
                let a = document.createElement("a");
                a.setAttribute("href", "https://ya.ru");
                a.textContent = elem["title"];
                li.append(a);
                ul.append(li);
            });
            divDouble.append(ul);
            let ul2 = document.createElement("ul");
            element["popularPlacesLinks"][1].forEach(function(elem, idx) {
                let li = document.createElement("li");
                let a = document.createElement("a");
                a.setAttribute("href", "https://ya.ru");
                a.textContent = elem["title"];
                li.append(a);
                ul2.append(li);
            });
            divDouble.append(ul2);
            divCol.append(divDouble);
        }
        rowElement.append(divCol);
        if (idx == 3) {
            let divNewslatter = document.createElement("div");
            divNewslatter.classList.add("newslatter-widget");
            let h5 = document.createElement("h5");
            h5.classList.add("fw-title");
            h5.textContent = "NEWSLETTER";
            let p = document.createElement("p");
            p.textContent = "Subscribe your email to get the latest news and new offer also discount";
            let form = document.createElement("form");
            form.classList.add("footer-newslatter-form");
            let input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("placeholder", "Email address");
            let button = document.createElement("button");
            let i = document.createElement("i");
            i.classList.add("fa");
            i.classList.add("fa-send");
            button.append(i);
            form.append(input, button);
            divNewslatter.append(h5, p, form);
            divCol.append(divNewslatter);
        }
        rowElement.append(divCol);
    }
    const clients = await (0, _clientsSliderJs.clientsSection)(main_site);
    const bottom = await footerBottom(main_site);
    footerContainer.append(rowElement, bottom);
    footer.append(clients, footerContainer);
    return footer;
}
async function footerBottom(main_site) {
    let element = main_site["footer"];
    let divBottom = document.createElement("div");
    divBottom.classList.add("footer-bottom");
    let nav = document.createElement("div");
    nav.classList.add("footer-nav");
    let divCopyright = document.createElement("div");
    divCopyright.classList.add("copyright");
    let p = document.createElement("p");
    p.innerHTML = `Copyright &copy ${new Date().getFullYear()} All rights reserved `;
    divCopyright.append(p);
    let ul = document.createElement("ul");
    element["footerBottom"].forEach(function(elem, idx) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href", "../img/logo.png");
        // a.setAttribute("href", elem["link"])
        a.textContent = elem["text"];
        li.append(a);
        ul.append(li);
    });
    nav.append(ul);
    divBottom.append(nav, divCopyright);
    return divBottom;
}

},{"./clients-slider.js":"iK566","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iK566":[function(require,module,exports) {
// Clients section 
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clientsSection", ()=>clientsSection);
async function clientsSection(main_site) {
    let element = main_site["clients"];
    const sectionSlider = document.createElement("section");
    sectionSlider.classList.add("clients-section");
    let containerSlider = document.createElement("div");
    containerSlider.classList.add("container", "clients-container");
    let clientsSlider = document.createElement("div");
    clientsSlider.classList.add("clients-slider");
    element.forEach(function(elem, idx) {
        let span = document.createElement("span");
        let link = document.createElement("a");
        link.setAttribute("href", "https://ya.ru");
        let img = document.createElement("img");
        img.setAttribute("src", `../img/partner/${idx + 1}.png`);
        // img.setAttribute("src", elem)
        img.setAttribute("alt", "client");
        span.classList.add("clients-img");
        link.append(img);
        span.append(link);
        clientsSlider.append(span);
    });
    containerSlider.append(clientsSlider);
    sectionSlider.append(containerSlider);
    return sectionSlider;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["46McK","1SICI"], "1SICI", "parcelRequire10c2")

//# sourceMappingURL=index.18dbc454.js.map
