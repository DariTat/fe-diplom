import { useState } from "react";



export const SearchControl = () => {

    const [sort, setSort] = useState('времени');
    const [showList, setShowList] = useState(false);

    const onClickSort = (event) => {
        event.preventDefault();
        setSort(event.target.textContent);
        setShowList(!showList);
    }

    return (
        <>
            <div className="search-control">
                <div className="amount-block">
                    <span className="amount">найдено 20</span>
                </div>
                <div className="dropdown">
                    <button className="btn dropdown-toggle button-sort"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setShowList(!showList)}>
                        сортировать по:
                    </button>
                    <ul className={showList ? "dropdown-menu dropdown-sorted show" : "dropdown-menu dropdown-sorted"} aria-labelledby="dropdownMenuButton">
                        <li>
                            <a className="dropdown-item sort-item" href="#" onClick={onClickSort}>времени</a>
                        </li>
                        <li><hr className='dropdown-divender'/></li>
                        <li>
                            <a className="dropdown-item sort-item" href="#" onClick={onClickSort}>стоимости</a>
                        </li>
                        <li><hr className='dropdown-divender'/></li>
                        <li>
                            <a className="dropdown-item sort-item" href="#" onClick={onClickSort}>длительности</a>
                        </li>
                    </ul>
                </div>
                <span className="sort-text">{sort}</span>
                <div className="search-control-amount">
                    <span>показать по:</span>
                    <ul className="search-control-list">
                        <li className="search-control-item">
                            <button className="btn btn-search-control active">5</button>
                        </li>
                        <li className="search-control-item">
                            <button className="btn btn-search-control">10</button>
                        </li>
                        <li className="search-control-item">
                            <button className="btn btn-search-control">20</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}