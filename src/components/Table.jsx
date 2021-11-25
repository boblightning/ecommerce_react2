import axios from 'axios';
import React, { component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import FormDetail from '../components/FormDetail';
import Table from '../components/Table';


class TableData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axios.get(`http://localhost:2000/products`)
            .then((response) => {
                console.log(response.data)
                this.setState({ products: response.data })
            }).catch((err) => {
                console.log(err)
            })
    }

    handleInput = (value, propState) => {
        this.setState({ [propState]: value })
    }


    handleCounterChange = () =>{
        this.props.onCounterChange()
    }

    render() {
        const { products = [] } = this.state
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Nama
                            </th>
                            <th>
                                Brand
                            </th>
                            <th>
                                Kategori
                            </th>
                            <th>
                                Gambar
                            </th>
                            <th>
                                Harga
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length ?
                            products.map((products, idx) => (
                                <tr>
                                    <td>{products.id}</td>
                                    <td>{products.nama}</td>
                                    <td>{products.brand}</td>
                                    <td>{products.kategori}</td>
                                    <td><img alt="..." width="100px" src={products.images[idx]} /></td>
                                    <td>{products.harga}</td>
                                    <td><button>Detail</button>
                                        <button>Delete</button></td>
                                </tr>
                            ))
                            :
                            (<tr>
                                <td></td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}





export default TableData;