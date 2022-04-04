import React from 'react'
import { NewsData, Result } from '../../types/news'
import { NewsItem } from './NewsItem'

interface INewsProps{
    news: NewsData
}



export const News: React.FC<INewsProps> = ({news}) => {
  return (
    <div className='border-2 border-teal-500 max-w-7xl mx-auto mt-5 p-5 space-y-6'>
      {news.results.map((newsItem: Result) => (
        <NewsItem key={newsItem.id} news={newsItem}/>
      ))}
    </div>
  )
}
