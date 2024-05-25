import { useGSAP } from '@gsap/react'
import { yellowImg } from '@utils/index'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import ModelView from '../ui/ModelView'
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { models, sizes } from './../../constants/index'
import { animateWithGsapTimeline } from '../../utils/animations'
const Model = () => {
    const [size, setSize] = useState('small')
    const [model, setModel] = useState({
        title: 'iPhone 15 Pro in Natural Titanium',
        color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
        img: yellowImg
    })

    const cameraControlSmall = useRef()
    const cameraControlLarge = useRef()

    // model
    const small = useRef(new THREE.Group())
    const large = useRef(new THREE.Group())

    // rotation
    const [smallRotation, setSmallRotation] = useState(0)
    const [largeRotation, setLargeRotation] = useState(0)

    const tl = gsap.timeline()

    useEffect(() => {
        switch (size) {
            case 'large':
                animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
                    transform: 'translateX(-100%)',
                    duration: 2
                })
                break
            case 'small':
                animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
                    transform: 'translateX(0)',
                    duration: 2
                })
                break
            default:
                break
        }
        // if (size === 'small') {
        // }

        // if (size === 'large') {
        // }
    }, [size])

    useGSAP(() => {
        gsap.to('#heading', {
            opacity: 1,
            y: 0
        })
    })
    return (
        <section className={`common-padding`}>
            <div className={`screen-max-width`}>
                <h2 className={`section-heading`} id={'heading'}>
                    Take a closer look.
                </h2>

                <div className={`mt-5 flex flex-col items-center`}>
                    <div className={`relative h-[75vh] w-full overflow-hidden md:h-[90vh]`}>
                        <ModelView
                            index={1}
                            groupRef={small}
                            gsapType={'view1'}
                            controlRef={cameraControlSmall}
                            setRotationState={setSmallRotation}
                            item={model}
                            size={size}
                        />
                        <ModelView
                            index={2}
                            groupRef={large}
                            gsapType={'view2'}
                            controlRef={cameraControlLarge}
                            setRotationState={setLargeRotation}
                            item={model}
                            size={size}
                        />

                        <Canvas
                            className={`h-full
                            w-full`}
                            style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}
                            eventSource={document.getElementById('root')}
                        >
                            <View.Port />
                        </Canvas>
                    </div>
                    <div className={`mx-auto w-full`}>
                        <p className={`mb-5 text-center text-sm font-light`}>{model.title}</p>
                        <div className={`flex-center`}>
                            <ul className={`color-container`}>
                                {models.map((model, i) => (
                                    <li
                                        className={`mx-2 h-6 w-6 cursor-pointer rounded-full`}
                                        style={{ backgroundColor: model.color[0] }}
                                        key={i}
                                        onClick={() => setModel(model)}
                                    />
                                ))}
                            </ul>
                            <button className={`size-btn-container`}>
                                {sizes.map(({ label, value }) => (
                                    <span
                                        className={`size-btn`}
                                        onClick={() => setSize(value)}
                                        style={{
                                            backgroundColor: size === value ? 'white' : 'transparent',
                                            color: size === value ? 'black' : 'white'
                                        }}
                                        key={label}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Model
