import SwiperComponent from "@/components/swiper/swiper"
import ProductList from "@/components/product/productList"
import CategoryList from "@/components/category/categoryList"

export default function Home() {
  return (
    <div>
      <SwiperComponent />
      <main className="flex flex-col gap-y-6 mx-4 my-5">
        <section className="flex flex-col gap-y-6">
          <h1 className="text-center font-bold text-xl">NOVEDADES</h1>
          <ProductList />
          <button className="text-sm border-2 border-primary px-4 py-2 w-fit mx-auto transition-all duration-200 hover:bg-primary hover:text-white">VER MÁS</button>
        </section>
        <CategoryList />
      </main>
    </div>
  )
}
