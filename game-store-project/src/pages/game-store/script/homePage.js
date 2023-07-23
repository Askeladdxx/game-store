import { ref } from "vue";

export default {
  data() {
    return {
      navbtns: ["Discover", "Browse", "Wishlist", "Cart"],
    };
  },
  methods: {
    handleNavButtonClick(button) {
      console.log("Button clicked:", button);
      if (button === "Discover") {
        this.$router.push("/");
      } else if (button === "Browse") {
        this.$router.push("/browse");
      } else if (button === "Wishlist") {
        this.$router.push("/wishlist");
      } else if (button === "Cart") {
        this.$router.push("/cart");
      }
    },
  },
};
