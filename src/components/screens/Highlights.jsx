import { useGSAP } from '@gsap/react'
import VideoCarousel from '@ui/VideoCarousel'
import { rightImg, watchImg } from '@utils/index'
import gsap from 'gsap'

const Highlights = () => {
    useGSAP(() => {
        gsap.to('#title', {
            opacity: 1,
            y: 0
        })
        gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
    }, [])

    return (
        <section className={'common-padding h-full w-screen overflow-hidden bg-zinc'} id={'highlights'}>
            <div className={`screen-max-width`}>
                <div className={`md:flex mb-12 w-full items-end justify-between`}>
                    <h1 className="section-heading" id={'title'}>
                        Get the highlights.
                    </h1>

                    <div className={`flex  flex-wrap items-end gap-5`}>
                        <p className={`link`}>
                            Watch the film
                            <img className={`ml-2`} src={watchImg} alt="watch" />
                        </p>
                        <p className={`link`}>
                            Watch the event
                            <img className={`ml-2`} src={rightImg} alt="right" />
                        </p>
                    </div>
                </div>
                <VideoCarousel />
            </div>
        </section>
    )
}

export default Highlights
