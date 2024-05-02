import './App.css';
import RecipePage from './components/RecipePage';

const recipe = {
  name: 'Simple Omelette Recipe',
  description: 'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
  prepTime: {
    total: 'Approximately 10 minutes',
    preparation: '5 minutes',
    cooking: '5 minutes'
  },
  ingredients: ['2-3 large eggs', 'Salt, to taste', 'Pepper, to taste', '1 tablespoon of butter or oil', 'Optional fillings: cheese, diced vegetables, cooked meats, herbs'],
  instructions: [
    {step: 'Beat the eggs', detailed: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.'},
    {step: 'Heat the pan', detailed: 'Place a non-stick frying pan over medium heat and add butter or oil.'},
    {step: 'Cook the omelette', detailed: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.'},
    {step: 'Add fillings (optional)', detailed: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.'},
    {step: 'Fold and serve', detailed: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.'},
    {step: 'Enjoy', detailed: 'Serve hot, with additional salt and pepper if needed.'},
  ],
  nutrition: {
    calories: 277,
    carbs: 0,
    protein: 20,
    fat: 22
  }
}

function App() {
  return (
    <div className="App">
      <RecipePage name={recipe.name} description={recipe.description} ingredients={recipe.ingredients} instructions={recipe.instructions} prepTime={recipe.prepTime} nutrition={recipe.nutrition} />
    </div>
  );
}

export default App;