import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { mapData } from "../../api/map-data.js";
import { GridContent } from "../../components/GridContent";
import { GridImage } from "../../components/GridImage";
import { GridText } from "../../components/GridText";
import { GridTwoColumns } from "../../components/GridTwoColumns";
import { Base } from "../Base/index.jsx";
import { Loading } from "../Loading/index.jsx";
import { PageNotFound } from "../PageNotFound/index.jsx";

const Home = () => {
  const [response, setResponse] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^A-Za-z0-9]/gi, "");
    const slug = pathname ? pathname : `${import.meta.env.VITE_defaultSlug}`;

    const load = async () => {
      try {
        const data = await fetch(`${import.meta.env.VITE_BASE_URL}${slug}`);
        const json = await data.json();
        const pageData = mapData(json.data);
        setResponse(pageData[0]);
      } catch (error) {
        setResponse(undefined);
      }
    };

    load();
  }, [location.pathname]);

  useEffect(() => {
    if (response === undefined) {
      document.title = `Página não encontrada | ${import.meta.env.VITE_siteName}`;
    }

    if (response && !response.slug) {
      document.title = `Carregando... |  ${import.meta.env.VITE_siteName} `;
    }

    if (response && response.title) {
      document.title = `${response.title} |  ${import.meta.env.VITE_siteName}`;
    }
  }, [response]);

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

        if (component === "section.section-two-columns") return <GridTwoColumns {...section} key={key} />;

        if (component === "section.section-content") return <GridContent {...section} key={key} />;

        if (component === "section.section-grid-text") return <GridText {...section} key={key} />;

        if (component === "section.section-grid-image") return <GridImage {...section} key={key} />;
      })}
    </Base>
  );
};

export default Home;
