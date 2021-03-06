import React, { useState, } from 'react';
import { Col, Row, Button, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import Front from './front.png';
import { removeShot } from './actions/shotActions';
import { updateId } from './actions/shotActions';

const ShotForm = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [shotImage, setShotImage] = useState({
        img_preview: Front,
        img_src: null
    })

    const [shotDetails, setShotDetails] = useState({
        pictureId: null,
        shot_description: null,
        shot_notes: null,
        shot_type: null
    });

    const updateImgId = () => {
        let Ids = {
            initialIdx: props.initialId - 1,
            currentId: props.pictureId
        }
        props.updateId(Ids)
    }

    const handleChanges = (e) => {
        e.persist();
        const newShotDetails = {
            ...shotDetails,
            [e.target.name]: e.target.value
        }
        setShotDetails(newShotDetails)
    }

    const handlePhotoType = (selection) => {
        shotDetails.shot_type = selection
    }

    const handleFileSelect = event => {
        // console.log(event.target.files[0])
        setShotImage({
            img_preview: URL.createObjectURL(event.target.files[0]),
            img_src: event.target.files[0]

        })
    }

    return (

        <div className='shot_detail-form'>

            <Form>
                <div className='shot_detail-header'>
                    <div>
                        <p>Picture {props.pictureId}</p>
                    </div>
                    <div>
                        {props.pictureId > 1 ? (
                            <span className='shot_form-delete' onClick={() => { props.removeShot(props.pictureId); updateImgId(); }}>X</span>
                        ) : (<></>)}
                    </div>
                </div>

                <div className='shot_detail-formFlex'>
                    <div className='shot_detail-formFile'>
                        <FormGroup row>
                            <img alt='front facing lifestyle view of a product' className='shot_detail-exampleImg' src={shotImage.img_preview} />
                            <Col sm={10}>
                                <input type="file" onChange={handleFileSelect} />
                                {/* <Button>Upload</Button> */}
                            </Col>
                        </FormGroup>
                    </div>
                    <div className='shot_detail-formText'>
                        <FormGroup>
                            <Row xs='0'>
                                <Input onChange={handleChanges} type="textarea" name="shot_description" placeholder='Shot Description - ex: Angled front view lifestyle shot of product holding makeup brushes.' />
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Input onChange={handleChanges} type="textarea" name="shot_notes" placeholder='Notes: Anything else you would like to convey to us' />
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle caret>
                                        Image Appearances
                            </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => { handlePhotoType('Match Example'); }}>Match Example</DropdownItem>
                                        <DropdownItem>Similar to Example</DropdownItem>
                                        <DropdownItem>Photogs Choice</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Row>
                        </FormGroup>
                    </div>
                </div>
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
    { removeShot, updateId }
)(ShotForm)