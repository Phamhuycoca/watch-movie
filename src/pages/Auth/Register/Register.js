import React from 'react';
import { useStyleRegister } from '@ant-design/cssinjs';
import { Button, Checkbox, Col, Form, Image, Input, Row, theme } from 'antd';
import pricing_bg from './../../../assets/pricing_bg.jpg';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from './../../../assets/logo.png';
import { genRegister } from './genRegister.style';

const prefixCls = 'custom-login';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Register = () => {
    const { token } = theme.useToken(); // Di chuyển useToken vào trong component
    const infoStyle = { token, path: [prefixCls] };

    const wrapSSR = useStyleRegister(infoStyle, () =>
        genRegister(prefixCls, infoStyle.token),
    );

    return wrapSSR(
        <div className={classNames(prefixCls, infoStyle.hashId)}>
            <Row
                justify={'center'}
                style={{
                    height: '100%',
                    minHeight: '912px',
                    alignItems: 'center',
                    backgroundImage: `url(${pricing_bg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <Col>
                    <Row justify={'center'} className="mb-4">
                        <Image
                            src={logo}
                            height={50}
                            width={200}
                            preview={false}
                        />
                    </Row>
                    <Row>
                        <Form
                            layout="vertical"
                            name="basic"
                            style={{
                                maxWidth: 400,
                                width: '100%',
                                minWidth: 400,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label={
                                    <span
                                        style={{
                                            color: '#e0d505',
                                            fontSize: '18px',
                                        }}
                                    >
                                        Tên đăng nhập
                                    </span>
                                }
                                name="username"
                            >
                                <Input
                                    variant="borderless"
                                    size="large"
                                    placeholder="Nhập thông tin"
                                    style={{
                                        borderBottom: '1px solid #e0d505',
                                        borderRadius: '0px',
                                        caretColor: '#e0d505',
                                        color: '#fff',
                                        fontSize: '18px',
                                        lineHeight: '40px',
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                label={
                                    <span
                                        style={{
                                            color: '#e0d505',
                                            fontSize: '18px',
                                        }}
                                    >
                                        Mật khẩu
                                    </span>
                                }
                                name="password"
                            >
                                <Input.Password
                                    variant="borderless"
                                    size="large"
                                    placeholder="Nhập thông tin"
                                    style={{
                                        borderBottom: '1px solid #e0d505',
                                        borderRadius: '0px',
                                        caretColor: '#e0d505',
                                        color: '#fff',
                                        fontSize: '18px',
                                        lineHeight: '40px',
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                label={
                                    <span
                                        style={{
                                            color: '#e0d505',
                                            fontSize: '18px',
                                        }}
                                    >
                                        Nhập lại mật khẩu
                                    </span>
                                }
                                name="password"
                            >
                                <Input.Password
                                    variant="borderless"
                                    size="large"
                                    placeholder="Nhập thông tin"
                                    style={{
                                        borderBottom: '1px solid #e0d505',
                                        borderRadius: '0px',
                                        caretColor: '#e0d505',
                                        color: '#fff',
                                        fontSize: '18px',
                                        lineHeight: '40px',
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                label={null}
                            >
                                <Row justify={'space-between'}>
                                    <Checkbox style={{ color: '#fff' }}>
                                        Ghi nhớ thông tin
                                    </Checkbox>
                                    <Link style={{ color: '#fff' }} to="/login">
                                        Bạn đã có tài khoản?
                                    </Link>
                                </Row>
                            </Form.Item>

                            <Form.Item label={null}>
                                <Row justify={'center'}>
                                    <Button htmlType="submit">Đăng ký</Button>
                                </Row>
                            </Form.Item>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </div>,
    );
};

export default Register;
