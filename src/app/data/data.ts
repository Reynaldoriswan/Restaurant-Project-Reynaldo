import { Content } from "next/font/google";
import { title } from "process";
import { act } from "react";


export const navs = [
    {
        id: 1,
        name: 'Home',
        target: 'hero',
        active: true,
    },
    {
        id: 2,
        name: 'About',
        target: 'about',
        active: false,
    },
    {
        id: 3,
        name: 'Menu',
        target: 'menu',
        active: false
    },
    {
        id: 4,
        name: 'Specials',
        target: 'specials',
        active: false,
    },
    {
        id: 5,
        name: 'Events',
        target: 'events',
        active: false,
    },
    {
        id: 6,
        name: 'Chefs',
        target: 'chefs',
        active: false,
    },
    {
        id: 7,
        name: 'Gallery',
        target: 'gallery',
        active: false,
    },
];

export const whyUs = [
    {
        id: 1,
        title: 'Lorem Ipsum',
        content: `Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
        consectetur ducimus vero placeat`,
    },
    {
        id: 2,
        title: 'Repellat Nihil',
        content: `Dolorem est fugiat occaecati voluptate velit esse. Dicta
        veritatis dolor quod et vel dire leno para dest`,
    },
    {
        id: 3,
        title: 'Ad ad velit quil',
        content: `Molestiae officiis omnis illo asperiores. Aut doloribus vitae
        sunt debitis quo vel nam quis`,
    },
];

export const menu = [
    {
        id: 1,
        name: 'Lobster Bisque',
        price: 5.95,
        preview: '/assets/images/menu/lobster-bisque.jpg',
        ingredients: 'Lorem, deren, trataro, filede, nerada',
        category: 'starters',
        description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi
        Ut ut felis aliquet, Fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa,
        Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In Maximus, auque vitae ultricies`
    },
    {
        id: 2,
        name: 'Bread Barrel',
        price: 6.95,
        preview: '/assets/images/menu/bread-barrel.jpg',
        ingredients: 'Lorem, deren, trataro, filede, nerada',
        category: 'specialty',
        description : `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi
        Ut ut felis aliquet, Fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa
        Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In Maximus, auque vitae ultricies`
    },
    {
        id: 3,
        name: 'Crab cake',
        price: 7.95,
        preview : '/assets/images/menu/cake.jpg',
        ingredients: 'A dellicate crab served on toasted roll with lettuce and tartar sauce',
        category: 'starters',
        description : `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi
        Ut ut felis aliquet, Fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa
        Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In Maximus, auque vitae ultricies`
    },
    {
        id: 4,
        name: 'Caesar Selections',
        price: 8.95,
        preview : '/assets/images/menu/caesar.jpg',
        ingredients: 'Lorem, deren, trataro, filede, nerada',
        category: 'salads',
        description : `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi
        Ut ut felis aliquet, Fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa
        Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In Maximus, auque vitae ultricies`
    },
    {
        id: 5,
        name: 'Tuscan Grilled',
        price: 9.95,
        preview : '/assets/images/menu/tuscan-grilled.jpg',
        ingredients: 'Grilled chicken with provolone, artichoke hearts, and roasted red pesto',
        category: 'specialty',
        description : `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi
        Ut ut felis aliquet, Fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa
        Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In Maximus, auque vitae ultricies`
    },
    {
        id: 6,
        name: 'Mozzarella Stick',
        price: 7.95,
        preview : '/assets/images/menu/mozzarella.jpg',
        ingredients: 'Lorem, deren, trataro, filede, nerada',
        category: 'starters',
        description : `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi
        Ut ut felis aliquet, Fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa
        Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In Maximus, auque vitae ultricies`
    },
    {
        id: 7,
        name: 'Greek Salad',
        price: 9.95,
        preview : '/assets/images/menu/greek-salad.jpg',
        ingredients: 'Fresh spinach, crisp romaine,tomatoes,and Greek olives',
        category: 'salads',
        description : `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi
        Ut ut felis aliquet, Fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa
        Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In Maximus, auque vitae ultricies`
    },
    {
        id: 8,
        name: 'Spinach Salad',
        price: 9.95,
        preview : '/assets/images/menu/spinach-salad.jpg',
        ingredients: 
        'Fresh spinach with mushroms, hard boiled egg, and warm bacon vinaigrette',
        category: 'salads',
        description : `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi
        Ut ut felis aliquet, Fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa
        Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In Maximus, auque vitae ultricies`
    },
    {
        id: 9,
        name: 'Lobster Roll',
        price: 12.95,
        preview : '/assets/images/menu/lobster-roll.jpg',
        ingredients: 
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
        category: 'specialty',
        description : `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi
        Ut ut felis aliquet, Fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa
        Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In Maximus, auque vitae ultricies`
    },
];


export const filters = [
    {
        id: 1,
        name: 'All',
        category: 'all',
        active: true,
    },
    {
        id: 2,
        name: 'Starters',
        category: 'starters',
        active: false,
    },
    {
        id: 3,
        name: 'Salads',
        category: 'salads',
        active: false,
    },
    {
        id: 4,
        name: 'Specialty',
        category: 'specialty',
        active: false,
    },
];

export const specials = [
    {
        id: 1,
        image: './assets/images/specials/specials-1.png',
        title: 'Architecto ut apreiam autem id',
        subtitle: 
            'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta',
        content:
            'Et nobis maiores euis. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum',
        active: true,
    },
    {
        id: 2,
        image: './assets/images/specials/specials-2.png',
        title: 'Et blanditiis nemo veritatis excepturi',
        subtitle:
            'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta',
        content:
        'Et nobis maiores euis. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum',
        active: false,
    },
    {
        id: 3,
        image: './assets/images/specials/specials-3.png',
        title: 'Impedit facilis occaecati odio neque aperiam sit',
        subtitle:
            'Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta',
        content:
            'Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam.',
        active: false,
    },
    {
        id: 4,
        image: './assets/images/specials/specials-4.png',
        title: 'Fuga dolores inventore laboriosam ut est accusamus laboriosam',
        subtitle:
            'Totam aperiam accusamus earum sapiente ad voluptate inventore',
        content: 
            'Eaque consenquuntur consenquntur libero expedita in voluptus.',
        active: false,
    },
    {
        id: 5,
        image: './assets/images/specials/specials-5.png',
        title: 'Est eveniet ipsam sindera pad rone matrelet sando reda',
        subtitle:
            'Omnis blanditis saepe eos autem qui sunt debitis porro quia.',
        content: 
            'Exercitationem nostrum omnis. Ut reiciendis repudiannde minus.',
        active: false,
    },
];

export const specialsFilters = [
    {
        id: 1,
        name: 'Modi sit est',
        active: true,
    },
    {
        id: 2,
        name: 'Unde necessitatibus quasi',
        active: false,
    },
    {
        id: 3,
        name: 'Pariatur quod similique',
        active: false,
    },
    {
        id: 4,
        name: 'Nostrum qui quasi',
        active: false,
    },
    {
        id: 5,
        name: 'Iusto ut expedita aut',
        active: false,
    },
];


export const events = [
    {
        id: 1,
        image: './assets/images/events/event-birthday.jpg',
        title: 'Birthday Parties',
        price: 189,
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt magna aliqua.`,
        details: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat',
            'Duis aute irure dolor in reprehenderit in voluptate velit',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat',
        ],
        summary: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh
        velit esse cillum dolore eu fugiat nulla pariatur`,
    },
    {
        id: 2,
        image: './assets/images/events/event-private.jpg',
        title: 'Private Parties',
        price: 290,
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt magna aliqua.`,
        details: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat',
            'Duis aute irure dolor in reprehenderit in voluptate velit',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat',
        ],
        summary: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh
        velit esse cillum dolore eu fugiat nulla pariatur`,
    },
    {
        id: 3,
        image: './assets/images/events/event-custom.jpg',
        title: 'Custom Parties',
        price: 99,
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt magna aliqua.`,
        details: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat',
            'Duis aute irure dolor in reprehenderit in voluptate velit',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat',
        ],
        summary: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh
        velit esse cillum dolore eu fugiat nulla pariatur`, 
    }
];

export const bookings = [
    {
        id: 1,
        details: {
            name: 'example Name',
            email: 'info@example.com',
            phone: '12345678',
            date: '2024-2-06',
            time: '11:30',
            people: 3,
            message: `Ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in repreh`
        },
    },
];

export const testimonials = [
    {
        id: 1,
        content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit`,
        avatar: './assets/images/testimonials/testimonials-1.jpg',
        client: 'Saul Goodman',
        position: 'CEO',
    },
    {
        id: 2,
        content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit`,
        avatar: './assets/images/testimonials/testimonials-2.jpg',
        client: 'Sara Wilsson',
        position: 'Consultant',
    },
    {
        id: 3,
        content: `Ulamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit`,
        avatar: './assets/images/testimonials/testimonials-3.jpg',
        client: 'Jena Karlis',
        position: 'Store Owner',
    },
    {
        id: 4,
        content: `Ulamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit`,
        avatar: './assets/images/testimonials/testimonials-4.jpg',
        client: 'Matt Brandon',
        position: 'Freelancer',
    },
    {
        id: 5,
        content: `Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor`,
        avatar: './assets/images/testimonials/testimonials-5.jpg',
        client: 'John Larson',
        position: 'Enterpreneur',
    }
];

export const gallery = [
    {
        id: 1,
        image: '/assets/images/gallery/gallery-1.jpg',
    },
    {
        id: 2,
        image: '/assets/images/gallery/gallery-2.jpg',
    },
    {
        id: 3,
        image: '/assets/images/gallery/gallery-3.jpg',
    },
    {
        id: 4,
        image: '/assets/images/gallery/gallery-4.jpg',
    },
    {
        id: 5,
        image: '/assets/images/gallery/gallery-5.jpg',
    },
    {
        id: 6,
        image: '/assets/images/gallery/gallery-6.jpg',
    },
    {
        id: 7,
        image: '/assets/images/gallery/gallery-7.jpg',
    },
    {
        id: 8,
        image: '/assets/images/gallery/gallery-8.jpg',
    },
];

export const chefs = [
    {
        id: 1,
        name: 'Walter White',
        photo: './assets/images/chefs/chefs-1.jpg',
        position: 'Master Chef',
        delay: '100',
    },
    {
        id: 2,
        name: 'Sarah Jhonson',
        photo: './assets/images/chefs/chefs-2.jpg',
        position: 'Patissier',
        delay: '200',
    },
    {
        id: 3,
        name: 'William Anderson',
        photo: './assets/images/chefs/chefs-3.jpg',
        position: 'Cook',
        delay: '300',
    },
];


