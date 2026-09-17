function AddRecipe() {
  return (
    <div>
      <header>
        <h1>Hiruy Recipe Platform</h1>
        <nav>
          <a href="/recipe">Recipe</a>
        </nav>
      </header>

      <main>
        <section>
          <form>
            <div>
              <label htmlhtmlFor="Recipe Name">Recipe Name</label>
              <input type="text" id="recipe-name" name="recipe" />
            </div>
            <br />
            <div>
              <label htmlhtmlFor="breakfast-input">breakfast</label>
              <input type="text" id="breakfast-input" />
            </div>
            <br />
            <div>
              <label htmlhtmlFor="lunch-input">lunch</label>
              <input type="text" id="lunch-input" />
            </div>
            <br />
            <div>
              <label htmlhtmlFor="dinner-input">dinner</label>
              <input type="text" id="dinner-input" />
            </div>
            <br />
            <div>
              <label htmlhtmlFor="dessert-input">dessert</label>
              <input type="text" id="dessert-input" />
            </div>
            <br />
            <div>
              <label htmlFor="snack-input">snack</label>
              <input type="text" id="snack" />
            </div>
            <br />
            <div>
              <label htmlFor="preparation step">preparation</label>
              <input type="text" />
            </div>
            <br />
            <div>
              <label htmlFor="servings">servings</label>
              <input type="number" />
            </div>
            <br />
            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </section>
      </main>

      <hr />
      <footer>Hiruy Recipe Platform, 2026</footer>
    </div>
  );
}

export default AddRecipe;
