import { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { UserServices } from "./Services/UserServices";

function UserList() {
    let [state, setState] = useState({
        users: []
    });
    useEffect(() => {
        UserServices.getAllUsers().then((response) => {
            setState({
                ...StaticRange,
                users: response.data
            })
        }).catch((error) => {
            console.log(error)

        });
    }, [])
    return (
        <>
            <Container className="mt-2">
                <Row>
                    <Col>
                        <h3 className="text-primary">User List</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet. spiciatis.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped border hover responsive="sm" className="shadow-lg text-center " >
                            <thead>
                                <tr>
                                    <th>Sno</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Website</th>
                                    <th>Company</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.users.length > 0 &&
                                    state.users.map(user => {
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.website}</td>
                                                <td>{user.company.name}</td>
                                                <td>{user.address.city}</td>
                                                <td></td>
                                            </tr>
                                        )

                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            {/* UserList
            <per>{JSON.stringify(state.users)}</per> */}
        </>
    );
}
export default UserList;