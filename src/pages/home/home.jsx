import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/home")}>
      Hello World!
    </div>
  )
}
