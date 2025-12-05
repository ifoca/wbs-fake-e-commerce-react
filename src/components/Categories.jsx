const Categories = ({ products }) => {
  const uniqueCategories = [...new Set(products.map((p) => p.category))];

  return (
    <div>
      <div className="font-bold text-xl p-2">
        <p> Product categories:</p>
      </div>
      <div className="cards-list flex gap-4 p-2">
        {uniqueCategories.map((category) => (
          <div key={category} className="label bg-primary text-white p-2 border rounded-xl">
            <p>{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
