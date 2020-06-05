import options from './options';
import $ from 'jquery';
import {appendStyles, initSidePopup, waitForRender} from './functions';
import SubPopup from './SubPopup';


export default class SidePopup {
    static id = 'SIDE_POPUP';
    static defaultOptions = options;
    options;
    element;
    _subPopupList = [];


    constructor(opts) {
        if (!$(`style.${SidePopup.id}`).length) {
            appendStyles(SidePopup.id);         // 添加样式
        }
        this.options = $.extend(true, {}, options, opts);
        this.element = initSidePopup(this);
        this.element.appendTo(document.body);
        if (typeof opts.afterRender === 'function') {
            waitForRender(opts.afterRender);
        }
    }


    /**
     * 打开弹窗（插入到 document 中）
     */
    open() {
        this.show();
        this.element.appendTo(document.body);
    }


    /**
     * 关闭弹窗（从 document 中移除）
     */
    close() {
        this.element.remove();
    }


    /**
     * 显示弹窗
     */
    show() {
        this.element.addClass('in');
    }


    /**
     * 隐藏弹窗
     */
    hide() {
        this.element.removeClass('in');
    }


    /**
     * 打开子弹窗
     * @param {object} opts 
     */
    openSubPopup(opts) {
        const subPopup = new SubPopup(opts);
        this._subPopupList.push(subPopup);
        this.element.append(subPopup.element);
        if (typeof opts.afterRender === 'function') {
            waitForRender(opts.afterRender);
        }
    }


    /**
     * 关闭子弹窗
     */
    closeSubPopup() {
        const subPopup = this._subPopupList.pop();
        if (subPopup) subPopup.close();
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
