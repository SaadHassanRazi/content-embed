import { data } from "./assets/contentDescription/contentDescription";
import Image from "./assets/825159_preview.jpg";

function App() {
  const product = data.map((item) => {
    return item;
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {product.map((item) => {
            return (
              <div className="col">
                <div className="card h-100 border">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        className="img-fluid rounded-start"
                        src={Image}
                        alt="Card image cap"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title text-center">{item.label}</h5>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App; 