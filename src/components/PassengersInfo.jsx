import { Header } from "./Header"
import { MainForm } from "./MainForm"
import { StatusBar } from "./StatusBar"
import { Footer } from "./Footer"
import { TripDetails } from "./TripDetails"
import { PassengersBlock } from "./PassengersBlock"

export const PassengersInfo = () => {

    return (
        <>
            <Header/>
            <MainForm/>
            <StatusBar status={2}/>
            <div className="main">
                <TripDetails/>
                <PassengersBlock/>
            </div>
            
            <Footer/>
        </>
    )
}