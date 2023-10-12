import { Header } from "./Header"
import { MainForm } from "./MainForm"
import { StatusBar } from "./StatusBar"
import { TripDetails } from "./TripDetails"
import { Footer } from "./Footer"
import { CheckData } from "./CheckData"

export const CheckDataPage = () => {

    return (
        <>
            <Header/>
            <MainForm/>
            <StatusBar status={4}/>
            <div className="main">
                <TripDetails/>
                <CheckData/>
            </div>
            <Footer/>
        </>
    )
}