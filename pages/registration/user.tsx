import { RegisterUser } from '@/pages/Register';
import type { GetStaticProps } from 'next';
import { makeStaticProps } from 'src/lib/helpers/getStatic';


const RegistrationUserPage = () => <RegisterUser />;

export const getStaticProps: GetStaticProps = makeStaticProps(['common']);

export default RegistrationUserPage;