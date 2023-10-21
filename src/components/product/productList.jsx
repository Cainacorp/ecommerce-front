import ProductCard from "./productCard";

export default function ProductList() {
  const items = [
    {id: 1, url: "https://nude-project.com/cdn/shop/files/11_5f7ca982-3081-453e-b176-2d6856e19e6a_500x.jpg?v=1693424876"},
    {id: 2, url: "https://nude-project.com/cdn/shop/files/ORIGINSHOODOFF-WHITEfront_500x.jpg?v=1693483469"},
    {id: 3, url: "https://nude-project.com/cdn/shop/files/1_ad0c9d60-4eac-48c8-b08e-147d38396053_500x.jpg?v=1693501376"},
    {id: 4, url: "https://nude-project.com/cdn/shop/files/5_96e106b2-00ff-429a-8b1b-7106ea7abebf_500x.jpg?v=1693501974"}
  ];

  const listItems = items.map(item =>
    <li key={item.id}>
        <ProductCard image={item.url} />
      </li>
    )

  return (
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2 justify-items-center">
      {listItems}
    </ul>
  );
}