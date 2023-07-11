import { ref } from "vue";

export default {
  setup() {
    const slide = ref(1);
    const autoplay = ref(true);
    const getSlideContent = () => {
      switch (slide.value) {
        case 1:
          return {
            title: "Metal Gear Solid 3: Snake Eater",
            text: "Set in 1964, 31 years before the events of the original Metal Gear, the story centers on the FOX operative codenamed Naked Snake as he attempts to rescue Russian rocket scientist Nikolai Stepanovich Sokolov, sabotage an experimental superweapon, and assassinate his defected former boss.",
            price: "$39.99"
          };
        case 2:
          return {
            title: "Devil May Cry 5",
            text: "The game takes place five years after Devil May Cry 4 and follows a trio of warriors with demonic powers, the returning Dante, Nero, and a new protagonist named V, as they attempt to stop the Demon King Urizen from destroying the human world.",
            price: "$49.99"
          };
        case 3:
          return {
            title: "Alan Wake II",
            text: "The story follows bestselling thriller novelist Alan Wake, who has been trapped in an alternate dimension for 13 years, as he attempts to escape by writing a horror story involving an FBI agent named Saga Anderson.",
            price: "$29.99"
          };
        default:
          return {
            title: "",
            text: "",
            price: ""
          };
      }
    };

    return {
      slide,
      autoplay,
      getSlideContent,
    };
  },
  data() {
    return {
      navbtns: ["Discover", "Browse", "Wishlist", "Cart"],
      buttons: [
        { icon: 'library_add', label: 'Wishlist' },
        { icon: 'shopping_cart', label: 'Add to cart' },
      ],
      cards: [
        { id: 1,image: 'https://cdn.mos.cms.futurecdn.net/GZKU994Jzrz4T5H4sfBUSW.jpg', title: "Assassin's Creed: Mirage",price: '$29.99', developer: "Ubisoft" },
        { id: 2,image: 'https://hips.hearstapps.com/hmg-prod/images/red-dead-redemption-2-1539704658.jpg?crop=0.502xw:1.00xh;0.498xw,0&resize=1200:*', title: 'Red Dead Redemption 2',price: '$29.99', developer: 'Rockstar Games' },
        { id: 3,image: 'https://cdn.mos.cms.futurecdn.net/iSybeeHJC96izazJfb6PpA.jpg', title: "Grand Theft Auto V",price: '$29.99', developer: "Rockstar Games" },
        { id: 4,image: 'https://redbarrelsgames.com/wp-content/uploads/2020/06/OutlastTrailsPageMobileImage.jpg', title: 'Outlast Trials',price: '$29.99', developer: 'Red Barrels' },
        { id: 5,image: 'https://i.ytimg.com/vi/7DgKu3mV0j0/maxresdefault.jpg', title: 'Elden Ring',price: '$29.99', developer: 'FromSoftware Inc.' },
        
      ],
      freeCards: [
        { id: 1,image: 'https://cdn.mos.cms.futurecdn.net/GZKU994Jzrz4T5H4sfBUSW.jpg', title: "Assassin's Creed: Mirage",price: '$29.99', developer: "Ubisoft" },
        { id: 2,image: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2023/02/re4.jpg?fit=830%2C535&ssl=1', title: 'Resident Evil 4: Remake',price: '$29.99', developer: 'Capcom' },

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
