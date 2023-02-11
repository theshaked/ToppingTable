import "./Register.css";
import TextEntry from "../Common/TextEntry/TextEntry";

const Register = () => {
  return (
    <div className="register">
      <TextEntry charlimit={10} />
    </div>
  );
};

export default Register;
