import { Footer } from ".";

export default {
  title: "Footer",
  component: Footer,
  args: {
    html: "<p><a href='https://github.com/rdGxd'>Feito por Rodrigo Silva</a></p>",
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
