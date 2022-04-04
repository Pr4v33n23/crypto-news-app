import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
      </Head>
      <Header/>
      <News news={news}/>
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
