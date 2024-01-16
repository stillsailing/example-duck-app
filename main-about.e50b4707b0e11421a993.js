"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[473],{

/***/ 677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about)
});

// EXTERNAL MODULE: ./node_modules/observable-duck/build/observable-duck.mjs + 1 modules
var observable_duck = __webpack_require__(8561);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/routes/about/Template.tsx

function About(props) {
    const { duck, store, dispatch } = props;
    const [state, setState] = react.useState(true);
    return (react.createElement(react.Fragment, null,
        react.createElement("h2", null, "About Page")));
}

;// CONCATENATED MODULE: ./src/routes/about/Duck.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
__decorate([
    (0,observable_duck/* StreamerMethod */.Q8)()
], Duck_About.prototype, "watchUpdate", null);

// EXTERNAL MODULE: ./src/plugin/logger.ts
var logger = __webpack_require__(9118);
;// CONCATENATED MODULE: ./src/routes/about/index.ts




/* harmony default export */ const about = (observable_duck/* Runtime */.r_.create(Duck_About, { middlewares: [logger/* default */.Z] }).connect(About));


/***/ })

}]);