
import { Button, Menu, Typography, Avatar } from 'antd';
import Link from "next/link"
import Image from 'next/image';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import styles from "../styles/Navbar.module.sass";




const Navbar = () => {

    const [open, setOpen] = useState("")
    const [active, setActive] = useState("")
    
    return (
    <div className={styles.navbar}>

        <div className={styles.navbar__container}>

            <div className={styles.title}>        
                <Typography.Title >
                    <Link href="/">Cryptoverse</Link>
                </Typography.Title>
            
                
                

            </div>
            <div className={styles.menu + " " + active} onClick={ () => {

                if(!active) {
                    setOpen(styles.open)
                    setActive(styles.active)
                } else {
                    setOpen("")
                    setActive("")
                }
            }}> 
                <span className={styles.bar1 + " " + styles.bar}></span>
                <span className={styles.bar2 + " " + styles.bar}></span>
                <span className={styles.bar3 + " " + styles.bar}></span>
            </div>
            <Menu theme="dark">
                <div className={styles.links__container + " " + open}>

                    <div className={styles.links}> 
                        <Menu.Item icon={<HomeOutlined />}>
                            <Link href="/">Home</Link>
                        </Menu.Item>
                    </div>
                    <div className={styles.links}>
                        <Menu.Item icon={<FundOutlined />}>
                            <Link href="/cryptocurrencies">Cryptocurrencies</Link>
                        </Menu.Item>
                    </div>
                    <div className={styles.links}>
                        <Menu.Item icon={<MoneyCollectOutlined />}>
                            <Link href="/exchanges">Exchanges</Link>
                        </Menu.Item>
                    </div>
                    <div className={styles.links}>
                        <Menu.Item icon={<BulbOutlined />}>
                            <Link href="/news">News</Link>
                        </Menu.Item>
                    </div>
                </div>
            </Menu>

        </div>
    </div>
    )
};

export default Navbar;