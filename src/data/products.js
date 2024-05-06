import pipLinesImage from '@public/img/pipe-lines.jpg'
import secondSkinImage from '@public/img/second-skin.jpg'
import aosahaImage from '@public/img/always-on-stay-at-home-assistant.jpg'
import knowItAllImage from '@public/img/know-it-all.jpg'

export const products = [
    {
        slug: 'pipe-lines',
        image: pipLinesImage,
        title: 'Pipe Lines',
        download: '/img/pipe-lines.jpg',
        resources: [
            {
                title: 'YouTube Algorithm Recommends Videos that Violate the Platform\'s Very Own Policies',
                link: 'https://foundation.mozilla.org/en/blog/mozilla-investigation-youtube-algorithm-recommends-videos-that-violate-the-platforms-very-own-policies/',
                source: 'Mozilla Foundation',
            },
            {
                title: 'The Making of a YouTube Radical',
                link: 'https://www.nytimes.com/interactive/2019/06/08/technology/youtube-radical.html',
                source: 'New York Times',
            },
            {
                title: 'Examining Incel Subculture on Reddit',
                link: 'https://gnet-research.org/2022/05/23/examining-incel-subculture-on-reddit/#',
                source: 'Global Network on Extremism and Technology',
            },
        ]
    },
    {
        slug: 'second-skin',
        image: secondSkinImage,
        title: 'Second Skin',
        download: '/img/second-skin.jpg',
        resources: [
            {
                title: 'VR is Here to Stay. Time to Make it Accessible.',
                link: 'https://www.wired.com/story/virtual-reality-accessibility-disabilities/',
                source: 'WIRED',
            },
            {
                title: 'Virtual Reality Has an Accessibility Problem',
                link: 'https://www.scientificamerican.com/blog/voices/virtual-reality-has-an-accessibility-problem/',
                source: 'Scientific American',
            },
            {
                title: 'Why Silicon Valley is Bringing Eugenics Back',
                link: 'https://disconnect.blog/why-silicon-valley-is-bringing-eugenics/',
                source: 'Disconnect',
            },
        ]
    },
    {
        slug: 'always-on-stay-at-home-assistant',
        image: aosahaImage,
        title: 'Always-On-Stay-At-Home Assistant',
        download: '/img/always-on-stay-at-home-assistant.jpg',
        resources: [
            {
                title: 'Experts Warn AI Could Hardwire Sexism Into Our Future ',
                link: 'https://thenextweb.com/news/ai-could-hardwire-sexism-into-the-future',
                source: 'The Next Web',
            },
            {
                title: '\'I\'d Blush if I Could\': Closing Gender Divides in Digital Skills Through Education',
                link: 'https://unesdoc.unesco.org/ark:/48223/pf0000367416',
                source: 'UNESCO',
            },
            {
                title: 'Siri and Cortana Sound Like Ladies Because of Sexism',
                link: 'https://www.wired.com/2015/10/why-siri-cortana-voice-interfaces-sound-female-sexism/',
                source: 'WIRED',
            },
        ]
    },
    {
        slug: 'know-it-all',
        image: knowItAllImage,
        title: 'Know-It-All',
        downlaod: '/img/know-it-all.jpg',
        resources: [
            {
                title: 'What Do We Do About the Biases in AI',
                link: 'https://hbr.org/2019/10/what-do-we-do-about-the-biases-in-ai',
                source: 'Harvard Business Review',
            },
            {
                title: 'Google\'s Photo App Still Can\'t Find Gorillas. And neither can Apple\'s.',
                link: '',
                source: 'New York Times',
            },
            {
                title: 'Uncharted with Hannah Fry: Access Denied',
                link: 'https://www.bbc.co.uk/programmes/m001r1xx',
                source: 'BBC Sounds',
            },
        ]
    },
]

export const additionalResources = [
    {
        title: 'TLDR - Tech Justice Playlist',
        link: 'https://vm.tiktok.com/ZGe9pE7w9/',
        source: 'TikTok',
    },
]

export const getProduct = (searchSlug) => {
    return products.find(product => product.slug === searchSlug)
}