import { Layout } from 'antd';
const { Header } = Layout;
function HeaderPage() {
    return (
        <>
            <Header
                color="#fff"
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                }}
            >
                <div className="demo-logo" />
            </Header>
        </>
    );
}

export default HeaderPage;
