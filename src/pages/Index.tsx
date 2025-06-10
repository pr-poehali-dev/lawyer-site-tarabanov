import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Certificates from "@/components/Certificates";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Certificates />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
