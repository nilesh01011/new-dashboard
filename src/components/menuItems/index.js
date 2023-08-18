import React, { useState } from 'react'
import { BsChevronDown, BsFillCaretLeftFill } from 'react-icons/bs';

function Index({ items, isOpen }) {
    const theme = "light";
    const [miniTabsOpen, setMiniTabsOpen] = useState(true);
    // URL router paths
    const pathname = window.location.pathname;
    const suggestPathname = '/suggest-order-qty' || '/admin/customer';

    const [submenu_4, setSubmenu_4] = useState(true);

    const [innerTabsActive, setInnerTabsActive] = useState(0);

    const [partsTabs, setPartsTabs] = useState(0);

    const goToSuggestPage = () => {
        // router('/suggest-order-qty')
    }

    return (
        <div
            className='my-[1rem]'
        // style={{ padding: collapsed === false ? '0 24px' : '0 22px', }}
        >
            <button type='button' className={`flex flex-col ${isOpen ? 'justify-center group' : 'justify-between'} relative items-center w-full mb-[4px]`}>
                <div
                    onClick={() => setSubmenu_4(!submenu_4)}
                    className={`flex items-center px-[14px] h-[40px] ${isOpen ? 'justify-center' : 'justify-between'} w-full ${submenu_4 === true && 'bg-[#F2F2F2]'}`}>
                    <div className={`h-[32px] flex items-center gap-[8px] relative after:content-[''] after:absolute ${isOpen === false ? 'after:-left-[14px]' : 'after:-left-[22px]'} after:top-0 after:bottom-0 after:w-[6px] after:h-full after:block after:z-40 after:bg-[#FF3E5B]`}>
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6453 5.22805L9.44855 0.993922C8.64617 0.336639 7.34886 0.336639 6.55398 0.986279L1.35727 5.22805C0.772355 5.7019 0.397412 6.70311 0.524892 7.45211L1.52224 13.5358C1.70221 14.6211 2.72206 15.5 3.8019 15.5H12.2006C13.273 15.5 14.3003 14.6134 14.4803 13.5358L15.4776 7.45211C15.5976 6.70311 15.2227 5.7019 14.6453 5.22805ZM8.00126 10.6774C6.96642 10.6774 6.12655 9.82138 6.12655 8.76667C6.12655 7.71196 6.96642 6.85597 8.00126 6.85597C9.03611 6.85597 9.87598 7.71196 9.87598 8.76667C9.87598 9.82138 9.03611 10.6774 8.00126 10.6774Z" fill="#FF3E5B"></path></svg>
                        </span>
                        <span className={`capitalize ${isOpen ? 'hidden' : ''} lg:text-[16px] text-[14px] 
                        ${submenu_4 === true && 'text-[#FF3E5B]'}`}>Home</span>

                        {/* left side arrow */}
                        {/* <span className='absolute left-0 top-0 bottom-0 w-[6px] h-full block z-40 bg-[#FF3E5B]'></span> */}
                    </div>

                    {/* <span className='absolute left-0 top-0 bottom-0 w-[6px] h-full block z-40 bg-[#FF3E5B]'></span> */}
                    {/* {
                        pathname === suggestPathname ? (
                            !isOpen && (
                                <BsChevronDown size={18} className={`text-[#FF3E5B] ${submenu_4 === true && ('rotate-180 transition-all')} transition-all`} />
                            )
                        ) : (
                            !isOpen && (
                                <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${submenu_4 === true && ('rotate-180 transition-all')} transition-all`} />
                            )
                        )
                    } */}
                    {
                        isOpen === false &&
                        <BsChevronDown size={18} className={` ${submenu_4 === true && ('rotate-180 transition-all text-[#FF3E5B]')} transition-all`} />
                    }

                </div>

                {/* show tooltips */}
                <div className={`group-hover:block hidden rounded-[5px] absolute top-0 left-[56px] w-[200px] p-[5px] h-max z-[99999] border-[1px] ${theme === "dark" ? 'bg-[#242424] border-[#545454]' : 'bg-[#ffffff] border-[#E6E6E6]'}`}>
                    {/* right arrow */}
                    <span className='absolute -left-[12px] top-[8px]'>
                        <BsFillCaretLeftFill size={18} className={`${theme === "dark" ? 'text-[#545454]' : 'text-[#ffffff]'}`} />
                    </span>
                    {/* list */}
                    <ul className='w-full flex flex-col gap-1'>
                        <li className={`w-auto whitespace-nowrap h-[22px] ${miniTabsOpen === true ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white' : 'text-[#342C2C] hover:bg-[#fff]'}`} text-left pl-[16px] pr-[10px] rounded text-[12px]`}>
                            <div onClick={() => { setMiniTabsOpen(!miniTabsOpen) }} className='w-full flex justify-between items-center'>
                                <span style={{ color: miniTabsOpen === true && '#FF3E5B' }}>Part Ordering</span>
                                <BsChevronDown size={18} className={`${miniTabsOpen === true && 'text-[#FF3E5B]'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} />
                            </div>
                        </li>
                        {
                            miniTabsOpen === true &&
                            <ul className='w-full flex flex-col gap-1 bg-[#f2f2f2] p-[3px]'>
                                <li onClick={() => { setInnerTabsActive(1); goToSuggestPage() }} className={`w-auto whitespace-nowrap pl-[26px] ${pathname === suggestPathname && `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}`} ${innerTabsActive === 1 ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#fff]'}`} text-left rounded py-[5px] text-[12px]`}>
                                    <span className={`text-[#FF3E5B]`}>Delight To Win</span>
                                </li>
                                <li onClick={() => setInnerTabsActive(2)} className={`w-auto whitespace-nowrap pl-[26px] ${innerTabsActive === 2 ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#fff]'}`} text-left rounded py-[5px] text-[12px]`}>Sales</li>
                                <li onClick={() => setInnerTabsActive(3)} className={`w-auto whitespace-nowrap pl-[26px] ${innerTabsActive === 3 ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#fff]'}`} text-left rounded py-[5px] text-[12px]`}>Manufacturing</li>
                            </ul>
                        }

                    </ul>
                </div>

                {/* submenu */}
                <div className='w-full'>
                    {
                        submenu_4 && !isOpen &&
                        <ul className='w-full flex flex-col'>
                            <li className={`w-auto whitespace-nowrap h-[40px] ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white' : 'text-[#342C2C] '}`} flex items-center text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                <div onClick={() => { setMiniTabsOpen(!miniTabsOpen) }} className='w-full flex justify-between items-center'>
                                    <span style={{ color: miniTabsOpen === true && '#FF3E5B' }}>PV Dashboard</span>
                                    <BsChevronDown size={18} style={{ color: miniTabsOpen === true && '#FF3E5B' }} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} />
                                </div>
                            </li>
                            {
                                miniTabsOpen === true &&
                                <ul className='w-full pl-[21px] flex flex-col gap-1 bg-[#f2f2f2]'>
                                    <li onClick={() => { setInnerTabsActive(1); goToSuggestPage() }}
                                        className={`w-auto whitespace-nowrap ${pathname === suggestPathname && `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}`} ${innerTabsActive === 1 ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C]'}`} text-left pl-[20px] rounded py-[5px] text-[12px]`}>
                                        <span
                                        // className={`${miniTabsOpen === true && 'text-[#FF3E5B]'}`}
                                        >Delight to Win</span>
                                    </li>
                                    <li onClick={() => setInnerTabsActive(2)} className={`w-auto whitespace-nowrap ${innerTabsActive === 2 ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C]'}`} text-left pl-[20px] rounded py-[5px] text-[12px]`}>Sales</li>
                                    <li onClick={() => setInnerTabsActive(3)} className={`w-auto whitespace-nowrap ${innerTabsActive === 3 ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C]'}`} text-left pl-[20px] rounded py-[5px] text-[12px]`}>Manufacturing</li>
                                </ul>
                            }
                        </ul>
                    }

                </div>
            </button>
        </div>
    )
}

export default Index