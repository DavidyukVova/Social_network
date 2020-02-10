import React from 'react';
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className="img-fluid" src="/images/banner.jpg" alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                ava + descr
            </div>
        </div>
    );
};
export default ProfileInfo;