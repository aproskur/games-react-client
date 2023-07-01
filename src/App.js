import './App.css';
import scene_1 from './data/scene_cards_topsidebar.json'
import scene_2 from './data/scene_infocard_leftsidebar.json'
import scene_3 from './data/scene_infocard_topsidebar.json'
import scene_4 from './data/scene_cards_leftsidebar.json'
import scene_5 from './data/scene_moves_journal.json'
import { createElement } from 'react';
import CardsContainer from './components/CardsContainer'
import GameScreen from './components/GameScreen'
import Sidebar from './components/Sidebar';
import ScoreElement from './components/ScoreElement';
import Label from './components/Label';
import Card from './components/Card';
import Footer from './components/Footer';
import Button from './components/Button';
import { useState } from 'react';
import { CallbackContext } from './CallbackContext';
import { TestScenesContext } from './TestScenesContext';


const scene_hardcoded = scene_5;

const scene_array = [scene_1, scene_2, scene_3];

function replaceNode(current, node_to_replace) {
  node_to_replace.forEach(function (arr_item) {
    if (current.id === arr_item.id) {
      Object.assign(current, arr_item)
      return
    }
    const children_arr = current.children || [];
    children_arr.forEach(c => {
      replaceNode(c, node_to_replace)
    })
  });
}



function App() {


  const [scene, setScene] = useState(scene_hardcoded)

  //функция, которую передаю в карточку с помощью контекста
  const handleCallback = (childData) => {
    console.log("DATA WAS PASSED TO PARENT COMPONENT WITH CALLBACK")
    console.log(childData)
    const scene_copy = structuredClone(scene)
    replaceNode(scene_copy, childData);
    setScene(scene_copy);
  }



  //Функция рисует компоненты с помощью рекатовской ф-ции createElement.
  function renderComponent(c) {
    console.log("RENDER component C")
    console.log(c);
    const child_comps_arr = c.children || [];
    //const child_comps_arr = Object.values(child_comps);
    const ch = child_comps_arr.map(x => renderComponent(x));
    console.log("RENDER" + c.component)
    console.log(ch)
    if (c.component === "gamescreen") {
      const styles = c.css
      const r = createElement(GameScreen, { style: styles }, ch)
      console.log("GS RET")
      console.log(r)
      return r
    }
    if (c.component === "sidebar") {
      console.log("DRAWING TOPSIDEBAR");
      const styles = c.css;
      return createElement(Sidebar, { style: styles }, ch)
    }
    if (c.component === "score") {
      const styles = c.css
      console.log("children");
      console.log(ch);
      return createElement(ScoreElement, { style: styles, text: c.text, id: c.id }, ch)
    }
    if (c.component === "label") {
      const styles = c.css;
      return createElement(Label, { style: styles, text: c.text }, ch)

    }
    if (c.component === "cardscontainer") {
      const styles = c.css
      return createElement(CardsContainer, { style: styles }, ch)
    }
    if (c.component === "card") {
      const styles = c.css
      return createElement(Card, { style: styles, text: c.text, id: c.id, onclick: c.onclick }, ch)
    }
    if (c.component === "footer") {
      const styles = c.css;
      return createElement(Footer, { style: styles }, ch)
    }
    if (c.component === "btn") {
      const styles = c.css;
      return createElement(Button, { style: styles, id: c.id, onClick: c.onClick, text: c.text }, ch)
    }
    else {
      console.log("eRROR")
      console.log(c.component)
      const styles = c.css
      const htmlTag = c.component
      return createElement(htmlTag, { style: styles }, [ch, c.text])
    }
  }


  return (
    <TestScenesContext.Provider>
      <CallbackContext.Provider value={handleCallback}>
        {renderComponent(scene)}
      </CallbackContext.Provider>
    </TestScenesContext.Provider>
  );
}

export default App;

