import newsMain from "../img/newsMain.png"

const newsFeed = {
    lead: {
        background: newsMain,
        category: "world news",
        title: "Amazing places in America to visit.",
        text: "For some reason - this country, this city, this neighbourhood, this particular street - is the place you are living a majority of your life in.",
        url: "/home"
    },
    news: [
        {
            category: "travel",
            title: "Article title",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            url: "/home",
            timestamp: "2019-09-14T16:00:00.000"
        },
        {
            category: "technology",
            title: "Article title",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            url: "/home",
            timestamp: "2019-09-14T20:00:00.000"
        },
    ]
}

export default newsFeed