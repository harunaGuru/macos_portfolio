const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Libraries",
    items: ["Redux", "Tanstack Query", "React Router", "React Hook Form"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Sass", "CSS", "Shadcn", "Boostrap", "Material UI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Postman", "Vite"],
  },
  {
    category: "Others",
    items: [
      "Axios",
      "SWR",
      "SEO",
      "Accessibilty",
      "Web Performance",
      "Framer Motion",
      "GSAP",
    ],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/harunaGuru",
  },
  // {
  //   id: 2,
  //   text: "Platform",
  //   icon: "/icons/atom.svg",
  //   bg: "#4bcb63",
  //   link: "https://jsmastery.com/",
  // },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/HDaudq",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/haruna-oladipupo-dauda",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gala1.jpg",
  },
  {
    id: 2,
    img: "/images/gala3.jpg",
  },
  {
    id: 3,
    img: "/images/gala2.png",
  },
  {
    id: 4,
    img: "/images/gala4.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Easy Parity Deals Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "easy ppp.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Easy PPP is a streamlined, modern platform inspired by Parity Deals, built to help sellers automate and manage location-based discounts with ease.",
            "Rather than a basic subscription tool, it offers a full ecosystem—secure authentication, smart product management, customizable banners, and automated discount delivery based on customer location.",
            "Think of it as a plug-and-play pricing assistant that works quietly in the background of any website, showing the right discount to the right visitor at the right time.",
            "The platform includes Clerk-powered social and passwordless authentication, subscription tiers via Stripe, and auto-generated scripts sellers can embed to display dynamic discounts to their users.",
            "Sellers also get access to a detailed analytics dashboard, tracking visitor activity by day, week, month, year, and even by parity groups.",
            "Built with Next.js, TypeScript, Clerk, Stripe, and TailwindCSS, it delivers fast performance, clean UI, and a seamless experience for both sellers and their customers.",
          ],

          // description: [
          //   "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
          //   "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
          //   "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
          //   "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          // ],
        },
        {
          id: 2,
          name: "easy-pppp.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://easy-pppp.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "easy-pppp.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/easy-ppp2.png",
        },
        {
          id: 4,
          name: "easy-pppp-subscription.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-20",
          imageUrl: "/images/easy-ppp.png",
        },
        {
          id: 5,
          name: "github repo",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/harunaGuru/Easy-PPP",
          position: "top-40 right-60",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "GSAP Animated Landing",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "GSAP-landing-page.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          // description: [
          //   "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
          //   "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
          //   "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
          //   "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          // ],
          description: [
            "This GSAP-powered landing page is a high-performance, visually striking experience built to showcase modern animation at its best.",
            "Instead of a simple static page, it delivers dynamic motion with complex timeline animations, smooth scroll-triggered effects, and immersive hover interactions.",
            "Think of it like stepping into a cinematic intro sequence—every scroll, hover, and movement responds with fluid, engaging transitions.",
            "It's built with React, Next.js, TailwindCSS, and GSAP, ensuring fast performance, responsive design, and animations that feel polished and premium.",
          ],
        },
        {
          id: 2,
          name: "award-wining-landing-page.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://award-wining-landing-page.netlify.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "award-winning-landing-page.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/landing-page.png",
        },
        {
          id: 5,
          name: "github repo",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/harunaGuru/awward-wining-landing-page",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Agency AI Landing Page",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Agency AI.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          // description: [
          //   "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
          //   "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
          //   "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
          //   "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
          // ],
          description: [
            "This AI agency landing page is a smooth, modern experience designed to showcase innovation through clean visuals and fluid motion.",
            "Instead of a simple promotional page, it brings the brand to life with scroll-based animations, interactive elements, and a responsive layout that feels engaging on any device.",
            "Think of it like stepping into a futuristic workspace—every movement, from the floating cursor to the light and dark transitions, feels intentional and immersive.",
            "It's built with React, Framer Motion, and TailwindCSS, ensuring crisp animations, fast performance, and a polished, professional look throughout.",
          ],
        },
        {
          id: 2,
          name: "agency-ai-service.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://agency-ai-service.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github repo",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/harunaGuru/Agency-ai/tree/main",
          position: "top-60 right-20",
        },
        {
          id: 4,
          name: "agency-ai-service.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/agency-ai.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },
    // Project 4
    {
      id: 8,
      name: "A Simple Postman Clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-80",
      windowPosition: "top-[48vh] left-7",
      children: [
        {
          id: 1,
          name: "postman.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This Postman-style web app is a clean and efficient tool designed for testing and managing API requests with ease.",
            "It offers a complete workflow—environment variable management and a clear request/response view that makes debugging more intuitive.",
            "Think of it like having a lightweight Postman right in your browser—fast, focused, and built for developers who want simplicity without losing power.",
            "It's built with React, JavaScript, Vite, and CodeMirror, ensuring smooth performance, a responsive UI, and an efficient coding and debugging experience.",
          ],
        },
        {
          id: 2,
          name: "postman-clone.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://hod-postman-clone.netlify.app",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github repo",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/harunaGuru/postman-clone",
          position: "top-60 right-20",
        },
        {
          id: 4,
          name: "postman-clone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/postman.webp",
        },
      ],
    },
    // project 5
    {
      id: 10,
      name: "Netflix Clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-80 right-80",
      windowPosition: "top-[61vh] left-9",
      children: [
        {
          id: 1,
          name: "netflixClone.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This Netflix-style streaming interface is a sleek and immersive platform built for browsing and discovering movies with ease.",
            "Instead of a simple movie list, it delivers a cinematic experience with dynamic categories, interactive previews, and smooth profile switching.",
            "Think of it like stepping into your own personalized streaming hub—four unique profiles, custom recommendations, and hover-triggered previews that bring each title to life.",
            "It's built with React, Vite, TailwindCSS, HeadlessUI, Firebase authentication, and the TMDb API to ensure fast performance, secure login, and a clean, modern viewing experience.",
          ],
        },
        {
          id: 2,
          name: "netfllix.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://netfllix-app-hod.netlify.app",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github repo",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/harunaGuru/netflix-clone",
          position: "top-60 right-20",
        },
        {
          id: 4,
          name: "neftlix-clone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/netflix-project.png",
        },
      ],
    },
    // project 6
    {
      id: 11,
      name: "E-commerce Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-86 left-80",
      windowPosition: "top-[31vh] left-53",
      children: [
        {
          id: 1,
          name: "E-commerce.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This e-commerce website is a clean and modern shopping platform designed to make browsing and buying products simple and intuitive.",
            "Instead of a basic online store, it delivers a smooth experience with organized product displays, responsive layouts, and a fully integrated cart system.",
            "Think of it like stepping into a neatly arranged boutique, everything feels structured, accessible, and easy to navigate from any device.",
            "It's built with React, Vite, Material UI, Redux, Emotion CSS, and Firebase authentication, ensuring fast performance, secure login, and a polished, user-friendly interface.",
          ],
        },
        {
          id: 2,
          name: "ecomm.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://hod-ecomm.netlify.app",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github repo",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/harunaGuru/e-commerce",
          position: "top-60 right-20",
        },
        {
          id: 4,
          name: "ecomm.netlify.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/ecommerce-project.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/splash2.jpg",
    },
    // {
    //   id: 2,
    //   name: "casual-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-28 right-72",
    //   imageUrl: "/images/adrian-2.jpg",
    // },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/adrian-3.jpeg",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/splash2.jpg",
      description: [
        "Hey! I’m Haruna 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, Next.js and Typescript and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "When I’m not building web apps, I like exploring new tech trends, refining UI ideas, and tinkering with animations. Offline, I enjoy movies, games, and taking long walks to unwind and reset",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
