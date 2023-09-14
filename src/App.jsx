import Nav from "./components/nav";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Newsletter from "./section/Newsletter";
import Ourproducts from "./section/Ourproducts";
import Quality from "./section/Quality";
import Service from "./section/Service";

const App = ()=>(
  < main className="relative ">
       <Nav />
       <section className="xl:padding-l wide:padding-l padding-b">
        <Hero />
       </section>
       <section className="xl:padding-l wide:padding-l padding-b">
        <Ourproducts />
       </section>
       <section className="xl:padding-l wide:padding-l padding-b">
        <Quality />
       </section>
       <section className="padding">
        <Service />
       </section>
       <section className="padding">
        <Newsletter />
       </section>
       <section className="padding bg-black">
        <Footer />
       </section>

  </main>
)

export default App;                                        