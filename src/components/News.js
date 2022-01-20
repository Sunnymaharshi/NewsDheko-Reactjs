import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  articles = [
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "2022 NFL playoffs bracket: Divisional round lookahead, as Chiefs host Bills in AFC Championship Game rematch - CBS Sports",
      description:
        "A few classic games are on tap in the NFL's second playoff weekend",
      url: "https://www.cbssports.com/nfl/news/2022-nfl-playoffs-divisional-round-lookahead-with-chiefs-hosting-bills-in-afc-championship-game-rematch/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2021/01/25/dd0f0c79-344d-4997-90b5-bd43e4bfff10/thumbnail/1200x675/c89b154a5469251220588f7bd285e622/patrick-mahomes.jpg",
      publishedAt: "2022-01-17T12:10:00Z",
      content:
        "Just like that, one round of playoff football is already in the books. Well, almost. Monday night's NFC West rematch between the 49ers and Rams will bring an official close to Super Wild Card Weekend… [+4314 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Charbel Mallo and Celine Alkhaldi, CNN",
      title: "Abu Dhabi: Suspected Houthi drone attack kills 3 - CNN",
      description:
        "A suspected Houthi drone attack near Abu Dhabi airport killed at least three people and sparked multiple explosions in the United Arab Emirates' capital on Monday.",
      url: "https://www.cnn.com/2022/01/17/middleeast/uae-abu-dhabi-explosion-drone-houthi-intl/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnn/.e/img/4.0/logos/cnn_logo_social.jpg",
      publishedAt: "2022-01-17T11:37:00Z",
      content: null,
    },
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Credit Suisse boss Horta-Osorio resigns over Covid breaches - BBC News",
      description:
        "Antonio Horta-Osorio leaves the bank after breaking UK quarantine rules to watch tennis at Wimbledon.",
      url: "https://www.bbc.com/news/business-60019735",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/C7F9/production/_122739115_antonio_horta_osorio_getty.jpg",
      publishedAt: "2022-01-17T10:34:26Z",
      content:
        "Image caption, Mr Horta-Osorio joined Credit Suisse in April last year\r\nThe chairman of global banking giant Credit Suisse, Antonio Horta-Osorio, has resigned with immediate effect after breaking Cov… [+4812 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "William Boston",
      title:
        "Rolls-Royce, Bentley, BMW Sales Surge as Cheaper Brands Lag Behind - The Wall Street Journal",
      description:
        "Luxury sales boom as car makers shift scarce chip and raw materials toward high-margin models",
      url: "https://www.wsj.com/articles/rolls-royce-bentley-bmw-sales-surge-as-cheaper-brands-lag-behind-11642415402",
      urlToImage: "https://images.wsj.net/im-468718/social",
      publishedAt: "2022-01-17T10:30:00Z",
      content:
        "BERLINA surge in luxury-car sales and the shifting of scarce semiconductors to the most profitable vehicles helped many auto makers achieve robust profits last year, even as sales of mainstream vehic… [+6509 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Texas synagogue siege: Teens held in UK as Briton named as hostage-taker - BBC News",
      description:
        "Briton Malik Faisal Akram died in the standoff with police after taking four hostages.",
      url: "https://www.bbc.com/news/uk-60019251",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/10089/production/_122737656_mediaitem122737655.jpg",
      publishedAt: "2022-01-17T10:20:40Z",
      content:
        "Media caption, Watch a briefing by an FBI agent after the stand-off in Colleyville, Texas\r\nTwo teenagers have been arrested in England as part of the investigation into a hostage-taking incident at a… [+5259 chars]",
    },
    {
      source: { id: null, name: "KABC-TV" },
      author: "By DOUGLASS K. DANIEL Associated Press",
      title:
        "Brigadier General Charles McGee, one of the last surviving Tuskegee Airmen, dies at 102 - KABC-TV",
      description:
        "Brig. Gen. Charles McGee, one of the last surviving Tuskegee Airmen, died Sunday morning in his sleep, according to a family spokesman. He was 102.",
      url: "https://abc7.com/charles-mcgee-tuskegee-airmen-obituary-veteran/11476834/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/11476860_airman_obit.jpg?w=1600",
      publishedAt: "2022-01-17T10:18:45Z",
      content:
        "WASHINGTON -- Charles McGee, a Tuskegee Airman who flew 409 fighter combat missions over three wars and later helped to bring attention to the Black pilots who had battled racism at home to fight for… [+4872 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Israeli ex-PM Netanyahu's cases could be dropped in plea deal - BBC News",
      description:
        "The former prime minister is discussing terms which could see a dramatic end to his criminal trial.",
      url: "https://www.bbc.com/news/world-middle-east-59942622",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/12235/production/_122739247_mediaitem122739246.jpg",
      publishedAt: "2022-01-17T10:06:02Z",
      content:
        "Image caption, The plea deal could see Mr Netanyahu leave politics for several years, reports say\r\nFormer Israeli Prime Minister Benjamin Netanyahu is negotiating a plea deal which could end his corr… [+2604 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Brad Lendon, CNN",
      title:
        "One of the US Navy's most powerful weapons makes a rare appearance in Guam - CNN",
      description:
        "One of the most powerful weapons in the US Navy's arsenal made a rare port call in Guam over the weekend, sending a message to allies and foes amid increasing tensions in the Indo-Pacific, analysts said.",
      url: "https://www.cnn.com/2022/01/16/asia/us-navy-ballistic-missile-submarine-guam-intl-hnk-mi/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220116190335-01-us-ballistic-missiel-submarine-guam-intl-hnk-ml-super-tease.jpg",
      publishedAt: "2022-01-17T09:04:00Z",
      content:
        "Hong Kong (CNN)One of the most powerful weapons in the US Navy's arsenal made a rare port call in Guam over the weekend, sending a message to allies and foes amid increasing tensions in the Indo-Paci… [+3647 chars]",
    },
    {
      source: { id: null, name: "TMZ" },
      author: "TMZ Staff",
      title: "Jamie Lynn Spears Not Doing Book Tour - TMZ",
      description: "Jamie Lynn Spears is not doing a book tour.",
      url: "https://www.tmz.com/2022/01/17/jamie-lynn-spears-no-book-tour-things-i-should-have-said/",
      urlToImage:
        "https://imagez.tmz.com/image/a3/16by9/2022/01/14/a392447aea2a46afbc6a7089fd9dfae7_xl.jpg",
      publishedAt: "2022-01-17T09:00:00Z",
      content:
        "Jamie Lynn Spears took a hard pass on doing a nationwide tour to promote her new book ... because she's not in it for the money ... so say sources connected to her.\r\nOur sources say Britney's little … [+1725 chars]",
    },
    {
      source: { id: "engadget", name: "Engadget" },
      author: "https://www.engadget.com/about/editors/steve-dent",
      title:
        "Apple may have dropped built-in noise cancellation on the iPhone 13 - Engadget",
      description:
        'Apple\'s "Noise Cancellation" accessibility feature has been a staple on past iPhones, but may have been permanently removed from the iPhone 13..',
      url: "https://www.engadget.com/apple-has-reportedly-killed-noise-cancellation-on-the-i-phone-13-083456476.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-01/353598f0-7765-11ec-bbbf-9f0ea07ea914",
      publishedAt: "2022-01-17T08:36:10Z",
      content:
        'Apple\'s "Noise Cancellation" accessibility feature has been a staple on past iPhones, but may have been permanently removed from the iPhone 13 series, 9to5Mac has reported. The feature is designed to… [+1445 chars]',
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Helen Regan, CNN",
      title:
        "A massive volcanic eruption and tsunami hit Tonga and the Pacific. Here's what we know - CNN",
      description:
        "An underwater volcano near Tonga has erupted for the third time in four days, potentially threatening the ability of surveillance flights to assess the damage to the Pacific island nation following Saturday's massive eruption and tsunami.",
      url: "https://www.cnn.com/2022/01/17/asia/tonga-volcanic-eruption-tsunami-explainer-intl-hnk/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220116193237-tonga-volcanic-eruption-explainer-super-tease.jpg",
      publishedAt: "2022-01-17T07:43:00Z",
      content:
        "(CNN)An underwater volcano near Tonga has erupted for the third time in four days, potentially threatening the ability of surveillance flights to assess the damage to the Pacific island nation follow… [+7255 chars]",
    },
    {
      source: { id: null, name: "Daily Mail" },
      author: "Natasha Anderson, Michelle Thompson",
      title:
        "Winter storm brings FOUR tornadoes to Florida, with twisters that hit speeds of 118mph - Daily Mail",
      description:
        "An EF-1 storm caused a semi-truck to flip on its side, injuring the driver.\nAn EF-2 twister with winds of 118mph sent debris flying through the sky and left several homes in Fort Myers torn to bits.",
      url: "https://www.dailymail.co.uk/news/article-10409569/Winter-storm-brings-FOUR-tornadoes-Florida-twisters-hit-speeds-110mph.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/01/17/06/53012813-0-image-a-115_1642402278154.jpg",
      publishedAt: "2022-01-17T06:58:50Z",
      content:
        "A powerful winter storm that left much of the eastern US snow and ice-covered brought four tornadoes to Florida Sunday morning, injuring at least four people and leaving a path of destruction behind.… [+8677 chars]",
    },
    {
      source: { id: null, name: "Daily Mail" },
      author: "Adam S. Levy",
      title:
        "Bob Saget is honored by America's Funniest Home Videos following his death at 65: 'A comedy legend' - Daily Mail",
      description:
        "The program showed a montage of clips from Saget's eight seasons on the ABC series from 1990 thru 1997.",
      url: "https://www.dailymail.co.uk/tvshowbiz/article-10409713/Bob-Saget-honored-Americas-Funniest-Home-Videos-following-death-65-comedy-legend.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/01/17/06/53012393-0-image-a-86_1642400700912.jpg",
      publishedAt: "2022-01-17T06:40:52Z",
      content:
        "Bob Saget spoke about his evolving approach to comedy, an influential mentor and his days as a student at Philadelphia's Temple University in what would be his final interview ahead of his shocking d… [+5066 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Abigail Ng",
      title:
        "'Obscene inequality': Oxfam says taxing the world's richest could help save lives - CNBC",
      description:
        "The wealth of the world's ten richest men doubled from $700 billion to $1.5 trillion during the pandemic, the global charity said in a press release on Monday.",
      url: "https://www.cnbc.com/2022/01/17/oxfam-on-covid-inequality-tax-rich-to-pay-for-vaccines-protect-climate.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106817935-1609423998182-gettyimages-1230274603-AFP_8XN6K3.jpeg?v=1642391530",
      publishedAt: "2022-01-17T06:29:55Z",
      content:
        'The pandemic has made the rich richer while the income of the rest of the world about 99% of humanity dropped, according to a new Oxfam report titled "Inequality Kills."\r\nThe wealth of the world\'s 10… [+2319 chars]',
    },
    {
      source: { id: null, name: "ScienceAlert" },
      author: "Jennifer Rooke, The Conversation",
      title:
        "Why You Should Never Quit Fruit During a Low-Carb Diet, According to Science - ScienceAlert",
      description:
        "One of my patients – who had been struggling with obesity, uncontrolled diabetes and the cost of her medications – agreed in June 2019 to adopt a more whole-food plant-based diet.",
      url: "https://www.sciencealert.com/even-if-you-re-trying-to-lower-your-sugar-intake-a-doctor-explains-why-you-should-keep-eating-fruit",
      urlToImage:
        "https://www.sciencealert.com/images/2022-01/processed/HandsOpeningRambutanFruitCloseUp_1024.jpg",
      publishedAt: "2022-01-17T06:03:58Z",
      content:
        "One of my patients who had been struggling with obesity, uncontrolled diabetes and the cost of her medications agreed in June 2019 to adopt a more whole-food plant-based diet.\r\nExcited by the challen… [+6546 chars]",
    },
    {
      source: { id: null, name: "ScienceAlert" },
      author: "Michelle Starr",
      title:
        "Earth's Insides Are Cooling Faster Than We Thought, And It Will Mess Things Up - ScienceAlert",
      description:
        "Earth formed 4.5 billion years or so ago. Ever since then, it's been slowly cooling on the inside.",
      url: "https://www.sciencealert.com/earth-s-insides-are-cooling-faster-than-we-thought-and-it-will-mess-things-up",
      urlToImage:
        "https://www.sciencealert.com/images/2022-01/processed/earth-cross-section-illustration_1024.jpg",
      publishedAt: "2022-01-17T05:59:42Z",
      content:
        "Earth formed 4.5 billion years or so ago. Ever since then, it's been slowly cooling on the inside.\r\nWhile the surface and atmosphere temperatures fluctuate over the eons (and yes, those external temp… [+3476 chars]",
    },
    {
      source: { id: null, name: "INSIDER" },
      author: "Matthew Loh",
      title:
        "Novak Djokovic's family, Serbian leaders condemn 'scandalous' deportation - Insider",
      description:
        'Serbia\'s Prime Minister, Ana Brnabić, called Australia\'s decision "unbelievable," while President Aleksandar Vucic said the hearing was a "farce."',
      url: "https://www.insider.com/novak-djokovics-deportation-family-serbian-leaders-condemn-scandalous-2022-1",
      urlToImage:
        "https://i.insider.com/61e4f81f7c6a2000184247b0?width=1200&format=jpeg",
      publishedAt: "2022-01-17T05:44:29Z",
      content:
        "On Sunday, the family of tennis star Novak Djokovic and Serbia's top leaders criticized the sports icon's deportation from Australia, saying the ruling was \"scandalous.\"\r\nThe day before, a three-judg… [+2408 chars]",
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Associated Press",
      title:
        "Patrick Mahomes, Chiefs rout Steelers in Ben Roethlisberger's likely last game - New York Post ",
      description:
        "Patrick Mahomes threw for 404 yards and five touchdowns and the Kansas City Chiefs sent Pittsburgh quarterback Ben Roethlisberger into his anticipated retirement with a 42-21 blowout of the Steeler…",
      url: "https://nypost.com/2022/01/17/patrick-mahomes-chiefs-rout-steelers-wild-card-round-win/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/01/newspress-collage-20857576-1642394976582.png?w=1024",
      publishedAt: "2022-01-17T05:03:00Z",
      content:
        "KANSAS CITY, Mo. Patrick Mahomes threw for 404 yards and five touchdowns, Travis Kelce caught a TD pass and threw another one, and the Kansas City Chiefs sent Pittsburgh quarterback Ben Roethlisberge… [+4944 chars]",
    },
    {
      source: { id: null, name: "Cbslocal.com" },
      author: "CBSDFW.com Staff",
      title:
        "One And Done: Cowboys 4th Quarter Rally Comes Up Short, Fall To 49ers 23-17 - CBS Dallas / Fort Worth",
      description:
        "Versatile receiver Deebo Samuel ran 26 yards for a touchdown the play after an interception by Dak Prescott, and the San Francisco 49ers held on for a 23-17 wild-card victory over the Dallas Cowboys on Sunday.",
      url: "https://dfw.cbslocal.com/2022/01/16/cowboys-fall-49ers-23-17/",
      urlToImage:
        "https://dfw.cbslocal.com/wp-content/uploads/sites/15909545/2022/01/Dak-Prescott-NFC-Loss.jpg?w=770",
      publishedAt: "2022-01-17T04:23:00Z",
      content:
        "ARLINGTON, Texas (CBSDFW.COM/AP) Kyle Shanahan walked onto the field with an emphatic nod, believing his San Francisco 49ers had beaten the Dallas Cowboys in a chaotic wild-card finish that left many… [+5871 chars]",
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Alexandra Del Rosario",
      title:
        "‘Yellowjackets’ Season Finale: [SPOILER]’s Cause Of Death Revealed; Creators Say To Expect “Darker,” “Weirder” Season 2 - Deadline",
      description:
        "SPOILER ALERT: This post includes some major reveals for the Season 1 finale of Showtime’s Yellowjackets, “Sic Transit Gloria Mundi.” Just when it seems Yellowjackets couldn’t get any more sinister than “Doomcoming,” the Season 1 finale proves otherwise. Hung…",
      url: "https://deadline.com/2022/01/yellowjackets-season-finale-recap-creators-season-2-1234907533/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2022/01/Yellowjackets_110_0360_R.jpg?w=1024",
      publishedAt: "2022-01-17T04:00:00Z",
      content:
        "SPOILER ALERT: This post includes some major reveals for the Season 1 finale of Showtime’s Yellowjackets, “Sic Transit Gloria Mundi.”\r\nJust when it seems Yellowjackets couldn’t get any more sinister … [+13834 chars]",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalArticles: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - News Dheko`;
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }

  defaultUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6p-wtbH5WWOzY_5a4WmZFjLHXNLR1c4NKa2E0xt3cEv4Mm9mqHeSSKn1KbEdZvRXfnTU&usqp=CAU";

  // handleNextClick = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };
  // handlePrevClick = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };
  fetchMore = async () => {
    this.setState({
      page: this.state.page + 1,
    });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
    });
  };
  render() {
    return (
      <>
        <h1 className="text-center">
          Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMore}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((article) => {
                return (
                  <div className="col-md-4" key={article.url}>
                    <NewsItem
                      title={article.title ? article.title.slice(0, 45) : ""}
                      des={
                        article.description
                          ? article.description.slice(0, 60)
                          : ""
                      }
                      imageUrl={
                        article.urlToImage
                          ? article.urlToImage
                          : this.defaultUrl
                      }
                      newsUrl={article.url}
                      author={article.author ? article.author : "unknown"}
                      date={article.publishedAt}
                      source={article.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
