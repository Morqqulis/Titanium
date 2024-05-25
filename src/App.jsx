import Footer from '@layout/Footer.jsx'
import Header from '@layout/Header.jsx'
import Hero from '@screens/Hero'
import Highlights from '@screens/Highlights'
import Model from '@screens/Model'
import * as Sentry from '@sentry/react'
function App() {
    return <button onClick={() => methodDoesNotExist()}>Break the world</button>

    return (
        <div className={`wrapper`}>
            <Header />
            <main>
                <Hero />
                <Highlights />
                <Model />
            </main>
            <Footer />
        </div>
    )
}

export default Sentry.withProfiler(App)
