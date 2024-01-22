import Character from "../Components/Character"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Partners from "../Components/Partners"
import Reason from "../Components/Reason"
import "../Css/App.css"
const Beranda = () => {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <Partners />
            <Reason />
            <Character />
            <Contact />
            <Footer />
        </div>
    )
}

export default Beranda