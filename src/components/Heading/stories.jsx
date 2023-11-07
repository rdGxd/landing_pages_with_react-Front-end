import { Heading } from ".";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "O texto está escuro",
    colorDark: true,
    as: "h1",
    size: "big",
    uppercase: false,
  },
  argTypes: {
    children: { type: "string" },
    colorDark: { type: "boolean" },
    as: { options: ["h1", "h2", "h3", "h4", "h5", "h6"], control: { type: "select" } },
    size: { options: ["small", "medium", "big", "huge"], control: { type: "radio" } },
    uppercase: { type: "boolean" },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: "light",
  },
};

Dark.args = {
  children: "O texto está claro",
  colorDark: false,
};
