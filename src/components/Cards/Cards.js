import "./Cards.css";

import Card from "./Card/Card";

const Cards = ({ CardsData }) => {
  return (
    <div className="cards">
      {/* TODO: https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js */}
      {CardsData.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
};

export default Cards;
