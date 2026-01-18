// Central configuration file for all component data

const config = {
  // Navigation Menu Items
  navItems: [
    { id: 'about', label: 'About' },
    { id: 'skill', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'portfolio', label: 'Portfolio' }
  ],

  // Personal Information
  personalInfo: {
    name: 'Biswasindhu Mandal',
    title: 'Full Stack & OTT Front End Developer',
    email: 'sindhu.online.24x7@gmail.com',
    location: 'Kolkata, West Bengal, India',
    joinDate: '06-15-2019',
    languages: [
      { name: 'English', proficiency: 'Professional working proficiency' },
      { name: 'বাংলা', proficiency: 'Full professional proficiency' },
      { name: 'हिंदी', proficiency: 'Limited working proficiency' },
      { name: 'ଓଡ଼ିଆ', proficiency: 'Limited working proficiency' }
    ]
  },

  // Education
  educations: [
    {
      degree: "Master's in Computer Application",
      institution: 'University of Calcutta',
      duration: '2017 - 2019',
      percentage: '67.22%',
      cgpa: '7.57',
      subjects: 'Prog Lang, DBMS, Math, Networking, OS, SPM, Soft. Engg, Graphics, AI'
    },
    {
      degree: 'B.Sc. (Hons.) in Mathematics',
      institution: 'Vidyasagar University',
      duration: '2012 - 2015',
      percentage: '62.13%',
      subjects: 'MTMH, PHSG, CEMG'
    },
    {
      degree: 'Higher Secondary (XII)',
      institution: 'West Bengal Council of Higher Secondary Education',
      duration: '2010',
      percentage: '71.20%',
      subjects: 'BNGA, ENGB, MATH, PHYS, CHEM, BIOS'
    },
    {
      degree: 'Secondary (X)',
      institution: 'West Bengal Board of Secondary Education',
      duration: '2008',
      percentage: '73.88%',
      subjects: 'BNGA, ENGB, MATH, PSC, LSC, HIST, GEOG'
    }
  ],

  // Social Media Links
  socialLinks: {
    stackoverflow: 'https://stackoverflow.com/users/10850045/art-bindu?tab=profile',
    medium: 'https://medium.com/@artbindu',
    github: 'https://github.com/artbindu',
    linkedin: 'https://in.linkedin.com/in/artbindu?trk=public-profile-badge-profile-badge-view-profile-cta',
    skype: 'skype:artbindu.mca?chat'
  },

  // API Endpoints
  apiEndpoints: {
    stackoverflow: 'https://api.stackexchange.com/2.2/users/10850045?site=stackoverflow',
    mediumRSS: 'https://medium.com/feed/@artbindu'
  },

  // Skills Configuration
  skills: {
    programmingLanguages: [
      { name: 'Javascript', icon: 'images/icons/vanilla-javascript.jpg', level: 70, label: 'Expert', link: 'https://www.codewithharry.com/tutorial/js/' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', level: 60, label: 'Advance', link: 'https://www.typescripttutorial.net/' },
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', level: 60, label: 'Advance', link: 'https://www.pythontutorial.net/' },
      { name: 'Java', icon: 'https://cdn.worldvectorlogo.com/logos/java-14.svg', level: 55, label: 'Proficient', link: null },
      { name: 'Shell Script', icon: 'https://bashlogo.com/img/logo/svg/full_colored_dark.svg', level: 40, label: 'Proficient', link: 'https://www.mulle-kybernetik.com/modern-bash-scripting/', style: { maxWidth: '55px' } },
      { name: 'C/C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C', level: 33, label: 'Basic', link: null }
    ],
    compilerBundlers: [
      { name: 'Babel', icon: 'https://cdn.simpleicons.org/babel/F9DC3E', level: 60, label: 'Advanced', link: 'https://babeljs.io/docs/' },
      { name: 'Webpack', icon: 'https://cdn.simpleicons.org/webpack/8DD6F9', level: 60, label: 'Advanced', link: 'https://webpack.js.org/concepts/', hasBlog: true, blogLink: 'https://medium.com/p/2e2a661e27c' },
      { name: 'Rollup', icon: 'https://cdn.simpleicons.org/Rollup.js/EC4A3F', level: 60, label: 'Advance', link: 'https://rollupjs.org/tutorial/', hasBlog: true, blogLink: 'https://medium.com/p/615495cd2ead' }
    ],
    taskRunners: [
      { name: 'Grunt', icon: 'https://cdn.worldvectorlogo.com/logos/grunt.svg', level: 50, label: 'Proficient', link: null, style: { maxWidth: '20px' } },
      { name: 'Gulp', icon: 'https://cdn.worldvectorlogo.com/logos/gulp.svg', level: 45, label: 'Proficient', link: null, style: { maxWidth: '15px' } }
    ],
    frameworks: [
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/node.js/5FA04E', level: 70, label: 'Advance', link: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs' },
      { name: 'ReactJs', icon: 'https://cdn.simpleicons.org/react/61DAFB', level: 40, label: 'Proficient', link: 'https://www.codewithharry.com/tutorial/react-home/' },
      { name: 'Angular', icon: 'https://cdn.worldvectorlogo.com/logos/angular-icon.svg', level: 50, label: 'Proficient', link: 'https://angular.dev/tools/cli' },
      { name: 'Vue.js', icon: 'https://cdn.simpleicons.org/vue.js/4FC08D', level: 40, label: 'Proficient', link: 'https://vuejs.org/tutorial/#step-1' }
    ],
    databases: [
      { name: 'MySQL', icon: 'images/icons/MySQL_logo_PNG7.png', level: 65, label: 'Advanced', link: null, style: { maxWidth: '60px' }, hasBlog: true, blogLink: 'https://medium.com/p/5ab60a43a883' },
      { name: 'PostgreSQL', icon: 'images/icons/PostgreSQL-Logo.png', level: 65, label: 'Advance', link: null, style: { maxWidth: '100px' }, hasBlog: true, blogLink: 'https://medium.com/p/4a2c1071e879' },
      { name: 'Oracle', icon: 'https://cdn.worldvectorlogo.com/logos/oracle-logo.svg', level: 60, label: 'Advance', link: null, style: { maxWidth: '80px' } },
      { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', level: 45, label: 'Proficient', link: null },
      { name: 'Yellowbrick', icon: 'images/icons/yellowbrick1.png', level: 45, label: 'Proficient', link: null, style: { maxWidth: '35px' } },
      { name: 'MSSQL Server', icon: 'images/icons/mssql.svg', level: 45, label: 'Proficient', link: null, style: { maxWidth: '30px' } }
    ],
    unitTesting: [
      { name: 'Mocha', icon: 'https://cdn.simpleicons.org/mocha/8D6748', level: 60, label: 'Advance', link: null },
      { name: 'Jest', icon: 'https://cdn.simpleicons.org/jest/C21325', level: 15, label: 'Basic', link: null },
      { name: 'Jasmine', icon: 'https://cdn.simpleicons.org/Jasmine/8A4182', level: 15, label: 'Basic', link: null }
    ],
    assertionLibrary: [
      { name: 'Chai', icon: 'https://cdn.simpleicons.org/chai/A30701', level: 60, label: 'Advance', link: null }
    ],
    coverageTools: [
      { name: 'Istanbul', icon: 'https://istanbul.js.org/assets/istanbul-logo.png', level: 70, label: 'Expert', link: null }
    ],
    regularExpression: [
      { name: 'Regex', icon: null, level: 90, label: 'Expert', link: null, customIcon: '/(.*?:)/', hasBlog: true, blogLinks: ['https://medium.com/p/d2f6cc1d1976', 'https://medium.com/p/1225d42239fb'] }
    ],
    jsAdvancedLibrary: [
      { name: 'RxJS', icon: 'https://cdn.simpleicons.org/reactivex/B7178C', level: 40, label: 'Proficient', link: null },
      { name: 'TypeORM', icon: 'https://cdn.simpleicons.org/typeorm/FE0803', level: 10, label: 'Basic', link: null }
    ],
    ottMediaPlayer: [
      { name: 'MPEG-DASH', icon: 'https://dashif.org/img/dashif-logo-283x100_new.jpg', level: 45, label: 'Proficient', link: null, style: { maxWidth: '85px' } },
      { name: 'HLS', icon: 'https://cdn.simpleicons.org/apple', level: 55, label: 'Advance', link: null, customLabel: true },
      { name: 'RxPlayer', icon: 'https://developers.canal-plus.com/rx-player/assets/logo_white.png', level: 45, label: 'Proficient', link: null, style: { maxWidth: '90px', filter: 'brightness(0)' } },
      { name: 'Bitmovin', icon: 'images/icons/bitmovinplayer.svg', level: 55, label: 'Advance', link: null, style: { maxWidth: 'fit-content' } },
      { name: 'Video.js', icon: 'images/icons/videojs.svg', level: 45, label: 'Proficient', link: null, style: { maxWidth: '90px' } }
    ],
    devOps: [
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', level: 30, label: 'Basic', link: null }
    ],
    cicd: [
      { name: 'Jenkins', icon: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg', level: 10, label: 'Basic', link: null }
    ],
    apiTesting: [
      { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman', level: 83, label: 'Expert', link: null },
      { name: 'Swagger', icon: 'https://cdn.simpleicons.org/swagger/068619', level: 40, label: 'Proficient', link: null },
      { name: 'Charles Proxy', icon: 'images/icons/charles_icon.svg', level: 80, label: 'Expert', link: null },
      { name: 'Fiddler', icon: 'images/icons/fiddler.svg', level: 45, label: 'Proficient', link: null }
    ],
    versionControl: [
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git', level: 75, label: 'Expert', link: null, hasApp: true, appLink: 'https://artbindu-app.github.io/essential_command/#git' },
      { name: 'Azure Repos', icon: 'images/icons/azure-repos.png', level: 70, label: 'Expert', link: null, style: { maxWidth: '25px' } },
      { name: 'Bitbucket', icon: 'https://cdn.simpleicons.org/bitbucket', level: 70, label: 'Expert', link: null },
      { name: 'SVN', icon: 'https://cdn.worldvectorlogo.com/logos/subversion.svg', level: 40, label: 'Proficient', link: null, style: { maxWidth: '30px' } }
    ],
    bugTracking: [
      { name: 'Azure Board', icon: 'https://cdn.worldvectorlogo.com/logos/azure-boards.svg', level: 65, label: 'Advance', link: null },
      { name: 'Jira', icon: 'https://cdn.simpleicons.org/jira/0052CC', level: 55, label: 'Advance', link: null },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717', level: 60, label: 'Advance', link: null },
      { name: 'Trello', icon: 'https://cdn.simpleicons.org/Trello/0052CC', level: 45, label: 'Proficient', link: null }
    ],
    operatingSystem: [
      { name: 'Windows', icon: 'https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg', level: 60, label: 'Advance', link: null, hasApp: true, appLink: 'https://artbindu-app.github.io/essential_command/#windows' },
      { name: 'Mac', icon: 'https://cdn.worldvectorlogo.com/logos/macintosh.svg', level: 55, label: 'Advance', link: null, style: { maxWidth: '38px' }, hasApp: true, appLink: 'https://artbindu-app.github.io/essential_command/#macos' },
      { name: 'Ubuntu', icon: 'https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg', level: 45, label: 'Proficient', link: null, hasApp: true, appLink: 'https://artbindu-app.github.io/essential_command/#linux' },
      { name: 'ADB', icon: 'https://cdn.simpleicons.org/android', level: 45, label: 'Proficient', link: null, hasApp: true, appLink: 'https://artbindu-app.github.io/essential_command/#adb' }
    ],
    textEditor: [
      { name: 'VsCode', icon: 'https://worldvectorlogo.com/logos/visual-studio-code-1-1.svg', level: 80, label: 'Expert', link: null, hasBlog: true, blogLink: 'https://medium.com/p/31497208449f' },
      { name: 'Notepad++', icon: 'images/icons/notepadplusplus.svg', level: 60, label: 'Advance', link: null },
      { name: 'Eclipse', icon: 'images/icons/eclipseide.svg', level: 40, label: 'Proficient', link: null },
      { name: 'Xcode', icon: 'https://cdn.simpleicons.org/xcode', level: 20, label: 'Basic', link: null }
    ],
    dataVisualization: [
      { name: 'Kibana', icon: 'https://cdn.simpleicons.org/kibana', level: 30, label: 'Basic', link: null }
    ],
    ftp: [
      { name: 'FileZilla', icon: 'https://cdn.simpleicons.org/FileZilla', level: 45, label: 'Proficient', link: null },
      { name: 'WinSCP', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/de/WinSCP_Logo.png', level: 45, label: 'Proficient', link: null }
    ],
    otherTools: [
      { name: '3uTools', icon: 'images/icons/3utools.png', level: 45, label: 'Proficient', link: null },
      { name: 'Vysor', icon: 'images/icons/vysor.png', level: 50, label: 'Proficient', link: null },
      { name: 'Apple Configurator', icon: 'images/icons/apple-configurator.png', level: 40, label: 'Proficient', link: null, smallLabel: true }
    ]
  },

  // Work Experience
  experiences: [
    {
      company: 'DAZN Software Pvt. Ltd',
      companyUrl: 'https://dazngroup.com/',
      role: 'Javascript, React, Node.js & OTT Developer',
      duration: 'JUNE 2024 - Present',
      location: 'Hyderabad',
      logo: 'images/company/dazn.svg',
      logoStyle: { height: '7em' },
      bgColor: '#e2e7e8',
      project: 'Player Engineering',
      description: 'Back to work on OTT 😊',
      responsibilities: [],
      technologies: ['JavaScript', 'React', 'Node.js', 'OTT']
    },
    {
      company: 'Teoco Software Pvt. Ltd',
      companyUrl: 'https://www.teoco.com/',
      role: 'React/Node.js Full Stack & JAVA Automation Developer',
      duration: 'JULY 2024 - MAY 2025',
      location: 'Kolkata',
      logo: 'images/company/teoco.svg',
      logoStyle: { height: '3em' },
      bgColor: '#7bc4ee',
      project: 'SmartCircuit Automation',
      responsibilities: [
        {
          title: 'React & Node.js base Automation Dashboard',
          description: 'Provides a complete Automation Dashboard to view automation build, test scenario & cases in a beautiful & organized way, which is help to Automation Developers, QA and Management team to track automation progress, upcoming features and all status. POC to integrate existing Java Selenium automation framework with a React/Node.js dashboard, enabling manual and scheduled Jenkins-triggered automation builds with respective configuration.'
        },
        {
          title: 'JAVA Selenium based Automation framework Development',
          description: 'Get chance to work on Java-Selenium-TestNG-Cucumber based Automation framework used to automate SmartCircuit UI Application. Major responsibility for Contract Family predata setup feed and related contract cycle development like Contract Family Processing, Consolidation and output data. POC to API Test Automation framework development using JAVA, Selenium, testNg'
        }
      ],
      technologies: ['React', 'Node.js', 'Java', 'Selenium', 'TestNG', 'Cucumber', 'Jenkins']
    },
    {
      company: 'Teoco Software Pvt. Ltd',
      companyUrl: 'https://www.teoco.com/',
      role: 'Full Stack Developer',
      duration: 'JANUARY 2024 - JUNE 2024',
      location: 'Kolkata',
      logo: 'images/company/teoco.svg',
      logoStyle: { height: '3em' },
      bgColor: '#7bc4ee',
      project: 'SmartCircuit',
      projectUrl: 'https://www.teoco.com/smartcircuit/',
      responsibilities: [
        {
          title: 'Angular 17 (Kendo UI) Developer, Backend ETL Tool Smart Query Design',
          description: 'Understand Telecom Circuit Lifecycle, specially SmartCircuit: Contract Management. Contribute integration of Web Application & bug fixing. RDBMS(Yellowbrick - PL/pgSQL) & C# base ETL Tool (Conductor Desktop) Smart Query design'
        }
      ],
      technologies: ['Angular 17', 'Kendo UI', 'Yellowbrick', 'PL/pgSQL', 'C#', 'ETL']
    },
    {
      company: 'Rebaca Technologies Pvt. Ltd',
      companyUrl: 'https://www.rebaca.com/',
      role: 'Subject Matter Expert with OTT Front End Developer',
      duration: 'April 2023 - JANUARY 2024',
      location: 'Kolkata',
      logo: 'images/company/rebaca.svg',
      logoStyle: { height: '6em' },
      bgColor: '#f3cece',
      project: 'MediaKind (SME)',
      projectUrl: 'https://www.mediakind.com/',
      responsibilities: [
        {
          title: 'SME Customer Service for ideal & smooth playback',
          description: 'Provides knowledge and expertise specifically based on smooth playback and subscription based player trick modes. Directly handling client issues on multiple platforms like Android & iOS 1ft-2ft device, AppleTV, Android STB, Casting playback.'
        },
        {
          title: 'MediaFirst Pay TV Media Player bug fixing & smooth playback',
          description: 'An end-to-end, cloud video platform for the creation, management and delivery of next-generation Pay TV. Provides a personalized TV experience engaging the customer in the live, on demand and subscription based content.'
        },
        {
          title: 'Automation Test Script Development',
          description: 'Selenium Cucumber based Automation framework used to playback validation in WMC PayTV, DTC & MKPlayer SDK'
        }
      ],
      technologies: ['JavaScript', 'OTT', 'Android', 'iOS', 'AppleTV', 'Selenium', 'Cucumber']
    },
    {
      company: 'Rebaca Technologies Pvt. Ltd',
      companyUrl: 'https://www.rebaca.com/',
      role: 'Web Developer',
      duration: 'July 2022 - March 2023',
      location: 'Kolkata',
      logo: 'images/company/rebaca.svg',
      logoStyle: { height: '6em' },
      bgColor: '#f3cece',
      project: 'MediaKind (WMC)',
      projectUrl: 'https://www.mediakind.com/',
      projectDocsUrl: 'https://wmc.mr.tv3cloud.com/master/latest/docs/index.html',
      responsibilities: [
        {
          title: 'OTT Media Player Development and bug fixing - Bitmovin Player',
          description: 'OTT Media Player Development which communicates the web video application with backend media & license server through media player library. Analysis and implementation of new features in OTT application. Investigation of Live, VOD, Catchup and InProgress use cases for enhancement.'
        },
        {
          title: 'Chromecast-V3 Receiver Development',
          description: 'Contributed to integration of Chromecast(V3) receiver UI. Cast WMC SDK, UMC SDK and MK player through Google Chromecast-V3/V4 Dongle.'
        },
        {
          title: 'WMC SDK Player Upgradation and Integration',
          description: 'Upgrade WMC SDK as a react base library that provided the interface to play HTM5 video to a client in different browser like Chrome, Edge, Safari, Firefox'
        }
      ],
      technologies: ['JavaScript', 'React', 'Bitmovin', 'WMC SDK', 'Chromecast', 'OTT']
    },
    {
      company: 'Rebaca Technologies Pvt. Ltd',
      companyUrl: 'https://www.rebaca.com/',
      role: 'Angular 10 Developer',
      duration: 'June 2021 - June 2022',
      location: 'Kolkata',
      logo: 'images/company/rebaca.svg',
      logoStyle: { height: '6em' },
      bgColor: '#f3cece',
      project: 'Stenograph (APEX)',
      projectUrl: 'https://www.stenograph.com/',
      responsibilities: [
        {
          title: 'Design and development of APEX Web Application features and bug fixing',
          description: 'APEX is Stenograph\'s end-to-end solution designed specifically for the court reporting industry. This is an intelligent ecosystem(APEX) that connects clients and agencies to multiple reporter, videographer, transcriptionist and translator through Stenograph\'s industry-leading software, CATalyst. This empowers both parties to manage the workflow from a single application. Handling all aspects of a job, from scheduling to billing and everything in between.'
        },
        {
          title: 'Design and development of APEX Admin Web Application features and bug fixing',
          description: 'This is an another ecosystem(APEX-Admin) that manage, process all clients, agencies, reporters, videographers, transcriptionists and translators operations of APEX system. Handling billings and payments of all third party members of client.'
        }
      ],
      technologies: ['Angular 10', 'TypeScript', 'REST API', 'Node.js']
    },
    {
      company: 'Rebaca Technologies Pvt. Ltd',
      companyUrl: 'https://www.rebaca.com/',
      role: 'Vanilla Javascript Developer with Node.js',
      duration: 'July 2019 - May 2021',
      location: 'Kolkata',
      logo: 'images/company/rebaca.svg',
      logoStyle: { height: '6em' },
      bgColor: '#f3cece',
      project: 'MediaKind (WMC)',
      projectUrl: 'https://www.mediakind.com/',
      projectDocsUrl: 'https://wmc.mr.tv3cloud.com/r140/latest/docs/',
      responsibilities: [
        {
          title: 'OTT Media Player Development and bug fixing - DASH & HLS Player',
          description: 'OTT Media Player Development which communicates the web video application with backend media & license server through media player library. Analysis and implementation of new features in OTT application. Investigation of Live, VOD, Catch-up use cases for enhancement.'
        },
        {
          title: 'Chromecast-V2 Sender/Receiver Development',
          description: 'Integrate Chromecast(V2) receiver UI. Cast WMC & UMC SDK player through Google Chromecast STB.'
        },
        {
          title: 'WMC SDK Player Integration',
          description: 'WMC SDK is a library that provided the interface to play HTM5 video to a client in different browser like Chrome, Internet Explorer & Edge, Safari, Firefox'
        },
        {
          title: 'OTT Media Player Unit Test Case Development',
          description: 'Unit test case was written using Mocha-Chai framework and successfully cover more than 90% of the whole project.'
        }
      ],
      technologies: ['JavaScript', 'Node.js', 'MPEG-DASH', 'HLS', 'WMC SDK', 'Chromecast', 'Mocha', 'Chai']
    },
    {
      company: 'Rebaca Technologies Pvt. Ltd',
      companyUrl: 'https://www.rebaca.com/',
      role: 'Internship',
      duration: 'January 2019 - June 2019',
      location: 'Kolkata',
      logo: 'images/company/rebaca.svg',
      logoStyle: { height: '6em' },
      bgColor: '#eee8e8',
      isInternship: true,
      projects: [
        {
          name: 'Rebaca OAS (Office Automation System)',
          tasks: [
            'Development of BE application to migrate employee data from MS-SQL to MongoDB using Vanilla JavaScript, Node JS, Express, MS-SQL and Mongo.',
            'Development of REST API base BE application to fetch employee data from MongoDB with different format using Vanilla JavaScript, Node JS, Express and Mongo.',
            'Development of FE application to show employee information in Web Browser in different aspect using Angular 8 framework with REST API.'
          ]
        },
        {
          name: 'FUEL App Test Automation Framework',
          tasks: [
            'Rest API base Implementation for Web Framework',
            'Test script integration & testing using Cucumber.js'
          ]
        }
      ],
      technologies: ['JavaScript', 'Node.js', 'Angular 8', 'MongoDB', 'MS-SQL', 'Express', 'Cucumber.js']
    },
    {
      company: 'Jadavpur University',
      companyUrl: 'https://jadavpuruniversity.in',
      role: 'Academic Project',
      duration: 'January 2019 - June 2019',
      location: 'Kolkata',
      logo: 'images/institution/Jadavpur_University_Logo_wiki.svg',
      logoStyle: { height: '7em' },
      bgColor: '#eee8e8',
      isAcademic: true,
      project: 'Future Rainfall Data Prediction System',
      projectUrl: 'https://github.com/artbindu/WeatherFutureDataAnalysis',
      description: 'Rainfall prediction system using ANN and K-means clustering. Processes historical Indian rainfall data (1951-2017) with dual ANN models - ANN-I predicts from same month across years, ANN-II uses previous 5 months.',
      details: [
        'Technologies: Python 3.6, MongoDB 4.x, NumPy, Matplotlib',
        'Architecture: Excel/MongoDB integration, K-means preprocessing, dual ANN models with visualization'
      ],
      technologies: ['Python', 'MongoDB', 'NumPy', 'Matplotlib', 'Machine Learning', 'ANN', 'K-means']
    },
    {
      company: 'Jadavpur University',
      companyUrl: 'https://jadavpuruniversity.in',
      role: 'Academic Project',
      duration: 'Nov 2018 - Dec 2018',
      location: 'Kolkata',
      logo: 'images/institution/Jadavpur_University_Logo_wiki.svg',
      logoStyle: { height: '7em' },
      bgColor: '#eee8e8',
      isAcademic: true,
      project: 'Online Book Shopping Cart',
      projectUrl: 'https://github.com/artbindu/OnlineBookShoppingCart',
      description: 'JSP-based e-commerce platform with user authentication, cart/wishlist management, dummy payment options, and admin dashboard with ISBN validation.',
      details: [
        'Frontend: HTML, CSS, JavaScript • Backend: Java 8, JSP Servlet • Database: Oracle XE',
        'Server: Apache Tomcat 9.0 with Oracle JDBC Driver integration'
      ],
      technologies: ['Java', 'JSP', 'Servlet', 'Oracle', 'HTML', 'CSS', 'JavaScript', 'Tomcat']
    }
  ],

  // Portfolio Configuration
  portfolio: {
    // Portfolio Categories/Tabs
    categories: [
      { 
        id: 'blogs', 
        label: 'Blogs & Articles', 
        icon: 'fa fa-cubes',
        tooltip: 'Blogs & Articles',
        active: true 
      },
      { 
        id: 'certificate', 
        label: 'Digital Certificates', 
        icon: 'fa fa-certificate',
        tooltip: 'Certificate',
        active: false 
      }
    ],

    // Medium Blog Articles
    blogs: [
      {
        title: 'Webpack Tutorial',
        url: 'https://medium.com/p/2e2a661e27c?source=friends_link&sk=9b3896de2d8cf231d719043b92c22997',
        image: 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*xOU19AldVeCWRJl2FCwHNQ.png',
        category: 'Blogs & Articles',
        icon: 'https://cdn.simpleicons.org/medium/green',
        iconWidth: '35px'
      },
      {
        title: 'RollupJs Tutorial',
        url: 'https://medium.com/p/615495cd2ead?source=friends_link&sk=9b3896de2d8cf231d719043b92c22997',
        image: 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*pjoJMPkDHczgg-6J3yg65g.jpeg',
        category: 'Blogs & Articles',
        icon: 'https://cdn.simpleicons.org/medium/green',
        iconWidth: '35px'
      },
      {
        title: 'How to use RegEx in MySQL',
        url: 'https://medium.com/p/5ab60a43a883?source=friends_link&sk=9b3896de2d8cf231d719043b92c22997',
        image: 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*w5n2-vcodWCW7Rr3TeLitA.png',
        category: 'Blogs & Articles',
        icon: 'https://cdn.simpleicons.org/medium/green',
        iconWidth: '35px'
      },
      {
        title: 'PostgreSQL User Defined Function',
        url: 'https://medium.com/p/4a2c1071e879?source=friends_link&sk=9b3896de2d8cf231d719043b92c22997',
        image: 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*QQPWgelr66Bp_92aU0Hs-w.png',
        category: 'Blogs & Articles',
        icon: 'https://cdn.simpleicons.org/medium/green',
        iconWidth: '35px'
      },
      {
        title: 'API call in Javascript',
        url: 'https://medium.com/p/de5d35d3184b?source=friends_link&sk=9b3896de2d8cf231d719043b92c22997',
        image: 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*1SoVfiJdxw2x9y2BEIugHg.png',
        category: 'Blogs & Articles',
        icon: 'https://cdn.simpleicons.org/medium/green',
        iconWidth: '35px'
      },
      {
        title: 'Regex Learning',
        url: 'https://medium.com/p/d2f6cc1d1976',
        image: 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*pDGuzfYVx42cFVBQao_AzA.png',
        category: 'Blogs & Articles',
        icon: 'https://cdn.simpleicons.org/medium/green',
        iconWidth: '35px'
      },
      {
        title: 'Round-Off Rules (Regex)',
        url: 'https://medium.com/p/1225d42239fb',
        image: 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*DBWamZAQNoFrV-lNuYkQFg.png',
        category: 'Blogs & Articles',
        icon: 'https://cdn.simpleicons.org/medium/green',
        iconWidth: '35px'
      }
    ],

    // Digital Certificates
    certificates: [
      {
        title: 'Javascript Basic',
        provider: 'HackerRank',
        url: 'https://downloads.hackerrank.com/certificates/8d2979edcc46',
        image: 'https://downloads.hackerrank.com/certificates/8d2979edcc46',
        providerIcon: 'https://cdn.worldvectorlogo.com/logos/hackerrank.svg',
        iconWidth: '35px',
        rating: null
      },
      {
        title: 'Javascript Intermediate',
        provider: 'HackerRank',
        url: 'https://downloads.hackerrank.com/certificates/247e5b2d87ab',
        image: 'https://downloads.hackerrank.com/certificates/247e5b2d87ab',
        providerIcon: 'https://cdn.worldvectorlogo.com/logos/hackerrank.svg',
        iconWidth: '35px',
        rating: null
      },
      {
        title: 'SQL Basic',
        provider: 'HackerRank',
        url: 'https://downloads.hackerrank.com/certificates/25bb9445e077',
        image: 'https://downloads.hackerrank.com/certificates/25bb9445e077',
        providerIcon: 'https://cdn.worldvectorlogo.com/logos/hackerrank.svg',
        iconWidth: '35px',
        rating: '⭐⭐⭐⭐⭐'
      },
      {
        title: 'SQL Intermediate',
        provider: 'HackerRank',
        url: 'https://downloads.hackerrank.com/certificates/1ddd51e42a14',
        image: 'https://downloads.hackerrank.com/certificates/1ddd51e42a14',
        providerIcon: 'https://cdn.worldvectorlogo.com/logos/hackerrank.svg',
        iconWidth: '35px',
        rating: '⭐⭐⭐⭐⭐'
      },
      {
        title: 'C Basic',
        provider: 'HackerRank',
        url: 'https://downloads.hackerrank.com/certificates/a833d97c2ff6',
        image: 'https://downloads.hackerrank.com/certificates/a833d97c2ff6',
        providerIcon: 'https://cdn.worldvectorlogo.com/logos/hackerrank.svg',
        iconWidth: '35px',
        rating: '⭐⭐⭐⭐'
      },
      {
        title: 'Problem Solving Basic',
        provider: 'HackerRank',
        url: 'https://downloads.hackerrank.com/certificates/d72dd4b4127d',
        image: 'https://downloads.hackerrank.com/certificates/d72dd4b4127d',
        providerIcon: 'https://cdn.worldvectorlogo.com/logos/hackerrank.svg',
        iconWidth: '35px',
        rating: '⭐⭐⭐⭐'
      },
      {
        title: 'Python Basic',
        provider: 'HackerRank',
        url: 'https://downloads.hackerrank.com/certificates/fc690d42869e',
        image: 'https://downloads.hackerrank.com/certificates/fc690d42869e',
        providerIcon: 'https://cdn.worldvectorlogo.com/logos/hackerrank.svg',
        iconWidth: '35px',
        rating: '⭐⭐⭐⭐⭐'
      },
      {
        title: 'Data Analysis With Python',
        provider: 'Accredian',
        url: 'https://res.cloudinary.com/djxxtwy8k/image/upload/v1745079828/Certificates/kw0a4biwspq1hbdyka9e.png',
        image: 'https://res.cloudinary.com/djxxtwy8k/image/upload/v1745079828/Certificates/kw0a4biwspq1hbdyka9e.png',
        providerIcon: 'https://encrypted-tbn1.gstatic.com/faviconV2?url=https://accredian.com&client=IMAGE_SEARCH&size=24&type=FAVICON&fallback_opts=TYPE,SIZE,URL',
        iconWidth: '35px',
        rating: null
      },
      {
        title: 'EDA & Data Storytelling',
        provider: 'Accredian',
        url: 'https://res.cloudinary.com/djxxtwy8k/image/upload/v1745079855/Certificates/vdk3d3p4tjysv0mzaau5.png',
        image: 'https://res.cloudinary.com/djxxtwy8k/image/upload/v1745079855/Certificates/vdk3d3p4tjysv0mzaau5.png',
        providerIcon: 'https://encrypted-tbn1.gstatic.com/faviconV2?url=https://accredian.com&client=IMAGE_SEARCH&size=24&type=FAVICON&fallback_opts=TYPE,SIZE,URL',
        iconWidth: '35px',
        rating: null
      },
      {
        title: 'Data Visualization Techniques',
        provider: 'Accredian',
        url: 'https://res.cloudinary.com/djxxtwy8k/image/upload/v1745079844/Certificates/myxnsxg07pr5kopkq6xy.png',
        image: 'https://res.cloudinary.com/djxxtwy8k/image/upload/v1745079844/Certificates/myxnsxg07pr5kopkq6xy.png',
        providerIcon: 'https://encrypted-tbn1.gstatic.com/faviconV2?url=https://accredian.com&client=IMAGE_SEARCH&size=24&type=FAVICON&fallback_opts=TYPE,SIZE,URL',
        iconWidth: '35px',
        rating: null
      },
      {
        title: 'Machine Learning Foundation',
        provider: 'Accredian',
        url: 'https://res.cloudinary.com/djxxtwy8k/image/upload/v1745079871/Certificates/uaudgmfqudkqs64wjv91.png',
        image: 'https://res.cloudinary.com/djxxtwy8k/image/upload/v1745079871/Certificates/uaudgmfqudkqs64wjv91.png',
        providerIcon: 'https://encrypted-tbn1.gstatic.com/faviconV2?url=https://accredian.com&client=IMAGE_SEARCH&size=24&type=FAVICON&fallback_opts=TYPE,SIZE,URL',
        iconWidth: '35px',
        rating: null
      },
      {
        title: 'Machine Learning Intermediate',
        provider: 'Accredian',
        url: 'https://res.cloudinary.com/djxxtwy8k/image/upload/v1745079877/Certificates/otv4oy6ijltuhnlfwcn5.png',
        image: 'https://res.cloudinary.com/djxxtwy8k/image/upload/v1745079877/Certificates/otv4oy6ijltuhnlfwcn5.png',
        providerIcon: 'https://encrypted-tbn1.gstatic.com/faviconV2?url=https://accredian.com&client=IMAGE_SEARCH&size=24&type=FAVICON&fallback_opts=TYPE,SIZE,URL',
        iconWidth: '35px',
        rating: null
      }
    ]
  },

  // About Section Content
  aboutContent: {
    get intro() {
      return `👋 Hi, I'm ${config.personalInfo.name}, a ${config.personalInfo.title} with {workExp} years of experience in frontend and media streaming technologies.`;
    },
    education: 'Hold B.Sc. (Hons.) degree in Mathematics and Master\'s in Computer Application.',
    specialization: `Specialized in JavaScript, TypeScript, and Node.js with expertise in OTT Media Player development using MPEG-DASH, HLS, Bitmovin, and RxPlayer. 
    Proficient in Angular, React, Vue.js frameworks, backend development with RDBMS/NoSQL databases, REST APIs, and Regular Expressions. 
    Experienced in test automation using Selenium WebDriver with Java & Cucumber BDD framework, and CI/CD with Jenkins.`
  },

  // Profile Section
  profile: {
    image: 'images/profile/profile.jpg',
    logo: 'images/profile/artbindu_ico.png',
    backgroundImage: 'images/profile/cc-bg-1.jpg'
  }
};

export default config;
