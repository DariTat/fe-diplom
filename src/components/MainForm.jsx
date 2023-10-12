import icon_arrow from '../img/ic_cached.png';
import vector from '../img/Vector.svg';
import calendar from '../img/Group.svg';
import banner from '../img/banner_2.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const MainForm = () => {

    const [showCalendarHere, setShowCalendarHere] = useState(false);
    const [showCalendarBack, setShowCalendarBack] = useState(false);
    const [dateHere, setDateHere] = useState('');
    const [dateBack, setDateBack] = useState('');
    const [value, setValue] = useState(new Date());
    const [valueBack, setValueBack] = useState(new Date())


    const onChange = (value) => {
        setDateHere(dateToString(value));
        setShowCalendarHere(false);
    }

    const onChangeBack = (valueBack) => {
        setDateBack(dateToString(valueBack));
        setShowCalendarBack(false);
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
            <div className='header header-main'>
                  <img src={banner} className='banner-main'/>
                  <div className='form-main'>
                    <div>
                        <p className='form-title'>Направление</p>
                        <div className='form-direction'>
                            <input className='direction-here' placeholder='Откуда'/>
                            <img className='vector' src={vector} alt='vector' />
                            <button className='btn button_reverse'><img src={icon_arrow}/></button>
                            <input className='direction-to' placeholder='Куда'/>
                            <img className='vector vector-to' src={vector} alt='vector' />
                        </div>
                    </div>
                    <div>
                        <p className='form-title'>Дата</p>
                        <div className='form-data'>
                            { showCalendarHere &&
                                <div className='calender'>
                                    <Calendar onChange={onChange} value={value}/>
                                </div>
                            }
                            <input className='direction-here-data' placeholder='ДД/ММ/ГГ' value={dateHere}/>
                            <button type='button' className='btn button-data' onClick={() => setShowCalendarHere(!showCalendarHere)}><img src={calendar}/></button>
                            { showCalendarBack &&
                                <div className='calender calendar_back'>
                                    <Calendar onChange={onChangeBack} value={valueBack}/>
                                </div>
                            }
                            <input className='direction-back-data' placeholder='ДД/ММ/ГГ' value={dateBack}/>
                            <button className='btn button-data-back'><img src={calendar} onClick={() => setShowCalendarBack(!showCalendarBack)}/></button>
                        </div>
                        <button className='btn button-find'>Найти билеты</button>
                    </div> 
                </div>
            </div>
        </>
    )
}