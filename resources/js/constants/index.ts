import { BookDashed } from "lucide-react";
import path from "path";

export const COURSES = [
    {
        title: 'Bachelor of Commerce (B.Com)',
        text: 'Bachelor of Commerce',
        description: '',
        duration: 4,
        image: '',
        specializations: [
            "Finance & Taxations",
            "Marketing",
            "Logistics & Management",
            "Accounting",
        ],
        eligibility: '+2 or Equivalent Course',
        link: '/',
        path: '/Course/BCOM'
    },
    {
        title: 'BA English',
        text: 'BA English',
        image: '',
        description: '',
        specializations: [
            "Media Studies",
            "Film Studies"
        ],
        duration: 4,
        eligibility: '+2 or Equivalent Course',
        link: '/',
        path: '/Course/BA'
    },
    {
        title: 'Bachelor of Computer Application (BCA)',
        text: 'Bachelor of Computer Application',
        description: '',
        image: '',
        duration: 4,
        eligibility: '+2 or Equivalent Course',
        link: '/',
        path: '/Course/BCA'
    },
    {
        title: 'MSW',
        text: 'MSW',
        description: '',
        duration: 2,
        image: '',
        eligibility: 'Degree course',
        link: '/',
        path: '/Course/MSW'
    },
    {
        title: 'Msc Psychology',
        text: 'Msc Psychology',
        description: '',
        duration: 2,
        image: '',
        eligibility: 'Degree course',
        link: '/',
        path: '/Course/MscPsychology'

    }, {
        title: 'Msc Artificial Intelligence (AI)',
        text: 'Msc Artificial Intelligence (AI)',
        description: '',
        duration: 2,
        image: '',
        eligibility: 'Degree course',
        link: '/',
        path: '/Course/MscAi'
    },
    {
        title: 'BSW',
        text: 'BSW',
        description: '',
        duration: 4,
        image: '',
        eligibility: '+2 or Equivalent Course',
        link: '/',
        path: '/Course/BSW'
    },
    {
        title: 'Bsc Psychology',
        text: 'Bsc Psychology',
        description: '',
        duration: 4,
        image: '',
        eligibility: '+2 or Equivalent Course',
        link: '/',
        path: '/Course/BscPsychology'
    },
]
export const AddedDeps = [
    {
        text: '*Four Year UG Programmes',
        path: '/Administration/FYUGProgrammes',
        description: ''
    },
    // {
    //     text: 'NSS',
    //     path: '/Activities/NSS',
    //     description: ''
    // }
]
export const HOMECENTERS = [
    {
        text: 'My Prayer Room',
        image: 'prayer',
        desc: "A serene sanctuary on campus, our inclusive prayer room offers solace to all students, regardless of their background, providing a tranquil space for reflection and rejuvenation during moments of mental strain."
    },
    {
        image: 'ed',
        text: 'ED Club',
        desc: "The Entrepreneurship Development (ED) Club at our college fosters a culture of innovation and ambition among students, empowering them to explore their entrepreneurial potential through workshops, networking events, and mentorship opportunities."
    },
    {
        image: 'caps',
        text: 'CAPS- Centre for Academic and Professional Support',
        desc: "The Academic and Professional Support Centre at our college serves as a cornerstone for student success and teacher empowerment, offering tailored guidance, resources, and workshops to enhance academic performance, career readiness, and personal development."

    }, {
        image: 'ai',
        text: 'Centre for Artificial Intelligence',
        desc: "At the forefront of innovation, our Artificial Intelligence Center serves as a hub for cutting-edge research, education, and collaboration, driving advancements in AI technology and empowering students to shape the future through hands-on learning and exploration."
    }
    , {
        image: 'health',
        text: 'Centre for Counselling and Health services',
        desc: "Our Counselling and Health Services Centre provides a confidential and supportive environment for students to address mental health concerns, offering a range of resources, therapy sessions, and wellness programs to promote holistic well-being and academic success."

    }
    , {
        image: 'social',
        text: 'Centre for Social Action',
        desc: "The Centre for Social Action at our college is a catalyst for positive change, empowering students to engage with pressing societal issues through volunteerism, advocacy, and community outreach programs, fostering a culture of compassion and social responsibility."

    }
    , {
        image: 'charity',
        text: 'Centre for Charity Works',
        desc: "At our college, the Centre for Charity Works is a beacon of compassion, dedicated to supporting marginalized communities through philanthropic initiatives, fundraising efforts, and volunteer projects, embodying our commitment to creating a more equitable and compassionate society."
    }
    ,
    , {
        image: 'placement',
        text: 'Centre for Placements and Career counselling & Guidance',
        desc: "The Centre for Career Counselling, Guidance, and Placements at our college is a dynamic resource hub, providing personalized guidance, skills development workshops, and networking opportunities to empower students in navigating their career paths successfully. Through tailored support and industry connections, we aim to facilitate meaningful career transitions and foster lifelong professional growth."
    }
    ,
    , {
        image: 'publication',
        text: 'Centre for Publications',
        desc: "The Centre for Publications, specializing in journals, at our college is a vital platform for scholarly dissemination and academic exchange. Through rigorous peer review and editorial oversight, we curate high-quality publications that contribute to the advancement of knowledge across various disciplines, fostering intellectual dialogue and innovation within our academic community."

    },
    , {
        image: 'arts',
        text: 'Centre for Arts & Culture',
        desc: "The Centre for Arts and Culture at our college is a vibrant hub celebrating creativity and diversity.Through exhibitions, various sports and game activities, performances, workshops, and cultural events. we enrich the campus community with opportunities for artistic expression and exploration,fostering a deeper appreciation for the arts and promoting cross-cultural understanding and engagement."
    },
    {
        image: 'teacher',
        text: 'Centre for Teacher learning Enhancement',
        desc: "The Teacher Learning Enhancement Centre at our college is dedicated to fostering continuous professional development among educators. Through workshops, seminars, mentoring, and access to educational resources, we empower teachers to refine their pedagogical skills, stay abreast of the latest teaching methodologies, and create enriching learning experiences for their students."
    },
    {
        image: 'addon',
        text: 'Centre for Addon Courses ',
        desc: "The Center for Add-on Courses at our college offers supplementary learning opportunities to students, enhancing their academic and professional skills beyond their core curriculum. Through a diverse range of courses, workshops, and certifications, we empower students to broaden their knowledge base, explore new interests, and develop valuable competencies to thrive in their chosen fields."


    },
    {
        image: 'prism',
        text: 'PRISM ',
        desc: "Porukara Research, Innovation, and Social Action Mentoring (PRISM) at our college serves as a catalyst for impactful change. Through mentorship, collaboration, and resources, we empower students and faculty to pursue cutting-edge research, develop innovative solutions, and engage in meaningful social action initiatives that address pressing societal challenges, fostering a culture of academic excellence and community impact."

    },
    {
        image: 'kuttanadu',
        text: 'My Kuttanadu ',
        desc: "The Kuttanadu Community Engagement Centre at our college is dedicated to initiating and coordinating meaningful activities within the local region. Through partnerships with community organizations, grassroots initiatives, and student-led projects, we aim to address the unique needs and challenges of the Kuttanadu area, fostering sustainable development, social cohesion, and positive change within the community."
    },
    {
        image: 'nature',
        text: 'Nature Club',
        desc: "The Nature Club at our college is a vibrant community of environmentally conscious individuals dedicated to promoting appreciation for the natural world. Through outdoor excursions, conservation projects, and educational events, we inspire stewardship and advocate for sustainable practices, fostering a deeper connection with nature and a commitment to environmental conservation among students and faculty alike."
    },
];
export const ACTIVITIES = [
    {
        title: 'National Service Scheme (NSS)',
        text: 'National Service Scheme (NSS)',
        path: '/Activities/NSS',
        description: '',
        desc: 'We have a well organized NSS wing. Students who are interested in public services can join NSS unit of the college.This helps the students to improve their  attitude towards doing	public services.NSS	improves	the	student\'s	self	confi-dence in order to attain a good discipline in their life NSS with a motto \'Not Me, But you’, ‘Healthy Youth for Healthy India\', is a voluntary association of students functions '
    },
    {
        title: 'Women Cell',
        text: 'Women Cell',
        description: '',
        path: '/Activities',
        desc: 'The women cell functions for the overall development and empowerment of women community in this college. College conducts events in connection with the women’s day celebrations and this is followed by classes rendered by great personalities.'
    },
    {
        title: 'Placement cell',
        text: 'Placement cell',
        description: '',
        path: '/Activities',
        desc: 'A placement cell is functioning to assist students in  preparing for a  better future. The centre provides support to the students through  career counseling, workshops, mock interview training, internships and industrial visits and also on campus placements for jobs '
    },
    {
        title: 'SC/ST Cell Equal Opportunities Cell',
        description: '',
        text: 'SC/ST Cell Equal Opportunities Cell',
        path: '/Activities',
        desc: 'This cell monitors various schemes of the Universities and	Government	for	the	welfare	of	the	SC/ST	students.'
    },
    {
        title: 'Parent Teacher Association',
        description: '',
        text: 'Parent Teacher Association',
        path: '/Activities',
        desc: 'Every	parent/Guardian	of	a	student	on	rolls	become	a member of the association. The association takes special interest in the development of the college and renders every possible help to the management and teachers for the smooth running of the college.'
    },
];
export const ADDONCOURSES = [
    {
        text: 'Certification in AI',
        description: '',
        path: '/AddonCourses',
        category: 'computer',
        image: 'https://mykuttanadu.s3.us-west-1.amazonaws.com/ai.jpg'
    },
    {
        text: 'Certification in Python',
        description: '',
        category: 'computer',
        path: '/AddonCourses',
        image: 'https://mykuttanadu.s3.us-west-1.amazonaws.com/pythonfeature.png'
    },
    {
        text: 'Advanced Excel',
        description: '',
        path: '/AddonCourses',
        category: 'computer',
        image: 'https://mykuttanadu.s3.us-west-1.amazonaws.com/Advanced-Excel.jpg'
    },
    {
        text: 'Certification in Office Administration',
        description: '',
        path: '/AddonCourses',
        category: 'resource',
        image: 'https://mykuttanadu.s3.us-west-1.amazonaws.com/office+administration.jpg'
    },
    {
        text: 'Logistics Management',
        description: '',
        path: '/AddonCourses',
        category: 'resource',
        image: 'https://mykuttanadu.s3.us-west-1.amazonaws.com/logisstics+management.jpg'
    },
    {
        text: 'Certification in Robotics',
        description: '',
        path: '/AddonCourses',
        category: 'computer',
        image: 'https://mykuttanadu.s3.us-west-1.amazonaws.com/robotics.jpg'
    },
    {
        text: 'German',
        category: 'language',
        description: '',
        path: '/AddonCourses',
        image: 'https://mykuttanadu.s3.us-west-1.amazonaws.com/german.jpg'
    },
    {
        text: 'Spanish',
        category: 'language',
        description: '',
        path: '/AddonCourses',
        image: 'https://mykuttanadu.s3.us-west-1.amazonaws.com/spanish.webp'
    },
    {
        text: 'French',
        description: '',
        category: 'language',
        path: '/AddonCourses',
        image: 'https://mykuttanadu.s3.us-west-1.amazonaws.com/french.jpg'
    },
    {
        text: 'Spoken English',
        description: '',
        category: 'language',
        path: '/AddonCourses',
        image: 'https://mykuttanadu.s3.us-west-1.amazonaws.com/spoken+english.jpg'
    },
    {
        text: 'Certificate course in Drone Technology',
        description: '',
        category: 'computer',
        path: '/AddonCourses',
        image: 'https://mykuttanadu.s3.us-west-1.amazonaws.com/drone+technology.webp'
    },
];
export const USER_NAVLINKS = [
    {
        text: 'Home',
        path: '/',
        submenu: []
    },
    {
        text: 'Departments',
        path: '/Departments',
        submenu: [
            ...COURSES,
            ...AddedDeps
        ]
    },
    {
        text: 'About Us',
        path: '/AboutCollege',
        submenu: [
            {
                text: 'Overview',
                description: 'Explore Our Departments',
                path: '/AboutCollege',
            },
            {
                text: 'Founder',
                description: '',
                path: '/AboutCollege/Founder',
            },
            {
                text: 'Our Patron',
                description: '',
                path: '/AboutCollege/OurPatron',
            },
            {
                text: 'Pricipal\'s Message',
                description: '',
                path: '/AboutCollege/Principal',
            },
            {
                text: 'CMI Education Policy Statement',
                description: '',
                path: '/AboutCollege/EducationPolicyStatement',
            },
            {
                text: 'Management',
                description: '',
                path: '/AboutCollege/Management',
            },
            {
                text: 'Our Torch Bearers',
                path: '/Administration/OurTorchBearers',
                description: ''
            },
        ]
    },
    {
        text: 'Faculty',
        path: '/Administration/Faculty',
        submenu: []
    },
    {
        text: 'Students',
        path: '/RulesRegulations',
        submenu: [
            {
                text: 'Rules & Regulations',
                description: '',
                path: '/RulesRegulations',
            },
            {
                text: 'Students Conselling',
                description: '',
                path: '/StudentCounselling',
            },
            {
                text: 'Leave Application',
                description: '',
                path: '/LeaveApplication',
            }
        ]
    },
    {
        text: 'Activities',
        path: '/Activities',
        submenu: [
            ...ACTIVITIES
        ]
    },
    {
        text: 'AICTE Career Portal',
        path: '',
        submenu: []
    },
    {
        text: 'Addon Courses',
        path: '/AddonCourses',
        submenu: [
            ...ADDONCOURSES
        ]
    },
    {
        text: 'Contact',
        path: '/Contact',
        submenu: []
    },
];




export const USER_FOOTERLINKS = [
    {
        text: 'Quick Links',
        submenu: [
            {
                text: 'Home',
                path: '/',
            },
            {
                text: 'Our Courses',
                path: '/Course',
            },
            {
                text: 'Admission',
                path: '/Admission',
            },
            {
                text: 'About Us',
                path: '/AboutCollege',
            }
        ]
    },
    {
        text: 'Social',
        submenu: [
            {
                text: 'Youtube',
                path: 'https://www.youtube.com/@porukaracmicollege9385',
            },
            {
                text: 'Facebook',
                path: 'https://www.facebook.com/p/Fr-porukara-CMI-college-of-advanced-studieschampakulam-100054424693523/',
            },
            {
                text: 'Instagram',
                path: 'https://www.instagram.com/porukara_official/',
            }
        ]
    }
];
export const CORE_VALUES = [
    {
        title: 'Faith in God',
        desc: 'We believe that faith in God is the beginning of true wisdom and the anchor of life. Human life would be meaningless without faith in oneself and others too. The college provides a platform to grow in faith, the bedrock of holistic growth.'
    },
    {
        title: 'Moral Uprightness',
        desc: 'We believe that honesty, sincerity and justice signify the core of a person\'s character. We adhere to the highest ethical standards in all the curricular, co-curricular and extra-curricular activities in order to nurture integrated persons for the future of our nation and world at large.'
    },
    {
        title: 'Love of Fellow Beings',
        desc: 'We believe that dignity of the human person is the foundation for empowerment and socio-economic transformation. We shall strive to uplift the dignity of the socially disadvantaged, marginalized and the underprivileged through genuine love and service.'
    },
    {
        title: 'Social Responsibility',
        desc: 'We believe that hard work, commitment and dedication produce excellence in all spheres of life. The management, faculty and administration set high benchmarks of academic and holistic excellence and provide innovative, student-centered, globally competent processes and services for the success.'
    },
    {
        title: 'Pursuit of Excellence',
        desc: 'We believe that hard work, commitment and dedication produce excellence in all spheres of life. The management, faculty and administration set high benchmarks of academic and holistic excellence and provide innovative, student-centered, globally competent processes and services for the success.'
    }
]
export const MISSION_VISION = [
    {
        title: 'Vision',
        description: '“Pursuing Excellence’’'
    },
    {
        title: 'Mission',
        description: 'Fr. Porukara CMI College is a nurturing ground for an  individual\'s holistic development with great emphasis on the Spiritual, Emotional, Intellectual and Physical integrity so that our students will be able to face and succeed the  challenges of this ever - changing world without fear.'
    }
]
export const HOME_CAROUSEL = [
    {
        image: '/storage/card2.jpg',
        text: 'Placement Guarenteed'
    },
    {
        image: '/storage/college1.png',
        text: 'Modern Campus'
    },
    {
        image: '/storage/backwaters.jpg',
        text: 'In the beauty of backwaters'
    },
    {
        image: '/storage/paddyfields.jpg',
        text: 'Nice View of Kuttanadu'
    },
    {
        image: '/storage/graduate1.jpg',
        text: 'Placement Guarenteed'
    },
    {
        image: '/storage/graduate3.jpg',
        text: '1000+ Students Passed out'
    },

]
export const GlobalAnimationVariant = {
    visible: { opacity: 1, transition: { duration: 0.2 } },
    hidden: { opacity: 0 }
}
export const DEMOANNOUNCEMENTS = [
    {
        day: '25',
        month: 'April',
        title: "Admissions Open",
        description: 'Admissions Open for BCA, \nBCOM with Finance and Taxation, \nBCOM with Computer Application, \n BA English \n Contact: 9446249412'
    },
    {
        day: '10',
        month: 'May',
        title: "Know more about 4 year UG Programme",
        description: 'A seminar for students and parents organized with MG University. \n Contact for details: 9961465063'
    },
    {
        day: '1',
        month: 'July',
        title: "Four Year Programme",
        description: 'Four Year Programme Commences'
    }
]
export const ADMINSIDEBARLINKS1 = [
    {
        title: 'Dashboard',
        icon: 'bxs-dashboard',
        link: '/dashboard',
        submenu: []
    },
    {
        title: 'News & Updates',
        icon: 'bxs-news',
        link: 'javascript:void(0)',
        submenu: [
            {
                title: 'Upcoming Events',
                icon: 'bxs-dashboard',
                link: '/Updates/UpcomingEvents',
            },
            {
                title: 'Latest Events',
                icon: 'bxs-dashboard',
                link: '/Updates/LatestEvents',
            },
            {
                title: 'Annooucements',
                icon: 'bxs-dashboard',
                link: '/Updates/Announcements',
            },
        ]
    },
    {
        title: 'Academics',
        icon: 'bxs-food-menu',
        link: '/Applications',
        submenu: [
            {
                title: 'Students',
                icon: 'bxs-dashboard',
                link: '/setttings/CoreValues',
            },
            {
                title: 'Courses',
                icon: 'bxs-dashboard',
                link: '/setttings/CoreValues',
            },
            {
                title: 'Departments',
                icon: 'bxs-dashboard',
                link: '/setttings/CoreValues',
            },
        ]
    },
    {
        title: 'Faculties',
        icon: 'bxs-user-account',
        link: '/Applications',
        submenu: []
    },
    {
        title: 'Page Setttings',
        icon: 'bxs-cog',
        link: 'javascript:void(0)',
        submenu: [
            {
                title: 'Core Values',
                icon: 'bxs-dashboard',
                link: '/setttings/CoreValues',
            },
            {
                title: 'Principal\'s Message',
                icon: 'bxs-dashboard',
                link: '/setttings/CoreValues',
            }
        ]
    },
    {
        title: 'Contact Form',
        icon: 'bxs-copy-alt',
        link: '/Applications',
        submenu: []
    },
];

export const ADMINSIDEBARLINKS = [
    {
        onlyDev: false,
        title: 'Dashboard ',
        icon: 'bxs-dashboard',
        link: '/dashboard',
        submenu: []
    },
    {
        onlyDev: true,
        title: 'Manage Admins',
        icon: 'bxs-user-pin',
        link: '/ManageAdmins',
        submenu: []
    },
    // {
    //     onlyDev: true,
    //     title: 'Add Questions',
    //     icon: 'bx-plus-circle',
    //     link: '/AddQuestions',
    //     submenu: []
    // },
    {
        onlyDev: false,
        title: 'Admission Applications',
        icon: 'bxs-book',
        link: '/AdmissionApplications',
        submenu: []
    },
    {
        onlyDev: false,
        title: 'Updates',
        link: '/Updates/LatestEvents',
        icon: 'bxs-book',
        submenu: [
            {
                onlyDev: false,
                title: 'Latest Events',
                icon: 'bx-user',
                link: '/Updates/LatestEvents',
                submenu: []
            },
            {
                onlyDev: false,
                title: 'Announcements',
                icon: 'bx-user',
                link: '/Updates/Annoucements',
                submenu: []
            },
            {
                onlyDev: false,
                title: 'Upcoming Events',
                icon: 'bx-user',
                link: '/Updates/UpcomingEvents',
                submenu: []
            },
        ]
    },

];
export const LABFACILITIES = [
    "Reading room, discussion room and self-study cubicles exclusively for faculty and students",
    "Display of newspaper clippings on current topics and career / employment",
    "Book bank facility for economically backward students",
    "Notice board for information display and notification",
    "Continuous power backup facility",
    "Competitive exam material",
    "Mass subscription of dailies / journals for students"
];
export const DEMOEVENTS = [
    {
        title: '',
        desc: '',
        image: '/storage/YM1.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/YM2.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/YY1.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/YY2.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/ML2.jpg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/ML3.jpg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/LLM1.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/Toronto.jpg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/LY.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/LM5.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/LM1.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/LM2.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/LM3.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/l45.jpg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/l46.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/l44.jpg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/l31.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/l30.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/l32.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/l33.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/l34.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/L15.png'
    },
    {
        title: '',
        desc: '',
        image: '/storage/L16.png'
    },
    {
        title: '',
        desc: '',
        image: '/storage/m1.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/Mukhamukham.jpg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/l2.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/l3.jpeg'
    },
    {
        title: '',
        desc: '',
        image: '/storage/lai.jpeg'
    },
    {
        title: ' ',
        desc: '',
        image: '/storage/l4.jpeg'
    },
    {
        title: ' ',
        desc: '',
        image: '/storage/l5.jpeg'
    },
    {
        title: ' ',
        desc: '',
        image: '/storage/l6.jpeg'
    },
    {
        title: ' ',
        desc: '',
        image: '/storage/l7.jpeg'
    },
    {
        title: ' ',
        desc: '',
        image: '/storage/l8.jpeg'
    },
    {
        title: ' ',
        desc: '',
        image: '/storage/l1.jpeg'
    }
];
export const UPCOMING_EVENTS = [
    {
        text: 'Socio Economic Survey at Champakulam'
    },
    {
        text: 'State Level InterCollege Volleyball Tournament'
    },
    {
        text: 'Save Kuttanadu - National Level Competition'
    },
    {
        text: 'Save Kuttanadu Farmers - Seminar'
    }
]
export const TORCHBEARERS = [
    {
        name: 'Rev. Fr. Dr. Thomas Chathamparampil CMI',
        place: 'Prior General',
    },
    {
        name: 'Rev. Fr. Antony Elamthottam CMI',
        place: 'Provincial, St. Joseph\' Province TVM',
    },
    {
        name: 'Rev. Fr. James Mullassery CMI',
        place: 'Councillor for Education, Trivandrum Province',
    },
    {
        name: 'Rev. Fr. Chacko Akkathara CMI',
        place: 'Manager, Fr.Porukara CMI Group of Institutions',
    },
    {
        name: 'Rev. Fr. Dr. Josey Kollammalil CMI',
        place: 'Principal, Fr.Porukara CMI College of Advanced Studies',
    },
]
export const EventTypes = [
    'UpcomingEvent',
    'Announcement',
    'Events',
    'NSS Event',
];
export const PANCHAYATS = [
    {
        id: 1,
        name: "Champakulam"
    },
    {
        id: 2,
        name: "Edathua"
    },
    {
        id: 3,
        name: "Kainakary"
    },
    {
        id: 4,
        name: "Kavalam"
    },
    {
        id: 5,
        name: "Muttar"
    },
    {
        id: 6,
        name: "Nedumudi"
    },
    {
        id: 7,
        name: "Neelamperoor"
    },
    {
        id: 8,
        name: "Pulinkunnoo"
    },
    {
        id: 9,
        name: "Ramankary"
    },
    {
        id: 10,
        name: "Thakazhy"
    },
    {
        id: 11,
        name: "Thalavady"
    },
    {
        id: 12,
        name: "Veliyanad"
    }
];

export const FACILITES = [
    {
        text: 'library',
        title: 'Library',
        description: 'Library description',
        image: 'library',
    },
    {
        text: 'computerlab',
        title: 'Computer Lab',
        description: 'Computer Lab description',
        image: 'computerlab',
    },
    {
        text: 'canteen',
        title: 'Canteen',
        description: 'Canteen description',
        image: 'canteen',
    },
    {
        text: 'seminarhall',
        title: 'Seminar Hall',
        description: 'Seminar Hall description',
        image: 'seminarhall',
    },
    {
        text: 'chapel',
        title: 'Chapel',
        description: 'Chapel description',
        image: 'chapel',
    },

];
export const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Ju','Aug','Sep','Oct','Nov','Dec'];
export const COLLEGES = [
    { "name": "Christ University, Bangalore" },
    { "name": "Kristhu Jyayanthi College, Bangalore" },
    { "name": "Christ College, Pune" },
    { "name": "S. H. College, Thevara" },
    { "name": "Rajagiri Group of Schools and Colleges, Kochi" },
    { "name": "Rajagiri Hospital, Aluva" },
    { "name": "Christ College, Irinjalakuda" },
    { "name": "K.E. College, Mannanam" },
    { "name": "KE Carmel School, Muhamma" },
    { "name": "St. Joseph's College, Moolamattom" },
    { "name": "Christ College, Puliyanmala" },
    { "name": "Devagiri College, Kozhikode" },
    { "name": "Carmel Polytechnic & Engineering College, Punnapra" },
    { "name": "KE Carmel Group of Schools, Kolkata" },
    { "name": "Devagiri Public School, Kozhikode" },
    { "name": "Chavara Cultural Centre, Kochi" },
    { "name": "Darsana, Kottayam" },
    { "name": "Amala Medical College, Thrissur" },
    { "name": "Chethana Music Academy, Thrissur" },
    { "name": "Christ Central-Thiruvalla" },
    { "name": "Kristhu Jyothi Institutions, Chethipuzha" },
    { "name": "Sargakshethra, Chethipuzha" },
    { "name": "Christ Nagar Group of Institutions, Trivandrum" },
    { "name": "Silverhills School, Kozhikode" },
    { "name": "Porukara Central School, Champakulam" },
    { "name": "St. Joseph's and KE Carmel Schools, Pulincunnu" }
];