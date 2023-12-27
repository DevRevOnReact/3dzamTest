import { Login } from '@/pages/Login/Login';
import type { GetStaticProps } from 'next';
import { makeStaticProps } from 'src/lib/helpers/getStatic';


const LoginPage = () => <Login />;

export const getStaticProps: GetStaticProps = makeStaticProps(['common']);

export default LoginPage;