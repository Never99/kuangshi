webpackJsonp([2],{

/***/ "/6E2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Y4Nu");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("qePi")("6acb1c1f", content, true);

/***/ }),

/***/ "/gCs":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("gWsz")

var Component = __webpack_require__("mEwh")(
  /* script */
  __webpack_require__("eqBy"),
  /* template */
  __webpack_require__("BM7x"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "0l0m":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("/6E2")

var Component = __webpack_require__("mEwh")(
  /* script */
  __webpack_require__("g/u+"),
  /* template */
  __webpack_require__("2GXA"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "2GXA":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "name": "error-modal",
      "classes": ['v--modal', 'error-modal', _vm.hasBugs && 'has-bugs'],
      "pivot-y": 0.2,
      "width": 400,
      "height": 300
    },
    on: {
      "before-open": _vm.beforeOpen,
      "before-close": _vm.beforeClose
    }
  }, [_c('div', {
    staticClass: "error-modal-content"
  }, [_c('div', {
    staticClass: "bugs-label"
  }, [_vm._v("bugs: " + _vm._s(_vm.bugCount))]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.createBug
    }
  }, [_vm._v("Create a bug")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.fixBug
    }
  }, [_vm._v("Fix a bug")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "10px"
    }
  }, [_vm._v("\n      You will be able to close the window only if you have fixed all the bugs :)\n    ")]), _vm._v(" "), _c('sub', {
    style: ({
      opacity: _vm.hasBugs ? 1 : 0
    })
  }, [_vm._v("\n      " + _vm._s(_vm.bugCount) + " bugs to fix\n    ")])])])
},staticRenderFns: []}

/***/ }),

/***/ "45XY":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(false);
// imports


// module
exports.push([module.i, ".box{background:#fff;overflow:hidden;width:656px;height:400px;border-radius:2px;box-shadow:0 0 40px #000;color:#8b8c8d;font-size:0}.box,.box .box-part{box-sizing:border-box}.box .box-part{display:inline-block;position:relative;vertical-align:top;height:100%;width:50%}.box .box-part#bp-right{background:url(\"/static/panorama.jpg\") no-repeat 0 0;border-left:1px solid #eee}.box .box-messages{position:absolute;left:0;bottom:0;width:100%}.box .box-error-message{position:relative;overflow:hidden;box-sizing:border-box;height:0;line-height:32px;padding:0 12px;text-align:center;width:100%;font-size:11px;color:#fff;background:#f38181}.box .partition{width:100%;height:100%}.box .partition .partition-title{box-sizing:border-box;padding:30px;width:100%;text-align:center;letter-spacing:1px;font-size:20px;font-weight:300}.box .partition .partition-form{padding:0 20px;box-sizing:border-box}.box input[type=password],.box input[type=text]{display:block;box-sizing:border-box;margin-bottom:4px;width:100%;font-size:12px;line-height:2;border:0;border-bottom:1px solid #dddedf;padding:4px 8px;font-family:inherit;transition:all .5s;outline:none}.box button{background:#fff;border-radius:4px;box-sizing:border-box;padding:10px;letter-spacing:1px;font-family:Open Sans,sans-serif;font-weight:400;min-width:140px;margin-top:8px;color:#8b8c8d;cursor:pointer;border:1px solid #dddedf;text-transform:uppercase;transition:all .1s;font-size:10px;outline:none}.box button:hover{border-color:#c7c8c9;color:#6f7071}.box .large-btn{width:100%;background:#fff}.box .large-btn span{font-weight:600}.box .large-btn:hover{color:#fff!important}.box .button-set{margin-bottom:8px}.box #register-btn,.box #signin-btn{margin-left:8px}.box .facebook-btn{border-color:#3880ff;color:#3880ff}.box .facebook-btn:hover{border-color:#3880ff;background:#3880ff}.box .github-btn{border-color:#dba226;color:#dba226}.box .github-btn:hover{border-color:#dba226;background:#dba226}.box .autocomplete-fix{position:absolute;visibility:hidden;overflow:hidden;opacity:0;width:0;height:0;left:0;top:0}.pop-out-enter-active,.pop-out-leave-active{transition:all .5s}.pop-out-enter,.pop-out-leave-active{opacity:0;transform:translateY(24px)}", ""]);

// exports


/***/ }),

/***/ "5ydD":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InputFocusModal',
  methods: {
    opened: function opened() {
      console.log(this.$refs.email);
      //  this.$refs.email.focus();
    }
  }
});

/***/ }),

/***/ "6Dyo":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "name": "size-modal",
      "transition": _vm.modalOptions.transition,
      "classes": _vm.modalOptions.classes,
      "min-width": _vm.modalOptions.minWidth,
      "min-height": _vm.modalOptions.minHeight,
      "pivot-y": _vm.modalOptions.pivotY,
      "pivot-x": _vm.modalOptions.pivotX,
      "adaptive": _vm.modalOptions.adaptive,
      "scrollable": _vm.modalOptions.scrollable,
      "reset": _vm.modalOptions.reset,
      "width": _vm.width,
      "height": _vm.height,
      "click-to-close": _vm.modalOptions.clickToClose
    },
    on: {
      "before-open": _vm.beforeOpen,
      "opened": _vm.opened,
      "closed": _vm.closed,
      "before-close": _vm.beforeClose
    }
  }, [_c('div', {
    staticClass: "size-modal-content",
    staticStyle: {
      "overflow": "auto"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.fullScreen()
      }
    }
  }, [_vm._v("全屏")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.closeSelf()
      }
    }
  }, [_vm._v("关闭")]), _vm._v(" "), _c('div', [_vm._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat.\n    ")])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ "6GH9":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "name": "input-focus-modal",
      "height": 150,
      "adaptive": true
    },
    on: {
      "opened": _vm.opened
    }
  }, [_c('div', {
    staticStyle: {
      "padding": "30px",
      "text-align": "center"
    }
  }, [_c('input', {
    ref: "email",
    staticClass: "huge-font",
    attrs: {
      "type": "text",
      "placeholder": "email"
    }
  })])])
},staticRenderFns: []}

/***/ }),

/***/ "8/3o":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InputFocusModal',
  methods: {
    opened: function opened() {}
  }
});

/***/ }),

/***/ "8H8T":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("iwFX");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("qePi")("975ad518", content, true);

/***/ }),

/***/ "9jQ3":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("jRW+")

var Component = __webpack_require__("mEwh")(
  /* script */
  __webpack_require__("TfvV"),
  /* template */
  __webpack_require__("U5BM"),
  /* scopeId */
  "data-v-4f0de20a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "BM7x":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "name": "demo-login",
      "transition": "pop-out",
      "width": _vm.modalWidth,
      "height": 400
    }
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-part",
    attrs: {
      "id": "bp-left"
    }
  }, [_c('div', {
    staticClass: "partition",
    attrs: {
      "id": "partition-register"
    }
  }, [_c('div', {
    staticClass: "partition-title"
  }, [_vm._v("CREATE ACCOUNT")]), _vm._v(" "), _c('div', {
    staticClass: "partition-form"
  }, [_c('form', {
    attrs: {
      "autocomplete": "false"
    }
  }, [_c('div', {
    staticClass: "autocomplete-fix"
  }, [_c('input', {
    attrs: {
      "type": "password"
    }
  })]), _vm._v(" "), _c('input', {
    attrs: {
      "id": "n-email",
      "type": "text",
      "placeholder": "Email"
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "id": "n-username",
      "type": "text",
      "placeholder": "Username"
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "id": "n-password2",
      "type": "password",
      "placeholder": "Password"
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "42px"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "button-set"
  }, [_c('button', {
    attrs: {
      "id": "goto-signin-btn"
    }
  }, [_vm._v("Sign In")]), _vm._v(" "), _c('button', {
    attrs: {
      "id": "register-btn"
    }
  }, [_vm._v("Register")])]), _vm._v(" "), _c('button', {
    staticClass: "large-btn github-btn"
  }, [_vm._v("connect with "), _c('span', [_vm._v("github")])]), _vm._v(" "), _c('button', {
    staticClass: "large-btn facebook-btn"
  }, [_vm._v("connect with "), _c('span', [_vm._v("facebook")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "box-part",
    attrs: {
      "id": "bp-right"
    }
  }, [_c('div', {
    staticClass: "box-messages"
  })])])])
},staticRenderFns: []}

/***/ }),

/***/ "DOZB":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "EAWI":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', [_c('tr', [_c('td', {
    staticStyle: {
      "width": "20%"
    }
  }, [_vm._v("Modes:")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_c('b', [_vm._v("Adaptive")])]), _vm._v(" "), _c('td', [_vm._v("Tries to adjust to the page size.")])]), _vm._v(" "), _c('tr', [_c('td', [_c('b', [_vm._v("Resizable")])]), _vm._v(" "), _c('td', [_vm._v("\n      Has a small arrow on the bottom-right corner (customizable) that you can drag to change the size of the modal.\n    ")])]), _vm._v(" "), _c('tr', [_c('td', [_c('b', [_vm._v("Draggable")])]), _vm._v(" "), _c('td', [_vm._v("\n      Allows to drag modal on the screen.\n    ")])]), _vm._v(" "), _c('tr', [_c('td', [_c('b', [_vm._v("Scrollable")])]), _vm._v(" "), _c('td', [_vm._v("\n      If "), _c('i', [_vm._v("height")]), _vm._v(" is set to \"auto\" - "), _c('i', [_vm._v("scrollable")]), _vm._v(" flag will make your modal... scrollable.\n    ")])])])
}]}

/***/ }),

/***/ "G9ib":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (43:8)\n\n\u001b[0m \u001b[90m 41 | \u001b[39m    \u001b[36mreturn\u001b[39m {\n \u001b[90m 42 | \u001b[39m      modalOptions\u001b[33m:\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 43 | \u001b[39m        \u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$store\u001b[33m.\u001b[39mgetters\u001b[33m.\u001b[39mmodalOptions\n \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 44 | \u001b[39m      }\u001b[33m,\u001b[39m\n \u001b[90m 45 | \u001b[39m      isfull\u001b[33m:\u001b[39m \u001b[36mfalse\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 46 | \u001b[39m      width\u001b[33m:\u001b[39m \u001b[32m'50%'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ }),

/***/ "HT2t":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "name": "dog-profile",
      "classes": "cute-dog-profile-photo",
      "transition": "scale",
      "height": 260,
      "width": 260
    },
    on: {
      "opened": _vm.opened
    }
  }, [_c('div', {
    staticClass: "ct-top-right",
    attrs: {
      "slot": "top-right"
    },
    slot: "top-right"
  }, [_vm._v("\n    HIDE THE DOGGY\n  ")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/cute_dog.gif"
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ "Hh5T":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "name": "conditional-modal",
      "adaptive": true
    },
    on: {
      "before-open": _vm.beforeOpen
    }
  }, [_c('div', {
    staticStyle: {
      "padding": "30px",
      "text-align": "center"
    }
  }, [_vm._v("\n    Hello!\n  ")])])
},staticRenderFns: []}

/***/ }),

/***/ "Ih/V":
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__("mEwh")(
  /* script */
  __webpack_require__("mjPS"),
  /* template */
  __webpack_require__("EAWI"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "M7Uc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("oPxW");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("qePi")("7657e5a0", content, true);

/***/ }),

/***/ "P4SK":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("aZhI");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("qePi")("6be20f53", content, true);

/***/ }),

/***/ "TfvV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_modal_ModesTable_vue__ = __webpack_require__("Ih/V");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_modal_ModesTable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_modal_ModesTable_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_modal_DemoErrorModal_vue__ = __webpack_require__("0l0m");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_modal_DemoErrorModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_modal_DemoErrorModal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_modal_InputFocusModal_vue__ = __webpack_require__("svU2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_modal_InputFocusModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_modal_InputFocusModal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_modal_DemoLoginModal_vue__ = __webpack_require__("/gCs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_modal_DemoLoginModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_modal_DemoLoginModal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_modal_DogProfileModal_vue__ = __webpack_require__("kY11");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_modal_DogProfileModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_modal_DogProfileModal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_modal_ConditionalModal_vue__ = __webpack_require__("bWuZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_modal_ConditionalModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_modal_ConditionalModal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_modal_vue__ = __webpack_require__("flgM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__create_modal_vue__);
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









// import { Module2Srv } from './module2.service';

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModesTable: __WEBPACK_IMPORTED_MODULE_0__components_modal_ModesTable_vue___default.a,
    DemoErrorModal: __WEBPACK_IMPORTED_MODULE_1__components_modal_DemoErrorModal_vue___default.a,
    DemoFocusModal: __WEBPACK_IMPORTED_MODULE_2__components_modal_InputFocusModal_vue___default.a,
    DemoLoginModal: __WEBPACK_IMPORTED_MODULE_3__components_modal_DemoLoginModal_vue___default.a,
    DemoDogProfileModal: __WEBPACK_IMPORTED_MODULE_4__components_modal_DogProfileModal_vue___default.a,
    DemoConditionalModal: __WEBPACK_IMPORTED_MODULE_5__components_modal_ConditionalModal_vue___default.a,
    CreateModal: __WEBPACK_IMPORTED_MODULE_6__create_modal_vue___default.a
  },
  data: function data() {
    return {
      resizable: false,
      adaptive: false,
      draggable: false,
      canBeShown: false
    };
  },
  created: function created() {
    var _this = this;

    setInterval(function () {
      _this.canBeShown = !_this.canBeShown;
    }, 5000);
  },

  methods: {
    show: function show(resizable, adaptive, draggable) {
      var _this2 = this;

      this.resizable = resizable;
      this.adaptive = adaptive;
      this.draggable = draggable;
      /*
      $nextTick is required because the data model with new
      "resizable, adaptive, draggable" values is not updated yet.. eh
      */
      this.$nextTick(function () {
        _this2.$modal.show('example-modal');
      });
    },
    conditionalShow: function conditionalShow() {
      this.$modal.show('conditional-modal', {
        show: this.canBeShown
      });
    },
    showBasicDialog: function showBasicDialog() {
      this.$modal.show('dialog', {
        text: 'I am a tiny dialog box.<br/>And I render <b>HTML!</b>'
      });
    },
    showTitleDialog: function showTitleDialog() {
      this.$modal.show('dialog', {
        title: 'Information',
        text: 'Check out, I have a title 😎'
      });
    },
    showButtonsDialog: function showButtonsDialog() {
      var _this3 = this;

      this.$modal.show('dialog', {
        title: 'Buttons example',
        text: 'You can add an arbitrary number of buttons.',
        buttons: [{
          title: 'C💩NCEL',
          handler: function handler() {
            _this3.$modal.hide('dialog');
          }
        }, {
          title: 'LIKE',
          default: true,
          handler: function handler() {
            alert('LIKE LIKE LIKE');
          }
        }, {
          title: 'REPOST',
          handler: function handler() {
            alert('REPOST REPOST REPOST');
          }
        }]
      });
    },
    dialogEvent: function dialogEvent(eventName) {
      console.log('Dialog event: ' + eventName);
    }
  }
});

/***/ }),

/***/ "U5BM":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('demo-error-modal'), _vm._v(" "), _c('demo-login-modal'), _vm._v(" "), _c('demo-dog-profile-modal'), _vm._v(" "), _c('demo-conditional-modal'), _vm._v(" "), _c('demo-focus-modal'), _vm._v(" "), _c('create-modal'), _vm._v(" "), _c('v-dialog', {
    on: {
      "before-opened": function($event) {
        _vm.dialogEvent('before-open')
      },
      "before-closed": function($event) {
        _vm.dialogEvent('before-close')
      },
      "opened": function($event) {
        _vm.dialogEvent('opened')
      },
      "closed": function($event) {
        _vm.dialogEvent('closed')
      }
    }
  }), _vm._v(" "), _c('modal', {
    attrs: {
      "name": "example-modal",
      "transition": "nice-modal-fade",
      "min-width": 200,
      "width": "500",
      "height": 500,
      "min-height": 200,
      "delay": 100,
      "adaptive": _vm.adaptive,
      "resizable": _vm.resizable,
      "draggable": _vm.draggable
    }
  }, [_c('div', {
    staticClass: "example-modal-content"
  }, [_vm._v("\n        Appropriately exploit professional infrastructures rather than unique growth strategies. Assertively build leveraged growth strategies vis-a-vis multimedia based vortals. Progressively simplify cross-platform value through interactive imperatives. Objectively implement enabled web services after plug-and-play ROI. Distinctively impact inexpensive schemas before installed base imperatives. Holisticly benchmark pandemic process improvements without wireless experiences. Efficiently create worldwide partnerships after tactical vortals. Uniquely productize enabled platforms vis-a-vis timely processes. Conveniently unleash standards compliant niches through highly efficient testing procedures. Rapidiously enable pandemic niche markets whereas viral markets. Assertively simplify alternative partnerships and error-free e-commerce. Professionally formulate 24/365 internal or \"organic\" sources through equity invested mindshare. Globally redefine unique best practices for.\n\n        "), _c('input', {
    attrs: {
      "placeholder": "Email"
    }
  })])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('pre', {
    staticStyle: {
      "line-height": "1.5"
    }
  }, [_vm._v("      npm install --save vue-js-modal\n\n      ...\n      import vmodal from 'vue-js-modal'\n      Vue.use(vmodal)\n    ")]), _vm._v(" "), _c('modes-table'), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "20px",
      "margin-bottom": "15px"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.show(false, false, false)
      }
    }
  }, [_vm._v("Simple")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.show(true, false, false)
      }
    }
  }, [_vm._v("Resizable")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.show(false, true, false)
      }
    }
  }, [_vm._v("Adaptive")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.show(false, false, true)
      }
    }
  }, [_vm._v("Draggable")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.$modal.show('dog-profile')
      }
    }
  }, [_vm._v("\n        Demo: Dog Profile photo\n      ")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.$modal.show('error-modal')
      }
    }
  }, [_vm._v("\n        Demo: Error handling\n      ")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.$modal.show('demo-login')
      }
    }
  }, [_vm._v("\n        Demo: Login\n      ")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.$modal.show('size-modal')
      }
    }
  }, [_vm._v("\n        create-modal\n      ")]), _vm._v(" "), _c('el-button', {
    class: _vm.canBeShown ? 'btn green' : 'btn red',
    on: {
      "click": _vm.conditionalShow
    }
  }, [_vm._v("\n        Can "), (!_vm.canBeShown) ? _c('b', [_vm._v("NOT")]) : _vm._e(), _vm._v(" be shown\n      ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.showBasicDialog
    }
  }, [_vm._v("\n        Dialog: basic\n      ")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.showTitleDialog
    }
  }, [_vm._v("\n        Dialog: title\n      ")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.showButtonsDialog
    }
  }, [_vm._v("\n        Dialog: buttons\n      ")])], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', [_vm._v("Vue.js Modal\n      "), _c('a', {
    attrs: {
      "href": "https://github.com/euvl/vue-js-modal/blob/master/README.md",
      "target": "readme"
    }
  }, [_vm._v("Readme")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://github.com/euvl/vue-js-modal/issues",
      "target": "issues"
    }
  }, [_vm._v("Issues")])])
}]}

/***/ }),

/***/ "Y4Nu":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(false);
// imports


// module
exports.push([module.i, ".error-modal{transition:box-shadow 1s}.error-modal.has-bugs{box-shadow:0 24px 80px -2px rgba(255,0,0,.6)!important}.error-modal-content{padding:10px;text-align:center}.error-modal-content .bugs-label{text-transform:uppercase;font-size:60px;font-weight:300;letter-spacing:2px;padding:40px}.error-modal-content button{width:180px}.error-modal-content sub{color:#ec625f;transition:opacity .25s}", ""]);

// exports


/***/ }),

/***/ "aZhI":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "bWuZ":
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__("mEwh")(
  /* script */
  __webpack_require__("yuzU"),
  /* template */
  __webpack_require__("Hh5T"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "eqBy":
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

var MODAL_WIDTH = 656;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DemoLoginModal',
  data: function data() {
    return {
      modalWidth: MODAL_WIDTH
    };
  },
  created: function created() {
    this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH;
  }
});

/***/ }),

/***/ "flgM":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("P4SK")

var Component = __webpack_require__("mEwh")(
  /* script */
  __webpack_require__("G9ib"),
  /* template */
  __webpack_require__("6Dyo"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "g/u+":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DemoErrorModal',
  data: function data() {
    return {
      bugCount: 0,
      message: '',
      hasBugs: false
    };
  },

  methods: {
    createBug: function createBug() {
      this.bugCount += 1;
    },
    fixBug: function fixBug() {
      this.bugCount = Math.max(this.bugCount - 1, 0);
      this.hasBugs = false;
    },
    beforeOpen: function beforeOpen() {
      this.bugCount = Math.round(Math.random() * 3) + 1;
    },
    beforeClose: function beforeClose(event) {
      if (this.bugCount > 0) {
        this.hasBugs = true;
        /*
        Stopping close event execution
        */
        event.stop();
      }
    }
  }
});

/***/ }),

/***/ "gWsz":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("45XY");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("qePi")("7d8b2ce4", content, true);

/***/ }),

/***/ "iwFX":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(false);
// imports


// module
exports.push([module.i, ".cute-dog-profile-photo{background-color:transparent;border-radius:100%;box-shadow:0 2px 20px 0 rgba(0,0,0,.4);border:1px solid hsla(0,0%,100%,.65)}.cute-dog-profile-photo img{width:260px;height:260px}.ct-top-right{cursor:pointer;padding-top:20px;padding-right:30px;font-weight:600;color:#fff;text-shadow:0 0 20px #000}.scale-enter-active,.scale-leave-active{transition:all .5s}.scale-enter,.scale-leave-active{opacity:0;transform:scale(.3) translateY(24px)}", ""]);

// exports


/***/ }),

/***/ "jRW+":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("DOZB");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("qePi")("bea46302", content, true);

/***/ }),

/***/ "kY11":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("8H8T")

var Component = __webpack_require__("mEwh")(
  /* script */
  __webpack_require__("8/3o"),
  /* template */
  __webpack_require__("HT2t"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "mjPS":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ModesTable'
});

/***/ }),

/***/ "oPxW":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(false);
// imports


// module
exports.push([module.i, "input.huge-font{font-size:70px;font-weight:100;text-align:center;min-width:auto;width:100%}", ""]);

// exports


/***/ }),

/***/ "svU2":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("M7Uc")

var Component = __webpack_require__("mEwh")(
  /* script */
  __webpack_require__("5ydD"),
  /* template */
  __webpack_require__("6GH9"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "yuzU":
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
  name: 'ConditionalModal',
  methods: {
    beforeOpen: function beforeOpen(event) {
      console.log('Event:', event);
      console.log('Params:', event.params);

      if (event.params.show === false) {
        event.stop();
      }
    }
  }
});

/***/ })

});