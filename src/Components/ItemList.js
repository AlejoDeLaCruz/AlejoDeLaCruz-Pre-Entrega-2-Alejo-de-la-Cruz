import { useEffect, useState } from "react";
import ItemDetailContainer  from "./ItemDetailContainer";
import {Link} from "react-router-dom"
import ibanez from "./img/ibanez.jpg"
import Item from "./Item"

const ItemList = ({items}) => {

    return (
        <section>
        {items.map((item) => {
            return (
                <Item key={item.id} item={item}/>
            )
        })}
        </section>
    )
       
    
    
}

export default ItemList

{/* <h1 className="titulo">¡Bienvenido, aquí veras nuestros productos!</h1>
        <div className="card">
            <div className="card-body">
                <img className="imagen"src={ibanez}/>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/productos/guitarras/1" className="btn btn-primary">Detalles </Link>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
            <img className="imagen"src={ibanez}/>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/productos/guitarras/2" className="btn btn-primary">Detalles</Link> 
            </div>
        </div>
        <div className="card">
            <div className="card-body">
            <img className="imagen"src={ibanez}/>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/productos/:guitarras/:3" className="btn btn-primary">Detalles</Link> 
            </div>
        </div>
        <div className="card">
            <div className="card-body">
            <img className="imagen"src={ibanez}/>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/productos/:guitarras/:4" className="btn btn-primary">Detalles</Link> 
            </div>
        </div>
        <div className="card">
            <div className="card-body">
            <img className="imagen"src={ibanez}/>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/productos/:guitarras/:5" className="btn btn-primary">Detalles</Link> 
            </div>
        </div>
        <div className="card">
            <div className="card-body">
            <img className="imagen"src={ibanez}/>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/productos/:guitarras/:6" className="btn btn-primary">Detalles</Link> 
            </div>
        </div>
        <div className="card">
            <div className="card-body">
            <img className="imagen"src={ibanez}/>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/productos/:guitarras/:7" className="btn btn-primary">Detalles</Link> 
            </div>
        </div>
        <div className="card">
            <div className="card-body">
            <img className="imagen"src={ibanez}/>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/productos/:guitarras/:8" className="btn btn-primary">Detalles</Link> 
            </div>
        </div>
        <div className="card">
            <div className="card-body">
            <img className="imagen"src={ibanez}/>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/productos/:guitarras/:9" className="btn btn-primary">Detalles</Link> 
            </div>
        </div>
        <div className="card">
            <div className="card-body">
            <img className="imagen"src={ibanez}/>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/productos/:guitarras/:10" className="btn btn-primary">Detalles</Link> 
            </div>
        </div>
*/ }