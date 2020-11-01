import React, {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ShootForm = (props) => {

    const [clientDetails, setClientDetails] = useState({
        client_name: '',
        product_name: ''
    });

    const handleChanges = (e) => {
        e.persist();
        const newClientDetails = {
            ...clientDetails,
            [e.target.name]: e.target.value
        }
        setClientDetails(newClientDetails)
    }

  return (
      <div>
        <Form>
            <FormGroup row>
            {/* <Label for="exampleEmail" sm={2}>Email</Label> */}
            <Col sm={10}>
                <Input type="text" name='client_name' id="clientName" placeholder="Your Name" />
            </Col>
            </FormGroup>
            <FormGroup row>
            {/* <Label for="examplePassword" sm={2}>Password</Label> */}
            <Col sm={10}>
                <Input type="text" name="product_name" id="productName" placeholder="Name Of Your Product" />
            </Col>
            </FormGroup>


            <FormGroup row>
            <Label for="exampleText" sm={2}>Text Area</Label>
            <Col sm={10}>
                <Input type="textarea" name="text" id="exampleText" />
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="exampleFile" sm={2}>File</Label>
            <Col sm={10}>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                This is some placeholder block-level help text for the above input.
                It's a bit lighter and easily wraps to a new line.
                </FormText>
            </Col>
            </FormGroup>

            <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
            </Col>
            </FormGroup>
        </Form>
    </div>
  );
}

export default ShootForm;