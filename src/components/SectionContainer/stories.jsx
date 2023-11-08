import { SectionContainer } from ".";

export default {
  title: "SectionContainer",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias nihil iure repellat nam et porro
          soluta quia, aliquid maiores magnam, dolore mollitia voluptatum modi ad non accusantium! Quia, aperiam!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: "" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
