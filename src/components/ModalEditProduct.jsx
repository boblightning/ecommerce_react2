import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class ModalEditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stock: props.detailProduk.stock,
            images: props.detailProduk.images,
            edit: false
        }
    }

    printStock = () => {
        if (this.props.detailProduk.stock) {
            return this.props.detailProduk.stock.map((item, index) => {
                return <Row>
                    <Col>
                        <Input disabled={!this.state.edit} type="text" defaultValue={item.type} placeholder={`Type-${index + 1}`} onChange={(e) => this.handleType(e, index)} />
                    </Col>
                    <Col>
                        <Input disabled={!this.state.edit} type="number" defaultValue={item.qty} placeholder={`Stock-${index + 1}`} onChange={(e) => this.handleStock(e, index)} />
                    </Col>
                    <Col>
                        <a onClick={() => this.onBtDeleteStock(index)} style={{ cursor: 'pointer' }}>Delete</a>
                    </Col>
                </Row>
            })
        }
    }

    printImages = () => {
        if (this.props.detailProduk.images) {
            return this.props.detailProduk.images.map((item, index) => {
                return <Input disabled={!this.state.edit} type="text" defaultValue={item} placeholder={`Images-${index + 1}`} onChange={(e) => this.handleImages(e, index)} />
            })
        }
    }

    render() {
        let { nama, deskripsi, brand, kategori, harga } = this.props.detailProduk
        return (
            <Modal isOpen={this.props.modalOpen} toggle={this.props.btClose} >
                <ModalHeader toggle={this.props.btClose}>Detail Product</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="textNama">Nama Product</Label>
                        <Input disabled={!this.state.edit} type="text" id="textNama" defaultValue={nama} innerRef={elemen => this.inNama = elemen} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="textDes">Deskripsi</Label>
                        <Input disabled={!this.state.edit} type="text" defaultValue={deskripsi} id="textDes" innerRef={elemen => this.inDeskripsi = elemen} />
                    </FormGroup>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="textBrand">Brand</Label>
                                <Input disabled={!this.state.edit} type="text" defaultValue={brand} id="textBrand" innerRef={elemen => this.inBrand = elemen} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="textKategori">Kategori</Label>
                                <Input disabled={!this.state.edit} type="text" defaultValue={kategori} id="textKategori" innerRef={elemen => this.inKategori = elemen} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="textHarga">Harga</Label>
                        <Input disabled={!this.state.edit} type="number" defaultValue={harga} id="textHarga" innerRef={elemen => this.inHarga = elemen} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Stock</Label>
                        {this.printStock()}
                    </FormGroup>
                    <FormGroup>
                        <Label>Images</Label>
                        {this.printImages()}
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    {
                        this.state.edit ?
                            <Button type="button" color="primary" onClick={() => this.setState({ edit: !this.state.edit })}>Save</Button>
                            : <Button type="button" color="primary" onClick={() => this.setState({ edit: !this.state.edit })}>Edit</Button>
                    }
                    <Button color="secondary" onClick={() => {
                        this.setState({ edit: !this.state.edit })
                        this.props.btClose()
                    }}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default ModalEditProduct;

// import React from 'react';
// import { Form, Row, Col, FormGroup, Label, Button, Input } from 'reactstrap'

// class FormDetail extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (
//             <div>
//                 <Form>
//                     <Row form>
//                         <Col md={6}>
//                             <FormGroup>
//                                 <Label for="exampleEmail">
//                                     Email
//                                 </Label>
//                                 <Input
//                                     id="exampleEmail"
//                                     name="email"
//                                     placeholder="with a placeholder"
//                                     type="email"
//                                 />
//                             </FormGroup>
//                         </Col>
//                         <Col md={6}>
//                             <FormGroup>
//                                 <Label for="examplePassword">
//                                     Password
//                                 </Label>
//                                 <Input
//                                     id="examplePassword"
//                                     name="password"
//                                     placeholder="password placeholder"
//                                     type="password"
//                                 />
//                             </FormGroup>
//                         </Col>
//                     </Row>
//                     <FormGroup>
//                         <Label for="exampleAddress">
//                             Address
//                         </Label>
//                         <Input
//                             id="exampleAddress"
//                             name="address"
//                             placeholder="1234 Main St"
//                         />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="exampleAddress2">
//                             Address 2
//                         </Label>
//                         <Input
//                             id="exampleAddress2"
//                             name="address2"
//                             placeholder="Apartment, studio, or floor"
//                         />
//                     </FormGroup>
//                     <Row form>
//                         <Col md={6}>
//                             <FormGroup>
//                                 <Label for="exampleCity">
//                                     City
//                                 </Label>
//                                 <Input
//                                     id="exampleCity"
//                                     name="city"
//                                 />
//                             </FormGroup>
//                         </Col>
//                         <Col md={4}>
//                             <FormGroup>
//                                 <Label for="exampleState">
//                                     State
//                                 </Label>
//                                 <Input
//                                     id="exampleState"
//                                     name="state"
//                                 />
//                             </FormGroup>
//                         </Col>
//                         <Col md={2}>
//                             <FormGroup>
//                                 <Label for="exampleZip">
//                                     Zip
//                                 </Label>
//                                 <Input
//                                     id="exampleZip"
//                                     name="zip"
//                                 />
//                             </FormGroup>
//                         </Col>
//                     </Row>
//                     <FormGroup check>
//                         <Input
//                             id="exampleCheck"
//                             name="check"
//                             type="checkbox"
//                         />
//                         <Label
//                             check
//                             for="exampleCheck"
//                         >
//                             Check me out
//                         </Label>
//                     </FormGroup>
//                     <Button>
//                         Sign in
//                     </Button>
//                 </Form>
//             </div>
//         );
//     }
// }

// export default FormDetail;