import React from 'react'
import img from '../assets/humo.svg'
import img2 from '../assets/78.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center mt-10 max-w-[1312px] mx-auto mb-9'>
            <div className='flex flex-col gap-2 items-center w-[214px]'>
                <img src={img} width={96} alt="humo qushi rasmi" />
                <p className='text-center font-bold text-[16px]'>
                    Давлат хизматининг ягона электрон ахборот-таҳлил тизими
                </p>
            </div>
            <h1 className='text-3xl font-bold text-center'>Республика Ассессмент маркази <br /> онлайн платформаси</h1>
            <img src={img2} height={86} alt="" />
        </div>
    )
}

export default Header
