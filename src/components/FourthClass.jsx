import ruble from '../img/ruble.svg';

export const FourthClass = () => {


    return (
        <>
            <div className='vagon-header'>
                <div className='vagon-header-amount'>
                    <span className='vagon-header-title'>Вагоны</span>
                    <button className='btn vagon-header-number'>20</button>
                    <button className='btn vagon-header-number'>21</button>
                    <button className='btn vagon-header-number vagon-number-active'>22</button>
                    <button className='btn vagon-header-number'>25</button>
                </div>
                <span className='vagon-header-text'>Нумерация вагонов начинается с головы поезда</span>
            </div>
            <div className='vagon-type-block-info'>
                <div className='vagon-number-info'>
                    <span className='vagon-number'>22</span>
                    <span>Вагон</span>
                </div>
                <div className='vagon-seats-block'>
                    <div className='vagon-seats-amount'>
                        <div className='vagon-seats-title'>
                            Места
                            <span className='vagon-seats-amount_amount'>35</span>
                        </div>
                    </div>
                    <div className='vagon-seats-price'>
                        <div className='vagon-seats-title'>
                            Стоимость
                        </div>
                        <ul className='vagon-seats-price-list'>
                            <li className='vagon-seats-price-item'>
                                1 920
                                <img className='vagon-seats-price-ruble' src={ruble}/>
                            </li>
                        </ul>
                    </div>
                    <div className='vagon-seats-service-block'>
                        <div className='vagon-seats-title'>
                            Стоимость
                            <span className='vagon-seats-service_service'>ФПК</span>
                        </div>
                        <button className='btn vagon-seats-service-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none" className='svg-conditioner'>
                                <rect x="0.5" y="0.5" width="35" height="33.1053" rx="4.5" stroke="#292929"/>
                                <path d="M16.0993 18.641C15.7147 18.8691 15.3588 19.0788 15.003 19.2885C14.3847 19.6527 13.7737 20.0205 13.1518 20.3774C13.0296 20.4473 12.9865 20.5319 12.9793 20.6643C12.9326 21.3964 12.8787 22.1321 12.8283 22.8642C12.7996 23.2946 12.4941 23.5889 12.0879 23.5742C11.6925 23.5595 11.4013 23.2284 11.4157 22.798C11.4301 22.4632 11.4553 22.1248 11.4768 21.79C11.484 21.6576 11.4912 21.5251 11.4984 21.3633C11.3906 21.4258 11.3079 21.47 11.2252 21.5178C10.6825 21.8378 10.1397 22.1616 9.59333 22.4816C9.31296 22.6435 8.98946 22.603 8.75942 22.3897C8.54734 22.1947 8.45389 21.8489 8.59048 21.584C8.66596 21.4369 8.79536 21.2934 8.93554 21.2051C9.49269 20.8556 10.0606 20.5319 10.6249 20.1971C10.6753 20.1677 10.7256 20.1346 10.7939 20.0941C10.3697 19.8807 9.96715 19.6821 9.56457 19.4798C9.21232 19.2995 9.05776 18.9537 9.1584 18.5969C9.28061 18.1738 9.73351 17.9604 10.1397 18.1554C10.8011 18.4718 11.4553 18.8029 12.1095 19.134C12.2353 19.2002 12.3323 19.1965 12.4545 19.1229C13.3747 18.5711 14.2985 18.0303 15.2187 17.4859C15.269 17.4564 15.3193 17.4233 15.3948 17.3755C15.1935 17.2578 15.0102 17.1474 14.8269 17.0407C14.0397 16.5735 13.2489 16.1137 12.4653 15.6391C12.3287 15.5545 12.2245 15.5619 12.0879 15.6318C11.4517 15.9592 10.8119 16.2756 10.1684 16.5883C9.78743 16.7759 9.37766 16.6398 9.20153 16.2756C9.01822 15.904 9.16559 15.4846 9.5502 15.286C9.90245 15.102 10.2583 14.9291 10.6106 14.7489C10.6645 14.7231 10.7148 14.6937 10.7867 14.6532C10.2439 14.3332 9.72273 14.0242 9.20153 13.7151C9.10448 13.6563 9.00384 13.6011 8.90679 13.5386C8.54734 13.3178 8.42873 12.8948 8.62283 12.5416C8.82052 12.1848 9.24826 12.0707 9.61849 12.2841C10.2008 12.6225 10.7795 12.9684 11.3582 13.3105C11.3942 13.3325 11.4301 13.3509 11.4984 13.3914C11.4768 13.0346 11.4589 12.7108 11.4409 12.3834C11.4301 12.2289 11.4157 12.0781 11.4121 11.9236C11.4049 11.5189 11.6925 11.1952 12.0735 11.1768C12.4725 11.1584 12.7924 11.4453 12.8212 11.8574C12.8751 12.6078 12.929 13.362 12.9757 14.1124C12.9829 14.2375 13.0296 14.3074 13.1375 14.3663C14.0684 14.9107 14.9922 15.4589 15.9196 16.007C15.9699 16.0364 16.0202 16.0659 16.0957 16.1063C16.0993 16.0254 16.1065 15.9665 16.1065 15.9114C16.1065 14.8151 16.1029 13.7151 16.1101 12.6189C16.1101 12.4864 16.067 12.4092 15.9591 12.3356C15.3517 11.9199 14.7442 11.5042 14.1439 11.0811C13.6874 10.7611 13.7234 10.0879 14.205 9.83405C14.4602 9.70161 14.7154 9.72368 14.9527 9.88555C15.2762 10.1063 15.5997 10.327 15.9232 10.5477C15.9699 10.5808 16.0202 10.6139 16.1065 10.6691C16.1065 10.5735 16.1065 10.5073 16.1065 10.4447C16.1065 9.78254 16.1029 9.12037 16.1065 8.45819C16.1101 7.95788 16.4803 7.62679 16.9332 7.70404C17.2495 7.75555 17.4904 8.02778 17.5155 8.35886C17.5191 8.40669 17.5155 8.45819 17.5155 8.50601C17.5155 14.4178 17.5155 20.3259 17.5155 26.2376C17.5155 26.6349 17.3466 26.9145 17.0375 27.0175C16.5666 27.1794 16.1065 26.8373 16.1029 26.3149C16.0993 25.6454 16.1029 24.9795 16.1029 24.31C16.1029 24.2438 16.1029 24.1812 16.1029 24.0708C15.8513 24.2438 15.632 24.3909 15.4164 24.5381C15.2618 24.6447 15.1108 24.7514 14.9527 24.8544C14.5896 25.0972 14.1619 25.0236 13.939 24.6815C13.709 24.332 13.806 23.8943 14.1727 23.6404C14.7729 23.2247 15.3732 22.8127 15.9699 22.3933C16.031 22.3492 16.0957 22.2535 16.0957 22.1836C16.1029 21.0432 16.1029 19.9028 16.0993 18.7624C16.1101 18.7366 16.1065 18.7072 16.0993 18.641Z" fill="#292929"/>
                                <path d="M27.1595 12.6189C26.9474 12.8764 26.7137 13.1155 26.5268 13.3877C26.2536 13.7924 25.9697 14.2044 25.7648 14.6496C25.4161 15.4037 25.6102 16.11 26.2501 16.6287C26.8324 17.1033 27.5153 17.3608 28.2198 17.5705C28.3025 17.5962 28.3888 17.6183 28.4211 17.6294C27.8496 17.8869 27.2529 18.1481 26.6634 18.4276C26.4873 18.5123 26.3255 18.641 26.1746 18.7698C25.621 19.237 25.4485 19.8476 25.6749 20.5503C25.8619 21.1389 26.2141 21.6245 26.5987 22.088C26.7641 22.2867 26.9438 22.4743 27.1487 22.6987C26.8935 22.6472 26.6778 22.5957 26.4585 22.5589C25.8906 22.4632 25.3227 22.386 24.744 22.4559C23.9208 22.5589 23.3925 23.0776 23.2774 23.9164C23.1696 24.711 23.3062 25.4798 23.5003 26.2413C23.5111 26.2818 23.5183 26.3223 23.5398 26.4032C23.3421 26.2229 23.1768 26.0648 23.0043 25.9176C22.5657 25.5424 22.1128 25.1929 21.588 24.9574C20.7649 24.5896 20.0496 24.7919 19.5212 25.5387C19.1402 26.0758 18.9066 26.6828 18.7197 27.3118C18.7017 27.367 18.6873 27.4259 18.6514 27.4737C18.6514 26.256 18.6514 25.0421 18.6514 23.8097C20.5744 23.7435 22.156 22.9672 23.3565 21.4295C24.2587 20.2707 24.6901 18.9353 24.6505 17.4528C24.5643 14.0683 21.7965 11.4196 18.6586 11.438C18.6586 10.1651 18.6586 8.8923 18.6586 7.57898C18.6873 7.65623 18.7053 7.70038 18.7161 7.74452C18.9389 8.46556 19.2013 9.1682 19.6434 9.78256C20.1574 10.4926 20.844 10.6875 21.642 10.3454C22.289 10.0695 22.8245 9.63173 23.3206 9.1351C23.3889 9.0652 23.4572 8.99898 23.5255 8.92908C23.5326 8.92173 23.547 8.92173 23.5614 8.91805C23.4967 9.28592 23.4068 9.65012 23.3781 10.018C23.3421 10.4926 23.3134 10.9745 23.3601 11.4454C23.4392 12.2436 23.9748 12.7513 24.7584 12.8617C25.5024 12.9647 26.2249 12.8433 26.9438 12.6557C27.0085 12.6373 27.0696 12.6226 27.1343 12.6078C27.1379 12.6078 27.1451 12.6115 27.1595 12.6189Z" fill="#292929"/>
                                <path d="M18.6548 22.5332C18.6548 19.2664 18.6548 15.996 18.6548 12.6962C20.3622 12.7771 21.7424 13.4797 22.6518 14.9549C23.7517 16.7391 23.7266 18.5748 22.6231 20.3553C21.5591 22.0623 19.7008 22.6067 18.6548 22.5332Z" fill="#292929"/>
                            </svg>
                        </button>
                        <button className='btn vagon-seats-service-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none" className='svg-wifi'>
                                <rect x="0.5" y="0.5" width="35" height="33.1053" rx="4.5" stroke="#292929"/>
                                <path d="M27.4737 13.4662C27.2528 13.6749 27.0318 13.8837 26.8171 14.0988C26.6024 14.3139 26.4004 14.5416 26.1731 14.7883C23.8686 12.5552 21.16 11.3785 17.9906 11.3785C14.8337 11.3785 12.1378 12.5552 9.89644 14.7251C9.44817 14.2822 9.01883 13.8521 8.52637 13.3586C9.20825 12.8272 9.87118 12.2262 10.6099 11.7328C15.8692 8.24078 22.6501 8.84809 27.2338 13.2005C27.3096 13.2701 27.3917 13.3333 27.4737 13.3966C27.4737 13.4219 27.4737 13.4409 27.4737 13.4662Z" fill="#292929"/>
                                <path d="M17.6872 24.4738C17.6051 24.4358 17.523 24.3915 17.4346 24.3536C16.7654 24.0689 16.3929 23.3667 16.5318 22.6519C16.6707 21.9433 17.2957 21.4309 18.0218 21.4309C18.7416 21.4372 19.3666 21.956 19.4992 22.6645C19.6318 23.373 19.2467 24.0752 18.5711 24.3536C18.4827 24.3915 18.4006 24.4295 18.3122 24.4675C18.1039 24.4738 17.8955 24.4738 17.6872 24.4738Z" fill="#292929"/>
                                <path d="M12.5608 17.4011C12.1126 16.9583 11.6832 16.5344 11.2539 16.1043C14.5181 12.5616 20.8507 12.0935 24.7399 16.0663C24.3043 16.4965 23.8623 16.9266 23.4141 17.3695C21.9367 15.9524 20.1246 15.1553 17.9906 15.1617C15.8629 15.168 14.0572 15.9588 12.5608 17.4011Z" fill="#292929"/>
                                <path d="M22.1069 18.7675C21.6586 19.2103 21.2293 19.6405 20.8 20.0643C19.1142 18.4702 16.6834 18.641 15.225 20.058C14.7956 19.6278 14.3663 19.204 13.9307 18.7738C15.6606 16.7431 19.6319 16.2307 22.1069 18.7675Z" fill="#292929"/>
                            </svg>
                        </button>
                       
                        <button className='btn vagon-seats-service-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none" className='svg-food'>
                                <rect width="36" height="34.1053" rx="5" stroke='#292929'fill="#F7F5F9" fillOpacity="0.79"/>
                                <path d="M10.3989 8.52637C10.6596 8.52637 10.8493 8.52637 11.039 8.52637C15.7804 8.52637 20.5219 8.52637 25.2633 8.52637C26.745 8.52637 27.4681 9.25024 27.4681 10.7573C27.4681 11.5643 27.48 12.3831 27.4681 13.19C27.4562 14.3767 26.6739 15.1599 25.5004 15.1718C24.9077 15.1837 24.3269 15.1718 23.6868 15.1718C23.6868 16.0974 23.6868 16.9518 23.6868 17.8181C23.6749 20.1915 22.0747 21.8053 19.7158 21.8172C17.9378 21.8172 16.1597 21.8291 14.3817 21.8172C12.0465 21.8053 10.4226 20.2033 10.4226 17.8774C10.387 14.7802 10.3989 11.7067 10.3989 8.52637ZM23.7223 10.4369C23.7223 11.3625 23.7223 12.3 23.7223 13.2375C24.3387 13.2375 24.9314 13.2375 25.5241 13.2375C25.5241 12.2882 25.5241 11.3625 25.5241 10.4369C24.9077 10.4369 24.3387 10.4369 23.7223 10.4369Z" fill="#292929"/>
                                <path d="M25.5363 23.7513C25.5363 24.3684 25.5363 24.9618 25.5363 25.5788C19.8584 25.5788 14.2043 25.5788 8.52637 25.5788C8.52637 24.9618 8.52637 24.3803 8.52637 23.7513C14.1805 23.7513 19.8347 23.7513 25.5363 23.7513Z" fill="#292929"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="type-vagon-fourth-class-block">
                <div className="type-vagon-fourth-class-info">
                    <span>11 человек выбирают места в этом поезде</span>
                </div>
                <div className="type-vagon-fourth-class">
                    <div className="type-vagon-fourth-left">
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat">2</button>
                            <button className="btn type-vagon-fourth-class-seat">1</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat">4</button>
                            <button className="btn type-vagon-fourth-class-seat">3</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">6</button>
                            <button className="btn type-vagon-fourth-class-seat busy-seat">5</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">8</button>
                            <button className="btn type-vagon-fourth-class-seat busy-seat">7</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">10</button>
                            <button className="btn type-vagon-fourth-class-seat">9</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat">12</button>
                            <button className="btn type-vagon-fourth-class-seat">11</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat">14</button>
                            <button className="btn type-vagon-fourth-class-seat">13</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">16</button>
                            <button className="btn type-vagon-fourth-class-seat">15</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">18</button>
                            <button className="btn type-vagon-fourth-class-seat busy-seat">17</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat">20</button>
                            <button className="btn type-vagon-fourth-class-seat">19</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">22</button>
                            <button className="btn type-vagon-fourth-class-seat busy-seat">21</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">24</button>
                            <button className="btn type-vagon-fourth-class-seat busy-seat">23</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">26</button>
                            <button className="btn type-vagon-fourth-class-seat busy-seat">25</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat">28</button>
                            <button className="btn type-vagon-fourth-class-seat">27</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">30</button>
                            <button className="btn type-vagon-fourth-class-seat busy-seat">29</button> 
                        </div>
                        <div className="type-vagon-fourth-class-seats">
                            <button className="btn type-vagon-fourth-class-seat">32</button>
                            <button className="btn type-vagon-fourth-class-seat">31</button>
                        </div>
                    </div>
                    <div className='type-vagon-fourth-right'>
                    <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat">33</button>
                            <button className="btn type-vagon-fourth-class-seat"></button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat">35</button>
                            <button className="btn type-vagon-fourth-class-seat">34</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">37</button>
                            <button className="btn type-vagon-fourth-class-seat busy-seat">36</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">39</button>
                            <button className="btn type-vagon-fourth-class-seat busy-seat">38</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">41</button>
                            <button className="btn type-vagon-fourth-class-seat busy-seat">40</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat">43</button>
                            <button className="btn type-vagon-fourth-class-seat">42</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat">45</button>
                            <button className="btn type-vagon-fourth-class-seat">44</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat">47</button>
                            <button className="btn type-vagon-fourth-class-seat">46</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat">49</button>
                            <button className="btn type-vagon-fourth-class-seat busy-seat">48</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat">51</button>
                            <button className="btn type-vagon-fourth-class-seat">50</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">53</button>
                            <button className="btn type-vagon-fourth-class-seat">52</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat">55</button>
                            <button className="btn type-vagon-fourth-class-seat">54</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">57</button>
                            <button className="btn type-vagon-fourth-class-seat busy-seat">56</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat">59</button>
                            <button className="btn type-vagon-fourth-class-seat">58</button>
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat busy-seat">61</button>
                            <button className="btn type-vagon-fourth-class-seat busy-seat">60</button> 
                        </div>
                        <div className="type-vagon-fourth-class-seats-row">
                            <button className="btn type-vagon-fourth-class-seat">62</button>
                            <button className="btn type-vagon-fourth-class-seat"></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}