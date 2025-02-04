import React, { Component } from "react";

import Project1 from "../../assets/Projects/01.png";
import Project2 from "../../assets/Projects/02.png";
import Project3 from "../../assets/Projects/03.png";
import Project4 from "../../assets/Projects/04.png";

import frontendRoadmap from "../../assets/Resources/Frontend-Roadmap-PDF.pdf";

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
          "16GB DDR4, 512GB SSD, (Win 11, Office 21, Silver, 1.59kg), Anti-Glare, 15.6-inch(39.6cm) FHD Laptop, Iris Xe Graphics, FHD Camera, Backlit KB, fd0316TU/fd0315TU",
        image: "https://m.media-amazon.com/images/I/71J+OBadJCL._SX679_.jpg",
        link: "https://amzn.to/3CCEXjq",
      },
      {
        id: 2,
        title: "Lenovo IdeaPad Slim 5 12th Gen",
        subtitle: "Intel Core i5 12450H",
        description:
          "14-inch(35.5cm) WUXGA+ IPS Laptop (16GB/512GB SSD/Win 11/Office 2021/Backlit KB/FHD Camera/Alexa/3 Month Game Pass/Cloud Grey/1.46Kg), 83BF000UIN",
        image: "https://m.media-amazon.com/images/I/61UjxQh+aYL._SX679_.jpg",
        link: "https://amzn.to/4jMEcoS",
      },
      {
        id: 3,
        title: "HP 15, 12th Gen",
        subtitle: "Intel Core i5-1235U",
        description:
          "16GB DDR4, 512GB SSD, (Win 11, Office 21, Silver, 1.69kg), Anti-Glare, 15.6-inch(39.6cm) FHD Laptop, Intel Iris Xe Graphics, HD Camera, Backlit Keyboard, fy5009tu",
        image: "https://m.media-amazon.com/images/I/71p8u7Upw1L._SX679_.jpg",
        link: "https://amzn.to/4gqIGyk",
      },
      {
        id: 4,
        title: "2022 Apple MacBook",
        subtitle: "Air Laptop with M2 chip",
        description:
          "13.6-inch Liquid Retina Display, 16GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Silver",
        image: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SX679_.jpg",
        link: "https://amzn.to/3Q83WOw",
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
        slug: "front-end-roadmap",
        description:
          "A clear step-by-step guide to becoming a front-end developer, including concepts, project ideas, and interview tips.",

        concepts: {
          html: [
            { topic: "Basic tags and attributes" },
            { topic: "Semantic HTML" },
            { topic: "Forms and input types" },
            { topic: "Accessibility", details: ["ARIA roles", "alt text"] },
          ],
          css: [
            { topic: "Selectors and specificity" },
            { topic: "Box model", details: ["Margin", "Padding", "Border"] },
            { topic: "Layout", details: ["Flexbox", "Grid"] },
            { topic: "Responsive design", details: ["Media queries"] },
            { topic: "Animations and transitions" },
          ],
          javascript: [
            { topic: "Variables and Data Types" },
            { topic: "Functions and Scope" },
            { topic: "DOM Manipulation" },
            {
              topic: "Fetch API",
              details: ["AJAX", "Promises", "async/await"],
            },
            {
              topic: "ES6+ Features",
              details: ["Arrow functions", "Destructuring"],
            },
          ],
          react: [
            { topic: "Components", details: ["Functional", "Class-based"] },
            { topic: "Props and State" },
            {
              topic: "Hooks",
              details: ["useState", "useEffect", "useContext"],
            },
            { topic: "Routing", details: ["React Router"] },
            { topic: "State Management", details: ["Context API", "Redux"] },
          ],
        },
        projects: {
          beginner: [
            { name: "Personal Portfolio", stack: ["HTML", "CSS"] },
            { name: "To-Do List App", stack: ["JavaScript"] },
            { name: "Simple Calculator", stack: ["JavaScript"] },
            { name: "Responsive Landing Page", stack: ["HTML", "CSS"] },
          ],
          intermediate: [
            { name: "Weather App", stack: ["React", "API integration"] },
            { name: "Blog Website", stack: ["React", "React Router"] },
            {
              name: "E-commerce Product Page",
              stack: ["React", "Tailwind CSS"],
            },
            { name: "Quiz App", stack: ["JavaScript", "React"] },
          ],
          advanced: [
            { name: "Full-Stack Blog", stack: ["Next.js", "API routes"] },
            { name: "Task Manager App", stack: ["React Native"] },
            {
              name: "Social Media Dashboard",
              stack: ["React", "Redux", "Jest"],
            },
            { name: "Real-Time Chat App", stack: ["React", "WebSockets"] },
          ],
        },
        interviewTips: [
          {
            tip: "Prepare for technical questions on HTML, CSS, and JavaScript.",
          },
          { tip: "Showcase your portfolio and explain your projects." },
          { tip: "Practice problem-solving and coding challenges." },
          { tip: "Understand browser mechanics and performance optimization." },
          { tip: "Ask about the company’s tech stack and team structure." },
          {
            tip: "Be honest about what you don’t know and show willingness to learn.",
          },
        ],
        finalTips: [
          {
            title: "Consistency is Key",
            description: "Dedicate time daily to learning and practicing.",
          },
          {
            title: "Build Projects",
            description:
              "Apply what you learn by building real-world projects.",
          },
          {
            title: "Stay Updated",
            description:
              "Follow blogs, YouTube channels, and forums to stay updated with the latest trends.",
          },
          {
            title: "Network",
            description:
              "Join developer communities on LinkedIn, Twitter, or Discord to connect with others.",
          },
        ],
        buttonsSet2: [
          {
            id: 1,
            text: "Download Roadmap",
            src: frontendRoadmap,
            link: "",
          },
          {
            id: 2,
            text: "View Roadmap",
            link: "https://github.com/sisi-tarak/frontend-roadmap.git",
          },
          {
            id: 3,
            text: "Youtube",
            link: "https://youtube.com/@sisi-tarakk/",
          },
        ],
        buttons: [
          {
            id: 1,
            text: "Download Roadmap",
            src: frontendRoadmap,
            link: "",
          },
          {
            id: 2,
            text: "View Roadmap",
            link: "https://github.com/sisi-tarak/frontend-roadmap.git",
          },
        ],
      },
    ],

    resources: [
      {
        id: 1,
        title: "Top 20 Java Leet Questions",
        slug: "java-leetcode-questions",
        fullTitle: "Top 20 Java LeetCode Interview Questions & Solutions 🚀",
        description:
          "Welcome to the Top 20 Java LeetCode Interview Questions! Whether you're prepping for coding interviews or looking to improve your problem-solving skills, this is a curated collection of the most essential LeetCode problems that you’ll encounter in interviews. Each problem is followed by a clear and efficient solution in Java, along with an explanation to ensure you understand the concepts behind it.",
        paragraphs: [],
        questions: [
          {
            id: 1,
            title: "Two Sum",
            problem:
              "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
            code: `public int[] twoSum(int[] nums, int target) {
      Map<Integer, Integer> map = new HashMap<>();
      for (int i = 0; i < nums.length; i++) {
          int complement = target - nums[i];
          if (map.containsKey(complement)) {
              return new int[] { map.get(complement), i };
          }
          map.put(nums[i], i);
      }
      return new int[] {};
  }`,
            explanation:
              "Use a HashMap to store each number and its index. For each number, calculate the complement and check if it exists in the map.",
          },
          {
            id: 2,
            title: "Reverse Linked List",
            problem: "Reverse a singly linked list.",
            code: `public ListNode reverseList(ListNode head) {
      ListNode prev = null;
      ListNode curr = head;
      while (curr != null) {
          ListNode nextTemp = curr.next;
          curr.next = prev;
          prev = curr;
          curr = nextTemp;
      }
      return prev;
  }`,
            explanation:
              "Iterate through the list, reversing links by changing each node's next pointer to the previous node.",
          },
          {
            id: 3,
            title: "Valid Parentheses",
            problem:
              "Determine if a string containing only parentheses `()`, `{}`, `[]` is valid.",
            code: `public boolean isValid(String s) {
      Stack<Character> stack = new Stack<>();
      for (char c : s.toCharArray()) {
          if (c == '(') stack.push(')');
          else if (c == '{') stack.push('}');
          else if (c == '[') stack.push(']');
          else if (stack.isEmpty() || stack.pop() != c) return false;
      }
      return stack.isEmpty();
  }`,
            explanation:
              "Use a stack to track opening parentheses. Push corresponding closing parentheses and validate against incoming characters.",
          },
          {
            id: 4,
            title: "Merge Two Sorted Lists",
            problem: "Merge two sorted linked lists into one sorted list.",
            code: `public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
      ListNode dummy = new ListNode();
      ListNode tail = dummy;
  
      while (list1 != null && list2 != null) {
          if (list1.val <= list2.val) {
              tail.next = list1;
              list1 = list1.next;
          } else {
              tail.next = list2;
              list2 = list2.next;
          }
          tail = tail.next;
      }
  
      tail.next = (list1 != null) ? list1 : list2;
      return dummy.next;
  }`,
            explanation:
              "Use a dummy node to simplify merging. Compare nodes from both lists and append the smaller one.",
          },
          {
            id: 5,
            title: "Longest Substring Without Repeating Characters",
            problem:
              "Find the length of the longest substring without repeating characters.",
            code: `public int lengthOfLongestSubstring(String s) {
      Set<Character> set = new HashSet<>();
      int left = 0;
      int maxLen = 0;
  
      for (int right = 0; right < s.length(); right++) {
          while (set.contains(s.charAt(right))) {
              set.remove(s.charAt(left));
              left++;
          }
          set.add(s.charAt(right));
          maxLen = Math.max(maxLen, right - left + 1);
      }
  
      return maxLen;
  }`,
            explanation:
              "Use a sliding window approach. Maintain a HashSet to store characters in the current window.",
          },
          {
            id: 6,
            title: "Climbing Stairs",
            problem:
              "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
            code: `public int climbStairs(int n) {
      if (n <= 1) {
          return 1;
      }
      int[] dp = new int[n + 1];
      dp[0] = 1;
      dp[1] = 1;
      for (int i = 2; i <= n; i++) {
          dp[i] = dp[i - 1] + dp[i - 2];
      }
      return dp[n];
  }`,
            explanation:
              "Use dynamic programming. The number of ways to reach step i is the sum of ways to reach steps i-1 and i-2.",
          },
          {
            id: 7,
            title: "Binary Search",
            problem:
              "Given a sorted array of integers `nums` and an integer `target`, write an efficient algorithm to search for `target`. Return its index or -1 if not found.",
            code: `public int search(int[] nums, int target) {
      int left = 0;
      int right = nums.length - 1;
  
      while (left <= right) {
          int mid = left + (right - left) / 2;
          if (nums[mid] == target) {
              return mid;
          } else if (nums[mid] < target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  
      return -1;
  }`,
            explanation:
              "Use binary search to efficiently find the target. Divide the search space in half at each iteration.",
          },
          {
            id: 8,
            title: "Implement Queue using Stacks",
            problem:
              "Implement a first-in-first-out (FIFO) queue using only two stacks.",
            code: `class MyQueue {
      private Stack<Integer> stack1;
      private Stack<Integer> stack2;
  
      public MyQueue() {
          stack1 = new Stack<>();
          stack2 = new Stack<>();
      }
  
      public void push(int x) {
          stack1.push(x);
      }
  
      public int pop() {
          if (stack2.isEmpty()) {
              while (!stack1.isEmpty()) {
                  stack2.push(stack1.pop());
              }
          }
          return stack2.pop();
      }
  
      public int peek() {
          if (stack2.isEmpty()) {
              while (!stack1.isEmpty()) {
                  stack2.push(stack1.pop());
              }
          }
          return stack2.peek();
      }
  
      public boolean empty() {
          return stack1.isEmpty() && stack2.isEmpty();
      }
  }`,
            explanation:
              "Use two stacks. One for pushing elements, another for popping/peeking. Transfer elements between stacks as needed.",
          },
          {
            id: 9,
            title: "Valid Palindrome",
            problem:
              "Determine whether a given string is a palindrome, considering only alphanumeric characters and ignoring cases.",
            code: `public boolean isPalindrome(String s) {
  int left = 0;
  int right = s.length() - 1;

  while (left < right) {
      while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
          left++;
      }
      while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
          right--;
      }
      if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
          return false;
      }
      left++;
      right--;
  }

  return true;
}`,
            explanation:
              "Use two-pointer approach. Skip non-alphanumeric characters and compare characters ignoring case.",
          },
          {
            id: 10,
            title: "Merge Sorted Array",
            problem:
              "Merge two sorted integer arrays `nums1` and `nums2` into a single sorted array in `nums1`.",
            code: `public void merge(int[] nums1, int m, int[] nums2, int n) {
      int p1 = m - 1; // Pointer for nums1
      int p2 = n - 1; // Pointer for nums2
      int p = m + n - 1; // Pointer for the merged array
  
      while (p2 >= 0) {
          if (p1 >= 0 && nums1[p1] > nums2[p2]) {
              nums1[p] = nums1[p1];
              p1--;
          } else {
              nums1[p] = nums2[p2];
              p2--;
          }
          p--;
      }
  }`,
            explanation:
              "Start from the end of both arrays. Compare and place the larger element at the end of nums1.",
          },
          {
            id: 11,
            title: "Remove Duplicates from Sorted Array",
            problem:
              "Remove duplicates from a sorted array in-place and return the number of unique elements.",
            code: `public int removeDuplicates(int[] nums) {
      if (nums.length == 0) {
          return 0;
      }
  
      int slow = 0;
      for (int fast = 1; fast < nums.length; fast++) {
          if (nums[slow] != nums[fast]) {
              slow++;
              nums[slow] = nums[fast];
          }
      }
  
      return slow + 1;
  }`,
            explanation:
              "Use two pointers. Slow pointer tracks unique elements, fast pointer finds next unique element.",
          },
          {
            id: 12,
            title: "String to Integer (atoi)",
            problem:
              "Implement a function to convert a string to a 32-bit signed integer.",
            code: `public int myAtoi(String s) {
      s = s.trim();
      if (s.isEmpty()) {
          return 0;
      }
  
      boolean isNegative = false;
      if (s.charAt(0) == '-') {
          isNegative = true;
          s = s.substring(1);
      } else if (s.charAt(0) == '+') {
          s = s.substring(1);
      }
  
      long result = 0;
      for (char c : s.toCharArray()) {
          if (!Character.isDigit(c)) {
              break;
          }
          result = result * 10 + (c - '0');
          if (result > Integer.MAX_VALUE) {
              return isNegative ? Integer.MIN_VALUE : Integer.MAX_VALUE;
          }
      }
  
      return isNegative ? (int) -result : (int) result;
  }`,
            explanation:
              "Handle whitespace, sign, and digit conversion. Check for integer overflow.",
          },
          {
            id: 13,
            title: "Longest Common Prefix",
            problem:
              "Find the longest common prefix string amongst an array of strings.",
            code: `public String longestCommonPrefix(String[] strs) {
      if (strs == null || strs.length == 0) {
          return "";
      }
  
      String prefix = strs[0];
      for (int i = 1; i < strs.length; i++) {
          while (!strs[i].startsWith(prefix)) {
              prefix = prefix.substring(0, prefix.length() - 1);
              if (prefix.isEmpty()) {
                  return "";
              }
          }
      }
  
      return prefix;
  }`,
            explanation:
              "Start with first string as prefix. Progressively shorten prefix until it matches all strings.",
          },
          {
            id: 14,
            title: "Roman to Integer",
            problem: "Convert a Roman numeral to an integer.",
            code: `public int romanToInt(String s) {
      Map<Character, Integer> romanMap = new HashMap<>();
      romanMap.put('I', 1);
      romanMap.put('V', 5);
      romanMap.put('X', 10);
      romanMap.put('L', 50);
      romanMap.put('C', 100);
      romanMap.put('D', 500);
      romanMap.put('M', 1000);
  
      int result = 0;
      int prevVal = 0;
  
      for (int i = s.length() - 1; i >= 0; i--) {
          int currVal = romanMap.get(s.charAt(i));
          if (currVal < prevVal) {
              result -= currVal;
          } else {
              result += currVal;
          }
          prevVal = currVal;
      }
  
      return result;
  }`,
            explanation:
              "Iterate from right to left. Subtract if current value is less than previous value.",
          },
          {
            id: 15,
            title: "Container With Most Water",
            problem:
              "Find two lines that form a container with the maximum water.",
            code: `public int maxArea(int[] height) {
      int left = 0;
      int right = height.length - 1;
      int maxArea = 0;
  
      while (left < right) {
          int area = Math.min(height[left], height[right]) * (right - left);
          maxArea = Math.max(maxArea, area);
  
          if (height[left] < height[right]) {
              left++;
          } else {
              right--;
          }
      }
  
      return maxArea;
  }`,
            explanation:
              "Use two-pointer approach. Calculate area and move pointer with shorter height.",
          },
          {
            id: 16,
            title: "3Sum",
            problem:
              "Find all unique triplets in the array which gives the sum of zero.",
            code: `public List<List<Integer>> threeSum(int[] nums) {
      Arrays.sort(nums);
      List<List<Integer>> result = new ArrayList<>();
  
      for (int i = 0; i < nums.length - 2; i++) {
          if (i > 0 && nums[i] == nums[i - 1]) {
              continue;
          }
          int left = i + 1;
          int right = nums.length - 1;
  
          while (left < right) {
              int sum = nums[i] + nums[left] + nums[right];
              if (sum == 0) {
                  result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                  while (left < right && nums[left] == nums[left + 1]) {
                      left++;
                  }
                  while (left < right && nums[right] == nums[right - 1]) {
                      right--;
                  }
                  left++;
                  right--;
              } else if (sum < 0) {
                  left++;
              } else {
                  right--;
              }
          }
      }
  
      return result;
  }`,
            explanation:
              "Sort the array. Use two-pointer technique to find triplets that sum to zero.",
          },

          {
            id: 17,
            title: "Letter Combinations of a Phone Number",
            problem:
              "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.",
            code: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LetterCombinationsOfPhoneNumber {
  public List<String> letterCombinations(String digits) {
      if (digits.isEmpty()) {
          return new ArrayList<>();
      }

      Map<Character, String> digitToLetters = new HashMap<>();
      digitToLetters.put('2', "abc");
      digitToLetters.put('3', "def");
      digitToLetters.put('4', "ghi");
      digitToLetters.put('5', "jkl");
      digitToLetters.put('6', "mno");
      digitToLetters.put('7', "pqrs");
      digitToLetters.put('8', "tuv");
      digitToLetters.put('9', "wxyz");

      List<String> result = new ArrayList<>();
      backtrack(digits, 0, new StringBuilder(), digitToLetters, result);
      return result;
  }

  private void backtrack(String digits, int index, StringBuilder currentString, Map<Character, String> digitToLetters, List<String> result) {
      if (index == digits.length()) {
          result.add(currentString.toString());
          return;
      }

      String letters = digitToLetters.get(digits.charAt(index));
      for (char letter : letters.toCharArray()) {
          currentString.append(letter);
          backtrack(digits, index + 1, currentString, digitToLetters, result);
          currentString.deleteCharAt(currentString.length() - 1);
      }
  }
}`,
            explanation:
              "Create a HashMap to map digits to their corresponding letters. Use backtracking to explore all possible combinations. The backtrack function recursively explores each digit and adds its corresponding letters to the currentString. When the index reaches the end of the digits string, add the currentString to the result list.",
          },
          {
            id: 18,
            title: "Combination Sum",
            problem:
              "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the numbers in each combination add up to target. You may return the combinations in any order.",
            code: `import java.util.ArrayList;
import java.util.List;

public class CombinationSum {
  public List<List<Integer>> combinationSum(int[] candidates, int target) {
      List<List<Integer>> result = new ArrayList<>();
      backtrack(candidates, target, 0, new ArrayList<>(), result);
      return result;
  }

  private void backtrack(int[] candidates, int target, int start, List<Integer> current, List<List<Integer>> result) {
      if (target == 0) {
          result.add(new ArrayList<>(current));
          return;
      }

      if (target < 0) {
          return;
      }

      for (int i = start; i < candidates.length; i++) {
          current.add(candidates[i]);
          backtrack(candidates, target - candidates[i], i, current, result);
          current.remove(current.size() - 1);
      }
  }
}`,
            explanation:
              "Use backtracking to explore all possible combinations. The backtrack function recursively explores each candidate: If the target reaches 0, add the current combination to the result. If the target becomes negative, stop the recursion. Include the current candidate in the current combination and recursively explore further. Backtrack by removing the current candidate from the current combination. Explore the next candidate without including the current one.",
          },
          {
            id: 19,
            title: "Permutations",
            problem:
              "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
            code: `import java.util.ArrayList;
import java.util.List;

public class Permutations {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, new ArrayList<>(), result);
        return result;
    }

    private void backtrack(int[] nums, List<Integer> current, List<List<Integer>> result) {
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int num : nums) {
            if (!current.contains(num)) {
                current.add(num);
                backtrack(nums, current, result);
                current.remove(current.size() - 1);
            }
        }
    }
}`,
            explanation:
              "Use backtracking to explore all possible permutations. The backtrack function recursively explores each number in the nums array: If the current permutation has the same length as nums, add it to the result. If the num is not already in the current permutation, add it to the current permutation and recursively explore further. Backtrack by removing the num from the current permutation.",
          },
          {
            id: 20,
            title: "Subsets",
            problem:
              "Given an integer array nums, return all possible subsets (the power set). The solution must not contain duplicate subsets.",
            code: `import java.util.ArrayList;
import java.util.List;

public class Subsets {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        result.add(new ArrayList<>());

        for (int num : nums) {
            int n = result.size();
            for (int i = 0; i < n; i++) {
                List<Integer> newSubset = new ArrayList<>(result.get(i));
                newSubset.add(num);
                result.add(newSubset);
            }
        }

        return result;
    }
}`,
            explanation:
              "Start with an empty set (an empty list) in the result. Iterate through each number in nums: Create new subsets by adding the current num to each existing subset in the result. Add the new subsets to the result.",
          },
        ],
        images: ["", ""],
        buttonsSet2: [
          {
            text: "View Solutions",
            link: "https://github.com/sisi-tarak/Top-20-LeetCode-Questions.git",
          },
          {
            text: "Practice Platform",
            link: "https://leetcode.com/problemset/",
          },
          {
            text: "Youtube",
            link: "https://youtube.com/@sisi-tarakk/",
          },
        ],
        buttons: [
          {
            text: "View Solutions",
            link: "https://github.com/sisi-tarak/Top-20-LeetCode-Questions.git",
          },
          {
            text: "Practice Platform",
            link: "https://leetcode.com/problemset/",
          },
        ],
      },
      {
        id: 2,
        title: "Top 20 Python Leet Questions",
        slug: "python-leetcode-questions",
        fullTitle: "Top 20 Python LeetCode Interview Questions & Solutions 🚀",
        description:
          "Welcome to the Top 20 Python LeetCode Interview Questions! Whether you're prepping for coding interviews or looking to improve your problem-solving skills, this is a curated collection of the most essential LeetCode problems that you’ll encounter in interviews. Each problem is followed by a clear and efficient solution in Python, along with an explanation to ensure you understand the concepts behind it.",
        paragraphs: [],
        questions: [
          {
            id: 1,
            title: "Two Sum",
            problem:
              "Given an array of integers `nums` and an integer `target`, return *indices* of the two numbers such that they add up to `target`.",
            code: `def two_sum(nums, target):
  seen = {}
  for i, num in enumerate(nums):
      complement = target - num
      if complement in seen:
          return [seen[complement], i]
      seen[num] = i
return []`,
            explanation:
              "We use a dictionary (`seen`) to store the numbers we have encountered and their corresponding indices. For each number `num` in the list, calculate the `complement` needed to reach the `target`. If the `complement` is already in the `seen` dictionary, we have found the pair. Return the indices.",
          },
          {
            id: 2,
            title: "Reverse Linked List",
            problem: "Reverse a singly linked list.",
            code: `def reverse_list(head):
  prev = None
  curr = head
  while curr:
      next_node = curr.next
      curr.next = prev
      prev = curr
      curr = next_node
  return prev`,
            explanation:
              "Initialize `prev` to `None` and `curr` to the `head` of the list. Iterate through the list: store the `next` node of the current node, reverse the link of the current node, move `prev` to the current node, and move `curr` to the `next_node`.",
          },
          {
            id: 3,
            title: "Valid Parentheses",
            problem:
              "Determine if a string containing only parentheses `()`, `{}`, `[]` is valid.",
            code: `def is_valid(s):
  stack = []
  mapping = {')': '(', '}': '{', ']': '['}
  for char in s:
      if char in mapping:
          if not stack or stack.pop() != mapping[char]:
              return False
      else:
          stack.append(char)
  return not stack`,
            explanation:
              "Use a stack to keep track of opening parentheses. If a closing parenthesis is encountered, check if the stack is empty or the top of the stack doesn't match the corresponding opening parenthesis. After iteration, the stack should be empty if all parentheses are valid.",
          },
          {
            id: 4,
            title: "Merge Two Sorted Lists",
            problem: "Merge two sorted linked lists into one sorted list.",
            code: `def merge_two_lists(list1, list2):
  dummy = ListNode()
  tail = dummy

  while list1 and list2:
      if list1.val <= list2.val:
          tail.next = list1
          list1 = list1.next
      else:
          tail.next = list2
          list2 = list2.next
      tail = tail.next

  if list1:
      tail.next = list1
  elif list2:
      tail.next = list2

  return dummy.next`,
            explanation:
              "Create a dummy node to simplify the logic. Initialize a `tail` pointer to the dummy node. Iterate through both lists, comparing the values and appending the node with the smaller value to the `tail`. If one list becomes empty, append the remaining nodes of the other list.",
          },
          {
            id: 5,
            title: "Longest Substring Without Repeating Characters",
            problem:
              "Find the length of the longest substring without repeating characters.",
            code: `def length_of_longest_substring(s):
  char_index = {}
  max_length = 0
  start = 0

  for end in range(len(s)):
      if s[end] in char_index and char_index[s[end]] >= start:
          start = char_index[s[end]] + 1
      char_index[s[end]] = end
      max_length = max(max_length, end - start + 1)

  return max_length`,
            explanation:
              "Use a sliding window approach. Maintain a dictionary `char_index` to store the last seen index of each character. If the current character is already in the window, update the start of the window. Update the max length of the substring without repeating characters.",
          },
          {
            id: 6,
            title: "Climbing Stairs",
            problem:
              "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
            code: `def climb_stairs(n):
  if n <= 1:
      return 1
  dp = [0] * (n + 1)
  dp[0] = 1
  dp[1] = 1
  for i in range(2, n + 1):
      dp[i] = dp[i - 1] + dp[i - 2]
  return dp[n]`,
            explanation:
              "Use dynamic programming to solve the problem. Create a `dp` array to store the number of ways to reach each step. Initialize base cases for 0 and 1 steps. For each subsequent step, the number of ways is the sum of ways to reach the previous two steps.",
          },
          {
            id: 7,
            title: "Binary Search",
            problem:
              "Given a sorted array of integers `nums` and an integer `target`, write an efficient algorithm to search for `target` in `nums`.",
            code: `def binary_search(nums, target):
  left = 0
  right = len(nums) - 1

  while left <= right:
      mid = (left + right) // 2
      if nums[mid] == target:
          return mid
      elif nums[mid] < target:
          left = mid + 1
      else:
          right = mid - 1

  return -1`,
            explanation:
              "Initialize `left` and `right` pointers to the beginning and end of the array. Calculate the `mid` index and compare it with the target. Update `left` or `right` based on the comparison. If the target is not found, return -1.",
          },
          {
            id: 8,
            title: "Implement Queue using Stacks",
            problem:
              "Implement a first-in, first-out (FIFO) queue using only two stacks.",
            code: `class MyQueue:
  def __init__(self):
      self.stack1 = []
      self.stack2 = []

  def push(self, x: int) -> None:
      self.stack1.append(x)

  def pop(self) -> int:
      if not self.stack2:
          while self.stack1:
              self.stack2.append(self.stack1.pop())
      return self.stack2.pop()

  def peek(self) -> int:
      if not self.stack2:
          while self.stack1:
              self.stack2.append(self.stack1.pop())
      return self.stack2[-1]

  def empty(self) -> bool:
      return not self.stack1 and not self.stack2`,
            explanation:
              "Use two stacks: `stack1` for push operations and `stack2` for pop and peek operations. When pop or peek is called, transfer elements from `stack1` to `stack2` if `stack2` is empty. The `empty` method checks if both stacks are empty.",
          },
          {
            id: 9,
            title: "Valid Palindrome",
            problem: "Determine whether a given string is a palindrome.",
            code: `def is_palindrome(s):
  left = 0
  right = len(s) - 1

  while left < right:
      while left < right and not alphanum(s[left]):
          left += 1
      while left < right and not alphanum(s[right]):
          right -= 1
      if s[left].lower() != s[right].lower():
          return False
      left += 1
      right -= 1

  return True

def alphanum(c):
  return (ord('a') <= ord(c) <= ord('z') or
          ord('A') <= ord(c) <= ord('Z') or
          ord('0') <= ord(c) <= ord('9'))`,
            explanation:
              "Use two pointers, `left` and `right`, starting from the beginning and end of the string. Skip non-alphanumeric characters. Compare characters (ignoring case). If any mismatch is found, return False. If the pointers meet without finding a mismatch, return True.",
          },
          {
            id: 10,
            title: "Merge Sorted Array",
            problem:
              "Given two sorted integer arrays `nums1` and `nums2`, merge `nums2` into `nums1` in such a way that it becomes a single, sorted array.",
            code: `def merge(nums1, m, nums2, n):
  p1 = m - 1
  p2 = n - 1
  p = m + n - 1

  while p2 >= 0:
      if p1 >= 0 and nums1[p1] > nums2[p2]:
          nums1[p] = nums1[p1]
          p1 -= 1
      else:
          nums1[p] = nums2[p2]
          p2 -= 1
      p -= 1`,
            explanation:
              "Use three pointers: `p1` for `nums1`, `p2` for `nums2`, and `p` for the merged array. Compare elements from the end of both arrays and place the larger element at the end of `nums1`. Continue until all elements from `nums2` are merged.",
          },
          {
            id: 11,
            title: "Remove Duplicates from Sorted Array",
            problem:
              "Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.",
            code: `def remove_duplicates(nums):
    if not nums:
        return 0

    slow = 0
    for fast in range(1, len(nums)):
        if nums[slow] != nums[fast]:
            slow += 1
            nums[slow] = nums[fast]

    return slow + 1`,
            explanation:
              "Use two pointers, `slow` and `fast`. When a different element is found, increment `slow` and replace the element at `slow` with the different element. Return the length of the unique array.",
          },
          {
            id: 12,
            title: "String to Integer (atoi)",
            problem:
              "Implement the `myAtoi(string s)` function, which converts a string to an integer.",
            code: `def my_atoi(s):
    s = s.strip()
    if not s:
        return 0

    sign = 1
    if s[0] == '-':
        sign = -1
        s = s[1:]
    elif s[0] == '+':
        s = s[1:]

    result = 0
    for char in s:
        if not char.isdigit():
            break
        result = result * 10 + int(char)
        if result > 2**31 - 1:
            return 2**31 - 1
        if result < -2**31:
            return -2**31

    return result * sign`,
            explanation:
              "Remove whitespaces, handle the sign, iterate through characters. Convert digits to integer, check for overflow, and handle non-digit characters by breaking the loop.",
          },
          {
            id: 13,
            title: "Longest Common Prefix",
            problem:
              "Write a function to find the longest common prefix string amongst an array of strings.",
            code: `def longest_common_prefix(strs):
  if not strs:
      return ""

  prefix = strs[0]
  for i in range(1, len(strs)):
      while not strs[i].startswith(prefix):
          prefix = prefix[:-1]
          if not prefix:
              return ""

  return prefix`,
            explanation:
              "Initialize `prefix` to the first string. Iterate through the remaining strings, shortening the `prefix` until it is a prefix of all strings. Return the final `prefix`.",
          },
          {
            id: 14,
            title: "Roman to Integer",
            problem: "Convert a Roman numeral to an integer.",
            code: `def roman_to_integer(s):
roman_map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
result = 0
prev_val = 0

for char in s[::-1]:
    curr_val = roman_map[char]
    if curr_val < prev_val:
        result -= curr_val
    else:
        result += curr_val
    prev_val = curr_val

return result`,
            explanation:
              "Iterate through the Roman numeral in reverse. If the current value is less than the previous value, subtract it. Otherwise, add it. This handles cases like IV (4) and IX (9).",
          },
          {
            id: 15,
            title: "Container With Most Water",
            problem:
              "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
            code: `def max_area(height):
  left = 0
  right = len(height) - 1
  max_area = 0

  while left < right:
      area = min(height[left], height[right]) * (right - left)
      max_area = max(max_area, area)

      if height[left] < height[right]:
          left += 1
      else:
          right -= 1

  return max_area`,
            explanation:
              "Use two pointers, `left` and `right`. Calculate the area between the lines, update the max area. Move the pointer with the shorter height inward to potentially increase the area.",
          },
          {
            id: 16,
            title: "3Sum",
            problem:
              "Return all unique triplets in the array that sum up to zero.",
            code: `def three_sum(nums):
  nums.sort()
  result = []

  for i in range(len(nums) - 2):
      if i > 0 and nums[i] == nums[i - 1]:
          continue
      left = i + 1
      right = len(nums) - 1

      while left < right:
          sum_three = nums[i] + nums[left] + nums[right]
          if sum_three == 0:
              result.append([nums[i], nums[left], nums[right]])
              while left < right and nums[left] == nums[left + 1]:
                  left += 1
              while left < right and nums[right] == nums[right - 1]:
                  right -= 1
              left += 1
              right -= 1
          elif sum_three < 0:
              left += 1
          else:
              right -= 1

  return result`,
            explanation:
              "Sort the array. Use three pointers: one fixed, two moving. Skip duplicates to avoid repeat triplets. Adjust pointers based on the sum.",
          },
          {
            id: 17,
            title: "Letter Combinations of a Phone Number",
            problem:
              "Given a string containing digits from 2-9, return all possible letter combinations that the number could represent.",
            code: `def letter_combinations(digits):
  if not digits:
      return []

  digit_to_letters = {
      '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
      '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  }

  def backtrack(index, current_string):
      if index == len(digits):
          combinations.append(current_string)
          return

      for letter in digit_to_letters[digits[index]]:
          backtrack(index + 1, current_string + letter)

  combinations = []
  backtrack(0, '')
  return combinations`,
            explanation:
              "Use backtracking to generate all combinations. For each digit, iterate through its corresponding letters and recursively build combinations.",
          },
          {
            id: 18,
            title: "Combination Sum",
            problem:
              "Find all unique combinations of candidates that sum up to the target.",
            code: `def combination_sum(candidates, target):
  result = []

  def backtrack(index, current, total):
      if total == target:
          result.append(list(current))
          return

      if total > target or index >= len(candidates):
          return

      current.append(candidates[index])
      backtrack(index, current, total + candidates[index])
      current.pop()
      backtrack(index + 1, current, total)

  backtrack(0, [], 0)
  return result`,
            explanation:
              "Use backtracking to explore combinations. For each candidate, decide to include it or move to the next candidate. Track the current sum and backtrack when needed.",
          },
          {
            id: 19,
            title: "Permutations",
            problem:
              "Return all possible permutations of an array of distinct integers.",
            code: `def permute(nums):
  result = []

  def backtrack(current_permutation):
      if len(current_permutation) == len(nums):
          result.append(list(current_permutation))
          return

      for num in nums:
          if num not in current_permutation:
              current_permutation.append(num)
              backtrack(current_permutation)
              current_permutation.pop()

  backtrack([])
  return result`,
            explanation:
              "Use backtracking to generate all permutations. For each number, add it to the current permutation if not already present, recursively explore, then backtrack.",
          },
          {
            id: 20,
            title: "Subsets",
            problem:
              "Return all possible subsets (the power set) of an array of distinct integers.",
            code: `def subsets(nums):
  result = [[]]

  for num in nums:
      new_subsets = [subset + [num] for subset in result]
      result.extend(new_subsets)

  return result`,
            explanation:
              "Start with an empty subset. For each number, create new subsets by adding the number to existing subsets. Extend the result with these new subsets.",
          },
        ],
        images: ["", ""],
        buttonsSet2: [
          {
            text: "View Solutions",
            link: "https://github.com/sisi-tarak/Top-20-LeetCode-Questions.git",
          },
          {
            text: "Practice Platform",
            link: "https://leetcode.com/problemset/",
          },
          {
            text: "Youtube",
            link: "https://youtube.com/@sisi-tarakk/",
          },
        ],
        buttons: [
          {
            text: "View Solutions",
            link: "https://github.com/sisi-tarak/Top-20-LeetCode-Questions.git",
          },
          {
            text: "Practice Platform",
            link: "https://leetcode.com/problemset/",
          },
        ],
      },
    ],
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
