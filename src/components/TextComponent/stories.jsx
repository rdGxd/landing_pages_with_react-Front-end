import { TextComponent } from ".";

export default {
  title: "TextComponent",
  componente: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Blanditiis aliquid doloribus ratione ab dolorem perferendis est.
    Ducimus animi, deleniti quibusdam sequi dignissimos quisquam ipsum temporibus nam odit incidunt voluptate nemo.`,
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
