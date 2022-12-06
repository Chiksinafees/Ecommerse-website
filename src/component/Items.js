const Items = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div>
      <h1 class="text-center p-4 mb-5 bg-warning text-white ">Music</h1>

      {productsArr.map((item) => (
        <ul class="text-center">
        <form key={item.title}>
          <h2>{item.title}</h2>
          {
            <img
              src={item.imageUrl}
              class="rounded mx-auto d-block"
              alt={item.title}
            ></img>
          }
          <h3>${item.price}</h3>
          <button type="button" class="btn btn-info">
            Add to Cart
          </button>
        </form>
        </ul>
      ))}
    </div>
  );
};

export default Items;
