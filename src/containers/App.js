import React, { useState } from "react";
import Map from "../components/Sections/Map";
import { createGlobalStyle } from "styled-components";
import { Layout } from "../components/Layout";
import List from "../components/Sections/List";
import { SwitchViewButton } from "../components/UI/SwitchViewButton";
const BaseStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
  font-family: sans-serif;
  font-weight: 300;
  @media(max-width: 900px){
    font-size: 50%;
  }
}
body{
  color: #555;
}
::selection {
    color: #fff;
    background: #1e8896;
}
::-moz-selection { /* Code for Firefox */
  color: #fff;
  background: #1e8896;
}
`;

function App() {
  const [view, setView] = useState("map");
  return (
    <div>
      <BaseStyles></BaseStyles>

      <Layout></Layout>
      <SwitchViewButton click={setView} view={view}></SwitchViewButton>
      {view === "map" ? <Map></Map> : <List></List>}
    </div>
  );
}

export default App;
