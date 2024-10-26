import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingBar from './ShoppingBar';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import { useEffect, useState } from 'react';


const categories = [
    { name: "All Categories" },
    { name: "Network Components" },
    { name: "Laptop, Tab & Notebooks" },
    { name: "Consumer electronics" },
    { name: "Gadgets" },
    { name: "Computer & Office" },
    { name: "Mobile Accessories" },
    { name: "Smartphone" },
    { name: "Wearable" },
    { name: "Camera Accessories" },
    { name: "TV & Home Appliance" },
    { name: "Audio" }
]

const Search = ({ carts }: any) => {
    // const [number, setNumber] = useState<string | null>(null);

    // useEffect(() => {
    //     console.log('number: ===', number);
    //     if (!Number(number)) {
    //         alert('number only')
    //     }

    // }, [number])
    // dependency list


    return (

        <div>
            <div className=" md:grid hidden grid-cols-6 container mx-auto mt-4">
                <div className='col-span-1'>
                    <Link to={'/'}>
                        <img className='w-[150px]' src="https://6valley-aster.6amtech.com/storage/app/public/company/2023-06-13-64885c88ce767.png" alt="" />

                    </Link>
                </div>
                <div className='col-span-4'>
                    <form action="" className='border-none ml-[80px]' >
                        <div className='flex'>
                            <div className='grid grid-cols-3 p-[10px] border rounded-l'>
                                <div className='col-span-1 '>
                                {/* <button className='hover:bg-red-300'>All Categories</button>
                                    <div className='absolute grid bg-white mt-[50px] border rounded py-2'>
                                        
                                        
                                        
                                    </div> */}
                                    <select name="" id="" className='w-[300px]'>
                                        {categories.map(item => (
                                            
                                            <div>
                                                
                                                {/* <div className='py-2 px-5 w-[250px] '> */}
                                                {/* <span className=''>
                                                    <a href="/" className='text-sm hover:text-blue-800'>{item.name}</a>
                                                </span> */}
                                                <option className='text-sm hover:text-blue-800' value="">{item.name}</option>
                                                
                                            {/* </div> */}
                                            <hr className='mt-1' />
                                            </div>
                                            
                                        ))}
                                        </select>
                                </div>
                                <div className='col-span-2 mx-3 items-center border-0 outline-none relative'>
                                    <div className=' bg-slate-200 w-[1px] h-full absolute' />
                                    <input className='pl-2 outline-none w-[330px] ' type="text" placeholder="Search for items..." />
                                    {/* <input onChange={(e) => setNumber(e.target.value)} className='pl-2 outline-none w-[330px] ' type="text" placeholder="Search for items..." /> */}
                                </div>
                            </div>

                            <div className='bg-sky-700 rounded-r w-[60px] text-center'>
                                <button className='mt-2' type="button"><SearchIcon className='text-gray-100' /></button>
                            </div>
                            {/* <div><h1>{number}</h1></div> */}
                        </div>
                    </form>
                </div>
                <div className='col-span-1 md:flex hidden'>
                    <img className='w-[180px]' src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-13-648858cebbf16.png" alt="" />
                </div>
            </div>
            <hr></hr>
            <div className='md:flex hidden'>
                <div className='container mx-auto flex justify-between'>
                    <div className='flex'>
                        <div className='bg-blue-700'>
                            <button className='flex  justify-center text-gray-100 p-1 w-[300px] font-semibold'>
                                <div className='mr-2 pt-1'><MenuIcon fontSize={'large'} /></div>
                                <div className='pt-3 text-sm'>Select Category</div>
                                <div className='pt-2 ml-2'><KeyboardArrowDownIcon fontSize={'small'} /></div>
                            </button>
                        </div>
                        <div className='flex'>
                            <NavMenu />
                        </div>
                        {/* npm  */}

                    </div>
                    <ShoppingBar carts={carts} />

                </div>
            </div>


            {/* <ul 
                className={`
                    md:hidden bg-white absolute w-[70%] h-full bottom-0 ml-[250px] py-20 pl-8 border
                    `} 
            >   
                <li className='py-3 ml-6'><a href="/">HOME</a></li>
                <OffersList/>
            </ul> */}
        </div>

    )
}

export default Search