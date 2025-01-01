export const genLogin = (prefixCls, token) => ({
    [`.${prefixCls}`]: {
        '.ant-input::placeholder': {
            color: '#fff',
        },
        '.ant-input-affix-wrapper .anticon.ant-input-password-icon': {
            color: '#e4d804',
        },
        '.ant-checkbox .ant-checkbox-inner': {
            backgroundColor: '#171d22',
            borderColor: '#e4d804',
        },
        '.ant-checkbox-checked .ant-checkbox-inner': {
            backgroundColor: '#171d22',
            borderColor: '#e4d804',
        },
        '.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover .ant-checkbox-checked:not(.ant-checkbox-disabled) .ant-checkbox-inner':
            {
                backgroundColor: '#e4d804',
            },
        '.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover .ant-checkbox-inner, .ant-checkbox:not(.ant-checkbox-disabled):hover .ant-checkbox-inner':
            {
                border: '2px solid #e4d804',

                borderColor: '#e4d804',
                backgroundColor: '#171d22',
            },
        '.ant-btn-lg': {
            width: '130px',
        },
        '.ant-btn-color-default': {
            height: '40px',
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
