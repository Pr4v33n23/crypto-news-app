export interface NewsData {
    count: number
    next: string
    previous: any
    results: Result[]
  }
  
  export interface Result {
    kind: string
    domain: string
    source: Source
    title: string
    published_at: string
    slug: string
    id: number
    url: string
    created_at: string
    votes: Votes
    currencies?: Currency[]
  }
  
  export interface Source {
    title: string
    region: string
    domain: string
    path: any
  }
  
  export interface Votes {
    negative: number
    positive: number
    important: number
    liked: number
    disliked: number
    lol: number
    toxic: number
    saved: number
    comments: number
  }
  
  export interface Currency {
    code: string
    title: string
    slug: string
    url: string
  }
  