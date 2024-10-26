import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const NavMenu = () => {
    const menus = [
        {
            name: "HOME", link: "/"
        },

        {
            name: "OFFERS", link: "/", icon: <ExpandMoreIcon fontSize='small' />, submenu1: true, menulinks: [
                { name: "Flash Deal", link: "/" },
                { name: "Discounted Products", link: "/" },
            ]
        },

        {
            name: "STORES", link: "/", icon: <ExpandMoreIcon fontSize='small' />, submenu2: true, menulinks: [

                { name: "6Valley", link: "/", img: "https://6valley-aster.6amtech.com/storage/app/public/company/2023-06-13-64885c88d834a.png" },
                { name: "Tech Shop", link: "/", img: "https://6valley-aster.6amtech.com/storage/app/public/shop/2023-06-07-648061e8288a9.png" },
                { name: "Digital Spot", link: "/", img: "https://6valley-aster.6amtech.com/storage/app/public/shop/2023-06-07-648067cc5f681.png" },
                { name: "Bazaar", link: "/", img: "https://6valley-aster.6amtech.com/storage/app/public/shop/2023-06-07-64806635246a7.png" },
                { name: "Click & Collec...", link: "/", img: "https://6valley-aster.6amtech.com/storage/app/public/shop/2023-06-07-648064ca1b9e7.png" },
                { name: "Deluxe Online", link: "/", img: "https://6valley-aster.6amtech.com/storage/app/public/shop/2022-04-21-6260f790349f7.png" },
                { name: "Easy Electroni...", link: "/", img: "https://6valley-aster.6amtech.com/storage/app/public/shop/2023-06-07-64806867dc26a.png" },
                { name: "Electronic Agi...", link: "/", img: "https://6valley-aster.6amtech.com/storage/app/public/shop/2023-06-07-6480674b29bd7.png" },
                { name: "B.Store", link: "/", img: "https://6valley-aster.6amtech.com/storage/app/public/shop/2023-06-07-6480659ff084d.png" },
                { name: "Online Shop", link: "/", img: "https://6valley-aster.6amtech.com/storage/app/public/shop/2023-06-07-648064019e055.png" },


            ]
        },

        {
            name: "BRANDS", link: "/", icon: <ExpandMoreIcon fontSize='small' />, submenu3: true, menulinks: [
                { name: "Digital Product", link: "/",img:"https://6valley-aster.6amtech.com/storage/app/public/brand/2023-06-12-6488102f5394f.png" },
                { name: "Connection", link: "/",img:"https://6valley-aster.6amtech.com/storage/app/public/brand/2023-06-10-6484231190b45.png" },
                { name: "B.Technology", link: "/",img:"https://6valley-aster.6amtech.com/storage/app/public/brand/2023-06-10-648422c0bed66.png" },
                { name: "Tech Light", link: "/",img:"https://6valley-aster.6amtech.com/storage/app/public/brand/2023-06-10-64842280cd7f1.png" },
                { name: "Digital Technology", link: "/",img:"https://6valley-aster.6amtech.com/storage/app/public/brand/2023-06-10-648422259c9ff.png" },
                { name: "Electron Pro", link: "/",img:"https://6valley-aster.6amtech.com/storage/app/public/brand/2023-06-10-64842138cb31e.png" },
                { name: "Digi Tech", link: "/",img:"https://6valley-aster.6amtech.com/storage/app/public/brand/2023-06-10-648420d321935.png" },
                { name: "E-Tech", link: "/",img:"https://6valley-aster.6amtech.com/storage/app/public/brand/2023-06-10-64841fea858f2.png" },
                { name: "Electronics", link: "/",img:"https://6valley-aster.6amtech.com/storage/app/public/brand/2023-06-10-64841f97e7c6f.png" },
                { name: "Techno Lab", link: "/",img:"https://6valley-aster.6amtech.com/storage/app/public/brand/2023-06-09-64841f5f705b2.png" },
                { name: "Infinity", link: "/",img:"https://6valley-aster.6amtech.com/storage/app/public/brand/2023-06-09-64841f02eaee6.png" },
            ]
        },

        {
            name: "PUBLICATION HOUSE", link: "/"
        },
    ]



    return (
        <>
            {
                menus.map(menu => (
                    <div >
                        <div className="ml-5 m-2 group">
                            <div className=" hover:text-blue-800 hover:cursor-pointer p-2 font-normal text-sm">
                                <span className="">
                                    <a href={menu.link}>{menu.name}</a>
                                    {menu.icon}
                                </span>
                            </div>
                            {menu.submenu1 && (
                                <div className="absolute hidden group-hover:block">
                                    <div className="bg-white p-3 w-[220px] shadow-inner rounded">
                                        {
                                            menu.menulinks.map((menuItem) => (
                                                <div>
                                                    <span>
                                                        <a href={menuItem.link} className="text-sm text-gray-900 font-light">{menuItem.name}</a>
                                                    </span>
                                                </div>
                                                
                                            ))
                                        }
                                    </div>
                                </div>
                            )}
                            {menu.submenu2 && (
                                <div className="hidden group-hover:block">
                                    <div className="absolute  left-[620px] rounded-md bg-white shadow-inner p-5 grid grid-cols-3 w-[730px]">
                                        <div className="col-span-2">
                                            <div className="grid grid-cols-2">
                                                {
                                                    menu.menulinks.map((menuItem) => (
                                                        <div className="p-2 mt-2 mr-8 ">
                                                            <span className="md:cursor-pointer">
                                                                <a href={menuItem.link} className="flex items-center text-sm text-gray-800 font-light"><img src={menuItem.img} alt="" className="w-[50px] pr-2" /> {menuItem.name}</a>
                                                                <hr className="mt-3" />
                                                            </span>

                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div>
                                                <a href="/" className="text-blue-800 p-4 text-sm">View All...</a>
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <img src="https://6valley-aster.6amtech.com/resources/themes/theme_aster/public/assets/img/media/super-market.png" alt="" />
                                        </div>

                                    </div>


                                </div>
                            )}
                            {menu.submenu3 && (
                                <div className="hidden group-hover:block">
                                    <div className="absolute  left-[620px] rounded-md bg-white shadow-inner p-5  w-[450px]">
                                        <div className="">
                                            <div className="grid grid-cols-2">
                                                {
                                                    menu.menulinks.map((menuItem) => (
                                                        <div className="p-1 mt-1 mr-8 ">
                                                            <span className="md:cursor-pointer">
                                                                <a href={menuItem.link} className="flex items-center text-sm text-gray-800 font-light"><img src={menuItem.img} alt="" className="w-[35px] pr-2" /> {menuItem.name}</a>
                                                                <hr className="mt-1" />
                                                            </span>

                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div>
                                                <a href="/" className="text-blue-800 p-4 text-sm">View All...</a>
                                            </div>
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


export default NavMenu;