export default {
    backdrop: false,
    attrs: {
        class: 'modal-dialog',
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