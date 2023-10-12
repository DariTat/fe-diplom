import train from '../img/Group_9.svg';
import vector_there from '../img/Vector-there.svg';
import vector_back from '../img/Vector-back.svg';
import ruble from '../img/ruble.svg';
import icon from '../img/Group_2.2.svg';
import { useNavigate } from 'react-router-dom';



export const TrainCards = () => {


    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/trains/id')
    }


    return (
        <>
            <div className="train-cards">
                <div className="train-card">
                    <div className='train-card-info'>
                        <img className='train-img' src={train}/>
                        <p className='train-number'>116C</p>
                        <ul className='train-points'>
                            <li className='train-point'>Адлер 
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='svg-train'>
                                    <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z" fill="#928F94"/>
                                </svg>
                            </li>
                            <li className='train-point-depature'>Москва
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='svg-train'>
                                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z" fill="#292929"/>
                            </svg>
                            </li>
                            <li className='train-point-arrival'>Санкт-Петербург</li>
                        </ul>
                    </div>
                    <div className='train-card-direction'>
                        <div className='train-card-direction-there'>
                            <ul className='train-depature-start'>
                                <li className='train-depature-time'>00:10</li>
                                <li className='train-depature-city'>Москва</li>
                                <li className='train-depature-station'>Курский вокзал</li>
                            </ul>
                            <div className='duration'>
                                <p className='duration-time'>09 : 42</p>
                                <img className='duration-img' src={vector_there}/>
                            </div>
                            <ul className='train-depature-end'>
                                <li className='train-depature-time'>09:52</li>
                                <li className='train-depature-city'>Санкт-Петербург</li>
                                <li className='train-depature-station'>Ладожский вокзал</li>
                            </ul>
                        </div>
                        <div className='train-card-direction-back'>
                            <ul className='train-depature-start'>
                                <li className='train-depature-time'>00:10</li>
                                <li className='train-depature-city'>Москва</li>
                                <li className='train-depature-station'>Курский вокзал</li>
                            </ul>
                            <div className='duration'>
                                <p className='duration-time'>09 : 42</p>
                                <img className='duration-img' src={vector_back}/>
                            </div>
                            <ul className='train-depature-end'>
                            <li className='train-depature-time'>09:52</li>
                            <li className='train-depature-city'>Санкт-Петербург</li>
                                <li className='train-depature-station'>Ладожский вокзал</li>
                            </ul>
                        </div>
                    </div>
                    <div className='train-card-conditions'>
                        <ul className='train-card-places'>
                            <li className='train-card-place'>
                                Сидячий 
                                <p className='train-card-place-amount'>88</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>1 920</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                            <li className='train-card-place'>
                                Плацкарт 
                                <p className='train-card-place-amount'>52</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>2 530</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                            <li className='train-card-place'>
                                Купе
                                <p className='train-card-place-amount'>24</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>3 820</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                            <li className='train-card-place'>
                                Люкс
                                <p className='train-card-place-amount'>15</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>4 950</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                        </ul>
                        <img className='train-card-place-img' src={icon}/>
                        <button className='btn train-card-place-btn' onClick={handleClick}>Выбрать места</button>
                    </div>
                </div>
                <div className="train-card">
                    <div className='train-card-info'>
                        <img className='train-img' src={train}/>
                        <p className='train-number'>020У</p>
                        <ul className='train-points'>
                            <li className='train-point-depature'>Москва
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='svg-train'>
                                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z" fill="#292929"/>
                            </svg>
                            </li>
                            <li className='train-point-arrival'>Санкт-Петербург  «Мегаполис»</li>
                        </ul>
                    </div>
                    <div className='train-card-direction'>
                        <div className='train-card-direction-there'>
                            <ul className='train-depature-start'>
                                <li className='train-depature-time'>00:20</li>
                                <li className='train-depature-city'>Москва</li>
                                <li className='train-depature-station'>Ленинградский вокзал</li>
                            </ul>
                            <div className='duration'>
                                <p className='duration-time'>08 : 39</p>
                                <img className='duration-img' src={vector_there}/>
                            </div>
                            <ul className='train-depature-end'>
                                <li className='train-depature-time'>09:52</li>
                                <li className='train-depature-city'>Санкт-Петербург</li>
                                <li className='train-depature-station'>Московский вокзал</li>
                            </ul>
                        </div>
                    </div>
                    <div className='train-card-conditions'>
                        <ul className='train-card-places'>
                            <li className='train-card-place'>
                                Купе
                                <p className='train-card-place-amount'>90</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>3 950</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                            <li className='train-card-place'>
                                Люкс
                                <p className='train-card-place-amount'>31</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>4 950</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                        </ul>
                        <img className='train-card-place-img' src={icon}/>
                        <button className='btn train-card-place-btn'>Выбрать места</button>
                    </div>
                </div>
                <div className="train-card">
                    <div className='train-card-info'>
                        <img className='train-img' src={train}/>
                        <p className='train-number'>116C</p>
                        <ul className='train-points'>
                            <li className='train-point'>Нижний Новгород 
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='svg-train'>
                                    <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z" fill="#928F94"/>
                                </svg>
                            </li>
                            <li className='train-point-depature'>Москва
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='svg-train'>
                                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z" fill="#292929"/>
                            </svg>
                            </li>
                            <li className='train-point-arrival'>Санкт-Петербург «Волга»</li>
                        </ul>
                    </div>
                    <div className='train-card-direction'>
                        <div className='train-card-direction-there'>
                            <ul className='train-depature-start'>
                                <li className='train-depature-time'>00:41</li>
                                <li className='train-depature-city'>Москва</li>
                                <li className='train-depature-station'>Ленинградский вокзал</li>
                            </ul>
                            <div className='duration'>
                                <p className='duration-time'>08 : 32</p>
                                <img className='duration-img' src={vector_there}/>
                            </div>
                            <ul className='train-depature-end'>
                                <li className='train-depature-time'>09:13</li>
                                <li className='train-depature-city'>Санкт-Петербург</li>
                                <li className='train-depature-station'>Ладожский вокзал</li>
                            </ul>
                        </div>
                        <div className='train-card-direction-back'>
                            <ul className='train-depature-start'>
                                <li className='train-depature-time'>00:41</li>
                                <li className='train-depature-city'>Москва</li>
                                <li className='train-depature-station'>Курский вокзал</li>
                            </ul>
                            <div className='duration'>
                                <p className='duration-time'>08 : 32</p>
                                <img className='duration-img' src={vector_back}/>
                            </div>
                            <ul className='train-depature-end'>
                            <li className='train-depature-time'>09:13</li>
                                <li className='train-depature-city'>Санкт-Петербург</li>
                                <li className='train-depature-station'>Ладожский вокзал</li>
                            </ul>
                        </div>
                    </div>
                    <div className='train-card-conditions'>
                        <ul className='train-card-places'>
                            <li className='train-card-place'>
                                Плацкарт 
                                <p className='train-card-place-amount'>52</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>2 530</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                            <li className='train-card-place'>
                                Купе
                                <p className='train-card-place-amount'>24</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>3 820</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                            <li className='train-card-place'>
                                Люкс
                                <p className='train-card-place-amount'>15</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>4 950</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                        </ul>
                        <img className='train-card-place-img' src={icon}/>
                        <button className='btn train-card-place-btn'>Выбрать места</button>
                    </div>
                </div>
                <div className="train-card">
                    <div className='train-card-info'>
                        <img className='train-img' src={train}/>
                        <p className='train-number'>116C</p>
                        <ul className='train-points'>
                            <li className='train-point'>Адлер 
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='svg-train'>
                                    <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z" fill="#928F94"/>
                                </svg>
                            </li>
                            <li className='train-point-depature'>Москва
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='svg-train'>
                                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z" fill="#292929"/>
                            </svg>
                            </li>
                            <li className='train-point-arrival'>Санкт-Петербург</li>
                        </ul>
                    </div>
                    <div className='train-card-direction'>
                        <div className='train-card-direction-there'>
                            <ul className='train-depature-start'>
                                <li className='train-depature-time'>00:10</li>
                                <li className='train-depature-city'>Москва</li>
                                <li className='train-depature-station'>Курский вокзал</li>
                            </ul>
                            <div className='duration'>
                                <p className='duration-time'>09 : 42</p>
                                <img className='duration-img' src={vector_there}/>
                            </div>
                            <ul className='train-depature-end'>
                                <li className='train-depature-time'>09:52</li>
                                <li className='train-depature-city'>Санкт-Петербург</li>
                                <li className='train-depature-station'>Ладожский вокзал</li>
                            </ul>
                        </div>
                        <div className='train-card-direction-back'>
                            <ul className='train-depature-start'>
                                <li className='train-depature-time'>00:10</li>
                                <li className='train-depature-city'>Москва</li>
                                <li className='train-depature-station'>Курский вокзал</li>
                            </ul>
                            <div className='duration'>
                                <p className='duration-time'>09 : 42</p>
                                <img className='duration-img' src={vector_back}/>
                            </div>
                            <ul className='train-depature-end'>
                                <li className='train-depature-time'>09:52</li>
                                <li className='train-depature-city'>Санкт-Петербург</li>
                                <li className='train-depature-station'>Ладожский вокзал</li>
                            </ul>
                        </div>
                    </div>
                    <div className='train-card-conditions'>
                        <ul className='train-card-places'>
                            <li className='train-card-place'>
                                Сидячий 
                                <p className='train-card-place-amount'>88</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>1 920</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                            <li className='train-card-place'>
                                Плацкарт 
                                <p className='train-card-place-amount'>52</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>2 530</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                            <li className='train-card-place'>
                                Купе
                                <p className='train-card-place-amount'>24</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>3 820</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                            <li className='train-card-place'>
                                Люкс
                                <p className='train-card-place-amount'>15</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>4 950</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                        </ul>
                        <img className='train-card-place-img' src={icon}/>
                        <button className='btn train-card-place-btn'>Выбрать места</button>
                    </div>
                </div>
                <div className="train-card">
                    <div className='train-card-info'>
                        <img className='train-img' src={train}/>
                        <p className='train-number'>116C</p>
                        <ul className='train-points'>
                            <li className='train-point'>Адлер 
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='svg-train'>
                                    <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z" fill="#928F94"/>
                                </svg>
                            </li>
                            <li className='train-point-depature'>Москва
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='svg-train'>
                                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z" fill="#292929"/>
                            </svg>
                            </li>
                            <li className='train-point-arrival'>Санкт-Петербург</li>
                        </ul>
                    </div>
                    <div className='train-card-direction'>
                        <div className='train-card-direction-there'>
                            <ul className='train-depature-start'>
                                <li className='train-depature-time'>00:10</li>
                                <li className='train-depature-city'>Москва</li>
                                <li className='train-depature-station'>Курский вокзал</li>
                            </ul>
                            <div className='duration'>
                                <p className='duration-time'>09 : 42</p>
                                <img className='duration-img' src={vector_there}/>
                            </div>
                            <ul className='train-depature-end'>
                                <li className='train-depature-time'>09:52</li>
                                <li className='train-depature-city'>Санкт-Петербург</li>
                                <li className='train-depature-station'>Ладожский вокзал</li>
                            </ul>
                        </div>
                        <div className='train-card-direction-back'>
                            <ul className='train-depature-start'>
                                <li className='train-depature-time'>00:10</li>
                                <li className='train-depature-city'>Москва</li>
                                <li className='train-depature-station'>Курский вокзал</li>                                
                            </ul>
                            <div className='duration'>
                                <p className='duration-time'>09 : 42</p>
                                <img className='duration-img' src={vector_back}/>
                            </div>
                            <ul className='train-depature-end'>
                                <li className='train-depature-time'>09:52</li>
                                <li className='train-depature-city'>Санкт-Петербург</li>
                                <li className='train-depature-station'>Ладожский вокзал</li>
                            </ul>
                        </div>
                    </div>
                    <div className='train-card-conditions'>
                        <ul className='train-card-places'>
                            <li className='train-card-place'>
                                Сидячий 
                                <p className='train-card-place-amount'>88</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>1 920</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                            <li className='train-card-place'>
                                Плацкарт 
                                <p className='train-card-place-amount'>52</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>2 530</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                            <li className='train-card-place'>
                                Купе
                                <p className='train-card-place-amount'>24</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>3 820</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                            <li className='train-card-place'>
                                Люкс
                                <p className='train-card-place-amount'>15</p>
                                <p className='train-card-place-price'>
                                    от 
                                    <span className='train-card-place-cost'>4 950</span>
                                    <img className='train-card-place-price-img' src={ruble}/>
                                </p>
                            </li>
                        </ul>
                        <img className='train-card-place-img' src={icon}/>
                        <button className='btn train-card-place-btn'>Выбрать места</button>
                    </div>
                </div>
            </div>
        </>
    )
}