import Draggable from "react-draggable";
import { useState } from "react";
const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double click to edit");
  return (
    <Draggable>
      {editMode ? (
        <input
          onDoubleClick={() => setEditMode(false)}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <p onDoubleClick={() => setEditMode(true)} style={{ margin: "20px" }}>
          {val}
        </p>
      )}
    </Draggable>
  );
};

export default Text;
