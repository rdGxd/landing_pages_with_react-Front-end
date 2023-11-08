import { SectionBackground } from ".";

export default {
  title: "SectionBackground",
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias nihil iure repellat nam et porro
          soluta quia, aliquid maiores magnam, dolore mollitia voluptatum modi ad non accusantium! Quia, aperiam!
        </p>
      </div>
    ),
    background: false,
  },
  argTypes: {
    children: { type: "" },
    background: { type: "boolean" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
