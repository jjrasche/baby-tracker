function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_chart_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @models/chart-type */
    "./src/app/models/chart-type.ts");
    /* harmony import */


    var _services_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/entry.service */
    "./src/app/services/entry.service.ts");
    /* harmony import */


    var _services_nap_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/nap.service */
    "./src/app/services/nap.service.ts");
    /* harmony import */


    var _services_csv_parser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/csv-parser.service */
    "./src/app/services/csv-parser.service.ts");
    /* harmony import */


    var _services_local_file_reader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/local-file-reader.service */
    "./src/app/services/local-file-reader.service.ts");
    /* harmony import */


    var _services_chart_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/chart-data.service */
    "./src/app/services/chart-data.service.ts");
    /* harmony import */


    var _services_data_set_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/data-set.service */
    "./src/app/services/data-set.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _word_cloud_word_cloud_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./word-cloud/word-cloud.component */
    "./src/app/word-cloud/word-cloud.component.ts");
    /* harmony import */


    var angular_google_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular-google-charts */
    "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");

    function AppComponent_mat_spinner_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function AppComponent_ng_container_1_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chart_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", chart_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chart_r4.value.title, " ");
      }
    }

    function AppComponent_ng_container_1_ng_container_4_bm_word_cloud_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "bm-word-cloud", 7);
      }

      if (rf & 2) {
        var chart_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", chart_r5.options);
      }
    }

    function AppComponent_ng_container_1_ng_container_4_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "google-chart", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function AppComponent_ng_container_1_ng_container_4_ng_container_4_Template_google_chart_select_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var chart_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          return chart_r5.selectMethod($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var chart_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", chart_r5.type)("columnNames", chart_r5.columns)("data", chart_r5.data)("options", chart_r5.options)("dynamicResize", true);
      }
    }

    function AppComponent_ng_container_1_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_1_ng_container_4_bm_word_cloud_3_Template, 1, 1, "bm-word-cloud", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_container_1_ng_container_4_ng_container_4_Template, 2, 5, "ng-container", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var chart_r5 = ctx.ngIf;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chart_r5.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", chart_r5.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r3.ChartType.WordCloud);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.JSON.stringify(chart_r5.data));
      }
    }

    function AppComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_1_Template_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.selectedChart$ = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_1_option_2_Template, 2, 2, "option", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_container_1_ng_container_4_Template, 7, 4, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selectedChart$);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.charts);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx_r1.selectedChart$));
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(entryService, napService, parserService, fileReader, cdr, chartDataService, dataSetService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.entryService = entryService;
        this.napService = napService;
        this.cdr = cdr;
        this.chartDataService = chartDataService;
        this.dataSetService = dataSetService;
        this.loading = true;
        this.height = "100%";
        this.width = "100%";
        this.JSON = JSON;
        this.ChartType = _models_chart_type__WEBPACK_IMPORTED_MODULE_1__["ChartType"]; // google.load("visualization", "1.0", {packages: ["table"]});
        // google.setOnLoadCallback(this.initData.bind(this));
        // chartsLoaderService.onReady.pipe(take(1)).subscribe(() => (this.initData()));

        fileReader.readFile("assets/data/baby-data.csv").subscribe(function (csvString) {
          var data = parserService.ParseData(csvString);

          _this.entryService.addEntries(data);

          _this.loading = false;
          cdr.markForCheck();
        });
        this.initData();
        this.selectedChart$.subscribe(function () {
          return cdr.markForCheck();
        });
      }

      _createClass(AppComponent, [{
        key: "selectHandler",
        value: function selectHandler(item) {
          this.selectedChart$.value.selectMethod(item);
        }
      }, {
        key: "initData",
        value: function initData() {
          this.charts = [this.chartDataService.createWordCloud("Diary Word Cloud", this.dataSetService.diaryWordFrequency()), this.chartDataService.createLineChart(this.dataSetService.morningWakeUptime("Charlie")), this.chartDataService.createLineChart(this.dataSetService.morningWakeUptime("Theodore")), this.chartDataService.createWordCloud("All Entered Text Word Cloud", this.dataSetService.descriptionsPlusDiaryWordFrequency()), this.chartDataService.createWordCloud("Non-Diary Word Cloud", this.dataSetService.nonDiaryWordFrequency()), this.chartDataService.createLineChart(this.dataSetService.urineAmount("Charlie")), this.chartDataService.createLineChart(this.dataSetService.pooAmount("Charlie")), this.chartDataService.createScatterChart(this.dataSetService.morningWakeUptime("Charlie"), this.dataSetService.bedTimeStart(true, "Charlie")), this.chartDataService.createScatterChart(this.dataSetService.morningWakeUptime("Theodore"), this.dataSetService.bedTimeStart(true, "Theodore"))];
          this.selectedChart$ = this.charts[0];
          this.cdr.markForCheck();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nap_service__WEBPACK_IMPORTED_MODULE_3__["NapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_csv_parser_service__WEBPACK_IMPORTED_MODULE_4__["CsvParserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_file_reader_service__WEBPACK_IMPORTED_MODULE_5__["LocalFileReader"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chart_data_service__WEBPACK_IMPORTED_MODULE_6__["ChartDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_set_service__WEBPACK_IMPORTED_MODULE_7__["DataSetService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["bm-root"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["id", "graphSelect", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [2, "width", "100%", "height", "100%", 3, "ngSwitch"], [3, "options", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "options"], [2, "width", "100%", "height", "100%", 3, "type", "columnNames", "data", "options", "dynamicResize", "select"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 7, 5, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], _word_cloud_word_cloud_component__WEBPACK_IMPORTED_MODULE_11__["WordCloudComponent"], angular_google_charts__WEBPACK_IMPORTED_MODULE_12__["GoogleChartComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "bm-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.css"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _services_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]
        }, {
          type: _services_nap_service__WEBPACK_IMPORTED_MODULE_3__["NapService"]
        }, {
          type: _services_csv_parser_service__WEBPACK_IMPORTED_MODULE_4__["CsvParserService"]
        }, {
          type: _services_local_file_reader_service__WEBPACK_IMPORTED_MODULE_5__["LocalFileReader"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _services_chart_data_service__WEBPACK_IMPORTED_MODULE_6__["ChartDataService"]
        }, {
          type: _services_data_set_service__WEBPACK_IMPORTED_MODULE_7__["DataSetService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var angular_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-google-charts */
    "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _extensions_string_extensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./extensions/string.extensions */
    "./src/app/extensions/string.extensions.ts");
    /* harmony import */


    var _extensions_string_extensions__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(_extensions_string_extensions__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _extensions_array_extensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./extensions/array.extensions */
    "./src/app/extensions/array.extensions.ts");
    /* harmony import */


    var _extensions_date_extensions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./extensions/date.extensions */
    "./src/app/extensions/date.extensions.ts");
    /* harmony import */


    var _extensions_obesrvable_extensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./extensions/obesrvable.extensions */
    "./src/app/extensions/obesrvable.extensions.ts");
    /* harmony import */


    var _word_cloud_word_cloud_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./word-cloud/word-cloud.component */
    "./src/app/word-cloud/word-cloud.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_6__["GoogleChartsModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _word_cloud_word_cloud_component__WEBPACK_IMPORTED_MODULE_13__["WordCloudComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_6__["GoogleChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _word_cloud_word_cloud_component__WEBPACK_IMPORTED_MODULE_13__["WordCloudComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_6__["GoogleChartsModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/column-configs.ts":
  /*!***********************************!*\
    !*** ./src/app/column-configs.ts ***!
    \***********************************/

  /*! exports provided: napsPerDayColumns, activityTimelineColumns, WokeUpVsBedTime */

  /***/
  function srcAppColumnConfigsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "napsPerDayColumns", function () {
      return napsPerDayColumns;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "activityTimelineColumns", function () {
      return activityTimelineColumns;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WokeUpVsBedTime", function () {
      return WokeUpVsBedTime;
    });

    var napsPerDayColumns = [{
      label: "Date",
      type: "date"
    }, {
      label: "Number of Naps",
      type: "number"
    }];
    var activityTimelineColumns = [{
      type: "string",
      id: "Day"
    }, {
      type: "string",
      id: "Activity"
    }, {
      type: "date",
      id: "Start"
    }, {
      type: "date",
      id: "End"
    }];
    var WokeUpVsBedTime = [{
      type: "timeofday",
      id: "startTime",
      label: "Start Time"
    }, {
      type: "timeofday",
      id: "endTime",
      label: "End Time"
    }, {
      role: "style"
    }, {
      role: "tooltip"
    }];
    /***/
  },

  /***/
  "./src/app/extensions/array.extensions.ts":
  /*!************************************************!*\
    !*** ./src/app/extensions/array.extensions.ts ***!
    \************************************************/

  /*! exports provided: SortDirection, countAggregateFunction, sumPropertyAggregateFunction */

  /***/
  function srcAppExtensionsArrayExtensionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortDirection", function () {
      return SortDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "countAggregateFunction", function () {
      return countAggregateFunction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sumPropertyAggregateFunction", function () {
      return sumPropertyAggregateFunction;
    });
    /* harmony import */


    var _services_factory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../services/factory.service */
    "./src/app/services/factory.service.ts"); // tslint:disable:no-string-literal


    var SortDirection;

    (function (SortDirection) {
      SortDirection[SortDirection["Ascending"] = 0] = "Ascending";
      SortDirection[SortDirection["Descending"] = 1] = "Descending";
    })(SortDirection || (SortDirection = {}));

    var countAggregateFunction = function countAggregateFunction(arr, groupObject) {
      groupObject["count"] = arr.length;
    };

    var sumPropertyAggregateFunction = function sumPropertyAggregateFunction(property) {
      return function (arr, groupObject) {
        var sum = arr.reduce(function (acc, curr) {
          return acc + curr[property];
        }, 0);
        groupObject["sum"] = sum;
      };
    };

    Array.prototype.selectGroupByAndAggregate = function (properties, aggFunctions) {
      var groupMap = this.groupByProperties(properties);
      var groupedWithCount = Object.keys(groupMap).map(function (key) {
        return groupMap[key];
      }).map(function (group) {
        var ret = {};
        properties.forEach(function (prop) {
          return ret[prop.toString()] = group[0][prop.toString()];
        });
        aggFunctions.forEach(function (aggFunc) {
          return aggFunc(group, ret);
        });
        return ret;
      });
      return groupedWithCount;
    };

    Array.prototype.groupByProperties = function (properties) {
      var groupMethod = function groupMethod(e) {
        return properties.map(function (prop) {
          return e[prop].toString();
        }).join("-");
      };

      return this.groupBy(groupMethod);
    };

    Array.prototype.groupBy = function (getGroupValue) {
      return this.reduce(function (rv, x) {
        var key = getGroupValue(x); // the immutable solved one issue where, but limits what this comes out as.

        var factory = new _services_factory_service__WEBPACK_IMPORTED_MODULE_0__["FactoryService"](x.constructor);
        var immutableCopy = factory.getNew(x);
        (rv[key] = rv[key] || []).push(immutableCopy);
        return rv;
      }, {});
    };

    Array.prototype.sortByProperty = function (property) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SortDirection.Ascending;
      var sorted = this.sort(function (a, b) {
        if (direction === SortDirection.Ascending) {
          return a[property] - b[property];
        } else {
          return b[property] - a[property];
        }
      });
      return sorted;
    };

    Array.prototype.unique = function () {
      // tslint:disable-next-line:triple-equals
      var uniqueItems = [];
      return this.filter(function (item) {
        var stringified = JSON.stringify(item);

        if (!uniqueItems.find(function (ui) {
          return ui === stringified;
        })) {
          uniqueItems.push(stringified);
          return true;
        }

        return false;
      });
    };

    Array.prototype.last = function () {
      return this[this.length - 1];
    };

    Array.prototype.first = function () {
      return this[0];
    };

    Array.prototype.getDateRange = function () {
      var sortedArray = this.sort();
      return [sortedArray.last(), sortedArray[0]];
    };
    /***/

  },

  /***/
  "./src/app/extensions/date.extensions.ts":
  /*!***********************************************!*\
    !*** ./src/app/extensions/date.extensions.ts ***!
    \***********************************************/

  /*! exports provided: defaultBaseDateString, DateRange */

  /***/
  function srcAppExtensionsDateExtensionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultBaseDateString", function () {
      return defaultBaseDateString;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateRange", function () {
      return DateRange;
    });
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

    var defaultBaseDateString = "2000-1-1";

    var DateRange = function DateRange() {
      _classCallCheck(this, DateRange);
    };

    Date.prototype.addDays = function (numDays) {
      var tempDate = new Date(this);
      tempDate.setDate(tempDate.getDate() + numDays);
      return tempDate;
    };

    Date.prototype.daysBetween = function (d) {
      return Math.abs(moment__WEBPACK_IMPORTED_MODULE_0__(this).diff(moment__WEBPACK_IMPORTED_MODULE_0__(d), "days"));
    };

    Date.prototype.yearsBetween = function (d) {
      var a = this.getFullYear();
      var b = d.getFullYear();
      return Math.abs(a - b);
    };

    Date.prototype.time = function () {
      var time = new Date(defaultBaseDateString);
      time.setHours(this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
      return time;
    };

    Date.prototype.dateOnly = function () {
      var dateOnly = new Date(this);
      dateOnly.setHours(0, 0, 0, 0);
      return dateOnly;
    };

    Date.prototype.sameMonth = function (monthDate) {
      return this.getMonth() === monthDate.getMonth();
    };

    Date.prototype.sameDate = function (date) {
      return this.getDate() === date.getDate() && this.sameMonth(date);
    };

    Date.prototype.convertToChartDateStringDay = function () {
      var year = this.getFullYear();
      var month = this.getMonth();
      var date = this.getDate();
      return "Date(".concat(year, ", ").concat(month, ", ").concat(date, ", 0, 0, 0, 0)");
    };

    Date.prototype.convertToChartDateStringTime = function () {
      var year = this.getFullYear();
      var month = this.getMonth();
      var date = this.getDate();
      var hours = this.getHours();
      var minutes = this.getMinutes();
      return "Date(".concat(year, ", ").concat(month, ", ").concat(date, ", ").concat(hours, ", ").concat(minutes, ", 0, 0)");
    };

    Date.prototype.epoch = function () {
      return this.valueOf();
    };

    Date.prototype.compareDate = function (d) {
      if (d.getTime() === this.getTime()) {
        return 0;
      }

      if (d > this) {
        return 1;
      }

      if (d < this) {
        return -1;
      }
    };

    Date.prototype.getTimeOfDayObject = function () {
      return [this.getHours(), this.getMinutes(), this.getSeconds()];
    };

    Date.prototype.getChartDateTime = function () {
      return moment__WEBPACK_IMPORTED_MODULE_0__(this).format("ddd MMM D");
    };

    Date.prototype.minutesSinceStartOfDay = function () {
      var dayStart = this.dateOnly();
      var diff = moment__WEBPACK_IMPORTED_MODULE_0__(this).diff(moment__WEBPACK_IMPORTED_MODULE_0__(dayStart), "minutes");
      return Math.abs(diff);
    };

    Date.prototype.minutesUntilEndOfDay = function () {
      var dayEnd = this.dateOnly().addDays(1);
      var diff = moment__WEBPACK_IMPORTED_MODULE_0__(this).diff(moment__WEBPACK_IMPORTED_MODULE_0__(dayEnd), "minutes");
      return Math.abs(diff);
    };
    /***/

  },

  /***/
  "./src/app/extensions/obesrvable.extensions.ts":
  /*!*****************************************************!*\
    !*** ./src/app/extensions/obesrvable.extensions.ts ***!
    \*****************************************************/

  /*! no exports provided */

  /***/
  function srcAppExtensionsObesrvableExtensionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.toBehaviorSubject = function () {
      var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](initial);
      this.subscribe({
        complete: function complete() {
          console.log("complete");
          subject.complete();
        },
        error: function error(x) {
          console.log("error");
          subject.error(x);
        },
        next: function next(x) {
          console.log("next");
          subject.next(x);
        }
      });
      return subject;
    };
    /***/

  },

  /***/
  "./src/app/extensions/string.extensions.ts":
  /*!*************************************************!*\
    !*** ./src/app/extensions/string.extensions.ts ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function srcAppExtensionsStringExtensionsTs(module, exports) {
    String.prototype.capitalizeFirstLetter = function () {
      return this.charAt(0).toUpperCase() + this.slice(1);
    };

    String.prototype.isNumeric = function () {
      return !isNaN(this) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(this)); // ...and ensure strings of whitespace fail
    };
    /***/

  },

  /***/
  "./src/app/models/chart-type.ts":
  /*!**************************************!*\
    !*** ./src/app/models/chart-type.ts ***!
    \**************************************/

  /*! exports provided: ChartType */

  /***/
  function srcAppModelsChartTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartType", function () {
      return ChartType;
    }); // dupliciate from angular-google-charts --> chart-type.model.ts


    var ChartType = {
      AnnotationChart: "AnnotationChart",
      AreaChart: "AreaChart",
      Bar: "Bar",
      BarChart: "BarChart",
      BubbleChart: "BubbleChart",
      Calendar: "Calendar",
      CandlestickChart: "CandlestickChart",
      ColumnChart: "ColumnChart",
      ComboChart: "ComboChart",
      PieChart: "PieChart",
      Gantt: "Gantt",
      Gauge: "Gauge",
      GeoChart: "GeoChart",
      Histogram: "Histogram",
      Line: "Line",
      LineChart: "LineChart",
      Map: "Map",
      OrgChart: "OrgChart",
      Sankey: "Sankey",
      Scatter: "Scatter",
      ScatterChart: "ScatterChart",
      SteppedAreaChart: "SteppedAreaChart",
      Table: "Table",
      Timeline: "Timeline",
      TreeMap: "TreeMap",
      WordTree: "wordtree",
      // custom
      WordCloud: "WordCloud"
    };
    /***/
  },

  /***/
  "./src/app/models/datumn.ts":
  /*!**********************************!*\
    !*** ./src/app/models/datumn.ts ***!
    \**********************************/

  /*! exports provided: Datumn */

  /***/
  function srcAppModelsDatumnTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Datumn", function () {
      return Datumn;
    });

    var Datumn =
    /*#__PURE__*/
    function () {
      function Datumn(time, child, data) {
        _classCallCheck(this, Datumn);

        this.time = time;
        this.child = child;
        this.data = data;
      }

      _createClass(Datumn, [{
        key: "match",
        value: function match(prospect) {
          return this.child === prospect.child && this.time.sameDate(prospect.time);
        }
      }]);

      return Datumn;
    }();
    /***/

  },

  /***/
  "./src/app/models/diaper.ts":
  /*!**********************************!*\
    !*** ./src/app/models/diaper.ts ***!
    \**********************************/

  /*! exports provided: DiaperEntry */

  /***/
  function srcAppModelsDiaperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiaperEntry", function () {
      return DiaperEntry;
    });
    /* harmony import */


    var _models_entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @models/entry */
    "./src/app/models/entry.ts");

    var DiaperSize;

    (function (DiaperSize) {
      DiaperSize[DiaperSize["Small"] = 1] = "Small";
      DiaperSize[DiaperSize["Medium"] = 3] = "Medium";
      DiaperSize[DiaperSize["Large"] = 5] = "Large";
    })(DiaperSize || (DiaperSize = {}));

    var DiaperEntry =
    /*#__PURE__*/
    function (_models_entry__WEBPAC) {
      _inherits(DiaperEntry, _models_entry__WEBPAC);

      function DiaperEntry(entry) {
        var _this2;

        _classCallCheck(this, DiaperEntry);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DiaperEntry).call(this, entry));
        var hasPoo = ["BM", "BM+Wet"].includes(entry.extraData);
        var hasPee = ["Wet", "BM+Wet"].includes(entry.extraData);
        _this2.overallSize = entry.text.includes("(large)") ? DiaperSize.Large : entry.text.includes("(medium)") ? DiaperSize.Medium : DiaperSize.Small;
        _this2.pooSize = hasPoo ? _this2.overallSize : null;
        _this2.peeSize = hasPee ? _this2.overallSize : null;
        return _this2;
      }

      return DiaperEntry;
    }(_models_entry__WEBPACK_IMPORTED_MODULE_0__["Entry"]);
    /***/

  },

  /***/
  "./src/app/models/entry.ts":
  /*!*********************************!*\
    !*** ./src/app/models/entry.ts ***!
    \*********************************/

  /*! exports provided: Entry */

  /***/
  function srcAppModelsEntryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Entry", function () {
      return Entry;
    });

    var Entry =
    /*#__PURE__*/
    function () {
      function Entry(entry) {
        _classCallCheck(this, Entry);

        this.startTime = entry.startTime;
        this.endTime = entry.endTime;
        this.activity = entry.activity;
        this.duration = entry.duration;
        this.quantity = entry.quantity;
        this.extraData = entry.extraData;
        this.text = entry.text;
        this.notes = entry.notes;
        this.caregiver = entry.caregiver;
        this.childName = entry.childName;
      }

      _createClass(Entry, [{
        key: "getNormalizedStartEndTimes",
        value: function getNormalizedStartEndTimes(focusDate) {
          var focusDay = focusDate.getDate();
          var startDay = this.startTime.getDate();
          var endDay = this.endTime.getDate();
          var start = this.startTime.time();
          var end = this.endTime.time();

          if (focusDay === startDay && startDay !== endDay) {
            start = this.startTime.time();
            end = this.endTime.time().addDays(1);
          } else if (focusDay === endDay && startDay !== endDay) {
            // starts in previous day
            start = this.startTime.time().addDays(-1);
            end = this.endTime.time();
          }

          return [start, end];
        }
      }, {
        key: "entryDate",
        get: function get() {
          return this.startTime.dateOnly();
        }
      }, {
        key: "startDate",
        get: function get() {
          return this.startTime.dateOnly();
        }
      }, {
        key: "endDate",
        get: function get() {
          return this.endTime.dateOnly();
        }
      }, {
        key: "minutes",
        get: function get() {
          return this.startTime.getHours() * 60 + this.startTime.getMinutes();
        }
      }]);

      return Entry;
    }();
    /***/

  },

  /***/
  "./src/app/models/sleep.ts":
  /*!*********************************!*\
    !*** ./src/app/models/sleep.ts ***!
    \*********************************/

  /*! exports provided: MinutesInHour, fullCycle, nightTimeStart, nightTimeEnd, SleepEntry */

  /***/
  function srcAppModelsSleepTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinutesInHour", function () {
      return MinutesInHour;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fullCycle", function () {
      return fullCycle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nightTimeStart", function () {
      return nightTimeStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nightTimeEnd", function () {
      return nightTimeEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SleepEntry", function () {
      return SleepEntry;
    });
    /* harmony import */


    var _models_entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @models/entry */
    "./src/app/models/entry.ts");

    var MinutesInHour = 60;
    var fullCycle = 42;

    var nightTimeStart = function nightTimeStart() {
      return 18 * MinutesInHour;
    };

    var nightTimeEnd = function nightTimeEnd() {
      return 7 * MinutesInHour;
    };

    var SleepEntry =
    /*#__PURE__*/
    function (_models_entry__WEBPAC2) {
      _inherits(SleepEntry, _models_entry__WEBPAC2);

      function SleepEntry(entry) {
        var _this3;

        _classCallCheck(this, SleepEntry);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(SleepEntry).call(this, entry));
        _this3.sleepType = nightTimeStart() < _this3.minutes || _this3.minutes < nightTimeEnd() ? "sleep" : "nap";
        _this3.fullCycle = _this3.duration > fullCycle ? true : false;
        return _this3;
      }

      return SleepEntry;
    }(_models_entry__WEBPACK_IMPORTED_MODULE_0__["Entry"]);
    /***/

  },

  /***/
  "./src/app/models/styel-method.ts":
  /*!****************************************!*\
    !*** ./src/app/models/styel-method.ts ***!
    \****************************************/

  /*! exports provided: getChildColor, getOpacity */

  /***/
  function srcAppModelsStyelMethodTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getChildColor", function () {
      return getChildColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getOpacity", function () {
      return getOpacity;
    }); // assume a sorted Datumn Array


    var getChildColor = function getChildColor(d1) {
      var color = d1.child === "Charlie" ? "red" : "blue";
      return "color: ".concat(color);
    };

    var getOpacity = function getOpacity(d1, d2, d1All) {
      var firstDate = d1All.first().time;
      var lastDate = d1All.last().time;
      var dateRange = firstDate.daysBetween(lastDate);
      return "fill-opacity: " + (firstDate.daysBetween(d1.time) / dateRange).toString();
    };
    /***/

  },

  /***/
  "./src/app/models/tool-tip-method.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/tool-tip-method.ts ***!
    \*******************************************/

  /*! exports provided: defaultToolTipMethod, lineChartTimeOfDayToolTip, lineChartNumberToolTip, scatterChartTimeOfDayToolTip */

  /***/
  function srcAppModelsToolTipMethodTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultToolTipMethod", function () {
      return defaultToolTipMethod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lineChartTimeOfDayToolTip", function () {
      return lineChartTimeOfDayToolTip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lineChartNumberToolTip", function () {
      return lineChartNumberToolTip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scatterChartTimeOfDayToolTip", function () {
      return scatterChartTimeOfDayToolTip;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var defaultToolTipMethod = function defaultToolTipMethod(d1, d2) {
      return "  Something       something else\n            ".concat(d1.data, "     ").concat(d2.data);
    };

    var lineChartTimeOfDayToolTip = function lineChartTimeOfDayToolTip(d1) {
      return "".concat(new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en-US").transform(d1.time, "fullDate"), "  <-->  ").concat(d1.data[0], ":").concat(d1.data[1].toString().padStart(2, "0"));
    };

    var lineChartNumberToolTip = function lineChartNumberToolTip(d1) {
      return "".concat(new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en-US").transform(d1.time, "fullDate"), "  <-->  ").concat(d1.data);
    };

    var scatterChartTimeOfDayToolTip = function scatterChartTimeOfDayToolTip(d1, d2) {
      return "".concat(getStringFromDateObjectFormat(d2.data), "  <-->  ").concat(getStringFromDateObjectFormat(d1.data));
    };

    var getStringFromDateObjectFormat = function getStringFromDateObjectFormat(timeOfDayObject) {
      return "".concat(timeOfDayObject[0], ":").concat(timeOfDayObject[1].toString().padStart(2, "0"));
    };
    /***/

  },

  /***/
  "./src/app/services/chart-data.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/chart-data.service.ts ***!
    \************************************************/

  /*! exports provided: ChartDataService */

  /***/
  function srcAppServicesChartDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartDataService", function () {
      return ChartDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_styel_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @models/styel-method */
    "./src/app/models/styel-method.ts");
    /* harmony import */


    var _models_tool_tip_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @models/tool-tip-method */
    "./src/app/models/tool-tip-method.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_chart_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @models/chart-type */
    "./src/app/models/chart-type.ts");
    /* harmony import */


    var _nap_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nap.service */
    "./src/app/services/nap.service.ts");
    /* harmony import */


    var _timeline_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./timeline.service */
    "./src/app/services/timeline.service.ts");
    /* harmony import */


    var _data_set_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./data-set.service */
    "./src/app/services/data-set.service.ts");

    var ChartDataService =
    /*#__PURE__*/
    function () {
      function ChartDataService(napService, timelineService, dataSetService) {
        _classCallCheck(this, ChartDataService);

        this.napService = napService;
        this.timelineService = timelineService;
        this.dataSetService = dataSetService;
      } // createSleepStackedChart(child: Child): ChartData {
      //   return {
      //     type: "ColumnChart",
      //     title: `sleep stacked - ${child}`,
      //     columns: ["date", "sleep", "naps"],
      //     options: {
      //       isStacked: true,
      //       explorer: {
      //         actions: ["dragToPan"],
      //         axis: "horizontal",
      //       },
      //       hAxis: {
      //         viewWindow: {
      //           min: (new Date()).addDays(-30),
      //           max: new Date()
      //         },
      //       },
      //       vAxis: {
      //         title: "minutes",
      //         viewWindow: {
      //           min: 0,
      //           max: 1100
      //         },
      //       },
      //     },
      //     data$: this.napService.napTimeByChildChartData(child)
      //   };
      // }
      // createActivityTimelienChart(child: Child): ChartData {
      //   return {
      //     type: "Timeline",
      //     title: `timeline - ${child}`,
      //     columns: activityTimelineColumns,
      //     data$: this.timelineService.getTimelineByChildChartData(child)
      //   };
      // }

      /**
       * need
       *  - title
       *  - data type
       *  - data
       */


      _createClass(ChartDataService, [{
        key: "createScatterChart",
        value: function createScatterChart(col1, col2) {
          var _this4 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([col1, col2]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) {
            return data[0] != null && data[1] != null;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var column1 = data[0];
            var column2 = data[1];
            return {
              type: "ScatterChart",
              title: " ".concat(column1.title, " vs. ").concat(column2.title),
              columns: [{
                type: column1.dataType
              }, {
                type: column2.dataType
              }, {
                role: "style"
              }, {
                role: "tooltip"
              }],
              options: {
                explorer: {
                  actions: ["dragToZoom", "rightClickToReset"]
                },
                hAxis: {
                  title: column1.title
                },
                vAxis: {
                  title: column2.title
                },
                tooltip: {
                  isHtml: true
                },
                trendlines: {
                  0: {
                    type: "exponential",
                    degree: 12,
                    visibleInLegend: true
                  }
                }
              },
              data: _this4.dataSetService.mergeDataSets(column1.data, column2.data, [_models_styel_method__WEBPACK_IMPORTED_MODULE_1__["getChildColor"], _models_styel_method__WEBPACK_IMPORTED_MODULE_1__["getOpacity"]], _models_tool_tip_method__WEBPACK_IMPORTED_MODULE_2__["scatterChartTimeOfDayToolTip"])
            };
          })).toBehaviorSubject();
        }
      }, {
        key: "createLineChart",
        value: function createLineChart(col) {
          return col.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (column) {
            return column != null;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (column) {
            return {
              type: "LineChart",
              title: " ".concat(column.title),
              columns: [{
                type: "datetime"
              }, {
                type: column.dataType
              }, {
                role: "style"
              }, {
                role: "tooltip"
              }],
              options: {
                explorer: {
                  actions: ["dragToPan", "rightClickToReset"]
                },
                // explorer: { actions: ["dragToZoom", "rightClickToReset"] },
                hAxis: {
                  title: column.title
                },
                trendlines: {
                  0: {
                    type: "polynomial",
                    degree: 25
                  }
                },
                tooltip: {
                  isHtml: true
                }
              },
              // data: column.data.map(d => [d.time.dateOnly(), d.data, getChildColor(d)])
              data: column.data.map(function (d) {
                return [d.time.dateOnly(), d.data, Object(_models_styel_method__WEBPACK_IMPORTED_MODULE_1__["getChildColor"])(d), column.dataType === "timeofday" ? Object(_models_tool_tip_method__WEBPACK_IMPORTED_MODULE_2__["lineChartTimeOfDayToolTip"])(d) : Object(_models_tool_tip_method__WEBPACK_IMPORTED_MODULE_2__["lineChartNumberToolTip"])(d)];
              })
            };
          })).toBehaviorSubject();
        }
      }, {
        key: "createWordCloud",
        value: function createWordCloud(title, options) {
          return options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (opt) {
            return opt != null;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (opt) {
            return {
              type: _models_chart_type__WEBPACK_IMPORTED_MODULE_5__["ChartType"].WordCloud,
              title: title,
              options: opt
            };
          })).toBehaviorSubject();
        }
      }]);

      return ChartDataService;
    }();

    ChartDataService.ɵfac = function ChartDataService_Factory(t) {
      return new (t || ChartDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nap_service__WEBPACK_IMPORTED_MODULE_6__["NapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_timeline_service__WEBPACK_IMPORTED_MODULE_7__["TimelineService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_set_service__WEBPACK_IMPORTED_MODULE_8__["DataSetService"]));
    };

    ChartDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChartDataService,
      factory: ChartDataService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _nap_service__WEBPACK_IMPORTED_MODULE_6__["NapService"]
        }, {
          type: _timeline_service__WEBPACK_IMPORTED_MODULE_7__["TimelineService"]
        }, {
          type: _data_set_service__WEBPACK_IMPORTED_MODULE_8__["DataSetService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/csv-parser.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/csv-parser.service.ts ***!
    \************************************************/

  /*! exports provided: CsvParserService */

  /***/
  function srcAppServicesCsvParserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CsvParserService", function () {
      return CsvParserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @models/entry */
    "./src/app/models/entry.ts");

    var CsvParserService =
    /*#__PURE__*/
    function () {
      function CsvParserService() {
        _classCallCheck(this, CsvParserService);

        this.columnDeliminator = ",";
        this.csvSplit = new RegExp("(?:^|".concat(this.columnDeliminator, ")(\\\"(?:[^\\\"]+|\\\"\\\")*\\\"|[^").concat(this.columnDeliminator, "]*)"));
        this.lineDeliminator = "\n";
        this.emptyCellOutput = null;
        this.invalidDate = new Date("not a date").toString();
        this.invalidNumber = parseInt("not a number", 10).toString();
        this.dateType = "date";
        this.numberType = "number";
        this.stringType = "string";
      }

      _createClass(CsvParserService, [{
        key: "ParseData",
        value: function ParseData(csvString) {
          var _this5 = this;

          var dataArray = [];
          var lines = csvString.split(this.lineDeliminator);
          var headers = this.splitLine(lines.shift());
          lines.forEach(function (line, idx) {
            var row = idx + 1;

            var columns = _this5.splitLine(line);

            if (columns.length === 0) {
              return;
            }

            if (columns.length !== headers.length) {
              throw new Error("Error Parsing Row(".concat(row, "): has ").concat(columns.length, " columns ").concat(headers.length, " were expected"));
            }

            var entry = new _models_entry__WEBPACK_IMPORTED_MODULE_1__["Entry"]({
              startTime: _this5.Convert(columns[0], _this5.dateType, "startTime", row),
              endTime: _this5.Convert(columns[1], _this5.dateType, "endTime", row),
              activity: _this5.Convert(columns[2], _this5.stringType, "activity", row),
              duration: _this5.Convert(columns[3], _this5.numberType, "duration", row),
              quantity: _this5.Convert(columns[4], _this5.numberType, "quantity", row),
              extraData: _this5.Convert(columns[5], _this5.stringType, "extraData", row),
              text: _this5.Convert(columns[6], _this5.stringType, "text", row),
              notes: _this5.Convert(columns[7], _this5.stringType, "notes", row),
              caregiver: _this5.Convert(columns[8], _this5.stringType, "caregiver", row),
              childName: _this5.Convert(columns[9], _this5.stringType, "childName", row)
            });
            dataArray.push(entry);
          });
          return dataArray;
        }
      }, {
        key: "DataToString",
        value: function DataToString(entry) {
          return [JSON.stringify(entry.startTime), JSON.stringify(entry.endTime), entry.activity, entry.duration, entry.quantity, entry.extraData, entry.text, entry.notes, entry.caregiver, entry.childName].join(",");
        }
      }, {
        key: "splitLine",
        value: function splitLine(line) {
          return line.split(this.csvSplit).filter(function (ele, idx) {
            return idx % 2 === 1;
          });
        }
      }, {
        key: "Convert",
        value: function Convert(value, type, columnName, row) {
          var ret;

          if (value === "") {
            return this.emptyCellOutput;
          } // convert


          if (type === this.dateType) {
            ret = new Date(value);
          } else if (type === this.numberType) {
            ret = parseFloat(value);
          } else {
            ret = value.replace(/"/g, "").replace(/'/g, "");
          } // conversion checks


          if ([this.invalidDate, this.invalidNumber].find(function (str) {
            return str === ret.toString();
          })) {
            throw new Error("Error Parsing Cell: Row(".concat(row, "), column(").concat(columnName, ") can't convert \"").concat(value, "\" to ").concat(type));
          }

          return ret;
        }
      }]);

      return CsvParserService;
    }();

    CsvParserService.ɵfac = function CsvParserService_Factory(t) {
      return new (t || CsvParserService)();
    };

    CsvParserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CsvParserService,
      factory: CsvParserService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvParserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data-set.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/data-set.service.ts ***!
    \**********************************************/

  /*! exports provided: DataSetService */

  /***/
  function srcAppServicesDataSetServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataSetService", function () {
      return DataSetService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_datumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @models/datumn */
    "./src/app/models/datumn.ts");
    /* harmony import */


    var _models_sleep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @models/sleep */
    "./src/app/models/sleep.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _entry_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./entry.service */
    "./src/app/services/entry.service.ts");
    /* harmony import */


    var _nap_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nap.service */
    "./src/app/services/nap.service.ts");
    /* harmony import */


    var _diaper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./diaper.service */
    "./src/app/services/diaper.service.ts");
    /* harmony import */


    var _diary_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./diary.service */
    "./src/app/services/diary.service.ts");

    var DataSetService =
    /*#__PURE__*/
    function () {
      function DataSetService(entryService, napService, diaperService, diaryService) {
        _classCallCheck(this, DataSetService);

        this.entryService = entryService;
        this.napService = napService;
        this.diaperService = diaperService;
        this.diaryService = diaryService;
      }

      _createClass(DataSetService, [{
        key: "sortDataSet",
        value: function sortDataSet(a, b) {
          if (a.child > b.child) {
            return 1;
          }

          if (a.time > b.time) {
            return 1;
          }

          return 0;
        }
      }, {
        key: "mergeDataSets",
        value: function mergeDataSets(data1, data2) {
          var styleSetters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var toolTipMethod = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          var ret = []; // match each unique child, time combo into a 2 x n array

          data1.forEach(function (datumn1) {
            var matchingDatumn2 = data2.find(function (datumn2) {
              return datumn2.match(datumn1);
            });

            if (matchingDatumn2) {
              var arr = [datumn1.data, matchingDatumn2.data];

              if (styleSetters) {
                arr.push(styleSetters.map(function (setter) {
                  return setter(datumn1, matchingDatumn2, data1);
                }).join("; "));
              }

              if (toolTipMethod) {
                arr.push(toolTipMethod(datumn1, matchingDatumn2));
              }

              ret.push(arr);
            }
          });
          return ret;
        }
      }, {
        key: "morningWakeUptime",
        value: function morningWakeUptime(child) {
          var _this6 = this;

          return this.napService.sleep.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (sleepData) {
            var arr = [];
            var childSleepDataByDate = sleepData.filter(function (d) {
              return !!child ? d.childName === child : true;
            }).groupByProperties(["endDate", "childName"]);
            Object.keys(childSleepDataByDate).forEach(function (groupKey) {
              var childName = groupKey.split("-").last();
              var sleeps = childSleepDataByDate[groupKey];
              var lastSleepOfNight = sleeps.filter(function (sleep) {
                return sleep.endTime.minutesSinceStartOfDay() < Object(_models_sleep__WEBPACK_IMPORTED_MODULE_3__["nightTimeEnd"])();
              }).sort().last();

              if (lastSleepOfNight) {
                arr.push(new _models_datumn__WEBPACK_IMPORTED_MODULE_2__["Datumn"](lastSleepOfNight.endDate, childName, lastSleepOfNight.endTime.getTimeOfDayObject()));
              } else {
                console.log(groupKey);
              }
            });
            return {
              title: "Morning WakeUp",
              dataType: "timeofday",
              data: arr.sort(_this6.sortDataSet)
            };
          })).toBehaviorSubject();
        }
      }, {
        key: "bedTimeStart",
        value: function bedTimeStart() {
          var _this7 = this;

          var lookForPreviousDaysSleepStart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var child = arguments.length > 1 ? arguments[1] : undefined;
          return this.napService.sleep.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (sleepData) {
            var childSleepDataByDate = sleepData.filter(function (d) {
              return !!child ? d.childName === child : true;
            }).groupByProperties(["startDate", "childName"]);
            var arr = [];
            Object.keys(childSleepDataByDate).forEach(function (groupKey) {
              var childName = groupKey.split("-").last();
              var sleeps = childSleepDataByDate[groupKey];
              var firstSleepOfNight = sleeps.filter(function (sleep) {
                return sleep.startTime.minutesSinceStartOfDay() > Object(_models_sleep__WEBPACK_IMPORTED_MODULE_3__["nightTimeStart"])();
              }).sort().first();

              if (firstSleepOfNight) {
                arr.push(new _models_datumn__WEBPACK_IMPORTED_MODULE_2__["Datumn"](lookForPreviousDaysSleepStart ? firstSleepOfNight.entryDate : firstSleepOfNight.entryDate.addDays(1), childName, firstSleepOfNight.startTime.getTimeOfDayObject()));
              }
            });
            return {
              title: "Start Night Sleep",
              dataType: "timeofday",
              data: arr.sort(_this7.sortDataSet)
            };
          })).toBehaviorSubject();
        }
      }, {
        key: "urineAmount",
        value: function urineAmount(child) {
          return this.diaperService.getDiaperAmountByChildByDate("pee", child).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (aggData) {
            var data = aggData.map(function (ad) {
              return new _models_datumn__WEBPACK_IMPORTED_MODULE_2__["Datumn"](ad.entryDate, ad.childName, ad.sum);
            });
            return {
              title: "Urine Daily Amount",
              dataType: "number",
              data: data
            };
          })).toBehaviorSubject();
        }
      }, {
        key: "pooAmount",
        value: function pooAmount(child) {
          return this.diaperService.getDiaperAmountByChildByDate("poo", child).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (aggData) {
            var data = aggData.map(function (ad) {
              return new _models_datumn__WEBPACK_IMPORTED_MODULE_2__["Datumn"](ad.entryDate, ad.childName, ad.sum);
            });
            return {
              title: "Poo Daily Amount",
              dataType: "number",
              data: data
            };
          })).toBehaviorSubject();
        }
      }, {
        key: "descriptionsPlusDiaryWordFrequency",
        value: function descriptionsPlusDiaryWordFrequency() {
          var _this8 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.entryService.nonEmptyNonDiaryNotes, this.diaryService.allText]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (val) {
            return val[0].length > 0 && val[1].length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (val) {
            return _this8.createWordCloudOptions(val[0].concat(val[1]));
          })).toBehaviorSubject();
        }
      }, {
        key: "diaryWordFrequency",
        value: function diaryWordFrequency() {
          var _this9 = this;

          return this.diaryService.allText.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (text) {
            return _this9.createWordCloudOptions(text);
          })).toBehaviorSubject();
        }
      }, {
        key: "nonDiaryWordFrequency",
        value: function nonDiaryWordFrequency() {
          var _this10 = this;

          return this.entryService.nonEmptyNonDiaryNotes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (text) {
            return _this10.createWordCloudOptions(text);
          })).toBehaviorSubject();
        }
      }, {
        key: "createWordCloudOptions",
        value: function createWordCloudOptions(listOfWords) {
          var omittedWords = ["and", "to", "the", "a", "with", "in", "of", "up", "", "i", "for", "on", "her", "it", "was", "she", "he", "at", "out", "null", "but", "his", "him", "down", "when", "put", "is", "that", "after", "1", "me", "time", "this", "from", "be", "not", "then", "get", "or", "so", "them", "my", "would", "as", "very", "just", "had", "about", "little", "you", "2", "3", "5"];
          var words = listOfWords.map(function (text) {
            return text.toLowerCase().replace(/[^a-z0-9é'°#\s]/g, "").split(" ");
          }).flat().filter(function (word) {
            return !omittedWords.includes(word) && !word.isNumeric();
          });
          var wordCount = words.reduce(function (acc, w) {
            if (!!acc[w]) {
              acc[w]++;
            } else {
              acc[w] = 1;
            }

            return acc;
          }, {});
          var list = Object.keys(wordCount).map(function (word) {
            return [word, wordCount[word]];
          }).sort(function (a, b) {
            return b[1] - a[1];
          });
          return {
            list: list,
            shuffle: false,
            minSize: 1,
            weightFactor: .75
          };
        }
      }]);

      return DataSetService;
    }();

    DataSetService.ɵfac = function DataSetService_Factory(t) {
      return new (t || DataSetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_entry_service__WEBPACK_IMPORTED_MODULE_5__["EntryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nap_service__WEBPACK_IMPORTED_MODULE_6__["NapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_diaper_service__WEBPACK_IMPORTED_MODULE_7__["DiaperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_diary_service__WEBPACK_IMPORTED_MODULE_8__["DiaryService"]));
    };

    DataSetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataSetService,
      factory: DataSetService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataSetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _entry_service__WEBPACK_IMPORTED_MODULE_5__["EntryService"]
        }, {
          type: _nap_service__WEBPACK_IMPORTED_MODULE_6__["NapService"]
        }, {
          type: _diaper_service__WEBPACK_IMPORTED_MODULE_7__["DiaperService"]
        }, {
          type: _diary_service__WEBPACK_IMPORTED_MODULE_8__["DiaryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/diaper.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/diaper.service.ts ***!
    \********************************************/

  /*! exports provided: DiaperService */

  /***/
  function srcAppServicesDiaperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiaperService", function () {
      return DiaperService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _extensions_array_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../extensions/array.extensions */
    "./src/app/extensions/array.extensions.ts");
    /* harmony import */


    var _models_diaper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @models/diaper */
    "./src/app/models/diaper.ts");
    /* harmony import */


    var _entry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./entry.service */
    "./src/app/services/entry.service.ts");

    var DiaperService =
    /*#__PURE__*/
    function () {
      function DiaperService(entryService) {
        var _this11 = this;

        _classCallCheck(this, DiaperService);

        this.entryService = entryService;

        this.getDiaperAmountByChildByDate = function (diaperType, child) {
          return _this11.all.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (diaperEntries) {
            if (diaperType === "poo") {
              return diaperEntries.filter(function (de) {
                return de.pooSize != null && de.childName === child;
              }).selectGroupByAndAggregate(["entryDate", "childName"], [Object(_extensions_array_extensions__WEBPACK_IMPORTED_MODULE_2__["sumPropertyAggregateFunction"])("pooSize"), _extensions_array_extensions__WEBPACK_IMPORTED_MODULE_2__["countAggregateFunction"]]);
            }

            return diaperEntries.filter(function (de) {
              return de.peeSize != null && de.childName === child;
            }).selectGroupByAndAggregate(["entryDate", "childName"], [Object(_extensions_array_extensions__WEBPACK_IMPORTED_MODULE_2__["sumPropertyAggregateFunction"])("peeSize"), _extensions_array_extensions__WEBPACK_IMPORTED_MODULE_2__["countAggregateFunction"]]);
          }));
        };
      }

      _createClass(DiaperService, [{
        key: "all",
        get: function get() {
          return this.entryService.entries.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (d) {
            return d.length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (entries) {
            return entries // tslint:disable-next-line:triple-equals
            .filter(function (e) {
              return e.activity == "Diaper";
            }).map(function (entry) {
              return new _models_diaper__WEBPACK_IMPORTED_MODULE_3__["DiaperEntry"](entry);
            });
          }));
        }
      }, {
        key: "poo",
        get: function get() {
          return this.all.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (e) {
            var ret = e.filter(function (d) {
              return d.pooSize != null;
            }).sortByProperty("startTime", _extensions_array_extensions__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].Ascending);
            return ret;
          }));
        }
      }, {
        key: "pee",
        get: function get() {
          return this.all.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (e) {
            var ret = e.filter(function (d) {
              return d.peeSize != null;
            }).sortByProperty("startTime", _extensions_array_extensions__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].Ascending);
            return ret;
          }));
        }
      }]);

      return DiaperService;
    }();

    DiaperService.ɵfac = function DiaperService_Factory(t) {
      return new (t || DiaperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_entry_service__WEBPACK_IMPORTED_MODULE_4__["EntryService"]));
    };

    DiaperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DiaperService,
      factory: DiaperService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiaperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _entry_service__WEBPACK_IMPORTED_MODULE_4__["EntryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/diary.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/diary.service.ts ***!
    \*******************************************/

  /*! exports provided: DiaryService */

  /***/
  function srcAppServicesDiaryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiaryService", function () {
      return DiaryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./entry.service */
    "./src/app/services/entry.service.ts");

    var DiaryService =
    /*#__PURE__*/
    function () {
      function DiaryService(entryService) {
        _classCallCheck(this, DiaryService);

        this.entryService = entryService;
      }

      _createClass(DiaryService, [{
        key: "all",
        get: function get() {
          return this.entryService.entries.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (entries) {
            return entries.filter(function (e) {
              return e.activity == "Diary";
            });
          }));
        }
      }, {
        key: "allText",
        get: function get() {
          return this.all.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (diaryEntries) {
            var ret = diaryEntries.map(function (d) {
              return "".concat(d.text, " ").concat(d.notes);
            });
            return ret;
          }));
        }
      }]);

      return DiaryService;
    }();

    DiaryService.ɵfac = function DiaryService_Factory(t) {
      return new (t || DiaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]));
    };

    DiaryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DiaryService,
      factory: DiaryService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiaryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/entry.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/entry.service.ts ***!
    \*******************************************/

  /*! exports provided: EntryService */

  /***/
  function srcAppServicesEntryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntryService", function () {
      return EntryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var EntryService =
    /*#__PURE__*/
    function () {
      function EntryService() {
        _classCallCheck(this, EntryService);

        this.entries = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
      }

      _createClass(EntryService, [{
        key: "addEntries",
        value: function addEntries(events) {
          this.entries.next(events.unique());
        }
      }, {
        key: "testChart",
        value: function testChart() {
          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            chartType: "Timeline",
            // https://developers.google.com/chart/interactive/docs/reference#arraytodatatable
            dataTable: [[{
              type: "string",
              id: "Room"
            }, {
              type: "string",
              id: "Name"
            }, {
              type: "date",
              id: "Start"
            }, {
              type: "date",
              id: "End"
            }], ["Magnolia Room", "Beginning JavaScript", new Date(0, 0, 0, 12, 0, 0), new Date(0, 0, 0, 13, 30, 0)], ["Magnolia Room", "Intermediate JavaScript", new Date(0, 0, 0, 14, 0, 0), new Date(0, 0, 0, 15, 30, 0)], ["Magnolia Room", "Advanced JavaScript", new Date(0, 0, 0, 16, 0, 0), new Date(0, 0, 0, 17, 30, 0)], ["Willow Room", "Beginning Google Charts", new Date(0, 0, 0, 12, 30, 0), new Date(0, 0, 0, 14, 0, 0)], ["Willow Room", "Intermediate Google Charts", new Date(0, 0, 0, 14, 30, 0), new Date(0, 0, 0, 16, 0, 0)], ["Willow Room", "Advanced Google Charts", new Date(0, 0, 0, 16, 30, 0), new Date(0, 0, 0, 18, 0, 0)]]
          });
        }
      }, {
        key: "createColumnChartData",
        value: function createColumnChartData(columns, // google.visualization.GroupKeyOptions[],
        data) {
          var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "column chart";
          return {
            chartType: "ColumnChart",
            // https://developers.google.com/chart/interactive/docs/reference#arraytodatatable
            dataTable: [columns].concat(_toConsumableArray(data)),
            options: {
              title: title
            }
          };
        }
      }, {
        key: "creteTimelineChartData",
        value: function creteTimelineChartData(columns, // google.visualization.GroupKeyOptions[],
        data) {
          var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "timeline";
          return {
            chartType: "Timeline",
            // https://developers.google.com/chart/interactive/docs/reference#arraytodatatable
            dataTable: [columns].concat(_toConsumableArray(data)),
            options: {
              title: title
            }
          };
        }
      }, {
        key: "nonEmptyNonDiaryNotes",
        get: function get() {
          return this.entries.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (entries) {
            var ret = entries.filter(function (e) {
              return e.activity !== "Diary" && e.notes != null && e.notes != "";
            }).map(function (e) {
              return e.notes;
            });
            return ret;
          }));
        }
      }]);

      return EntryService;
    }();

    EntryService.ɵfac = function EntryService_Factory(t) {
      return new (t || EntryService)();
    };

    EntryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EntryService,
      factory: EntryService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/factory.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/factory.service.ts ***!
    \*********************************************/

  /*! exports provided: FactoryService */

  /***/
  function srcAppServicesFactoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FactoryService", function () {
      return FactoryService;
    });

    var FactoryService =
    /*#__PURE__*/
    function () {
      function FactoryService(objectType) {
        _classCallCheck(this, FactoryService);

        this.objectType = objectType;
      }

      _createClass(FactoryService, [{
        key: "getNew",
        value: function getNew(initial) {
          return new this.objectType(initial);
        }
      }]);

      return FactoryService;
    }();
    /***/

  },

  /***/
  "./src/app/services/local-file-reader.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/local-file-reader.service.ts ***!
    \*******************************************************/

  /*! exports provided: LocalFileReader */

  /***/
  function srcAppServicesLocalFileReaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalFileReader", function () {
      return LocalFileReader;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LocalFileReader =
    /*#__PURE__*/
    function () {
      function LocalFileReader(httpClient) {
        _classCallCheck(this, LocalFileReader);

        this.httpClient = httpClient;
      }

      _createClass(LocalFileReader, [{
        key: "readFile",
        value: function readFile(filePath) {
          return this.httpClient.get(filePath, {
            responseType: "text"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
          }));
        }
      }]);

      return LocalFileReader;
    }();

    LocalFileReader.ɵfac = function LocalFileReader_Factory(t) {
      return new (t || LocalFileReader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    LocalFileReader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocalFileReader,
      factory: LocalFileReader.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalFileReader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/nap.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/nap.service.ts ***!
    \*****************************************/

  /*! exports provided: NapService */

  /***/
  function srcAppServicesNapServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NapService", function () {
      return NapService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_sleep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @models/sleep */
    "./src/app/models/sleep.ts");
    /* harmony import */


    var _column_configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../column-configs */
    "./src/app/column-configs.ts");
    /* harmony import */


    var _extensions_array_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../extensions/array.extensions */
    "./src/app/extensions/array.extensions.ts");
    /* harmony import */


    var _entry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./entry.service */
    "./src/app/services/entry.service.ts");

    var NapService =
    /*#__PURE__*/
    function () {
      function NapService(entryService) {
        var _this12 = this;

        _classCallCheck(this, NapService);

        this.entryService = entryService;

        this.getNapsPerDay = function () {
          return _this12.naps.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (naps) {
            var ret = naps.selectGroupByAndAggregate(["entryDate"], [_extensions_array_extensions__WEBPACK_IMPORTED_MODULE_5__["countAggregateFunction"]]);
            return ret;
          }));
        };

        this.getNapsPerDayByChild = function () {
          return _this12.naps.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (naps) {
            return naps.selectGroupByAndAggregate(["entryDate", "childName"], [_extensions_array_extensions__WEBPACK_IMPORTED_MODULE_5__["countAggregateFunction"]]);
          }));
        };

        this.getSleepEventDurationByChildByDate = function (sleepType, child) {
          return _this12.all.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (sleepEntries) {
            console.log("getSleepEventsByChildByDate ".concat(sleepType, "     ").concat(child)); // tslint:disable-next-line:triple-equals

            return sleepEntries.filter(function (se) {
              return se.sleepType == sleepType && se.childName == child;
            }).selectGroupByAndAggregate(["entryDate"], [Object(_extensions_array_extensions__WEBPACK_IMPORTED_MODULE_5__["sumPropertyAggregateFunction"])("duration"), _extensions_array_extensions__WEBPACK_IMPORTED_MODULE_5__["countAggregateFunction"]]);
          }));
        };

        this.getnumNapsPerDayChartData = function () {
          return _this12.getNapsPerDay().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (napData) {
            return _this12.entryService.createColumnChartData(_column_configs__WEBPACK_IMPORTED_MODULE_4__["napsPerDayColumns"], napData.map(function (nd) {
              return [nd.entryDate, nd.count];
            }));
          }));
        };
      }

      _createClass(NapService, [{
        key: "napEntriesByDate",
        value: function napEntriesByDate(date) {
          return this.all.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (sleepEntries) {
            return sleepEntries.filter(function (s) {
              return s.sleepType === "nap" && s.entryDate.sameDate(date);
            });
          }));
        }
      }, {
        key: "numNapsPerDayByChildChartData",
        value: function numNapsPerDayByChildChartData(childName) {
          var _this13 = this;

          return this.getNapsPerDayByChild().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (napData) {
            var ret = _this13.entryService.createColumnChartData(_column_configs__WEBPACK_IMPORTED_MODULE_4__["napsPerDayColumns"], napData.filter(function (n) {
              return n.childName === childName;
            }).map(function (nd) {
              return [nd.entryDate, nd.count];
            }));

            return ret;
          })).toBehaviorSubject();
        }
      }, {
        key: "numNapsPerDayByMonthChartData",
        value: function numNapsPerDayByMonthChartData(monthDate) {
          var _this14 = this;

          return this.getNapsPerDay().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (napData) {
            return _this14.entryService.createColumnChartData(_column_configs__WEBPACK_IMPORTED_MODULE_4__["napsPerDayColumns"], napData.filter(function (n) {
              return n.entryDate.sameMonth(monthDate);
            }).map(function (nd) {
              return [nd.entryDate, nd.count];
            }));
          }));
        }
      }, {
        key: "napTimeByChildChartData",
        value: function napTimeByChildChartData(childName) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.getSleepEventDurationByChildByDate("sleep", childName), this.getSleepEventDurationByChildByDate("nap", childName)]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (data) {
            return data[0].length !== 0 && data[1].length !== 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var sleepSums = data[0];
            var napSums = data[1];
            var chartData = napSums.map(function (nap) {
              var matchingSleepSum = sleepSums.find(function (ss) {
                return ss.entryDate.sameDate(nap.entryDate);
              });
              return [nap.entryDate, matchingSleepSum ? matchingSleepSum.sum : 0, nap.sum];
            });
            console.log("created chart data ".concat(chartData.length));
            return chartData;
          })).toBehaviorSubject();
        } // [<wake time>, <sleep time>]

      }, {
        key: "wokeUpVsBedTimeData",
        value: function wokeUpVsBedTimeData() {
          return this.sleep.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (sleepData) {
            var childSleepDataByDate = sleepData.groupByProperties(["entryDate", "childName"]);
            var arr = [];
            Object.keys(childSleepDataByDate).forEach(function (date) {
              var group = childSleepDataByDate[date].sortByProperty("startTime");
              var startSleep = group[0];
              var endSleep = group.last();
              var color = startSleep.childName === "Charlie" ? "pink" : "blue";
              arr.push([startSleep.startTime.getTimeOfDayObject(), endSleep.endTime.getTimeOfDayObject(), color]);
            }); // const arr = sleepData.map(sd => [sd.startTime.getTimeOfDayObject(), sd.sleepType === "nap" ? 0 : 1]);

            return arr;
          })).toBehaviorSubject();
        } // [<wake time>, <first nap next day>]

      }, {
        key: "wokeUpVsFirstNapStartData",
        value: function wokeUpVsFirstNapStartData() {
          var _this15 = this;

          return this.all.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (d) {
            return d.length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (sleepData) {
            var dateRange = sleepData.map(function (sd) {
              return sd.startTime;
            }).getDateRange();
            var daysInDateRange = dateRange[0].daysBetween(dateRange[1]);
            var childSleepDataByDate = sleepData.groupByProperties(["entryDate", "childName"]);
            var arr = [];
            Object.keys(childSleepDataByDate).forEach(function (groupKey) {
              var groupChild = groupKey.split("-").last();
              var group = childSleepDataByDate[groupKey];

              var startSleep = _this15.getStartSleepEntry(group);

              if (startSleep == null) {
                return;
              }

              var nextGroupKey = "".concat(startSleep.startTime.dateOnly().addDays(1).toString(), "-").concat(groupChild);
              var nextDaysGroup = childSleepDataByDate[nextGroupKey];

              if (nextDaysGroup == null) {
                return;
              }

              nextDaysGroup = nextDaysGroup.sortByProperty("startTime", _extensions_array_extensions__WEBPACK_IMPORTED_MODULE_5__["SortDirection"].Descending);

              var firstNap = _this15.getFirstNapEntry(nextDaysGroup);

              if (firstNap == null) {
                return;
              }

              var color = startSleep.childName === "Charlie" ? "pink" : "blue";
              var opacity = dateRange[0].daysBetween(startSleep.startTime) / daysInDateRange;
              arr.push([startSleep.startTime.getTimeOfDayObject(), firstNap.startTime.getTimeOfDayObject(), "color: ".concat(startSleep.childName === "Charlie" ? "pink" : "blue", "; fill-opacity: ").concat(opacity), groupKey]);
            }); // const arr = sleepData.map(sd => [sd.startTime.getTimeOfDayObject(), sd.sleepType === "nap" ? 0 : 1]);

            return arr;
          })).toBehaviorSubject();
        }
      }, {
        key: "getStartSleepEntry",
        value: function getStartSleepEntry(sleeps) {
          var sleepsAfterNightStart = sleeps.filter(function (sleep) {
            return sleep.minutes > Object(_models_sleep__WEBPACK_IMPORTED_MODULE_3__["nightTimeStart"])();
          });
          return sleepsAfterNightStart.sort()[0];
        }
      }, {
        key: "getFirstNapEntry",
        value: function getFirstNapEntry(events) {
          var sleepsAfterNightStart = events.filter(function (event) {
            return event.sleepType === "nap";
          });
          return sleepsAfterNightStart.sort().last();
        }
      }, {
        key: "all",
        get: function get() {
          return this.entryService.entries.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (d) {
            return d.length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (entries) {
            return entries // tslint:disable-next-line:triple-equals
            .filter(function (e) {
              return e.activity == "Sleep";
            }).map(function (entry) {
              return new _models_sleep__WEBPACK_IMPORTED_MODULE_3__["SleepEntry"](entry);
            });
          }));
        }
      }, {
        key: "sleep",
        get: function get() {
          return this.all.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            var ret = e.filter(function (s) {
              return s.sleepType === "sleep";
            }).sortByProperty("startTime", _extensions_array_extensions__WEBPACK_IMPORTED_MODULE_5__["SortDirection"].Ascending);
            return ret;
          }));
        }
      }, {
        key: "naps",
        get: function get() {
          return this.all.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.filter(function (s) {
              return s.sleepType === "nap";
            });
          }));
        }
      }]);

      return NapService;
    }();

    NapService.ɵfac = function NapService_Factory(t) {
      return new (t || NapService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_entry_service__WEBPACK_IMPORTED_MODULE_6__["EntryService"]));
    };

    NapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NapService,
      factory: NapService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _entry_service__WEBPACK_IMPORTED_MODULE_6__["EntryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/timeline.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/timeline.service.ts ***!
    \**********************************************/

  /*! exports provided: TimelineService */

  /***/
  function srcAppServicesTimelineServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelineService", function () {
      return TimelineService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_sleep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @models/sleep */
    "./src/app/models/sleep.ts");
    /* harmony import */


    var _entry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./entry.service */
    "./src/app/services/entry.service.ts");

    var TimelineService =
    /*#__PURE__*/
    function () {
      function TimelineService(entryService) {
        _classCallCheck(this, TimelineService);

        this.entryService = entryService;
      }

      _createClass(TimelineService, [{
        key: "getTimelineByChildChartData",
        value: function getTimelineByChildChartData(childName) {
          var _this16 = this;

          return this.entriesStartingOrEndingOnDate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (groupedDayEntries) {
            var chartData = [];
            Object.keys(groupedDayEntries).forEach(function (dateString) {
              var groupedData = groupedDayEntries[dateString];
              var date = new Date(dateString);
              groupedData.filter(function (entry) {
                return entry.childName === childName;
              }) // .filter((entry: Entry) => entry.entryDate.sameDate(new Date("2020-01-01")))
              .forEach(function (entry, idx, arr) {
                chartData.push([entry.entryDate.getChartDateTime(), _this16.timelineActivityLabel(entry)].concat(_toConsumableArray(entry.getNormalizedStartEndTimes(date))));
              });
            });
            return chartData;
          })).toBehaviorSubject();
        }
      }, {
        key: "timelineActivityLabel",
        value: function timelineActivityLabel(e) {
          // tslint:disable-next-line:triple-equals
          if (e.activity == "Sleep") {
            return new _models_sleep__WEBPACK_IMPORTED_MODULE_2__["SleepEntry"](e).sleepType;
          }

          return e.activity;
        }
      }, {
        key: "entriesByDay",
        get: function get() {
          return this.entryService.entries.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (naps) {
            return naps.groupByProperties(["entryDate"]);
          })).toBehaviorSubject();
        }
      }, {
        key: "entriesStartingOrEndingOnDate",
        get: function get() {
          return this.entryService.entries.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (naps) {
            var startGroup = naps.groupByProperties(["startDate"]);
            var endGroup = naps.groupByProperties(["endDate"]);
            Object.keys(startGroup).forEach(function (startDate) {
              var entriesStartedInDate = startGroup[startDate];
              var entriesEndedInDate = endGroup[startDate];
              var entriesStartingAndEndingOnDate = [].concat(_toConsumableArray(entriesStartedInDate), _toConsumableArray(entriesEndedInDate)).unique();
              startGroup[startDate] = entriesStartingAndEndingOnDate;
            });
            return startGroup;
          })).toBehaviorSubject();
        }
      }]);

      return TimelineService;
    }();

    TimelineService.ɵfac = function TimelineService_Factory(t) {
      return new (t || TimelineService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_entry_service__WEBPACK_IMPORTED_MODULE_3__["EntryService"]));
    };

    TimelineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TimelineService,
      factory: TimelineService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _entry_service__WEBPACK_IMPORTED_MODULE_3__["EntryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/word-cloud/word-cloud.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/word-cloud/word-cloud.component.ts ***!
    \****************************************************/

  /*! exports provided: WordCloudComponent */

  /***/
  function srcAppWordCloudWordCloudComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WordCloudComponent", function () {
      return WordCloudComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var wordcloud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! wordcloud */
    "./node_modules/wordcloud/src/wordcloud2.js");
    /* harmony import */


    var wordcloud__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(wordcloud__WEBPACK_IMPORTED_MODULE_1__);

    var _c0 = ["cloudElement"];

    var WordCloudComponent =
    /*#__PURE__*/
    function () {
      function WordCloudComponent() {
        _classCallCheck(this, WordCloudComponent);
      }

      _createClass(WordCloudComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          wordcloud__WEBPACK_IMPORTED_MODULE_1__(this.wordCloudElement.nativeElement, this.options);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!changes.options.firstChange && changes.options.previousValue.list.length != changes.options.currentValue.list.length) wordcloud__WEBPACK_IMPORTED_MODULE_1__(this.wordCloudElement.nativeElement, this.options);
        }
      }]);

      return WordCloudComponent;
    }();

    WordCloudComponent.ɵfac = function WordCloudComponent_Factory(t) {
      return new (t || WordCloudComponent)();
    };

    WordCloudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WordCloudComponent,
      selectors: [["bm-word-cloud"]],
      viewQuery: function WordCloudComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wordCloudElement = _t.first);
        }
      },
      inputs: {
        options: "options"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()],
      decls: 2,
      vars: 0,
      consts: [[2, "width", "100%", "height", "100%"], ["cloudElement", ""]],
      template: function WordCloudComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordCloudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bm-word-cloud',
          templateUrl: './word-cloud.component.html'
        }]
      }], null, {
        wordCloudElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['cloudElement']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/jim/Workspace/babyMonitor/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map