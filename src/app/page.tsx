
import HomePage from "./Home/page";
import About from "./About/page";
import ProductPage from "./Product/page";
import ContactPage from "./Contact/page";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <About/>
      <ProductPage/>
      <ContactPage/>
    </div>
  );
}
