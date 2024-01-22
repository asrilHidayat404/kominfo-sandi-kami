import ContactForm from "../Components/ContactForm"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const Contact = () => {
    return (
        <div className="container">
            <Navbar />
            <main className="contactForm">
                <header>
                    <h1>Kontak</h1>
                </header>
                <ContactForm />
            </main>
            <Footer />
        </div>
    )
}

export default Contact