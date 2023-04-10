import { useSnapshot } from "valtio";
import state from "../store";

const CustomButton = ({ type, title, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button
      className={`px-2 py-2 flex-1 rounded-md `}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
