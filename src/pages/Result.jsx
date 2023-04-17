import Header from "../components/layouts/Header";
import Footer from '../components/layouts/Footer';

function Result(){
    return <div>
        <Header />
      <div className="bg-rose-300 w-full h-[600px] flex items-center justify-center font-bold text-[22px]">
        <h1>You have not given any Quiz</h1>
      </div>
      <Footer />
    </div>
}

export default Result