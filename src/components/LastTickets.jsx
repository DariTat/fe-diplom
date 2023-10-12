
import icon from '../img/Group_2.2.svg';
import ruble from '../img/ruble.svg';

export const LastTickets = () => {


    return (
        <>
            <div className="last-tickets">
                <h2 className="last-tickets-title">Последние билеты</h2>
                <div className="last-ticket">
                    <div className="last-ticket-point">
                        <div className="depature-point">
                            <span className="depature-city">Санкт-Петербург</span>
                            <p className="depature-railway">Курский вокзал</p>
                        </div>
                        <div className="arrival-point">
                            <span className="arrival-city">Самара</span>
                            <p className="arrival-railway">Московский вокзал</p>
                        </div>
                    </div>
                    <img className='last-ticket-icon' src={icon}/>
                    <div className='last-ticket-price'>
                        от
                        <p className='last-ticket-cost'>2500</p>
                        <img className='last-ticket-ruble' src={ruble}/>
                    </div>
                </div>
                <div className="last-ticket">
                    <div className="last-ticket-point">
                        <div className="depature-point">
                            <span className="depature-city">Москва</span>
                            <p className="depature-railway">Курский вокзал</p>
                        </div>
                        <div className="arrival-point">
                            <span className="arrival-city">Казань</span>
                            <p className="arrival-railway">Московский вокзал</p>
                        </div>
                    </div>
                    <img className='last-ticket-icon' src={icon}/>
                    <div className='last-ticket-price'>
                        от
                        <p className='last-ticket-cost'>3500</p>
                        <img className='last-ticket-ruble' src={ruble}/>
                    </div>
                </div>
                <div className="last-ticket">
                    <div className="last-ticket-point">
                        <div className="depature-point">
                            <span className="depature-city">Казань</span>
                            <p className="depature-railway">Курский вокзал</p>
                        </div>
                        <div className="arrival-point">
                            <span className="arrival-city">Нижний новгород</span>
                            <p className="arrival-railway">Московский вокзал</p>
                        </div>
                    </div>
                    <img className='last-ticket-icon' src={icon}/>
                    <div className='last-ticket-price'>
                        от
                        <p className='last-ticket-cost'>3800</p>
                        <img className='last-ticket-ruble' src={ruble}/>
                    </div>
                </div>
            </div>
        </>
    )
}