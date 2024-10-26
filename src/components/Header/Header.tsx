import Search from "./Search";
import Topnav from "./Topnav";



const Header = ({carts}: any) => {
    return <>
        <Topnav />
        
        <Search carts={carts}/>
        {/* <div className="bg-green-400 h-[90px]">search</div> */}
    </>
}

export default Header;