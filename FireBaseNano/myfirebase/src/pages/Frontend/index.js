import React from "react";
import { Routes, Route } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function Index() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<>No Page Found</>} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Index;
