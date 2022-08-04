import React from 'react';
import './RegBtn.css'

const RegBtn = () => {
    return (
        <div className="btn__inner">
            <input className="form__submit btn__reg" type="submit" value="Зарегистрироваться"/>
            <p className="form__status"></p>
        </div>
    );
};

export default RegBtn;