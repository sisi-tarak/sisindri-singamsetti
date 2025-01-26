import React, { Component } from "react";

import Project1 from "../../assets/Projects/01.png";
import Project2 from "../../assets/Projects/02.png";
import Project3 from "../../assets/Projects/03.png";
import Project4 from "../../assets/Projects/04.png";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    sisindrisingamsetti: [
      {
        personalDetails: {
          name: "Sisindri Singamsetti",
          title: "Hardworking and Motivated IT Student",
          bio: "I am Sisindri Singamsetti, a hardworking and motivated student with a strong focus on learning and growth. Currently pursuing a B.Tech in Information Technology at Sree Venkateswara College of Engineering, I am passionate about web development, backend technologies, and community-driven learning.",
        },
        education: [
          {
            level: "10th Grade",
            institution: "ZP High School Bhakarapeta",
            score: "598/600",
            year: "Completed",
          },
          {
            level: "Diploma",
            institution: "Sree Vidyanikethan Engineering College",
            score: "86.86%",
            year: "Completed",
          },
          {
            level: "B.Tech",
            institution: "Sree Venkateswara College of Engineering",
            specialization: "Information Technology",
            year: "2nd Year",
          },
        ],
        skills: [
          "ReactJS",
          "Tailwind CSS",
          "JavaScript",
          "NodeJS",
          "ExpressJS",
          "HTML",
          "CSS",
          "Redux",
          "Material UI",
          "Bootstrap",
        ],
        achievements: [
          "State Level Project Expo Participant (2022)",
          "Web Lead for Google Developer Group (GDG) at college",
          "Co-founder of Webortex, a startup focusing on web and app development",
        ],
        experience: {
          internship:
            "No official internships yet, but completed around seven full-stack projects for US clients and Indian clients.",
          startup: {
            name: "Webortex",
            description:
              "A startup focused on web and app development, providing real-time project experience to students through the Student Incubator Program.",
            roles: [
              "Co-founder",
              "Trainer for front-end development topics like ReactJS, Tailwind CSS, and Material UI",
            ],
          },
          gdg: {
            name: "Google Developer Group (GDG)",
            role: "Web Lead",
            description:
              "Guiding and supporting students in web development technologies.",
          },
        },
        initiatives: [
          {
            name: "Student Incubator Program (SIP)",
            description:
              "An initiative to bridge the skill gap between students and the job market by offering personalized training and real-world project experience.",
            features: [
              "One-to-one mentoring",
              "Hands-on training in front-end and backend development",
              "Real-time project exposure",
            ],
          },
        ],
        interests: [
          "Teaching front-end development",
          "Content creating",
          "Building real-time projects",
          "Supporting student skill development through SIP",
        ],
        contact: {
          email: "sisindrisingamsetti@gmail.com",
          phone: "+91 9502414128",
          linkedin: "https://www.linkedin.com/in/sisitarak/",
          github: "https://github.com/sisi-tarak",
          instagram: "https://www.instagram.com/sisi_tarakk/",
          youtube: "https://youtube.com/@sisi-tarakk",
        },
      },
    ],

    navItems: [
      {
        id: 1,
        text: "Work",
        path: "/",
      },
      {
        id: 2,
        text: "About",
        path: "/about",
      },
      {
        id: 3,
        text: "Resume",
        path: "/resume",
      },
    ],

    projectsLists: [
      {
        id: 1,
        title: "64 Frames",
        description: "",
        img: Project1,
        link: "https://www.64framez.com/",
      },
      {
        id: 2,
        title: "Webortex",
        description: "",
        img: Project2,
        link: "https://webortex.com/",
      },
      {
        id: 3,
        title: "Yes Telugu",
        description: "",
        img: Project3,
        link: "",
      },
      {
        id: 4,
        title: "Aaharadhaan",
        description: "",
        img: Project4,
        link: "",
      },
    ],

    topPicks: [
      {
        id: 1,
        title: "HP 15, 13th Gen",
        subtitle: "Intel Core i5-1334U",
        description:
          "16GB DDR4, 512GB SSD, (Win 11, Office 21, Silver, 1.59kg), Anti-glare, 15.6-inch(39.6cm) FHD Laptop, Intel Iris Xe Graphics, 1080p FHD camera, Backlit KB, fd0316TU",
        image: "https://m.media-amazon.com/images/I/71ALJrxmmDL._SX679_.jpg",
        link: "https://amzn.to/404LeMr",
      },
      {
        id: 2,
        title: "Dell Inspiron, 13th Gen",
        subtitle: "Intel Core i5-1334U",
        description:
          "16GB, 512GB SSD, 39.62cm (15.6″) FHD 120Hz 250 nits, Backlit KBWindows 11 + Mso'21 & 15 Month McAfee, Silver, Thin & Light-1.62kg",
        image: "https://m.media-amazon.com/images/I/71mFAMHkWyL._SX679_.jpg",
        link: "https://amzn.to/4h5UkzB",
      },
      {
        id: 3,
        title: "Dell Inspiron, 12th Gen",
        subtitle: "Intel Core i5-1235U",
        description:
          "8GB, 512GB SSD, 39.62cm (15.6″) FHD Display- 3 Side Narrow Border, Win 11 + MSO'21, 2 Tuned Speakers, Black, Thin & Light-1.65Kg",
        image: "https://m.media-amazon.com/images/I/51QGlg5iRdL._SX679_.jpg",
        link: "https://amzn.to/3PplKo1",
      },
      {
        id: 4,
        title: "HP 15, 13th Gen",
        subtitle: "Intel Core i5-1334U",
        description:
          "2022 Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 16GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Space Gray",
        image: "https://m.media-amazon.com/images/I/71r8h9mLzHL._SX679_.jpg",
        link: "https://amzn.to/4gYURmG",
      },
      {
        id: 5,
        title: "Apple iPad (10th Generation)",
        subtitle: "Liquid Retina Display, 64GB",
        description:
          "A14 Bionic chip, 27.69 cm (10.9″), Wi-Fi 6 + 5G Cellular, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Blue",
        image: "https://m.media-amazon.com/images/I/61ToKShnQvL._SX679_.jpg",
        link: "https://www.amazon.in/Apple-iPad-10th-generation-cellular/dp/B0BJM15HHH?_encoding=UTF8&content-id=amzn1.sym.d8376102-5264-464e-a3b1-4b902e45e118&crid=CFMT7LQN0SU5&dib=eyJ2IjoiMSJ9.UFKuA84f7wJdCVPIdz0iSxD8Fb5CpXEivj4uRufe6tTheRCKDr2kFzX1vrK-SZBUPlNNBwZGMZsTvVcVc704EP_fDNPyx6ubFngdOVa37EQKEkDU7sSa6W1q1D3cWt2Y3TTrjXvFqH04cDTrViCcnpqdCA3sSZjWX-RXU4VDjEE26bU218S-PJur7lyeLnRjI3e7_VZZBq1M3r9TxtV-LX9gMlQqebNtU5D71f1BTYjMiY_kzpyaOK5xKPuDZ3kmBmSpv1evX1ibNqUn_fYb3qvLulQfjxqeeYR9ZYVe-jYxh-ixe6FYnLr4W13ktV-cC-0tuOuihLlxtc5BM9XxU2hLIJ_jgCZPDv9izxS5h3--t8f2pqhRB346sI-EDZiOyS57ncqfEja9KoSrziZowHdC0EEQ3wAPM7du1EPMGhPNNppCBxcRY-2bYSisDxlA._44-pLZ6YBxXR7NSzQ--sbTZXMg_h7K63YNbAhdnB1c&dib_tag=se&pd_rd_r=1055e7fe-7bfa-4297-906e-4573888db487&pd_rd_w=dcI6D&pd_rd_wg=UP5mz&pf_rd_p=d8376102-5264-464e-a3b1-4b902e45e118&pf_rd_r=FAGQ6H2NR686ACEWRA9Z&qid=1736178009&sprefix=b09g9cvml5%2Bb09g9qfdvk%2Bb09g9hgl5f%2Bb09g99dr3t%2Bb09g97gz8q%2Bb09g9cxkcq%2Bb09g9f65mg%2Bb09g942p11%2Bb0bjmsfmhh%2Bb0bjmgxlyz%2Bb0bjm3nbmt%2Bb0bjldvx2s%2Bb0bjmn3wxm%2Bb0bjldfnvl%2Bb0bjlf8k57%2Bb0bjlhp48c%2Bb0bjmqd4wb%2Bb0bjm15hhh%2Bb0bjlxqjb5%2Bb0bjljxpm3%2Bb0bjm1756s%2Bb0bjmc644t%2Bb0bjmfbv6x%2Bb0bjmk7ct2%2Bb09v471196%2Bb09v48635g%2Bb09v4bx76b%2Bb09v4fnfhn%2Bb09v4q2wd6%2Bb09v4d952h%2Bb09v4s643n%2Bb09v4k1s59%2Bb09v45f5mf%2Bb09v4s5vw1%2Bb09v4jw485%2Bb09v4qzn7t%2Bb09v4tsxwx%2Bb09v4tpqzv%2Bb09v4dbcf9%2Bb09v4mktv4%2Bb09v4h3nz5%2Bb09v4h7ywg%2Bb09v47ysfc%2Bb09v4qlb1p%2Bb09g93k5d5%2Bb09g9bx757%2Bb09g99fvlv%2Bb09g9g58kq%2Bb09g95jt9x%2Bb09g95j6qd%2Bb09g93ls13%2Bb09g9hn533%2Bb09g999sm2%2Bb09g9cjm37%2Bb09g95svwb%2Bb09g982gfs%2Bb09g9dxg76%2Bb09g9j9bw2%2Bb09g9g88gd%2Bb09g9cklrv%2Bb0bjlfbyv1%2Bb0bjmckycy%2Bb0bjmn52cs%2Bb0bjmn69wf%2Bb0bjm3n9n5%2Bb0bjldv263%2Bb0bjmgztq8%2Bb0bjmch7w9%2Bb0bjmcj7kl%2Bb0bjmc8mh8%2Bb0bjlgzjkh%2Bb0bjmcmczh%2Bb0bjlhdt5k%2Bb0bjlzv5c3%2Bb0bjmvhvj4%2Bb0bjlxm3yr%2Bb0bjm9yqx3%2Bb0bjlkv244%2Bb0bjlhhq3j%2Bb0bjlg3nb8%2Bb0bjmmhsgm%2Bb0bjmvhrn9%2Bb0bjlhfzlf%2Bb0bjljwyhd%2Bb0bjlf5z2x%2Bb0bjm3k67t%2Bb0bjm7t9vr%2Bb0bjlcy91r%2Bb0bjlgfvx1%2Bb0bjmq9xhg%2Bb0bjmn32y2%2Bb0bjmgg19r%2Bb0bjldzk7n%2Bb0bjm63df8%2Bb0bjmd4x36%2Bb0bjlgk18n%2Bb0bjm15q5x%2Bb0bjldrx6q%2Bb0bjlh667t%2Bb0bjmjc2m4%2Caps%2C532&sr=8-14&th=1&linkCode=sl1&tag=sisitarakk90b-21&linkId=98c290249a278808a3eb07379bf6b3bb&language=en_IN&ref_=as_li_ss_tl",
      },
      {
        id: 6,
        title: "Apple iPad Pro 13″ (M4)",
        subtitle: "Ultra Retina XDR Display, 256GB",
        description:
          "Landscape 12MP Front Camera / 12MP Back Camera, LiDAR Scanner, Wi-Fi 6E, Face ID, All-Day Battery Life, Standard Glass — Space Black",
        image: "https://m.media-amazon.com/images/I/7131GFmmnCL._SX679_.jpg",
        link: "https://amzn.to/4j6UOXK",
      },
    ],

    documentationsData: [
      {
        id: 1,
        title: "React JS",
        subtitle: "Interview Q&A",
        headtext: "React JS",
        subtext: "Interview Questions",
        description:
          "A collection of frequently asked React interview questions to help you prepare, providing insight into potential topics without focusing on memorization.",
        link: "https://github.com/sisi-tarak/react-interview-questions.git",
      },
      {
        id: 2,
        title: "Data Analysis",
        subtitle: "Roadmap",
        headtext: "Data Analysis",
        subtext: "Roadmap",
        description:
          "A 100-day guide to mastering data analytics, including core skills, practical projects, and advanced techniques to shape your career.",
        link: "https://github.com/sisi-tarak/data-analysis-roadmap.git",
      },
      {
        id: 3,
        title: "Resume",
        subtitle: "Formats",
        headtext: "Resume",
        subtext: "Formats",
        description:
          "Explore various resume formats tailored to different career stages and job requirements, designed to highlight your skills effectively.",
        link: "https://github.com/sisi-tarak/resume-format.git",
      },
      {
        id: 4,
        title: "Resume",
        subtitle: "Guide",
        headtext: "Resume",
        subtext: "Guide",
        description:
          "A step-by-step guide to crafting a professional, ATS-friendly resume that highlights your skills and boosts your job opportunities.",
        link: "https://github.com/sisi-tarak/resume-guide.git",
      },
      {
        id: 5,
        title: "Git",
        subtitle: "Cheatsheet",
        headtext: "Git",
        subtext: "Cheatsheet",
        description:
          " A beginner-friendly Git cheat sheet covering essential commands, workflows, and precautions for reliable version control practices.",
        link: "https://github.com/sisi-tarak/Git-Cheat-Sheet.git",
      },
      {
        id: 6,
        title: "Tailwind CSS",
        subtitle: "Cheatsheet",
        headtext: "Tailwind CSS",
        subtext: "Cheatsheet",
        description:
          "A comprehensive guide to essential Tailwind CSS classes, from basic layouts to advanced effects and transitions, mapped to CSS properties.",
        link: "https://github.com/sisi-tarak/tailwindcssCheatsheat.git",
      },
    ],

    // for sisi content page
    buttonLabels: [
      {
        id: 1,
        label: "Roadmaps",
        link: "roadmaps",
      },
      {
        id: 2,
        label: "Resources",
        link: "resources",
      },
      {
        id: 3,
        label: "Projects",
        link: "",
      },
      {
        id: 4,
        label: "Tutorials",
        link: "",
      },
      {
        id: 5,
        label: "Contact",
        link: "",
      },
    ],
    roadmaps: [
      {
        id: 1,
        title: "Front-end Roadmap",
        description:
          "Discover the best practices for building a stunning front-end application.",
        link: "#",
      },
      {
        id: 2,
        title: "Back-end Roadmap",
        description:
          "Learn how to build scalable and maintainable back-end applications.",
        link: "#",
      },
      {
        id: 3,
        title: "Mobile App Roadmap",
        description:
          "Learn how to create cross-platform mobile apps using modern technologies.",
        link: "#",
      },
    ],
    resources: [
      {
        id: 1,
        title: "Top20 Java Leet Questions",
        description:
          "A comprehensive list of top 20 Java coding questions and answers.",
        link: "#",
      },
    ],

    resources: [
      {
        id: 1,
        title: "Top 20 Java Leet Questions",
        slug: "java-leet-questions",
        fullTitle: "Comprehensive Guide to Top 20 Java Leetcode Questions",
        description:
          "A comprehensive list of top 20 Java coding questions and answers.",
        paragraphs: [
          "This guide covers the most frequently asked Java coding questions in technical interviews, focusing on problem-solving and algorithmic thinking.",
          "Each question is carefully selected to represent different problem-solving paradigms and coding techniques used in real-world software development.",
        ],
        images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
        buttons: [
          {
            text: "View Solutions",
            link: "https://github.com/your-repo/java-leet-solutions",
          },
          {
            text: "Practice Platform",
            link: "https://leetcode.com/problemset/",
          },
          {
            text: "Interview Prep",
            link: "/interview-prep",
          },
        ],
      },
    ],
  };

  getResourceBySlug = (slug) => {
    return this.state.resources.find((resource) => resource.slug === slug);
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
