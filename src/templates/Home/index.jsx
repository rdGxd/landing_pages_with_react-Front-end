import { useEffect, useState } from "react";
import { mapData } from "../../api/map-data.js";
import { Base } from "../Base/index.jsx";
import { mock } from "../Base/mock.jsx";
import { Loading } from "../Loading/index.jsx";
import { PageNotFound } from "../PageNotFound/index.jsx";

const Home = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          "http://localhost:1337/api/pages/?filters=[slug]=landing-page&populate[sections][populate]=*",
        );
        const json = await data.json();
        const pageData = mapData(json.data);

        setResponse(pageData[0]);
      } catch (error) {
        setResponse(undefined);
      }
    };

    load();
  }, []);

  console.log(response);
  if (response === undefined) {
    return <PageNotFound />;
  }

  if (response && !response.slug) {
    return <Loading />;
  }

  return <Base {...mock} />;
};

export default Home;
