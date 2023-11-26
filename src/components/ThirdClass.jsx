import ruble from '../img/ruble.svg';
import { useState } from 'react';
import { ServicesBlock } from './ServicesBlock';
import { useSelector } from 'react-redux';

export const ThirdClass = ({ item, typeTicket, onClick, type }) => {
    const { allSeats } = useSelector(state => state.passengers);
    const top = [];
    const bottom = [];
    item.seats.forEach((item) => { return item.index % 2 === 0 ? bottom.push(item): top.push(item)})
    let seats = '';
    type === 'departure' ? (seats = allSeats.departure) : (seats = allSeats.arrival)
    const [services, setServices] = useState([
        {
            name: 'conditioning',
            have_air_conditioning: item.coach.have_air_conditioning,
            selected: false,
        },
        {
            name: 'wifi',
            have_wifi: item.coach.have_wifi,
            selected: false
        },
        {
            name: 'linens',
            is_linens_included: item.coach.is_linens_included,
            selected: false
        },
        {
            name: 'food',
            have_food: false,
            selected: false
        }
    ])

    let boxSeatsArr = Array.from({ length: 32 }, (_, index) => index + 1);
    let boxSeats = []
    boxSeatsArr.map((item, index) => {
        if (index % 2 === 0) {
          boxSeats.push([item, boxSeatsArr[index + 1]]);
        }
        return item;
    });
    let sideSeats = Array.from({ length: 16}, (_, index) => index + 33);
    let sideSeatsArr = []
    sideSeats.map((item, index) => {
        if (index % 2 === 0) {
            sideSeatsArr.push([item, index + 34]);
        }
        return item;
    });

    const getClassName = (num, dataBase) => {
        let className = "";
        const item = dataBase.seats.find((i) => {
          return i.index === num && i.available === true
        });
        if (item) {
            const arrSeat = seats.filter((item) => item.id === dataBase.coach._id) 
            if (arrSeat.length > 0) {
                arrSeat.find((i) => {
                   return Number(i.seat.seat_id) === item.index ?
                       (className = ' seat-selected') : (className = '')
                })
            }   
        } else {
            className = ' busy-seat'
        }
        return className;
    };

    const getDisabled = (num, seats) => {
        let disabled = false;
        const item = seats.find((item) => {
            return item.index === num && item.available === true
        });
        if (!item) {
            disabled = true
        } 
        return disabled
    }

    return (
        <>
            <div className='vagon-header'>
                <div className='vagon-header-amount'>
                    <span className='vagon-header-title'>Вагоны</span>
                    <button className='btn vagon-header-number vagon-number-active'>12</button>
                </div>
                <span className='vagon-header-text'>Нумерация вагонов начинается с головы поезда</span>
            </div>
            <div className='vagon-type-block-info'>
                <div className='vagon-number-info'>
                    <span className='vagon-number'>12</span>
                    <span>Вагон</span>
                </div>
                <div className='vagon-seats-block'>
                    <div className='vagon-seats-amount'>
                        <div className='vagon-seats-title'>
                            Места
                            <span className='vagon-seats-amount_amount'>{item?.coach.available_seats}</span>
                        </div>
                        <ul className='vagon-seats-amount-list'>
                            <li className='vagon-seats-amount-item'>
                                Верхние
                                <span className='vagon-seats-amount-item_amount'>{top.length}</span>
                            </li>
                            <li className='vagon-seats-amount-item'>
                                Нижние
                                <span className='vagon-seats-amount-item_amount'>{bottom.length}</span>
                            </li>
                        </ul>
                    </div>
                    <div className='vagon-seats-price'>
                        <div className='vagon-seats-title'>
                            Стоимость
                        </div>
                        <ul className='vagon-seats-price-list'>
                            <li className='vagon-seats-price-item'>
                                {item?.coach.top_price}
                                <img className='vagon-seats-price-ruble' src={ruble}/>
                            </li>
                            <li className='vagon-seats-price-item'>
                                {item?.coach.bottom_price}
                                <img className='vagon-seats-price-ruble' src={ruble}/>
                            </li>
                        </ul>
                    </div>
                    <ServicesBlock services={services} setServices={setServices}/>
                </div>
            </div>
            <div className="type-vagon-third-class-block">
                <div className="type-vagon-third-class-info">
                    <span>13 человек выбирают места в этом поезде</span>
                </div>
                <div className="type-vagon-third-class">
                    <div className="type-vagon-third-class-reserved">
                        {
                            boxSeats.map(seat => {
                                return (
                                    <div className="type-vagon-third-class-seats" key={seat[1]}>
                                        <button
                                            data-id={seat[1]}
                                            data-id_vagon={item.coach._id}
                                            data-price={item.coach.top_price}
                                            className={"btn type-vagon-third-class-seat" + getClassName(seat[1], item)}
                                            disabled={getDisabled(seat[1], item.seats)}
                                            onClick={(e) => onClick(e, typeTicket)}
                                        >
                                            {seat[1]}
                                        </button>
                                        <button
                                            data-id={seat[0]}
                                            data-id_vagon={item.coach._id}
                                            data-price={item.coach.bottom_price}
                                            className={"btn type-vagon-third-class-seat" + getClassName(seat[0], item)}
                                            disabled={getDisabled(seat[0], item.seats)}
                                            onClick={(e) => onClick(e, typeTicket)}
                                        >
                                                {seat[0]}
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='type-vagon-third-class-lateral'>
                        {
                            sideSeatsArr.map(seat => {
                                return (
                                    <div className="type-vagon-third-class-seats-lateral" key={seat[0]}>
                                        <button
                                            data-id={seat[0]}
                                            data-id_vagon={item.coach._id}
                                            data-price={item.coach.bottom_price}
                                            className={"btn type-vagon-third-class-seat-lateral" + getClassName(seat[0], item)}
                                            disabled={getDisabled(seat[0], item.seats)}
                                            onClick={(e) => onClick(e, typeTicket)}
                                        >
                                            {seat[0]}
                                        </button>
                                        <button
                                            data-id={seat[1]}
                                            data-id_vagon={item.coach._id}
                                            data-price={item.coach.top_price}
                                            className={"btn type-vagon-third-class-seat-lateral" + getClassName(seat[1], item)}
                                            disabled={getDisabled(seat[1], item.seats)}
                                            onClick={(e) => onClick(e, typeTicket)}
                                        >
                                            {seat[1]}
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}