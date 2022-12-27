import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  articles = [
  {
    
      "source": {
      "id": null,
      "name": "Biztoc.com"
      },
      "author": "businessinsider.com",
      "title": "Short-sellers make $15 billion betting against Tesla as shares in Elon Musk's company sink by 70% this year",
      "description": "Elon Musk is no longer the world's richest person as Tesla shares keep sliding. Carina Johansen/Getty Images; Jeremy Moeller/Getty Images Investors made $15 billion by betting that shares in Tesla would fall this year, per S3 Partners. The value of Elon Musk'…",
      "url": "https://biztoc.com/x/22b5fdd0a1e827bf",
      "urlToImage": "https://c.biztoc.com/p/22b5fdd0a1e827bf/og.webp",
      "publishedAt": "2022-12-25T09:38:05Z",
      "content": "Elon Musk is no longer the world's richest person as Tesla shares keep sliding.Carina Johansen/Getty Images; Jeremy Moeller/Getty ImagesInvestors made $15 billion by betting that shares in Tesla woul… [+450 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Biztoc.com"
      },
      "author": "marketwatch.com",
      "title": "U.S. stocks end higher, but S&P 500 logs 3rd straight weekly decline ahead of Christmas",
      "description": "U.S. stocks ended higher in a choppy, preholiday session Friday as an inflation report and a raft of other data did little to change expectations that the Federal Reserve would likely continue hiking interest rates even if the economy slows. The S&P 500 and N…",
      "url": "https://biztoc.com/x/896e4445acecd181",
      "urlToImage": "https://c.biztoc.com/p/896e4445acecd181/og.webp",
      "publishedAt": "2022-12-25T09:18:03Z",
      "content": "U.S. stocks ended higher in a choppy, preholiday session Friday as an inflation report and a raft of other data did little to change expectations that the Federal Reserve would likely continue hiking… [+451 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Biztoc.com"
      },
      "author": "yahoo.com",
      "title": "Cathie Wood Is Loading Up On These 12 Stocks",
      "description": "In this piece, we will take a look at the top twelve stocks that are on Cathie Wood's radar. For more stocks, head on over to Cathie Wood Is Loading Up On These 5 Stocks. If there's one thing that can be said for certain in today's highly volatile environment…",
      "url": "https://biztoc.com/x/97e687c44626a9ef",
      "urlToImage": "https://c.biztoc.com/p/97e687c44626a9ef/og.webp",
      "publishedAt": "2022-12-25T09:08:06Z",
      "content": "In this piece, we will take a look at the top twelve stocks that are on Cathie Wood's radar. For more stocks, head on over to Cathie Wood Is Loading Up On These 5 Stocks.\r\nIf there's one thing that c… [+460 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "AutoExpress"
      },
      "author": "Auto Express",
      "title": "Big Christmas Car Quiz 2022: page 2",
      "description": "Test your motoring knowledge with part two of our Christmas quiz...",
      "url": "https://www.autoexpress.co.uk/news/359350/big-christmas-car-quiz-2022-page-2",
      "urlToImage": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1670843400/autoexpress/2022/12/Christmas quiz 2022.jpg",
      "publishedAt": "2022-12-25T09:00:46Z",
      "content": "Below you'll find part two of the Big Christmas Car Quiz. Good luck...\r\nRecognising the pioneers from the 19th and 20th centuries\r\n51. The 1962 Oldsmobile Jetfire is credited as being the first produ… [+6873 chars]"
      

  }
]
  constructor(){
    super();
    console.log("hello this is a constructor from news")
    this.state = {
        articles: this.articles,
        loading: false  
    }

  }
  render() {
    return (
      <div className="container my-4">
        <h2>Taaza Khabar</h2>
      <div className="row">
        <div className="col-md-4">
          <Newsitem title="myTitle" description="myone" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnSGmEJerJ5Wsi0y01slbS2HwNmxue82P2Ht0IZ_MFw&s" newsUrl="TODO" />
        </div>
        <div className="col-md-4">
          <Newsitem title="myTitle" description="myone"/>
        </div>
        <div className="col-md-4">
          <Newsitem title="myTitle" description="myone"/>
        </div>
      </div>
   </div>
    )
  }
}

export default News;
