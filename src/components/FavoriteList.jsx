import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";

const FavoriteList = () => {
  const favoriteJobs = useSelector((state) => state.favoriteJobs.content);

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3'>
          <h1 className='display-1'>Favorite jobs list</h1>
        </Col>

        <Col xs={10} className='mx-auto mb-5'>
          {favoriteJobs.map((jobData) => (
            <Job key={"favoriteJobs" + jobData._id} data={jobData} remove={true} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FavoriteList;
