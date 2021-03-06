import React, {useState} from 'react';
import ShotForm from './ShotForm';
import {connect} from 'react-redux';
import { Col, Button, Form, FormGroup, Input, Row } from 'reactstrap';
import {addClient} from './actions/clientActions';
import {addShot} from './actions/shotActions';


const ShootDetails = (props) => {

    const [clientDetails, setClientDetails] = useState({
        client_name: '',
        product_name: ''
    });

    const newShot = {
        pictureId: (props.shotOnProps.shots.length) + 1,
        description: null,
        notes: null
    }

    const handleChanges = (e) => {
        e.persist();
        const newClientDetails = {
            ...clientDetails,
            [e.target.name]: e.target.value
        }
        setClientDetails(newClientDetails)
        props.addClient(newClientDetails)
    }

  return (<>
        <div className='shoot_details'>
            <div className='client_info'>
                <Form>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                            <Input onChange={handleChanges} type="text" name="client_name" id="clientName" placeholder="Your Name"  value={props.clientOnProps.client.client_name}/>
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                            <Input onChange={handleChanges} type="text" name="product_name" id="productName" placeholder="Product Name" value={props.clientOnProps.client.product_name} />
                            </FormGroup>

                        </Col>
                    </Row>
                </Form>
            </div>

            <div className='shoot_form-container'> 
                {
                    props.shotOnProps.shots.map((shot, index) => {
                        return (
                            <ShotForm pictureId={index+1} key={`shot-${index+1}`} initialId={shot.pictureId} />
                        )
                    })
                }
            </div>
            <div className='shoot_details-button'>
                <Button onClick={() => {props.addShot(newShot)}}>Add Shot</Button>
                <Button color='success'>Submit</Button>
            </div>
        </div>
  </>);
}

const mapStateToProps = state => {
    return {
        clientOnProps: state.clientReducer,
        shotOnProps: state.shotReducer
        
    }
}

export default connect(
    mapStateToProps,
    {addClient, addShot}
)(ShootDetails)