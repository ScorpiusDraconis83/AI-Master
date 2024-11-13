import { BotMessageSquare } from 'lucide-react';
import { BatteryCharging } from 'lucide-react';
import { Fingerprint } from 'lucide-react';
import { ShieldHalf } from 'lucide-react';
import { PlugZap } from 'lucide-react';
import { GlobeLock } from 'lucide-react';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.jpg';
import user4 from '../assets/profile-pictures/user4.jpg';
import user5 from '../assets/profile-pictures/user5.jpg';
import user6 from '../assets/profile-pictures/user6.jpg';

export const navItems = [
  { label: 'Features', href: '#' },
  { label: 'Workflow', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Testimonials', href: '#' },
];

export const testimonials = [
  {
    user: 'John Doe',
    company: 'Stellar AI Solutions',
    image: user1,
    text: 'This AI dev tool has transformed the way we approach projects. The efficiency and insights it offers are unparalleled!',
  },
  {
    user: 'Jane Smith',
    company: 'Blue Horizon AI',
    image: user2,
    text: 'An invaluable asset for our team. The AI-assisted features save us hours, and the intuitive design makes it a pleasure to use.',
  },
  {
    user: 'David Johnson',
    company: 'Quantum Innovations',
    image: user3,
    text: 'A top-notch tool for AI developers. The real-time collaboration and analytics capabilities have boosted our productivity tenfold.',
  },
  {
    user: 'Ronee Brown',
    company: 'Fusion Dynamics',
    image: user4,
    text: 'This platform offers everything we need to streamline our AI development. Highly recommend for any serious AI team!',
  },
  {
    user: 'Michael Wilson',
    company: 'Visionary Creations',
    image: user5,
    text: 'Excellent support and robust features. It’s become an essential part of our workflow for every project.',
  },
  {
    user: 'Emily Davis',
    company: 'Synergy Systems',
    image: user6,
    text: 'I’m impressed by how seamlessly it integrates with our existing tools. A must-have for efficient AI development!',
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: 'AI-Powered Code Suggestions',
    description:
      'Get intelligent code suggestions to speed up development and reduce errors.',
  },
  {
    icon: <Fingerprint />,
    text: 'Secure Code Reviews',
    description:
      'Run secure, AI-assisted code reviews to catch issues before they become problems.',
  },
  {
    icon: <ShieldHalf />,
    text: 'Automated Testing',
    description:
      'Leverage built-in automated testing features for quality assurance without the hassle.',
  },
  {
    icon: <BatteryCharging />,
    text: 'Real-Time Collaboration',
    description:
      'Collaborate live with your team, with real-time updates and shared AI insights.',
  },
  {
    icon: <PlugZap />,
    text: 'Customizable Analytics',
    description:
      'Track performance, identify bottlenecks, and optimize your code with comprehensive analytics.',
  },
  {
    icon: <GlobeLock />,
    text: 'Version Control Integration',
    description:
      'Seamlessly integrate with Git to manage code versions and track changes efficiently.',
  },
];

export const checklistItems = [
  {
    title: 'Seamless Code Merging',
    description:
      'Simplify merges and resolve conflicts with AI-assisted merging tools.',
  },
  {
    title: 'Efficient Code Reviews',
    description:
      'Streamline the review process with AI-driven suggestions and insights.',
  },
  {
    title: 'Reduced Development Time',
    description:
      'Leverage AI assistance to cut down on development time and improve efficiency.',
  },
  {
    title: 'Quickly Share Progress',
    description:
      'Share your work with team members and stakeholders in just a few clicks.',
  },
];

export const pricingOptions = [
  {
    title: 'Free',
    price: '$0',
    features: [
      'Basic AI Assistance',
      '5 GB Storage',
      'Standard Analytics',
      'Public Projects Only',
    ],
  },
  {
    title: 'Pro',
    price: '$15',
    features: [
      'Advanced AI Assistance',
      '50 GB Storage',
      'Enhanced Analytics',
      'Private Projects',
    ],
  },
  {
    title: 'Enterprise',
    price: '$200',
    features: [
      'Full AI Assistance Suite',
      'Unlimited Storage',
      'High-Performance Network',
      'Premium Support',
    ],
  },
];

export const resourcesLinks = [
  { href: '#', text: 'Getting Started' },
  { href: '#', text: 'API Documentation' },
  { href: '#', text: 'Tutorials' },
  { href: '#', text: 'FAQ' },
  { href: '#', text: 'Community Forum' },
];

export const platformLinks = [
  { href: '#', text: 'Features Overview' },
  { href: '#', text: 'Integrations' },
  { href: '#', text: 'System Requirements' },
  { href: '#', text: 'Downloads' },
  { href: '#', text: 'Release Notes' },
];

export const communityLinks = [
  { href: '#', text: 'Developer Events' },
  { href: '#', text: 'Meetups' },
  { href: '#', text: 'Webinars' },
  { href: '#', text: 'Hackathons' },
  { href: '#', text: 'Careers' },
];
