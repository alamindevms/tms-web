import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='bg-gray-100'>
            <div className='container'>
                <div className='flex items-center justify-between py-4'>
                    <Image src={'/images/logo/10mslogo.svg'} alt='10ms Logo' width={100} height={30} className='' />

                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    )
}

export default Header