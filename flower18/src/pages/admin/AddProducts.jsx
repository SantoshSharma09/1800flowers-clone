import React, { useState } from "react";
import styles from '../../styles/Admin.module.css'
const AddProducts = ({ handleAddPro }) => {
  const [formState, setFormState] = useState({
    name: "",
    img: "",
    price: "",
  });

  const handleChange = (e) => {
    const v =
      e.target.typee === "number" ? Number(e.target.value) : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: v,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    handleAddPro(formState);
  };
  return (
    <div>
      <div className={styles.admincontainer}>
        <div className={styles.wrapper}>
          <h1 className="Title">ADMIN CAN MODIFIE THE PRODUCTS</h1>
          <form onSubmit={handleSubmit} className="Form">
            <div className="inp-box">
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Product Name"
                className="inp-boxx"
              />
            </div>
            <div className="inp-box">
              <input
                type="link"
                name="img"
                value={formState.img}
                onChange={handleChange}
                placeholder="Product Image"
                className="inp-boxx"
              />
            </div>
            <div className="inp-box">
              <input
                type="number"
                name="price"
                value={formState.price}
                onChange={handleChange}
                placeholder="Product Price"
                className="inp-boxx"
              />
            </div>
            <div>
              <input type="submit" value="Submit" className="sub-btn" />
            </div>
            <button>Logout</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
