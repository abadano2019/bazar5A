const products = [
    {
        id: 1, 
        titulo:"Juego Menage", 
        img_src: "/img/Bazar1.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 525,
        categoria: "cocina",
        tag: "3 colores",
        stock: 20,
        detalle: "Detalle extendido del producto" 
    },
    {
        id: 2, 
        titulo: "Vasos plástico", 
        img_src: "/img/Bazar22.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 50,
        categoria: "cocina",
        tag: "5 colores",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 3, 
        titulo: "Fuente cerámica", 
        img_src: "/img/Bazar3.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 790,
        categoria: "cocina",
        tag: "2 Tamaños",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 4, 
        titulo: "Juego de cubiertos", 
        img_src: "/img/Bazar4.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 125,
        categoria: "cocina",
        tag: "2 Modelos",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 5, 
        titulo: "Set cubiertos", 
        img_src: "/img/Bazar5.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 2550,
        categoria: "cocina",
        tag: "3 Modelos",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 6, 
        titulo: "Menage", 
        img_src: "/img/Bazar6.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 99,
        categoria: "cocina",
        tag: "2 Modelos",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 7, 
        titulo: "Juego de asaderas", 
        img_src: "/img/Bazar7.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 425,
        categoria: "cocina",
        tag: "6 Tamaños",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 8, 
        titulo: "Fuente de vidrio", 
        img_src: "/img/Bazar8.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 499,
        categoria: "cocina",
        tag: "4 tamaños",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 9, 
        titulo: "Asadera con parrilla", 
        img_src: "/img/Bazar9.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        precio: 750,
        categoria: "cocina",
        tag: "3 Tamaños",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 10,
        titulo: "Budinera", 
        img_src: "/img/Bazar10.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 259,
        categoria: "cocina",
        tag: "Unico tamaño",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 11, 
        titulo: "Exprimidor", 
        img_src: "/img/Bazar11.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 120,
        categoria: "cocina",
        tag: "3 Modelos",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 12, 
        titulo: "Exprimidor de palanca", 
        img_src: "/img/Bazar12.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 2100,
        categoria: "cocina",
        tag: "2 Colores",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 13,
        titulo: "Exprimidor con jarra",
        img_src: "/img/Bazar13.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        precio: 515,
        categoria: "hogar",
        tag: "4 Colores",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 14,
        titulo: "Juguera", 
        img_src: "/img/Bazar14.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        precio: 2730,
        categoria: "hogar",
        tag: "3 Colores",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 15, 
        titulo: "Cafetera", 
        img_src: "/img/Bazar15.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 1357,
        categoria: "hogar",
        tag: "2 Modelos",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 16, 
        titulo: "Cafetera Dolce Gusto", 
        img_src: "/img/Bazar16.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4299,
        categoria: "hogar",
        tag: "3 colores",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 17, 
        titulo: "Copas", 
        img_src: "/img/cristaleriaCopas.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 520,
        categoria: "cristaleria",
        tag: "Unico tamaño",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 18, 
        titulo: "Vasos Termicos", 
        img_src: "/img/cristaleriaVasosTermicos.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 450,
        categoria: "cristaleria",
        tag: "2 Tamaños",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 19, 
        titulo: "Tasas", 
        img_src: "/img/cristaleriaTasas.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 460,
        categoria: "cristaleria",
        tag: "2 Tamaño",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 20, 
        titulo: "Copas cerveceras", 
        img_src: "/img/cristaleriaCopasCerveza.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 520,
        categoria: "cristaleria",
        tag: "Unico tamaño",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 21, 
        titulo: "Copas Postre", 
        img_src: "/img/cristaleriaCopaPostre.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 490,
        categoria: "cristaleria",
        tag: "Unico tamaño",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 22, 
        titulo: "Jarra", 
        img_src: "/img/cristaleriaJarra.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 1100,
        categoria: "cristaleria",
        tag: "Unico tamaño",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 23, 
        titulo: "Vasos", 
        img_src: "/img/cristaleriaVaso.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 520,
        categoria: "cristaleria",
        tag: "Unico tamaño",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 24, 
        titulo: "Copas de vino", 
        img_src: "/img/cristaleriaCopaVino.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 960,
        categoria: "cristaleria",
        tag: "Unico tamaño",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 25, 
        titulo: "Copas largas", 
        img_src: "/img/cristaleriaCopaLarga.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 769,
        categoria: "cristaleria",
        tag: "Unico tamaño",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 26, 
        titulo: "Vasos de Whisky", 
        img_src: "/img/cristaleriaVasoWhisky.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 820,
        categoria: "cristaleria",
        tag: "Unico tamaño",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 27, 
        titulo: "Vaso para Agua", 
        img_src: "/img/cristaleriaVasoAgua.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 630,
        categoria: "cristaleria",
        tag: "Unico tamaño",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 28, 
        titulo: "Copas para agua", 
        img_src: "/img/cristaleriaCopaAgua.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 520,
        categoria: "cristaleria",
        tag: "Unico tamaño",
        stock: 20,
        detalle: "Detalle extendido del producto"
    },
    {
        id: 29, 
        titulo: "Vajilla india", 
        img_src: "/img/vajilla1.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 1520,
        categoria: "vajilla",
        tag: "Color rojo",
        stock: 20,
        detalle: "Vajilla de procedencia indú, color rojo con diseño, consta de plato grande, plato chico, bowl y taza"
    },
    {
        id: 30, 
        titulo: "Vajilla Turkey", 
        img_src: "/img/vajilla2.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 3220,
        categoria: "vajilla",
        tag: "Unico color",
        stock: 20,
        detalle: "Vajilla de origen indú, color turquez, consta de tres plato mas copa de cristal"
    },
    {
        id: 31, 
        titulo: "Vajilla Sloven", 
        img_src: "/img/vajilla3.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 520,
        categoria: "vajilla",
        tag: "Unico color",
        stock: 20,
        detalle: "Juego de vajilla de origen ingles, consta de 2 platos cuadrados y un tazón, dimensiones: Plato grande: 30 x 30, Plato chico: 20 x 20, Tazón: 15 de diametro"
    },
    {
        id: 32, 
        titulo: "Juego de vajilla Artid", 
        img_src: "/img/vajilla4.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "vajilla",
        tag: "Unico color, mixto",
        stock: 20,
        detalle: "Juego de vajilla de origen ingles, consta de 2 platos, uno ligeramente octagonal y otro redondo, incluye dos bowl más juego de cafe y te, dimensiones: Plato grande: 30cm de diametro, Plato chico: 20cm de diametro, bowl grande: 30cm de diametro, bowl chico 20cm de diametro"
    },
    {
        id: 33, 
        titulo: "Juego de vajilla Splend", 
        img_src: "/img/vajilla5.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "vajilla",
        tag: "Unico diseño",
        stock: 20,
        detalle: "Juego de vajilla de origen asiatico, consta de 4 platos y una tasa, dimensiones: Plato 1: 30cm x 30cm, Plato 2: 29cm x 29cm, Plato 3: 28cm x 28cm, Plato 4: 27cm x 27cm"
    },
    {
        id: 34, 
        titulo: "Juego de vajilla Italiano", 
        img_src: "/img/vajilla6.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "vajilla",
        tag: "Unico diseño, color rojo",
        stock: 20,
        detalle: "Juego de vajilla de origen italiano, consta de 4 platos grandes, 4 platos chicos, 4 bowl y cuatro tazas, dimensiones: Plato grande: 30cm x 30cm, Plato chico: 20cm x 20cm, bowl: 15cm diametro"
    },
    {
        id: 35, 
        titulo: "Juego de vajilla Clear", 
        img_src: "/img/vajilla7.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "vajilla",
        tag: "2 colores",
        stock: 20,
        detalle: "Juego de vajilla de origen chino, consta de 6 platos llanos y 6 platos hondos, dimensiones: 30cm diametro"
    },
    {
        id: 36, 
        titulo: "Juego de vajilla infantil", 
        img_src: "/img/vajilla8.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "vajilla",
        tag: "3 diseños",
        stock: 20,
        detalle: "Juego de vajilla infantil, consta de plato, bowl, taza y cubiertos, dimensiones: Plato 20cm diametro, bowl, 10cm diametro, diseño de abeja, mariquita y conejo"
    },
    {
        id: 37, 
        titulo: "Juego de vajilla de loza", 
        img_src: "/img/vajilla9.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "vajilla",
        tag: "Unico diseño, 3 tamaños",
        stock: 20,
        detalle: "Juego de vajilla de loza, sin diseño, consta de plato llano, plato hondo y platillo, dimensiones: Plato hondo y llano: 300cm diametro, platillo: 10cm de diametro"
    },
    {
        id: 38, 
        titulo: "Juego de vajilla willman", 
        img_src: "/img/vajilla10.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "vajilla",
        tag: "Unico diseño, 2 colores",
        stock: 20,
        detalle: "Juego de vajilla willam, diseño ingles, consta de plato llano, plato hondo, platillo y tazas de cafe, dimensiones: Plato hondo y llano: 300cm diametro, platillo: 10cm de diametro"
    },
    {
        id: 39, 
        titulo: "Sandwichera", 
        img_src: "/img/electro1.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "electrodomesticos",
        tag: "Marca Xion",
        stock: 20,
        detalle: "Sandwichera marcas Xion, potencia 1200W, antiadherente, fácil lavado, color negra y gris grafito"
    },
    {
        id: 40, 
        titulo: "Freezer horizontal", 
        img_src: "/img/electro2.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "electrodomesticos",
        tag: "Marca James, 100lt",
        stock: 20,
        detalle: "Freezer horizontal, marca James, capacidad 100 lt, grantía 3 años, dimensiones: 60cm x 90cm x 120cm"
    },
    {
        id: 41, 
        titulo: "Lavarropa automático carga frontal", 
        img_src: "/img/electro3.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "electrodomesticos",
        tag: "Marca James",
        stock: 20,
        detalle: "Lavarropa automático de carga frontal, display digital, 25 programas de lavado, centrifugado, 2000w de potencia, tecnologia inverter, dimensiones: 50cm x 50cm x 90cm"
    },
    {
        id: 42, 
        titulo: "Estufa halogena", 
        img_src: "/img/electro4.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "electrodomesticos",
        tag: "Marca James",
        stock: 20,
        detalle: "Estufa halogena, marca James, potencia 1900w, oscilante, tres velocidades con 5 niveles de calor, dimensiones: 50cm x 40cm x 15cm"
    },
    {
        id: 43, 
        titulo: "Maquina de coser", 
        img_src: "/img/electro5.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "electrodomesticos",
        tag: "Singer digital",
        stock: 20,
        detalle: "Maquina de coser singer digital, 55 funciones, bordado, dimensiones: 40cm x 20 cm x 40cm"
    },
    {
        id: 44, 
        titulo: "Mixer", 
        img_src: "/img/electro6.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "electrodomesticos",
        tag: "Disponible en 3 Colores",
        stock: 20,
        detalle: "Mixer marca Bosh, mezcla, pica, corta, tritura, varios accesorios, dimensiones: 40cm x 20 cm x 40cm, disponible en 3 colores"
    },
    {
        id: 45, 
        titulo: "Tostadora", 
        img_src: "/img/electro7.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "electrodomesticos",
        tag: "Disponible en 6 Colores",
        stock: 20,
        detalle: "Tostadora marca kitchen, origen italiano, capacidad para 2 y 4 panes, disponible en 6 colores, dimensiones: 20 cm x 15 cm x 10cm para para 2 panes y 40 cm x 15 cm x 10cm para para 4 panes"
    },
    {
        id: 46, 
        titulo: "Licuadora", 
        img_src: "/img/electro8.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "electrodomesticos",
        tag: "Disponible en 3 Colores",
        stock: 20,
        detalle: "Licuadora marca Dolce, de diseño original, origen italiano, capacidad 1lt, disponible en 3 colores, dimensiones: 15 cm x 40 cm x 15cm, incluye botella tipo termo"
    },
    {
        id: 47, 
        titulo: "Batidora", 
        img_src: "/img/electro9.jpg", 
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        precio: 4520,
        categoria: "electrodomesticos",
        tag: "Disponible en 2 Colores",
        stock: 20,
        detalle: "Batidora marca Rotel, origen español, disponible en 2 colores: negro y rojo, dimensiones: 30 cm x 40 cm x 40cm"
    },


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
  