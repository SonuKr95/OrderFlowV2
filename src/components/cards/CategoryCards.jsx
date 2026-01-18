const categories = [
  {
    categoryName: "Electronics",
    imageSource: "./src/images/categoriesPage/categories (15).png",
  },
  {
    categoryName: "Fashion",
    imageSource: "./src/images/categoriesPage/categories (16).png",
  },
  {
    categoryName: "Home & Kitchen",
    imageSource: "./src/images/categoriesPage/categories (18).png",
  },
  {
    categoryName: "Beauty & Health",
    imageSource: "./src/images/categoriesPage/categories (3).png",
  },
  {
    categoryName: "Sports",
    imageSource: "./src/images/categoriesPage/categories (1).png",
  },
  {
    categoryName: "Books",
    imageSource: "./src/images/categoriesPage/categories (14).png",
  },
];

function CategoryCards() {
  return categories.map((cat) => {
    const { categoryName, imageSource } = cat;
    return (
      <div
        // TESTING
        key={crypto.randomUUID()}
        className="w flex w-[200px] items-center justify-around gap-3 rounded-md bg-white px-3 py-3 hover:cursor-pointer"
      >
        <div className="flex items-center gap-3.5">
          <img className="w-[80px]" src={imageSource} alt="test" />
          <span className="text-[18px] font-medium">{categoryName}</span>
        </div>
      </div>
    );
  });
}

export default CategoryCards;
