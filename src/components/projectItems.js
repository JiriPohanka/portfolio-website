import thumb1 from "../images/personal-portfolio-thumbnail.png"
import thumb2 from "../images/todolist-thumbnail.png"
import thumb3 from "../images/bookmarx-thumbnail.png"

const projectItems = [
    {
        title: "Personal Portfolio",
        description: "The very website you currently find yourself on.",
        thumb: thumb1,
        techStack: "ReactJS, styled-components, tailwindCSS",
        link: "https://jiripohanka.github.io/portfolio-website/",
        repo: "https://github.com/JiriPohanka/portfolio-website"
    },
    {
        title: "To Do list",
        description: "Every beginner needs to build their own to-do list app, right? I built mine following the design provided by FrontEnd Mentor.",
        thumb: thumb2,
        techStack: "ReactJS, react-beautiful-dnd, CSS3",
        link: "https://jiripohanka.github.io/react-todolist/",
        repo: "https://github.com/JiriPohanka/react-todolist"
    },
    {
        title: "Bookmarx",
        description: "Ever wondered what to do about those pesky browser tabs you cannot read right now but aren't ready to close just yet either?",
        thumb: thumb3,
        techStack: "ReactJS, tailwindCSS",
        link: "https://jiripohanka.github.io/bookmarx/",
        repo: "https://github.com/JiriPohanka/bookmarx"
    }
]

export default projectItems
