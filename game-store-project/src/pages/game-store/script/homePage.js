import { ref } from "vue";

export default {
  data() {
    return {
      navbuttons: [
        { label: "Home", route: "/" },
        { label: "Discover", route: "/discover" },
        { label: "Browse", route: "/browser" },
        { label: "About bot", route: "/about" },
      ],
    };
  },
};
