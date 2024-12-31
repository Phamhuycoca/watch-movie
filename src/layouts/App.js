import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import classNames from 'classnames/bind';
import ScrollToTopButton from '~/components/ScrollToTopButton/ScrollToTopButton';
import styles from './../styles/App.module.scss';
const cx = classNames.bind(styles);
const { Content } = Layout;

function App() {
    return (
        <div className={cx('App')}>
            <Header />
            <div className={cx('main')}>
                <Content>
                    <Outlet />
                    <ScrollToTopButton />
                </Content>
            </div>
            <Footer />
        </div>
    );
}

export default App;
