import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import 'antd/dist/antd.min.css';
import { Typography, Row, Col, Statistic } from "antd";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <div classname={styles.title}>Global Crypto Stats</div>
        <Row>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
          <Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
          <Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
          <Col span={12}><Statistic title="Total 24h Volume" value="5" /></Col>
          <Col span={12}><Statistic title="Total Markets" value="5" /></Col>
        </Row>
    
    </>
  )
}
