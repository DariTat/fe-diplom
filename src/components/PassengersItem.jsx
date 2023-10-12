import { useState } from "react";
import Select from 'react-select'

export const PassengersItem = ({id}) => {

    const [showBtn, setShowBtn] = useState(false);
    const [selected, setSelected] = useState({value: 'old', label: 'Взрослый'});
    const [document, setDocument] = useState(null);
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [gender, setGender] = useState('male');
    const [dataBirthday, setDataBirthday] = useState('');
    const [checked, setChecked] = useState('false');
    const [passport, setPassport] = useState({series: '', number: ''});
    const [sertificate, setSertificate] = useState('');
    

    let validData;
    let validPassport;
    let validSertificate;
    let valid;


    if ((passport.series !== '' && passport.series.length === 4) && (passport.number !== '' && passport.number.length === 6)) {
        validPassport = true;
    } else {
        validPassport = false;
    }
    if (dataBirthday !== '' && dataBirthday.length == 10) {
        validData = true;
    } else {
        validData = false;
    }

    if (sertificate !== '') {
        let reg;
        reg = /^[A-Z]{4}-[А-Я]{2}-[0-9]{6}$/;
        validSertificate = reg.test(sertificate)
    }


    if ((name !== '' && secondName !== '' && surname !== '') && validData === true && (validPassport === true || validSertificate === true)) {
        console.log(validPassport, validSertificate)
        valid = true;
    } else {
        valid = false;
    }

        
    
    const options = [
        {value: 'old', label: 'Взрослый'},
        {value: 'young', label: 'Детский'}
    ];

    const typeDocument = [
        {value: 'passpost', label: 'Паспорт РФ'},
        {value: 'certificate', label: 'Свидетельство о рождении'}
    ]

    const customStyles = {
        option: (defaultStyles) => ({
          ...defaultStyles,
          color: '#292929',
          fontSize: '24px',
          borderRadius: '5px',
          width: '277px',
          height: '47.5px',
          backgroundColor: "#F4F3F6",
        }),
    
        control: (defaultStyles) => ({
          ...defaultStyles,
          width: '280px',
          height: '50px',
          border: "1px solid #928F94",
          borderRadius: '5px',
          boxShadow: "none",
          color: '#292929',
          fontSize: '24px',
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#292929' }),
    };

    const passportStyles = {
        option: (defaultStyles) => ({
          ...defaultStyles,
          color: '#292929',
          fontSize: '24px',
          borderRadius: '5px',
          width: '204px',
          height: '70px',
          backgroundColor: "#F4F3F6",
        }),
    
        control: (defaultStyles) => ({
          ...defaultStyles,
          width: '205px',
          height: '50px',
          border: "1px solid #928F94",
          borderRadius: '5px',
          boxShadow: "none",
          color: '#292929',
          fontSize: '24px',
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#292929' }),
    };

    const certificateStyles = {
        option: (defaultStyles) => ({
          ...defaultStyles,
          color: '#292929',
          fontSize: '24px',
          borderRadius: '5px',
          width: '444px',
          height: '50px',
          backgroundColor: "#F4F3F6",
        }),
    
        control: (defaultStyles) => ({
          ...defaultStyles,
          width: '444px',
          height: '50px',
          border: "1px solid #928F94",
          borderRadius: '5px',
          boxShadow: "none",
          color: '#292929',
          fontSize: '24px',
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#292929' }),
    };

    const handleChange = () => {
        if (showBtn === false) {
            setShowBtn(!showBtn);
        } else {
            setShowBtn(false);
        }
    }

    const handleSelect = (selectedOption) => {
        setDataBirthday('');
        setName('');
        setSecondName('');
        setSurname('');
        if (selectedOption.label === 'Детский') {
            setPassport({series: '', number: ''})
        } else {
            setSertificate('')
        }
        console.log(selectedOption);
        setSelected(selectedOption);
    }

    const handleChangeDocument = (selectedOption) => {
        setDocument(selectedOption);
    }

    const handlePassport = (event) => {
        setPassport({...passport, [event.target.name]: event.target.value})
    } 

    const handleSertificate = (e) => {
        setSertificate(e.target.value)
    }

    return (
        <>
            <div className="passengers-block-item">
                <div className="passengers-block-item-header">
                    <button className="btn passengers-block-item-btn" onClick={() => handleChange()}>
                        { showBtn ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="15" stroke="#928F94" stroke-width="2"/>
                                <line x1="8" y1="16" x2="24" y2="16" stroke="#928F94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="svg-show-passenger">
                                <path d="M14.9444 8.46381L14.9444 14.9449L8.46329 14.9449C7.8604 14.9449 7.40823 15.3971 7.40823 16C7.40823 16.6029 7.8604 17.0551 8.46329 17.0551L14.9444 17.0551L14.9444 23.5362C14.9444 24.1391 15.3966 24.5913 15.9241 24.5159L16.0748 24.5159C16.6777 24.5159 17.1299 24.0637 17.0546 23.5362L17.0546 17.0551L23.385 17.0551C23.9878 17.0551 24.44 16.6029 24.44 16C24.44 15.3971 23.9878 14.9449 23.385 14.9449L17.0546 14.9449L17.0546 8.46381C17.0546 7.86091 16.6024 7.40874 16.0748 7.4841L15.9241 7.4841C15.3212 7.4841 14.8691 7.93628 14.9444 8.46381Z" fill="#FFA800"/>
                                <circle cx="16" cy="16" r="15" stroke="#FFA800" strokeWidth="2"/>
                            </svg>
                        }
                    </button>
                    <h3 className="passengers-block-item-header-title">Пассажир <span>{id}</span></h3>
                    { showBtn ?
                        <button className="btn passengers-block-item-delete">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M10.3 0.3L6 4.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L4.6 6L0.3 10.3C-0.1 10.7 -0.1 11.3 0.3 11.6L0.4 11.7C0.8 12.1 1.4 12.1 1.7 11.7L6 7.4L10.2 11.6C10.6 12 11.2 12 11.6 11.6C12 11.2 12 10.6 11.6 10.2L7.4 6L11.7 1.7C12.1 1.3 12.1 0.7 11.7 0.4L11.6 0.3C11.2 -0.1 10.6 -0.1 10.3 0.3Z" fill="#928F94"/>
                            </svg>
                        </button> : null
                    }
                </div>
                { showBtn ?
                    <div className="passengers-block-item-form">
                        <Select options={options} styles={customStyles} onChange={handleSelect} placeholder={selected.label} className="passengers-block-item-form-select"/>
                        <div className="passengers-block-item-fullname-block">
                            <div className="passengers-block-item-fullname">
                                <label className="passengers-block-item-fullname-label">Фамилия</label>
                                <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)} required className="passengers-block-item-fullname-input"/>
                            </div>
                            <div className="passengers-block-item-fullname">
                                <label className="passengers-block-item-fullname-label">Имя</label>
                                <input type='text' value={name} onChange={(e) => setName(e.target.value)} required className="passengers-block-item-fullname-input"/>
                            </div>
                            <div className="passengers-block-item-fullname">
                                <label className="passengers-block-item-fullname-label">Отчество</label>
                                <input type='text' value={secondName} onChange={(e) => setSecondName(e.target.value)} required className="passengers-block-item-fullname-input"/>
                            </div>
                        </div>
                        <div className="passengers-block-item-info">
                            <div className="passengers-block-item-gender">
                                <label className="passengers-block-item-gender-label">Пол</label>
                                <div className="passengers-block-item-gender-btn-group">
                                    <button className={ gender === 'male' ? "btn passengers-block-item-gender-male passengers-block-item-gender-male-active": "btn passengers-block-item-gender-male" } onClick={() => setGender('male')}>M</button>
                                    <button className={ gender === 'female' ? "btn passengers-block-item-gender-female passengers-block-item-gender-female-active" : "btn passengers-block-item-gender-female"} onClick={() => setGender('female')}>Ж</button>
                                </div>
                            </div>
                            <div className="passengers-block-item-data-birthday">
                                <label className="passengers-block-item-data-birthday-label">Дата рождения</label>
                                <input  value={dataBirthday} type='date' placeholder="ДД/ММ/ГГ" required onChange={(e) => setDataBirthday(e.target.value)} className="passengers-block-item-data-birthday-input"/>
                            </div>
                        </div>
                        <div className="passengers-block-item-no-mobolity">
                            <input type="checkbox" className="passengers-block-item-no-mobolity-input" value={checked} onChange={() => setChecked(!checked)}/>
                            <span className="passengers-block-item-no-mobolity-text">ограниченная подвижность</span>
                        </div>
                        <div className="passengers-block-item-document">
                            <label className="passengers-block-item-document-label">Тип документа</label>
                            { selected.label === 'Взрослый' && 
                                (
                                    <div className="passengers-block-item-passport">
                                        <Select options={typeDocument} styles={passportStyles} onChange={handleChangeDocument} placeholder={'Паспорт РФ'} className="passengers-block-item-passport-select"/>  
                                        <div className="passengers-block-item-passport-info">
                                            <label className="passengers-block-item-passport-label">Серия</label>
                                            <input name='series' value={passport.series} onChange={handlePassport} required placeholder={'_ _ _ _'} className="passengers-block-item-passport-input"/>
                                        </div>
                                        <div className="passengers-block-item-passport-info">
                                            <label className="passengers-block-item-passport-label">Номер</label>
                                            <input type='text' name='number' value={passport.number} onChange={handlePassport} required placeholder={'_ _ _ _ _ _'} className="passengers-block-item-passport-input"/>
                                        </div>
                                    </div>
                                )}
                                
                            { selected.label === 'Детский' && (
                                    <div className="passengers-block-item-certificate">
                                        <Select options={typeDocument} styles={certificateStyles} onChange={handleChangeDocument} placeholder={'Свидетельство о рождении'} className="passengers-block-item-certificate-select"/>
                                        <div className="passengers-block-item-certificate-info">
                                            <label className="passengers-block-item-certificate-label">Номер</label>
                                            <input type='text' value={sertificate} style={{color: validSertificate === false ? 'rgba(255, 61, 0, 0.80)' : '#292929', borderColor: validSertificate === false ? 'rgba(255, 61, 0, 0.80)' : '#928F94'}} onChange={handleSertificate} placeholder={'_ _ _ _ _ _ _ _ _ _ _ _'} className="passengers-block-item-certificate-input"/>
                                        </div>   
                                    </div>
                                )
                            }
                        </div>
                        {
                            (validSertificate === false && valid === false) ? 
                                <div className="passengers-block-item-error">
                                    <button className="btn passengers-block-item-error-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8369 32 32 24.8365 32 16C32 7.16345 24.8369 0 16 0C7.16309 0 0 7.16345 0 16C0 24.8365 7.16309 32 16 32ZM16 14.6L20.2998 10.3C20.5996 9.90002 21.2002 9.90002 21.5996 10.3L21.7002 10.4C22.0996 10.7 22.0996 11.3 21.7002 11.7L17.4004 16L21.5996 20.2C22 20.6 22 21.2 21.5996 21.6C21.3662 21.8337 21.0645 21.9309 20.7744 21.8915C20.5674 21.8634 20.3662 21.7662 20.2002 21.6L16 17.4L11.7002 21.7C11.4004 22.1 10.7998 22.1 10.4004 21.7L10.2998 21.6C9.90039 21.3 9.90039 20.7 10.2998 20.3L14.5996 16L10.2998 11.7C10.0811 11.4811 9.98242 11.2021 10.0029 10.929C10.0205 10.7031 10.1191 10.4811 10.2998 10.3C10.7002 9.90002 11.2998 9.90002 11.7002 10.3L16 14.6Z" fill="white" fillOpacity="0.81"/>
                                        </svg>
                                    </button>
                                    <span className="passengers-block-item-error-text">
                                        Номер свидетельства о рождении указан некорректно <br/> Пример: 
                                        <span className="passengers-block-item-error-text-number"> VIII-ЫП-123456</span> 
                                    </span>
                                </div>
                            : null
                        }
                        <div className={validSertificate === false ? 'invisible': 'passengers-block-item-next'} style={{backgroundColor: valid === true ? '#B2F6A1' : '#FFF'}}>
                            {
                               valid === true ? (
                                <div className="passengers-block-item-next-done">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8369 32 32 24.8365 32 16C32 7.16345 24.8369 0 16 0C7.16309 0 0 7.16345 0 16C0 24.8365 7.16309 32 16 32ZM10.2168 15.8293L10.207 15.8401C9.93262 16.1293 9.93262 16.6112 10.1973 16.9111C10.8311 17.5991 11.4551 18.2819 12.0703 18.9553C12.6914 19.6343 13.3037 20.3038 13.9092 20.9598C13.958 21.0134 14.0361 21.0134 14.085 20.9598L22.8018 11.4272C23.0664 11.1381 23.0664 10.6667 22.8018 10.3776L22.665 10.2169C22.4004 9.92773 21.959 9.92773 21.6953 10.2169L13.9189 18.7213C13.8799 18.7642 13.8311 18.7642 13.791 18.7213C12.9297 17.7681 12.0479 16.7933 11.1768 15.8401C10.9121 15.5509 10.4814 15.5509 10.2168 15.8293Z" fill="#F9FEF7"/>
                                    </svg>
                                    <span className="passengers-block-item-next-done-text">Готово</span>
                                </div>
                               ) : null
                               
                            }
                            <button className="btn passengers-block-item-next-btn" style={{marginLeft: valid === false ? '602px' : '0'}}>Следующий пассажир</button>
                        </div>
                    </div> : null
                }
                
                
            </div>
        </>
    )
}