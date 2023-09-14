import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
// BsBookmarkFill
const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favoriteJobs = useSelector((state) => state.favoriteJobs.content);

  return (
    <Row className='mx-0 mt-3 p-3' style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9} className='d-flex'>
        <a href={data.url} target='_blank' rel='noreferrer'>
          {data.title}
        </a>

        <Button
          variant='link'
          className='ms-auto text-black'
          onClick={() => {
            favoriteJobs.includes(data)
              ? dispatch({ type: "REMOVE_FROM_FAVORITE", payload: data._id })
              : dispatch({ type: "ADD_TO_FAVORITE", payload: data });
          }}
        >
          {favoriteJobs.includes(data) ? <BsBookmarkFill /> : <BsBookmark />}
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
