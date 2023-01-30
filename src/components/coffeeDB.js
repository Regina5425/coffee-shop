const coffeeDB = [
  {
    id: 1,
    title: "AROMATICO ROMMA Smooth Dark Roast",
    country: "Brazil",
    description:
      "A smooth medium/dark roast with dark, mellow, sharp and nut-like notes. This blend is 3/5 strength. Look forward to the mornings with our smooth, aromatic blend. A sophisticated, full-bodied coffee with a hint of hazelnut that’s perfect for drinking at any time of day. This blend has a long lasting aftertaste and will leave all you home baristas wanting more. Also available in Ground and Beans (standard bag size).",
    image: "https://images.unsplash.com/photo-1561986810-4f3ba2f46ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		price: "6.99$",
  },
  {
    id: 2,
    title: "AROMATICO VENEZZIA Blonde Light Roast",
    country: "Kenya",
    description:
      "This blend has a fragrant aroma, an intense crema and delightful tones of honey. It is a blonde roast coffee with sweet berry-like taste. Crafted with coffee from the Highlands of Vietnam, India and tropical Ethiopia. The beauty of Venice and the sweets of an Italian 'Pasticcerias' were the inspiration behind this slow hand roasted coffee.",
    image: "https://images.unsplash.com/photo-1422207109431-97544339f995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "7.99$",
  },
  {
    id: 3,
    title: "AROMATICO NEAPOLI Rich Dark Roast",
    country: "Columbia",
    description:
      "This full-bodied coffee has a richly intense toasted flavour. It has a long lasting aftertaste and releases notes of malt and dark chocolate. A rich blend of coffee from the Brazilian coast of Santos, finest Kaapi Royale of India and from the mountains of Central Africa. Imagine sitting by the Neapolitan seaside sipping this coffee under the Italian sunshine.",
    image: "https://images.unsplash.com/photo-1611502695212-1a5cdffa46e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "12.99$",
  },
  {
    id: 4,
    title: "AROMATICO FIRENZIO Swiss Water DECAF",
    country: "Columbia",
    description:
      "The well-rounded aroma of this decaf offers a caffeine free experience. Crafted with decaf arabica from the rainforest valleys of Honduras and Central America, and with beans grown in the altitudes of Vietnam. It will take you to a terrazza overlooking the skyline of Florence, as the sun sets behind its historical rooftops and chapels.",
    image: "https://images.unsplash.com/photo-1634250533599-f8a70960073c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "6.59$",
  },
  {
    id: 5,
    title: "AROMATICO GARDANO Intense Dark Roast",
    country: "Brazil",
    description:
      "With its original bold flavours, in this incredible blend we have incorporated the strength of our passion for coffee, as well as our gratitude to hard working communities of coffee growers all around the world. An intense coffee crafted with superior arabica grown in the altitudes of Peru, blended with coffee beans from Brazil and a light spicy touch from robusta harvested in Cameroon.",
    image: "https://images.unsplash.com/photo-1587985782610-f114593ea92f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: "11.99$",
  },
  {
    id: 6,
    title: "AROMATICO VENEZZIA Blonde Light Roast",
    country: "Kenya",
    description:
      "This blend has a fragrant aroma, an intense crema and delightful tones of honey. It is a blonde roast coffee with sweet berry-like taste. Crafted with coffee from the Highlands of Vietnam, India and tropical Ethiopia. The beauty of Venice and the sweets of an Italian 'Pasticcerias' were the inspiration behind this slow hand roasted coffee.",
    image: "https://images.unsplash.com/photo-1616074569487-d129daddd3a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
    price: "10.99$",
  },
  {
    id: 7,
    title: "AROMATICO ROMMA Smooth Medium Roast",
    country: "Columbia",
    description:
      "A smooth medium/dark roast with dark, mellow, sharp and nut-like notes. This blend is 3/5 strength. Look forward to the mornings with our smooth, aromatic blend. A sophisticated, full-bodied coffee with a hint of hazelnut that’s perfect for drinking at any time of day. This blend has a long lasting aftertaste and will leave all you home baristas wanting more. Also available in Ground and Beans (standard bag size).",
    image: "https://images.unsplash.com/photo-1643881578966-1d6ea6d20de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    price: "6.99$",
  },
  {
    id: 8,
    title: "AROMATICO FIRENZIO Swiss Water DECAF",
    country: "Kenya",
    description:
      "The well-rounded aroma of this decaf offers a caffeine free experience. Crafted with decaf arabica from the rainforest valleys of Honduras and Central America, and with beans grown in the altitudes of Vietnam. It will take you to a terrazza overlooking the skyline of Florence, as the sun sets behind its historical rooftops and chapels.",
    image: "https://images.unsplash.com/photo-1634250532092-8af3e6dc70ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "7.59$",
  },
  {
    id: 9,
    title: "AROMATICO NEAPOLI Rich Dark Roast",
    country: "Brazil",
    description:
      "This full-bodied coffee has a richly intense toasted flavour. It has a long lasting aftertaste and releases notes of malt and dark chocolate. A rich blend of coffee from the Brazilian coast of Santos, finest Kaapi Royale of India and from the mountains of Central Africa. Imagine sitting by the Neapolitan seaside sipping this coffee under the Italian sunshine.",
    image: "https://images.unsplash.com/photo-1596253420615-f54837f5141f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "13.99$",
  },
  {
    id: 10,
    title: "AROMATICO ROMMA Smooth Dark Roast",
    country: "Kenya",
    description:
      "A smooth medium/dark roast with dark, mellow, sharp and nut-like notes. This blend is 3/5 strength. Look forward to the mornings with our smooth, aromatic blend. A sophisticated, full-bodied coffee with a hint of hazelnut that’s perfect for drinking at any time of day. This blend has a long lasting aftertaste and will leave all you home baristas wanting more. Also available in Ground and Beans (standard bag size).",
			image: "https://images.unsplash.com/photo-1625021656992-ee3b23b80c72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    price: "14.99$",
  },
  {
    id: 11,
    title: "AROMATICO GARDANO Intense Dark Roast",
    country: "Brazil",
    description:
      "With its original bold flavours, in this incredible blend we have incorporated the strength of our passion for coffee, as well as our gratitude to hard working communities of coffee growers all around the world. An intense coffee crafted with superior arabica grown in the altitudes of Peru, blended with coffee beans from Brazil and a light spicy touch from robusta harvested in Cameroon.",
    image: "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    price: "9.89$",
  },
];

export default coffeeDB;
