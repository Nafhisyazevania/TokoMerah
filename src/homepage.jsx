// HomePage.js
import React, { Component } from "react";
import "./homepage.css";
//Gambar
import logo from './assets/logo.png';
import header from './assets/header.png';
import bakpia from './assets/bakpia.jpeg';
import keripiktempe from './assets/keripiktempe.jpg';
import shumaigemol from './assets/shumaigemoi.jpeg';
import taslukis from './assets/taslukis.jpg';
import gelascembung from './assets/gelascembung.jpeg';
import wayang from './assets/wayang.jpeg';
import gantungan from './assets/gantungan.jpg';
import sambal from './assets/sambal.jpg';
import tahu from './assets/tahu.jpeg';
import pentol from './assets/pentol.jpg';
import aci from './assets/aci.jpeg';
import pecel from './assets/pecel.jpg';

class HomePage extends Component {
    render() {
        return (
            <div className='homepage'>
                <header className='header'>
                    <div className='logo'>
                        <img src={logo} alt="Logo" />
                        <h1>NAproduk</h1>
                    </div>
                    <nav className='nav'>
                        <a href='/'><u>Home</u></a>
                        <a href='#produk'>Produk</a>
                        <a href='/'>Tentang Kami</a>
                    </nav>
                </header>

                <div className='banner'>
                    <h1>Selamat Datang di NAproduk</h1>
                    <img src={header} alt="Garuda" />
                    <p>Barang 100% buatan kami!</p>
                </div>

                {/* Promo */}
                <div className="promo">
                    <h1>Promo!!!!</h1>
                    <p>Promo terbaru kami</p>

                    <div className='tentangpromo'>
                        <img src={taslukis} alt='Product 4' />
                        <div className='product-info'>
                            <h3>Tas Lukis</h3>
                            <p>Rp. 65.000,-</p>
                            <button><a className="btn" href='#produk'>Selengkapnya</a></button>
                        </div>
                    </div>

                </div>

                {/* Produk */}
                <div className="container" id="produk">
                    <h1 className="judul">Produk NAproduk</h1>
                    <div className='product-list'>
                        {/* Product 1 */}
                        <div className='product-card'>
                            <img src={bakpia} alt='Product 1' />
                            <div className='product-info'>
                                <h3>Bakpia Jogja</h3>
                                <p>Rp. 30.000,-</p>
                                <button>Tambah ke Keranjang</button>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className='product-card'>
                            <img src={keripiktempe} alt='keripik tempe' />
                            <div className='product-info'>
                                <h3>Keripik Tempe</h3>
                                <p>Rp. 15.000,-</p>
                                <button>Tambah ke Keranjang</button>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className='product-card'>
                            <img src={shumaigemol} alt='Product 3' />
                            <div className='product-info'>
                                <h3>Shumai Gemol</h3>
                                <p>Rp. 16.000,-</p>
                                <button>Tambah ke Keranjang</button>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className='product-card'>
                            <img src={taslukis} alt='Product 4' />
                            <div className='product-info'>
                                <h3>Tas Lukis</h3>
                                <p>Rp. 65.000,-</p>
                                <button>Tambah ke Keranjang</button>
                            </div>
                        </div>

                        {/* Product 5 */}
                        <div className='product-card'>
                            <img src={gelascembung} alt='Product 5' />
                            <div className='product-info'>
                                <h3>Gelas Cembung</h3>
                                <p>Rp. 75.000,-</p>
                                <button>Tambah ke Keranjang</button>
                            </div>
                        </div>

                        {/* Product 6 */}
                        <div className='product-card'>
                            <img src={wayang} alt='Product 6' />
                            <div className='product-info'>
                                <h3>Wayang Magnit Kulit</h3>
                                <p>Rp. 25.000,-</p>
                                <button>Tambah ke Keranjang</button>
                            </div>
                        </div>

                        {/* Product 7 */}
                        <div className='product-card'>
                            <img src={gantungan} alt='Product 7' />
                            <div className='product-info'>
                                <h3>Gantungan Rajut</h3>
                                <p>Rp. 12.000,-</p>
                                <button>Tambah ke Keranjang</button>
                            </div>
                        </div>

                        {/* Product 8 */}
                        <div className='product-card'>
                            <img src={sambal} alt='Product 8' />
                            <div className='product-info'>
                                <h3>Sambal Bawang</h3>
                                <p>Rp. 15.000,-</p>
                                <button>Tambah ke Keranjang</button>
                            </div>
                        </div>

                        {/* Product 9 */}
                        <div className='product-card'>
                            <img src={tahu} alt='Product 9' />
                            <div className='product-info'>
                                <h3>Tahu Sutra</h3>
                                <p>Rp. 7.000,-</p>
                                <button>Tambah ke Keranjang</button>
                            </div>
                        </div>

                        {/* Product 10 */}
                        <div className='product-card'>
                            <img src={pentol} alt='Product 10' />
                            <div className='product-info'>
                                <h3>Pentol Ayam</h3>
                                <p>Rp. 50.000,-</p>
                                <button>Tambah ke Keranjang</button>
                            </div>
                        </div>

                        {/* Product 11 */}
                        <div className='product-card'>
                            <img src={pecel} alt='Product 11' />
                            <div className='product-info'>
                                <h3>Bumbu Pecel Madiun</h3>
                                <p>Rp. 35.000,-</p>
                                <button>Tambah ke Keranjang</button>
                            </div>
                        </div>

                        {/* Product 12 */}
                        <div className='product-card'>
                            <img src={aci} alt='Product 12' />
                            <div className='product-info'>
                                <h3>Bakso Aci</h3>
                                <p>Rp. 15.000,-</p>
                                <button>Tambah ke Keranjang</button>
                            </div>
                        </div>
                    </div>
                </div>


                <footer className='footer'>
                    <p>&copy; 2024 NAproduk.</p>
                    <div className='social-media'>
                        <a href='#'>Facebook</a>
                        <a href='#'>Twitter</a>
                        <a href='#'>Instagram</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default HomePage;