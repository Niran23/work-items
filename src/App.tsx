import { useState } from "react";
import Login from "./components/Login";
import JustifyBox from "./components/JustifyBox";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-8">
        Justify Flex Examples
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <JustifyBox
          name="Start Top"
          justifyClass="justify-start"
          itemsClass="items-start"
        />

        <JustifyBox
          name="Start Center"
          justifyClass="justify-start"
          itemsClass="items-center"
        />

        <JustifyBox
          name="Start Bottom"
          justifyClass="justify-start"
          itemsClass="items-end"
        />

        <JustifyBox
          name="Center Top"
          justifyClass="justify-center"
          itemsClass="items-start"
        />

        <JustifyBox
          name="Center Center"
          justifyClass="justify-center"
          itemsClass="items-center"
        />

        <JustifyBox
          name="Center Bottom"
          justifyClass="justify-center"
          itemsClass="items-end"
        />

        <JustifyBox
          name="End Top"
          justifyClass="justify-end"
          itemsClass="items-start"
        />

        <JustifyBox
          name="End Center"
          justifyClass="justify-end"
          itemsClass="items-center"
        />

        <JustifyBox
          name="End Bottom"
          justifyClass="justify-end"
          itemsClass="items-end"
        />

        <JustifyBox
          name="Space Between"
          justifyClass="justify-between"
          itemsClass="items-center"
        />

        <JustifyBox
          name="Space Around"
          justifyClass="justify-around"
          itemsClass="items-center"
        />

        <JustifyBox
          name="Space Evenly"
          justifyClass="justify-evenly"
          itemsClass="items-center"
        />

      </div>

    </div>
  );
}

export default App;