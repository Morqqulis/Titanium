import { footerLinks } from '@constants';
const Footer = () => {
    return (
        <footer className={`px-5 py-5 sm:px-10`}>
            <div className={`screen-max-width`}>
                <div className={`text-xs`}>
                    <p className={` font-semibold text-gray`}>More ways to shop: {' '}</p>
                    <a className="underline text-blue" href={'#'}>Find an Apple store {' '}</a>
                    or {' '}
                    <a className="underline text-blue" href={'#'}>other retailer</a>{' '}
                    near you.
                    <a className={` font-semibold block mt-1 text-gray`} href={'#'}>Or call 1-800-MY-APPLE {' '}</a>
                </div>
                <div className={`bg-neutral-700 my-5 h-[1px] w-full`} />
                <div className={`flex md:flex-row flex-col md:items-center justify-between`}>
                    <p className={`text-xs font-semibold text-gray`}>Copyright © 2024 Apple Inc. All rights reserved.</p>
                    <div className={`flex text-xs`}>
                        {footerLinks.map((link,i) => (
                            <a className={` font-semibold text-blue`} href={'#'}  key={link}>{link}{' '}{i !== footerLinks.length - 1 && <span className={`mx-2`}>|</span>}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
