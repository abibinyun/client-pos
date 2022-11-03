import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import dataProductAction from "../../redux/product/productAction";
import ButtonComponent from "../Button/Button";

const CardProduct = () => {
  const dispatch = useDispatch();
  const { dataProducts } = useSelector((state) => state.dataProduct);

  useEffect(() => {
    dispatch(dataProductAction.fetchDataProducts());
    // eslint-disable-next-line
  }, []);

  return dataProducts ? (
    <div className="d-flex justify-content-center">
      {dataProducts.map((product) => {
        const image_url = `http://localhost:3000/${product.image_url}`;

        return (
          <Card className="container" style={{ width: "18rem", marginTop: "7rem", marginLeft: "20px", marginRight: "20px", padding: "5px" }} key={product._id}>
            <Card.Img variant="top" alt="image" src={image_url} />

            <Card.Body>
              <Card.Title className="d-flex item-start">{product.name}</Card.Title>
              <Card.Text className="d-flex item-start">{product.description}</Card.Text>
              <Card.Text>harga : {product.price}</Card.Text>
              <div className="d-flex justify-content-end">
                <ButtonComponent>+add</ButtonComponent>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  ) : (
    <div></div>
  );
};

export default CardProduct;
