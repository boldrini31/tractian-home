import React from "react";
import Header from '../components/header';
import Demo from '../components/demo';
import Carousel from '../components/carousel';
import Why from '../components/why';
import Tabs from '../components/tabs';
import Carousel2 from '../components/carousel2';
import How from '../components/how';
import Secure from '../components/secure';
import Avaliations from '../components/avaliations';
import News from '../components/news';
import Us from '../components/us';
import Form from '../components/form';
import Footer from '../components/footer'

function Home() {
    return (
        <div>
            <Header></Header>
            <Demo></Demo>
            <Carousel></Carousel>
            <Why></Why>
            <Tabs></Tabs>
            <Carousel2></Carousel2>
            <How></How>
            <Secure></Secure>
            <Avaliations></Avaliations>
            <News></News>
            <Us></Us>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
}

export default Home;
