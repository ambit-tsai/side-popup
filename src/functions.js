import $ from 'jquery';
import styles from './styles.css';


/**
 * 初始化 DOM
 * @param {SidePopup} instance 
 * @returns {jQuery}
 */
export function initDOM(instance) {
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
 * @param {SidePopup} [instance] 
 * @returns {jQuery}
 */
export function initDialog(opts, instance) {
    const $content = $('<div class="modal-content"></div>');
    if (opts.header.show) {
        $content.append(initHeader(opts.header, instance));
    }
    if (opts.body.show) {
        $content.append(initBody(opts.body));
    }
    if (opts.footer.show) {
        const $footer = initBody(opts.footer);    // footer 的处理逻辑与 body 一样
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
 * @param {SidePopup} [instance] 
 * @returns {jQuery}
 */
function initHeader(opts, instance) {
    const $header = $(`<${opts.tag} ${$.map(opts.attrs, (v, k) => `${k}="${v}"`).join(' ')}></${opts.tag}>`);
    if (opts.showCloseBtn) {
        const $btn = $('<button class="close" type="button">&times;</button>');
        if (instance) {
            $btn.click(_ => instance.close());
        } else {
            $btn.click(_ => {
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
export function appendStyles(id) {
    let html = `<style class="ID" type="text/css">${styles}</style>`;
    html = html.replace(/ID/g, id);
    $(document.body).append(html);
}


/**
 * 等待渲染
 * @param {function} fn 
 */
export function waitForRender(fn) {
    if (Promise) {
        Promise.resolve().then(fn)
    } else {
        setTimeout(fn);
    }
}