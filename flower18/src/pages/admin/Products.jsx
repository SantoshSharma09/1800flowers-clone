import AddProducts from "./AddProducts";
import { addProducts, getProducts } from "./api";

const { useState, useEffect } = require("react")

const Products=()=>{
    const [data,setData]=useState([])

    const handleGetPro=()=>{
        getProducts()
        .then((res)=>{
            setData(res.data);
        })
        .catch((er)=>console.log(er,"issue find"))
    }
    useEffect(()=>{
        handleGetPro()
    },[])

    const handleAddPro=(data)=>{
        addProducts(data)
    }
    console.log(data,"its here")
    return(
        <div>
         <AddProducts handleAddPro={handleAddPro}/>
        </div>
    )
}
export default Products;