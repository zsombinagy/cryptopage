import Navbar from "./Navbar";
import Footer from "./Footer";

export const Layout = ({ children }) => {
    return (
        <>
        <div>
            <Navbar />
                { children }
            
        </div>
        <Footer />
        </>
     );
}
 
export default Layout;