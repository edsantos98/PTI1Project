import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
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

class StreetTraffic extends React.Component {
    state = {}
    render() {
        return (
            <Col className="mb-5 mb-xl-0" xl="6">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row className="align-items-center">
                            <div className="col">
                                <h3 className="mb-0">Cidade de [{this.props.cityName}] </h3>
                            </div>
                            <div className="col text-right">
                                <Button
                                    color="primary"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                    size="sm"
                                >
                                    See all
                    </Button>
                            </div>
                        </Row>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Rua</th>
                                <th scope="col">Nº veiculos</th>
                                <th scope="col">% de veiculos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Avenida da rua Central</th>
                                <td>4,569</td>

                                <td>
                                    <i className="fas fa-arrow-up text-success mr-3" />{" "}
                                    46,53%
                    </td>
                            </tr>
                            <tr>
                                <th scope="row">Rua da Pousada</th>
                                <td>3,985</td>

                                <td>
                                    <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                                    46,53%
                    </td>
                            </tr>
                            <tr>
                                <th scope="row">Rua da Avenida</th>
                                <td>3,513</td>

                                <td>
                                    <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                                    36,49%
                    </td>
                            </tr>
                            <tr>
                                <th scope="row">Rua da Liberdade</th>
                                <td>2,050</td>

                                <td>
                                    <i className="fas fa-arrow-up text-success mr-3" />{" "}
                                    50,87%
                    </td>
                            </tr>
                            <tr>
                                <th scope="row">Avenida da Reconquista</th>
                                <td>1,795</td>
                                <td>
                                    <i className="fas fa-arrow-up text-success mr-3" />{" "}
                                    30,87%
                    </td>

                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Col>
        );
    }
}

export default StreetTraffic;