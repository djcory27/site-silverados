# Silverados Dog Park Website

A modern, SEO-optimized website for Silverados Dog Park built with Next.js, featuring live music events, dog-friendly amenities, and a clean professional design.

## 🚀 Features

- **SEO Optimized** - Comprehensive meta tags, structured data, and sitemap
- **PWA Ready** - Service worker, offline capabilities, and mobile optimization
- **Modern Design** - Clean, professional aesthetic inspired by premium dog park brands
- **Interactive Components** - Advanced search, notifications, and smooth animations
- **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance** - Optimized for Norton Neo browser and modern web standards

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4.x
- **TypeScript**: Full type safety
- **Deployment**: Static export for optimal performance

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/djcory27/site-silverados.git
cd site-silverados

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🚀 Deployment

### SiteGround Deployment (Automated)

This project includes automated deployment to SiteGround via GitHub Actions.

#### Setup Instructions:

1. **Configure Repository Secrets** in GitHub:
   - Go to your repository on GitHub
   - Navigate to Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `SG_HOST`: Your SiteGround FTP host (e.g., `ftp.yourdomain.com`)
     - `SG_USER`: Your SiteGround FTP username
     - `SG_PASS`: Your SiteGround FTP password

2. **Configure Deployment**:
   - The workflow is triggered automatically on pushes to the `master` branch
   - Files are deployed to `public_html/` directory on SiteGround
   - The workflow uses FTPS for secure file transfer

3. **Manual Deployment** (if needed):
   ```bash
   # Build the project
   npm run build

   # The static files will be in the ./out/ directory
   # Upload the contents of ./out/ to your SiteGround public_html directory
   ```

### Alternative Deployment Options

- **Vercel**: `vercel --prod`
- **Netlify**: Connect repository and set build command to `npm run build`
- **Railway**: Automatic deployment from GitHub
- **Render**: Static site deployment

## 📁 Project Structure

```
site-silverados/
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── menu/              # Menu page
│   ├── memberships/       # Memberships page
│   ├── privacy/           # Privacy policy
│   ├── rules/             # Park rules
│   ├── security/          # Security page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
├── data/                  # Static data files
├── public/                # Static assets
│   ├── robots.txt         # Search engine crawling rules
│   └── sitemap.xml        # Website sitemap
├── .github/               # GitHub Actions workflows
└── next.config.js         # Next.js configuration
```

## 🔍 SEO Features

- **Meta Tags**: Comprehensive title, description, and Open Graph tags
- **Structured Data**: JSON-LD schema for local business, events, and FAQ
- **Sitemap**: Auto-generated XML sitemap with next-sitemap
- **Robots.txt**: Optimized crawling instructions
- **Performance**: Core Web Vitals optimized

## 🎨 Design System

- **Colors**: Professional black/white/gray palette
- **Typography**: Inter font family with DM Serif Display for headings
- **Components**: Modular, reusable component library
- **Animations**: Smooth transitions and micro-interactions

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Accessible navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is private and proprietary to Silverados Dog Park.

## 📞 Support

For support or questions about this website, please contact the development team or create an issue in this repository.
