import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NavLinks from './NavLinks';


const Navbar = () => {


    return (
        <div className="container mx-auto pt-1">
            <div className="my-5 bg-white rounded-md flex ">
                <div className="md:block hidden w-[300px] pt-6 mx-5">
                    <NavLinks />
                    <div className='flex justify-center pt-4 text-blue-700'><a href="/">View all</a></div>
                </div>



                <div className='md:flex'>
                    <div className=" w-[100%] my-7 px-1">
                        <div>
                            <a href="/">
                                <img src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-13-648857136ea46.png" className="w-full mb-5 rounded-lg" alt="" />
                            </a>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <a href="/">
                                    <img src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-13-64885a2ebe670.png" className="rounded-lg" alt="" />
                                </a>
                            </div>
                            <div>
                                <a href="/">
                                    <img src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-13-6488579f916fd.png" className="rounded-lg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:block w-[44%] my-7 mx-5 rounded-md p-4 pt-8 bg-gray-100">
                        <div>
                            <h2 className="text-blue-800 font-medium text-xl mb-5">Happy Club</h2>
                            <p className="text-gray-600 text-sm font-light">Collect coupons from stores and apply to get special discount from stores</p>
                        </div>
                        <div className='grid grid-rows-3'>
                            <div className="border border-blue-200 rounded-md row-span-1 px-4 py-3 mt-4 bg-white">
                                <h3>
                                    <span className='font-medium text-base'>Free delivery </span>
                                    <span ><LocalShippingIcon fontSize='small' /></span>
                                </h3>
                                <h6>
                                    <span className='text-xs text-gray-400'>For </span>
                                    <a href="/" className='text-xs font-medium'>TECH SHOP</a>
                                </h6>
                                <h6 className='text-blue-700 text-xs font-medium mt-1'>Code:pcuw655ytg</h6>
                            </div>
                            <div className="border border-blue-200 rounded-md row-span-1 px-4 py-3 mt-4 bg-white">
                                <h3>
                                    3        <span className='font-medium text-base'>$10.00 Off </span>
                                    <span ><MonetizationOnIcon fontSize='small' className='mb-1' /></span>
                                </h3>
                                <h6>
                                    <span className='text-xs text-gray-400'>For </span>
                                    <a href="/" className='text-xs font-medium'>ALL SHOPS</a>
                                </h6>
                                <h6 className='text-blue-700 text-xs font-medium mt-1'>Code:856gmef66p</h6>
                            </div>
                            <div className="border border-blue-200 rounded-md row-span-1 px-4 py-3 mt-4 bg-white">
                                <h3>
                                    <span className='font-medium text-base'>75% Off </span>
                                    <span  ><MonetizationOnIcon fontSize='small' className='mb-1' /></span>
                                </h3>
                                <h6>
                                    <span className='text-xs text-gray-400'>For </span>
                                    <a href="/" className='text-xs font-medium'>TECH SHOP</a>
                                </h6>
                                <h6 className='text-blue-700 text-xs font-medium mt-1'>Code:rFhfx7XiCm</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;