import { Container } from '../ui/Container/Container';
import cx from './style.module.scss';
import Image from "next/image";


const Notification = () => (
    <div className={cx('container')}>
        <main className={cx('notification')}>
            <div>
        <div className={cx('notification__svg')}>
            <svg 
					width="100"
					height="100"
					viewBox="0 0 148 148"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_d_172_381)">
						<g filter="url(#filter1_d_172_381)">
							<path
								d="M59 59L89 89"
								stroke="#FF2750"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</g>
						<g filter="url(#filter2_d_172_381)">
							<path
								d="M89 59L59 89"
								stroke="#FF2750"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</g>
					</g>
				</svg>
                </div>
                </div>
                <h1 className={cx('notification__heading')}>Notification</h1>
                <div className={cx('notification__block')}>
                    <div className={cx('notification__line')}></div>
                    <div className={cx('notification__plus')}>
                    <Image
						alt="fsfdsf"
						src="/images/messageLogo.png"
						width={75}
						height={75}
						style={{
							objectFit: 'cover',
							pointerEvents: 'none',
							cursor:'pointer'
						}}
                        className={cx('notification__image')}
					/>
                    <div className={cx('notification__content')}>
                        <p>У вас новая продажа</p>
                        <span>Название продукта</span>
                    </div>
                    <div className={cx('notification__price')}>
                        <p>49.99$</p>
                        <span>17.08.2023</span>
                    </div>
                    </div>
                 </div>
                 <div className={cx('notification__block')}>
                    <div className={cx('notification__line')}></div>
                    <div className={cx('notification__plus')}>
                    <Image
						alt="fsfdsf"
						src="/images/messageLogo.png"
						width={75}
						height={75}
						style={{
							objectFit: 'cover',
							pointerEvents: 'none',
							cursor:'pointer'
						}}
                        className={cx('notification__image')}
					/>
                    <div className={cx('notification__content')}>
                        <p>У вас новая продажа</p>
                        <span>Название продукта</span>
                    </div>
                    <div className={cx('notification__price')}>
                        <p>49.99$</p>
                        <span>17.08.2023</span>
                    </div>
                    </div>
                 </div>
                 <div className={cx('notification__block')}>
                    <div className={cx('notification__line')}></div>
                    <div className={cx('notification__plus')}>
                    <Image
						alt="fsfdsf"
						src="/images/messageLogo.png"
						width={75}
						height={75}
						style={{
							objectFit: 'cover',
							pointerEvents: 'none',
							cursor:'pointer'
						}}
                        className={cx('notification__image')}
					/>
                    <div className={cx('notification__content')}>
                        <p>У вас новая продажа</p>
                        <span>Название продукта</span>
                    </div>
                    <div className={cx('notification__price')}>
                        <p>49.99$</p>
                        <span>17.08.2023</span>
                    </div>
                    </div>
                 </div>
                 <div className={cx('notification__block')}>
                    <div className={cx('notification__line')}></div>
                    <div className={cx('notification__plus')}>
                    <Image
						alt="fsfdsf"
						src="/images/messageLogo.png"
						width={75}
						height={75}
						style={{
							objectFit: 'cover',
							pointerEvents: 'none',
							cursor:'pointer'
						}}
                        className={cx('notification__image')}
					/>
                    <div className={cx('notification__content')}>
                        <p>У вас новая продажа</p>
                        <span>Название продукта</span>
                    </div>
                    <div className={cx('notification__price')}>
                        <p>49.99$</p>
                        <span>17.08.2023</span>
                    </div>
                    </div>
                 </div>
                 
        </main>
        
    </div>
);

export { Notification };
