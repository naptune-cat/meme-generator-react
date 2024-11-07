import { useState, createRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();
  const addText = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div
        ref={memeRef}
        className="meme m-5"
        style={{ width: "500px", display: "flex", border: "1px solid black" }}
      >
        <img
          style={{ margin: "20px" }}
          src={params.get("url")}
          width={"250px"}
        />
        {Array(count)
          .fill(0)
          .map((e, index) => (
            <Text
              key={index}
              style={{ position: "absolute", top: "20px", left: "20px" }}
            />
          ))}
      </div>
      <Button onClick={addText} style={{ margin: "20px" }} variant="primary">
        Add text
      </Button>
      <Button
        style={{ margin: "20px" }}
        variant="success"
        onClick={() => exportComponentAsJPEG(memeRef)}
      >
        save
      </Button>
    </div>
  );
};

export default EditPage;
