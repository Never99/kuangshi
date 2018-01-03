webpackJsonp([6],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("briU");
module.exports = __webpack_require__("NHnr");


/***/ }),

/***/ "2IG9":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3xPT":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("2IG9")

var Component = __webpack_require__("mEwh")(
  /* script */
  __webpack_require__("6kBN"),
  /* template */
  __webpack_require__("D0NF"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "6PY7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    username: function username() {
      return this.$store.getters.userinfo;
    }
  },
  methods: {
    logOut: function logOut() {
      this.$router.push('../login');
    }
  }
});

/***/ }),

/***/ "6kBN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isCollapse: false
    };
  },

  methods: {
    handleOpen: function handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose: function handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
});

/***/ }),

/***/ "6vhv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8Qit":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('el-button', {
    staticStyle: {
      "float": "right"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.logOut()
      }
    }
  }, [_vm._v("退出")]), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.$store.state.user.name))]), _c('h3', [_vm._v(_vm._s(_vm.username.name))])], 1)
},staticRenderFns: []}

/***/ }),

/***/ "9mqr":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("I5mA")

var Component = __webpack_require__("mEwh")(
  /* script */
  __webpack_require__("6PY7"),
  /* template */
  __webpack_require__("8Qit"),
  /* scopeId */
  "data-v-f4f5068e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "BpjM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(Vue, options) {
    Vue.prototype.globalTest = function () {
      return 'globalTest is fun';
    }; // eslint-disable-line
    console.log(options);
  }
});

/***/ }),

/***/ "D0NF":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "height": "100%"
    }
  }, [_c('el-menu', {
    staticClass: "el-menu-vertical-demo",
    staticStyle: {
      "height": "900px"
    },
    attrs: {
      "default-active": "1-1",
      "unique-opened": true,
      "collapse": _vm.isCollapse
    },
    on: {
      "open": _vm.handleOpen,
      "close": _vm.handleClose
    }
  }, [_c('el-submenu', {
    attrs: {
      "index": "1",
      "open": _vm.handleOpen()
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('i', {
    staticClass: "el-icon-location"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("Module1")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/module1/sub1"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "1-1"
    }
  }, [_vm._v("选项1")])], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/module1/sub2"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "1-2"
    }
  }, [_vm._v("选项2")])], 1)], 2), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "2"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('i', {
    staticClass: "el-icon-location"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("Module2")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/module2/sub1"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "2-1"
    }
  }, [_vm._v("选项1")])], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/module2/sub2"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "2-2"
    }
  }, [_vm._v("选项2")])], 1)], 2)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ "E1NK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  domlang: {
    ACTIVE_NAME: 'Active Name',
    ACTIVE_AREA: 'Active Area',
    NOW_SEND: 'Now Send'
  },
  placeholder: {
    ACTIVE_NAME: 'please add active name',
    ACTIVE_AREA: 'please add active area'
  },
  validate: {},
  msg: {}
});

/***/ }),

/***/ "I5mA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "I9+C":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-container', {
    staticClass: "wrapper"
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ "IcnI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("VCXJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("9rMa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_user__ = __webpack_require__("bREw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_modal__ = __webpack_require__("j8C+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters__ = __webpack_require__("UjVw");







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    modalOptions: __WEBPACK_IMPORTED_MODULE_3__modules_modal__["a" /* default */],
    user: __WEBPACK_IMPORTED_MODULE_2__modules_user__["a" /* default */]
  },
  getters: __WEBPACK_IMPORTED_MODULE_4__getters__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ "K86V":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("6vhv")

var Component = __webpack_require__("mEwh")(
  /* script */
  __webpack_require__("Qazo"),
  /* template */
  __webpack_require__("wL7h"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "KW9/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs__ = __webpack_require__("cLQA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mockjs__);


var mockFuns = {
  /**
  * 进行mock参数验证，返回mock数据
  * @template 请求参数模板
  * @data 请求成功后返回的data
  * @req http的request请求
  * @return 返回mock数据
  */
  setMockData: function setMockData() {
    var template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var data = arguments[1];
    var req = arguments[2];

    var result = {};
    var valid = [];
    if (template) {
      valid = __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.valid(template, JSON.parse(req.body));
    }
    // 请求参数验证成功
    if (valid.length === 0) {
      result = {
        code: 0,
        data: data,
        msg: ''
      };
    } else {
      result = {
        code: 1200,
        data: valid,
        msg: '参数错误'
      };
    }
    return result;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (mockFuns);

/***/ }),

/***/ "LmM6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("VCXJ");


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].directive('bgColor', {
  bind: function bind(el, binding) {
    $(el).css('background', '#FF3D00'); // eslint-disable-line
    console.log(binding);
  },
  update: function update(el, val) {
    $(el).css('background', val.value.color.bgcolor); // eslint-disable-line
  },
  unbind: function unbind() {
    // 清理工作
    // 例如，删除bind()添加的事件监听器
  }
});

/***/ }),

/***/ "M93x":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("VFxn")

var Component = __webpack_require__("mEwh")(
  /* script */
  __webpack_require__("V6wN"),
  /* template */
  __webpack_require__("I9+C"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("VCXJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__("Zjva");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_chalk_index_css__ = __webpack_require__("SXr1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_chalk_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_chalk_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scss_index_scss__ = __webpack_require__("SgXG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scss_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__scss_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_js_modal__ = __webpack_require__("44w4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_js_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_js_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_router_utils__ = __webpack_require__("sV6v");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__("IcnI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_com_utils__ = __webpack_require__("BpjM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_i18n_utils__ = __webpack_require__("zucv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives__ = __webpack_require__("LmM6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mock__ = __webpack_require__("qs/E");














__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8__utils_com_utils__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_vue_js_modal___default.a, { dialog: true });
// import dir from './directives';

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({ // eslint-disable-line
  el: '#app',
  store: __WEBPACK_IMPORTED_MODULE_7__store__["a" /* default */],
  router: __WEBPACK_IMPORTED_MODULE_6__utils_router_utils__["a" /* default */],
  i18n: __WEBPACK_IMPORTED_MODULE_9__utils_i18n_utils__["a" /* default */],
  components: {
    App: __WEBPACK_IMPORTED_MODULE_1__App___default.a
  },
  template: '<App/>'
});

/***/ }),

/***/ "O9s/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_layout__ = __webpack_require__("K86V");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layout_layout__);


/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/module2',
  name: 'module2',
  component: __WEBPACK_IMPORTED_MODULE_0__layout_layout___default.a,
  hidden: true,
  children: [{
    path: 'sub1',
    component: function component(resolve) {
      __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("9jQ3")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
  }, {
    path: 'sub2',
    component: function component(resolve) {
      __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("3r2W")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
  }]

}]);

/***/ }),

/***/ "Oaf6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs__ = __webpack_require__("cLQA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_funs_js__ = __webpack_require__("KW9/");




var getDataList = function getDataList(req) {
  var data = {
    list: [{ id: 1, name: '刘德华' }, { id: 2, name: '张学友' }]
  };
  return __WEBPACK_IMPORTED_MODULE_1__mock_funs_js__["a" /* default */].setMockData(null, data, req);
};

__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock('api/auth/v1/users/list1?id=123', 'get', getDataList);

/***/ }),

/***/ "Qazo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header__ = __webpack_require__("9mqr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_menu__ = __webpack_require__("3xPT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_menu__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Layout',
  components: {
    MegHeader: __WEBPACK_IMPORTED_MODULE_0__components_layout_header___default.a,
    MegMenu: __WEBPACK_IMPORTED_MODULE_1__components_layout_menu___default.a
  },
  computed: {
    key: function key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date();
    }
  }
});

/***/ }),

/***/ "SXr1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "SgXG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "UjVw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getters = {
  userinfo: function userinfo(state) {
    return state.user;
  },
  modalOptions: function modalOptions(state) {
    return state.modalOptions;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ }),

/***/ "V6wN":
/***/ (function(module, exports) {

//
//
//
//
//

/***/ }),

/***/ "VFxn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XMCB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs__ = __webpack_require__("cLQA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_funs_js__ = __webpack_require__("KW9/");




var getDataList = function getDataList(req) {
  var data = {
    list: [{ id: 1, name: '刘德华' }, { id: 2, name: '张学友' }]
  };
  return __WEBPACK_IMPORTED_MODULE_1__mock_funs_js__["a" /* default */].setMockData(null, data, req);
};

__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock('api/auth/v1/users/list2?id=123', 'get', getDataList);

/***/ }),

/***/ "bREw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var user = {
  state: {
    name: '1231231231'
  },
  mutations: {
    SET_USERNAME: function SET_USERNAME(state, name) {
      state.name = name;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (user);

/***/ }),

/***/ "iW45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  domlang: {
    ACTIVE_NAME: '活动名称',
    ACTIVE_AREA: '活动地点',
    NOW_SEND: '及时配送'
  },
  placeholder: {
    ACTIVE_NAME: '请填写活动名称',
    ACTIVE_AREA: '请填写活动地点'
  },
  validate: {},
  msg: {}
});

/***/ }),

/***/ "j8C+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var modalOptions = {
  state: {
    minWidth: 300,
    minHeight: 200,
    pivotX: 0.5,
    pivotY: 0.5,
    adaptive: true,
    scrollable: true,
    reset: true,
    width: 500,
    height: 400,
    clickToClose: false,
    transition: 'nice-modal-fade',
    classes: 'modal-container'
  },

  mutations: {}
};

/* harmony default export */ __webpack_exports__["a"] = (modalOptions);

/***/ }),

/***/ "qs/E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs__ = __webpack_require__("cLQA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module1_mock_js__ = __webpack_require__("Oaf6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module2_mock_js__ = __webpack_require__("XMCB");


__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.setup({
  timeout: '200-600'
});




/***/ }),

/***/ "sV6v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("IHPB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("VCXJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__("zO6J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_login_login_router__ = __webpack_require__("uXod");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_layout_layout_router__ = __webpack_require__("uf9b");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_module1_module1_router__ = __webpack_require__("vmp5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_module2_module2_router__ = __webpack_require__("O9s/");









__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);

var router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
  // mode: 'history',
  // hashbang:false,
  routes: [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(__WEBPACK_IMPORTED_MODULE_5__modules_module1_module1_router__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(__WEBPACK_IMPORTED_MODULE_6__modules_module2_module2_router__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(__WEBPACK_IMPORTED_MODULE_3__modules_login_login_router__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(__WEBPACK_IMPORTED_MODULE_4__modules_layout_layout_router__["a" /* default */]))
});

function GlobalRouterPlugin() {}
GlobalRouterPlugin.install = function (Vue, options) {
  // eslint-disable-line
  Vue.getRouter = function () {
    // eslint-disable-line
    return router; // eslint-disable-line
  }; // eslint-disable-line
  console.log(options);
};
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(GlobalRouterPlugin);
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),

/***/ "uXod":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/login',
  name: 'login',
  component: function component(resolve) {
    __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("XmP8")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  }

}]);

/***/ }),

/***/ "uf9b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/',
  name: 'layout',
  redirect: '/module1/sub1',
  component: function component(resolve) {
    new Promise(function(resolve) { resolve(); }).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("K86V")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  }

}]);

/***/ }),

/***/ "vmp5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_layout__ = __webpack_require__("K86V");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layout_layout__);


/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/module1',
  name: 'module1',
  component: __WEBPACK_IMPORTED_MODULE_0__layout_layout___default.a,
  hidden: true,
  redirect: 'sub1',
  children: [{
    path: 'sub1',
    component: function component(resolve) {
      __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("GZXB")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
  }, {
    path: 'sub2',
    component: function component(resolve) {
      __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("UtEX")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
  }]

}]);

/***/ }),

/***/ "wL7h":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-container', [_c('el-header', [_c('meg-header')], 1), _vm._v(" "), _c('el-container', [_c('el-aside', {
    staticClass: "menu"
  }, [_c('meg-menu')], 1), _vm._v(" "), _c('el-main', {
    staticClass: "content"
  }, [_c('transition', {
    attrs: {
      "name": "el-zoom-in-center",
      "mode": "out-in"
    }
  }, [_c('router-view', {
    key: _vm.key
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ "zucv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("VCXJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n__ = __webpack_require__("t1ko");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_en_US_js__ = __webpack_require__("E1NK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i18n_zh_CN_js__ = __webpack_require__("iW45");



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]);

// const lang = navigator.language || navigator.browserLanguage;
// const loc = lang.split('-')[1];





var messages = {
  us: __WEBPACK_IMPORTED_MODULE_2__i18n_en_US_js__["a" /* default */],
  cn: __WEBPACK_IMPORTED_MODULE_3__i18n_zh_CN_js__["a" /* default */]
};

console.log(this);

var i18n = new __WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]({
  locale: 'us',
  messages: messages
});

/* harmony default export */ __webpack_exports__["a"] = (i18n);

/***/ })

},[0]);