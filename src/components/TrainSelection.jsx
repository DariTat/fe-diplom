import { Header } from "./Header"
import { MainForm } from "./MainForm"
import { StatusBar } from "./StatusBar"
import { SideBar } from "./SideBar";
import { LastTickets } from "./LastTickets";
import { SearchControl } from "./SearchControl";
import { Footer } from "./Footer";
import { TrainCards } from "./TrainCards";
import { TrainsMenu } from "./TrainsMenu";


export const TrainSelection = () => {

    return(
        <>
            <Header/>
            <MainForm/>
            <StatusBar status={1}/>
            <div className="main">
                <div>
                    <SideBar/>
                    <LastTickets/>
                </div>
                <section className="trains">
                    <SearchControl/> 
                    <TrainCards/>
                    <TrainsMenu/>
                </section>
            </div>
            <Footer/>
        </>
    )
}