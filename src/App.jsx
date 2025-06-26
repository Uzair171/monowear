const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      img: "",
    },
    {
      id: 2,
      title: "Jackets",
      img: "",
    },
    {
      id: 3,
      title: "Sneakers",
      img: "",
    },
    {
      id: 4,
      title: "Men",
      img: "",
    },
    {
      id: 5,
      title: "Women",
      img: "",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-container">
          {/* <img src="" alt="" /> */}
          <div>
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
