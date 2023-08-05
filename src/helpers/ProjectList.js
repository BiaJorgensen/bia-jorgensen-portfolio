import LocalHarvest from '../assets/images/local-harvest.JPG'
import Scheduler from '../assets/images/scheduler-logo.png';
import EventFinder from '../assets/images/event-finder.PNG';
import WeatherApp from '../assets/images/weather-app.PNG';
import Planner from '../assets/images/daily-planner.PNG';
import TextEditor from '../assets/images/text-editor.PNG';
import Quiz from '../assets/images/quiz.PNG';


export const projectList = [
    {
        title: 'Local Harvest',
        image: LocalHarvest,
        deployedApp: 'https://bia-jorgensen-local-harvest.herokuapp.com/#/',
        githubRepo: 'https://github.com/BiaJorgensen/local-harvest',
        summary: 'A platform that allows Farmers to promote their products and receive reviews from consumers',
        technologies: 'React.js, MongoDB, Express.js, Node.js, GraphQL, Apollo Server, Bcrypt, Json Web Token (JWT), JavaScript, HTML, CSS, Bootstrap, Typescript'
    },
    {
        title: 'Takepoint Dentistry',
        image: Scheduler,
        deployedApp: 'https://appointment-scheduler2.herokuapp.com/',
        githubRepo: 'https://github.com/BiaJorgensen/scheduler',
        summary: 'A platform that allows patients to schedule, view and/or cancel dental appointments. This app could be modified to allow scheduling for other industries.',
        technologies: 'MySQL, Node.js, Express.js, Handlebars.js, Nodemailer API, JavaScript, HTML, CSS, Bcrypt, Bootstrap'
    },
    {
        title: 'Event Finder',
        image: EventFinder,
        deployedApp: 'https://micheala-h.github.io/Event-finder/',
        githubRepo: 'https://github.com/Micheala-H/Event-finder',
        summary: "A platform that allows users to find events that are happening in different cities; user can also buy tickets to events (they will be directed to Ticketaster's website)",
        technologies: 'JavaScript, HTML, CSS, Ticketmaster API, Advice Slip API'
    },
    {
        title: 'Weather App',
        image: WeatherApp,
        deployedApp: 'https://biajorgensen.github.io/weather-app/',
        githubRepo: 'https://github.com/BiaJorgensen/weather-app',
        summary: 'A platform that allows users to see the current weather and forecast weather for five future days for a searched city.',
        technologies: 'OpenWeatherMap API, jQuery, Day.js, Bootstrap'
    },
    {
        title: 'Daily Planner',
        image: Planner,
        deployedApp: 'https://biajorgensen.github.io/daily-planner/',
        githubRepo: 'https://github.com/BiaJorgensen/daily-planner',
        summary: 'A platform that allows users to save, on a daily basis, tasks for that day during business hours (9 AM to 5 PM).',
        technologies: 'Day.js, JavaScript, HTML, CSS'
    },
    {
        title: 'Text Editor',
        image: TextEditor,
        deployedApp: 'https://bia-jorgensen-text-editor.herokuapp.com/',
        githubRepo: 'https://github.com/BiaJorgensen/text-editor-pwa',
        summary: 'A platform that uses IndexedDB to store text that can be viewed and edited with or without internet connection by meeting Progressive Web App (PWA) criteria.',
        technologies: 'IndexedDB, Webpack Express.js, Node.js'
    },
    {
        title: 'Quiz',
        image: Quiz,
        deployedApp: 'https://biajorgensen.github.io/quiz/',
        githubRepo: 'https://github.com/BiaJorgensen/quiz',
        summary: 'A timed multiple-choice quiz with pre-established questions about JavaScript.',
        technologies: 'JavaScript, HTML, CSS'
    }
]