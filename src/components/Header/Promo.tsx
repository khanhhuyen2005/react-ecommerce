import CloseIcon from '@mui/icons-material/Close';
const Promo = () => {
    return (
        <>
        <div className="h-[55px] bg-blue-400">
            <div className="flex pt-4 justify-between">
                <div className="basis-1/3 px-10 "><CloseIcon className="text-gray-100"/></div>
                <div className=" text-gray-100 basis-2/3 ">Get 50% discount in all product from June 2024 to December 2024</div>
            </div>
        </div>
        </>
    )
}

export default Promo;