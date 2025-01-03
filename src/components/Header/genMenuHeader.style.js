export const genMenuHeader = (prefixCls, token) => ({
    [`.${prefixCls}`]: {
        '.ant-image': {
            position: 'relative',
            display: 'inline-block',
        },
        '.ant-menu-light .ant-menu-item': {
            color: '#fff',
        },

        '.ant-menu-title-content': {
            fontWeight: 'bolder',
            textTransform: 'uppercase',
            fontFamily: 'Poppins, sans-serif',
        },
        '.ant-menu-light .ant-menu-submenu-title': {
            color: '#fff',
        },
        '.ant-menu-light .ant-menu-submenu-selected >.ant-menu-submenu-title': {
            color: '#e0d505',
        },
        '.ant-menu-horizontal >.ant-menu-item:hover, .ant-menu-horizontal >.ant-menu-item-active':
            {
                color: '#e0d505 !important',
            },
        '.ant-menu-light.ant-menu-horizontal >.ant-menu-item-selected': {
            color: '#e0d505',
        },
        '.ant-menu-light .ant-menu-item-selected': {
            color: '#e0d505',
        },
        '.ant-menu-title-content:hover': {
            color: '#e0d505',
        },
        '.ant-menu-light.ant-menu-horizontal >.ant-menu-item::after': {
            content: 'none',
        },
        '.ant-menu-light.ant-menu-horizontal >.ant-menu-submenu::after': {
            content: 'none',
        },
        '.ant-menu-light.ant-menu-submenu-popup>.ant-menu': {
            backgroundColor: '#171d22',
        },
        '.ant-menu-light.ant-menu-submenu>.ant-menu': {
            backgroundColor: '#171d22',
        },
        '.ant-menu-light>.ant-menu': {
            backgroundColor: '#171d22',
        },
        '.ant-menu-submenu-popup.ant-menu-submenu': {
            backgroundColor: '#171d22',
        },
        '.anticon .anticon-search:hover': {
            backgroundColor: '#e0d505',
        },
        '.ant-menu-submenu-popup .ant-menu-vertical.ant-menu-sub:not([class*="-active"])':
            {
                backgroundColor: 'black !important',
            },
        'ul .ant-menu .ant-menu-sub .ant-menu-vertical': {
            backgroundColor: '#e0d505',
        },
        '.ant-btn-lg': {
            width: '130px',
        },
        '.ant-btn-color-default': {
            height: '50px',
            color: '#fff',
            fontWeight: 'bolder',
            fontSize: '14px',
        },
        '.ant-btn-variant-outlined': {
            backgroundColor: '#171d22',
            borderColor: '#e0d505',
        },
        '.ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover':
            {
                color: '#333',
                backgroundColor: '#e0d505',
                borderColor: '#e0d505',
            },
    },
});
