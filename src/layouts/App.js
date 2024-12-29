import { Outlet } from 'react-router-dom';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import classNames from 'classnames/bind';
import { Layout } from 'antd';
import styles from './../styles/App.module.scss';
import ScrollToTopButton from '~/components/ScrollToTopButton/ScrollToTopButton';
const cx = classNames.bind(styles);
const { Content } = Layout;

function App() {
    return (
        <div className="App">
            <Header />
            <div className={cx('main')}>
                <Content
                    style={{
                        margin: '24px 16px 0',
                        overflow: 'initial',
                    }}
                >
                    <Outlet />
                    <ScrollToTopButton />
                </Content>
            </div>
            <Footer />
        </div>
    );
}

export default App;
