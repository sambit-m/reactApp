import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Card, CardBody } from 'reactstrap';
import '../styles/DoctorVerification.css';
import CardHeader from "reactstrap/es/CardHeader";

const cardHeader = {
    fontSize: 30,
    marginTop: 50,
    marginBottom: 50,
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: '#7199ab',
    borderWidth: 2,
};

const card1Input = {
    borderColor: '#7199ab',
    borderWidth: 2,
    borderRadius: 10,
};

const card1Label = {
    marginTop: 5,
    marginRight: -50
};

const serachBar = {
    borderColor: '#7199ab',
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 30,
    height: 40,
};

const searchIcon = {
    marginLeft: 15,
    marginTop: 30,
    paddingTop: 10,
    borderColor: '#7199ab',
    borderWidth: 2,
    marginRight: -110
};

const card2Input = {
    borderColor: '#7199ab',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 10,
};

const card2Label = {
    marginTop: 5,
    marginLeft: 15
};

const card3Input = {
    borderColor: '#91736b',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 15
};

class DoctorVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            docname: '',
            docdob: '',
            docaddressline1: '',
            docaadhar: '',
            docvoterid: '',
            docregistrationnumber: '',
            docregistrationyear: '',
            docmedicalcouncil: '',
            docgender: '',
            docspeciality: '',
            introduction: '',
            experience: '',
            mbbs: ''
        }
    }

    render() {
        return (
            <div className="container">
                <Card>
                    <CardHeader style={cardHeader}> Doctor Verification </CardHeader>
                    <CardBody className="card1body">
                        <FormGroup row>
                            <div className="col-md-2" style={card1Label}> <Label for="name"> Name </Label> </div>
                            <Col md={2}>
                                <Input style={card1Input} type="text" name="name" id="name" placeholder="Name" />
                            </Col>
                            <div className="col-md-2" style={card1Label}> <Label for="name"> ID </Label> </div>
                            <Col md={2}>
                                <Input style={card1Input} type="text" name="name" id="name" placeholder="ID" />
                            </Col>
                            <div className="col-md-2" style={card1Label}> <Label for="name"> Mobile </Label> </div>
                            <Col md={2}>
                                <Input style={card1Input} type="text" name="name" id="name" placeholder="Mobile" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <i className="fa fa-search col-md-2 btn-sm btn-outline-primary" aria-hidden="true" style={searchIcon}/>
                            <Col md={8}>
                                <Input className="form-control form-control-sm ml-3 w-75" style={serachBar}
                                       type="text" name="searchBar" id="searchBar" placeholder="Search"
                                />
                            </Col>
                        </FormGroup>
                    </CardBody>
                </Card>
                <Card>
                <CardBody className="card2body">
                    <Form>
                        <FormGroup row>
                            <div className="col-md-2" style={card2Label}> <Label for="name"> Name </Label> </div>
                            <Col md={5} lg={3}>
                                <Input style={card2Input} type="text" name="name" id="name" placeholder="Name" />
                            </Col>
                            <Col md={12} lg={6}>
                                <Label md={3} lg={3}> Verified </Label>
                                <Label md={2} lg={2}>
                                    <Input type="radio" name="name-ok" /> ok
                                </Label>
                                <Label md={3} lg={3}>
                                    <Input type="radio" name="name-reject" /> Reject
                                </Label>
                                <Label md={4} lg={4}>
                                    <Input type="radio" name="name-info" /> Need more info
                                </Label>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <div className="col-md-2" style={card2Label}> <Label for="dob"> DOB </Label> </div>
                            <Col md={5} lg={3}>
                                <Input style={card2Input} type="text" name="dob" id="dob" placeholder="Date of Birth" />
                            </Col>
                            <Col md={12} lg={6}>
                                <Label md={3} lg={3}> Verified </Label>
                                <Label md={2} lg={2}>
                                    <Input type="radio" name="name-ok" /> ok
                                </Label>
                                <Label md={3} lg={3}>
                                    <Input type="radio" name="name-reject" /> Reject
                                </Label>
                                <Label md={4} lg={4}>
                                    <Input type="radio" name="name-info" /> Need more info
                                </Label>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <div className="col-md-2" style={card2Label}> <Label for="address"> Address </Label> </div>
                            <Col md={5} lg={3}>
                                <Input style={card2Input} type="text" name="address" id="address" placeholder="Address" />
                            </Col>
                            <Col md={12} lg={6}>
                                <Label md={3} lg={3}> Verified </Label>
                                <Label md={2} lg={2}>
                                    <Input type="radio" name="name-ok" /> ok
                                </Label>
                                <Label md={3} lg={3}>
                                    <Input type="radio" name="name-reject" /> Reject
                                </Label>
                                <Label md={4} lg={4}>
                                    <Input type="radio" name="name-info" /> Need more info
                                </Label>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <div className="col-md-2" style={card2Label}> <Label for="name"> Aadhar </Label> </div>
                            <Col md={5} lg={3}>
                                <Input style={card2Input} type="text" name="aadhar" id="aadhar" placeholder="Aadhar ID" />
                            </Col>
                            <Col md={12} lg={6}>
                                <Label md={3} lg={3}> Verified </Label>
                                <Label md={2} lg={2}>
                                    <Input type="radio" name="name-ok" /> ok
                                </Label>
                                <Label md={3} lg={3}>
                                    <Input type="radio" name="name-reject" /> Reject
                                </Label>
                                <Label md={4} lg={4}>
                                    <Input type="radio" name="name-info" /> Need more info
                                </Label>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <div className="col-md-2" style={card2Label}> <Label for="name"> Education </Label> </div>
                            <Col md={5} lg={3}>
                                <Input style={card2Input} type="text" name="education" id="education" placeholder="Education" />
                            </Col>
                            <Col md={12} lg={6}>
                                <Label md={3} lg={3}> Verified </Label>
                                <Label md={2} lg={2}>
                                    <Input type="radio" name="name-ok" /> ok
                                </Label>
                                <Label md={3} lg={3}>
                                    <Input type="radio" name="name-reject" /> Reject
                                </Label>
                                <Label md={4} lg={4}>
                                    <Input type="radio" name="name-info" /> Need more info
                                </Label>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <div className="col-md-2" style={card2Label}> <Label for="name"> Experience </Label> </div>
                            <Col md={5} lg={3}>
                                <Input style={card2Input} type="text" name="experience" id="experience" placeholder="Experience" />
                            </Col>
                            <Col md={12} lg={6}>
                                <Label md={3} lg={3}> Verified </Label>
                                <Label md={2} lg={2}>
                                    <Input type="radio" name="name-ok" /> ok
                                </Label>
                                <Label md={3} lg={3}>
                                    <Input type="radio" name="name-reject" /> Reject
                                </Label>
                                <Label md={4} lg={4}>
                                    <Input type="radio" name="name-info" /> Need more info
                                </Label>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <div className="col-md-2" style={card2Label}> <Label for="registration"> Medical Registration </Label> </div>
                            <Col md={5} lg={3}>
                                <Input style={card2Input} type="text" name="registration" id="registration" placeholder="Medical Registration" />
                            </Col>
                            <Col md={12} lg={6}>
                                <Label md={3} lg={3}> Verified </Label>
                                <Label md={2} lg={2}>
                                    <Input type="radio" name="name-ok" /> ok
                                </Label>
                                <Label md={3} lg={3}>
                                    <Input type="radio" name="name-reject" /> Reject
                                </Label>
                                <Label md={4} lg={4}>
                                    <Input type="radio" name="name-info" /> Need more info
                                </Label>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <div className="col-md-2" style={card2Label}> <Label for="council"> Medical Council </Label> </div>
                            <Col md={5} lg={3}>
                                <Input style={card2Input} type="text" name="council" id="council" placeholder="Medical Council" />
                            </Col>
                            <Col md={12} lg={6}>
                                <Label md={3} lg={3}> Verified </Label>
                                <Label md={2} lg={2}>
                                    <Input type="radio" name="name-ok" /> ok
                                </Label>
                                <Label md={3} lg={3}>
                                    <Input type="radio" name="name-reject" /> Reject
                                </Label>
                                <Label md={4} lg={4}>
                                    <Input type="radio" name="name-info" /> Need more info
                                </Label>
                            </Col>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>

                <Card>
                    <CardBody className="card3body">
                        <FormGroup row>
                            <Col md={12}>
                                <Label md={4}> Doctor Verified </Label>
                                <Label md={2}>
                                    <Input type="radio" name="name-ok" /> ok
                                </Label>
                                <Label md={2}>
                                    <Input type="radio" name="name-reject" /> Reject
                                </Label>
                                <Label md={4}>
                                    <Input type="radio" name="name-info" /> Waiting for more info
                                </Label>
                            </Col>
                            <Col md={6}>
                                <Input style={card3Input} type="text" name="comments" id="comments" placeholder="Comments" />
                            </Col>
                        </FormGroup>
                    </CardBody>
                </Card>
                <Button color="primary" style={{ marginTop: 20 }}> Save </Button>
                <Button color="success" style={{ marginLeft: 20, marginTop: 20 }}> Verify Location </Button>
            </div>
        );
    }
}

export default DoctorVerification;