import axios from 'axios';
import React from 'react';
import { Container, Col, Row, Carousel, CarouselIndicators, CarouselItem, CarouselControl, CarouselCaption, UncontrolledCarousel } from 'reactstrap';



class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: []
        }
    }

    printCarousel = () => {
        return <div>
            <UncontrolledCarousel
                items={[
                    {
                        altText: 'Slide 1',
                        caption: 'Promo',
                        key: 1,
                        src: "https://archiv.kompasslev.cz/leafletku.com/public/gimg/5/8/3/0/3/58303-900-100000.jpg"
                    },
                    {
                        altText: 'Slide 2',
                        caption: 'Promo',
                        key: 2,
                        src: "https://promoproduk.id/wp-content/uploads/2020/06/5811-00001-850x850.jpg"
                    },
                    {
                        altText: 'Slide 3',
                        caption: 'Slide 3',
                        key: 3,
                        src: "https://2.bp.blogspot.com/-l6l2MKhBEmM/XCfDN7h1EQI/AAAAAAAAQXU/6raw7fTP4H0ZXSt_IqGCXhTf3XKnutulACLcBGAs/s1600/ikea_1220_2.jpg"
                    }
                ]}
            />

        </div>
    }
    printHomePage = () => {
        return <div style={{}}>

            <Container style={{ margin: "auto" }}>
                <Row>
                    <Col className="col-12 col-md-5 text-center">
                        <img
                            className="my-5 shadow mb-1 bg-white rounded"
                            width="80%"
                            src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/160/0916066_PE784942_S4.jpg"
                            alt="..." />
                    </Col>
                    <Col style={{ marginTop: "auto" }}>
                        <div className="card-body my-5"
                            style={{}}>
                            <h1 className="card-title">IDANÄS</h1>
                            <h1 className="card-title">IKEA|Rangka tempat tidur</h1>
                            <p className="card-text">Anda dapat dengan mudah menyedot debu di bawah rangka tempat tidur untuk menjaga ruang tetap bersih dan bebas debu.  Ada banyak ruang di bawah tempat tidur untuk kotak penyimpanan sehingga sempurna untuk menyimpan selimut dan bantal tambahan.  Sisi tempat tidur dapat disesuaikan memungkinkan Anda untuk menggunakan kasur dengan ketebalan yang berbeda.  Veneer kayu memberi Anda tampilan, rasa dan keindahan yang sama seperti kayu solid dengan variasi unik dalam serat, warna, dan tekstur."</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container style={{ margin: "auto" }}>
                <Row>
                    <Col style={{ margin: "auto" }}>
                        <div className="card-body my-5"
                            style={{}}>
                            <h1 className="card-title">RUDSTA</h1>
                            <h1 className="card-title">IKEA|Kabinet Pintu Kaca</h1>
                            <p className="card-text">Anda dapat dengan mudah menyedot debu di bawah rangka tempat tidur untuk menjaga ruang tetap bersih dan bebas debu.  Ada banyak ruang di bawah tempat tidur untuk kotak penyimpanan sehingga sempurna untuk menyimpan selimut dan bantal tambahan.  Sisi tempat tidur dapat disesuaikan memungkinkan Anda untuk menggunakan kasur dengan ketebalan yang berbeda.  Veneer kayu memberi Anda tampilan, rasa dan keindahan yang sama seperti kayu solid dengan variasi unik dalam serat, warna, dan tekstur.</p>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-5" style={{ textAlign: "center" }}>
                        <img
                            className="my-5 shadow mb-1 bg-white rounded"
                            width="80%"
                            src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/390/0939002_PE794384_S4.jpg"
                            alt="..." />
                    </Col>
                </Row>
            </Container>
            <Container style={{ margin: "auto" }}>
                <Row>
                    <Col className="col-12 col-md-5 text-center">
                        <img
                            className="my-5 shadow mb-1 bg-white rounded"
                            width="80%"
                            src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/407/0940712_PE795127_S4.jpg"
                            alt="..." />
                    </Col>
                    <Col style={{ }}>
                        <div className="card-body my-5"
                            style={{}}>
                            <h1 className="card-title">LINNEBÄCK C</h1>
                            <h1 className="card-title">IKEA|Kursi</h1>
                            <p className="card-text">Lebar:\t55 cm Kedalaman:\t69,5 cm Tinggi:\t72,4 cm Lebar dudukan:\t57 cm Kedalaman dudukan:\t50 cm Tinggi dudukan:\t42,4 cm Berat total:\t6,50 kg</p>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>



    }
    render() {
        return (
            <div>
                <div>
                    {this.printCarousel()}
                </div>
                <div>
                    {this.printHomePage()}
                </div>
            </div>
        );
    }
}

export default HomePage;