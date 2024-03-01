import React from 'react'

const DataCard = ({ title, text, src }) => {

    // let fontColor = "#151414"
    // let fontColor2 = "#6d6c6c"
    // let themeColor1 = "#1d4d4f"
    // let themeColor2 = "#7fb800"

    return (
        <div className='h-[6rem] cursor-pointer max-w-[360px] mr-8  hover:bg-slate-100 hover:scale-110 hover:rounded-md'>
            <div className='flex items-center justify-center w-fit h-full pl-4 pr-4 pt-2 pb-2 border-2 rounded-[8px] border-slate-400'>
                <img src={src} className='w-[3rem]' alt=''></img>
                <div className='ms-4'>
                    <h1 className={`text-medium font-bold text-[#1d4d4f]`}>
                        {title}
                    </h1>
                    <p1 className={`text-xs text-[#6d6c6c]`}>
                        {text}
                    </p1>
                </div>
            </div>
        </div>
    )
}

export default DataCard