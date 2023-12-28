
import { Container } from '../ui/Container/Container';
import cx from './style.module.scss';
import Image from "next/image";


const AddProduct = () => (
	<Container>
                <main className={cx('addProduct')}>
                        <div className={cx('addProduct__description')}>
                                <div className={cx('addProduct__line')}></div>
                                <p className={cx('addProduct__text')}>
                                        Before continuing any further, please ensure that you have 
                                        thoroughly reviewed the Marketplace Guidelines
                                </p>
                        </div>
                        <h1 className={cx('addProduct__heading1')}>
                                PRODUCT MEDIA
                        </h1>
                        <div className={cx('addProduct__media')}>
                                <div className={cx('media__block')}>
                                        <div className={cx('addProduct__media_container')}>
                                                <div className={cx('media__content')}>
                                                        <h3 className={cx('media__content_head')}>
                                                        GALLERY * 
                                                        <br />
                                                        REQUIRED
                                                        </h3>
                                                        <p className={cx('media__content_text')}>
                                                        These images will be displayed on your products details
                                                        page and should contain in-engine shots of original assets with 
                                                        an overview map if applicable. Must contain 1- 25 images,
                                                        each with a resolution of 1920x1080.
                                                        </p>
                                                </div>
                                                <form className={cx('container')}>
                                                <Image
                                                        alt="fsfdsf"
                                                        src="/images/upload.png"
                                                        width={260}
                                                        height={193}
                                                        style={{
                                                                objectFit: 'cover',
                                                                pointerEvents: 'none',
                                                                borderRadius:'15px'
                                                        }}
                                                        className={cx('image')}
                                                />    
                                                <input 
                                                        type="file"
                                                        id="fileInput"
                                                        name="image"
                                                        accept="image/*"
                                                        className={cx('overlay')}
                                                />
                                                </form>
                                        </div>
                                        <div className={cx('addProduct__media_container')}>
                                                <div className={cx('media__content')}>
                                                        <h3 className={cx('media__content_head')}>
                                                        THUMBNAIL *
                                                        <br />
                                                        REQUIRED 
                                                        </h3>
                                                        <p className={cx('media__content_text')}>
                                                        This will be the base price of your product in US dollars. 
                                                        Please be aware that VAT and additional
                                                        tax may be added to the base price for some regions.
                                                        </p>
                                                </div>
                                                <form className={cx('container')}>
                                                <Image
                                                        alt="fsfdsf"
                                                        src="/images/thubnail.png"
                                                        width={260}
                                                        height={193}
                                                        style={{
                                                                objectFit: 'cover',
                                                                pointerEvents: 'none',
                                                                borderRadius:'15px'
                                                        }}
                                                        className={cx('image')}
                                                />    
                                                <input 
                                                        type="file"
                                                        id="fileInput"
                                                        name="image"
                                                        accept="image/*"
                                                        className={cx('overlay')}
                                                />
                                                </form>
                                        </div>
                                </div>
                                <Image
                                        alt="fsfdsf"
                                        src="/images/camera.png"
                                        width={352}
                                        height={352}
                                        style={{
                                                objectFit: 'cover',
                                                pointerEvents: 'none',
                                                borderRadius:'15px',
                                                marginLeft:'970px',
                                                marginTop:'-350px',
                                                position:'absolute'
                                        }}
                                        className={cx('image')}
                                /> 
                        </div>
                        <h1 className={cx('addProduct__heading1')}>
                                PRODUCT INFORMATION
                        </h1>
                        <div className={cx('addProduct__plus')}>
                                <div className={cx('media__block')}>
                                        <div className={cx('addProduct__media_container')} style={{
                                                        alignItems:'center'
                                                }}>
                                                <div className={cx('media__content')}>
                                                        <h3 className={cx('media__content_head')}>
                                                        PRODUCT TITLE *
                                                        <br />
                                                        REQUIRED 
                                                        </h3>
                                                        <p className={cx('media__content_text')}>
                                                        This will be the title of your
                                                         product on the Marketplace. Must 
                                                        be 80 characters or less,
                                                         but we recommend 30 characters or less.
                                                        </p>
                                                </div>
                                                <form className={cx('container')}>    
                                                <input 
                                                        type="text"
                                                        className={cx('basic__input')}
                                                        placeholder='* Product Title'
                                                       
                                                />
                                                </form>
                                        </div>
                                        <div className={cx('addProduct__media_container')}  style={{
                                                        alignItems:'center'
                                                }}>
                                                <div className={cx('media__content')}>
                                                        <h3 className={cx('media__content_head')}>
                                                        PRICE *
                                                        <br />
                                                        REQUIRED 

                                                        </h3>
                                                        <p className={cx('media__content_text')}>
                                                        This will be the base price of your product in US dollars. 
                                                        Please be aware that VAT and additional
                                                        tax may be added to the base price for some regions.
                                                        </p>
                                                </div>
                                                <form className={cx('container')}>
                                                  
                                                <input 
                                                        type="text"
                                                        className={cx('basic__input')}
                                                        placeholder='* Select Price'
                                                />
                                                </form>
                                        </div>
                                        <div className={cx('addProduct__media_container')} style={{
                                                        alignItems:'center'
                                                }}>
                                                <div className={cx('media__content')}>
                                                        <h3 className={cx('media__content_head')}>
                                                        CATEGORY *
                                                        <br />
                                                        REQUIRED 

                                                        </h3>
                                                        <p className={cx('media__content_text')}>
                                                        This should be the category that best classifies
                                                        your product and will dictate your products review and placement.
                                                        </p>
                                                </div>
                                                <form className={cx('container')}>    
                                                <input 
                                                        type="text"
                                                        className={cx('basic__input')}
                                                        placeholder='* Select Category'
                                                       
                                                />
                                                </form>
                                        </div>
                                        <div className={cx('addProduct__media_container')} style={{
                                                        alignItems:'center'
                                                }}>
                                                <div className={cx('media__content')}>
                                                        <h3 className={cx('media__content_head')}>
                                                        TAGS *
                                                        <br />
                                                        REQUIRED 

                                                        </h3>
                                                        <p className={cx('media__content_text')}>
                                                        This should be the category that best classifies
                                                        your product and will dictate your products review and placement.
                                                        </p>
                                                </div>
                                                <form className={cx('container')}>   
                                                <div style={{
                                                      display:'flex',
                                                      gap:'10px'  
                                                }}>
                                                        <input 
                                                                type="text"
                                                                className={cx('mini__input')}
                                                                placeholder='No AI'
                                                        
                                                        />
                                                                <input 
                                                                type="text"
                                                                className={cx('mini__input')}
                                                                placeholder='No AI'
                                                        
                                                        />
                                                                <input 
                                                                type="text"
                                                                className={cx('mini__input')}
                                                                placeholder='No AI'
                                                        
                                                        />
                                                </div>
                                                </form>
                                        </div>
                                        <div className={cx('addProduct__media_container')} style={{
                                                        alignItems:'center'
                                                }}>
                                                <div className={cx('media__content')}>
                                                        <h3 className={cx('media__content_head')}>
                                                        SHORT DESCRIPTION *
                                                        <br />
                                                        REQUIRED  

                                                        </h3>
                                                        <p className={cx('media__content_text')}>
                                                        This text should give customers an idea of your product at a glance. 
                                                        It will be used at the top of your products details page and as a tooltip for your products
                                                         thumbnail image. Must be 255 characters or less, but we recommend 100 characters or less.
                                                        </p>
                                                </div>
                                                <form className={cx('container')}>    
                                                <input 
                                                        type="text"
                                                        className={cx('basic__input')}
                                                        placeholder='* Short Description'
                                                       
                                                />
                                                </form>
                                        </div>
                                </div>
                        </div>
                        <div className={cx('addProduct__plus')}>
                                <div className={cx('media__block')}>
                                        <div className={cx('addProduct__media_container')}>
                                                <div className={cx('media__content')}>
                                                        <h3 className={cx('media__content_head')}>
                                                        GALLERY * 
                                                        <br />
                                                        REQUIRED
                                                        </h3>
                                                        <p className={cx('media__content_text')}>
                                                        These images will be displayed on your products details
                                                        page and should contain in-engine shots of original assets with 
                                                        an overview map if applicable. Must contain 1- 25 images,
                                                        each with a resolution of 1920x1080.
                                                        </p>
                                                </div>
                                                <form className={cx('container')}>
                                                <Image
                                                        alt="fsfdsf"
                                                        src="/images/file.png"
                                                        width={260}
                                                        height={193}
                                                        style={{
                                                                objectFit: 'cover',
                                                                pointerEvents: 'none',
                                                                borderRadius:'15px'
                                                        }}
                                                        className={cx('image')}
                                                />    
                                                <input 
                                                        type="file"
                                                        id="fileInput"
                                                        name="image"
                                                        accept="image/*"
                                                        className={cx('overlay')}
                                                />
                                                </form>
                                        </div>
                                </div>
                                <Image
                                        alt="fsfdsf"
                                        src="/images/public.png"
                                        width={352}
                                        height={352}
                                        style={{
                                                objectFit: 'cover',
                                                pointerEvents: 'none',
                                                borderRadius:'15px',
                                                marginLeft:'970px',
                                                marginTop:'-350px',
                                                position:'absolute'
                                        }}
                                        className={cx('image')}
                                /> 
                        </div>
                </main>
	</Container>
);

export { AddProduct };
