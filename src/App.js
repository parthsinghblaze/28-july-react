import CourseSection from "./componentasJSX/CourseSection"
import Footer from "./componentasJSX/Footer"
import Header from "./componentasJSX/Header"
import Slider from "./componentasJSX/Slider"
import "./style.css"
function App() {
    return (
        <div>
            <Header />
            <Slider />
            <CourseSection />
            <Footer />
        </div>
    )
}

export default App