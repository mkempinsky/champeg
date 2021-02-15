import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Button from '../components/Button';

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <div className="hero">
                    <div className="hero-img" />
                    <div className="hero-img__overlay" />
                    <div className="hero-content">
                        <Image
                            src="/logo_text-transparent-light-2.png"
                            width="450px"
                            height="450px"
                        />
                    </div>
                </div>
                <section>
                    <h2>Sparkling Wine & Rose Kegs</h2>
                    <p className="subtitle">
                        Champeg ofers a unique touch to your event. <br />
                        We take the excitement of having a keg party and chanel that into
                        your classy event. Give your guests the gift of flowing champagne
                        to keep the celebrations going all evening.
                    </p>
                    {/* <Image
                        src="/homepage-images/logo_blob-yellow.png"
                        width="300px"
                        height="300px"
                    />
                    <Image
                        src="/homepage-images/logo_blob-pink.png"
                        width="300px"
                        height="300px"
                    /> */}
                    <Button
                        type="brown"
                        style={{
                            display: 'block',
                            margin: '0 auto',
                        }}>
                        Shop Options
                    </Button>
                </section>
                <section className="section-how">
                    <div className="max-width">
                        <div className="section-how__inner">
                            <div>
                                <h2>How It Works</h2>
                                <p className="subtitle">Learn about our product.</p>
                            </div>
                            <div className="section-how__inner-img">
                                <Image
                                    src="/keg-img-1.png"
                                    width="400px"
                                    height="400px"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-elevate">
                    <h2>Elevate Your Events</h2>
                    <p className="subtitle">
                        Champeg is perfect for taking any occasion to the next level while
                        keeping it classy.
                    </p>
                    <div className="container">
                        <div className="card">
                            <div>
                                <Image
                                    src="/homepage-images/champ-img-1.png"
                                    width="300px"
                                    height="300px"
                                />
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <Image
                                    src="/homepage-images/champ-img-3.png"
                                    width="300px"
                                    height="300px"
                                />
                            </div>
                        </div>{' '}
                        <div className="card">
                            <div>
                                <Image
                                    src="/homepage-images/champ-img-2.png"
                                    width="300px"
                                    height="300px"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="img-break">
                    <div className="img-break__image" />
                    <div className="img-break__image-overlay" />
                </div>

                <style jsx>
                    {`
                        .hero {
                            position: relative;
                        }
                        .hero-content {
                            z-index: 1;
                            position: relative;
                            padding: 80px 20px;
                            height: 600px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        .hero-img {
                            background-image: url('/hero-img.jpg');
                            background-position: top center;
                            background-repeat: no-repeat;
                            background-attachment: fixed;
                            background-size: cover;
                            height: 600px;
                            width: 100%;
                            position: absolute;
                            opacity: 0.8;
                            z-index: 0;
                        }
                        .hero-img__overlay {
                            background: #000;
                            height: 600px;
                            width: 100%;
                            position: absolute;
                            opacity: 0.6;
                            z-index: 1;
                        }
                        section {
                            padding: 60px 20px;
                        }
                        section h2 {
                            margin-bottom: 15px;
                            text-align: center;
                            font-size: 48px;
                        }
                        section h3 {
                            text-align: center;
                        }
                        .subtitle {
                            margin: 0 auto 80px auto;
                            font-size: 20px;
                            text-align: center;
                            line-height: 2;
                            max-width: 960px;
                        }
                        .container {
                            display: grid;
                            grid-template-columns: auto auto auto;
                            align-items: flex-end;
                            justify-content: center;
                            grid-template-rows: auto;
                            grid-gap: 100px;
                        }
                        .section-how {
                            background: var(--brown-400);
                            color: #fff;
                            padding: 0 20px;
                        }
                        .section-how h2,
                        .section-how p {
                            text-align: left;
                        }
                        .section-how__inner {
                            display: flex;
                            justify-content: space-between;
                            position: relative;
                            width: 100%;
                        }
                        .section-how__inner-img {
                            position: absolute;
                            right: 0;
                            top: -50px;
                        }
                        .img-break {
                            position: relative;
                            height: 300px;
                        }
                        .img-break__image {
                            background-image: url('/champ-2.jpg');
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-attachment: fixed;
                            background-size: cover;
                            height: 300px;
                            width: 100%;
                            position: absolute;
                            opacity: 0.8;
                            z-index: 0;
                        }
                        .img-break__image-overlay {
                            background: #000;
                            height: 300px;
                            width: 100%;
                            position: absolute;
                            opacity: 0.6;
                            z-index: 1;
                        }
                    `}
                </style>
            </Layout>
        );
    }
}
export default Home;
