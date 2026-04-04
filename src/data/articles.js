import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

export const articles = [
  {
    id: 1,
    slug: 'simple-tips-better-website-design',
    image: img1,
    tag: 'Design',
    readTime: '6 min read',
    author: 'Sara Blake',
    role: 'UI Design Lead',
    date: 'July 31, 2025',
    title: 'Simple Tips for Better Website Design',
    desc: 'Learn easy ways to improve your website\'s look and feel. easy step for you',
    overview:
      'Great web design is not about decoration alone. It is about clarity, trust, and helping users complete important actions with confidence.',
    content: [
      'Start with clear visual hierarchy. Use strong headings, short sections, and enough spacing so users can quickly scan your content.',
      'Keep your color system limited and intentional. A primary color, a neutral base, and one accent color are usually enough for most brand websites.',
      'Make every page mobile-first. Buttons should be easy to tap, text should be readable without zooming, and key actions should stay above the fold.',
    ],
    takeaways: [
      'Use one clear primary action on each section.',
      'Maintain consistent spacing scale across components.',
      'Test typography on real mobile devices, not only browser devtools.',
    ],
    checklist: [
      'Check heading contrast and readability.',
      'Audit button tap targets (at least 44px).',
      'Reduce clutter around high-value CTAs.',
    ],
  },
  {
    id: 2,
    slug: 'speed-up-your-website-fast-loading',
    image: img2,
    tag: 'Performance',
    readTime: '7 min read',
    author: 'David Moran',
    role: 'Performance Engineer',
    date: 'July 31, 2025',
    title: 'How to Speed Up Your Website Fast loading',
    desc: 'Quick fixes to make your site load faster. How great user experience boosts your business',
    overview:
      'Website speed has a direct impact on conversions, retention, and search visibility. Small improvements in loading behavior can drive large business results.',
    content: [
      'Compress and properly size images before uploading. Large media files are one of the biggest reasons for slow pages.',
      'Avoid unnecessary third-party scripts. Every external widget adds network requests and can block rendering on slower devices.',
      'Use lazy loading for images and sections below the fold. This keeps initial load lighter and improves perceived performance.',
    ],
    takeaways: [
      'Largest Contentful Paint should stay under 2.5 seconds.',
      'Avoid render-blocking CSS and JavaScript where possible.',
      'Track performance metrics after each release.',
    ],
    checklist: [
      'Convert large images to modern formats.',
      'Remove unused dependencies and scripts.',
      'Enable caching and CDN for static assets.',
    ],
  },
  {
    id: 3,
    slug: 'best-tools-for-app-development-today',
    image: img3,
    tag: 'Development',
    readTime: '5 min read',
    author: 'Alex Rivera',
    role: 'Product Engineer',
    date: 'July 31, 2025',
    title: 'Best Tools for App Development Today world',
    desc: 'Keep your site safe with simple security tips best tools to build apps easily and quickly',
    overview:
      'Modern app teams move quickly when they adopt tooling that supports consistency, collaboration, and reliable deployment pipelines.',
    content: [
      'Pick tools that reduce setup friction and improve iteration speed. Teams ship faster when the toolchain is simple and predictable.',
      'Use component libraries and linting from day one to keep design and code consistency while scaling your product.',
      'Track deployment and runtime health with lightweight monitoring so production issues are visible before users report them.',
    ],
    takeaways: [
      'Choose tools with strong documentation and ecosystem.',
      'Automate quality checks before code reaches production.',
      'Prefer observability from day one, not later.',
    ],
    checklist: [
      'Set up linting and formatting in CI.',
      'Create a reusable component baseline.',
      'Define release and rollback procedures.',
    ],
  },
]
