import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBookmarkFill, BsFillXOctagonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

const Job = ({ data, remove }) => {
  const dispatch = useDispatch();

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
          variant='outline'
          className='ms-auto'
          onClick={() => {
            dispatch(
              remove ? { type: "REMOVE_FROM_FAVORITE", payload: data._id } : { type: "ADD_TO_FAVORITE", payload: data }
            );
          }}
        >
          {remove ? <BsFillXOctagonFill /> : <BsBookmarkFill />}
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
