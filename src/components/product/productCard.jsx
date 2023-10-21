export default function ProductCard({image}) {
  return (
    <div>
      <img src={image} alt="" />
      <div className="flex flex-col">
        <span className="font-bold">PRODUCT NAME</span>
        <span>$15.000</span>
        <div className="flex gap-1 mt-1">
          <div className="h-[12px] w-[12px] rounded-full bg-black border-slate-300"></div>
          <div className="h-[12px] w-[12px] rounded-full bg-yellow-700 border-slate-300"></div>
          <div className="h-[12px] w-[12px] rounded-full bg-green-900 border-slate-300"></div>
        </div>
      </div>
    </div>
  );
}