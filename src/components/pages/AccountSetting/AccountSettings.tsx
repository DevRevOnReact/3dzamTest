
import Link from 'next/link';
import { Container } from '../ui/Container/Container';
import cx from './style.module.scss';
import Image from "next/image";


const AccountSettings = () => (
	<Container>
       	<main className={cx('account')}>
			<div className={cx('accountTitle')}>
				<h1>Account Settings</h1>
			</div>
			<div className={cx('account__container')}>
				<div className={cx('account__block1')}>
					<div className={cx('account__buttons')}>
					<button className={cx('account__button')}>
						<p>My&nbsp;product</p>
					</button>
					<button className={cx('account__button')}>
						<p>My&nbsp;sales</p>
					</button>
				</div>
			</div>

			<div className={cx('account__block2')}>
				<Image
					alt="fsfdsf"
					className={cx('account__image')}
					src="/images/face.png"
					width={260}
					height={188}
				/>
					<p>My name</p>
			</div>

			<div className={cx('account__block3')}>
				<div className={cx('account__buttons')}>
					<button className={cx('account__button')}>
						<p>My&nbsp;purchases</p>
					</button>
					<button className={cx('account__button1')}>
						<p>Settings</p>
					</button>
				</div>
			</div>

			</div>
		</main>
                <section className={cx('account__table')}>
                        <div className={cx('table__container')}>
                                <div className={cx('table__inputs')}>
                                        <div className={cx('table__block')}>
                                                <p className={cx('table__start')}>Start date:</p>
                                                <span className={cx('table__date')}>10/11/2022</span>
                                        </div>
                                        <div className={cx('table__block')}>
                                                <p className={cx('table__end')}>End date:</p>
                                                <span className={cx('table__date')}>10/11/2023</span>
                                        </div>
                                        <div className={cx('table__block')}>
                                                <button className={cx('table__button')}>
                                                        <p>Submit</p>
                                                </button>
                                        </div>
                                </div>
                                <div className={cx('table__sales')}>
                                        <Link href='/'>
                                        Sales
                                        </Link>
                                        <Link href='/'>
                                        Payouts
                                        </Link>
                                </div>
                                <div className={cx('table__main')}>
                                        <div className={cx('main__texts')}>
                                                <p className={cx('day')}>Day</p>
                                                <p className={cx('product')}>Product</p>
                                                <p className={cx('count')}>Count</p>
                                                <p className={cx('price')}>Price</p>
                                                <p className={cx('profit')}>Your Profit</p>
                                        </div>  
                                        <div className={cx('table__row')}>
                                                <p className={cx('row__day')}>10/11/22</p>
                                                <p className={cx('row__product')}>Название продукта</p>
                                                <p className={cx('row__count')}>1</p>
                                                <p className={cx('row__price')}>$100.00</p>
                                                <p className={cx('row__profit')}>$85.00</p>
                                        </div>  
                                        <div className={cx('table__row_plus')}>
                                                <p className={cx('row__day')}>10/11/22</p>
                                                <p className={cx('row__product')}>Название продукта</p>
                                                <p className={cx('row__count')}>1</p>
                                                <p className={cx('row__price')}>$100.00</p>
                                                <p className={cx('row__profit')}>$85.00</p>
                                        </div> 
                                        <div className={cx('table__row')}>
                                                <p className={cx('row__day')}>10/11/22</p>
                                                <p className={cx('row__product')}>Название продукта</p>
                                                <p className={cx('row__count')}>1</p>
                                                <p className={cx('row__price')}>$100.00</p>
                                                <p className={cx('row__profit')}>$85.00</p>
                                        </div>   
                                        <div className={cx('table__row_plus')}>
                                                <p className={cx('row__day')}>10/11/22</p>
                                                <p className={cx('row__product')}>Название продукта</p>
                                                <p className={cx('row__count')}>1</p>
                                                <p className={cx('row__price')}>$100.00</p>
                                                <p className={cx('row__profit')}>$85.00</p>
                                        </div> 
                                        <div className={cx('table__row')}>
                                                <p className={cx('row__day')}>10/11/22</p>
                                                <p className={cx('row__product')}>Название продукта</p>
                                                <p className={cx('row__count')}>1</p>
                                                <p className={cx('row__price')}>$100.00</p>
                                                <p className={cx('row__profit')}>$85.00</p>
                                        </div> 
                                        <div className={cx('table__row_plus')}>
                                                <p className={cx('row__day')}>10/11/22</p>
                                                <p className={cx('row__product')}>Название продукта</p>
                                                <p className={cx('row__count')}>1</p>
                                                <p className={cx('row__price')}>$100.00</p>
                                                <p className={cx('row__profit')}>$85.00</p>
                                        </div>
                                        <div className={cx('table__row')}>
                                                <p className={cx('row__day')}>10/11/22</p>
                                                <p className={cx('row__product')}>Название продукта</p>
                                                <p className={cx('row__count')}>1</p>
                                                <p className={cx('row__price')}>$100.00</p>
                                                <p className={cx('row__profit')}>$85.00</p>
                                        </div>
                                        <div className={cx('table__row_plus')}>
                                                <p className={cx('row__day')}>10/11/22</p>
                                                <p className={cx('row__product')}>Название продукта</p>
                                                <p className={cx('row__count')}>1</p>
                                                <p className={cx('row__price')}>$100.00</p>
                                                <p className={cx('row__profit')}>$85.00</p>
                                        </div> 
                                </div>
                        </div>
                </section>
	</Container>
);

export { AccountSettings };
