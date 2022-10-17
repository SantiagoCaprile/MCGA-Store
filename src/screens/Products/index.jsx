import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveData } from "../../store/products/actions";


// mock de productos
const products = [
    {
        id: 1,
        name: "Computadora",
        price: 100000,
    },
    {
        id: 2,
        name: "Mouse",
        price: 2000,
    },
    {
        id: 3,
        name: "Teclado",
        price: 3000,
    }
];

const Products = () => {
    const productsSelector = useSelector((state) => state.products);

    console.log("P selector: ", productsSelector.data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveData(products));
    }, []);

    return <div className="container card">
        <h1 className="card-header text-center">Productos</h1>
        <div className="card-body">
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody>
        {
            productsSelector.data.map((product) => {
                return <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            })
        }
            </tbody>
        </table>
        <Link to="/" className="btn btn-secondary">Volver a LogIn</Link>
        </div>
    </div>;
};

export default Products;