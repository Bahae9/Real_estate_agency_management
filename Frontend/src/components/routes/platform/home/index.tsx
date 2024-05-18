import Footer from "@/components/footer";
import Hero from "./_components/hero";
import NewProducts from "./_components/new-products";
import Statics from "./_components/statics";
import Testimonials from "./_components/testimonials";
import LogoClouds from "./_components/logo-clouds";

const Home = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-60px)] flex flex-col justify-center pb-8">
        <Hero />
        <Statics />
      </div>
      <NewProducts />
      <Testimonials />
      <LogoClouds />
      <Footer />
    </>
  );
};

export default Home;
