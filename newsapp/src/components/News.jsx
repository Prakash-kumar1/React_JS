import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import NewsItem from './NewsItem'
import Loader from "./Loader.jsx"
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResult, setTotalResult] = useState()
    const fetchData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=e1d5f921911a46f48022936125f06baa&pageSize=9`
        setLoading(true)
        const data = await fetch(url)
        const parsedData = await data.json()
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResult(parsedData.totalResults)
    }
    useEffect(() => {
        fetchData()
    }, [])

    // const preBtnHandler = async()=>{
    //       const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=e1d5f921911a46f48022936125f06baa&page=${page-1}&pageSize=9`
    //       setLoading(true)
    //       const data = await fetch(url)
    //       const parsedData = await data.json()
    //       setArticles(parsedData.articles)
    //       setLoading(false)
    //       setPage(page - 1)
    //     }
    //     const nextBtnHandler = async()=>{
    //         const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=e1d5f921911a46f48022936125f06baa&page=${page+1}&pageSize=9`
    //         setLoading(true)
    //         const data = await fetch(url)
    //         const parsedData = await data.json()
    //         setArticles(parsedData.articles)
    //         setLoading(false)
    //         setPage(page + 1)
    //     }
    const fetchMoreData= async()=>{
       setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=e1d5f921911a46f48022936125f06baa&page=${page + 1}&pageSize=9`
        const data = await fetch(url)
        const newData = await data.json()
        setArticles(articles.concat(newData.articles))
        setTotalResult(newData.totalResults)
    }
    return (
        <>
            {
                loading ? <Loader /> : <>
                    <div className="container my-4">
                        <h1>News App</h1>
                        <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length!=totalResult}
                        loader={<h4 className='container text-center'>Loading...</h4>}
                        >
                        <div className='d-flex flex-row justify-content-around flex-wrap'>
                            
                            {
                                articles.map((obj => (
                                    <NewsItem name={obj.title} description={obj.description} url={obj.url} urlToImage={obj.urlToImage} />
                                )))
                            }

                        </div>
                        </InfiniteScroll>
                        </div>
                        {/* <div className='d-flex justify-content-between '>

                            <button disabled={page <= 1 ? true : false} type="button" class="btn btn-dark" onClick={preBtnHandler}>&larr; Previous</button>
                            <button disabled={page + 1 > Math.ceil(totalResult  /9) ? true : false} type="button" class="btn btn-dark" onClick={nextBtnHandler}>Next &rarr;</button>

                        </div> */}
                </>
            }

        </>
    )
}

export default News