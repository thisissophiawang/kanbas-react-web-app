///Users/sophiawang/2024/summer/webdev/kanbas-react-web-app/src/Labs/Lab4/index.tsx
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
      }
      
    return (
        <div id="wd-a4">
            <h2>Lab 4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello}/>
        </div>
    );
}
