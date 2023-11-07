import { Dummy } from ".";
export default {
  title: "Dummy",
  component: Dummy,
  args: {
    children: "Dummy",
  },
  argsTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Dummy {...args}>
        <p>O texto</p>
      </Dummy>
    </div>
  );
};
