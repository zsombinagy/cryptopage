import { Typography, Space } from "antd";
import Link from "next/link";


const Footer = () => {
    return ( 
            <div className="footer" >
                <Typography.Title level={5} style={{color: "white", textAlign: "center"}}>
                    Cryptoverse <br />
                    All right reserved
                </Typography.Title>
                <Space>
                    <Link href="/exchanges">Exchanges</Link>
                    <Link href="/news">News</Link>

                </Space>
            </div>

     );
}
 
export default Footer;