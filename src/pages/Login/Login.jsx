import {
  FormWrap,
  LogButton,
  UserIcon,
  PasswordIcon,
  InputForm,
  RegLink,
  Container,
  TitleReg,
  LinkToRegister,
} from './Login.styled';

import { loginization } from 'redux/Authorization/operations';
import { useDispatch } from 'react-redux';

export default function Login() {
  const [form] = FormWrap.useForm(); // Витягується хук useForm з компоненту FormWrap та його розпаковується до змінної form.
  const dispatch = useDispatch(); // Витягується діспетчер Redux за допомогою функції useDispatch та його присвоюється змінній dispatch.

  const onFinish = values => {
    dispatch(loginization(values)); // для відправки даних на сервер
    form.resetFields(); // для очищення полів форми
  };

  return (
    <section>
      <Container>
        <FormWrap
          form={form}
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <TitleReg>Log in</TitleReg>
          <FormWrap.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
                type: 'email',
              },
            ]}
          >
            <InputForm prefix={<UserIcon />} placeholder="Email" />
          </FormWrap.Item>
          <FormWrap.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <InputForm
              prefix={<PasswordIcon />}
              type="password"
              placeholder="Password"
            />
          </FormWrap.Item>
          <FormWrap.Item>
            <LogButton type="primary" htmlType="submit">
              Log in
            </LogButton>
            <RegLink>
              Or <LinkToRegister to="/register">register now</LinkToRegister>
            </RegLink>
          </FormWrap.Item>
        </FormWrap>
      </Container>
    </section>
  );
}
