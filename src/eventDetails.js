import codigo from "./images/logo_text.png";
import alphaByte from "./images/poster/2_ALPHA_BYTE.svg";
import cat from "./images/poster/3_CAT.svg";
import iplAuction from "./images/poster/4_IPL_AUCTION.svg";
import actionReply from "./images/poster/5_ACTION_REPLAY.svg";
import codeInTheDark from "./images/poster/6_CODE_IN_THE_DARK.svg";
import mindMatrix from "./images/poster/7_MIND_MATRIX.svg";
import projectCompletion from "./images/poster/8_PROJECT_COMPLETION.svg";
import posterPresentation from "./images/poster/9_POSTER_PRESENTATION.svg";
import chronoclash from "./images/poster/10_CHRONO_CLASH.svg";
import byteMe from "./images/poster/11_BYTE_ME.svg";
import sherlock from "./images/poster/12_SherLOCK.svg";

const events = [
  {
    name: "Codigo",
    alias: "Codigo",
    id: "1",
    image: codigo,
    aboutEvent:
      "Get ready for the ultimate coding extravaganza with CODIGO! Dive into a world of innovation, challenge, and excitement as you compete against the best and brightest. With twists and surprises around every corner, CODIGO promises an exhilarating journey for all skill levels. Join us for a chance to showcase your coding prowess, make new friends, and experience the thrill of victory. Register today and prepare to embark on an unforgettable coding adventure!",
    participantno: 2,
    coordinators: {
      students: [
        { name: "Mithilesh Rajput", phone: "9579283970 " },
        { name: "Atharva Bardapurkar", phone: "9359472421" },
      ],
      faculty: ["Mr. Rahul Pitale"],
    },
    schedule: {
      round1: [
        { date: "17th March", time: "6:00 PM - 7:30 PM", venue: "Online" },
      ],
      round2: [
        { date: "19th March", time: "9:00 AM - 11:00 AM", venue: "Offline" },
      ],
      round3: [
        { date: "19th March", time: "2:00 PM - 4:30 PM", venue: "Offline" },
      ],
    },
    Amount: "₹100",
    rulebook:
      "https://drive.google.com/file/d/19Aiwcbz0wO5lmiaJ1rberwSQkmo6aCHc/view?usp=sharing",
    whatsappLink: "https://chat.whatsapp.com/FMZXL67AisAEgAnUaOeli5",
  },
  {
    name: "AlphaByte",
    alias: "AlphaByte",
    id: "2",
    image: alphaByte,
    aboutEvent:
      "AlphaByte 1.0 is a National Level Hackathon organized by GDSC x Anantya 2024, in collaboration with the Computer Engineering Students Association (CESA). It is a flagship event of Anantya 2024, aimed at bringing together the brightest minds in the field of technology from across the country.",

    schedule: {
      round1: [
        {
          date: "15th March - 17th March",
          time: " 15th March (11:55 PM) - 17th March (12:00 PM)",
          venue: "online",
        },
      ],
      round2: [
        {
          date: "20th March",
          time: "8:00 AM - 8:00 PM",
          venue: "PCCOE Campus",
        },
      ],
    },
    coordinators: {
      students: [
        { name: "Vinayak Shete", phone: "7249629692" },
        { name: "Darpan Neve", phone: "9175738441" },
      ],
      faculty: ["Mr. Ganesh Deshmukh", "Mr. Pankaj Devre"],
    },

    rulebook:
      "https://drive.google.com/drive/folders/1IJ6fgqE-DhG306Vi65KkJ6Qfz4Hi02tU",
    Amount: "₹50",
    participantno: "4",
    website: "https://alphabyte2024.tech/",
    whatsappLink: "https://chat.whatsapp.com/DeFcU9hqa2z5mbESsbY3kr",
  },
  {
    name: "CAT 2.0",
    alias: "CAT 2.0",
    id: "3",
    image: cat,
    aboutEvent:
      "The CAT 2.0 contest consists of three rounds designed to showcase participants' knowledge, critical thinking, and communication skills. In Round 1, participants will undergo a traditional MCQ test on paper, where the top 50 scorers will progress to Round 2. Round 2 will be conducted via Slido Quiz, featuring 25 questions covering diverse topics. Only the top 50 participants from Round 1 will qualify for this digital round, with the top 15 advancing to Round 3. Round 3, the Extempore round, challenges participants to deliver impromptu speeches on given topics, with evaluation based on content, delivery, coherence, and articulation. The top 5 participants with the highest scores in this round will be declared as finalists. Each round presents a unique opportunity for participants to demonstrate their abilities and compete for victory.",

    schedule: {
      round1: [
        {
          date: "19th March",
          time: "12:00 PM - 1:00 PM",
          venue: "6201, 6202, 6203",
        },
      ],
      round2: [
        { date: "19th March", time: "4:00 PM - 5:00 PM", venue: "6009, 6010" },
      ],
      round3: [
        { date: "20th March", time: "12:00 PM - 1:00 PM", venue: "6009" },
      ],
    },

    coordinators: {
      students: [
        { name: "Yash Deshmane", phone: "9112764111" },
        { name: "Aditya Agre", phone: "7378555854" },
      ],
      faculty: ["Mr. Kapil Tajane"],
    },

    rulebook:
      "https://drive.google.com/file/d/1xIqe1hGl92WI4LVcz2zaxIqdLdOHEx9y/view?usp=sharing",
    Amount: "₹50",
    participantno: "1",
    whatsappLink: "https://chat.whatsapp.com/BloLWczOFo04NEv5Eedand",
  },
  {
    name: "IPL Auction",
    alias: "IPL Auction",
    id: "4",
    image: iplAuction,
    aboutEvent:
      "The IPL Auction Simulation invites participants to engage in a strategic team-building experience mirroring the official IPL auction process. Phase 1: Qualifying Test - Demonstrate your cricket acumen through a comprehensive knowledge assessment. Phase 2: Buzzer Round - Employ quick thinking and strategic bidding in a fast-paced auction environment. Phase 3: Live Auction - Participate in a simulated live auction, utilizing a set budget to construct your ideal IPL franchise. This event is designed to test your cricket knowledge, strategic decision-making, and auction room prowess.",

    schedule: {
      round1: [
        { date: "18th March", time: "10:00 AM - 11:00 AM", venue: "Online" },
      ],
      round2: [
        { date: "18th March", time: "2:00 PM - 4:00 PM", venue: "Offline" },
      ],
      round3: [
        { date: "19th March", time: "9:00 AM - 6:00 PM", venue: "Offline" },
      ],
    },
    coordinators: {
      students: [
        { name: "Nitin Pandita", phone: "9667026988" },
        { name: "Aditya Singh", phone: "9527961108" },
      ],
      faculty: ["Mr. Atul Pawar"],
    },

    rulebook:
      "https://drive.google.com/file/d/1BHY54sRmMKCkUhbWhQ3f3q8R9eogTuzJ/view?usp=sharing",
    Amount: "₹160",
    participantno: "4",
    whatsappLink: "https://chat.whatsapp.com/EkC0KikZ7C7AncbcbakmtZ",
  },
  {
    name: "Action Replay",
    alias: "Action Replay",
    id: "5",
    image: actionReply,
    aboutEvent:
      "Action Replay: A thrilling cinematic journey through the ages. Join us as we revisit iconic moments from film history, from timeless classics to modern epics. Experience the excitement of cinematic trivia in a dynamic and engaging competition. Get ready to relive the magic of the silver screen at 'Action Replay'. Round 1: Yesterday's tomorrow: a quiz based on trivia movie/series questions. Round 2: Gaana Kaunsa: guess the song by analyzing the emojis within 2 min. Round 3: Aaja Nachle: perform the hook step of the song played within 30 sec. Round 4: Cinematic Freeze Frame: The teams will be shown blurred posters of the movies. The pairs have to guess the name of the movie.",

    schedule: {
      round1: [
        {
          date: "19th March",
          time: "1:00 PM - 2:00 PM",
          venue: "6118, 6119, 6120, 6208, 6209",
        },
      ],
      round2: [
        { date: "19th March", time: "3:00 PM - 6:00 PM", venue: "6208, 6209" },
      ],
      round3: [
        { date: "20th March", time: "1:00 PM - 3:00 PM", venue: "6208, 6209" },
      ],
      round4: [
        { date: "20th March", time: "3:00 PM - 5:00 PM", venue: "6208, 6209" },
      ],
    },

    coordinators: {
      students: [
        { name: "Ankita Anarase", phone: "8446786510" },
        { name: "Madhur Burghate", phone: "8208442402" },
      ],
      faculty: ["Ms. Madhuri Suryavanshi"],
    },

    rulebook:
      "https://drive.google.com/drive/folders/1XlOtpxs0xfe6FjvrQW4pD8PqBFgQOURy?usp=sharing",
    Amount: "₹60",
    participantno: "2",
    whatsappLink: "https://chat.whatsapp.com/D7U0hVfH2M56CQdA1cGHFe",
  },
  {
    name: "Code In The Dark",
    alias: "Code In The Dark",
    id: "6",
    image: codeInTheDark,
    aboutEvent:
      "This coding competition containing two rounds : First Round - Bhailang Coding Competition : In this part, teams of two work together to solve coding problems. It's called Bhailang to emphasize that it's challenging and competitive. The focus is on solving problems using Bhai coding language and coding skills. The teams with the best scores or performance move on to the next round. Bhai coding language is normally a funny coding language with simple and funny syntax. Also at the time of round 1 we will provide some documentation about bhailang for your guidance. Second Round - Blind Coding : This round is different. One member of each team can't see the computer screen; they're blindfolded. The blindfolded person does the coding based only on what their teammate tells them. The other teammate guides them by giving instructions and explanations. The blindfolded person has to translate these instructions into code without seeing anything. This round tests how well teams communicate, work together, trust each other, and handle pressure.",
    schedule: {
      round1: [{ date: "20th March", time: "", venue: "" }],
    },

    coordinators: {
      students: [
        { name: "Omkar Late", phone: "9130113290" },
        { name: "Sourav Narvekar", phone: "9834144155" },
      ],
      faculty: ["Mr. Pankaj Devre"],
    },
    "rulebook": "https://docs.google.com/document/d/131kbtNx_gWRRvSS4jHmBYmy7J8DtrfHYuFiN6u9grCY/edit?usp=drivesdk",
    "Amount": "₹50",
    "participantno": "2",
    "whatsappLink":"https://chat.whatsapp.com/CQlnojTOS9ZJku55J0vvOf",
  },
  {
    name: "Mind Matrix",
    alias: "Mind Matrix",
    id: "7",
    image: mindMatrix,
    aboutEvent:
      "Mind Matrix, an exhilarating intellectual journey that transcends conventional boundaries! It offers a unique blend of technical challenges infused with fun and excitement. With three distinct rounds meticulously detailed within, participants can expect their technical prowess to be thoroughly tested in an engaging and enjoyable manner.",

    schedule: {
      round1: [
        {
          date: "19th March",
          time: "11:00 AM - 12:00 PM",
          venue: " 6101, 6102, 6103",
        },
      ],
      round2: [
        { date: "20th March", time: "11:00 AM - 12:00 PM", venue: "6103" },
      ],
      round3: [
        {
          date: "20th March",
          time: "2:00 PM - 4:00 PM",
          venue: "6103 (Computer Dept. Passage)",
        },
      ],
    },

    coordinators: {
      students: [
        { name: "Trupti Gunjal", phone: "7558574338" },
        { name: "Kanak Agrawal", phone: "8446098764" },
      ],
      faculty: ["Dr. Aparna Joshi"],
    },

    rulebook:
      "https://drive.google.com/file/d/1-sxvfIxuFr_lbAHU0zHFXMXzneJopKRA/view?usp=drivesdk",
    Amount: "₹50",
    participantno: "2",
    whatsappLink: "https://chat.whatsapp.com/EQuNyByNyJ4CglepsIAp4h",
  },

  {
    name: "Project Completion",
    alias: "Project Completion",
    id: "8",
    image: projectCompletion,
    aboutEvent:
      "The competition offers teams a platform to showcase their research projects or ideas via concise and visually captivating posters. Participants are encouraged to utilize graphics, images, and succinct text to convey the core aspects of their research or project effectively. Emphasizing the importance of communicating to a diverse audience, achieving a balance between visual appeal and informative content is key. Best of luck to all participants in the competition!",
    schedule: {
      round1: [
        {
          date: "9th - 15th March",
          time: "9:00 AM - 5:00 PM",
          venue: "Offline",
        },
      ],
      round2: [{ date: "19th March", time: "2:00 PM - 5:00 PM", venue: "" }],
    },

    coordinators: {
      students: [
        { name: "Sejal Rokade", phone: "8625814185" },
        { name: "Anushka Pardeshi", phone: "9404737603" },
      ],
      faculty: ["Mrs. Tanya Shruti"],
    },
    "rulebook": "https://drive.google.com/file/d/1ui9T5CfvOSAZ7N_4btCib7e7K7zskbKJ/view?usp=drive_link",
    "Amount": "N.A.",
    "participantno": "4",
    "whatsappLink":"https://chat.whatsapp.com/GflyISHWsw0K6j8wECuFz3",
  },  
  {
    name: "Poster Presentation",
    alias: "Poster Presentation",
    id: "9",
    image: posterPresentation,
    aboutEvent:
      "Poster Presentation is an opportunity for students to showcase their research, creativity, and communication skills through visually engaging posters. Participants will present their posters on a wide range of topics, spanning technology, science, engineering, and more. Join us for an inspiring display of innovation and discovery.",
    schedule: {
      round1: [
        {
          date: "20th March",
          time: "9:00 PM - 5:00 PM",
          venue: "PCCOE Reading Hall",
        },
      ],
    },

    coordinators: {
      students: [
        { name: "Asmita Mahamuni", phone: "9561674756" },
        { name: "Ronak Dagale", phone: "9561307404" },
      ],
      faculty: ["Mrs. S. Vispute", "Mrs. M. Pathan"],
    },

    rulebook:
      "https://docs.google.com/document/d/1QqLFqIj3_lsjypmjTogH5qQ4yfHp-0liOMFAaa7wGO4/edit?usp=sharing",
    Amount: "N.A",
    participantno: "4",
    whatsappLink: "https://chat.whatsapp.com/GCJAojgtUVv16hVSQHTiHL",
  },
  {
    name: "Chronoclash",
    alias: "Chronoclash",
    id: "10",
    alias: "Chronoclash",
    image: chronoclash,
    aboutEvent:
      "Choronoclash Odyssey Gaming Challenge is a non-technical gaming event that transcends eras, featuring a variety of games to test the real skills of gamers. The event focuses on the evolution of gaming across the years and the true skill of the gamer, bringing together participants for an exhilarating clash of old and new era games.",

    schedule: {
      round1: [{ date: "18th March", time: "6:00 PM", venue: "Online" }],
      round2: [
        { date: "20th March", time: "11:00 AM onwards", venue: "Offline" },
      ],
      round3: [
        { date: "20th March", time: "2:00 PM onwards", venue: "Offline" },
      ],
    },

    coordinators: {
      students: [
        { name: "Ishan Pardeshi", phone: "9922597249" },
        { name: "Sahil Hirve", phone: "7447329700" },
      ],
      faculty: ["Ms. Madhura Kalbhor"],
    },

    rulebook:
      "https://drive.google.com/file/d/1pf2fVRQfU0b_fwiYr7oEPeDJVuYL_pz8/view?usp=sharing",
    Amount: "₹30",
    participantno: "1",
    whatsappLink: "https://chat.whatsapp.com/FzSZY4CDWSA27PnAmaZHlE",
  },
  {
    name: "Byte Me",
    alias: "Byte Me",
    id: "11",
    image: byteMe,
    aboutEvent:
      "Byte Me is a fusion of challenges, testing individuals skills in a variety of domains,from exploring your general technical skills to cracking ciphers. Each challenge will be based on the key events on the story line movie interstellar,letting you explore the universe of computer science.",
    schedule: {
      round1: [
        {
          date: "19th March",
          time: "11:00 AM - 1:00 PM",
          venue: "6208, 6209, 6218, 6219",
        },
      ],
      round2: [
        { date: "19th March", time: "3:00 PM - 6:00 PM", venue: "6208, 6209" },
      ],
    },

    coordinators: {
      students: [
        { name: "Omkar Pote", phone: "9324040823" },
        { name: "Deep Dhakate", phone: "9022244068" },
      ],
      faculty: ["Mrs. Geetanjali Sharma"],
    },

    rulebook:
      "https://drive.google.com/drive/folders/1hN_-SAjz3Rvh3hC5fCIZwgl0vnL_ep72",
    Amount: "₹50",
    participantno: "2",
    whatsappLink: "link",
    website: "https://Owasppccoe.vercel.app",
  },
  {
    name: "Sherlock",
    alias: "Sherlock",
    id: "12",
    image: sherlock,
    aboutEvent:
      "A group of hackers have launched a brazen attack on an organization. As members of Team OWASP, we have taken up the challenge to delve into the depths of this cybercrime and track down the perpetrator. Each clue and hint uncovered in this intricate web of deceit brings us one step closer to identifying and apprehending the hacker behind this malicious act. Our mission rests on keen observation, perceptive analysis, and collaborative effort as we navigate through the digital labyrinth to ensure justice prevails.",

    schedule: {
      round1: [
        {
          date: "20th March",
          time: "9:00 AM - 11:00 PM",
          venue: "6208, 6209, 6221,6222",
        },
      ],
      round2: [
        {
          date: "20th March",
          time: "12:00 PM - 2:00 PM",
          venue: "6208, 6209, 6221,6222",
        },
      ],
      round3: [
        {
          date: "20th March",
          time: "3:00 PM - 5:00 PM",
          venue: "PCCOE Campus",
        },
      ],
    },

    coordinators: {
      students: [
        { name: "Visesh Chauhan", phone: "7620767941" },
        { name: "Mrunal Chopade", phone: "8080059264" },
      ],
      faculty: ["Mr. Ganesh Kadam"],
    },
    "rulebook": "https://drive.google.com/drive/folders/1G4pp3JiwESlvVEx-j6ID5_vXu-wbbhk7",
    "Amount": "₹80",
    "participantno": "2",
    "website":"https://Owasppccoe.vercel.app",
    "whatsappLink":"https://chat.whatsapp.com/LqaAFiHoFj32bW7zWrenid ",
  },
];

export default events;