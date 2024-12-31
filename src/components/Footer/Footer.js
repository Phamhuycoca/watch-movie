import { Col, Divider, Image, Layout, Row } from 'antd';
import logo from './../../assets/logo.png';
import footerbg from './../../assets/footer_bg.jpg';
import card_img from './../../assets/card_img.png';
import newsletter_bg from './../../assets/newsletter_bg.jpg';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const { Footer } = Layout;
const cx = classNames.bind(styles);
function FooterPage() {
    const links = [
        { name: 'HOME' },
        { name: 'MOVIE' },
        { name: 'TV SHOW' },
        { name: 'PAGES' },
        { name: 'PRICING' },
    ];
    const contents = [
        { name: 'FAQ' },
        { name: 'HELP CENTER' },
        { name: 'TV TERMS OF USE' },
        { name: 'PRIVACY' },
    ];
    const icons = [
        {
            icon: 'ri-facebook-fill',
        },
        {
            icon: 'ri-twitter-fill',
        },
        {
            icon: 'ri-pinterest-fill',
        },
        {
            icon: 'ri-linkedin-fill',
        },
    ];
    return (
        <>
            <div
                style={{
                    width: '100vw',
                    height: '154px',
                    backgroundImage: `url(${newsletter_bg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className={cx('newsletter')}>
                    <div className={cx('newsletter-content')}>
                        <h4>Trial Start First 30 Days.</h4>
                        <p>
                            Enter your email to create or restart your
                            membership.
                        </p>
                    </div>
                    <div>
                        <SearchInput />
                    </div>
                </div>
            </div>
            <Footer
                style={{
                    backgroundColor: '#333',
                    height: '250px',
                    backgroundImage: `url(${footerbg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    marginBottom: '0',
                    width: '100vw',
                }}
            >
                <Row
                    gutter={[20, 20]}
                    justify={'space-between'}
                    className="mt-2"
                >
                    <Col span={5}>
                        <Image src={logo} alt="logo" preview={false} />
                    </Col>
                    <Col span={14}>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col span={12}>
                                <Row justify={'space-between'}>
                                    {links.map((link, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                className={cx('link')}
                                            >
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row justify={'end'}>
                                    <IntputSearch />
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Divider
                    variant="dashed"
                    className={cx('divider')}
                    style={{
                        backgroundColor: 'rgb(18, 21, 30)',
                        boxShadow: '0px 3px 0px 0px rgba(143, 143, 143, 0.14)',
                    }}
                ></Divider>
                <Row className="mt-5" justify={'space-between'}>
                    <Col span={6}>
                        <Row justify={'space-between'}>
                            {contents.map((link, index) => {
                                return (
                                    <Link key={index} className={cx('link')}>
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </Row>
                    </Col>
                    <Col
                        span={2}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        {icons.map((icon, index) => {
                            return <IconCircle icon={icon.icon} key={index} />;
                        })}
                    </Col>
                </Row>
            </Footer>
            <Row className={cx('copyright-wrap')} justify={'space-between'}>
                <Col span={6}>
                    <div className={cx('copyright-text')}>
                        <p>
                            Copyright © 2021. All Rights Reserved By{' '}
                            <Link className={cx('copyright-text-link')}>
                                Movflx
                            </Link>
                        </p>
                    </div>
                </Col>
                <Col span={5}>
                    <div className={cx('copyright-text-img')}>
                        <Image src={card_img} preview={false} />
                    </div>
                </Col>
            </Row>
        </>
    );
}
const SearchInput = () => {
    return (
        <div className={cx('input-form')}>
            <input placeholder="Enter your email" name="email" type="email" />
            <button className={cx('button-search')}>GET STARTED</button>
        </div>
    );
};

const IntputSearch = () => {
    return (
        <div className={cx('search')}>
            <input
                type="text"
                className={cx('search__input')}
                placeholder="Find Favorite Moive"
            />
            <button className={cx('search__button')}>
                <svg
                    className={cx('search__icon')}
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                >
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
            </button>
        </div>
    );
};
const IconCircle = ({ icon }) => {
    return (
        <div className="button-container">
            <button className={cx('button-circle', 'flex-center')}>
                <i className={cx(`${icon}`, 'btn-svg')}></i>
            </button>
        </div>
    );
};
export default FooterPage;
