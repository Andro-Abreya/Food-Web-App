import { React, useState, useEffect } from 'react'
import logo from '../assets/logo2.png'
import { MagnifyingGlassIcon, ShoppingCartIcon, HeartIcon, Bars3Icon } from '@heroicons/react/24/outline'
import HoverButton from './HoverButton'

function Navbar() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
            setShow(false);
        } else { // if scroll up show the navbar
            setShow(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    let fontColor = '#0023456'
    // let fontColor2 = '#6d6c6c'
    // let backgroundColor = '#1d4d4f';

    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div>
            {show ? (
            <nav>
                <div style={{ width: '100%' }} className='align-middle justify-center items-center flex pl-10 pr-10 pt-3 pb-3 w-full h-30'>
                    <div>
                        <img src={logo} alt=' ' className='h-14' />
                    </div>
                    <div className='flex-1 block' >

                        <ul className={` flex justify-center align-middle items-center font-semibold text-[${fontColor}]`}>
                            <li className={`mr-12 cursor-pointer text-lg border-b-4 transition-all ease-in ${activeTab === 1 ? 'border-[#1d4d4f]' : 'border-transparent'}`} onClick={() => handleTabClick(1)}>
                                Home
                            </li>
                            <li className={`mr-12 cursor-pointer text-lg border-b-4 transition-all ease-in ${activeTab === 2 ? 'border-[#1d4d4f]' : 'border-transparent'}`} onClick={() => handleTabClick(2)}>
                                About
                            </li>
                            <li className={`mr-12 cursor-pointer text-lg border-b-4 transition-all ease-in ${activeTab === 3 ? 'border-[#1d4d4f]' : 'border-transparent'}`} onClick={() => handleTabClick(3)}>
                                Fresh food
                            </li>
                            <li className={`mr-12 cursor-pointer text-lg border-b-4 transition-all ease-in ${activeTab === 4 ? 'border-[#1d4d4f]' : 'border-transparent'}`} onClick={() => handleTabClick(4)}>
                                Services
                            </li>
                            <li className={`mr-12 cursor-pointer text-lg'mr-12 text-lg' border-b-4 transition-all ease-in ${activeTab === 5 ? 'border-[#1d4d4f]' : 'border-transparent'}`} onClick={() => handleTabClick(5)}
                            >
                                Shop
                            </li>
                            <li className={`mr-12 cursor-pointer text-lg border-b-4 transition-all ease-in ${activeTab === 6 ? 'border-[#1d4d4f]' : 'border-transparent'}`} onClick={() => handleTabClick(6)}>
                                Contacts
                            </li>
                        </ul>
                    </div>
                    <div className='flex'>
                        <MagnifyingGlassIcon color='white' className='w-10 h-10  mr-12 rounded-full  p-1 bg-[#1d4d4f]' />
                        <HoverButton buttonText={'Login'} />
                        <HeartIcon className='w-8 h-8 ml-12' />
                        <ShoppingCartIcon className='w-8 h-8 ml-2' />
                    </div>

                </div>
            </nav>
            ) : (
                <div>
                    <Bars3Icon className='m-10 h-14 w-14' />
                </div>)}
        </div>
    )
}

export default Navbar