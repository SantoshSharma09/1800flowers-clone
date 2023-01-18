import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import SinglePage from "../birthday/[id]";


const Pages=({data})=>{
    console.log(data)
    const router=useRouter()
    const refresh=()=>{
        router.replace(router.asPath);
    }
    const handleRemove=async(id)=>{
        await axios
        .delete(`http://localhost:8080/addtocart/${id}`)
        .then((res)=>{
            alert("Delete");
            refresh();
        })
        .catch((er)=>{
            alert(er)
        })
    }
    return(
        <div>
           <h1>Cart Page</h1>
           {
            data.map((el,ind)=>{
                return(
                    <div key={el.id}>
                        <img src={el.img} alt="img"></img>
                        <h1>{el.name}</h1>
                        <p>{el.category}</p>
                        <button onClick={()=>handleRemove(el.id)}>Remove</button>
                    </div>
                )
            })
           }
        </div>
    )
}

export async function getServerSideProps(context){
    const r=await fetch(`http://localhost:8080/addtocart`);
    const d=await r.json()

    return{
        props:{
            data:d
        }
    }
}
export default Pages;