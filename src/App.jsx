import Footer from '@layout/Footer'
import Header from '@layout/Header'
import Features from '@screens/Features'
import Hero from '@screens/Hero'
import Highlights from '@screens/Highlights'
import Model from '@screens/Model'
import * as Sentry from '@sentry/react'
import HowItWorks from '@screens/HowItWorks'
function App() {
    return (
        <div className={`wrapper`}>
            <Header />
            <main>
                <Hero />
                <Highlights />
                <Model />
                <Features />
                <HowItWorks />
            </main>
            <Footer />
        </div>
    )
}

export default Sentry.withProfiler(App)
