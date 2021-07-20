import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { JSONLD } from '../JSONLD/JSONLD';

const SEO = () => {
    const { site } = useStaticQuery(query)

    const defaults = site.siteMetadata

    const title = defaults.title
    const description = defaults.description
    const url = defaults.url
    const image = `${url}${defaults.image}`

    return (
        <Helmet>
            <title>{title}</title>
            <link rel="canonical" href={url} />
            <meta name="description" content={description} />
            {image && <meta name="image" content={image} />}

            <JSONLD>
                {{
                    '@context': 'https://schema.org',
                    '@type': 'Psychiatric',
                    url: 'https://presencecounselling.co.uk/',
                    name: 'Presence Counselling',
                    contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+44-795-879-4265',
                    email: 'office@presencecounselling.co.uk',
                    contactType: 'Customer service',
                    },
                }}
            </JSONLD>

            <meta property="og:url" content={url} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
            <meta name="google-site-verification" content="6ajigKAuZ5ZZ4M_srks_80JT-oX5cWSAcg4Rbv49SgM" />
        </Helmet>
    )
}
export default SEO

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                description
                image
                title
                url
            }
        }
    }
`