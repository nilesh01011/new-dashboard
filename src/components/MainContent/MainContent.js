import React, { useEffect, useState } from 'react'

function MainContent({ theme }) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {/* {
                isLoading ? (
                    <MainContentSkelaton theme={theme} />
                ) : (
                )
            } */}
            <div className={`w-full h-full ${theme === 'dark' ? 'text-white' : 'text-black'} px-[40px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15)]`}>
                {/* <TopNav theme={theme} /> */}
                {/* <ContentBody theme={theme} /> */}
                <div className='w-full flex flex-col gap-[15px] pt-[10px]'>
                    {/* top side */}
                    <div className='w-full flex items-center justify-between'>
                        {/* left side */}
                        <div>
                            <h1 className='font-black'>DHRUVA</h1>
                        </div>
                        {/* right side */}
                        <div className='flex gap-[20px] items-center'>
                            <div className='flex gap-[6px] items-center'>
                                {/* user logo */}
                                <span className='w-[30px] h-[30px] rounded-full border-[1px] border-[#B5B5B6] bg-[#B5B5B6] text-black font-bold p-[4px]'>JD</span>
                                {/* user name */}
                                <span className='font-bold'>Welcome, John Doe</span>
                            </div>
                            {/* logout */}
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.6001 2.6001C1.6001 2.04781 2.04781 1.6001 2.6001 1.6001H10.4001C10.9524 1.6001 11.4001 2.04781 11.4001 2.6001V4.08705C11.4001 4.30797 11.221 4.48705 11.0001 4.48705C10.7792 4.48705 10.6001 4.30797 10.6001 4.08705V2.6001C10.6001 2.48964 10.5106 2.4001 10.4001 2.4001H2.6001C2.48964 2.4001 2.4001 2.48964 2.4001 2.6001V13.4001C2.4001 13.5106 2.48964 13.6001 2.6001 13.6001H10.4001C10.5106 13.6001 10.6001 13.5106 10.6001 13.4001V11.9131C10.6001 11.6922 10.7792 11.5131 11.0001 11.5131C11.221 11.5131 11.4001 11.6922 11.4001 11.9131V13.4001C11.4001 13.9524 10.9524 14.4001 10.4001 14.4001H2.6001C2.04781 14.4001 1.6001 13.9524 1.6001 13.4001V2.6001ZM11.5037 5.94594C11.6441 5.77535 11.8962 5.75086 12.0668 5.89122L14.2543 7.69122C14.3466 7.76721 14.4001 7.88052 14.4001 8.0001C14.4001 8.11968 14.3466 8.23299 14.2543 8.30897L12.0668 10.109C11.8962 10.2493 11.6441 10.2248 11.5037 10.0543C11.3634 9.88367 11.3879 9.63159 11.5584 9.49122L12.8845 8.4001H8.0001C7.77918 8.4001 7.6001 8.22101 7.6001 8.0001C7.6001 7.77918 7.77918 7.6001 8.0001 7.6001H12.8845L11.5584 6.50897C11.3879 6.3686 11.3634 6.11653 11.5037 5.94594Z" fill="#FF3E5B" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    {/* bottom side */}
                    <div>
                        <h1 className='pb-[8px] relative w-max flex items-center gap-[10px] font-semibold text-[18px]'>
                            PV Dashboard

                            {/* bottoms line */}
                            <span className='absolute bottom-0 left-0 bg-gradient-to-r from-[#FF3E5B] to-[#FFE1D8] w-full h-[4px] rounded'></span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent