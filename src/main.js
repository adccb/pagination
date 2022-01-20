import { createApp } from "vue";

import Oruga from "./Oruga.vue";
import Naive from "./Naive.vue";
import Element from "./Element.vue";

import naive from "naive-ui";
import oruga from "@oruga-ui/oruga-next";
import element from "element-plus";

// custom css
import "./assets/common.css";
import "./assets/oruga.css";
import "./assets/naive.css";
import "./assets/element.css";

// inbuilt css for libraries
import "@oruga-ui/oruga-next/dist/oruga.css";
import "element-plus/dist/index.css";

createApp(Oruga).use(oruga).mount("#oruga");
createApp(Naive).use(naive).mount("#naive");
createApp(Element).use(element).mount("#element");
