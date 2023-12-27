import Link from 'next/link';
import cx from './style.module.scss';
import Image from "next/image";
import { registerUserText } from '../config';


const RegisterUser = () => (
        <section className={cx('register')}>
            <div className={cx('register__logo')}>
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
                <div className={cx('register__container')}>
                        <div className={cx('register__form')}>
                        <nav className={cx('registernav__navigation')}>
                            <Link href={'/registration/user'} className={cx('registernav__registration')}>
                                {registerUserText.navigationLinks.user}
                            </Link>
                            <Link href={'/registration/published'} className={cx('registernav__link')}>
                                {registerUserText.navigationLinks.published}
                            </Link>
                        </nav>
                            <form action="">
                                <input type="text" className={cx('field')} placeholder={registerUserText.formPlaceholders.email}/>
                                <input type="text" className={cx('field')} placeholder={registerUserText.formPlaceholders.userName}/>
                                <input type="text" className={cx('field')} placeholder={registerUserText.formPlaceholders.password}/>
                                <div className={cx('register__checkbox')}>
                                    <input type="checkbox" className={cx('custom-checkbox')} />
                                    <p className={cx('checkbox__text')}>I have read and agree 3dZamStore <br/>Terms of Service (required)</p>
                                </div>
                                <button className={cx('register__button')}>
						            <p>Sign&nbsp;in</p>
					            </button>
                                <nav className={cx('register__navigation')}>
                                    <Link href={'/'} className={cx('register__registration')}>
                                        {registerUserText.registrationLinkText}
                                    </Link>
                                    <Link href={'/'} className={cx('register__link')}>
                                        {registerUserText.signInLinkText}
                                    </Link>
                                </nav>
                            </form>
                            <Image
                                alt="fsfdsf"
                                src="/images/arm.png"
                                width={300}
                                height={449}
                                style={{
                                    objectFit: 'cover',
                                    pointerEvents: 'none',
                                    marginTop:'545px',
                                    marginLeft:'-850px',
                                    position:'absolute'
                            }}
					/>
                        </div>
                       
                </div>
        </section>
);

export { RegisterUser };
