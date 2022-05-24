import About from "./components/about/About";
import Footer from "./components/reuseable/footer/Footer";
import Header from "./components/reuseable/header/Header";
import "./App.scss"
import Services from "./components/Services/Services";
import RecentProject from "./components/recent_project/RecentProject";
import Customer from "./components/customer/Customer";
import Testimonials from "./components/testimonials/Testimonials";
import Feature from "./components/feature/Feature";
import Member from "./components/team_member/Member";
function App() {
  return (
    <div className="App">
        <Header />
         <About />
         <Services />
         <RecentProject />
         <Customer />
         <Testimonials />
         <Feature />
         <Member />
        <Footer />
    </div>
  );
}

export default App;
