import { Helmet } from "react-helmet-async";
import Phones from "../../components/Home/Phones";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Phone World </title>
      </Helmet>

      {/* Rooms section */}
      <Phones />
    </div>
  );
};

export default Home;
