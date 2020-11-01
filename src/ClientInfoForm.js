import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useHistory} from 'react-router-dom';
import Info from './Info'




const ClientInfoForm = (props) => {

    let history = useHistory();

    const toShoots = (props) => {
        history.push('/shoot-details')
    }

  return (<>
    
    <div className='clientInfo_form col-md-3 center'>
    <Form onSubmit={toShoots}>
      <FormGroup row>
        {/* <Label for="exampleEmail" sm={2}>Email</Label> */}
        <Col sm={10}>
          <Input type="text" name="client_name" id="clientName" placeholder="Your Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        {/* <Label for="examplePassword" sm={2}>Password</Label> */}
        <Col sm={10}>
          <Input type="text" name="product_name" id="productName" placeholder="Name of Product" />
        </Col>
      </FormGroup>

      <FormGroup check row>
        <Col sm={{ size: 10, offset: 1 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
    </div>
  </>);
}

export default ClientInfoForm;