import { Input, Modal } from 'antd';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createStyles } from 'antd-style';
import { SearchOutlined } from '@ant-design/icons';

const useStyle = createStyles(({ token }) => ({
    'my-modal-body': {
        backgroundColor: 'transparent',
        border: 'none',
    },
    'my-modal-mask': {
        backdropFilter: 'blur(10px)',
    },
    'my-modal-header': {},
    'my-modal-footer': {
        color: token.colorPrimary,
    },
    'my-modal-content': {
        border: 'none',
        backgroundColor: 'transparent',
        boxShadow: 'none !important',
    },
}));

function ModalSearch({ IsOpen, OnClose }) {
    const [open, setOpen] = useState(false);
    const { styles } = useStyle();
    const classNames = {
        body: styles['my-modal-body'],
        mask: styles['my-modal-mask'],
        header: styles['my-modal-header'],
        content: styles['my-modal-content'],
    };
    const modalStyles = {
        mask: {
            backgroundColor: 'rgba(23, 26, 33, .95)',
            backdropFilter: 'blur(10px)',
        },
        content: {
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none !important',
        },
    };

    useEffect(() => {
        setOpen(IsOpen);
    }, [IsOpen]);
    const handleClose = () => {
        setOpen(false);
        OnClose();
    };

    return (
        <Modal
            centered
            closeIcon={false}
            maskClosable={true}
            open={open}
            onCancel={handleClose}
            classNames={classNames}
            styles={modalStyles}
            footer={null}
        >
            <Input
                variant="borderless"
                size="large"
                placeholder="Search here..."
                style={{
                    borderBottom: '1px solid black',
                    borderRadius: '0px',
                    caretColor: '#e0d505',
                    color: '#fff',
                    fontSize: '32px',
                    lineHeight: '40px',
                }}
                suffix={
                    <SearchOutlined
                        style={{ color: '#e0d505', fontSize: '32px' }}
                    />
                }
            />
        </Modal>
    );
}

ModalSearch.propTypes = {
    IsOpen: PropTypes.bool,
    OnClose: PropTypes.func,
};
export default ModalSearch;
