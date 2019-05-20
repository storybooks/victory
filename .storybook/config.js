import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { DocsPage } from "@storybook/addon-docs/blocks";
import { getPropDefs } from "@storybook/addon-docs/react";

addParameters({
  options: {
    name: "Victory",
    url: "https://formidable.com/open-source/victory",
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: false,
    sortStoriesByKind: true,
    hierarchySeparator: /\./,
    docs: {
      inlineStories: true,
      getPropDefs
    }
  },
  docs: DocsPage
});

const storyWrapper = (story) => {
  return <div style={{ maxWidth: "80%" }}>{story()}</div>;
};

addDecorator(storyWrapper);

const loadStories = () => {
  require("../stories/victory-area");
  require("../stories/victory-axis");
  require("../stories/victory-bar");
  require("../stories/victory-box-plot");
  require("../stories/victory-candlestick");
  require("../stories/victory-chart");
  require("../stories/victory-errorbar");
  require("../stories/victory-line");
  require("../stories/victory-polar-axis");
  require("../stories/victory-scatter");
  require("../stories/containers-and-addons");
  require("../stories/victory-pie");
};

configure(loadStories, module);
