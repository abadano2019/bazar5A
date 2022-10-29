const products = [
    {
        id: 1, 
        titulo:"Juego Menage", 
        img_src: "/img/Bazar1.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 525,
        categoria: "cocina",
        tag: "3 colores" 
    },
    {
        id: 2, 
        titulo: "Vasos plástico", 
        img_src: "/img/Bazar22.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 50,
        categoria: "cocina",
        tag: "5 colores"
    },
    {
        id: 3, 
        titulo: "Fuente cerámica", 
        img_src: "/img/Bazar3.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 790,
        categoria: "cocina",
        tag: "2 Tamaños"
    },
    {
        id: 4, 
        titulo: "Juego de cubiertos", 
        img_src: "/img/Bazar4.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 125,
        categoria: "cocina",
        tag: "2 Modelos"
    },
    {
        id: 5, 
        titulo: "Set cubiertos", 
        img_src: "/img/Bazar5.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 2550,
        categoria: "cocina",
        tag: "3 Modelos"
    },
    {
        id: 6, 
        titulo: "Menage", 
        img_src: "/img/Bazar6.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 99,
        categoria: "cocina",
        tag: "2 Modelos"
    },
    {
        id: 7, 
        titulo: "Juego de asaderas", 
        img_src: "/img/Bazar7.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 425,
        categoria: "cocina",
        tag: "6 Tamaños"
    },
    {
        id: 8, 
        titulo: "Fuente de vidrio", 
        img_src: "/img/Bazar8.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 499,
        categoria: "cocina",
        tag: "4 tamaños"
    },
    {
        id: 9, 
        titulo: "Asadera con parrilla", 
        img_src: "/img/Bazar9.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        precio: 750,
        categoria: "cocina",
        tag: "3 Tamaños"
    },
    {
        id: 10,
        titulo: "Budinera", 
        img_src: "/img/Bazar10.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 259,
        categoria: "cocina",
        tag: "Unico tamaño"
    },
    {
        id: 11, 
        titulo: "Exprimidor", 
        img_src: "/img/Bazar11.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 120,
        categoria: "cocina",
        tag: "3 Modelos"
    },
    {
        id: 12, 
        titulo: "Exprimidor de palanca", 
        img_src: "/img/Bazar12.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 2100,
        categoria: "cocina",
        tag: "2 Colores"
    },
    {
        id: 13,
        titulo: "Exprimidor con jarra",
        img_src: "/img/Bazar13.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        precio: 515,
        categoria: "hogar",
        tag: "4 Colores"
    },
    {
        id: 14,
        titulo: "Juguera", 
        img_src: "/img/Bazar14.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        precio: 2730,
        categoria: "hogar",
        tag: "3 Colores"
    },
    {
        id: 15, 
        titulo: "Cafetera", 
        img_src: "/img/Bazar15.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 1357,
        categoria: "hogar",
        tag: "2 Modelos"
    },
    {
        id: 16, 
        titulo: "Cafetera Dolce Gusto", 
        img_src: "/img/Bazar16.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4299,
        categoria: "hogar",
        tag: "3 colores"
    }
]

export const getProducts_old = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res(products)
        }, 3000);
});

export const getProducts = (categoria) =>
    new Promise((res, rej) => {
      const response = categoria 
        ? products.filter((p) => p.categoria === categoria)
        : products;
      setTimeout(() => {
        res(response);
      }, 3000);
});
  
export const getProduct = (productId) =>
    new Promise((res, rej) => {
      const response = products.find((product) => product.id == productId);
      setTimeout(() => {
        res(response);
      }, 3000);
});
  