import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "LeBron James to retire?! Bobby Marks breaks down what happens next | NBA on ESPN - ESPN",
            "description": "Bobby Marks explains what happens when a player decides to retire in the NBA following LeBron James’ comments that he’s considered retirement this offseason....",
            "url": "https://www.youtube.com/watch?v=nnBpTyKYjd8",
            "urlToImage": "https://i.ytimg.com/vi/nnBpTyKYjd8/hqdefault.jpg",
            "publishedAt": "2023-05-23T13:58:57Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Apple Newsroom"
            },
            "author": "",
            "title": "Apple announces multibillion-dollar deal with Broadcom - Apple",
            "description": "Today Apple announced a multiyear, multibillion-dollar agreement with Broadcom, a leading U.S. manufacturing and technology company.",
            "url": "https://www.apple.com/newsroom/2023/05/apple-announces-multibillion-dollar-deal-with-broadcom/",
            "urlToImage": "https://www.apple.com/newsroom/images/default/qr/QR-Apple-logo.jpg.og.jpg?202305231326",
            "publishedAt": "2023-05-23T13:01:26Z",
            "content": "May 23, 2023\r\nUPDATE\r\nApple announces multibillion-dollar deal with Broadcom for components made in the USA\r\nToday Apple announced a new multiyear, multibillion-dollar agreement with Broadcom, a lead… [+2123 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Andrew Cunningham",
            "title": "Review: Nvidia’s $399 RTX 4060 Ti is a step forward, but only a small one - Ars Technica",
            "description": "Most games perform better, but the gains are smaller than we're used to.",
            "url": "https://arstechnica.com/gadgets/2023/05/review-nvidias-399-rtx-4060-ti-is-mostly-a-step-forward-but-only-a-small-one/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/05/IMG_1072-760x380.jpeg",
            "publishedAt": "2023-05-23T13:00:02Z",
            "content": "Enlarge/ The RTX 4060 Ti Founders Edition.\r\n33 with \r\nNvidia's announcement of the GeForce RTX 4060 series last week broke the pricing trend set by every other RTX 4000-series card released so far: T… [+5128 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Scott Roxborough",
            "title": "Cannes: Lily-Rose Depp, The Weeknd on Depicting the “Pornification” of American Pop Culture in Sexually Explicit ‘The Idol’ - Hollywood Reporter",
            "description": "Depp, Abel “The Weeknd” Tesfaye and series director Sam Levinson dismissed reports of on-set turmoil in the making of the six-part HBO series. \"It was completely foreign to me,\" said Levinson, \"but reading it I thought: 'We are about to have the biggest show …",
            "url": "https://www.hollywoodreporter.com/tv/tv-news/lily-rose-depp-the-weeknd-sex-celebrity-the-idol-1235498268/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/05/GettyImages-1257483785-copy.jpg?w=1024",
            "publishedAt": "2023-05-23T12:49:52Z",
            "content": "Lily-Rose Depp and The Weeknd explored the dark side of celebrity in the Cannes press conference for HBO’s controversial sexy pop star drama series The Idol, after the world premiere of the first two… [+7110 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Suella Braverman: Rishi Sunak still considering whether to order investigation - BBC",
            "description": "Opposition parties accuse the PM of \"dither and delay\" over decision on home secretary's conduct.",
            "url": "https://www.bbc.com/news/uk-politics-65681010",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E1C7/production/_127499775_a74904a7-ba24-48a5-ab59-a3ab8b71db97.jpg",
            "publishedAt": "2023-05-23T12:33:42Z",
            "content": "Media caption, Watch: Braverman quizzed on speeding claims\r\nPrime Minister Rishi Sunak is still considering whether to order an investigation into Suella Braverman's conduct, No 10 has said. \r\nThe PM… [+4090 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Jalopnik"
            },
            "author": "Erin Marquis",
            "title": "NASA Wants To Go To Mars On A Nuclear-Powered Rocket - Jalopnik",
            "description": "A rocket using low-enriched uranium could cut travel time to the Red Planet by a third.",
            "url": "https://jalopnik.com/nasa-wants-to-go-to-mars-on-a-nuclear-powered-rocket-1850462949",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/800546da81561577e23e5c48af23ccd5.png",
            "publishedAt": "2023-05-23T12:30:00Z",
            "content": "NASA is committed to getting humanity all the way to the Red Planet, and it thinks the best way to do that is a nuclear-powered rocket. \r\nAnd just like that, I have a new answer to what Id paint on t… [+2146 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "LeBron James can't outrun inevitable pull of time in Lakers' season-ending loss to Nuggets - CBS Sports",
            "description": "James tried to keep the Lakers' season alive by himself, and he almost succeeded",
            "url": "https://www.cbssports.com/nba/news/lebron-james-cant-outrun-inevitable-pull-of-time-in-lakers-season-ending-loss-to-nuggets/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/05/23/e3fdc2b5-9d37-431b-8642-3188ce22eda6/thumbnail/1200x675/d17aa5cb9bc38c28b1052cb4e73566cc/lebron-getty.png",
            "publishedAt": "2023-05-23T12:21:00Z",
            "content": "LOS ANGELES -- In the end, for all the magic and greatness and transcendent talent LeBron James was still able to muster, two things still stood in his way on Monday night. \r\nThe Denver Nuggets. And … [+3983 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GMA"
            },
            "author": "Stephen Iervolino, Angeline Jane Bernabe",
            "title": "Ray Stevenson, star of 'RRR' and 'Star Wars: Ahsoka,' dies at 58 - ABC News",
            "description": "",
            "url": "https://www.goodmorningamerica.com/culture/story/ray-stevenson-star-rrr-star-wars-ahsoka-dies-99515502",
            "urlToImage": "https://s.abcnews.com/images/GMA/ray-stevenson-marvel-gty-lv-230522_1684779844290_hpMain_16x9_608.jpg",
            "publishedAt": "2023-05-23T12:19:01Z",
            "content": "Ray Stevenson, the character actor who featured in movies like \"Punisher: Warzone\" and the Indian smash \"RRR,\" has died, ABC News has confirmed.\r\nA representative for the actor said he died on Sunday… [+1552 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": null,
            "title": "Samsung's new Sensor OLED display can read fingerprints anywhere on the screen | Engadget - Engadget",
            "description": "Samsung has unveiled a new display technology that could lead to new biometric and health-related capabilities in future phones and tablets..",
            "url": "https://www.engadget.com/samsungs-new-sensor-oled-display-can-read-fingerprints-anywhere-on-the-screen-121346659.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/UNgOw5yA4yjtZjiXbaxFnw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/28a90470-f962-11ed-8ffb-5c9b191e192e.cf.jpg",
            "publishedAt": "2023-05-23T12:16:21Z",
            "content": "Samsung has unveiled a new display technology that could lead to new biometric and health-related capabilities in future phones and tablets. The tech giant has debuted what it calls the Sensor OLED D… [+1785 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Sara Moniuszko",
            "title": "Bone broth: Is it good for you? Here's what experts say. - CBS News",
            "description": "Bone broth is gaining attention on social media, but is it actually healthy or all hype? We asked experts to weigh in and answer common questions.",
            "url": "https://www.cbsnews.com/news/bone-broth-is-it-good-for-you-heres-what-experts-say/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/05/17/d9ab918b-b2e3-49c5-990c-1702ef6e35b4/thumbnail/1200x630/d5e98bdf56097a451a39bbbcf4b42b3b/gettyimages-936161838.jpg",
            "publishedAt": "2023-05-23T12:05:24Z",
            "content": "You've probably been seeing bone broth videos popping up on your social media feed. Celebrities mention sipping it for lunch. But is it actually healthy, or a lot of hype?\r\nLaura Ligos, a registered … [+3996 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DW (English)"
            },
            "author": "Deutsche Welle",
            "title": "Ukraine updates: F-16 training begins in Poland, EU says - DW (English)",
            "description": "The European Union's foreign policy chief Josep Borrell said that training for Ukrainian pilots had already begun in Poland and some other countries, after the United States gave its green light. DW has the latest.",
            "url": "https://www.dw.com/en/ukraine-updates-f-16-training-for-pilots-begins-in-poland-eu-says/a-65705291",
            "urlToImage": "https://static.dw.com/image/65685650_6.jpg",
            "publishedAt": "2023-05-23T12:01:32Z",
            "content": "The training of Ukrainian pilots to fly F-16 jets has begun in Poland, EU foreign policy chief Josep Borrell said on Tuesday.\r\nThe move comes after US President Joe Biden last week gave the go-ahead … [+11470 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Joe Rao",
            "title": "This new supernova is the closest to Earth in a decade. It's visible in the night sky right now. - Space.com",
            "description": "A new supernova has literally, and figuratively, \"burst\" upon the scene.",
            "url": "https://www.space.com/supernova-closest-earth-m101-galaxy",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/2jiC9BY262JH7hh9pEsdDM-1200-80.jpg",
            "publishedAt": "2023-05-23T12:00:21Z",
            "content": "Long Island, New York-based astrophotographer Steven Bellavia produced this composite animation of the Pinwheel Galaxy using an image taken on April 21 and comparing it to another image taken on May … [+4976 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Sarah Min",
            "title": "Stocks making the biggest moves premarket: Yelp, AutoZone, Lowe's, Dick's Sporting Goods & more - CNBC",
            "description": "These are the stocks posting the largest moves in early trading.",
            "url": "https://www.cnbc.com/2023/05/23/stocks-making-the-biggest-moves-premarket-yelp-autozone-lowes-dicks-sporting-goods-more-.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106933061-1629904082322-gettyimages-1233497291-PWeaver-MonroeMktPl-210616-18.jpeg?v=1684842803&w=1920&h=1080",
            "publishedAt": "2023-05-23T11:53:23Z",
            "content": "Check out the companies making headlines before the bell:\r\nYelp Yelp shares surged 11.4% in premarket trading. Activist investor TCS Capital Management confirmed reports that it's built a stake of mo… [+1910 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "FILIPE BENTO Associated Press",
            "title": "Police in Portugal resume search for Madeleine McCann, British child missing since 2007 - ABC News",
            "description": "Portuguese police aided by German and British officers have resumed their search for Madeleine McCann, the British child who disappeared in the country’s southern Algarve region 16 years ago",
            "url": "https://abcnews.go.com/International/wireStory/police-portugal-resume-search-madeleine-mccann-british-child-99532045",
            "urlToImage": "https://s.abcnews.com/images/International/wirestory_4528b15895180b3e1d9a9aecde06bfcc_16x9_992.jpg",
            "publishedAt": "2023-05-23T11:48:45Z",
            "content": "ARADE DAM, Portugal -- Police on Tuesday renewed the search for Madeleine McCann, the British child who disappeared in 2007, with officers digging and scraping the surface of land near a dam close to… [+3541 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Mary Kay Mallonee,Josh Campbell",
            "title": "U-Haul driver faces multiple charges after crashing into a security barrier near White House in Lafayette Square, police say - CNN",
            "description": "The driver of a U-Haul who crashed into a security barrier in Lafayette Square near the White House Monday night was arrested on multiple charges, including threatening to kill or harm a president, vice president or family member, according to US Park Police.",
            "url": "https://www.cnn.com/2023/05/23/politics/dc-uhaul-crash-charges/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230523150040-01-white-house-u-haul-crash-threats.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-05-23T11:45:00Z",
            "content": "The driver of a U-Haul who crashed into a security barrier in Lafayette Square near the White House Monday night was arrested on multiple charges, including threatening to kill or harm a president, v… [+1803 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jon Porter",
            "title": "Microsoft Build 2023: all the news and announcements from the developer conference - The Verge",
            "description": "Microsoft’s Build conference is taking place between May 23rd and May 25th. Expect plenty of AI announcements about Microsoft’s products and services including Bing.",
            "url": "https://www.theverge.com/23732609/microsoft-build-2023-news-announcements-ai",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/2LpcEUR9vxFA_n_aNZ-N_tTvOps=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24038601/acastro_STK109_microsoft_02.jpg",
            "publishedAt": "2023-05-23T11:15:33Z",
            "content": "Filed under:\r\nByJon Porter, a reporter with five years of experience covering consumer tech releases, EU tech policy, online platforms, and mechanical keyboards.\r\nMicrosofts Build developer conferenc… [+10332 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Rachel Sharp",
            "title": "Idaho murders suspect Bryan Kohberger refuses to enter plea at arraignment – latest - The Independent",
            "description": "Latest on Idaho college murders: Bryan Kohberger",
            "url": "https://www.independent.co.uk/news/world/americas/crime/bryan-kohberger-idaho-murders-live-b2344052.html",
            "urlToImage": "https://static.independent.co.uk/2023/05/22/18/newFile-3.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-05-23T11:00:00Z",
            "content": "What comes after Bryan Kohbergers not-guilty plea?\r\nA preliminary hearing, where prosecutors had to show a judge that there is enough evidence to justify moving forward with charges of burglary and f… [+1421 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jess Weatherbed",
            "title": "Adobe is adding its AI image generator Firefly to Photoshop - The Verge",
            "description": "Adobe Photoshop is getting a new Firefly-powered Generative Fill tool that allows users to quickly extend images and add or remove objects using text prompts.",
            "url": "https://www.theverge.com/2023/5/23/23734027/adobe-photoshop-generative-fill-ai-image-generator-firefly",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/I9Eh0E6rchvHl4aWujCOYYLVNIU=/0x0:2539x1677/1200x628/filters:focal(1270x839:1271x840)/cdn.vox-cdn.com/uploads/chorus_asset/file/24675660/Car_Comparison.png",
            "publishedAt": "2023-05-23T11:00:00Z",
            "content": "Adobe is adding AI image generator Firefly to Photoshop\r\nAdobe is adding AI image generator Firefly to Photoshop\r\n / Generative Fill will arrive in Photoshop in the second half of 2023.\r\nByJess Weath… [+4110 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Mercenary Prigozhin lays bare the strains of Putin's war - Reuters",
            "description": "Yevgeny Prigozhin on Saturday delivered Vladimir Putin one of the few battlefield victories of the president's 15-month war in Ukraine.",
            "url": "https://www.reuters.com/world/europe/jester-or-rebel-mercenary-prigozhin-lays-bare-strains-putins-war-2023-05-23/",
            "urlToImage": "https://www.reuters.com/resizer/DeCSPJ7DjQt2ewhcbbpuvznO_Fk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/W57FFSIMD5O23FKI2RRCUSRDUA.jpg",
            "publishedAt": "2023-05-23T10:52:00Z",
            "content": "MOSCOW, May 23 (Reuters) - Yevgeny Prigozhin on Saturday delivered Vladimir Putin one of the few battlefield victories of the president's 15-month war in Ukraine.\r\nEven then, Russia's most powerful m… [+5801 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Christian Glass: Family of Colorado man shot by police get $19m settlement - BBC",
            "description": "Christian Glass, 22, was killed in his vehicle last June while suffering a mental health crisis.",
            "url": "https://www.bbc.com/news/world-us-canada-65682512",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DE3D/production/_129839865_gettyimages-1243404558.jpg",
            "publishedAt": "2023-05-23T10:10:43Z",
            "content": "The family of a man who was shot dead by police in Colorado while suffering a mental health crisis will receive a $19m (£15.3m) settlement.\r\nThe payment from both state and local authorities is the l… [+2114 chars]"
        }
    ]
    constructor (){
        super();
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

    render() {
        return (
            <div className='container my-4'>
                <h2 className='mb-4'>InsightDigest - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4 my-3">
                        <NewsItem title="U-Haul driver faces multiple charges after crashing into a security barrier near White House in Lafayette Square, police say - CNN" description="The driver of a U-Haul who crashed into a security barrier in Lafayette Square near the White House Monday night was arrested on multiple charges, including threatening to kill or harm a president, vice president or family member, according to US Park Police." imgurl="https://media.cnn.com/api/v1/images/stellar/prod/230523150040-01-white-house-u-haul-crash-threats.jpg?c=16x9&q=w_800,c_fill"/>
                    </div>
                    <div className="col-md-4 my-3">
                        <NewsItem title="My Title" description="My Desc" />
                    </div>
                    <div className="col-md-4 my-3">
                        <NewsItem title="My Title" description="My Desc" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
