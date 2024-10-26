import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import React from "react";


const Topnav = () => {



    const coins = [
        {name:"USD $", value:1},
        {name:"BDT", value:2},
        {name:"Indian Rupi", value:3},
        {name:"Euro", value:4},
        {name:"YEN", value:5},
        {name:"Ringgit", value:6},
        {name:"Rand", value:7},
        {name:"Quatar", value:8}
    ];

    const languages = [
        {name:"English"},
        {name:"Arabic"},
        {name:"Bangla"},
        {name:"Hindi"}
    ]

    return (
        <div className=" h-[40px] bg-gray-100">
            <div className="flex justify-between container mx-auto">

            <div className="flex space-x-1 items-center mt-2">
                <div className="flex items-center">
                   <LocalPhoneIcon className="text-blue-600 mb-3 mr-1" fontSize={'small'}/>
                   <p>+8801xxxxxxxxx</p>
                </div>
                
            </div>
            <div className="flex space-x-4">
                <div className='mt-2'>
                    <div>
                        <select className="bg-gray-100" id="">
                            {coins.map(coin => (
                                <option value = {coin.value}>{coin.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='mt-2'>
                    <div>
                        <select className="bg-gray-100" id="">
                            {languages.map(language => (
                                <option >{language.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='mt-2 md:flex hidden'>
                    <a href="/">Become A Vendor</a>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Topnav;