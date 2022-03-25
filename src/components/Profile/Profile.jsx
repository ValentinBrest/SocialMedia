import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css'



const Profile = () => {
    return (
        <main className={cl.content}>
            <div className={cl.content__wrap}>
                <img className={cl.content__img} src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="img" />

                <div className={cl.about}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqWIPKg9kRQhn9r3qgpcRSACAXvg-dbTOWQiDN6b5ahLRZ-AU_ioL_uXv5Un0kNGPNhE&usqp=CAU" alt="ava" className="about__avatar" />
                    <div className={cl.about__descr}>
                        <h1>Valentin Konopatsky</h1>
                        <hr />
                        <div className={cl.about__text}>
                            <div className={cl.about__item}>Date of Birthday: 03.10.1995</div>
                            <div className={cl.about__item}>City: Brest</div>
                            <div className={cl.about__item}>Education: BrSTU'18</div>
                            <div className={cl.about__item}>web-site: <a href="http:#">Konopatsky.com</a></div>
                        </div>
                    </div>
                </div>

                <MyPostsContainer />
            </div>
        </main>
    );
};

export default Profile;