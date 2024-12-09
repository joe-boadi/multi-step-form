import { AddOns }  from "../components/AddOnsForm";

import '../App.css'

function AddOnOption() {
  return (
    <section className="slide-in">
      <AddOns
        name="Online service"
        description="Access to multiplayer games"
        plan="1/mo"
      />
      <AddOns
        name="Larger storage"
        description="Extra 1TB of cloud save"
        plan="2/mo"
      />
      <AddOns
        name="Customizable Profile"
        description="Custom theme on your profile"
        plan="2/mo"
      />
    </section>
  );
}

export default AddOnOption;