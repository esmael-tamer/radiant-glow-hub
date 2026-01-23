import jaydenCollection from "@/assets/jayden-collection.jpg";

const ProductHero = () => {
  return (
    <section className="bg-cream-dark py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative bg-gradient-to-br from-primary to-accent rounded-3xl overflow-hidden shadow-card">
          <div className="flex flex-col md:flex-row items-center p-6 md:p-10 gap-8">
            {/* Product Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={jaydenCollection}
                alt="مجموعة جايدن الفاخرة"
                className="w-full max-w-sm h-auto rounded-2xl shadow-xl animate-float"
              />
            </div>
            
            {/* Product Text */}
            <div className="md:w-2/3 text-center md:text-right">
              <h1 className="text-cream text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                زيت الخـروع الفعـــال
              </h1>
              <h2 className="text-gold-light text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                في علاج تـساقط الشـعر
              </h2>
              <p className="text-cream/80 text-xl md:text-2xl font-medium">
                خـاليه من الـفراغات وكـثيفة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
