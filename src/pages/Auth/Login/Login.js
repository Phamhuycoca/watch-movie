import React from 'react';
import { useStyleRegister } from '@ant-design/cssinjs';
import {
    Button,
    Checkbox,
    Col,
    Divider,
    Form,
    Image,
    Input,
    Row,
    theme,
} from 'antd';
import pricing_bg from './../../../assets/pricing_bg.jpg';
import classNames from 'classnames';
import { genLogin } from './genLogin.style';
import { Link } from 'react-router-dom';
import logo from './../../../assets/logo.png';

const prefixCls = 'custom-login';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Login = () => {
    const { token } = theme.useToken(); // Di chuyển useToken vào trong component
    const infoStyle = { token, path: [prefixCls] };

    const wrapSSR = useStyleRegister(infoStyle, () =>
        genLogin(prefixCls, infoStyle.token),
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
                                        Username
                                    </span>
                                }
                                name="username"
                            >
                                <Input
                                    variant="borderless"
                                    size="large"
                                    placeholder="Enter your username"
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
                                        Password
                                    </span>
                                }
                                name="password"
                            >
                                <Input.Password
                                    variant="borderless"
                                    size="large"
                                    placeholder="Enter your password"
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
                                        Remember me
                                    </Checkbox>
                                    <Link
                                        style={{ color: '#fff' }}
                                        to="/register"
                                    >
                                        Forgot password?
                                    </Link>
                                </Row>
                            </Form.Item>

                            <Form.Item label={null}>
                                <Row justify={'center'}>
                                    <Button
                                        style={{ width: '100%' }}
                                        htmlType="submit"
                                    >
                                        Login
                                    </Button>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row justify={'center'}>
                                    <Divider
                                        style={{
                                            borderColor: '#e0d505',
                                            color: '#fff',
                                        }}
                                    >
                                        OR
                                    </Divider>
                                </Row>
                                <Row justify={'center'}>
                                    <span style={{ color: '#fff' }}>
                                        Don't have an account?{' '}
                                        <Link to="/register">Signup now</Link>
                                    </span>
                                </Row>
                            </Form.Item>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </div>,
    );
};

export default Login;
