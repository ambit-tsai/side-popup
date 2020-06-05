import options from './options';
import {initDialog} from './functions';


export default class SubPopup {
    options;
    element;


    constructor(opts) {
        this.options = $.extend(true, {}, options, opts);
        this.element = initDialog(this);
    }


    /**
     * 关闭弹窗（从 document 中移除）
     */
    close() {
        this.element.remove();
    }
}