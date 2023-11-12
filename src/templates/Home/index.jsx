import { useEffect, useState } from "react";
import { mapData } from "../../api/map-data.js";
import { Base } from "../Base/index.jsx";
import { mock } from "../Base/mock.jsx";

const Home = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        "http://localhost:1337/api/pages/?filters=[slug]=landing-page&populate[sections][populate]=*",
      );
      const json = await data.json();
      const pageData = mapData(json.data);
      setResponse(pageData[0]);
    };

    load();
  }, []);

  console.log(response);
  if (response === undefined) {
    return <h1>Página não encontrada</h1>;
  }

  if (response && !response.slug) {
    return <h1>Página não encontrada</h1>;
  }

  return <Base {...mock} />;
};

export default Home;
