import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '@utils/index'
import gsap from 'gsap'
import { useEffect, useState } from 'react'

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo)

    const handleVideosSrcSet = () => {
        window.innerWidth < 768 ? setVideoSrc(smallHeroVideo) : setVideoSrc(heroVideo)
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideosSrcSet)

        return () => {
            window.removeEventListener('resize', handleVideosSrcSet)
        }
    }, [videoSrc])

    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 2
        })

        gsap.to('#cta', {
            opacity: 1,
            y: -50,
            delay: 2
        })
    }, [])

    return (
        <section className={`nav-height relative w-full bg-black`}>
            <div className={`flex-center h-5/6 w-full flex-col`}>
                <p className={`hero-title`} id={'hero'}>
                    iPhone 15 Pro
                </p>
                <div className={`md:w-10/12 w-9/12`}>
                    <video className={`pointer-events-none`} autoPlay muted playsInline key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className={`flex translate-y-20 flex-col items-center opacity-0`} id={'cta'}>
                <a className={`btn`} href="#highlights">
                    Buy
                </a>
                <p>From $199/month or $999</p>
            </div>
        </section>
    )
}

export default Hero
