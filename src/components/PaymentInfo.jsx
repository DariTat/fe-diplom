import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const PaymentInfo = () => {
    const navigate = useNavigate();
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [mail, setEmail] = useState('');
    const [online, setOnline] = useState(false);
    const [cash, setCash] = useState(false);

   
    let valid = true;
    let validEmail;
    let validTelephone;
    

    if (telephone != '') {
        let reg;
        reg = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
        validTelephone = reg.test(telephone);
    }
    
    if (mail != '') {
        let reg;
        reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        validEmail = reg.test(mail);
    }

    
    if ((name !== '' && secondName !== '' && surname !== '') && validEmail && validTelephone && (online || cash) ) {
        valid = true;
    }

    const handleClick = () => {
        navigate('/checkorder')
    }

    return (
        <>
            <section className="payment-info-block">
                <div className="payment-info">
                    <div className="payment-info-personal-data-block">
                        <h3 className="payment-info-title">Персональные данные</h3>
                        <div className="payment-info-fullname-block">
                                <div className="payment-info-fullname">
                                    <label className="payment-info-fullname-label">Фамилия</label>
                                    <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)} required className="payment-info-fullname-input"/>
                                </div>
                                <div className="payment-info-fullname">
                                    <label className="payment-info-fullname-label">Имя</label>
                                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} required className="payment-info-fullname-input"/>
                                </div>
                                <div className="payment-info-fullname">
                                    <label className="payment-info-fullname-label">Отчество</label>
                                    <input type='text' value={secondName} onChange={(e) => setSecondName(e.target.value)} required className="payment-info-fullname-input"/>
                                </div>
                        </div>
                        <div className="payment-info-mobily">
                            <label className="payment-info-mobily-label">Контактный телефон</label>
                            <input className="payment-info-mobily-input" value={telephone} placeholder="+7 __ __ _ _" onChange={(e) => setTelephone(e.target.value)}/>
                        </div>
                        <div className="payment-info-mail">
                            <label className="payment-info-mail-label">E-mail</label>
                            <input className="payment-info-mail-input" value={mail} placeholder="inbox@gmail.ru" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="payment-info-methods-payment-block">
                        <h3 className="payment-info-title">Способы оплаты</h3>
                        <div className="payment-info-methods-payment-online">
                            <input type="checkbox" className="payment-info-methods-payment-online-input" id='checkbox-online' value={online} onChange={() => setOnline(!online)}/>
                            <label htmlFor='checkbox-online'></label>
                            <span className="payment-info-methods-payment-online-text" style={{color: online === true ? '#FFA800' : '#928F94'}}>Онлайн</span>
                        </div>
                        <ul className="payment-info-methods-payment-online-items">
                            <li className="payment-info-methods-payment-online-item">Банковской картой</li>
                            <li className="payment-info-methods-payment-online-item">PayPal</li>
                            <li className="payment-info-methods-payment-online-item">Visa QIWI Wallet</li>
                        </ul>
                        <div className="payment-info-methods-payment-cash">
                            <input type="checkbox" className="payment-info-methods-payment-cash-input" id='checkbox-cash'  value={cash} onChange={() => setCash(!cash)}/>
                            <label htmlFor='checkbox-cash'></label>
                            <span className="payment-info-methods-payment-cash-text" style={{color: cash === true ? '#FFA800' : '#928F94'}}>Наличными</span>
                        </div>
                    </div>
                </div>
                <button className={valid === false ? "btn payment-info-btn payment-info-btn-noactive" : "btn payment-info-btn"} disabled={valid === false ? true : false} onClick={handleClick}>Купить билеты</button>
            </section>
        </>
    )
}