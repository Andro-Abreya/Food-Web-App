import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bowl from '../assets/salad-bowl-removebg.png'
import icon1 from '../assets/growth.png'
import icon2 from '../assets/store.png'
import icon3 from '../assets/takeout-bag.png'
import vector from '../assets/vector2.png'
import HoverButton from '../components/HoverButton'
import DataCard from '../components/DataCard'
import TabGroup from '../components/TabLayout'

function Home() {
    return (
        <div className='mx-10'>
            <div className='sticky top-4 w-full z-10'>
                <Navbar />
            </div>
            <div className='mt-32  '>
                <div className='ml-[90px]'>
                    <div className='flex '>
                        <div className='mt-48 flex-1'>
                            <h1 className="w-full text-7xl font-bold">
                                From Farm to Fork, We <br /> Deliver <span className='text-[#7fb800]'> Pure Goodness</span>
                            </h1>
                            <p className='text-2xl mt-10 whitespace-nowrap text-[#6d6c6c]'>From farm to table we bring to you nature's finest, handpicked for your well-being.<br /> Embrace the taste of wholesome goodness, delivered right to your door.</p>
                        </div>
                        <div className='flex-1 h-72'>
                            <div className='overflow-clip'>
                                <img src={vector} className='absolute h-100 opacity-30 -top-[3rem] -right-[0rem]' alt='vector'></img>
                            </div>
                            <div className='z-30'>
                                <img src={bowl} className='hover:scale-110 h-[36rem] scale-105' alt='hjsc'></img>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <HoverButton buttonText={'Shop Now'} />
                    </div>
                    <div className='mt-20 flex z-30'>
                        <DataCard title={'Organic food from farm'} text={"Nourishing nature's way to your plate"} src={icon1} />
                        <DataCard title={'Restore Fresh Food'} text={'Ensure sustainability and reduce perishability'} src={icon2} />
                        <DataCard title={'Deliver & Satisfy Customer'} text={'Delight customers by consistently delivering high quality organic products'} src={icon3} />
                    </div>
                </div>

                <div className='mt-20'>
                    <div className='flex items-center justify-center'>
                        <h1 className={`text-7xl font-bold text-[#1d4d4f]`}>
                            Know About GoAgro
                        </h1>
                    </div>
                </div>

                <div className='flex items-center justify-center mt-20'>
                    <div className='text-center'>
                        <h1 className={`text-4xl font-bold text-[#1d4d4f]`}>
                            Shop
                        </h1>
                        <div className='mt-8'>
                            <TabGroup />
                        </div>

                    </div>
                </div>

            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home