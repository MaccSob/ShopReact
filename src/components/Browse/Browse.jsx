
import './Browse.css';

export default function Browse() {

    const [products, setProducts] = useState([]);

    async function getProducts() {
        const response = await fetch('https://dummyjson.com/products') 
        const data = await response.json() 
        setProducts(data.products) // set the products in the state to the products
      }
      useEffect(() => {
        getProducts()
      }, [])
    return (
        <>
            <div className="grid">
                <div className="card">
                    <div className="img-wrap-square">
                <img src="/src/assets/grape.jpg" alt=""/>
                </div>
                <button className="button"><span>Add to cart </span></button>
                <input type="number" />
                    <h4>Grape Juice</h4>
                    <p>Freshly made juice from delicious moldovian grapes!</p>
                    </div>
                    <div className="card">
                    <div className="img-wrap-square">
                <img src="/src/assets/pineapple.jpg" alt="" />
                </div>
                <button className="button"><span>Add to cart </span></button>
                <input type="number" />
                    <h4>Pineapple Juice</h4>
                    <p>A men&apos;s favourite, for some reason.</p>
                    </div>
                    
                    <div className="card">
                    <div className="img-wrap-square">
                <img src="/src/assets/dragonfruit.jpg" alt="" />
                </div>
                <button className="button"><span>Add to cart </span></button>
                <input type="number" />
                    <h4>Dragonfruit Juice</h4>
                    <p>Dovakhiin&apos;s favourite.</p>
                    </div>
                    <div className="card">
                    <div className="img-wrap-square">
                <img src="/src/assets/lemon.jpg" alt="" />
                </div>
                <button className="button"><span>Add to cart </span></button>
                <input type="number" />
                    <h4>Lemon Juice</h4>
                    <p>Plenty of vitamin c right there!</p>
                    </div>
                    <div className="card">
                    <div className="img-wrap-square">
                <img src="/src/assets/orange.jpg" alt="" />
                </div>
                <button className="button"><span>Add to cart </span></button>
                <input type="number" />
                    <h4>Orange Juice</h4>
                    <p>Don&apos;t drink after brushing your teeth!</p>
                    </div>
                    <div className="card">
                    <div className="img-wrap-square">
                <img src="/src/assets/carrot.jpg" alt="" />
                </div>
                <button className="button"><span>Add to cart </span></button>
                <input type="number" />
                    <h4>Carrot Juice</h4>
                    <p>What&apos;s up doc?</p>
                    </div>
                    <div className="card">
                    <div className="img-wrap-square">
                <img src="/src/assets/banana.jpg" alt="" />
                </div>
                <button className="button"><span>Add to cart </span></button>
                <input type="number" />
                    <h4>Banana Juice</h4>
                    <p>Great source of potassium!</p>
                    </div>
                    <div className="card">
                    <div className="img-wrap-square">
                <img src="/src/assets/greenapple.jpg" alt="" />
                </div>
                <button className="button"><span>Add to cart </span></button>
                <input type="number" />
                    <h4>Ripe Green Apple Juice</h4>
                    <p>An apple a day keeps the doctor away, but what about a dozen of them?</p>
                    </div>
                    <div className="card">
                    <div className="img-wrap-square">
                <img src="/src/assets/melon.jpg" alt="" />
                </div>
                <button className="button"><span>Add to cart </span></button>
                <input type="number" />
                    <h4>Watermelon Juice</h4>
                    <p>Wow is it sweet! No, really it is.</p>
                    </div>
            </div>
        </>
    )
}
