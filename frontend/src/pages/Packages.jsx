// import React from "react";
// import Header from "../components/Header";
// import Card from "../components/Card";
// import Footer from "../components/Footer";

// const baseURL = "http://localhost:1337/api/packages";


// const Packages = () => {

//   useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);
// console.log(response)
//   if (!post) return (
//     <div>
//       Loading...
//     </div>
//   );
//   return (
//     <>
//       <Header/>
//       <Card />
//       <Footer />
//     </>
//   );
// };

// export default Packages;


import axios from "axios";
import React from "react";

const baseURL = "http://localhost:1337/api/packages";

export default function Packages() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data)
    });
  }, []);
  if (!post) return (
    <div>
      Loading...
    </div>
  );

  return (
    <div>
      {/* <h1>{datas.place}</h1>
      <p>{post.body}</p> */}
    </div>
  );
}