import { Language, NavLink, TeamMember, City, SectionId } from './types';

const content: Record<Language, any> = {
  en: {
    navLinks: [
      { id: SectionId.Home, label: 'Home' },
      { id: SectionId.About, label: 'About' },
      { id: SectionId.Events, label: 'Events' },
      { id: SectionId.Exhibit, label: 'Exhibit' },
      { id: SectionId.Innovation, label: 'Innovation' },
      { id: SectionId.Finance, label: 'Business' },
      { id: SectionId.Digital, label: 'Digital' },
      { id: SectionId.Gallery, label: 'Gallery' },
      { id: SectionId.Contact, label: 'Contact' },
    ],
    hero: {
      tagline: 'Bringing Bharat to the World',
      cta: 'Join Our Next Experience',
    },
    about: {
      title: 'About Us',
      intro: "Bharat Roots and Rhythms is a traveling cultural exhibition designed to bring the rich, diverse tapestry of India's heritage to a global audience. We curate immersive experiences that blend tradition with modernity.",
      vision: {
        title: 'Our Vision',
        text: 'To celebrate and showcase India’s diverse cultural heritage, making it accessible and engaging for everyone, everywhere.',
      },
      mission: {
        title: 'Our Mission',
        text: 'To host immersive, theme-based exhibitions featuring authentic performances, hands-on workshops, and traditional art, fostering a deeper connection to Indian culture.',
      },
      teamTitle: 'Our Team',
    },
    events: {
      title: 'Our Events',
      mapIntro: 'An interactive journey through our host cities. Discover where we\'re heading next!',
      componentsTitle: 'Event Components',
      components: [
        { title: 'Live Performances', description: 'Classical and folk dance & music.', icon: 'Music' },
        { title: 'Pop-Up Events', description: 'Holi, Diwali Nights, Yoga Days.', icon: 'Sparkles' },
        { title: 'Destination Miniatures', description: 'Taj Mahal, Temples, Forts.', icon: 'Castle' },
        { title: 'Workshops', description: 'Rangoli, Mehendi, Cooking.', icon: 'Brush' },
      ]
    },
    exhibit: {
        title: "Why Exhibit With Us",
        cta: "Rent a Stall",
        benefits: [
            { title: "High Footfall", description: "Connect with thousands of enthusiastic visitors at each location.", icon: 'Users' },
            { title: "Cultural Shoppers", description: "Engage an audience specifically interested in authentic culture and crafts.", icon: 'ShoppingBag' },
            { title: "Brand Exposure", description: "Showcase your brand within a prestigious, highly-publicized cultural event.", icon: 'Megaphone' },
            { title: "Turnkey Setup", description: "Benefit from our short-term, hassle-free stall setup and logistics.", icon: 'Key' },
            { title: "Revenue Opportunities", description: "Capitalize on direct sales and build a loyal customer base.", icon: 'TrendingUp' }
        ]
    },
    innovation: {
        title: "Innovation & Tech",
        intro: "We merge ancient traditions with cutting-edge technology to create unforgettable experiences.",
        features: [
            { title: "Augmented Reality Zones", description: "Bring ancient stories and artifacts to life through your smartphone.", icon: 'AR' },
            { title: "Virtual Exhibits", description: "Explore our curated collections from anywhere in the world.", icon: 'VR' },
            { title: "Youth Cultural Hackathons", description: "Engaging the next generation to innovate for cultural preservation.", icon: 'Code' },
            { title: "Cultural Passport", description: "A gamified journey to encourage exploration and learning across the exhibition.", icon: 'Passport' }
        ]
    },
    finance: {
        title: "Revenue & Business Model",
        chartTitle: "Projected Financials (Per Event)",
        expensesLabel: "Expenses",
        profitLabel: "Profit",
        incomeTitle: "Income Streams",
        incomeStreams: ["Ticket Sales", "Vendor Stalls", "Paid Workshops", "Sponsorships", "Merchandise Sales"]
    },
    digital: {
        title: "Digital Expansion",
        intro: "Our cultural celebration transcends physical boundaries, reaching a global Indian diaspora and enthusiasts worldwide.",
        features: [
            { title: "Global Virtual Access", description: "Livestreams of key performances and events for our international audience and NRIs.", icon: 'Globe' },
            { title: "Online Workshops", description: "Participate in masterclasses for cooking, art, and music from world-renowned experts.", icon: 'Online' },
            { title: "Exclusive Digital Content", description: "Unlock behind-the-scenes footage, artist interviews, and curated digital art.", icon: 'DigitalContent' },
            { title: "Digital Collectibles & NFTs", description: "Own a piece of cultural history with our limited edition, authenticated digital collectibles.", icon: 'NFT' }
        ]
    },
    gallery: {
      title: 'Gallery',
      intro: 'A glimpse into the vibrant world of Bharat Roots and Rhythms.'
    },
    contact: {
      title: 'Contact Us',
      intro: 'We are always looking for passionate partners, sponsors, and collaborators to join our cultural journey. Reach out to us!',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Partner with Us',
        success: 'Thank you! Your message has been sent.'
      },
      info: {
        email: 'info@bharatrootsandrythms.com',
        phone: '+91 98765 43210'
      }
    }
  },
  hi: {
    navLinks: [
      { id: SectionId.Home, label: 'होम' },
      { id: SectionId.About, label: 'हमारे बारे में' },
      { id: SectionId.Events, label: 'आयोजन' },
      { id: SectionId.Exhibit, label: 'प्रदर्शनी' },
      { id: SectionId.Innovation, label: 'नवाचार' },
      { id: SectionId.Finance, label: 'व्यापार' },
      { id: SectionId.Digital, label: 'डिजिटल' },
      { id: SectionId.Gallery, label: 'गेलरी' },
      { id: SectionId.Contact, label: 'संपर्क' },
    ],
    hero: {
      tagline: 'भारत को दुनिया तक लाना',
      cta: 'हमारे अगले अनुभव में शामिल हों',
    },
    about: {
      title: 'हमारे बारे में',
      intro: 'भारत रूट्स एंड रिदम्स एक यात्रा सांस्कृतिक प्रदर्शनी है जिसे भारत की समृद्ध, विविध विरासत को वैश्विक दर्शकों के सामने लाने के लिए डिज़ाइन किया गया है। हम परंपरा को आधुनिकता के साथ मिलाने वाले गहन अनुभव तैयार करते हैं।',
      vision: {
        title: 'हमारा दृष्टिकोण',
        text: 'भारत की विविध सांस्कृतिक विरासत का जश्न मनाना और उसे प्रदर्शित करना, इसे हर किसी के लिए, हर जगह सुलभ और आकर्षक बनाना।',
      },
      mission: {
        title: 'हमारा लक्ष्य',
        text: 'प्रामाणिक प्रदर्शनों, व्यावहारिक कार्यशालाओं और पारंपरिक कला की विशेषता वाली गहन, थीम-आधारित प्रदर्शनियों की मेजबानी करना, भारतीय संस्कृति से गहरे संबंध को बढ़ावा देना।',
      },
      teamTitle: 'हमारी टीम',
    },
    events: {
      title: 'हमारे आयोजन',
      mapIntro: 'हमारे मेजबान शहरों के माध्यम से एक इंटरैक्टिव यात्रा। जानें कि हम आगे कहाँ जा रहे हैं!',
      componentsTitle: 'आयोजन के घटक',
      components: [
        { title: 'लाइव प्रदर्शन', description: 'शास्त्रीय और लोक नृत्य और संगीत।', icon: 'Music' },
        { title: 'पॉप-अप इवेंट्स', description: 'होली, दिवाली नाइट्स, योग दिवस।', icon: 'Sparkles' },
        { title: 'गंतव्य लघुचित्र', description: 'ताज महल, मंदिर, किले।', icon: 'Castle' },
        { title: 'कार्यशालाएं', description: 'रंगोली, मेहंदी, पाक कला।', icon: 'Brush' },
      ]
    },
    exhibit: {
        title: "हमारे साथ प्रदर्शनी क्यों लगाएं",
        cta: "एक स्टाल किराए पर लें",
        benefits: [
            { title: "उच्च भीड़", description: "प्रत्येक स्थान पर हजारों उत्साही आगंतुकों से जुड़ें।", icon: 'Users' },
            { title: "सांस्कृतिक खरीदार", description: "प्रामाणिक संस्कृति और शिल्प में विशेष रूप से रुचि रखने वाले दर्शकों से जुड़ें।", icon: 'ShoppingBag' },
            { title: "ब्रांड एक्सपोजर", description: "एक प्रतिष्ठित, अत्यधिक प्रचारित सांस्कृतिक कार्यक्रम के भीतर अपने ब्रांड का प्रदर्शन करें।", icon: 'Megaphone' },
            { title: "टर्नकी सेटअप", description: "हमारे अल्पकालिक, परेशानी मुक्त स्टाल सेटअप और लॉजिस्टिक्स से लाभ उठाएं।", icon: 'Key' },
            { title: "राजस्व के अवसर", description: "प्रत्यक्ष बिक्री का लाभ उठाएं और एक वफादार ग्राहक आधार बनाएं।", icon: 'TrendingUp' }
        ]
    },
    innovation: {
        title: "नवाचार और प्रौद्योगिकी",
        intro: "हम अविस्मरणीय अनुभव बनाने के लिए प्राचीन परंपराओं को अत्याधुनिक तकनीक के साथ मिलाते हैं।",
        features: [
            { title: "संवर्धित वास्तविकता क्षेत्र", description: "अपने स्मार्टफोन के माध्यम से प्राचीन कहानियों और कलाकृतियों को जीवंत करें।", icon: 'AR' },
            { title: "आभासी प्रदर्शनियाँ", description: "दुनिया में कहीं से भी हमारे क्यूरेटेड संग्रह का अन्वेषण करें।", icon: 'VR' },
            { title: "युवा सांस्कृतिक हैकाथॉन", description: "सांस्कृतिक संरक्षण के लिए नवाचार करने के लिए अगली पीढ़ी को शामिल करना।", icon: 'Code' },
            { title: "सांस्कृतिक पासपोर्ट", description: "प्रदर्शनी में अन्वेषण और सीखने को प्रोत्साहित करने के लिए एक गेमिफाइड यात्रा।", icon: 'Passport' }
        ]
    },
    finance: {
        title: "राजस्व और व्यापार मॉडल",
        chartTitle: "अनुमानित वित्तीय (प्रति कार्यक्रम)",
        expensesLabel: "खर्च",
        profitLabel: "मुनाफा",
        incomeTitle: "आय के स्रोत",
        incomeStreams: ["टिकट बिक्री", "विक्रेता स्टॉल", "सशुल्क कार्यशालाएं", "प्रायोजन", "व्यापारिक बिक्री"]
    },
    digital: {
        title: "डिजिटल विस्तार",
        intro: "हमारा सांस्कृतिक उत्सव भौतिक सीमाओं को पार करता है, जो दुनिया भर में भारतीय प्रवासियों और उत्साही लोगों तक पहुंचता है।",
        features: [
            { title: "वैश्विक आभासी पहुंच", description: "हमारे अंतरराष्ट्रीय दर्शकों और एनआरआई के लिए प्रमुख प्रदर्शनों और कार्यक्रमों की लाइवस्ट्रीम।", icon: 'Globe' },
            { title: "ऑनलाइन कार्यशालाएं", description: "विश्व प्रसिद्ध विशेषज्ञों से खाना पकाने, कला और संगीत के लिए मास्टरक्लास में भाग लें।", icon: 'Online' },
            { title: "विशेष डिजिटल सामग्री", description: "पर्दे के पीछे के फुटेज, कलाकार साक्षात्कार और क्यूरेटेड डिजिटल कला को अनलॉक करें।", icon: 'DigitalContent' },
            { title: "डिजिटल संग्रहणीय और एनएफटी", description: "हमारे सीमित संस्करण, प्रमाणित डिजिटल संग्रहणीय वस्तुओं के साथ सांस्कृतिक इतिहास का एक टुकड़ा प्राप्त करें।", icon: 'NFT' }
        ]
    },
    gallery: {
      title: 'गेलरी',
      intro: 'भारत रूट्स एंड रिदम्स की जीवंत दुनिया की एक झलक।'
    },
    contact: {
      title: 'हमसे संपर्क करें',
      intro: 'हम अपनी सांस्कृतिक यात्रा में शामिल होने के लिए हमेशा उत्साही भागीदारों, प्रायोजकों और सहयोगियों की तलाश में रहते हैं। हमसे संपर्क करें!',
      form: {
        name: 'आपका नाम',
        email: 'आपका ईमेल',
        message: 'आपका संदेश',
        submit: 'हमारे साथ भागीदार बनें',
        success: 'धन्यवाद! आपका संदेश भेज दिया गया है।'
      },
      info: {
        email: 'info@bharatrootsandrythms.com',
        phone: '+91 98765 43210'
      }
    }
  }
};

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Jennakire Sruthi', title: 'CEO', image: 'https://picsum.photos/seed/ceo/400/400' },
  { name: 'Soma Anisha', title: 'COO', image: 'https://picsum.photos/seed/coo/400/400' },
  { name: 'Krithika', title: 'CIO', image: 'https://picsum.photos/seed/cio/400/400' },
  { name: 'Suraj Goud', title: 'CFO', image: 'https://picsum.photos/seed/cfo/400/400' },
  { name: 'Abhishiek Channe', title: 'CTO', image: 'https://picsum.photos/seed/cto/400/400' },
  { name: 'Harsh Kumar Singh', title: 'CMO', image: 'https://picsum.photos/seed/cmo/400/400' },
];

export const CITIES: City[] = [
  // India
  { name: 'Delhi', country: 'India', x: 450, y: 300 },
  { name: 'Mumbai', country: 'India', x: 380, y: 480 },
  { name: 'Hyderabad', country: 'India', x: 480, y: 550 },
  { name: 'Bengaluru', country: 'India', x: 460, y: 650 },
  { name: 'Kolkata', country: 'India', x: 680, y: 420 },
  { name: 'Chennai', country: 'India', x: 520, y: 680 },
  { name: 'Pune', country: 'India', x: 400, y: 510 },
  // Abroad
  { name: 'Dubai', country: 'Abroad', x: 150, y: 380 },
  { name: 'London', country: 'Abroad', x: 30, y: 150 },
  { name: 'New York', country: 'Abroad', x: 800, y: 200 },
  { name: 'Singapore', country: 'Abroad', x: 950, y: 550 },
];

export const GALLERY_IMAGES: string[] = [
    'https://picsum.photos/seed/gallery1/600/800',
    'https://picsum.photos/seed/gallery2/800/600',
    'https://picsum.photos/seed/gallery3/600/800',
    'https://picsum.photos/seed/gallery4/600/600',
    'https://picsum.photos/seed/gallery5/800/600',
    'https://picsum.photos/seed/gallery6/600/800',
    'https://picsum.photos/seed/gallery7/600/600',
    'https://picsum.photos/seed/gallery8/600/800',
];

export const FINANCE_DATA = [
  { name: "Expenses", value: 1200000, fill: "#4f46e5" }, // Indigo
  { name: "Profit", value: 1797000, fill: "#14b8a6" }, // Peacock Green
];

export default content;