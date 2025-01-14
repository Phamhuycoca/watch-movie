import { Layout } from 'antd';
const { Header } = Layout;
function HeaderAdmin() {
    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
            }}
        >
            <div className="demo-logo" />
        </Header>
    );
}

export default HeaderAdmin;
