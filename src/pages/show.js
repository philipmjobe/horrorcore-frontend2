import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Show from "./pages/show";

// import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";

function Artist() {
  const { id } = useParams();
  axios.get(`"http://localhost:3000/artists/${id}"`).then((res) => console.log(res.data));
}

// export default class Artist extends React.Component {
//   state = {
//     artists: [],
//   };
//   render() {
//     return (
//       <>
//         <div style={{ backgroundColor: "#BA1313" }}>
//           <Row xs={1} md={3} className="g-4">
//             {this.state.artists
//               .sort((a, b) => a.name.localeCompare(b.name))
//               .map((artist) => (
//                 <Col>
//                   <Card className="text-center" border="dark" style={{ width: "27.95rem", backgroundColor: "black" }}>
//                     <Card.Img
//                       variant="top"
//                       src={artist.image}
//                       alt="artist"
//                       className="image"
//                       style={{ height: 400, width: 445 }}
//                     />
//                     <Card.Body>
//                       <Card.Title style={{ textAlign: "center", color: "white" }}>{artist.name}</Card.Title>
//                       <Button variant="danger" style={{ align: "center" }}>
//                         More Info
//                       </Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//           </Row>
//         </div>
//       </>
//     );
//   }
// }

export default Artist;
