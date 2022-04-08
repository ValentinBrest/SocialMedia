import React from 'react';
import cl from './Paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, currentPage, changePage}) => {
    let pageCount = Math.ceil((totalUsersCount > 100 ? 100: totalUsersCount)/ pageSize)
        
        let pages = []
        for (let i = 1 ; i <= pageCount; i++){
            pages.push(i)
        }
    return (
            <div className={cl.pages}>
                {pages.map((p, i) => {
                    return <span className={`${cl.page} ${currentPage === p && cl.selected}`} onClick={() => {changePage(p)}} key={i}>{p}</span>
                })}
            </div>
    );
};

export default Paginator;