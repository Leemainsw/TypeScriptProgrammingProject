import react from "React";
import { Button, Col, Input, Row } from "reactstrap";

const PersonalDetails = (): JSX.Element => {
  return (
    <Row>
      <Col lg="8">
        <Row>
          <Col>
            <h4 className="mb-3">Personal details</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="firstName">First Name</label>
          </Col>
          <Col>
            <label htmlFor="lastName">Last Name</label>
          </Col>
        </Row>

        <Row>
          <Col>
            <Input
              type="text"
              id="firstName"
              className="form-control"
              placeholder="First name"
            />
          </Col>
          <Col>
            <Input
              type="text"
              id="lastName"
              className="form-control"
              placeholder="Last name"
            />
          </Col>
        </Row>

        <Col>
          <Col>
            <Row>
                <Col lg="6"><Button size="lg" color="success">Load</Button></Col>
                <Col lg="6"><Button size="lg" color="success">Info</Button></Col>
            </Row>
          </Col>
        </Col>
      </Col>
    </Row>
  );
};

export default PersonalDetails;
