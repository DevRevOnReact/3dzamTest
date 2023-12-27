
import { RegisterPublished } from '@/pages/Register/Published/RegisterPublished';
import type { GetStaticProps } from 'next';
import { makeStaticProps } from 'src/lib/helpers/getStatic';


const RegistrationPublishedPage = () => <RegisterPublished />;

export const getStaticProps: GetStaticProps = makeStaticProps(['common']);

export default RegistrationPublishedPage;