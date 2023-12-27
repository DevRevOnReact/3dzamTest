import Link from 'next/link';
import cx from './style.module.scss';
import Image from "next/image";
import { registerUserText } from '../config';


const RegisterPublished = () => (
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
                                    Us User
                                </Link>
                                <Link href={'/registration/published'} className={cx('registernav__link')}>
                                    Us Published
                                </Link>
                                </nav>
                        <form action="">
                            <input type="text" className={cx('field')} placeholder={registerUserText.formPlaceholders.email}/>
                            <input type="text" className={cx('field')} placeholder={registerUserText.formPlaceholders.firstName}/>
                            <input type="text" className={cx('field')} placeholder={registerUserText.formPlaceholders.LastName}/>
                            <input type="text" className={cx('field')} placeholder={registerUserText.formPlaceholders.country}/>
                            <input type="text" className={cx('field')} placeholder={registerUserText.formPlaceholders.zipCode}/>
                            <div className={cx('register__checkbox')}>
                                <input type="checkbox" className={cx('custom-checkbox')} />
                                    <p className={cx('checkbox__text')}>I have read and agree 3dZamStore <br/>Terms of Service (required)</p>
                                </div>
                                <button className={cx('register__button')}>
						            <p>Sign&nbsp;in</p>
					            </button>
                                <nav className={cx('register__navigation')}>
                                    <Link href={'/'} className={cx('register__registration')}>
                                        Registration
                                    </Link>
                                    <Link href={'/'} className={cx('register__link')}>
                                        Sing in
                                    </Link>
                                </nav>
                            </form>
                            <Image
                                alt="fsfdsf"
                                src="/images/cosmos1.png"
                                width={320}
                                height={669}
                                style={{
                                    objectFit: 'cover',
                                    pointerEvents: 'none',
                                    marginTop:'115px',
                                    marginLeft:'-679px',
                                    position:'absolute'
                                }}
					        />
                        </div>
                       
                </div>
        </section>
);

export { RegisterPublished };
