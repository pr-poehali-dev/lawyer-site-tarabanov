import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Звонки принимаются с 9:00 до 18:00",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "tarabanov.law@email.com",
      description: "Ответим в течение 24 часов",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "г. Москва, ул. Тверская, д. 10",
      description: "Офис 205, 2 этаж",
    },
    {
      icon: "Clock",
      title: "Время работы",
      value: "Пн-Пт: 9:00 - 18:00",
      description: "Сб: 10:00 - 14:00, Вс: выходной",
    },
  ];

  return (
    <section id="contacts" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Контакты
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Свяжитесь с нами для получения профессиональной юридической помощи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-600 rounded-xl mx-auto mb-4">
                <Icon name={contact.icon} className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-montserrat mb-2">
                {contact.title}
              </h3>
              <p className="text-amber-400 font-semibold mb-1">
                {contact.value}
              </p>
              <p className="text-gray-400 text-sm">{contact.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 rounded-xl p-8 text-center">
          <Icon
            name="MessageCircle"
            className="h-12 w-12 text-amber-400 mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold font-montserrat mb-4">
            Нужна консультация?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время для
            обсуждения вашего вопроса
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
