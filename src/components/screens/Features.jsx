import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '@utils/animations'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { exploreVideo } from '@utils'
import { useRef } from 'react'
import { explore1Img, explore2Img } from '@utils'
gsap.registerPlugin(ScrollTrigger)
const Features = () => {
    const videoRef = useRef()
    useGSAP(() => {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom'
            },
            onComplete: () => {
                videoRef.current.play()
            }
        })

        animateWithGsap('#features_title', { y: 0, opacity: 1 })
        animateWithGsap('.g_grow', { scale: 1, opacity: 1, ease: 'power1', duration: 5 }, { scrub: 5.5 })
        animateWithGsap('.g_text', { y: 0, opacity: 1, ease: 'power2.inOut', duration: 5 }, { scrub: 5.5 })
    }, [])

    return (
        <section className={`common-padding relative h-full overflow-hidden bg-zinc`}>
            <div className={`screen-max-width`}>
                <div className={`mb-12 w-full`}>
                    <h3 className={`section-heading`} id={'features_title'}>
                        Explore the full story.
                    </h3>
                </div>
                <div className={`flex flex-col items-center justify-center overflow-hidden`}>
                    <div className={`mb-24 mt-32 pl-24`}>
                        <h4 className={`text-5xl font-semibold lg:text-7xl`}>iPhone.</h4>
                        <h4 className={`text-5xl font-semibold lg:text-7xl`}>Forged in Titanium.</h4>
                    </div>
                    <div className={`flex-center flex-col sm:px-10`}>
                        <div className={`relative flex h-[50vh] w-full items-center`}>
                            <video
                                className={`h-full w-full object-cover object-center`}
                                playsInline={true}
                                id={'exploreVideo'}
                                preload={'none'}
                                muted
                                autoPlay={true}
                                ref={videoRef}
                            >
                                <source src={exploreVideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className={`relative flex w-full flex-col`}>
                            <div className={`feature-video-container`}>
                                <div className={`h-[50vh] flex-1 overflow-hidden`}>
                                    <img className={`feature-video g_grow`} src={explore1Img} alt="titanium" />
                                </div>
                                <div className={`h-[50vh] flex-1 overflow-hidden`}>
                                    <img className={`feature-video g_grow`} src={explore2Img} alt="titanium 2" />
                                </div>
                            </div>
                            <div className={`feature-text-container`}>
                                <div className={`flex-center flex-1`}>
                                    <p className={`feature-text g_text`}>
                                        iPhone 15 Pro is{' '}
                                        <span className={`text-white`}>
                                            the first iPhone to feature an aerospace-grade titanium design
                                        </span>
                                        ,<span>using the same alloy that spacecrafts use for missions to Mars.</span>
                                    </p>
                                </div>
                                <div className={`flex-center flex-1`}>
                                    <p className={`feature-text g_text`}>
                                        Titanium has one of the best strengths-to-weight ratios of any metal, making
                                        these our <span className={`text-white`}>lightest Pro models ever.</span>
                                        <span>You'll notice the difference the moment you pick one up.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
