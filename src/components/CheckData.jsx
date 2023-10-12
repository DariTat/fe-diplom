import train from '../img/Group_9.svg';
import vector_there from '../img/Vector-there.svg';
import vector_back from '../img/Vector-back.svg';
import ruble from '../img/ruble.svg';
import icon from '../img/Group_2.2.svg';
import { useNavigate } from 'react-router-dom';

export const CheckData = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/result');
    }

    return (
        <>
            <section className="check-data-block">
                <div className="check-data-train-info">
                    <h2 className="check-data-title">Поезд</h2>
                    <div className="check-data-train-card">
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
                            <button className='btn train-card-change-btn'>Изменить</button>
                        </div>
                    </div>
                </div>
                <div className='check-data-passengers-block'>
                    <h2 className='check-data-title'>Пассажиры</h2>
                    <div className='check-data-passengers-info'>
                        <div className='check-data-passengers'>
                            <div className='check-data-passenger'>
                                <div className='check-data-passenger-type'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                                        <path d="M34 0C15.2492 0 0 15.2492 0 34C0 52.7508 15.2492 68 34 68C52.7508 68 68 52.7508 68 34C68 15.2492 52.7508 0 34 0ZM33.887 16.3787C38.8571 16.3787 42.9236 20.3322 42.9236 25.3023C42.9236 30.2724 38.9701 34.3389 34 34.3389C29.0299 34.3389 24.9635 30.2724 24.9635 25.3023C25.0764 20.4452 29.0299 16.3787 33.887 16.3787ZM51.9601 52.186C39.8738 52.186 28.1262 52.186 16.2658 52.186C15.701 46.5382 15.701 44.392 21.3488 41.6811C29.7076 37.7276 38.2924 37.7276 46.7641 41.6811C47.8937 42.1329 48.9103 42.9236 49.8139 43.6013C51.2824 44.8439 52.0731 46.4252 51.9601 48.3455C51.9601 49.701 51.9601 50.8306 51.9601 52.186Z" fill="#FFA800"/>
                                    </svg>
                                    <span>Взрослый</span>
                                </div>
                                <div className='check-data-passenger-info'>
                                    <span className='check-data-passenger-info-title'>Мартынюк Ирина Эдуардовна</span>
                                    <ul className='check-data-passenger-info-items'>
                                        <li className='check-data-passenger-info-item'>Пол женский</li>
                                        <li className='check-data-passenger-info-item'>Дата рождения 17.02.1985</li>
                                        <li className='check-data-passenger-info-item'>Паспорт РФ 4204 380694</li>
                                    </ul>
                                </div>
                            </div>
                            <span className='line-bottom'></span>
                            <div className='check-data-passenger'>
                                <div className='check-data-passenger-type'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                                        <path d="M34 0C15.2492 0 0 15.2492 0 34C0 52.7508 15.2492 68 34 68C52.7508 68 68 52.7508 68 34C68 15.2492 52.7508 0 34 0ZM33.887 16.3787C38.8571 16.3787 42.9236 20.3322 42.9236 25.3023C42.9236 30.2724 38.9701 34.3389 34 34.3389C29.0299 34.3389 24.9635 30.2724 24.9635 25.3023C25.0764 20.4452 29.0299 16.3787 33.887 16.3787ZM51.9601 52.186C39.8738 52.186 28.1262 52.186 16.2658 52.186C15.701 46.5382 15.701 44.392 21.3488 41.6811C29.7076 37.7276 38.2924 37.7276 46.7641 41.6811C47.8937 42.1329 48.9103 42.9236 49.8139 43.6013C51.2824 44.8439 52.0731 46.4252 51.9601 48.3455C51.9601 49.701 51.9601 50.8306 51.9601 52.186Z" fill="#FFA800"/>
                                    </svg>
                                    <span>Детский</span>
                                </div>
                                <div className='check-data-passenger-info'>
                                    <span className='check-data-passenger-info-title'>Мартынюк Кирилл Сергеевич</span>
                                    <ul className='check-data-passenger-info-items'>
                                        <li className='check-data-passenger-info-item'>Пол мужской</li>
                                        <li className='check-data-passenger-info-item'>Дата рождения 25.01.2006</li>
                                        <li className='check-data-passenger-info-item'>Свидетельство о рождении VIII УН 256319</li>
                                    </ul>
                                </div>
                            </div>
                            <span className='line-bottom'></span>
                            <div className='check-data-passenger'>
                                <div className='check-data-passenger-type'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                                        <path d="M34 0C15.2492 0 0 15.2492 0 34C0 52.7508 15.2492 68 34 68C52.7508 68 68 52.7508 68 34C68 15.2492 52.7508 0 34 0ZM33.887 16.3787C38.8571 16.3787 42.9236 20.3322 42.9236 25.3023C42.9236 30.2724 38.9701 34.3389 34 34.3389C29.0299 34.3389 24.9635 30.2724 24.9635 25.3023C25.0764 20.4452 29.0299 16.3787 33.887 16.3787ZM51.9601 52.186C39.8738 52.186 28.1262 52.186 16.2658 52.186C15.701 46.5382 15.701 44.392 21.3488 41.6811C29.7076 37.7276 38.2924 37.7276 46.7641 41.6811C47.8937 42.1329 48.9103 42.9236 49.8139 43.6013C51.2824 44.8439 52.0731 46.4252 51.9601 48.3455C51.9601 49.701 51.9601 50.8306 51.9601 52.186Z" fill="#FFA800"/>
                                    </svg>
                                    <span>Взрослый</span>
                                </div>
                                <div className='check-data-passenger-info'>
                                    <span className='check-data-passenger-info-title'>Мартынюк Сергей Петрович</span>
                                    <ul className='check-data-passenger-info-items'>
                                        <li className='check-data-passenger-info-item'>Пол мужской</li>
                                        <li className='check-data-passenger-info-item'>Дата рождения 19.06.1982</li>
                                        <li className='check-data-passenger-info-item'>Паспорт РФ 4204 380694</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='check-data-passengers-result-block'>
                            <div className='check-data-passengers-result'>
                                <span className='check-data-passengers-result-title'>Всего</span>
                                <span className='check-data-passengers-result-sum'>7 760</span>
                                <img className='train-card-place-price-img' src={ruble}/>
                            </div>
                            <button className='btn train-card-change-btn'>Изменить</button>
                        </div>
                    </div>
                </div>
                <div className='check-data-payment-block'>
                    <h2 className='check-data-title'>Способ оплаты</h2>
                    <div className='check-data-payment-info'>
                        <div className='check-data-payment-cash'>
                            Наличными
                        </div>
                        <button className='btn train-card-change-btn'>Изменить</button>
                    </div>
                </div>
                <button className='btn check-data-done-btn' onClick={handleClick}>Подтвердить</button>
            </section>
        </>
    )
}