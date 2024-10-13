import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, tour10, tour12, tour9 } from "../assets";
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
    title: "Kenya open",
    date: "August 20, 2024",
    location: "Paris,France",
    Image: racket2,
  },
  {
    id: "event-2",
    title: "Kusa women",
    date: "September 15, 2024",
    location: "12-13 November",
    Image: racket,
  },
  {
    id: "event-3",
    title: "MERCAVI TOUR",
    date: "October 5, 2024",
    location: "public service, upperhill",
    Link: '/Mercavi',
    Image: racket3,
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
    img: tour12,
  },
  {
    id: "jane smith",
    content:
      "With 8 years of experience, I am an ITF Level 1 certified tennis coach, working from 6 AM to 6:30 PM, helping players of all levels.",
    name: "Petty Andanda",
    title: "Tennis Coach",
    img: tour9,
  },
  {
    id: "expert-3",
    content:
      "The High tennis Sports Academy offers a comprehensive training program for aspiring athletes, focusing on skills development and competition preparation. Our tennis academy offers private and group lessons for players of all ages and skill levels.",
    name: "HYBRIDSPORTSACADEMY",
    title: "HighbridSports",
    img: tour10,
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
      { name: "Home page", link: "/" },
      { name: "Coaches", link: "/coaches" },
      { name: "Academies", link: "/Academies" },
      { name: "Players", link: "/Players" },
      { name: "Tournaments", link: "/Events" },
    ],
  },
  {
    title: "About Us",
    links: [
      {
        name: "Hybrid Sports Academy (HSA) is a premier sports academy specializing in Tennis and Padel player development. Our mission is to nurture young talent, provide holistic training, and support busy parents in their child's athletic journey.",
        link: "/about",
      },
      { name: "Location: Nairobi, Kenya", link: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Player Development Program", link: "/services/player-development" },
      { name: "Player Management", link: "/services/player-management" },
    ],
  },
];

export const socialMedia = [
  { id: "social-media-1", icon: instagram, link: "https://www.instagram.com/" },
  { id: "social-media-2", icon: facebook, link: "https://www.facebook.com/" },
  { id: "social-media-3", icon: twitter, link: "https://www.twitter.com/" },
  { id: "social-media-4", icon: linkedin, link: "https://www.linkedin.com/" },
];

export const clients = [
  { id: "client-1", logo: airbnb },
  { id: "client-2", logo: binance },
  { id: "client-3", logo: coinbase },
  { id: "client-4", logo: dropbox },
];

// Footer component layout
const Footer = () => (
  <div className="bg-gray-900 text-white py-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            {footerLinks[0].links.map((link, index) => (
              <li key={index}>
                <Link to={link.link} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p>
            Hybrid Sports Academy (HSA) is a premier sports academy specializing
            in Tennis and Padel player development. Our mission is to nurture
            young talent, provide holistic training, and support busy parents in
            their child's athletic journey.
          </p>
          <p className="mt-2">Location: Nairobi, Kenya</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            {footerLinks[2].links.map((link, index) => (
              <li key={index}>
                <Link to={link.link} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
