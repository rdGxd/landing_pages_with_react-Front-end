import { useEffect, useState } from "react";
import { mapData } from "../../api/map-data.js";
import { GridContent } from "../../components/GridContent";
import { GridImage } from "../../components/GridImage";
import { GridText } from "../../components/GridText";
import { GridTwoColum } from "../../components/GridTwoColum";
import { Base } from "../Base/index.jsx";
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

  if (response === undefined) {
    return <PageNotFound />;
  }

  if (response && !response.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = response;
  const { links, text, link, srcImg } = menu;

  return (
    <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImg }}>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === "section.section-two-columns") return <GridTwoColum {...section} key={key} />;

        if (component === "section.section-content") return <GridContent {...section} key={key} />;

        if (component === "section.section-grid-text") return <GridText {...section} key={key} />;

        if (component === "section.section-grid-image") return <GridImage {...section} key={key} />;
      })}
    </Base>
  );
};

export default Home;
