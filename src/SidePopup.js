import options from './options';
import $ from 'jquery';
import {initDOM, initDialog, appendStyles} from './functions';


export default class SidePopup {
    static id = 'SIDE_POPUP';
    static defaultOptions = options;


    constructor(opts) {
        this.options = $.extend(true, opts, options);
        this.element = initDOM(this);
        this.element.data(SidePopup.id, this);  // 挂载组件对象到元素上
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
        this.element
            .children('.modal-dialog')
            .not(':first')
            .last()
            .remove();
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
