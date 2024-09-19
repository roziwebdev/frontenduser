import Hero from "./ui/Hero";
import { Stats } from "./ui/Stats";
import Category from "./ui/Category";
import Products from "./ui/Product";
import Feedback from "./ui/Feedback";
import Customers from "./ui/Customers";
import Footer from "@/components/Footer";


export default function Home() {


  return (
    <>
      <Hero />
      <Stats />
      <Category />
      <Products />
      <Feedback />
      <Customers />
      <Footer/>
    </>
  );
}
