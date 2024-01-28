import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function BackButton() {
  const Navigate = useNavigate();
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        Navigate(-1);
      }}
      type="back"
    >
      &larr; Back
    </Button>
  );
}
