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

  const addToCart=(e)=>{
    e.preventDefault()
    console.log('added to cart')
  }

  return (
    <div>
      <h1 className="text-center p-4 mb-5 bg-warning text-white ">Music</h1>

      {productsArr.map((item) => (
        <div key={item.title} className="text-center">
          <h2>{item.title}</h2>
          {
            <img
              src={item.imageUrl}
              className="rounded mx-auto d-block"
              alt={item.title}
            ></img>
          }
          <h3>${item.price}</h3>
          <button type="button" className="btn btn-info" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Items;
