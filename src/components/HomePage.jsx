import { Header } from './Header';
import { About } from './About';
import { HowWorks } from './HowWorks';
import { Reviews } from './Reviews';
import { Footer } from './Footer';
import { FormOrder } from './FormOrder';


export const HomePage = () => {

    return(
        <>
            <Header/>
            <FormOrder/>
            <About/>
            <HowWorks/>
            <Reviews/>
            <Footer/>
        </>
    )
}