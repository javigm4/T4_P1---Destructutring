const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];

/**
 * Usando Destructuración de arrays,
 * debes devolver todas las tecnologías
 * @returns
 */
export const getAllTechnologies = () => {
  const [, tech] = student;
  return tech;
};

/**
 * Usando Destructuración de arrays,
 * debes devolver todos los valores
 * @returns
 */

export const getAllValues = () => {
  const [, , values] = student;
  return values;
};

/**
 * Usando Destructuración de arrays,
 * debes devolver solo React
 * @returns
 */
export const getReact = () => {
  const [, tech] = student;
  return tech[3];
  //se puede hacer console.log(tech.find(tech=>tech==="React"));
};

/**
 * Usando Destructuración de arrays,
 * debes devolver CSS y 85
 * @returns
 */
export const getCSSAnd85 = () => {
  const [, tech, values] = student;
  let tech1 = tech.find((tech) => tech === "CSS");
  let values1 = values.find((value) => value === 85);
  return [tech1, values1];
};

/*****************************************************
 * ***************************************************
 ******************************************************/
const books = [
  {
    title: "La vida del lazarillo de Tormes",
    author: "Anonymous",
    published: "1554",
  },
  {
    title: "The NeverEnding Story",
    author: "Michael Ende",
    published: "1984",
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    published: "1954",
  },
  {
    title: "Beowulf",
    author: "Anonymous",
    published: "900",
  },
];

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el título del primer libro
 * @returns
 */
export const getTitleFirstBook = () => {
  const [{ title: first }] = books;
  return first; //para hacer el segundo seria [,{title:first}];
};

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el año de publicación del segundo libro
 * @returns
 */
export const getPublishedSecondBook = () => {
  const [, { published: publicaosegundo }] = books;
  return publicaosegundo;
};

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el título y el autor del último libro
 * @returns
 */
export const getAuthorsAndTitleLastBook = () => {
  const { title: ultimoTitulo, author: ultimoAutor } = books[books.length - 1];
  return [ultimoTitulo, ultimoAutor];
};
