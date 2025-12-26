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
    date: "Nov 20, 2023",
    title:
      "Integrate Firebase Authentication and Real-Time Database into your React Application",
    image:
      "https://miro.medium.com/v2/resize:fit:0/1*a_rKovU94BRpHu3S4Rc_7A.jpeg",
    link: "https://medium.com/@manisht.mt02/integrate-firebase-authentication-and-real-time-database-into-your-react-application-42ce5bf99e21",
  },
  {
    id: 2,
    date: "Jan 18, 2025",
    title: "Navigating the Grid: Solving LeetCode's Minimum Cost Path Problem",
    image:
      "https://miro.medium.com/v2/resize:fit:0/1*osNUGJGH1ktuPb73XGAKEw.png",
    link: "https://medium.com/@manisht.mt02/minimum-cost-path-in-a-grid-leetcode-1368-deep-dive-44589867d196",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "Building a Robust Blog Management Backend with Node.js",
    image:
      "https://miro.medium.com/v2/resize:fit:0/319daec016b12da748373d51bd9d27c727580bba9947096fe89b8e2efb8e03a6",
    link: "https://medium.com/@manisht.mt02/building-a-robust-blog-management-backend-with-node-js-4a0fb8ed0485",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "React Router"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Python"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/manishtmtmt",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://manish-tiwari.netlify.app/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/manisht_mt",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/wdmanisht",
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
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
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
  name: "Projects",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 6,
      name: "ChatWave - A Versatile Real-Time Chat Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      // optional: Finder window position
      children: [
        {
          id: 1,
          name: "ChatWave Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "ChatWave is a real-time chat application built with React and Firebase.",
            "Features include group creation, multi-format messaging (text, voice, images, video), and seamless real-time communication.",
            "Designed with an intuitive interface for effortless user collaboration and engagement.",
          ],
        },
        {
          id: 2,
          name: "chatwave.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://chat-app-15798.web.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "chatwave.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/chatwave.png",
        },
        {
          id: 5,
          name: "Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/manishtmtmt/chat-app",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 7,
      name: "Genius | An AI powered Saas platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Genius.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "An AI-powered SaaS platform built with Next.js, OpenAI, Clerk, Stripe, TypeScript, and MongoDB.",
            "Features include AI chat, image/video/music generation, and code generation with secure authentication.",
            "Integrated with Stripe for subscription management and premium feature access.",
          ],
        },
        {
          id: 2,
          name: "genius.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://genius-two.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "genius.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/genius.png",
        },
        {
          id: 5,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/manishtmtmt/ai-saas",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 8,
      name: "VideoHub: Connect, Collaborate, Communicate",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "VideoHub.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "VideoHub is a real-time video conferencing application built for seamless communication and collaboration.",
            "Features include HD video/audio calls, screen sharing, chat messaging, and virtual meeting rooms for teams and individuals.",
            "Designed with a focus on reliability, security, and an intuitive user experience for both professional and personal use.",
          ],
        },
        {
          id: 2,
          name: "video-meet-app-lemon.vercel.app/",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://video-meet-app-lemon.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "videohub.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/videohub.png",
        },
        {
          id: 5,
          name: "Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/manishtmtmt/video-meet",
          position: "top-60 right-20",
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
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-20 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQE6rrWuSLVunw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713415755500?e=1768435200&v=beta&t=1u2r3nihy6otcdiwd6ESRj8deAA1Zvu8ecjZU5z7Xgg",
      description: [
        "Hey! I’m Manish 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "When I’m not building software, I’m fine-tuning layouts at odd hours, drinking questionable amounts of coffee, and discovering “must-have” tech.",
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
    // {
    //   id: 1,
    //   name: "trash1.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-10 left-10",
    //   imageUrl: "/images/trash-1.png",
    // },
  ],
};

const EXPERIENCE_LOCATION = {
  id: 5,
  type: "experience",
  name: "Experience",
  icon: "/icons/briefcase.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Actyv AI.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      subtitle: "Associate SDE @ Actyv AI",
      description: [
        "Nov 2022 - Sep 2023 · Full-time · Bangalore, India",
        "Actively contributed to multiple projects within the micro-services team, utilizing Node.js, Express.js, Nest.js, and Typescript to deliver robust and scalable solutions.",
        "Proficiently collaborated in creating user interfaces using React, Typescript, Redux, Redux-toolkit, and Ant Design, enhancing the overall user experience.",
        "Engaged in regular code reviews, providing valuable feedback to maintain high code quality and optimize performance.",
      ],
    },
    {
      id: 2,
      name: "Pinaca Technologies.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-40 left-80",
      subtitle: "Software Engineer @ Pinaca Technologies",
      description: [
        "Nov 2023 - May 2024 · Full-time · Chennai, India",
        "Lead frontend development using React and Redux Toolkit for dynamic user interfaces.",
        "Collaborate with cross-functional teams to align development efforts with business objectives.",
        "Integrate Python and Flask for enhancing platform functionalities.",
        "Actively engage in problem-solving to overcome technical challenges and optimize code performance.",
      ],
    },
    {
      id: 3,
      name: "Algorisys Technologies.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-25",
      subtitle: "Software Engineer L1 @ Algorisys Technologies",
      description: [
        "Sep 2024 - Present · Full-time · Mumbai, India",
        "Spearheaded full-stack development of critical internal tools like the Tablet App, WICEL Job Card System, and Sketch Master using Remix, React, Prisma and PostgreSQL strealining workflows in jwelery design and manufacturing.",
        "Engineered robust backends with dual database integration (PostgreSQL + SQL Server), and explored Ubuntu server setup, NGINX configuration and best practices in deployment and data security.",
        "Implemented PDF parsing and LLM-based query systems to extract and process unstructured data, enabling intelligent document analysis and automated workflows.",
        "Took end-to-end ownership of projects, showcasing strong problem-solving skills, cross-functional collaboration, and delivery of production-ready solutions with minimal supervision.",
      ],
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  experience: EXPERIENCE_LOCATION,
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

export const EMAIL_ADDRESS = "manisht.mt.mt@gmail.com";
