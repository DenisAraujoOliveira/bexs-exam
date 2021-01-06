import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import App from "./App";

export default {
    title: "Example/App",
    component: App,
} as Meta;

export const TemplateApp: Story = () => <App />;

// export const TemplateControl = Template.bind({});
// TemplateControl.args = {
//   controls: {},
// };