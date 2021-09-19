// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import nodejs from "./images/nodejs.svg"
import sql from "./images/mysql.svg"


//Cover Images
import aboutimage from "./images/me.jpg"
import notetaker from "./images/notetaker.png"
import quiz from "./images/quiz.jpg"
import scheduler from "./images/scheduler.png"
import teamprofile from "./images/teamprofile.png"
import password from "./images/password.jpg"
import weather from "./images/weather.jpg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedin from "./images/linkedin.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Jose Valdez",
  headerTagline: [
    //Line 1 For Header
    "Bringing ideas , projects",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "to life",
  ],
  //   Header Paragraph
  headerParagraph:
    "I like to build cool things with code! 😎",

  //Contact Email
  contactEmail: "jj.valdez09@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Note Taker", //Project Title - Add Your Project Title Here
      para:
        "This app is simple note taking app that uses express , that allows you to save notes", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: notetaker,
      //Project URL - Add Your Project Url Here
      url: "https://polar-woodland-20600.herokuapp.com/",
    },
    {
      title: "JavaScript Quiz", //Project Title - Add Your Project Title Here
      para:
        "This is a simple quiz over Javascript ,that quizes the user on his or her knowledge of Javascript", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: quiz,

      //Project URL - Add Your Project Url Here
      url: "https://jayjay2397.github.io/CodingQuiz/",
    },
    {
      title: "Work Day Scheduler", //Project Title - Add Your Project Title Here
      para:
        "This app is an app that allows the user to plan out and schedule events thorugh out the day", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: scheduler,
      //Project URL - Add Your Project Url Here
      url: "https://jayjay2397.github.io/WorkDayScheduler/",
    },
    {
      title: "Weather Dashboard", //Project Title - Add Your Project Title Here
      para:
        "This app is weather app that uses an api to get the weather for any location you type in around the world.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:  weather,
      //Project URL - Add Your Project Url Here
      url: "https://jayjay2397.github.io/WeatherDashboard/",
    },
    {
      title: "Password Generator", //Project Title - Add Your Project Title Here
      para:
        "This app allows the user to generate a random passwords", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: password,
       
      //Project URL - Add Your Project Url Here
      url: "https://jayjay2397.github.io/randompasswordgenerator/",
    },
    {
      title: "Team Profile Generator", //Project Title - Add Your Project Title Here
      para:
        "This app is a Node.js app that generates a team profile for employees from the terminal", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:  teamprofile,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/jayjay2397/Team-Profile-Generator",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "My Name is Jose Valdez , I was born and raised in Dallas, Texas. I am Full stack web developer that graduated from Southern Methodist University located in Dallas,Texas",
  aboutParaTwo:
    "I love bringing my ideas to life through coding, I'm very driven and motivated to provide the best work possible. Above are located some of my coding projects feel free to take a look and interact with them and see how they all work!",
  aboutParaThree:
    "I enjoy working with all types of languages and frameworks , i dont shy away from learning new things that could help me become a better developer. If you have any questions or want to connect with me feel free to navigate to the 'Contact' section to get my email , Github, or LinkedIn",
  aboutImage: aboutimage,


  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
      img: nodejs,
      para:
        "NodeJs",
    },
    {
      img: sql,
      para:
        "SQL",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/jayjay2397" },
    {   img: linkedin,
      url: "https://www.linkedin.com/in/jose-v-16176584/",
    },
  
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
