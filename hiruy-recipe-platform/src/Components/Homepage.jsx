import { Link } from "react-router-dom";
import "../styles/Home.css";

function Homepage() {
  return (
    <div>
      <header>
        <h1>Hiruy Recipe Platform</h1>
        <nav>
          <Link to="/recipe"></Link>
        </nav>
      </header>

      <main className="recipe-grid">
        <p>
          I'm introducing the platform of shows you how I would prepare my
          favorite foods
        </p>
        <article>
          <section>
            <ul>
              <li>
                Vegetable soup{""}
                <Link to="/recipe">Recipe</Link>
                <img
                  src="https://sugarspunrun.com/wp-content/uploads/2024/12/Vegetable-soup-recipe-10-of-10-675x1013.jpg"
                  alt="Vegetable soup"
                />
              </li>
              <li>
                Grilled Chicken Sandwich{""}
                <Link to="/recipe">Recipe</Link>
                <img
                  src="https://somethingaboutsandwiches.com/wp-content/uploads/2021/04/grilled-chicken-sandwich.jpg"
                  alt="Grilled chicken sandwich"
                />
              </li>
              <li>
                Doro Wat{""}
                <Link to="/recipe">Recipe</Link>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tomWq7RDiWv6HbVzxf3vPLWdKFhP9H2a7yQ6LUDJYQ&s=10"
                  alt="Doro wot"
                />
              </li>
            </ul>
          </section>
        </article>
      </main>
      <footer>Hiruy Recipe Platform, 2026</footer>
    </div>
  );
}

export default Homepage;

// import { Link } from "react-router-dom";
// import "../styles/Home.css";

// function Homepage() {
//   return (
//     <div>
//       <h1>Hiruy Recipe Platform</h1>

//       <p>Welcome to my recipe platform.</p>

//       <Link to="/recipe">Go to Recipe</Link>
//     </div>
//   );
// }
