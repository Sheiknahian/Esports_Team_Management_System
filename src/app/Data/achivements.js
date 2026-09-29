import { BsFillTrophyFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";

export const achievements = [
  {
    id: 1,
    title: "VYRON Battle Royale Cup",
    placement: "1st Place",
    year: "2026",
    prizePool: "৳50,000",
    teams: 32,
    location: "Dhaka, Bangladesh",
    icon: <BsFillTrophyFill />,
    image: "/achivement1.jpg",
  },
  {
    id: 2,
    title: "Bangladesh Elite Cup",
    placement: "2nd Place",
    year: "2026",
    prizePool: "৳30,000",
    teams: 16,
    location: "Chattogram, Bangladesh",
    icon: <FaMedal></FaMedal>,
    image: "/achivement2.webp",
  },
  {
    id: 3,
    title: "Free Fire Pro League",
    placement: "3rd Place",
    year: "2025",
    prizePool: "৳20,000",
    teams: 24,
    location: "Dhaka, Bangladesh",
    icon: <FaMedal></FaMedal>,
    image: "/achivement3.png",
  },
];