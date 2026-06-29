export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "parquejipiro.com"}`;
  const lang = locale === "en" ? "en-US" : locale === "es" ? "es-EC" : "zh-CN";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "Park"],
        "name": locale === "en" ? "Parque Recreacional Jipiro" : locale === "es" ? "Parque Recreacional Jipiro" : "Parque Recreacional Jipiro（希皮罗休闲公园）",
        "description": locale === "en"
          ? "Parque Recreacional Jipiro is a beautiful recreational park in Loja, Ecuador, featuring green spaces, walking paths, and family attractions. A perfect destination for outdoor activities and family gatherings."
          : locale === "es"
          ? "El Parque Recreacional Jipiro es un hermoso parque recreacional en Loja, Ecuador, con espacios verdes, senderos peatonales y atracciones familiares. Un destino perfecto para actividades al aire libre y reuniones familiares."
          : "Parque Recreacional Jipiro 是厄瓜多尔洛哈的一个美丽休闲公园，拥有绿化空间、步行道和家庭娱乐设施。是户外活动和家庭聚会的完美目的地。",
        "url": `${baseUrl}/${locale}`,
        "touristType": ["Park", "RecreationalPark", "FamilyActivities", "Walking"],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -4.005754,
          "longitude": -79.204946
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "parkType",
            "value": "Recreational park",
            "description": "Public recreational park with green spaces and family facilities"
          },
          {
            "@type": "PropertyValue",
            "name": "rating",
            "value": "4.6/5",
            "description": "Rated 4.6 out of 5 with 9,471 Google reviews"
          }
        ],
        "isAccessibleForFree": true,
        "maximumAttendeeCapacity": 1000,
        "publicAccess": true,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Velasco Ibarra 1982",
          "addressLocality": "Loja",
          "addressRegion": "Loja",
          "addressCountry": "EC",
          "geo": "2QHW+5J"
        },
        "telephone": "+593982497853",
        "subjectOf": [
          {
            "@type": "CreativeWork",
            "headline": locale === "en" ? "Parque Recreacional Jipiro: Loja's Family Oasis" : locale === "es" ? "Parque Recreacional Jipiro: Oasis Familiar de Loja" : "Parque Recreacional Jipiro：洛哈的家庭绿洲",
            "about": "Guide to Parque Recreacional Jipiro recreational park in Loja, featuring green spaces and family attractions"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${baseUrl}/${locale}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": locale === "en" ? "Loja Parks" : locale === "es" ? "Parques de Loja" : "洛哈公园",
            "item": `${baseUrl}/${locale}`
          }
        ]
      }
    ]
  };
}
