export const genMenuHeader = (prefixCls, token) => ({
    [`.${prefixCls}`]: {
        '.ant-image': {
            top: '-12px',
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
        '.ant-menu-submenu-popup.ant-menu-submenu': {
            backgroundColor: '#171d22',
        },
    },
});