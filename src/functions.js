import $ from 'jquery';


/**
 * 初始化 modal-dialog
 * @param {object} opts 
 * @returns {jQuery}
 */
export function initDialog(opts) {
    const $content = $('<div class="modal-content"></div>');
    if (opts.header.show) {
        $content.append(initHeader(opts.header));
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
 * @returns {jQuery}
 */
function initHeader(opts) {
    let html = `<${opts.tag} ${$.map(opts.attrs, (v, k) => `${k}="${v}"`).join(' ')}>`;
    if (opts.showCloseBtn) {
        html += '<button class="close" data-dismiss="modal" type="button">&times;</button>';
    }
    if (opts.title) {
        html += `<h4 class="modal-title">${opts.title}</h4>`;
    }
    html += `</${opts.tag}>`;
    const $el = $(html);
    if (opts.addedClass) $el.addClass(opts.addedClass);
    if (opts.html) $el.append(opts.html);
    return $el;
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
