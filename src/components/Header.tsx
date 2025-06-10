import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Icon name="Scale" className="h-8 w-8 text-amber-600 mr-3" />
            <div>
              <h1 className="text-xl font-bold font-montserrat text-slate-800">
                Адвокат Тарабанов И.О.
              </h1>
              <p className="text-sm text-gray-600">Юридические услуги</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Сертификаты
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Контакты
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              className="h-6 w-6 text-slate-800"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("certificates")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Сертификаты
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Контакты
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
