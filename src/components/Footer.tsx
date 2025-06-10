import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Icon name="Scale" className="h-8 w-8 text-amber-600 mr-3" />
              <div>
                <h3 className="text-xl font-bold font-montserrat">
                  Адвокат Тарабаров И.О.
                </h3>
                <p className="text-gray-400 text-sm">Юридические услуги</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Профессиональная юридическая помощь с индивидуальным подходом к
              каждому клиенту.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-4">
              Услуги
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>Корпоративное право</li>
              <li>Недвижимость</li>
              <li>Семейное право</li>
              <li>Уголовное право</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-4">
              Контакты
            </h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Icon name="Phone" className="h-4 w-4 mr-2 text-amber-600" />
                +7 (495) 123-45-67
              </p>
              <p className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 mr-2 text-amber-600" />
                tarabanov.law@email.com
              </p>
              <p className="flex items-center">
                <Icon name="MapPin" className="h-4 w-4 mr-2 text-amber-600" />
                г. Москва, ул. Тверская, д. 10
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Адвокат Тарабаров И.О. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
