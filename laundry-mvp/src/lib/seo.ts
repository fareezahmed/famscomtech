import { Metadata } from 'next'

// Base SEO configuration
export const baseSEO: Metadata = {
  metadataBase: new URL('https://famscomtech.com'),
  title: {
    default: 'FamsComTech - Professional Laundry & Dry Cleaning Services',
    template: '%s | FamsComTech Laundry Services'
  },
  description: 'Professional laundry and dry cleaning services in Sydney. Quality care for your clothes, delivered to your door. Eco-friendly, reliable, and convenient.',
  keywords: [
    'laundry service',
    'dry cleaning',
    'Sydney laundry',
    'laundry delivery',
    'eco-friendly laundry',
    'professional laundry',
    'ironing service',
    'express laundry',
    'laundry pickup',
    'laundry service near me'
  ].join(', '),
  authors: [{ name: 'FamsComTech' }],
  creator: 'FamsComTech',
  publisher: 'FamsComTech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://famscomtech.com',
    siteName: 'FamsComTech Laundry Services',
    title: 'FamsComTech - Professional Laundry & Dry Cleaning Services',
    description: 'Professional laundry and dry cleaning services in Sydney. Quality care for your clothes, delivered to your door.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FamsComTech Laundry Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FamsComTech - Professional Laundry & Dry Cleaning Services',
    description: 'Professional laundry and dry cleaning services in Sydney. Quality care for your clothes, delivered to your door.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://famscomtech.com',
  },
}

// Structured Data for Local Business
export const localBusinessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FamsComTech Laundry Services',
  description: 'Professional laundry and dry cleaning services in Sydney. Quality care for your clothes, delivered to your door.',
  url: 'https://famscomtech.com',
  telephone: '+61-1300-123-456',
  email: 'info@famscomtech.com.au',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Laundry Street',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    postalCode: '2000',
    addressCountry: 'AU'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.8688,
    longitude: 151.2093
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '17:00'
    }
  ],
  priceRange: '$$',
  paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
  areaServed: {
    '@type': 'City',
    name: 'Sydney'
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: -33.8688,
      longitude: 151.2093
    },
    geoRadius: '50000'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Laundry Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dry Cleaning',
          description: 'Professional dry cleaning service for delicate garments'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Laundry Service',
          description: 'Wash and fold laundry service'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ironing Service',
          description: 'Professional ironing and pressing service'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1'
  }
}

// Structured Data for Service
export const serviceStructuredData = (serviceName: string, description: string, price: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: description,
  provider: {
    '@type': 'LocalBusiness',
    name: 'FamsComTech Laundry Services',
    url: 'https://famscomtech.com'
  },
  areaServed: {
    '@type': 'City',
    name: 'Sydney'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: serviceName,
    itemListElement: [
      {
        '@type': 'Offer',
        price: price,
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock'
      }
    ]
  }
})

// Structured Data for FAQ
export const faqStructuredData = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
})

// Breadcrumb structured data
export const breadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url
  }))
})

// Organization structured data
export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FamsComTech Laundry Services',
  url: 'https://famscomtech.com',
  logo: 'https://famscomtech.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+61-1300-123-456',
    contactType: 'customer service',
    areaServed: 'AU',
    availableLanguage: 'English'
  },
  sameAs: [
    'https://facebook.com/famscomtech',
    'https://twitter.com/famscomtech',
    'https://instagram.com/famscomtech'
  ]
}

// SEO utility functions
export const generatePageSEO = (page: string, customMeta?: Partial<Metadata>): Metadata => {
  const pageSEO: Record<string, Metadata> = {
    home: {
      title: 'Professional Laundry & Dry Cleaning Services in Sydney',
      description: 'Professional laundry and dry cleaning services in Sydney. Quality care for your clothes, delivered to your door. Book online today!',
      openGraph: {
        title: 'Professional Laundry & Dry Cleaning Services in Sydney',
        description: 'Professional laundry and dry cleaning services in Sydney. Quality care for your clothes, delivered to your door.',
      }
    },
    services: {
      title: 'Laundry Services - Dry Cleaning, Washing & Ironing',
      description: 'Professional laundry services including dry cleaning, washing, and ironing. Quality care for all your clothing needs in Sydney.',
      openGraph: {
        title: 'Laundry Services - Dry Cleaning, Washing & Ironing',
        description: 'Professional laundry services including dry cleaning, washing, and ironing.',
      }
    },
    pricing: {
      title: 'Laundry Service Pricing - Transparent & Competitive Rates',
      description: 'Transparent pricing for all our laundry services. Competitive rates for dry cleaning, washing, and ironing in Sydney.',
      openGraph: {
        title: 'Laundry Service Pricing - Transparent & Competitive Rates',
        description: 'Transparent pricing for all our laundry services.',
      }
    },
    book: {
      title: 'Book Laundry Service Online - Easy & Convenient',
      description: 'Book your laundry service online. Easy, convenient, and secure booking for dry cleaning, washing, and ironing services.',
      openGraph: {
        title: 'Book Laundry Service Online - Easy & Convenient',
        description: 'Book your laundry service online. Easy, convenient, and secure booking.',
      }
    },
    contact: {
      title: 'Contact Us - Laundry Service Support',
      description: 'Contact FamsComTech for laundry service support. Get in touch for questions, bookings, or customer service.',
      openGraph: {
        title: 'Contact Us - Laundry Service Support',
        description: 'Contact FamsComTech for laundry service support.',
      }
    },
    about: {
      title: 'About Us - FamsComTech Laundry Services',
      description: 'Learn about FamsComTech laundry services. Our mission, values, and commitment to providing exceptional laundry care.',
      openGraph: {
        title: 'About Us - FamsComTech Laundry Services',
        description: 'Learn about FamsComTech laundry services.',
      }
    },
    sustainability: {
      title: 'Sustainability & Eco-Friendly Laundry Practices',
      description: 'Learn about our commitment to environmental responsibility and sustainable laundry practices that protect our planet.',
      openGraph: {
        title: 'Sustainability & Eco-Friendly Laundry Practices',
        description: 'Learn about our commitment to environmental responsibility.',
      }
    },
    faq: {
      title: 'Frequently Asked Questions - Laundry Service FAQ',
      description: 'Find answers to frequently asked questions about our laundry services, pricing, delivery, and more.',
      openGraph: {
        title: 'Frequently Asked Questions - Laundry Service FAQ',
        description: 'Find answers to frequently asked questions about our laundry services.',
      }
    }
  }

  return {
    ...baseSEO,
    ...pageSEO[page],
    ...customMeta
  }
}