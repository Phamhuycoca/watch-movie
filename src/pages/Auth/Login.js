import React from 'react';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import breadcrumb_bg from './../../assets/pricing_bg.jpg';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Login = () => (
    <Row
        justify={'center'}
        style={{
            height: '100%',
            minHeight: '912px',

            alignItems: 'center',
            backgroundImage: `url(${breadcrumb_bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}
    >
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
                label={<span style={{ color: '#e0d505' }}>Tên đăng nhập</span>}
                name="username"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={<span style={{ color: '#e0d505' }}>Mật khẩu</span>}
                name="password"
            >
                <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" label={null}>
                <Checkbox>Ghi nhớ thông tin</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
                <Row justify={'center'}>
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Row>
            </Form.Item>
        </Form>
    </Row>
);
export default Login;
