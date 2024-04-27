import gql from 'graphql-tag'

export const GET_CONTENT_SETTINGS = gql`
  query GET_CONTENT_SETTINGS {
    contents(where: {title: "Content Settings"}) {
      nodes {
        title
        contentSettings {
          homeHeadline1 {
            background {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            id {
              title
              description
            }
            en {
              title
              description
            }
          }
          homeHeadline2 {
            background {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            id {
              title
              description
            }
            en {
              title
              description
            }
          }
          homeHeadline3 {
            background {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            id {
              title
              description
            }
            en {
              title
              description
            }
          }
          homeHeadline4 {
            background {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            id {
              title
              description
            }
            en {
              title
              description
            }
          }
          homeHeadline5 {
            background {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            id {
              title
              description
            }
            en {
              title
              description
            }
          }
          products {
            productCategory1 {
              categoryName
              product1 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product2 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product3 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product4 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product5 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product6 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
            }
            productCategory2 {
              categoryName
              product1 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product2 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product3 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product4 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product5 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product6 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
            }
            productCategory3 {
              categoryName
              product1 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product2 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product3 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product4 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product5 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product6 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
            }
            productCategory4 {
              categoryName
              product1 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product2 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product3 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product4 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product5 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product6 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
            }
            productCategory5 {
              categoryName
              product1 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product2 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product3 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product4 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product5 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
              product6 {
                showOnHome
                image {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageOutline {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                imageSpecification {
                  node {
                    mediaItemUrl
                    mediaType
                    mimeType
                  }
                }
                id {
                  name
                  description
                }
                en {
                  name
                  description
                }
              }
            }
          }
          services1 {
            background {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            backgroundMobile {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            id {
              title
              description
            }
            en {
              title
              description
            }
          }
          services2 {
            background {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            backgroundMobile {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            id {
              title
              description
            }
            en {
              title
              description
            }
          }
          services3 {
            background {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            backgroundMobile {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            id {
              title
              description
            }
            en {
              title
              description
            }
          }
          services4 {
            background {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            backgroundMobile {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            id {
              title
              description
            }
            en {
              title
              description
            }
          }
          services5 {
            background {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            backgroundMobile {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            id {
              title
              description
            }
            en {
              title
              description
            }
          }
          services6 {
            background {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            backgroundMobile {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            id {
              title
              description
            }
            en {
              title
              description
            }
          }
          partners {
            industryGroup1 {
              image1 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image2 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image3 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image4 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image5 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image6 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image7 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image8 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
            }
            industryGroup2 {
              image1 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image2 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image3 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image4 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image5 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image6 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image7 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image8 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
            }
            industryGroup3 {
              image1 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image2 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image3 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image4 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image5 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image6 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image7 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image8 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
            }
            industryGroup4 {
              image1 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image2 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image3 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image4 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image5 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image6 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image7 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
              image8 {
                node {
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
            }
          }
          contacts {
            address
            email
            facebook
            instagram
            locationMap
            phoneNumber
            tiktok
            whatsapp
          }
        }
      }
    }
  }
`