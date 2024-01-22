import ContactForm from "../Components/ContactForm"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const Contact = () => {
    return (
        <div className="container">
            <Navbar />
            <main className="contactForm">
                <header>
                    <div>
                        <h1>Ini Halaman Kontak</h1>
                    </div>

                </header>
                <ContactForm />
            </main>
            <Footer />
        </div>
    )
}

export default Contact