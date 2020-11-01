import React, {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux';

const ShootForm = (props) => {

    const [shotDetails, setShotDetails] = useState({
        pictureId: props.pictureId,
        shot_description: '',
        shot_notes: ''
    });

    const handleChanges = (e) => {
        e.persist();
        const newShotDetails = {
            ...shotDetails,
            [e.target.name]: e.target.value
        }
        setShotDetails(newShotDetails)
    }

  return (
      <div className='shot_detail-form'>
        <Form>
            <FormGroup>
                <p>Picture {props.pictureId}</p>
            <Col sm={10}>
                <Input onChange={handleChanges} type="textarea" name="shot_description" id="shotDescription" placeholder='Enter a description of this shot here' />
            </Col>
            </FormGroup>

            <FormGroup>
            <Col sm={10}>
                <Input onChange={handleChanges} type="textarea" name="shot_notes" id="shotNotes" placeholder='Enter any relavent notes for this shot here' />
            </Col>
            </FormGroup>
            <FormGroup row>
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

const mapStateToProps = state => {
    return {
        shotOnProps: state.shotReducer
        
    }
}

export default connect(
    mapStateToProps,
    {}
)(ShootForm)