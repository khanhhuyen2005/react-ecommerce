import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const NavLinks = () => {

    const links = [
        {
            name: "Network Components", link: "/", icon: <KeyboardArrowRightIcon fontSize='small' />, submenu: true, sublinks: [
                { name: "Internet Cable", link: "/" },
                { name: "Router", link: "/" }
            ]
        },

        {
            name: "Laptop, Tabs & Notebooks", link: "/", icon: <KeyboardArrowRightIcon fontSize='small' />, submenu: true, sublinks: [
                { name: "Gamming Laptop", link: "/" },
            ]
        },

        {
            name: "Consumer electronics", link: "/", icon: <KeyboardArrowRightIcon fontSize='small' />, submenu: true, sublinks: [
                { name: "Harh disk", link: "/" },
                {
                    name: "Laptop cooler",
                    link: "/",
                    icon: <KeyboardArrowRightIcon fontSize='small' />,
                    submenus: true,
                    sublink: [
                        { name: "Double Fan", link: "/" }
                    ]
                },
                { name: "Computer Ram", link: "/" },
            ]
        },

        { name: "Gadgets", link: "/" },

        {
            name: "Computer & Office", link: "/", icon: <KeyboardArrowRightIcon fontSize='small' />, submenu: true, sublinks: [
                { name: "Digital Files", link: "/" },
                { name: "Router", link: "/" },
                { name: "Power supply unit", link: "/" },
                { name: "Printer", link: "/" },
                {
                    name: "Keyboard & Mouse",
                    link: "/",
                    icon: <KeyboardArrowRightIcon fontSize='small' />,
                    submenus: true,
                    sublink: [
                        { name: "Wireless", link: "/" },
                        { name: "Mechanical", link: "/" }
                    ]
                },
                { name: "SSD", link: "/" },
                { name: "Webcam", link: "/" }
            ]
        },

        {
            name: "Mobile Accessories", link: "/", icon: <KeyboardArrowRightIcon fontSize='small' />, submenu: true, sublinks: [
                { name: "Charger", link: "/" },
                { name: "Phone Case", link: "/" },
                { name: "Cable & Converters", link: "/" }
            ]
        },

        { name: "Smartphone", link: "/" },

        {
            name: "Wearable", link: "/", icon: <KeyboardArrowRightIcon fontSize='small' />, submenu: true, sublinks: [
                { name: "Internet Cable", link: "/" },
                { name: "Router", link: "/" },
                {
                    name: "Man Watch",
                    link: "/",
                    icon: <KeyboardArrowRightIcon fontSize='small' />,
                    submenus: true,
                    sublink: [
                        { name: "Digital Watches", link: "/" },
                        { name: "Smart Watch", link: "/" }
                    ]
                },
                { name: "Classic", link: "/" }
            ]
        },

        { name: "Camera Accessories", link: "/" },

        {
            name: "TV & Home Appliance", link: "/", icon: <KeyboardArrowRightIcon fontSize='small' />, submenu: true, sublinks: [
                { name: "Television", link: "/" },
                {
                    name: "Refrigeration",
                    link: "/",
                    icon: <KeyboardArrowRightIcon fontSize='small' />,
                    submenus: true,
                    sublink: [
                        { name: "Top Freezer Refrigeration", link: "/" },
                    ]
                },
                { name: "Microwaves", link: "/" },
                {
                    name: "Air Conditioner",
                    link: "/",
                    icon: <KeyboardArrowRightIcon fontSize='small' />,
                    submenus: true,
                    sublink: [
                        { name: "Central Air Conditioner", link: "/" },
                        { name: "Portable Air Conditioner", link: "/" },
                        { name: "Geothermal Air Conditioner", link: "/" },
                    ]
                },
            ]
        },

        {
            name: "Audio", link: "/", icon: <KeyboardArrowRightIcon fontSize='small' />, submenu: true, sublinks: [
                { name: "Headphones", link: "/" },
                { name: "Bluetooth Speaker", link: "/" },
                { name: "Wireless Earbuds", link: "/" },
                { name: "Microphones", link: "/" }
            ]
        },
    ]


    return (
        <>
            {
                links.map(link => (
                    <div >
                        <div className='group'>
                            <span className='w-[270px] p-[10px] border-b flex justify-between items-center '>
                                <a href={link.link} className='text-sm hover:text-blue-800'>
                                    {link.name}
                                </a>
                                {link.icon}
                            </span>
                            {link.submenu && (
                                <div>
                                    <div className='absolute hidden group-hover:block left-[405px] bg-white rounded-md w-[230px] shadow-2xl mt-[-41px]'>
                                        <div>
                                            {
                                                link.sublinks.map((mysublinks) => (
                                                    <div >
                                                        <div className='group'>
                                                            <span className='py-[10px] px-4 border-b flex justify-between'>
                                                                <a href={mysublinks.link} className='text-sm hover:text-blue-800'>
                                                                    {mysublinks.name}
                                                                </a>
                                                                {mysublinks.icon}
                                                            </span>
                                                            {
                                                                mysublinks.submenus && (
                                                                    <div>
                                                                        <div className='absolute hidden group-hover:block  left-[230px] bg-white rounded w-[230px] shadow-2xl mt-[-40.5px]'>
                                                                            <div>
                                                                                {
                                                                                    mysublinks.sublink.map((slink) => (
                                                                                        <div>
                                                                                            <div className='class py-2 px-4 border-b'>
                                                                                                <span className=''>
                                                                                                    <a href={slink.link} className='text-sm hover:text-blue-800'>
                                                                                                        {slink.name}
                                                                                                    </a>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    ))
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                ))
            }
        </>
    )
}

export default NavLinks