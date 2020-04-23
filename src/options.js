export default {
    attrs: {
        class: 'modal fade',
        tabindex: '-1',
    },
    header: {
        show: true,
        tag: 'div',
        showCloseBtn: true,
        attrs: {
            class: 'modal-header',
        },
    },
    body: {
        show: true,
        tag: 'div',
        attrs: {
            class: 'modal-body',
        },
    },
    footer: {
        show: true,
        tag: 'div',
        attrs: {
            class: 'modal-footer',
        },
    },
    buttons: [{
        html: '确定',
        attrs: {
            class: 'btn btn-primary',
            type: 'button',
        },
    }],
};