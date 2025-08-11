import React from 'react'
import { Helmet } from 'react-helmet-async'
import { SEO_CONSTANTS } from './constants'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = SEO_CONSTANTS.defaultDescription,
  keywords = SEO_CONSTANTS.defaultKeywords,
  image = SEO_CONSTANTS.defaultImage,
  url = SEO_CONSTANTS.defaultUrl,
  type = 'website'
}) => {
  const fullTitle = title 
    ? `${title} | ${SEO_CONSTANTS.siteName}` 
    : SEO_CONSTANTS.defaultTitle

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SEO_CONSTANTS.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SEO_CONSTANTS.siteName} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={SEO_CONSTANTS.twitterHandle} />

      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="theme-color" content="#00d2ff" />
      <meta name="msapplication-TileColor" content="#00d2ff" />
      <meta name="application-name" content={SEO_CONSTANTS.siteName} />
      
      <link rel="canonical" href={url} />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Sami Safatli",
          "jobTitle": "Software Engineer",
          "url": url,
          "image": image,
          "sameAs": [
            "https://www.linkedin.com/in/safatlisami/",
            "https://github.com/samisafatli"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Zé Delivery"
          },
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "University of Veiga de Almeida"
            },
            {
              "@type": "EducationalOrganization", 
              "name": "University Estácio de Sá"
            }
          ],
          "knowsAbout": [
            "React", "React Native", "TypeScript", "Node.js", 
            "JavaScript", "Software Engineering", "Mobile Development",
            "Web Development", "Frontend Development", "Backend Development"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rio de Janeiro",
            "addressCountry": "Brazil"
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEO
