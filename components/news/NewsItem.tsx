import React from 'react'
import { Currency, Result } from '../../types/news'

interface INewsItemProps {
  news: Result
}

export const NewsItem: React.FC<INewsItemProps> = ({ news }) => {
  return (
    <div className="mx-5 space-y-1 border border-gray-600 p-4 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <div className="flex flex-row items-center justify-between ">
        <p className="break-normal">{news.title}</p>
        {/* //TODO not responsive enough */}
        <p>{news.published_at}</p>
      </div>

      <div>
        <a
          className="underline underline-offset-2 hover:text-teal-700"
          target="_blank"
          href={news.url.replace(news.slug, 'click/')}
        >
          Read more...
        </a>
      </div>

      <div>
        <div>
        <p
          className="transition duration-200 ease-in sm:hover:text-teal-600"
        >
          {/* //TODO domain names needs to be fixed */}
          Source: <a href={news.source.domain}>{news.source.title}</a>
        </p>
        </div>
       <div>
       {news.currencies && (
          <p className="flex space-x-1">
            Currencies:
            {news.currencies?.map((currency: Currency) => (
              <p>{currency.code},</p>
            ))}
          </p>
        )}
       </div>
       <div>
         {/* //TODO Ratings positive, negative */}
         <p>Ratings</p>
       </div>
      </div>
    </div>
  )
}
