import "./Register.css";
import TextEntry from "../Common/TextEntry/TextEntry";

const Register = () => {
  return (
    <div className="register">
      <TextEntry
        charlimit={10}
        onTextChange={(value) => console.log(value)}
        patternType="email"
      />
    </div>
  );
};

export default Register;
