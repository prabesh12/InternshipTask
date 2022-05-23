import About from "./components/about/About";
import Footer from "./components/reuseable/footer/Footer";
import Header from "./components/reuseable/header/Header";
import "./App.scss"
import Services from "./components/Services/Services";
function App() {
  return (
    <div className="App">
        <Header />
         <About />
         <Services />
        <Footer />
    </div>
  );
}

export default App;
