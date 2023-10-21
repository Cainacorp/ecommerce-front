export default function CategoryList() {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-2 justify-items-center">
      <li className="relative">
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white">CATEGORY 1</span>
        <img src="https://nude-project.com/cdn/shop/files/LOOKBOOK_CULT_09_0028.jpg?v=1696612784" alt="" />
      </li>
      <li className="relative">
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white">CATEGORY 2</span>
        <img src="https://nude-project.com/cdn/shop/files/LOOKBOOK_CULT_12_0020.jpg?v=1696612185" alt="" />
      </li>
      <li className="relative col-span-2 lg:col-span-1">
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white">CATEGORY 3</span>
        <img src="https://nude-project.com/cdn/shop/files/NUDEPROJECT_FW236948.jpg?v=1696962467" alt="" />
      </li>
    </ul>
  );
}