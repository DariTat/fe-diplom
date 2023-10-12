import { Header } from "./Header";
import { MainForm } from "./MainForm";
import { StatusBar } from "./StatusBar";
import { SeatForm } from "./SeatForm";
import { SideBar } from "./SideBar";
import { LastTickets } from "./LastTickets";
import { Footer } from "./Footer";

export const SeatSelection = () => {
    return (
        <>
            <Header/>
            <MainForm/>
            <StatusBar status={1}/>
            <div className="main">
                <div>
                    <SideBar/>
                    <LastTickets/>
                </div>
                <SeatForm/>
            </div>
            
            <Footer/>
            
        </>
    )
}