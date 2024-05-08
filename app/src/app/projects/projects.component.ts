import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

export interface Project {
  imagePath: string;
  name: string;
  description: string;
  content: string[];
  links: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {
  constructor(private dialog: MatDialog) {}

  projects: Project[] = [
    {
      imagePath: './assets/hsny-small.png',
      name: 'Hunger Solutions of New York',
      description: 'Financial Contact Management System',
      content: [
        'Develop and maintain a robust financial contact management system for Hunger Solutions of New York, funded by the NYS Office of Temporary and Disability Assistance (OTDA).',
        'Use Angular for the frontend, Express for the backend, and MariaDB/MySQL for the database to ensure a seamless user experience and efficient data management.',
        'Handle project management responsibilities, including requirements gathering, implementing enhancements, and overseeing development lifecycle.',
        'Manage system administration duties, including AWS server maintenance, EC2 instances, RDS, buckets, and networking, to ensure smooth operations and data security.',
        'Contribute significantly to streamlining operations and enhancing communication, aligning with the organization\'s mission to combat hunger and support communities in need.',
        'Provide comprehensive training and mentorship to an intern, contributing to their professional development and project contributions.'
      ],
      links: ['https://hungersolutionsny.org']
    },
    {
      name: 'Hunger Solutions of New York',
      description: 'Survey Tool for SNAP Eligibility',
      imagePath: './assets/snapsurvey.png',
      content: [
        'Execute a complete migration of an over-provisioned MSSQL server to a new RDS instance, ensuring optimal performance and resource utilization.',
        'Redesign and optimize the internal ACCESS program used by the HSNY team for survey inventory data management, enhancing efficiency and data handling capabilities.',
        'Implement enhancements and updates to the survey tool in ASP.NET to meet evolving project requirements and improve user experience.',
        'Provide comprehensive training and mentorship to an intern, contributing to their professional development and project contributions.'

      ],
      links: ['https://www.hungersolutionsny.cloud/page2.asp']
    },
    {
      imagePath: './assets/apexiem-small-1.png',
      name: 'Apexiem Title Search',
      description: 'Title Search Software',
      content: [
        'Play a pivotal role in developing and maintaining a powerful title search and management tool for Apexiem.com.',
        'Use Angular, Express, and MariaDB/MySQL to ensure robust data management capabilities and a seamless user experience.',
        'Implement advanced search functionalities, real-time data updates, and secure user authentication features.',
        'Handle project management responsibilities, including requirements gathering, implementing enhancements, and overseeing development lifecycle.',
        'Manage system administration duties, including AWS server maintenance, EC2 instances, RDS, buckets, and networking, to ensure smooth operations and data security.',
        'Contribute significantly to streamlining title search processes, improving data accuracy, and enhancing efficiency for real estate and legal industries.',
        'Provide comprehensive training and mentorship to an intern, contributing to their professional development and project contributions.'

      ],
      links: ['https://app.apexiem.com', 'https://apexiem.com']
    },    
    {
      imagePath: './assets/gridpaste-small.png',
      name: 'Gridpaste',
      description: 'Math Tool for Sharing Computations and Annotations',
      content: [
        'Rewrite backend in Python3/Django to optimize performance and functionality.',
        'Implement user authentication system with login/registration capabilities for enhanced security and user experience.',
        'Integrate backend API endpoints and data handling for seamless frontend integration.',
        'Optimize containerization using Docker to streamline deployment processes and enhance scalability.',
        'Make significant changes to build setups and configurations to ensure efficient development workflows.',
        'Collaborate closely with Jahan Addison, friend and fellow engineer, to enhance the open-source project.',
      ],
      links: ['https://gridpaste.io', 'https://github.com/bramz/gridpaste']
    },
    {
      imagePath: './assets/hts-small.png',
      name: 'Hack This Site',
      description: 'Educational Platform for Security Enthusiasts',
      content: [
        'Lead the development and maintenance of HackThisSite.org, a prominent platform for ethical hacking challenges and security education.',
        'Design and implement complex challenges to enhance user engagement and learning outcomes.',
        'Build and manage infrastructure using innovative technologies like FreeBSD jails for optimal performance and security.',
        'Collaborate with a diverse community of hackers to continuously improve the platform and expand its educational content.',
        'Contribute to the platform\'s evolution, including a major overhaul to version 2 and the development of a custom PHP CMS for streamlined management and content delivery.',
        'Create and host interactive Root This Box challenges at The Last H.O.P.E in NYC, engaging participants in hands-on cybersecurity exercises to enhance their skills and knowledge.',
        'Network with fellow technology enthusiasts at Carolina Con 4, collaborating on challenge development and exploring state-of-the-art infrastructure technologies to advance cybersecurity knowledge and skills.'
      ],
      links: ['https://hackthissite.org']
    },
    {
      imagePath: './assets/thoth.png',
      name: 'Thoth',
      description: 'Bullet Journal Application',
      content: [
        'Developed a bullet journal application using Django for the backend and TypeScript for the frontend.',
        'Designed and implemented user-friendly interfaces for journaling and task management.',
        'Ensured data integrity and security through robust backend and frontend validation mechanisms.'
      ],
      links: ['https://github.com/bramz/thoth.git']
    },
    {
      imagePath: './assets/maat.png',
      name: 'Maat',
      description: 'Dashboard Management Application',
      content: [
        'Built a dashboard management application using Angular for the frontend, Express for the backend, and PostgreSQL for the database.',
        'Implemented real-time data visualization and analytics capabilities for effective decision-making.',
        'Ensured data security and access control through role-based authentication and authorization mechanisms.'
      ],
      links: ['https://github.com/bramz/maat']
    },
    {
      imagePath: './assets/systemgo.png',
      name: 'SystemGo',
      description: 'Process Management Tool',
      content: [
        'Developed a process management tool in Golang for efficient monitoring and control of system processes.',
        'Implemented features for process visualization, resource utilization tracking, and performance optimization.',
        'Contributed to open-source community by sharing insights and collaborating with developers.'
      ],
      links: ['https://github.com/bramz/systemgo']
    },
    {
      imagePath: './assets/pharoah.png',
      name: 'Pharoah',
      description: 'Python3 RPG Game',
      content: [
        'Created a custom RPG game using Python3 with engaging gameplay mechanics and immersive storytelling.',
        'Designed and implemented game mechanics, character interactions, and narrative arcs for player engagement.',
        'Optimized game performance and user experience through iterative testing and feedback analysis.'
      ],
      links: ['https://github.com/bramz/pharoah']
    },
    {
      imagePath: './assets/gemini.png',
      name: 'Gemini',
      description: 'Cluster Container Orchestration Tool',
      content: [
        'Developed a cluster container orchestration tool in Python3 for efficient management and scaling of containerized applications.',
        'Implemented features for automatic deployment, load balancing, and fault tolerance in distributed environments.',
        'Contributed to enhancing containerization technologies and best practices.'
      ],
      links: ['https://github.com/packetfire/gemini']
    }
    // Add other projects with structured content
  ];
  
  sites: Project[] = [
    {
      imagePath: './assets/eastwind-small.png',
      name: 'Eastwind Lobster and Grille',
      description: 'Restaurant Website',
      content: [
        'Design and develop a custom website for East Wind Lobster and Grille, focusing on user experience and visual appeal.',
        'Utilize custom website building software to create a responsive and engaging online presence for the restaurant.',
        'Integrate online ordering system and menu management functionalities to enhance customer convenience.',
        'Collaborate closely with the restaurant owners to capture their brand identity and showcase their offerings effectively.'
      ],
      links: ['https://eastwindlobsterandgrille.com/']
    },
    // {
    //   imagePath: './assets/coriescustomcreations.png',
    //   name: "Corie's Custom Creations",
    //   description: 'Custom Printing Shop Website',
    //   content: [
    //     'Develop a business website for Corie\'s Custom Creations, a custom printing shop run by Corie-Lynn Hackett.',
    //     'Utilize multiple Ender 3 printers and a Cricut/heat press for various creations like clothing, stickers, flyers, and Cricut designs.',
    //     'Design and implement custom features for a seamless user experience and showcase the shop\'s offerings effectively.'
    //   ],
    //   links: ['https://ccc.brockramsey.com/']
    // },
    {
      name: 'Cappay',
      description: 'Capitol Payment Plan Website',
      imagePath: './assets/cappay-small.png',
      content: [
        "Address user-reported issues promptly and effectively.",
        "Implement bug fixes and enhancements to ensure seamless user experience.",
        'Test and verify fixes to ensure quality standards and user expectations.',
      ],
      links: ['https://www.cappay.com']
    },
    {
      imagePath: './assets/brockramsey.png',
      name: 'Brock Ramsey Portfolio',
      description: 'Personal Portfolio Website',
      content: [
        'Develop a personal portfolio website using Angular/Material theming and custom-designed features.',
        'Showcase skills, projects, and experience in a professional and visually appealing manner.',
        'Implement responsive design for optimal viewing across devices and browsers.'
      ],
      links: ['https://brockramsey.com']
    }
  ];

  checkImageExistsAsync(imagePath: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true); // Image loaded successfully
      img.onerror = () => resolve(false); // Image failed to load
      img.src = imagePath;
    });
  }
  
  async ngOnInit() {
    for (const project of this.projects) {
      const imageExists = await this.checkImageExistsAsync(project.imagePath);
      project.imagePath = imageExists ? project.imagePath : './assets/place.png';
    }
  
    for (const site of this.sites) {
      const imageExists = await this.checkImageExistsAsync(site.imagePath);
      site.imagePath = imageExists ? site.imagePath : './assets/place.png';
    }
  }

  getShortName(link: string): string {
    // Extract the last part of the URL after '/'
    const parts = link.split('/');
    let shortName = parts[parts.length - 1];
    
    if(link.includes('cappay')) {
      shortName = 'Cappay.com'
    }
    if(link.includes('github.com')) {
      shortName = 'Github Repository'
    }

    if(link.includes('page2')) {
      shortName = 'HSNY SNAP Survey'
    }

    if(link.includes('hungersolutionsny.org')) {
      // shortName = shortName.toUpperCase()
      shortName = 'Hunger Solutions NY'
    }

    if(link.includes('app.apexiem')) {
      shortName = 'Apexiem Title Search Software'
    }

    if(link.includes('ccc')) {
      shortName = 'CCC E-Commerce Website'
    }

    if(link.includes('eastwind')) {
      shortName = 'Eastwind Lobster and Grille Website'
    }

    // Remove the domain suffix (e.g., .com, .org, etc.)
    const dotIndex = shortName.lastIndexOf('.');

    if (dotIndex !== -1) {
      shortName = shortName.slice(0, dotIndex);
    }
  
    // Capitalize the first letter of each word
    return shortName.split('.').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  openImageDialog(imageURL: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: { imageURL }
    });
  }
}
