import randol from '../assets/projects-randol-rn.png';
import leon from '../assets/leon-agency.png';
import kasper from '../assets/Kasper.png';
import dental from '../assets/Dental-Store.png';
import wallet from '../assets/online-wallet.png';
import furniture from '../assets/furniture.png';

const projectData = [
    {
        id:0,
        img:furniture,
        name:'Furniture Home',
        skills:[
            'React',
            'JavaScript',
            'SASS',
            'Bootstrap',
            'Rest API',
        ],
        repo:'https://github.com/omarfarids/Furniture-House',
        deployment:'https://furniture-home.netlify.app/'
    },
    {
        id:1,
        img:wallet,
        name:'Online wallet',
        skills:[
            'React',
            'SASS',
            'JavaScript',
        ],
        repo:'https://github.com/omarfarids/online-wallet',
        deployment:'https://omarfarids.github.io/online-wallet/'
    },
    {
        id:2,
        img:leon,
        name:'Leon agency',
        skills:[
            'HTML',
            'CSS',
            'JavaScript',
        ],
        repo:'https://github.com/omarfarids/Leon-agancy',
        deployment:'https://omarfarids.github.io/Leon-agancy/'
    },
    {
        id:3,
        img:dental,
        name:'Dental store',
        skills:[
            'HTML',
            'CSS',
            'JavaScript',
        ],
        repo:'https://github.com/omarfarids/Dental-store',
        deployment:'https://omarfarids.github.io/Dental-store/'
    },
    {
        id:4,
        img:kasper,
        name:'kasper designs template',
        skills:[
            'HTML',
            'CSS',
            'JavaScript',
        ],
        repo:'https://github.com/omarfarids/kasper-designing-template',
        deployment:'https://omarfarids.github.io/kasper-designing-template/'
    },
    {
        id:5,
        img:randol,
        name:'Randol styling catalog',
        skills:[
            'HTML',
            'CSS',
            'JavaScript',
        ],
        repo:'https://github.com/omarfarids/Randol-styling-catalog-template',
        deployment:'https://omarfarids.github.io/Randol-styling-catalog-template/'
    },
]

export default projectData;