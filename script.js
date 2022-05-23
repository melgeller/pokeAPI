const pokeURL = "https://pokeapi.co/api/v2/pokemon/";

const cardGallery$$ = document.querySelector('.gallery')

const pokeGET = async () => {
  const pokeBOX = [];

  for (i = 1; i < 152; i++) {
    const pokeAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokeJSON = await pokeAPI.json();
    pokeBOX.push(pokeJSON);
  }

  const pokeMAPPED = pokeBOX.map((poke) => ({
    pokeName: poke.name,
    pokeSort: poke.id,
    pokeWeight: poke.weight,
    pokeHeight: poke.height,
    pokeIMG: poke.sprites.versions['generation-v']['black-white'].animated.front_default
  }));
  pokePaint(pokeMAPPED);
};

const pokePaint = (arrayPoke) => {
  for (i = 0; i < 151; i++) {
    const poke = arrayPoke[i];
    //NODOS
    const cardDiv$$ = document.createElement("div");
    const titulo$$ = document.createElement("h2");
    const image$$ = document.createElement("img");
    const order$$ = document.createElement("p");
    const weight$$ = document.createElement("p");
    const height$$ = document.createElement("p");
    //INFO-NODOS
    order$$.textContent = "#" + poke.pokeSort;
    titulo$$.textContent = poke.pokeName;
    image$$.src = poke.pokeIMG;
    weight$$.textContent = "Peso:  " + poke.pokeWeight;
    height$$.textContent = "Altura:  " + poke.pokeHeight;
    //HIJOS
    cardDiv$$.appendChild(order$$);
    cardDiv$$.appendChild(titulo$$);
    cardDiv$$.appendChild(image$$);
    cardDiv$$.appendChild(weight$$);
    cardDiv$$.appendChild(height$$);
    //CLASES
    titulo$$.setAttribute('id', 'pokenombres')
    weight$$.setAttribute('id', 'pokepeso')
    height$$.setAttribute('id', 'pokealto')
    order$$.setAttribute('id', 'pokenumero')

    cardGallery$$.appendChild(cardDiv$$)
    cardDiv$$.classList.add('cartas')

  }
};
const pokeInput$$ = document.querySelector('.pokeSEARCH')

const buscar = (cartas) => {
const cartasFiltradas = [];
for (const carta of cartas){
  if (carta.name.toLowerCase().includes(pokeInput$$.value.toLowerCase().trim())) {
    cartasFiltradas.push(carta)
  }

}
pokePaint(cartasFiltradas)
}





pokeGET();
