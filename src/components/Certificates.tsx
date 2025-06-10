import Icon from "@/components/ui/icon";

const Certificates = () => {
  const certificates = [
    {
      icon: "GraduationCap",
      title: "Юридическое образование",
      description:
        "Московский государственный юридический университет имени О.Е. Кутафина",
      year: "2008",
    },
    {
      icon: "Award",
      title: "Адвокатская лицензия",
      description: "Свидетельство о праве на занятие адвокатской деятельностью",
      year: "2010",
    },
    {
      icon: "Medal",
      title: "Повышение квалификации",
      description: "Российская академия адвокатуры и нотариата",
      year: "2023",
    },
    {
      icon: "Star",
      title: "Сертификат медиатора",
      description: "Квалификация медиатора по разрешению споров",
      year: "2021",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-slate-800 mb-4">
            Образование и сертификаты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подтвержденная квалификация и постоянное профессиональное развитие
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-50 to-amber-50 rounded-xl p-6 border border-amber-100 hover:border-amber-200 transition-colors duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-14 h-14 bg-amber-600 rounded-xl flex-shrink-0">
                  <Icon name={cert.icon} className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold font-montserrat text-slate-800">
                      {cert.title}
                    </h3>
                    <span className="text-amber-600 font-semibold text-sm">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
