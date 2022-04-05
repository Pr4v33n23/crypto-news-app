import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { News } from '../components/news/News'
import { URL } from '../constants/news'
import { NewsData } from '../types/news'

interface IHomePageProps{
  news: NewsData
}

const Home: NextPage<IHomePageProps> = ({news}) => {
  return (
    <div className="">
      <Head>
        <title>Cryptocate</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Header/>
      <News news={news}/>
      <Footer/>
    </div>
  )
}



export const getServerSideProps: GetServerSideProps = async (context) => {

  const response = await fetch(URL);
  const data = await response.json();
  return {
    props: {
      news: data
    }
  }
}


export default Home
