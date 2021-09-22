import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServicesDetials from "./pages/ServicesDetials";

function Router() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/contact/:id" component={Contact} />
      <Route exact path="/services" component={Services}/>
      <Route path="/servicesDetails" component={ServicesDetials}/>
    </BrowserRouter>
  );
}

export default Router;