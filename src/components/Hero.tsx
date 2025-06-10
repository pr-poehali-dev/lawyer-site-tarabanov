import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-amber-600 p-4 rounded-full">
              <Icon name="Scale" className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-4">
            Адвокат
            <span className="block text-amber-400">Тарабаров И.О.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Профессиональная юридическая помощь с многолетним опытом. Защита
            ваших прав и интересов на высшем уровне.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-amber-400">
              <Icon name="Award" className="h-5 w-5 mr-2" />
              <span className="font-semibold">15+ лет опыта</span>
            </div>
            <div className="flex items-center text-amber-400">
              <Icon name="Users" className="h-5 w-5 mr-2" />
              <span className="font-semibold">500+ клиентов</span>
            </div>
            <div className="flex items-center text-amber-400">
              <Icon name="CheckCircle" className="h-5 w-5 mr-2" />
              <span className="font-semibold">95% успешных дел</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
