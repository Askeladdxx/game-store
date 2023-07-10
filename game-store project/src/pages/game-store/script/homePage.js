import { ref } from "vue";

export default {
  setup() {
    const slide = ref(1);
    const autoplay = ref(true);
    const getSlideTitle = () => {
        switch (slide.value) {
          case 1:
            return "Metal Gear Solid: Snake Eater";
          case 2:
            return "Devil May Cry 5";
          case 3:
            return "Alan Wake II";
          default:
            return "";
        }
      };
    const getSlideText = () => {
      switch (slide.value) {
        case 1:
          return "Set in 1964, 31 years before the events of the original Metal Gear, the story centers on the FOX operative codenamed Naked Snake as he attempts to rescue Russian rocket scientist Nikolai Stepanovich Sokolov, sabotage an experimental superweapon, and assassinate his defected former boss.";
        case 2:
          return "The game takes place five years after Devil May Cry 4 and follows a trio of warriors with demonic powers, the returning Dante, Nero, and a new protagonist named V, as they attempt to stop the Demon King Urizen from destroying the human world.";
        case 3:
          return "The story follows bestselling thriller novelist Alan Wake, who has been trapped in an alternate dimension for 13 years, as he attempts to escape by writing a horror story involving an FBI agent named Saga Anderson.";
        default:
          return "";
      }
    };

    return {
      slide,
      autoplay,
      getSlideTitle,
      getSlideText,
    };
  },
  data() {
    return {
      navbtns: ["Discover", "Browse", "Wishlist", "Cart"],
      buttons: [
        { icon: 'library_add', label: 'Wishlist' },
        { icon: 'shopping_cart', label: 'Add to cart' },
      
      ]
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