export function constructHomeHeadlineData (data) {
  let headlines = []

  for (let i = 1; i <= 5; i++) {
    if (data[`homeHeadline${i}`].background !== null) {
      headlines.push(data[`homeHeadline${i}`])
    }
  }

  return headlines
}

export function constructProductsShowOnHome (data) {
  let products = []

  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 6; j++) {
      if (data.products[`productCategory${i}`][`product${j}`].showOnHome) {
        let productObject = new Object()
        productObject.categoryName = data.products[`productCategory${i}`].categoryName
        Object.assign(productObject, data.products[`productCategory${i}`][`product${j}`])
        products.push(productObject)
      }
    }
  }

  return products
}

export function constructProductsData (data) {
  let productsCategory = []
  let allProducts = []

  for (let i = 1; i <= 5; i++) {
    let productObject = new Object()
    productObject.categoryName = data.products[`productCategory${i}`].categoryName
    productObject.products = []
    for (let j = 1; j <= 10; j++) {
      let currentProduct = data.products[`productCategory${i}`][`product${j}`]
      if (currentProduct.image !== null) {
        productObject.products.push(currentProduct)
        allProducts.push(currentProduct)
      }
    }
    productsCategory.push(productObject)
  }

  productsCategory.unshift({
    categoryName: {
      id: 'Semua Produk',
      en: 'All Products'
    },
    products: allProducts
  })
  return productsCategory
}

export function constructServicesData (data) {
  let services = []

  for (let i = 1; i <= 6; i++) {
    if (data[`services${i}`].background !== null && data[`services${i}`].backgroundMobile !== null) {
      services.push(data[`services${i}`])
    }
  }

  return services
}

export function constructIndustriesData (data) {
  let industries = []

  for (let i = 1; i <= 4; i++) {
    let industryGroup = []
    for (let j = 1; j <= 8; j++) {
      industryGroup.push(data.partners[`industryGroup${i}`][`image${j}`])
    }
    industries.push(industryGroup)
  }
  return industries
}

export function constructContactsData (data) {
  return data.contacts ?? {}
}
