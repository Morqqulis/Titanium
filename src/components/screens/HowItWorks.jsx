import { useGSAP } from '@gsap/react'
import { chipImg } from '@utils/'
import gsap from 'gsap'
import { frameImg } from '@utils'
import { frameVideo } from './../../utils/index'
import { useRef } from 'react'
import { animateWithGsap } from '@utils/animations'
const HowItWorks = () => {
    const videoRef = useRef()

    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 4,
            ease: 'power2.inOut'
        })

        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            // stagger: 0.5,
            ease: 'power2.inOut',
            duration: 2
        })
    }, [])
    return (
        <section className={`common-padding`}>
            <div className={`screen-max-width`}>
                <div className={`flex-center my-20 w-full`} id={'chip'}>
                    <img src={chipImg} alt="Chip" width={180} height={180} />
                </div>
                <div className={`flex flex-col items-center text-balance`}>
                    <h4 className={`hiw-title`}>
                        A17 Pro chip. <br />A monster win for gaming.
                    </h4>
                    <p className={`hiw-subtitle`}>It's here. The biggest redesign in the history of Apple GPU's.</p>
                </div>
                <div className={`mx-auto my-10 mb-14 max-w-[1430px] md:mt-20`}>
                    <div className={`flex-center relative h-full overflow-hidden`}>
                        <div className={``}>
                            <img className={`relative z-10 bg-transparent`} src={frameImg} alt="frame" />
                        </div>
                        <div className={`hiw-video`}>
                            <video autoPlay playsInline muted preload={'none'} ref={videoRef}>
                                <source src={frameVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <p className={`mb-10 mt-3 text-center font-semibold text-gray`}>Honkai: Star Rail</p>

                    <div className={`hiw-text-container`}>
                        <div className={`flex flex-1 flex-col justify-center`}>
                            <p className={`hiw-text g_fadeIn`}>
                                A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
                                <span className={`text-white`}>best graphic performance by far</span>.
                            </p>
                            <br />
                            <p className={`hiw-text g_fadeIn`}>
                                Mobile <span className={`text-white`}>games will look and feel so immersive</span>, with
                                incredibly detailed enviroments and characters.
                            </p>
                        </div>
                        <div className={`g_fadeIn flex flex-1 flex-col justify-center`}>
                            <p className={`hiw-text`}>New</p>
                            <p className={`hiw-bigtext`}>Pro-class GPU</p>
                            <p className={`hiw-text`}>with 6 cores</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
