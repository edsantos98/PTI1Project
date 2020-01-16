import React, { Component } from 'react';
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts


import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2
} from "variables/charts.jsx";


class PrioritezedVeicules extends Component {
    state = {}
    render() {
        return (
            <Col xl="6">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row className="align-items-center">
                            <div className="col">
                                <h3 className="mb-0">Veiculos Prioritários</h3>
                            </div>
                        </Row>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Tipo</th>
                                <th scope="col">Em uso</th>
                                <th scope="col">% capacidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Ambulância</th>
                                <td>1,480</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <span className="mr-2">60%</span>
                                        <div>
                                            <Progress
                                                max="100"
                                                value="60"
                                                barClassName="bg-gradient-danger"
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Taxi</th>
                                <td>5,480</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <span className="mr-2">70%</span>
                                        <div>
                                            <Progress
                                                max="100"
                                                value="70"
                                                barClassName="bg-gradient-success"
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Autocarro</th>
                                <td>4,807</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <span className="mr-2">80%</span>
                                        <div>
                                            <Progress max="100" value="80" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Reboque</th>
                                <td>3,678</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <span className="mr-2">75%</span>
                                        <div>
                                            <Progress
                                                max="100"
                                                value="75"
                                                barClassName="bg-gradient-info"
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Policia</th>
                                <td>2,645</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <span className="mr-2">30%</span>
                                        <div>
                                            <Progress
                                                max="100"
                                                value="30"
                                                barClassName="bg-gradient-warning"
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Col>
        );
    }
}

export default PrioritezedVeicules;
