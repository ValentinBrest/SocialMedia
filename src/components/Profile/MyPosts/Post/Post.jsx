import React from 'react';
import cl from './Post.module.css'

const Post = ({name, time, date, text}) => {
    return (
        <div className={cl.old__post_item}>
            <img className={cl.old__post_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqWIPKg9kRQhn9r3qgpcRSACAXvg-dbTOWQiDN6b5ahLRZ-AU_ioL_uXv5Un0kNGPNhE&usqp=CAU" alt="old img" />
            <div className={cl.old__post_descr}>
                <div className={cl.old__post_id}>
                    <h3>{name}</h3>
                    <div className={cl.old__post_date}><span>{time}</span> {date}</div>
                </div>
                <div className={cl.old__post_text}>{text}</div>
            </div>

            <div className={cl.old__post_del}>&times;</div>
        </div>
    );
};

export default Post;