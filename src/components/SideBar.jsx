import calendar from '../img/Group.svg';
import union from '../img/Union.svg';
import union_2 from '../img/Union_2.svg';
import sit from '../img/Group_2.svg';
import luxe from '../img/Luxe.svg';
import wifi from '../img/wifi.svg';
import express from '../img/express.svg';
import subtract from '../img/Subtract.svg';
import subtract_2 from '../img/Subtract_2.png';
import RangeSlider from 'react-range-slider-input';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import '../App.css'

export const SideBar = () => {

    const [value, setValue] = useState([1920, 4500]);
    const [showBtn, setShowBtn] = useState(false);
    const [showBtnBack, setShowBtnBack] = useState(false);
    const [showBlock, setShowBlock] = useState(false);
    const [showBlockBack, setShowBlockBack] = useState(false);
    const [timeDepartureThere, setTimeDepartureThere] = useState([0, 11]);
    const [timeArrivalThere, setTimeArrivalThere] = useState([5, 11]);
    const [timeDepartureBack, setTimeDepartureBack] = useState([0, 11]);
    const [timeArrivalBack, setTimeArrivalBack] = useState([5, 11]);

    const [showCalendarGo, setShowCalendarGo] = useState(false);
    const [showCalendarBack, setShowCalendarBack] = useState(false);
    const [valueGo, setValueGo] = useState('');
    const [valueBack, setValueBack] = useState('');
    
    let left = ((value[0] - 1920)/((7000 - 1920)/294)) - 12;
    let right = ((7000 - value[1])/((7000 - 1920)/294)) - 12;
    
    let left_departure_there = 299 * timeDepartureThere[0]/24  - 6;
    let right_departure_there = ((24 - timeDepartureThere[1])*(299/24)) - 12;

    let left_arrival_there = 299 * timeArrivalThere[0]/24  - 6;
    let right_arrival_there = ((24 - timeArrivalThere[1])*(299/24)) - 12;

    let left_departure_back = 299 * timeDepartureBack[0]/24  - 6;
    let right_departure_back = ((24 - timeDepartureBack[1])*(299/24)) - 12;

    let left_arrival_back = 299 * timeArrivalBack[0]/24  - 6;
    let right_arrival_back = ((24 - timeArrivalBack[1])*(299/24)) - 12;

    const changeHandle = () => {
        if (showBtn === false) {
            setShowBtn(!showBtn);
            setShowBlock(true)
        } else {
            setShowBlock(false);
            setShowBtn(!showBtn); 
        }  
    }

    const changeHandleBtn = () => {
        if (showBtnBack === false) {
            setShowBtnBack(!showBtnBack);
            setShowBlockBack(true)
        } else {
            setShowBlockBack(false);
            setShowBtnBack(!showBtnBack); 
        }  
    }
   
    const onChangeDateGo = (valueGo) => {
        setValueGo(dateToString(valueGo));
        setShowCalendarGo(!showCalendarGo);
    }

    const onChangeDateBack = (valueBack) => {
        setValueBack(dateToString(valueBack));
        setShowCalendarBack(!showCalendarBack);
    }

    const dateToString = (date) =>  {
        const result = date.toLocaleString('ru-Ru', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        });
        return result.replace(/[,%]/g, '');
    }

    return(
        <>
            <aside className="sidebar-info">
                <div className='sidebar-datago'>
                    <h3 className='sidebar-title'>Дата поездки</h3>
                    <input className='sidebar-input' value={valueGo}/>
                    <button className='btn button-sidebar-calendar'><img src={calendar} className='sidebar-img' onClick={() => setShowCalendarGo(!showCalendarGo)}/></button>
                    { showCalendarGo &&
                        <div className='sidebar-calendar'>
                            <Calendar value={valueGo} onChange={onChangeDateGo}/>
                        </div>
                        
                    }
                </div>
                <div className='sidebar-databack'>
                    <h3 className='sidebar-title'>Дата возвращения</h3>
                    <input className='sidebar-input' value={valueBack}/>
                    <button className='btn button-sidebar-calendar' onClick={() => setShowCalendarBack(!showCalendarBack)}><img src={calendar} className='sidebar-img'/></button>
                    { showCalendarBack &&
                        <div className='sidebar-calendar'>
                            <Calendar value={valueBack} onChange={onChangeDateBack}/>
                        </div>
                        
                    }
                </div>
                <div className='sidebar-switches'>
                    <div className='sidebar-switch'>
                        <img src={union} className='switch-img'/>
                        <p className='switch-text'>Купе</p>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                    </div>
                    <div className='sidebar-switch'>
                        <img src={union_2} className='switch-img'/>
                        <p className='switch-text'>Плацкарт</p>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                    </div>
                    <div className='sidebar-switch'>
                        <img src={sit} className='switch-img'/>
                        <p className='switch-text'>Сидячий</p>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                    </div>
                    <div className='sidebar-switch'>
                        <img src={luxe} className='switch-img'/>
                        <p className='switch-text'>Люкс</p>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                    </div>
                    <div className='sidebar-switch'>
                        <img src={wifi} className='switch-img'/>
                        <p className='switch-text'>Wi-Fi</p>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                    </div>
                    <div className='sidebar-switch'>
                        <img src={express} className='switch-img'/>
                        <p className='switch-text'>Экспресс</p>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                    </div>
                </div>
                <div className='sidebar-price'>
                    <h3 className='sidebar-title'>Стоимость</h3>
                    <span className='price-input_text_left'>от</span>
                    <span className='price-input_text_right'>до</span>
                    <RangeSlider min='1920' max='7000' value={value} onInput={event => setValue(event)}/>
                    <div className='price'>
                        <span className='price-min'>1920</span>
                        <span className='price-left' style={{left:left}}>{value[0]}</span>
                        <span className='price-right' style={{right:right}}>{value[1]}</span>
                        <span className='price-max'>7000</span>
                    </div>  
                </div>
                <div className='sidebar-there-time'>
                    <div className='there-time'> 
                        <img className='sidebar-there-time-img' src={subtract} />
                        <h3 className='sidebar-title'>Туда</h3>
                        <button className='btn sidebar-there-time-btn' onClick={() => changeHandle()}>
                            { showBtn ? 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='svg-minus'>
                                    <rect x="1" y="1" width="18" height="18" rx="4" stroke="#C4C4C4" strokeWidth="2"/>
                                    <line x1="5.61536" y1="9.76929" x2="14.3846" y2="9.76929" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg> : 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='svg-plus'>
                                    <path d="M9.2218 4.20293L9.2218 9.18841L4.23632 9.18841C3.77255 9.18841 3.42473 9.53623 3.42473 10C3.42473 10.4638 3.77255 10.8116 4.23632 10.8116L9.2218 10.8116L9.2218 15.7971C9.2218 16.2608 9.56962 16.6087 9.97542 16.5507L10.0914 16.5507C10.5551 16.5507 10.9029 16.2029 10.845 15.7971V10.8116H15.7145C16.1783 10.8116 16.5261 10.4638 16.5261 10C16.5261 9.53623 16.1783 9.18841 15.7145 9.18841H10.845V4.20293C10.845 3.73917 10.4972 3.39134 10.0914 3.44931L9.97542 3.44931C9.51165 3.44931 9.16383 3.79714 9.2218 4.20293Z" fill="white"/>
                                    <rect x="1" y="1" width="18" height="18" rx="4" stroke="white" strokeWidth="2"/>
                                </svg>
                            }
                        </button>
                    </div>
                    { showBlock ? (
                        <div>
                            <h4 className='sidebar-title_departure'>Время отбытия</h4>
                            <RangeSlider min='0' max='24' className='range-departure-there' value={timeDepartureThere} onInput={event => setTimeDepartureThere(event)}/>
                            <div className='time-departure-there'>
                                <span className='time-departure-left' style={{left:left_departure_there}}>{timeDepartureThere[0]}:00</span>
                                <span className='time-departure-right' style={{right:right_departure_there}}>{timeDepartureThere[1]}:00</span>
                                <span className='time-departure-max'>24:00</span>
                            </div>  
                            <h4 className='sidebar-title_arrival'>Время прибытия</h4>
                            <RangeSlider min='0' max='24' className='range-arrival-there' value={timeArrivalThere} onInput={event => setTimeArrivalThere(event)}/>
                            <div className='time-arrival-there'>
                                <span className='time-arrival-left' style={{left:left_arrival_there}}>{timeArrivalThere[0]}:00</span>
                                <span className='time-arrival-right' style={{right:right_arrival_there}}>{timeArrivalThere[1]}:00</span>
                                <span className='time-arrival-max'>24:00</span>
                            </div> 
                        </div>
                    ) : null
                    }
                </div>
                <div className='sidebar-back-time'>
                    <div className='back-time'>
                        <img className='sidebar-back-time-img' src={subtract_2}/>
                        <h3 className='sidebar-title'>Обратно</h3>
                        <button className='btn sidebar-back-time-btn' onClick={() => changeHandleBtn()}>
                            { showBtnBack ? 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='svg-minus'>
                                <rect x="1" y="1" width="18" height="18" rx="4" stroke="#C4C4C4" strokeWidth="2"/>
                                <line x1="5.61536" y1="9.76929" x2="14.3846" y2="9.76929" stroke="#C4C4C4" strokeWidth="2" strokeWinecap="round" strokeWinejoin="round"/>
                            </svg> : 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='svg-plus'>
                                <path d="M9.2218 4.20293L9.2218 9.18841L4.23632 9.18841C3.77255 9.18841 3.42473 9.53623 3.42473 10C3.42473 10.4638 3.77255 10.8116 4.23632 10.8116L9.2218 10.8116L9.2218 15.7971C9.2218 16.2608 9.56962 16.6087 9.97542 16.5507L10.0914 16.5507C10.5551 16.5507 10.9029 16.2029 10.845 15.7971V10.8116H15.7145C16.1783 10.8116 16.5261 10.4638 16.5261 10C16.5261 9.53623 16.1783 9.18841 15.7145 9.18841H10.845V4.20293C10.845 3.73917 10.4972 3.39134 10.0914 3.44931L9.97542 3.44931C9.51165 3.44931 9.16383 3.79714 9.2218 4.20293Z" fill="white"/>
                                <rect x="1" y="1" width="18" height="18" rx="4" stroke="white" strokeWidth="2"/>
                            </svg>
                            }
                        </button>
                    </div>
                    { showBlockBack ? (
                        <div>
                            <h4 className='sidebar-title_departure'>Время отбытия</h4>
                            <RangeSlider min='0' max='24' className='range-departure-back' value={timeDepartureBack} onInput={event => setTimeDepartureBack(event)}/>
                            <div className='time-departure-back'>
                                <span className='time-departure-left' style={{left:left_departure_back}}>{timeDepartureBack[0]}:00</span>
                                <span className='time-departure-right' style={{right:right_departure_back}}>{timeDepartureBack[1]}:00</span>
                                <span className='time-departure-max'>24:00</span>
                            </div>  
                            <h4 className='sidebar-title_arrival'>Время прибытия</h4>
                            <RangeSlider min='0' max='24' className='range-arrival-back' value={timeArrivalBack} onInput={event => setTimeArrivalBack(event)}/>
                            <div className='time-arrival-back'>
                                <span className='time-arrival-left' style={{left:left_arrival_back}}>{timeArrivalBack[0]}:00</span>
                                <span className='time-arrival-right' style={{right:right_arrival_back}}>{timeArrivalBack[1]}:00</span>
                                <span className='time-arrival-max'>24:00</span>
                            </div> 
                        </div>
                    ) : null
                    }
                </div>
            </aside>
        </>
    )
}