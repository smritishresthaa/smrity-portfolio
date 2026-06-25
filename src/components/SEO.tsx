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
  title: 'Smriti Shrestha - Full Stack Developer & UI/UX Designer',
  description: 'Experienced Full Stack Developer and UI/UX Designer specializing in React, Node.js, and modern web technologies. Creating beautiful, functional digital experiences.',
  keywords: 'Smriti Shrestha, Full Stack Developer, UI/UX Designer, React, Node.js, TypeScript, Web Development, Frontend, Backend, Portfolio',
  image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20portfolio%20website%20hero%20image%20featuring%20modern%20web%20development%20elements%2C%20clean%20design%2C%20lavender%20color%20scheme%2C%20coding%20workspace%2C%20minimalist%20aesthetic&image_size=landscape_16_9',
  url: 'https://smriti-portfolio.vercel.app',
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
  const fullTitle = title ? `${title} | ${defaultSEO.title}` : defaultSEO.title;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Smriti Shrestha" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Smriti Shrestha Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@smriti_dev" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Smriti Shrestha",
          "jobTitle": "Full Stack Developer & UI/UX Designer",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://linkedin.com/in/smriti-shrestha",
            "https://github.com/smriti-dev",
            "https://twitter.com/smriti_dev"
          ],
          "knowsAbout": [
            "React",
            "Node.js",
            "TypeScript",
            "UI/UX Design",
            "Full Stack Development",
            "Web Development"
          ],
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Tribhuvan University"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kathmandu",
            "addressCountry": "Nepal"
          }
        })}
      </script>
    </Helmet>
  );
}