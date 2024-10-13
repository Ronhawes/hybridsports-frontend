import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, tour10, tour12, tour9, tour11, tour14, tour15  } from "../assets";
import { Link } from 'react-router-dom';
import { racket2, racket3, racket } from "../assets";

export const navLinks = [
  { id: "home", title: "Home", link: "/" },
  { id: "coaches", title: "Coaches", link: "/coaches" },
  { id: "events", title: "Events", link: "/Events" },
  { id: "players", title: "Players", link: "/Players" },
  { id: "courts", title: "Courts", link: "/Courts" },
  { id: "services", title: "Our Services", link: "/Events" },
  { id: "tournaments", title: "Tournaments", link: "/Mercavi" },
  { id: "academies", title: "Academies", link: "/Academies" },
];


export const ongoingEvents = [
  {
    id: "event-1",
    
    title: "National Junior circuit ",
    date: "26th october",
    location: "Ace Padel , Aghakhan",
    Image: tour15 
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
      "I am a gym instructor with a diploma in fitness and wellness. I am based in Ongata Rongai and work 7-8 hours a day, helping clients achieve their fitness goals.",
    name: "Stella kanyi",
    title: "Gym Instructor",
    img: tour14,
  },
  {
    id: "jane smith",
    content:
      "With 8 years of experience, I am an ITF Level 1 certified tennis coach, working from 6 AM to 6:30 PM, helping players of all levels.",
    name: "Petty Andanda",
    title: "Tennis Coach",
    img: tour11,
  },
  {
    id: "expert-3",
    content:
      "The High tennis Sports Academy offers a comprehensive training program for aspiring athletes. ",
    name: "HYBRIDSPORTSACADEMY",
    title: "HighbridSports",
    img: tour12,
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
        name: "Home page",
        link: "/",
      },
      {
        name: "Coaches",
        link: "/coaches",
      },
      {
        name: "Academies",
        link: "/Academies",
      },
      {
        name: "Players",
        link: "/Players",
      },
      {
        name: "Tournaments",
        link: "/Events"
      },
    ],
  },
  {
    title: "About Us",
    links: [
      {
        name: "Location: Nairobi, Kenya",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: ["Hybrid Sports Academy (HSA) is a premier sports",
               "academy specializing in Tennis and Padel player" , 
               " development. Our mission is to nurture young talent,", 
               " provide holistic training, and support busy parents ",
               "in their childs athletic journey."],

        link: "https://www.hoobank.com/partners/",
      },
     
    ],
  },
  {
    title: "Services",
    links: [
      {
        name: "Player Development Program",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Player Management",
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