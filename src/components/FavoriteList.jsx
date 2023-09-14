import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";
import { Link } from "react-router-dom";

const FavoriteList = () => {
  const favoriteJobs = useSelector((state) => state.favoriteJobs.content);

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3'>
          <h1 className='display-1'>Favorite jobs list</h1>
          <Link to='/' className='nav-link'>
            <h5 className='ms-auto text-primary'>Go back</h5>
          </Link>
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
