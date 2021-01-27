import { Row, Col, Card } from "antd";
import {useQuery} from "react-query";
import constants from "../constants";

const {Meta} = Card;// same as Card.Meta;


const Directors = () => {
  const { isLoading, isError, data, error} = useQuery("directors", () =>
  fetch(constants.api.directors.list).then((res) => res.json())
  );
 
  if(isLoading) return <span>Loading...</span>
  if(isError) return <span>Error : {error.message}</span>
console.log("Data : ",data);
  return (
  <Row>{ data && 
    data.map((director) => (
      <Col span={12} key={director._id}>
        <Card hoverable style={{margin:15}}>
          <Meta title={director.name}/>
        </Card>
      </Col>
    ))}
  </Row>);
}

export default Directors;
