import express from "express";
const app = express();
app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Bela Hadid ",
      price: 800,
      image:
        "https://images.pexels.com/photos/17340547/pexels-photo-17340547/free-photo-of-black-and-white-photo-of-a-footbridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Gigi",
      price: 100,
      image:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "kendel ",
      price: 900,
      image:
        "https://images.pexels.com/photos/1572878/pexels-photo-1572878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: " WoKylieoden ",
      price: 600,
      image:
        "https://images.pexels.com/photos/3536991/pexels-photo-3536991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "kareena",
      price: 400,
      image:
        "https://images.pexels.com/photos/1855586/pexels-photo-1855586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter((product) => {
      return product.name.includes(req.query.search);
    });
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on  ${port}`);
});
