import Botton from "./Botton.js";
export default function Post({
  number = "no number for this post",
  children,
  like,
  comment = "no comment for this post",
}) {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        border: "solid #de57de 2px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        textTransform: "uppercase",
      }}
    >
      <h4>this post num {number}</h4>
      {children}
      <hr
        style={{
          width: "100%",
        }}
      ></hr>
      <p>likes: {like}</p>
      <Botton />
      <p>comments: {comment}</p>
    </div>
  );
}
