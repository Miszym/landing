import homeIcon from "../img/home.svg"
import discoverIcon from "../img/discover.svg"
import photosIcon from "../img/photos.svg"
import mailIcon from "../img/mail.svg"

const navbarItems = [
    {
        name: "Home",
        url: "/home",
        icon: homeIcon,
        subnav: [
            {
                name: "world news",
                url: "/world"
            },
            {
                name: "travel",
                url: "/travel"
            },
            {
                name: "technology",
                url: "/technology"
            },
            {
                name: "city",
                url: "/city"
            },
            {
                name: "culture",
                url: "/culture"
            },
            {
                name: "more...",
                url: "/more"
            },
        ]    
    },
    {
        name: "Discovery",
        url: "/discovery",
        icon: discoverIcon,
        subnav: [
            {
                name: "discovery news",
                url: "/discovery"
            },
            {
                name: "travel",
                url: "/travel"
            },
            {
                name: "technology",
                url: "/technology"
            },
            {
                name: "city",
                url: "/city"
            },
            {
                name: "culture",
                url: "/culture"
            },
            {
                name: "more...",
                url: "/more"
            },
        ]    
    },
    {
        name: "Photos",
        url: "/photos",
        icon: photosIcon,
        subnav: [
            {
                name: "photos news",
                url: "/photos"
            },
            {
                name: "travel",
                url: "/travel"
            },
            {
                name: "technology",
                url: "/technology"
            },
            {
                name: "city",
                url: "/city"
            },
            {
                name: "culture",
                url: "/culture"
            },
            {
                name: "more...",
                url: "/more"
            },
        ]    
    },
    {
        name: "Contact",
        url: "/contact",
        icon: mailIcon,
        subnav: [
            {
                name: "address",
                url: "/address"
            },
            {
                name: "more...",
                url: "/more"
            },
        ]    
    }
]

export default navbarItems