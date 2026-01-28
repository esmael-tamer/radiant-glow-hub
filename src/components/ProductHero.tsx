import jaydenCollection from "@/assets/jayden-collection.jpg";
const ProductHero = () => {
  return <section className="bg-cream-dark py-6 sm:py-8 px-4">
    <div className="container mx-auto max-w-4xl">
      <div className="relative bg-gradient-to-br from-primary to-accent rounded-2xl sm:rounded-3xl overflow-hidden shadow-card">
        <div className="flex flex-col md:flex-row items-center p-4 sm:p-6 md:p-10 gap-4 sm:gap-6 md:gap-8">
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <img
              src={jaydenCollection}
              alt="مجموعة جايدن الفاخرة"
              className="w-full max-w-[280px] sm:max-w-sm h-auto rounded-xl sm:rounded-2xl shadow-xl animate-float aspect-square object-cover"
              width={280}
              height={280}
            />
            {/* Discount Badge */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-500 text-white font-bold text-sm sm:text-lg md:text-xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg animate-pulse">
              خصم 55%
            </div>
          </div>

          {/* Product Text */}
          <div className="w-full md:w-2/3 text-center md:text-right">
            <h1 className="text-cream text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-2 sm:mb-4">مجموعة جايدن</h1>
            <h2 className="text-gold-light text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed mb-2 sm:mb-4">إذا تبين شي يرفع مزاجچ من أول لحظة… جايدن خيارچ لا تفوّتين العرض.</h2>
            <p className="text-cream/80 text-base sm:text-lg md:text-xl font-medium">
              خـاليه من الـفراغات وكـثيفة
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default ProductHero;