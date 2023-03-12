import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")}>
      Main Page!
    </div>
  )
}
