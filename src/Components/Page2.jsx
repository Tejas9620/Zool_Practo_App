import Navbar from "./Page1/Navbar";
import Section8 from "./Page1/Section8";
import Home1 from "./Page2/Home1";
import Home2 from "./Page2/Home2";
import HomeAside1 from "./Page2/HomeAside1";

const Page2 = () => {
    return ( 
        <div className="Page2 ">
            <Navbar/>
            <Home1/>
            <HomeAside1/>
            <Home2/>
            <Section8/>
        </div>
    );
}
 
export default Page2;