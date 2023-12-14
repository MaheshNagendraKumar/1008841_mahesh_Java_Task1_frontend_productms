import React, { useEffect, useState } from 'react';


function AddProduct() {
    var pid = 0;
    const [product, setProduct] = useState({ id: ++pid, name: "", desc: "", image: "" });
    // const [desc, setDesc] = useState();
    // const [image, setImage] = useState();

    function AddProduct(e) {
        e.preventDefault()
        console.log(product); 
    }

    return (
        <div>
            <form onSubmit={AddProduct}>
                <div className="mb-3 col-6 m-auto">
                    <label htmlFor="pname" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="pname" aria-describedby="emailHelp" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                </div>
                <div className="mb-3 col-6 m-auto">
                    <label htmlFor="pdesc" className="form-label">Product Descreption</label>
                    <textarea className="form-control" id="pdesc" rows="3" value={product.desc} onChange={(e) => setProduct({ ...product, desc: e.target.value })}></textarea>
                </div>
                <div className="mb-3 col-6 m-auto">
                    <label htmlFor="pimage" className="form-label">Give Image url</label>
                    <input type="text" className="form-control" id="pimage" aria-describedby="emailHelp" value={product.image} onChange={(e) => setProduct({ ...product, image: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary m-auto">Submit</button>
            </form>
        </div>
    )
}

export default AddProduct