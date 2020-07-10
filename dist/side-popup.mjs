
/**
 * Side Popup，基于 Bootstrap 的侧弹窗组件
 * @version 1.1.0
 * @author Ambit Tsai <ambit_tsai@qq.com>
 * @license Apache-2.0
 * @see {@link https://github.com/ambit-tsai/side-popup#readme}
 */
import $$1 from 'jquery';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var options = {
  backdrop: false,
  attrs: {
    "class": 'modal-dialog'
  },
  header: {
    show: true,
    tag: 'div',
    showCloseBtn: true,
    attrs: {
      "class": 'modal-header'
    }
  },
  body: {
    show: true,
    tag: 'div',
    attrs: {
      "class": 'modal-body'
    }
  },
  footer: {
    show: true,
    tag: 'div',
    attrs: {
      "class": 'modal-footer'
    }
  },
  buttons: [{
    html: '确定',
    attrs: {
      "class": 'btn btn-primary',
      type: 'button'
    }
  }]
};

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\r\n.ID.modal {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -moz-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    background-color: rgba(0,0,0,.5);\r\n    overflow: auto;\r\n}\r\n.ID.right {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n    -webkit-flex-direction: row-reverse;\r\n       -moz-box-orient: horizontal;\r\n       -moz-box-direction: reverse;\r\n        -ms-flex-direction: row-reverse;\r\n            flex-direction: row-reverse;\r\n}\r\n\r\n\r\n.ID.modal > .modal-dialog {\r\n    -webkit-flex-shrink: 0;\r\n        -ms-flex-negative: 0;\r\n            flex-shrink: 0;\r\n    margin: 0;\r\n}\r\n.ID.left > .modal-dialog {\r\n    -webkit-transform: translateX(-25%);\r\n            transform: translateX(-25%);\r\n    -webkit-animation: ID--left .5s ease-out;\r\n            animation: ID--left .5s ease-out;\r\n}\r\n.ID.right > .modal-dialog {\r\n    -webkit-transform: translateX(25%);\r\n            transform: translateX(25%);\r\n    -webkit-animation: ID--right .5s ease-out;\r\n            animation: ID--right .5s ease-out;\r\n}\r\n.ID.in > .modal-dialog {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n}\r\n.ID.left > .modal-dialog + .modal-dialog {\r\n    margin-left: -5%;\r\n}\r\n.ID.right > .modal-dialog + .modal-dialog {\r\n    margin-right: -5%;\r\n}\r\n.ID > .modal-dialog:nth-last-child(n+2):after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0,0,0,.1);\r\n}\r\n\r\n\r\n.ID > .modal-dialog > .modal-content {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -moz-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: column;\r\n       -moz-box-orient: vertical;\r\n       -moz-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 100%;\r\n}\r\n.ID.left > .modal-dialog > .modal-content {\r\n    -webkit-border-top-left-radius: 0;\r\n            border-top-left-radius: 0;\r\n    -webkit-border-bottom-left-radius: 0;\r\n            border-bottom-left-radius: 0;\r\n}\r\n.ID.right > .modal-dialog > .modal-content {\r\n    -webkit-border-top-right-radius: 0;\r\n            border-top-right-radius: 0;\r\n    -webkit-border-bottom-right-radius: 0;\r\n            border-bottom-right-radius: 0;\r\n}\r\n\r\n\r\n.ID > .modal-dialog > .modal-content > .modal-body {\r\n    height: 0;\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex-grow: 1;\r\n       -moz-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n@-webkit-keyframes ID--left {\r\n    0% {\r\n        -webkit-transform: translateX(-50%);\r\n                transform: translateX(-50%);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n\r\n\r\n@keyframes ID--left {\r\n    0% {\r\n        -webkit-transform: translateX(-50%);\r\n                transform: translateX(-50%);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n@-webkit-keyframes ID--right {\r\n    0% {\r\n        -webkit-transform: translateX(50%);\r\n                transform: translateX(50%);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n@keyframes ID--right {\r\n    0% {\r\n        -webkit-transform: translateX(50%);\r\n                transform: translateX(50%);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n";
styleInject(css_248z);

/**
 * 初始化 modal-dialog
 * @param {SidePopup|SubPopup} instance
 * @returns {jQuery}
 */

function initDialog(instance) {
  var opts = instance.options;
  var $content = $$1('<div class="modal-content"></div>');

  if (opts.header.show) {
    $content.append(initHeader(instance));
  }

  if (opts.body.show) {
    $content.append(initBody(opts.body));
  }

  if (opts.footer.show) {
    var $footer = initBody(opts.footer); // footer 的初始化逻辑与 body 一样

    if (opts.buttons) {
      initButtons($footer, opts.buttons);
    }

    $content.append($footer);
  }

  var $dialog = $$1("<div ".concat($$1.map(opts.attrs, function (v, k) {
    return "".concat(k, "=\"").concat(v, "\"");
  }).join(' '), "></div>"));
  if (opts.width) $dialog.css('width', opts.width);
  if (opts.addedClass) $el.addClass(opts.addedClass);
  return $dialog.append($content);
}
/**
 * 初始化 modal-header
 * @param {SubPopup} instance
 * @returns {jQuery}
 */

function initHeader(instance) {
  var opts = instance.options.header;
  var $header = $$1("<".concat(opts.tag, " ").concat($$1.map(opts.attrs, function (v, k) {
    return "".concat(k, "=\"").concat(v, "\"");
  }).join(' '), "></").concat(opts.tag, ">"));

  if (opts.showCloseBtn) {
    var $btn = $$1('<button class="close" type="button">&times;</button>');
    $btn.click(function (_) {
      return instance.close();
    });
    $header.append($btn);
  }

  if (opts.title) {
    $header.append("<h4 class=\"modal-title\">".concat(opts.title, "</h4>"));
  }

  if (opts.addedClass) $header.addClass(opts.addedClass);
  if (opts.html) $header.append(opts.html);
  return $header;
}
/**
 * 初始化 modal-body
 * @param {object} opts 
 * @returns {jQuery}
 */


function initBody(opts) {
  var $el = $$1("<".concat(opts.tag, " ").concat($$1.map(opts.attrs, function (v, k) {
    return "".concat(k, "=\"").concat(v, "\"");
  }).join(' '), "></").concat(opts.tag, ">"));
  if (opts.addedClass) $el.addClass(opts.addedClass);
  if (opts.html) $el.append(opts.html);
  return $el;
}
/**
 * 初始化按钮
 * @param {jQuery} $parent 父元素
 * @param {object[]} opts 
 */


function initButtons($parent, opts) {
  $$1.each(opts, function (_, item) {
    var $btn = $$1("<button ".concat($$1.map(item.attrs, function (v, k) {
      return "".concat(k, "=\"").concat(v, "\"");
    }).join(' '), "></button>"));
    if (item.addedClass) $btn.addClass(item.addedClass);
    if (item.html) $btn.append(item.html);
    if (item.onClick) $btn.click(item.onClick);
    $parent.append($btn);
  });
}
/**
 * 增加样式
 * @param {string} id 
 */


function appendStyles(id) {
  var html = "<style class=\"ID\" type=\"text/css\">".concat(css_248z, "</style>");
  html = html.replace(/ID/g, id);
  $$1(document.body).append(html);
}
/**
 * 初始化 SidePopup
 * @param {SidePopup} instance 
 * @returns {jQuery}
 */

function initSidePopup(instance) {
  var opts = instance.options;
  var id = instance.constructor.id;
  var $el = $$1("<div class=\"modal fade\" tabindex=\"-1\"></div>");
  $el.addClass(id);
  $el.addClass(opts.type === 'left' ? 'left' : 'right');

  if (opts.backdrop) {
    $el.click(function (event) {
      if (this !== event.target) return;

      if (instance._subPopupList.length) {
        instance.closeSubPopup();
      } else {
        instance.close();
      }
    });
  }

  var $dialog = initDialog(instance);
  $dialog.data(id, instance); // 挂载组件实例到弹窗上

  return $el.append($dialog);
}
/**
 * 等待渲染
 * @param {function} fn 
 */

function waitForRender(fn) {
  if (Promise) {
    Promise.resolve().then(fn);
  } else {
    setTimeout(fn);
  }
}

var SubPopup = /*#__PURE__*/function () {
  function SubPopup(opts) {
    _classCallCheck(this, SubPopup);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "element", void 0);

    this.options = $.extend(true, {}, options, opts);
    this.element = initDialog(this);
  }
  /**
   * 关闭弹窗（从 document 中移除）
   */


  _createClass(SubPopup, [{
    key: "close",
    value: function close() {
      this.element.remove();
    }
  }]);

  return SubPopup;
}();

var SidePopup = /*#__PURE__*/function () {
  function SidePopup(opts) {
    _classCallCheck(this, SidePopup);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "_subPopupList", []);

    if (!$$1("style.".concat(SidePopup.id)).length) {
      appendStyles(SidePopup.id); // 添加样式
    }

    this.options = $$1.extend(true, {}, options, opts);
    this.element = initSidePopup(this);
    this.element.appendTo(document.body);

    if (typeof opts.afterRender === 'function') {
      waitForRender(opts.afterRender);
    }
  }
  /**
   * 打开弹窗（插入到 document 中）
   */


  _createClass(SidePopup, [{
    key: "open",
    value: function open() {
      this.show();
      this.element.appendTo(document.body);
    }
    /**
     * 关闭弹窗（从 document 中移除）
     */

  }, {
    key: "close",
    value: function close() {
      this.element.remove();
    }
    /**
     * 显示弹窗
     */

  }, {
    key: "show",
    value: function show() {
      this.element.addClass('in');
    }
    /**
     * 隐藏弹窗
     */

  }, {
    key: "hide",
    value: function hide() {
      this.element.removeClass('in');
    }
    /**
     * 打开子弹窗
     * @param {object} opts 
     */

  }, {
    key: "openSubPopup",
    value: function openSubPopup(opts) {
      var subPopup = new SubPopup(opts);

      this._subPopupList.push(subPopup);

      this.element.append(subPopup.element);

      if (typeof opts.afterRender === 'function') {
        waitForRender(opts.afterRender);
      }
    }
    /**
     * 关闭子弹窗
     */

  }, {
    key: "closeSubPopup",
    value: function closeSubPopup() {
      var subPopup = this._subPopupList.pop();

      if (subPopup) subPopup.close();
    }
    /**
     * 打开弹窗
     * @param {string|Element|jQuery|object} param 
     * @returns {SidePopup}
     */

  }], [{
    key: "open",
    value: function open(param) {
      var popup;

      if (typeof param === 'string' || param instanceof Element || param instanceof $$1) {
        popup = $$1(param).data(SidePopup.id);
      } else if (param instanceof Object) {
        popup = new SidePopup(param);
      } else {
        throw new TypeError('错误的参数类型');
      }

      if (popup) {
        popup.open();
        return popup;
      } else {
        throw new Error('组件对象不存在');
      }
    }
    /**
     * 关闭弹窗
     * @param {string|Element|jQuery} param 
     */

  }, {
    key: "close",
    value: function close(param) {
      var popup = $$1(param).data(SidePopup.id);
      if (popup) popup.close();
    }
  }]);

  return SidePopup;
}();

_defineProperty(SidePopup, "id", 'SIDE_POPUP');

_defineProperty(SidePopup, "defaultOptions", options);

export default SidePopup;
//# sourceMappingURL=side-popup.mjs.map
