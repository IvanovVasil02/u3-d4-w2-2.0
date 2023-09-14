import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainSearch = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.content);
  const jobs = useSelector((state) => state.jobs.content);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();

        dispatch({ type: "GET_QUERY_RESULT", payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3 d-flex justify-content-center align-items-center '>
          <h1 className='display-1'>Remote Jobs Search</h1>
          <Link to='favoriteList' className='nav-link'>
            <h5 className='ms-auto text-primary'>Go to favorites</h5>
          </Link>
        </Col>
        <Col xs={10} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              value={query}
              onChange={(e) => {
                dispatch({ type: "ADD_QUERY", payload: e.target.value });
              }}
              placeholder='type and press Enter'
            />
          </Form>
        </Col>
        <Col xs={10} className='mx-auto mb-5'>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
