import Header from "./components/UI/Header/Header";
import Meal from "./components/Meals/Meal/Meal";
import MealList from "./components/Meals/MealList/MealList";

function App() {
    return (
        <div className="App">
            <Header/>
            <MealList/>
            {/*<Meal/>*/}
        </div>
    );
}

export default App;
