
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import 'src/styles/main.scss';
import { AppLayout } from '@/layout/AppLayout';
import { useRouter } from 'next/router';
import { Footer } from '@/layout/AppLayout/Footer';

const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();

	const allowedRoutes = ['/login', '/registration/user', '/registration/published'];

		if (allowedRoutes.includes(router.asPath)) {
  			return <>
				<Component {...pageProps} />
				<Footer/>
			</>;
		} 

	return (
		<AppLayout>
			<Component {...pageProps} />
		</AppLayout>
	)
};

export default appWithTranslation(App);
