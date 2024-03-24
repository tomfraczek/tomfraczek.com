import usa from '@/public/img/icons/usa.png';
import poland from '@/public/img/icons/poland.png';

export const MAIN_NAVIGATION = [
  // {
  //   title: "About",
  //   url: "/about",
  // },
  {
    title: 'Services',
    url: '/services',
  },
  {
    title: 'Free Quote',
    url: '/quote',
  },
  {
    title: 'Career',
    url: '/career',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

export const LNGS = [
  { nativeName: 'English', code: 'en', icon: usa },
  { nativeName: 'Polski', code: 'pl', icon: poland },
];

// import Maintenance from 'components/offerCards/img/maintenance.jpg';
// import Pro from 'components/offerCards/img/pro.jpg';
// import Start from 'components/offerCards/img/start.jpg';
// import Start2 from 'components/offerCards/img/start2.jpg';
// import Start3 from 'components/offerCards/img/start3.jpg';
// import Upgrade from 'components/offerCards/img/upgrade.jpg';

export const OFFERS = [
  {
    title: 'Start',
    // oldPrice: 299,
    // newPrice: 199,
    // items: {
    //   'Website development':
    //     'This involves creating the structure, layout, and functionality of the website. This can include designing the overall look and feel, as well as implementing features such as forms, e-commerce functionality, and interactive elements.',
    //   'Responsive design':
    //     'This ensures that the website looks and works well on a variety of devices and screen sizes, from desktop computers to smartphones. This can include using flexible grids and layouts, and adjusting the size and position of elements to ensure that the site is easy to navigate and use on different devices.',
    //   'Interaction design':
    //     'This focuses on the user experience of the website, and how the site interacts with the user. This can include designing intuitive navigation, creating clear calls-to-action, and providing feedback to users as they interact with the site.',
    //   'Performance optimization':
    //     'This involves making sure that the website loads quickly and performs well, even with a large amount of traffic. This can include compressing images, minifying code, and using caching techniques to speed up load times.',
    //   'Cross-browser compatibility':
    //     'This ensures that the website looks and works well on a variety of different web browsers, such as Chrome, Firefox, Safari, and Internet Explorer. This can include testing the site on different browsers and making adjustments to ensure that the site looks and works correctly on each one.',
    //   'Landing page':
    //     'Our landing page design and development services provide businesses with a powerful tool to convert website visitors into customers. Our team of experts creates custom landing pages that are designed to meet the specific needs of your business, delivering a seamless user experience and maximizing conversion rates. Whether you need a landing page for a new product launch, a marketing campaign, or a lead generation effort, we have the expertise to deliver results and drive success for your online presence.',
    //   'Portfolio page':
    //     "Our custom portfolio page design and development services are tailored to help businesses showcase their work and demonstrate their expertise. Our team of experts will work with you to create a portfolio page that highlights your unique achievements, skills, and capabilities. Whether you're looking to showcase your projects for a creative agency, consulting firm, or as a freelancer, we have the expertise to deliver a solution that sets you apart and strengthens your online presence.",
    // },
    // recommmended: true,
    url: 'offers/start',
    // icon: Start,
  },
  {
    title: 'Professional',
    //     oldPrice: 399,
    //     newPrice: 499,
    //     items: {
    //       'Website development':
    //         'This involves creating the structure, layout, and functionality of the website. This can include designing the overall look and feel, as well as implementing features such as forms, e-commerce functionality, and interactive elements.',
    //       'Responsive design':
    //         'This ensures that the website looks and works well on a variety of devices and screen sizes, from desktop computers to smartphones. This can include using flexible grids and layouts, and adjusting the size and position of elements to ensure that the site is easy to navigate and use on different devices.',
    //       'Interaction design':
    //         'This focuses on the user experience of the website, and how the site interacts with the user. This can include designing intuitive navigation, creating clear calls-to-action, and providing feedback to users as they interact with the site.',
    //       'Performance optimization':
    //         'This involves making sure that the website loads quickly and performs well, even with a large amount of traffic. This can include compressing images, minifying code, and using caching techniques to speed up load times.',
    //       'Cross-browser compatibility':
    //         'This ensures that the website looks and works well on a variety of different web browsers, such as Chrome, Firefox, Safari, and Internet Explorer. This can include testing the site on different browsers and making adjustments to ensure that the site looks and works correctly on each one.',
    //       'Content management system (CMS) integration':
    //         'This allows the client to easily manage and update the content on their website without needing extensive technical knowledge. This can include integrating a popular CMS such as WordPress, Drupal, or Joomla into the website, which provides a user-friendly interface for creating and editing pages, posts, and other types of content.',
    //       'E-commerce website development':
    //         'This involves creating an online store and integrating payment gateway for the website. This can include designing the layout and functionality of the store, creating product pages, setting up a shopping cart, and integrating a payment gateway for secure transactions. It also involves setting up security measures such as SSL encryption, to protect sensitive customer information.',
    //     },
    //     recommmended: false,
    //     url: 'offers/gold',
    //     icon: Pro,
    //   },
    //   {
    //     title: 'Upgrade',
    //     oldPrice: 199,
    //     newPrice: 299,
    //     items: {
    //       'Software update':
    //         "Updating the website's content management system (CMS), plugins, and other software to ensure that they are secure and functioning properly.",
    //       'Design update': "Updating the website's design for a new, fresh, marketing friendly look",
    //       'Content update': 'Adding, editing, or removing content from the website, such as text, images, and videos.',
    //       'Backup and disaster recovery':
    //         "Creating regular backups of the website's files and database, and having a plan in place for disaster recovery in case something goes wrong.",
    //       Security:
    //         'Monitoring the website for potential security threats and implementing measures to protect against hacking and other malicious activity.',
    //       'Performance monitoring':
    //         "Monitoring the website's performance, such as page load times, and taking steps to improve it as needed.",
    //       'User experience testing':
    //         'Conducting user testing to understand how users are interacting with the website, and making changes to improve the user experience.',
    //       'Mobile optimization':
    //         'Ensure that the website is mobile-friendly, fast and comply with the best practices of mobile optimization.',
    //     },
    //     recommmended: false,
    url: 'offers/silver',
    //     icon: Upgrade,
  },
  {
    title: 'Maintenance',
    // oldPrice: 75,
    // newPrice: 50,
    // items: {
    //   'Content edition':
    //     'Updating, editing, and creating new content, such as text, images, and videos. This can include adding new pages, updating existing pages, and removing outdated content.',
    //   'Design adjustments':
    //     "Making changes to the website's design, such as updating colors, fonts, and layouts. This can include adding new elements to the website, such as images and videos, and removing existing elements.",
    //   'Adding new functionality':
    //     'Implementing new features and functionality, such as new forms, sliders, and other interactive elements.',
    //   'Editing old functionality':
    //     'Modifying existing features and functionality, such as updating forms, sliders, and other interactive elements.',
    //   'Bug fixing': "Identifying and fixing bugs and errors in the website's code and functionality.",
    // },
    // recommmended: false,
    url: 'offers/platinum',
    // icon: Maintenance,
  },
];
