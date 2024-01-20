import Todo from '../assets/todo.png';
import Omnifood from '../assets/omnifood.png';
import FoodPos from '../assets/food-pos.png';
import Blog from '../assets/blog.png';
import Dashboard from '../assets/dashboard.png';
import NextelUser from '../assets/nextel-userview.png';
import NextelDashboard from '../assets/nextel-dashboard.png';
import BrewHaven from '../assets/brew-haven.png';
import Touro from '../assets/touro-homepage.png';

const projects = [
    {
        name: 'Nextel Hotel',
        img: NextelUser,
        tech: ['redux-toolkit','react-Router','tailwind-css','antd'],
        workUrl: 'https://github.com/DaisyPwint/NexTel-UserView/tree/with-dummy',
        demoUrl: 'https://phoo-nextel-userview.netlify.app/'
    },
    {
        name: 'Nextel Hotel Dashboard',
        img: NextelDashboard,
        tech: ['redux-toolkit','react-Router','antd'],
        workUrl: 'https://github.com/DaisyPwint/Nextel-admin-dashboard/tree/with-dummy',
        demoUrl: 'https://phoo-nextel-dashboard.netlify.app/'
    },
    {
        name: 'Brew Haven',
        img: BrewHaven,
        tech: ['redux-toolkit','react-Router','tailwind-css'],
        workUrl: 'https://github.com/DaisyPwint/Brew-Haven-Coffee-Shop',
        demoUrl: 'https://phoo-brew-haven.netlify.app/'
    },
    {
        name: 'Touro-Home-Page',
        img: Touro,
        tech: ['react','tailwind-css'],
        workUrl: 'https://github.com/DaisyPwint/Touro-Home-Page',
        demoUrl: 'https://phoo-touro.netlify.app/'
    },
    {
        name: 'Todo List',
        img: Todo,
        tech: ['React JS','CSS'],
        workUrl: 'https://github.com/DaisyPwint/My-Todo-Task-List',
        demoUrl: 'https://phoo-todo-task-list.netlify.app/'
    },
    {
        name: 'Omnifood',
        img: Omnifood,
        tech: ['HTML','CSS'],
        workUrl: 'https://github.com/DaisyPwint/omnifood-template-v2',
        demoUrl: 'https://learn-omnifood-website.netlify.app/'
    },
    {
        name: 'Coffee Shop',
        img: FoodPos,
        tech: ['HTML','CSS'],
        workUrl: 'https://github.com/DaisyPwint/coffee-shop-pj',
        demoUrl: 'https://phoo-coffee-shop.netlify.app/'
    },
    {
        name: 'Blog',
        img: Blog,
        tech: ['HTML','Bootstrap'],
        workUrl: 'https://github.com/DaisyPwint/Blog-Template-pj',
        demoUrl: 'https://phoo-blog-template.netlify.app/'
    },
    {
        name: 'Dashboard',
        img: Dashboard,
        tech: ['HTML','Bootstrap'],
        workUrl: 'https://github.com/DaisyPwint/simple-admin-dashboard',
        demoUrl: 'https://phoo-simple-admin-dashboard.netlify.app/'
    },
]

export default projects;