export const products = [
  {
    id: 1,
    name: 'Yoga Mat',
    stock: 10,
    price: 2000,
    category: 'elements',
    description: 'Yoga Mat Colchoneta Gimnasia 8mm Goma Eva Con Manija 183x60',
    img: 'https://http2.mlstatic.com/D_NQ_NP_770749-MLA48039728933_102021-O.webp',
  },
  {
    id: 2,
    name: 'Crema Facial ',
    stock: 15,
    category: 'cosmetic',
    price: 2000,
    description:
      'Crema facial con ingredientes naturales para una piel más saludable y joven.',
    img: 'https://acdn.mitiendanube.com/stores/001/391/725/products/hidronutritiva11-fe27ecdfa633d8df4e16902299615223-1024-1024.png',
  },
  {
    id: 3,
    name: 'Clases de Yoga en Línea',
    stock: 20,
    category: 'class',
    price: 2000,
    description:
      'Acceso a clases de yoga en línea con instructores expertos para mejorar tu bienestar físico y mental.',
    img: 'https://profesordeyogaonline.com/sites/default/files/imagen-blog/2020-08/clases-de-yoga-online.jpg',
  },
];
export const productosFail = [];

//Promesa

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length === 0) {
      reject(new Error('Products is empty'));
    }
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.find((product) => product.id.toString() === id.toString())
      );
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 2000);
  });
};
