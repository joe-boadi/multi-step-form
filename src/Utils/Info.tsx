import Input from "../Helpers/Input";
import "../App.css";

function Info() {
 
  return (
    <div className="slide-in">
      <Input
        name="Name"
        onChange={() => {
        
        }}
        placeholder="Kwadjo Boadi-Mantey"
        type="text"
        value={''}
      />

      <Input
        name="Email Address"
        onChange={() => {
         
        }}
        placeholder="kwadjo.boadi-mantey@amalitech.com"
        type="email"
        value={''}
      />
      <Input
        name="Phone Number"
        onChange={() => {
         
        }}
        placeholder="+233204195073"
        type="text"
        value={''}
      />
    </div>
  );
}

export default Info;