const pastelesJSON = [
    {
      name: "Brownie de chocolate",
      stock: 9,
      src:"foto-producto1",
      price: 2500,
    },
    {
        name: "Cheesecake",
        stock: 6,
        src:"foto-producto2",
        price: 2900,
      },
      {
        name: "Cupcake de vainilla",
        stock: 4,
        src:"foto-producto3",
        price: 1700,
      },
      {
        name: "Donut de chocolate",
        stock: 6,
        src:"foto-producto4",
        price: 1700,
      },
      {
        name: "Pie de Limón",
        stock: 4,
        src:"foto-producto5",
        price: 6000,
      },
      {
        name: "Tartaleta de durazno",
        stock: 4,
        src:"foto-producto6",
        price: 5700,
      }, 
      {
        name: "Torta de moca",
        stock: 4,
        src:"foto-producto7",
        price: 12500,
      },
      {
        name: "Berlines con crema",
        stock: 9,
        src:"foto-producto8",
        price: 2000,
      }
    ];
const botonBuscar = document.getElementById("search");
const botonClear = document.getElementById("clear");

const productos = document.getElementById("productos");
const total = document.getElementById("total");





const templateProducto = ({name,stock,src,price}) =>{
   return  `<div class="caja">
    <div class="${src}"></div>
    <h2>${name}</h2>
    <p class="stock"> stock: <span>${stock}</span></p>
    <p class="precio">$${price}</p>
    <button class="boton">Ver más</button>
</div>
`;
}

botonClear.addEventListener("click", () => {
    pintarPasteles()
    document.getElementById("stock").value = '';
    document.getElementById("desde").value = '';
    document.getElementById("hasta").value = '';
  });
botonBuscar.addEventListener("click", () => {
    //Capturamos los valores de los input
    let stock = document.getElementById("stock").value;
    let precioDesde = document.getElementById("desde").value;
    let precioHasta = document.getElementById("hasta").value;
  
    if (stock && stock > "0" && precioDesde && precioDesde > "0" && precioHasta && precioHasta > "0") {
      //condiciones para el filtrado
      const pastelesFiltrados = pastelesJSON.filter(
        (pastel) =>
        pastel.stock == stock &&
        pastel.price >= precioDesde &&
        pastel.price <= precioHasta
      );
      pintarPasteles(pastelesFiltrados);
    } else {
      alert("Se necesitan todos los filtros para continuar");
    }
  });

const pintarPasteles = (pasteles = pastelesJSON) => {
    clearPasteles();
    total.innerHTML = pasteles.length;
    pasteles.forEach((pastel) => {
      const pastelTemplate = templateProducto(pastel);
      productos.innerHTML += pastelTemplate;
    });
  };

  
  const clearPasteles = () => (productos.innerHTML = "");
  pintarPasteles()


