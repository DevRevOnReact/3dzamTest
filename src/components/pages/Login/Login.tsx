import Link from 'next/link';
import cx from './style.module.scss';
import Image from "next/image";


const Login = () => (
        <section className={cx('login')}>
            <div className={cx('login__logo')}>
            	<Image
						alt="fsfdsf"
						src="/images/LogoFull.png"
						width={260}
						height={56}
						style={{
							objectFit: 'cover',
							pointerEvents: 'none',
				
						}}
					/>
                </div>
                <div className={cx('login__container')}>
                        <div className={cx('login__form')}>
                            <form action="">
                                <input type="text" className={cx('email')} placeholder='email'/>
                                <input type="text" className={cx('password')} placeholder='password'/>
                                <div className={cx('login__checkbox')}>
                                    <input type="checkbox" className={cx('custom-checkbox')} />
                                    <p className={cx('checkbox__text')}>Remember me</p>
                                </div>
                                <button className={cx('login__button')}>
						            <p>Sign&nbsp;in</p>
					            </button>
                                <nav className={cx('login__navigation')}>
                                    <Link href={'/'} className={cx('login__registration')}>
                                        Registration
                                    </Link>
                                    <Link href={'/'} className={cx('login__link')}>
                                        Sing in
                                    </Link>
                                </nav>
                            </form>
                            <Image
						alt="fsfdsf"
						src="/images/rocket.png"
						width={334}
						height={385}
						style={{
							objectFit: 'cover',
							pointerEvents: 'none',
                            marginLeft:'800px',
                            position:'absolute'
						}}
					/>
                        </div>
                       
                </div>
        </section>
);

export { Login };
