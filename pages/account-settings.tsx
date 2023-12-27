import type { GetStaticProps } from 'next';
import { makeStaticProps } from 'src/lib/helpers/getStatic';
import { AddProduct } from '@/pages/AddProduct';
import { AccountSettings } from '@/pages/AccountSetting';

const AccountSettingsPage = () => <AccountSettings />;

export const getStaticProps: GetStaticProps = makeStaticProps(['common']);

export default AccountSettingsPage;
