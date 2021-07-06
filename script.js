var tiles = new Vue({
  el: "#tiles",
  data: {
    title: "Transfers & Withdrawls",
    selected: undefined,
    items: [
      {
        id: 0,
        icon: "https://via.placeholder.com/50",
        text: "Cash",
        description: "Realtime - 3+ days",
      },
      {
        id: 1,
        icon: "https://via.placeholder.com/50",
        text: "Wires",
        description: "Same day+",
      },
      {
        id: 2,
        icon: "https://via.placeholder.com/50",
        text: "Checks",
        description: "3 - 5 days",
      },
    ],
  },
});
