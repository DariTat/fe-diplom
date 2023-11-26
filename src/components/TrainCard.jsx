import train from '../img/Group_9.svg';
import vector_there from '../img/Vector-there.svg';
import vector_back from '../img/Vector-back.svg';
import ruble from '../img/ruble.svg';
import icon from '../img/Group_2.2.svg';
import {format, intervalToDuration} from 'date-fns'
import { selectTrain, trainSeatsBackRequest, trainSeatsRequest } from '../redux/slice/trainSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const TrainCard = ({item}) => {
    //console.log(item)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const typeVagon = [
        {name: 'fourth', status: item.departure.have_fourth_class},
        {name: 'third', status: item.departure.have_third_class},
        {name: 'second', status: item.departure.have_second_class},
        {name: 'first', status: item.departure.have_first_class}
    ]

    const typeVagonList = typeVagon.map(type => {
        if (type.name === 'fourth' && type.status === true) {
            type.type = 'Сидячий';
            type.amount_seats = item.departure.available_seats_info.fourth;
            type.min_price = item.departure.min_price
        }
        if (type.name === 'third' && type.status === true) {
            type.type = 'Плацкарт';
            type.amount_seats = item.departure.available_seats_info.third;
            type.min_price = item.departure.min_price
        }
        if (type.name === 'second' && type.status === true) {
            type.type = 'Купе';
            type.amount_seats = item.departure.available_seats_info.second;
            type.min_price = item.departure.min_price
        }
        if (type.name === 'first' && type.status === true) {
            type.type = 'Люкс';
            type.amount_seats = item.departure.available_seats_info.first;
            type.min_price = item.departure.price_info.first.price
        }
    })


    const handleClick = (id) => {
        console.log(id)
        dispatch(trainSeatsRequest(id));
        dispatch(selectTrain(item))
        item.arrival ? dispatch(trainSeatsBackRequest(item.arrival._id)) : null
        navigate(`${id}`)
    }

    const formatDate = (time) => {
        return new Date(time * 1000).toLocaleTimeString('ru-Ru', {hour: '2-digit', minute:'2-digit'})
    }

    const getDuration = (time_start, time_end) => {
        const result = intervalToDuration({
            start: new Date(time_start * 1000),
            end: new Date(time_end * 1000),
          });
        const hours = result.days > 0 ? (result.days * 24 + result.hours) : result.hours;
        const minutes = result.minutes < 10 ? '0' + result.minutes : result.minutes
        return hours + ' : ' + minutes
    }
   

    return (
        <>
            <div className="train-card" key={item.departure._id}>
                <div className='train-card-info'>
                    <img className='train-img' src={train}/>
                    <p className='train-number'>{item.departure.train.name}</p>
                    <ul className='train-points'>
                        { /*
                            <li className='train-point'>Адлер 
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='svg-train'>
                                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z" fill="#928F94"/>
                            </svg>
                        </li> */
                        }
                        
                        <li className='train-point-depature'>{item.departure.from.city.name}
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='svg-train'>
                                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z" fill="#292929"/>
                            </svg>
                        </li>
                        <li className='train-point-arrival'>{item.departure.to.city.name}</li>
                    </ul>
                    </div>
                    <div className='train-card-direction'>
                        <div className='train-card-direction-there'>
                            <ul className='train-depature-start'>
                                <li className='train-depature-time'>{formatDate(item.departure.from.datetime)}</li>
                                <li className='train-depature-city'>{item.departure.from.city.name}</li>
                                <li className='train-depature-station'>{item.departure.from.railway_station_name} вокзал</li>
                            </ul>
                            <div className='duration'>
                                <p className='duration-time'>{getDuration(item.departure.from.datetime, item.departure.to.datetime)}</p>
                                <img className='duration-img' src={vector_there}/>
                            </div>
                            <ul className='train-depature-end'>
                                <li className='train-depature-time'>{formatDate(item.departure.to.datetime)}</li>
                                <li className='train-depature-city'>{item.departure.to.city.name}</li>
                                <li className='train-depature-station'>{item.departure.to.railway_station_name} вокзал</li>
                            </ul>
                        </div>
                        {
                            item?.arrival && (
                                <div className='train-card-direction-back'>
                                    <ul className='train-depature-start'>
                                        <li className='train-depature-time'>{formatDate(item.arrival.to.datetime)}</li>
                                        <li className='train-depature-city'>{item.arrival.to.city.name}</li>
                                        <li className='train-depature-station'>{item.arrival.to.railway_station_name} вокзал</li>
                                    </ul>
                                    <div className='duration'>
                                        <p className='duration-time'>{getDuration(item.arrival.from.datetime, item.arrival.to.datetime)}</p>
                                        <img className='duration-img' src={vector_back}/>
                                    </div>
                                    <ul className='train-depature-end'>
                                    <li className='train-depature-time'>{formatDate(item.arrival.from.datetime)}</li>
                                    <li className='train-depature-city'>{item.arrival.from.city.name}</li>
                                        <li className='train-depature-station'>{item.arrival.from.railway_station_name} вокзал</li>
                                    </ul>
                                </div>
                            )
                        }
                       
                    </div>
                    <div className='train-card-conditions'>
                        <ul className='train-card-places'>
                            {
                                typeVagon.map(type => type.status && (
                                    <li className='train-card-place'>
                                        {type.type} 
                                        <p className='train-card-place-amount'>{type.amount_seats}</p>
                                        <p className='train-card-place-price'>
                                            от 
                                            <span className='train-card-place-cost'>{type.min_price}</span>
                                            <img className='train-card-place-price-img' src={ruble}/>
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                        <svg xmlns="http://www.w3.org/2000/svg" width="92" height="20" viewBox="0 0 92 20" fill="none" className='train-card-place-img'>
                            <path d="M20 6.21434C19.7667 6.4347 19.5335 6.65506 19.3069 6.8821C19.0803 7.10914 18.867 7.34953 18.6271 7.60995C16.1946 5.25277 13.3356 4.01074 9.99 4.01074C6.65778 4.01074 3.81206 5.25277 1.44618 7.54318C0.973009 7.07575 0.519827 6.62167 0 6.10082C0.71976 5.53991 1.41953 4.90553 2.19927 4.38468C7.75075 0.698658 14.9084 1.33971 19.7467 5.93388C19.8267 6.00734 19.9134 6.07411 20 6.14089C20 6.1676 20 6.18763 20 6.21434Z" fill="#C4C4C4"/>
                            <path d="M9.66998 17.8334C9.58334 17.7933 9.4967 17.7466 9.4034 17.7065C8.69697 17.406 8.30376 16.6648 8.45038 15.9102C8.597 15.1623 9.25678 14.6215 10.0232 14.6215C10.7829 14.6281 11.4427 15.1757 11.5827 15.9236C11.7226 16.6715 11.3161 17.4127 10.603 17.7065C10.5097 17.7466 10.4231 17.7866 10.3298 17.8267C10.1098 17.8334 9.8899 17.8334 9.66998 17.8334Z" fill="#C4C4C4"/>
                            <path d="M4.25845 10.3678C3.78527 9.90035 3.33209 9.45295 2.87891 8.99887C6.32442 5.25943 13.0089 4.76528 17.1142 8.95881C16.6543 9.41288 16.1878 9.86696 15.7146 10.3344C14.1551 8.83861 12.2425 7.99723 9.98987 8.00391C7.74395 8.01059 5.83792 8.84529 4.25845 10.3678Z" fill="#C4C4C4"/>
                            <path d="M14.335 11.8102C13.8619 12.2776 13.4087 12.7317 12.9555 13.1791C11.1761 11.4963 8.61029 11.6766 7.0708 13.1724C6.61762 12.7183 6.16444 12.2709 5.70459 11.8168C7.53065 9.67334 11.7226 9.13246 14.335 11.8102Z" fill="#C4C4C4"/>
                            <path d="M42.2846 17.3529C42.154 17.357 42.0724 17.304 42.001 17.2328C41.4908 16.7339 40.9766 16.2391 40.4705 15.7382C39.8991 15.1721 39.3359 14.5959 38.7604 14.0339C38.6318 13.9076 38.5992 13.7753 38.6502 13.6266C38.7624 13.2907 38.8747 12.9506 39.0155 12.6248C39.9215 10.5173 41.1806 8.63385 42.6948 6.91733C44.1008 5.32298 45.6966 3.9465 47.4924 2.80826C48.1291 2.40509 48.7944 2.05079 49.4453 1.67206C49.5127 1.63337 49.5412 1.66799 49.5821 1.70668C50.2187 2.34197 50.8575 2.97727 51.4942 3.6146C52.4267 4.54515 53.3593 5.47773 54.294 6.40624C54.3531 6.46529 54.3572 6.50398 54.3205 6.57728C53.5246 8.13498 52.5594 9.57865 51.4207 10.9063C50.7003 11.7452 49.9188 12.525 49.0964 13.2642C47.2108 14.9583 45.0967 16.2961 42.7295 17.2226C42.607 17.2714 42.4805 17.3101 42.354 17.3509C42.3234 17.3529 42.2907 17.3509 42.2846 17.3529ZM43.6315 11.1221C43.5641 11.8633 44.2518 12.3764 44.8559 12.3723C45.5354 12.3662 46.1027 11.8063 46.1007 11.1241C46.0986 10.552 45.7007 9.88001 44.7579 9.89426C44.1478 9.90444 43.6315 10.4583 43.6315 11.1221ZM48.3944 8.81507C49.1127 8.89041 49.6474 8.16552 49.6412 7.59742C49.6372 7.0171 49.129 6.34719 48.3597 6.3533C47.7455 6.35737 47.1292 6.91733 47.1557 7.6076C47.1822 8.3162 47.674 8.81507 48.3944 8.81507Z" fill="#C4C4C4"/>
                            <path d="M54.7653 5.61827C53.2981 4.17256 51.8288 2.72686 50.3452 1.26486C50.6289 1.15287 50.8942 1.04291 51.1635 0.941104C52.1492 0.564406 53.1613 0.29359 54.2 0.13273C54.6184 0.0675711 55.0428 0.0248108 55.4673 0.00241249C55.8836 -0.0199858 56.0019 0.110331 55.9999 0.52979C55.9958 1.24246 55.8713 1.93885 55.7183 2.63319C55.4918 3.6574 55.1734 4.65515 54.7571 5.61827C54.751 5.63049 54.7449 5.64271 54.7388 5.65289C54.7469 5.64067 54.7571 5.62845 54.7653 5.61827Z" fill="#C4C4C4"/>
                            <path d="M42.9703 5.98269C42.9295 6.03156 42.8928 6.08247 42.8479 6.12726C41.6255 7.39989 40.5888 8.80895 39.7073 10.3341C39.3971 10.8716 39.1196 11.4255 38.8318 11.9752C38.7869 12.0608 38.7441 12.0811 38.6502 12.0547C37.8666 11.8307 37.083 11.6148 36.2994 11.3929C36.0504 11.3216 35.9382 11.0834 36.0341 10.839C36.0647 10.7617 36.1075 10.6863 36.1524 10.6151C37.1871 9.00239 38.54 7.72772 40.246 6.84604C41.0643 6.42251 41.9275 6.12319 42.8377 5.96029C42.8764 5.95419 42.9152 5.95418 42.954 5.95215C42.9601 5.96233 42.9642 5.97251 42.9703 5.98269Z" fill="#C4C4C4"/>
                            <path d="M43.9009 17.188C45.0192 16.6504 46.0946 16.0457 47.117 15.3452C48.1373 14.6468 49.0883 13.8608 49.9984 13.0239C50.0106 13.0321 50.0249 13.0402 50.0372 13.0484C50.029 13.1156 50.0229 13.1828 50.0106 13.2499C49.7066 14.8484 48.9944 16.2513 47.9741 17.5056C47.2292 18.4219 46.3538 19.1936 45.3498 19.8187C45.2702 19.8697 45.1865 19.9165 45.0988 19.9511C44.9212 20.0203 44.7498 19.9613 44.6723 19.7882C44.5947 19.6151 44.5294 19.4359 44.4763 19.2547C44.2825 18.5807 44.0947 17.9047 43.905 17.2307C43.9029 17.2226 43.9029 17.2124 43.9009 17.188Z" fill="#C4C4C4"/>
                            <path d="M41.2336 17.7012C41.0968 17.805 40.9642 17.9231 40.8152 18.0147C40.2316 18.3772 39.6092 18.6684 38.9705 18.9168C38.0481 19.2772 37.1175 19.6132 36.189 19.9593C36.1462 19.9756 36.0992 19.9838 36.0339 20C36.1094 19.7822 36.1747 19.5847 36.2462 19.3892C36.6727 18.2163 37.1032 17.0435 37.6563 15.9215C37.8338 15.5632 38.0175 15.2068 38.2889 14.9055C38.3134 14.879 38.3399 14.8525 38.3583 14.8322C39.3112 15.7851 40.2622 16.7319 41.2336 17.7012Z" fill="#C4C4C4"/>
                            <path d="M73.9769 1C74.2521 1 74.4523 1 74.6525 1C79.6574 1 84.6622 1 89.6671 1C91.2311 1 91.9944 1.76409 91.9944 3.35491C91.9944 4.20668 92.0069 5.07098 91.9944 5.92276C91.9819 7.17537 91.1561 8.00209 89.9174 8.01461C89.2917 8.02714 88.6786 8.01461 88.003 8.01461C88.003 8.99165 88.003 9.89353 88.003 10.8079C87.9905 13.3132 86.3013 15.0167 83.8114 15.0292C81.9346 15.0292 80.0578 15.0418 78.1809 15.0292C75.716 15.0167 74.0019 13.3257 74.0019 10.8706C73.9643 7.60125 73.9769 4.35699 73.9769 1ZM88.0405 3.0167C88.0405 3.99374 88.0405 4.9833 88.0405 5.97286C88.6912 5.97286 89.3168 5.97286 89.9424 5.97286C89.9424 4.97077 89.9424 3.99374 89.9424 3.0167C89.2917 3.0167 88.6912 3.0167 88.0405 3.0167Z" fill="#C4C4C4"/>
                            <path d="M89.955 17.0709C89.955 17.7223 89.955 18.3486 89.955 18.9999C83.9616 18.9999 77.9933 18.9999 72 18.9999C72 18.3486 72 17.7348 72 17.0709C77.9683 17.0709 83.9366 17.0709 89.955 17.0709Z" fill="#C4C4C4"/>
                        </svg>
                        <button className='btn train-card-place-btn' onClick={() => handleClick(item.departure._id)}>Выбрать места</button>
                    </div>
                </div>
        </>
    )
}