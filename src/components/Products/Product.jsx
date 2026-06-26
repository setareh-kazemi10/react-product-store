const Product = ({ product }) => {
    return (
        <>
            <div className="col-lg-3">
                <h6>Title: {product.title}</h6>
                <img src={product.image} alt="" style={{ width: "180px", height: "180px" }} />
                <h6>DESC: {product.description}</h6>
                <div className="d-flex justify-content-between">
                    <h6>Price: {product.price}</h6>
                    <h6>Category: {product.category}</h6>
                </div>
                <div className="d-flex justify-content-between">
                    <h6>Rate: {product.rating.rate}</h6>
                    <h6>Count: {product.rating.count}</h6>
                </div>
            </div>
        </>
    )
}

export default Product