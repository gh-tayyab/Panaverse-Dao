import React from 'react'
import Logo from '/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '../shared/Wrapper'

const Header = () => {
    return (
        <header className='sticky top-0 backdrop-blur z-10'>
        <Wrapper>
        <div className='flex justify-between py-2  items-center'>
            <div>
                {/* <h2 className='text-xl font-bold'>Panaverse Dao</h2> */}
                <Image src={Logo} alt='Panaverse Dao Logo' width={100} height={100} />
            </div>
            <ul className='flex space-x-8 font-medium'>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/Courses"}>Courses</Link>
                </li>
            </ul>
        </div>
        </Wrapper>
        </header>
    )
}

export default Header