/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 7093:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(9655);
;// CONCATENATED MODULE: ./src/plugin/report.ts
function reportWebVitals(onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        __webpack_require__.e(/* import() */ 736).then(__webpack_require__.bind(__webpack_require__, 8085)).then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
            onCLS(onPerfEntry);
            onFID(onPerfEntry);
            onFCP(onPerfEntry);
            onLCP(onPerfEntry);
            onTTFB(onPerfEntry);
        });
    }
}
/* harmony default export */ const report = (reportWebVitals);

// EXTERNAL MODULE: ./node_modules/observable-duck/build/observable-duck.mjs + 1 modules
var observable_duck = __webpack_require__(8561);
;// CONCATENATED MODULE: ./src/AppDuck.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class AppBase extends observable_duck/* Base */.XY {
    get quickTypes() {
        let Type;
        (function (Type) {
            Type[Type["UPDATE"] = 0] = "UPDATE";
        })(Type || (Type = {}));
        return Object.assign({}, Type);
    }
    get reducers() {
        const types = this.types;
        return {
            stamp: (0,observable_duck/* reduceFromPayload */.B6)(types.UPDATE, Date.now()),
            version: (state = '1.0') => state,
        };
    }
    watchUpdate(action$) {
        const duck = this;
        return action$.pipe((0,observable_duck/* filterAction */.Ot)(duck.types.UPDATE)).subscribe(() => {
            const state = duck.getState();
            console.log('App Updated!');
        });
    }
}
__decorate([
    (0,observable_duck/* StreamerMethod */.Q8)()
], AppBase.prototype, "watchUpdate", null);
class AppDuck extends AppBase {
    get quickTypes() {
        let Type;
        (function (Type) {
            Type[Type["UPDATE"] = 0] = "UPDATE";
        })(Type || (Type = {}));
        return Object.assign(Object.assign({}, super.quickTypes), Type);
    }
}

// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(9250);
;// CONCATENATED MODULE: ./src/routes/index/Template.tsx

function Index(props) {
    const { duck, store, dispatch } = props;
    const [state, setState] = react.useState(true);
    return (react.createElement(react.Fragment, null,
        react.createElement("h2", null, "Index Page")));
}

;// CONCATENATED MODULE: ./src/routes/index/Duck.ts
var Duck_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class Duck_Index extends observable_duck/* Base */.XY {
    get quickTypes() {
        let Type;
        (function (Type) {
            Type[Type["UPDATE"] = 0] = "UPDATE";
        })(Type || (Type = {}));
        return Object.assign({}, Type);
    }
    get reducers() {
        const types = this.types;
        return {
            stamp: (0,observable_duck/* reduceFromPayload */.B6)(types.UPDATE, Date.now()),
            version: (state = '1.0') => state,
        };
    }
    watchUpdate(action$) {
        const duck = this;
        return action$.pipe((0,observable_duck/* filterAction */.Ot)(duck.types.UPDATE)).subscribe(() => {
            const state = duck.getState();
            console.log('Personal Updated!');
        });
    }
}
Duck_decorate([
    (0,observable_duck/* StreamerMethod */.Q8)()
], Duck_Index.prototype, "watchUpdate", null);

;// CONCATENATED MODULE: ./src/plugin/logger.ts

let logger;
if (false) {}
else {
    logger = () => next => action => next(action);
}
/* harmony default export */ const plugin_logger = (logger);

;// CONCATENATED MODULE: ./src/routes/index/index.ts




/* harmony default export */ const index = (observable_duck/* Runtime */.r_.create(Duck_Index, { middlewares: [plugin_logger] }).connect(Index));

;// CONCATENATED MODULE: ./src/routes/about/Template.tsx

function About(props) {
    const { duck, store, dispatch } = props;
    const [state, setState] = react.useState(true);
    return (react.createElement(react.Fragment, null,
        react.createElement("h2", null, "About Page")));
}

;// CONCATENATED MODULE: ./src/routes/about/Duck.ts
var about_Duck_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class Duck_About extends observable_duck/* Base */.XY {
    get quickTypes() {
        let Type;
        (function (Type) {
            Type[Type["UPDATE"] = 0] = "UPDATE";
        })(Type || (Type = {}));
        return Object.assign({}, Type);
    }
    get reducers() {
        const types = this.types;
        return {
            stamp: (0,observable_duck/* reduceFromPayload */.B6)(types.UPDATE, Date.now()),
            version: (state = '1.0') => state,
        };
    }
    watchUpdate(action$) {
        const duck = this;
        return action$.pipe((0,observable_duck/* filterAction */.Ot)(duck.types.UPDATE)).subscribe(() => {
            const state = duck.getState();
            console.log('Personal Updated!');
        });
    }
}
about_Duck_decorate([
    (0,observable_duck/* StreamerMethod */.Q8)()
], Duck_About.prototype, "watchUpdate", null);

;// CONCATENATED MODULE: ./src/routes/about/index.ts




/* harmony default export */ const about = (observable_duck/* Runtime */.r_.create(Duck_About, { middlewares: [plugin_logger] }).connect(About));

;// CONCATENATED MODULE: ./src/routes/RegisteredRouter.tsx




function RegisteredRouter() {
    return react.createElement(react.Fragment, null,
        react.createElement(react_router_dist/* Routes */.Z5, null,
            react.createElement(react_router_dist/* Route */.AW, { path: "/" },
                react.createElement(react_router_dist/* Route */.AW, { index: true, Component: index }),
                react.createElement(react_router_dist/* Route */.AW, { path: "about", Component: about }),
                react.createElement(react_router_dist/* Route */.AW, { path: "*", element: react.createElement("section", null, "Page Not Found") }))));
}

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SettingOutlined.js + 1 modules
var SettingOutlined = __webpack_require__(4616);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 118 modules
var menu = __webpack_require__(5304);
;// CONCATENATED MODULE: ./src/components/layout/Menu.tsx




const items = [
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: react.createElement(SettingOutlined/* default */.Z, null),
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: react.createElement(dist/* Link */.rU, { to: '/' }, "Main"),
        key: 'main',
    },
    {
        label: react.createElement("a", { "data-nav": true, href: '/about' }, "About"),
        key: 'about-a',
    },
    {
        label: react.createElement(dist/* Link */.rU, { to: '/about' }, "About Link"),
        key: 'about',
    },
];
const AppMenu = () => {
    const [current, setCurrent] = react.useState('main');
    const onClick = (e) => {
        setCurrent(e.key);
    };
    return react.createElement(menu/* default */.Z, { onClick: onClick, selectedKeys: [current], mode: "horizontal", items: items });
};
/* harmony default export */ const Menu = (AppMenu);

// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js + 4 modules
var layout = __webpack_require__(712);
;// CONCATENATED MODULE: ./src/App.tsx







const { Header, Footer, Content } = layout["default"];
function App() {
    const { duck, store, dispatch } = (0,observable_duck/* useDuck */.KS)(AppDuck);
    return (react.createElement(layout["default"], { className: 'app-layout' },
        react.createElement(Header, { className: 'app-header' },
            react.createElement(Menu, null)),
        react.createElement(Content, { className: 'app-content' },
            react.createElement(RegisteredRouter, null)),
        react.createElement(Footer, { className: 'app-footer' }, "Footer")));
}

;// CONCATENATED MODULE: ./src/index.tsx





report(console.log);
client/* createRoot */.s(document.querySelector('#duck-app')).render(react.createElement(dist/* BrowserRouter */.VK, { basename: "example-duck-app" || 0 },
    react.createElement(App, null)));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [514,348,736], () => (__webpack_require__(7093)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;