import { Typography, Space } from "antd";
import Link from "next/link";
import styles from "../styles/Footer.module.sass";


const Footer = () => {
    return ( 
        <div className={styles.footer}>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link href="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link href="/">Home</Link>
          <Link href="/exchanges">Exchanges</Link>
          <Link href="/news">News</Link>
        </Space>
      </div>

     );
}
 
export default Footer;