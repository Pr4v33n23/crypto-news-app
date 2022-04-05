import React from 'react'
import { Currency, Result } from '../../types/news'
import { TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/outline'

interface INewsItemProps {
  news: Result
}

export const NewsItem: React.FC<INewsItemProps> = ({ news }) => {
  const { positive, liked, important, negative, toxic, disliked } = news.votes

  return (
    <div className="mx-5 transform space-y-1 border border-gray-600 p-4 transition duration-200 ease-in hover:z-50 sm:hover:scale-105">
      <div className="flex flex-row items-center justify-between space-x-4">
        <p className="break-normal">{news.title}</p>
        <p className="text-xs text-gray-400 sm:text-base">
          {news.published_at}
        </p>
      </div>

      <div>
        <a
          className="underline underline-offset-2 hover:text-teal-700"
          target="_blank"
          rel="noreferrer"
          href={news.url.replace(news.slug, 'click/')}
        >
          Read more...
        </a>
      </div>

      <div>
        <div>
          <p className="transition duration-200 ease-in sm:hover:text-teal-600">
            Source:{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href={'https://www.' + news.source.domain}
            >
              {news.source.title}
            </a>
          </p>
        </div>
        <div>
          {news.currencies && (
            <p className="flex space-x-1">
              <span>Currencies: </span>
              {news.currencies?.map((currency: Currency) => (
                <span key={news.id}>{currency.code}</span>
              ))}
            </p>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <p>Ratings: </p>
          <div className="flex items-center space-x-1">
            <TrendingUpIcon className="mb-1 h-6 text-green-600" />
            <p>{important + liked + positive}</p>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingDownIcon className="mb-1 h-6 text-red-600" />
            <p>{negative + toxic + disliked}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
