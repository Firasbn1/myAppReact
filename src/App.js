import "./App.css";
import Header from "./Header.js";
import Post from "./Post.js";
import Side from "./Side.js";
import Footer from "./Footer.js";
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ display: "flex", justifyContent: "center", width: "60%" }}
        >
          <div
            style={{
              width: "60%",
            }}
          >
            <Post number="1" like="77" comment="20">
              <hr style={{ width: "100%" }}></hr>
              <img
                style={{ width: "100%", height: "100px" }}
                src="\R.png"
                alt="" // Add an empty alt prop for decorative images
              ></img>
            </Post>
            <Post number="2" like="2">
              <hr style={{ width: "100%" }}></hr>
              <img
                style={{ width: "100%", height: "100px" }}
                src="\R.png"
                alt="" // Add an empty alt prop for decorative images
              ></img>
            </Post>
            <Post number="3" like="85" comment="55">
              <hr style={{ width: "100%" }}></hr>
              <img
                style={{ width: "100%", height: "100px" }}
                src="\R.png"
                alt="" // Add an empty alt prop for decorative images
              ></img>
            </Post>
            <Post like="912" comment="42">
              <hr style={{ width: "100%" }}></hr>
              <img
                style={{ width: "100%", height: "100px" }}
                src="\R.png"
                alt="" // Add an empty alt prop for decorative images
              ></img>
            </Post>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "40%",
              height: "50%",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              margin: "50px",
              padding: "5px",
              border: "solid #de57de 2px",
            }}
          >
            <Side />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
