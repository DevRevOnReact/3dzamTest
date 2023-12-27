import type { GetStaticProps } from 'next';
import { makeStaticProps } from 'src/lib/helpers/getStatic';
import { AddProduct } from '@/pages/AddProduct';

const AddProductPage = () => <AddProduct />;

export const getStaticProps: GetStaticProps = makeStaticProps(['common']);

export default AddProductPage;
