import Cards from "../Cards/Cards";
import "./PizzaSuggestion.css";

const pizzaData = [
  {
    name: "Boi",
    lastname: "LastBoi",
    amount: 3,
    musthave: "mushroom",
    optional: "Extra Cheese",
  },
  {
    name: "Shaked",
    lastname: "Sibony",
    amount: 3,
    musthave: "Extra Cheese",
    optional: "Olives",
  },
  {
    name: "Einav",
    lastname: "Schved",
    amount: 2,
    musthave: "mushroom",
    optional: "Olives",
  },
  {
    name: "Piña",
    lastname: "Colada",
    amount: 4,
    musthave: "mushroom",
    optional: "Olives",
  },
  { name: "Bob", lastname: "Bob", amount: 3, musthave: "Olives" },
  { name: "Hello", lastname: "World!!!!!!!!!", amount: 3, musthave: "Empty" },
];

const groupAndSum = (pizzaData) => {
  const result = {};
  for (const pizza of pizzaData) {
    if (pizza.musthave in result) {
      result[pizza.musthave].amount += pizza.amount;
    } else {
      result[pizza.musthave] = { amount: pizza.amount };
    }
  }
  return result;
};

const result = groupAndSum(pizzaData);
const items = Object.entries(result).map(([musthave, { amount }]) => (
  <h1 key={musthave}>
    Amount of {musthave}: {amount}
  </h1>
));

const PizzaSuggestion = () => {
  return (
    <div className="pizza-suggestion">
      <Cards CardsData={pizzaData} />
      <h1>Order this:</h1>
      {items}
    </div>
  );
};

export default PizzaSuggestion;
