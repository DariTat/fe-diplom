import { Header } from "./Header"
import { MainForm } from "./MainForm"
import { StatusBar } from "./StatusBar"
import { TripDetails } from "./TripDetails"
import { Footer } from "./Footer"
import { PaymentInfo } from "./PaymentInfo"

export const PaymentPage = () => {


    return (
        <>
            <Header/>
            <MainForm/>
            <StatusBar status={3}/>
            <div className="main">
                <TripDetails/>
                <PaymentInfo/>
            </div>
            
            <Footer/>
        </>
    )
}