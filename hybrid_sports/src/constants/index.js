import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";
import { Link } from 'react-router-dom';
import { racket2, racket3, racket } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link:"/",
  },
  
  {
    id: "product",
    title: "Coaches ",
    link: "/coaches"
  },
  {
    id: "academies",
    title: "Academies",
    link: "/Academies"
  },
  
  {
    id: "Mercavi",
    title: "Events",
    link: "/Events"
  },
  
];

export const ongoingEvents = [
  {
    id: "event-1",
    
    title: "Kenya open",
    date: "August 20, 2024",
    location: "Paris,France",
    Image: racket2
  },
  {
    id: "event-2",
    
    title: "Kusa women",
    date: "September 15, 2024",
    location: "12-13 November",
    Image: racket
  },
  {
    id: "event-3",
    
    title: "MERCAVI TOUR",
    date: "October 5, 2024",
    location: "public service, upperhill",
    Link:'/Mercavi',
    Image: racket3
  },
]; 

export const features = [
  {
    id: "feature-1",
    
    title: "Upcoming Events",
    content: "Stay updated on the latest sports events in your area and participate in competitions.",
  },
  {
    id: "feature-2",
    
    title: "Find Coaches",
    content: "Connect with experienced coaches to enhance your skills and performance.",
  },
  {
    id: "feature-3",
    
    title: "Join Academies",
    content: "Explore various sports academies for structured training and mentorship.",
  },
];

export const feedback = [
  {
    id: "expert-1",
    content:
      "Looking for a great coach to enhance your skills? Coach John Doe specializes in sports psychology and performance training.",
    name: "Coach Ann",
    title: "Sports Psychologist & Performance Coach",
    img: people01,
  },
  {
    id: "expert-2",
    content:
      "Trainer Mark mabonga focuses on strength and conditioning. he has helped countless athletes achieve their personal bests.",
    name: "Trainer Mark Mabonga",
    title: "Strength & Conditioning Coach",
    img: people02,
  },
  {
    id: "expert-3",
    content:
      "The High tennis Sports Academy offers a comprehensive training program for aspiring athletes, focusing on skills development and competition preparation.",
    name: "High tennis Academy",
    title: "Training & Development",
    img: people03,
  },
];
export const stats = [
  {
    id: "stats-1",
    title: "Active Athletes",
    value: "3,800+",
  },
  {
    id: "stats-2",
    title: "Coaches Registered",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Events Held",
    value: "1,500+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];