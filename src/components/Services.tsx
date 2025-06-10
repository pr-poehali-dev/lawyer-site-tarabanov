import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Building",
      title: "Корпоративное право",
      description:
        "Юридическое сопровождение бизнеса, сделки M&A, корпоративные споры",
    },
    {
      icon: "Home",
      title: "Недвижимость",
      description: "Сделки с недвижимостью, регистрация прав, земельные споры",
    },
    {
      icon: "Users",
      title: "Семейное право",
      description: "Развод, раздел имущества, алименты, усыновление",
    },
    {
      icon: "ShieldCheck",
      title: "Уголовное право",
      description: "Защита в уголовных делах, представительство в суде",
    },
    {
      icon: "FileText",
      title: "Гражданское право",
      description: "Договоры, взыскание долгов, защита прав потребителей",
    },
    {
      icon: "Briefcase",
      title: "Трудовое право",
      description: "Трудовые споры, увольнение, восстановление на работе",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-slate-800 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр юридических услуг для физических и
            юридических лиц
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-xl mb-4">
                <Icon name={service.icon} className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold font-montserrat text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
