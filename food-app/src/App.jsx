import { useState } from 'react'
import ProductCard from './components/ProductCard'
import { FiStar, FiClock, FiTruck } from 'react-icons/fi'
import './App.css'
import burger from './assets/burger.jpg'
import bbqBurger from './assets/bbqBurger.jpg'
import chickenBurger from './assets/chickenBurger.jpg'
import margherita from './assets/margherita.jpg'
import pepperoni from './assets/pepperoni.jpg'
import alfredo from './assets/alfredo.jpg'
import bolognese from './assets/bolognese.jpg'
import cake from './assets/cake.jpg'
import tiramisu from './assets/tiramisu.jpg'
import lemonade from './assets/lemonade.jpg'
import Navbar from './components/Navbar'
const products = [
  { id: 1, name: "Classic Burger", category: "Burgers", description: "Un burger juteux avec du fromage, salade et sauce spéciale", price: 8.99, image: burger },
  { id: 2, name: "BBQ Burger", category: "Burgers", description: "Bœuf grillé, oignons croustillants et sauce barbecue", price: 9.99, image: bbqBurger },
  { id: 3, name: "Chicken Burger", category: "Burgers", description: "Poulet croustillant avec sauce crémeuse", price: 7.99, image: chickenBurger },
  { id: 4, name: "Margherita Pizza", category: "Pizza", description: "Sauce tomate, mozzarella et basilic frais", price: 10.99, image: margherita },
  { id: 5, name: "Pepperoni Pizza", category: "Pizza", description: "Pepperoni, mozzarella et sauce tomate", price: 12.99, image: pepperoni },
  { id: 6, name: "Pasta Alfredo", category: "Pasta", description: "Pâtes crémeuses avec parmesan et herbes", price: 9.99, image: alfredo },
  { id: 7, name: "Spaghetti Bolognese", category: "Pasta", description: "Spaghetti avec sauce bolognaise maison", price: 10.49, image: bolognese },
  { id: 8, name: "Chocolate Cake", category: "Desserts", description: "Gâteau au chocolat fondant et délicieux", price: 5.99, image: cake },
  { id: 9, name: "Tiramisu", category: "Desserts", description: "Dessert italien au café et mascarpone", price: 6.49, image: tiramisu },
  { id: 10, name: "Lemonade", category: "Drinks", description: "Limonade fraîche et citronnée", price: 3.49, image: lemonade },
];
function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");
  const categories = ["All", "Burgers", "Pizza", "Pasta", "Desserts", "Drinks"];


  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className={`app ${theme}`}>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        search={search}
        setSearch={setSearch}
      />

      <div className="layout">
        {/* Sidebar des catégories */}
        <aside className="sidebar">
          <h3>Catégories</h3>
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "side-btn active" : "side-btn"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </aside>

        
        <main className="content">
          <section className="hero">
  <div className="hero-text">
    <span className="hero-tag"><FiStar /> Le goût avant tout</span>
    <h2>Faim ? <em>On s'occupe</em> du reste.</h2>
    <p>Burgers, pizzas, pâtes et desserts préparés avec soin, livrés chauds.</p>
    <div className="hero-chips">
      <span><FiClock /> 30 min</span>
      <span><FiTruck /> Livraison</span>
      <span><FiStar /> 4.9</span>
    </div>
    <a href="#menu" className="hero-btn">Voir le menu</a>
  </div>

  <div className="hero-visual">
    <div className="ring"></div>
    <img className="hero-main" src={burger} alt="Burger" />
    <img className="float float-1" src={margherita} alt="Pizza" />
    <img className="float float-2" src={cake} alt="Dessert" />
  </div>
</section>

          <div className="section-header">
            <h2>Nos produits</h2>
            <span>{filteredProducts.length} produits</span>
          </div>

          {filteredProducts.length === 0 ? (
            <p className="empty">Aucun plat trouvé.</p>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
export default App
