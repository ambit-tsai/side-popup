import $ from 'jquery';
import styles from './styles.css';


/**
 * 初始化 modal-dialog
 * @param {SidePopup|SubPopup} instance
 * @returns {jQuery}
 */
export function initDialog(instance) {
    const opts = instance.options;
    const $content = $('<div class="modal-content"></div>');
    if (opts.header.show) {
        $content.append(initHeader(instance));
    }
    if (opts.body.show) {
        $content.append(initBody(opts.body));
    }
    if (opts.footer.show) {
        const $footer = initBody(opts.footer);    // footer 的初始化逻辑与 body 一样
        if (opts.buttons) {
            initButtons($footer, opts.buttons);
        }
        $content.append($footer);
    }

    const $dialog = $(`<div ${$.map(opts.attrs, (v, k) => `${k}="${v}"`).join(' ')}></div>`);
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
    const opts = instance.options.header;
    const $header = $(`<${opts.tag} ${$.map(opts.attrs, (v, k) => `${k}="${v}"`).join(' ')}></${opts.tag}>`);
    if (opts.showCloseBtn) {
        const $btn = $('<button class="close" type="button">&times;</button>');
        $btn.click(_ => instance.close());
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
 * 初始化 SidePopup
 * @param {SidePopup} instance 
 * @returns {jQuery}
 */
export function initSidePopup(instance) {
    const opts = instance.options;
    const id = instance.constructor.id;
    const $el = $(`<div class="modal fade" tabindex="-1"></div>`);
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

    const $dialog = initDialog(instance);
    $dialog.data(id, instance); // 挂载组件实例到弹窗上
    return $el.append($dialog);
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