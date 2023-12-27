import type { GetStaticProps } from 'next';
import { makeStaticProps } from 'src/lib/helpers/getStatic';
import {Catalogs} from "@/pages/Catalogs";
import { Notification } from '@/pages/Notification';

const NotificationPage = () => <Notification />;

export const getStaticProps: GetStaticProps = makeStaticProps(['common']);

export default NotificationPage;
