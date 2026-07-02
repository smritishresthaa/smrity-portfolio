import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

const defaultSEO = {
  title: 'Smriti Shrestha | UI/UX Designer & Web Developer',

  description:
    'Portfolio of Smriti Shrestha, a UI/UX designer and web developer creating thoughtful digital experiences, operational systems, and modern web applications.',

  keywords:
    'Smriti Shrestha, UI UX Designer, Web Developer, Portfolio, Figma, React, MERN Stack, Google Sheets, Operations Systems, Nepal',

  // This must be an absolute deployed image URL.
  image:
    'https://smrity-portfolio.vercel.app/images/projects/pic.jpeg',

  // Your actual deployed portfolio URL.
  url: 'https://smrity-portfolio.vercel.app/',

  type: 'website' as const
};

export default function SEO({
  title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type
}: SEOProps) {
  const fullTitle = title
    ? `${title} | Smriti Shrestha`
    : defaultSEO.title;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Smriti Shrestha" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Open Graph: Instagram, Facebook, Messenger and LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="og:image:alt"
        content="Smriti Shrestha portfolio"
      />
      <meta property="og:url" content={url} />
      <meta
        property="og:site_name"
        content="Smriti Shrestha Portfolio"
      />
      <meta property="og:locale" content="en_US" />

      {/* Twitter/X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta name="twitter:image" content={image} />

      {/* Browser and mobile appearance */}
      <meta name="theme-color" content="#8B5CF6" />
      <meta
        name="msapplication-TileColor"
        content="#8B5CF6"
      />
      <meta
        name="apple-mobile-web-app-capable"
        content="yes"
      />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="default"
      />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Smriti Shrestha',
          jobTitle: 'UI/UX Designer and Web Developer',
          description,
          url,
          image,

          sameAs: [
            'https://github.com/smritishresthaa',
            'https://www.linkedin.com/in/smriti-shrestha-a58b80315'
          ],

          knowsAbout: [
            'UI/UX Design',
            'Figma',
            'Wireframing',
            'Prototyping',
            'React',
            'Node.js',
            'MongoDB',
            'Web Development',
            'Google Sheets',
            'Operations Systems'
          ],

          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Herald College Kathmandu'
          },

          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Lalitpur',
            addressCountry: 'Nepal'
          }
        })}
      </script>
    </Helmet>
  );
}