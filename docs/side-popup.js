(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, global.SidePopup = factory(global.jQuery));
}(this, (function ($) { 'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;

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
    attrs: {
      class: 'modal',
      tabindex: '-1'
    },
    header: {
      show: true,
      tag: 'div',
      showCloseBtn: true,
      attrs: {
        class: 'modal-header'
      }
    },
    body: {
      show: true,
      tag: 'div',
      attrs: {
        class: 'modal-body'
      }
    },
    footer: {
      show: true,
      tag: 'div',
      attrs: {
        class: 'modal-footer'
      }
    },
    buttons: [{
      html: '确定',
      attrs: {
        class: 'btn btn-primary',
        type: 'button'
      }
    }]
  };

  var styles = "\r\n.ID.modal {\r\n    display: flex;\r\n    background-color: rgba(0,0,0,.5);\r\n    overflow: auto;\r\n}\r\n.ID.right {\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n\r\n.ID > .modal-dialog {\r\n    flex-shrink: 0;\r\n    margin: 0;\r\n}\r\n.ID.left > .modal-dialog {\r\n    animation: ID_left_first 1s;\r\n}\r\n.ID.right > .modal-dialog {\r\n    animation: ID_right_first 1s;\r\n}\r\n.ID.left > .modal-dialog + .modal-dialog {\r\n    margin-left: -5%;\r\n    animation: ID_left_other 1s;\r\n}\r\n.ID.right > .modal-dialog + .modal-dialog {\r\n    margin-right: -5%;\r\n    animation: ID_right_other 1s;\r\n}\r\n.ID > .modal-dialog:nth-last-child(n+2):after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0,0,0,.1);\r\n}\r\n\r\n\r\n.ID > .modal-dialog > .modal-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n.ID.left > .modal-dialog > .modal-content {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n.ID.right > .modal-dialog > .modal-content {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n\r\n.ID > .modal-dialog > .modal-content > .modal-body {\r\n    height: 0;\r\n    flex-grow: 1;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n@keyframes ID_left_first {\r\n    0% {\r\n        transform: translateX(-100%);\r\n    }\r\n    100% {\r\n        transform: translateX(0);\r\n    }\r\n}\r\n@keyframes ID_right_first {\r\n    0% {\r\n        transform: translateX(100%);\r\n    }\r\n    100% {\r\n        transform: translateX(0);\r\n    }\r\n}\r\n@keyframes ID_left_other {\r\n    0% {\r\n        transform: translateX(-50%) rotateY(90deg);\r\n    }\r\n    100% {\r\n        transform: translateX(0) rotateY(0);\r\n    }\r\n}\r\n@keyframes ID_right_other {\r\n    0% {\r\n        transform: translateX(50%) rotateY(90deg);\r\n    }\r\n    100% {\r\n        transform: translateX(0) rotateY(0);\r\n    }\r\n}";

  /**
   * 初始化 DOM
   * @param {SidePopup} instance 
   * @returns {jQuery}
   */

  function initDOM(instance) {
    const opts = instance.options;
    const $el = $(`<div ${$.map(opts.attrs, (v, k) => `${k}="${v}"`).join(' ')}></div>`);
    $el.addClass(instance.constructor.id);
    $el.addClass(opts.type === 'left' ? 'left' : 'right');
    if (opts.addedClass) $el.addClass(opts.addedClass);
    return $el.append(initDialog(opts, instance));
  }
  /**
   * 初始化 modal-dialog
   * @param {object} opts 
   * @param {SidePopup} instance 
   * @returns {jQuery}
   */

  function initDialog(opts, instance) {
    const $content = $('<div class="modal-content"></div>');

    if (opts.header.show) {
      $content.append(initHeader(opts.header, instance));
    }

    if (opts.body.show) {
      $content.append(initBody(opts.body));
    }

    if (opts.footer.show) {
      const $footer = initBody(opts.footer); // footer 的处理逻辑与 body 一样

      if (opts.buttons) {
        initButtons($footer, opts.buttons);
      }

      $content.append($footer);
    }

    const $dialog = $('<div class="modal-dialog"></div>').append($content);
    if (opts.width) $dialog.css('width', opts.width);
    return $dialog;
  }
  /**
   * 初始化 modal-header
   * @param {object} opts 
   * @param {SidePopup} instance 
   * @returns {jQuery}
   */

  function initHeader(opts, instance) {
    const $header = $(`<${opts.tag} ${$.map(opts.attrs, (v, k) => `${k}="${v}"`).join(' ')}></${opts.tag}>`);

    if (opts.showCloseBtn) {
      const $btn = $('<button class="close" type="button">&times;</button>');

      if (instance) {
        $btn.click(_ => instance.close());
      } else {
        $btn.click(function () {
          $header.parent().parent().remove();
        });
      }

      $header.append($btn);
    }

    if (opts.title) {
      $header.append(`<h4 class="modal-title">${opts.title}</h4>`);
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
    const $el = $(`<${opts.tag} ${$.map(opts.attrs, (v, k) => `${k}="${v}"`).join(' ')}></${opts.tag}>`);
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
    $.each(opts, (_, item) => {
      const $btn = $(`<button ${$.map(item.attrs, (v, k) => `${k}="${v}"`).join(' ')}></button>`);
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
    let html = `<style class="ID" type="text/css">${styles}</style>`;
    html = html.replace(/ID/g, id);
    $(document.body).append(html);
  }

  class SidePopup {
    constructor(opts) {
      this.options = $.extend(true, opts, options);
      this.element = initDOM(this);
      this.element.data(SidePopup.id, this); // 挂载组件对象到元素上

      this.element.appendTo(document.body);

      if (!$(`style.${SidePopup.id}`).length) {
        appendStyles(SidePopup.id);
      }
    }
    /**
     * 打开弹窗（插入到 document 中）
     */


    open() {
      this.element.appendTo(document.body);
      this.element.show();
    }
    /**
     * 关闭弹窗（从 document 中移除）
     */


    close() {
      this.element.remove();
      this.element.children('.modal-dialog').not(':first').remove();
    }
    /**
     * 显示弹窗
     */


    show() {
      this.element.show();
    }
    /**
     * 隐藏弹窗
     */


    hide() {
      this.element.hide();
    }
    /**
     * 打开子弹窗
     * @param {object} opts 
     */


    openSubPopup(opts) {
      $.extend(true, opts, options);
      this.element.append(initDialog(opts));
    }
    /**
     * 关闭子弹窗
     */


    closeSubPopup() {
      this.element.children('.modal-dialog').not(':first').last().remove();
    }
    /**
     * 打开弹窗
     * @param {string|Element|jQuery|object} param 
     * @returns {SidePopup}
     */


    static open(param) {
      let popup;

      if (typeof param === 'string' || param instanceof Element || param instanceof $) {
        popup = $(param).data(SidePopup.id);
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


    static close(param) {
      const popup = $(param).data(SidePopup.id);
      if (popup) popup.close();
    }

  }

  _defineProperty(SidePopup, "id", 'SIDE_POPUP');

  _defineProperty(SidePopup, "defaultOptions", options);

  return SidePopup;

})));
