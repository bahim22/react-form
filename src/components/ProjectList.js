import card from '../assets/himacard.png';
import ism from '../assets/ismPic.webp';
import ism2 from '../assets/ismHome.png';
import bg7 from '../assets/bg7.jpg';
import bb from '../assets/bbman.png';
import mapPro from '../assets/MapProject.png';

// props = {image, link, title, description};

const ProjectList = [
	{
		title: 'Next.js Blog',
		id: 'nb',
		subtitle: 'DioBlog',
		description: 'React based JS website with custom styling and tool config.',
		// image: 'assets/images/ismPic.webp',
		image: { ism },
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'Next.js Boilerplate',
		id: 'nt',
		subtitle: 'Next-ded-boiler',
		description: 'React based JS website with custom styling and tool config.',
		image: { card },
		// image: '../public/himacard.png',
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'Next.js TailwindCss App',
		subtitle: 'next-tail-22',
		id: 'ntw',
		description: 'Next.js App from Vercel Template to work on building larger Apps.',
		// image: './assets/images/ismHome.png',
		image: { bg7 },
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'React.js Boilerplate',
		subtitle: 'react-ded-boiler',
		id: 'rb',
		description: 'Reusable boilerplate skeleton for React.js projects.',
		// image: '../public/logo512.png',
		image: { bb },
		link: 'https://github.com/bahim22/react-ded-boiler',
	},
	{
		title: 'React.js Azure Authorization',
		subtitle: 'auth-react-azure',
		id: 'raz',
		description: 'React App with TypeScript using Azure AD to authenticate users.',
		// image: '../public/purp9.png',
		image: { mapPro },
		link: 'https://github.com/bahim22/auth-react-azure',
	},
	{
		title: 'MERN Stack',
		subtitle: 'gullo-db',
		id: 'mern1',
		description: 'React based JS website with custom styling and tool config.',
		image: './assets/images/himaPropng.png',
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'Mern FullStack Dashboard',
		subtitle: 'menan-ded',
		description: 'React based JS website with custom styling and tool config.',
		image: 'public/purp9.pngd',
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'Inner Sity Market',
		subtitle: 'ism',
		id: 'ism',
		description: 'HTML, CSS, Bootstrap website for an advertising company.',
		// image: './assets/images/ismHome.png',
		image: { ism2 },
		link: 'https://github.com/bahim22/ism',
	},
	{
		title: 'Prisma GraphQL API',
		subtitle: 'waves-prisma',
		description: 'Prisma GraphQL API using MongoDb.',
		image: '/public/purp9.png',
		link: 'https://github.com/bahim22/waves-prisma',
	},
	{
		title: 'Athena',
		id: 'ath',
		subtitle: 'Athena',
		description: 'React based JS website with custom styling and tool config.',
		image: './assets/images/ismHome.png',
	},
	{
		title: 'Ded-py',
		subtitle: 'Ded-py',
		id: 'py',
		description: 'React based JS website with custom styling and tool config.',
		image: './assets/images/ismHome.png',
	},
];
export default ProjectList;

/* export const progressProjects = [
	{
		title: 'Athena',
		id: 'ath',
		subtitle: 'Athena',
		description: 'React based JS website with custom styling and tool config.',
		image: './assets/images/ismHome.png',
	},
	{
		title: 'Ded-py',
		subtitle: 'Ded-py',
		id: 'py',
		description: 'React based JS website with custom styling and tool config.',
		image: './assets/images/ismHome.png',
	},
] */

/* export const futureProjects = [
	{
		title: 'Marketing and Comms for NPOs',
		Info: 'Fullstack Mern Web App',
	},
	{
		title: 'Mern Workout Scheduler',
		Info: 'AzureCosmosDB',
	},
	{
		title: 'Next.js Business Analytics',
		Info: 'Progressive Web App',
	},
] */

export const projInfo =
	'I initially started developing Python Projects with Django.Then I transitioned to building websites with HTML and CSS3, eventually  implementing bootstrap packages with pre-built minified JavaScript for interactivity. I improved my vanilla JavaScript skills and learned ES6 and TypeScript and was able to start developing React.js and Next.js Web Apps. I was able to learn how to configure my toolchain and start building JAMstack Apps. I am currently building Full-Stack projects using multiple frameworks, libraries,and packages.';
