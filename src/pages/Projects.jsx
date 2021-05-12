import React from 'react';
import Header from '../components/Header';
import island from '../img/island.svg';
import shoppingCart from '../img/shopping_cart.png';
import facebook from '../img/facebook.png';
import '../components/Card.css';

function About() {
  return (
    <div className="App">
      <Header />
      <section className="Content">
        <h1>Projects</h1>
        <div className="Projects">
          <h3>React</h3>
          <div className="cards">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ shoppingCart } alt="shopping cart" />
                  <h4>Shooping Cart</h4>
                </div>
                <a
                  href="https://saulokirchmaier.github.io/shopping_cart/"
                  target="_blanck"
                  rel="noreferer"
                >
                  <div className="flip-card-back">
                      <h4>Shooping Cart</h4>
                      <p>Desenvolvido para o curso da Tybe, e ampliado por mim. Faz um requisição a API do mercado livre e monta uma loja de vendas com um carrinho de compras contendo os itens adicionados.</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ facebook } alt="shopping cart" />
                  <h4>Facebook Login</h4>
                </div>
                <a
                  href="https://saulokirchmaier.github.io/facebook_signup/"
                  target="_blanck"
                  rel="noreferer"
                >
                  <div className="flip-card-back">
                    <h4>Facebook Login</h4>
                    <p>Desenvolvido para o curso da Tybe, foi recriado a página de login antiga do facebook. Desenvolvida em dupla, este projeto foi bem desafiador e muito produtivo.</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ shoppingCart } alt="shopping cart" />
                  <h4>Shooping Cart</h4>
                </div>
                <div className="flip-card-back">
                  <h4>Shooping Cart</h4>
                  <p>Desenvolvido para o curso da Tybe, e ampliado por mim. Faz um requisição a API do mercado livre e monta uma loja de vendas com um carrinho de compras contendo os itens adicionados.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ shoppingCart } alt="shopping cart" />
                  <h4>Shooping Cart</h4>
                </div>
                <div className="flip-card-back">
                  <h4>Shooping Cart</h4>
                  <p>Desenvolvido para o curso da Tybe, e ampliado por mim. Faz um requisição a API do mercado livre e monta uma loja de vendas com um carrinho de compras contendo os itens adicionados.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ shoppingCart } alt="shopping cart" />
                  <h4>Shooping Cart</h4>
                </div>
                <div className="flip-card-back">
                  <h4>Shooping Cart</h4>
                  <p>Desenvolvido para o curso da Tybe, e ampliado por mim. Faz um requisição a API do mercado livre e monta uma loja de vendas com um carrinho de compras contendo os itens adicionados.</p>
                </div>
              </div>
            </div>
          </div>
          <h3>JavaScript</h3>
          <div className="cards">
            
          <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ shoppingCart } alt="shopping cart" />
                  <h4>Shooping Cart</h4>
                </div>
                <div className="flip-card-back">
                  <h4>Shooping Cart</h4>
                  <p>Desenvolvido para o curso da Tybe, e ampliado por mim. Faz um requisição a API do mercado livre e monta uma loja de vendas com um carrinho de compras contendo os itens adicionados.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ shoppingCart } alt="shopping cart" />
                  <h4>Shooping Cart</h4>
                </div>
                <div className="flip-card-back">
                  <h4>Shooping Cart</h4>
                  <p>Desenvolvido para o curso da Tybe, e ampliado por mim. Faz um requisição a API do mercado livre e monta uma loja de vendas com um carrinho de compras contendo os itens adicionados.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ shoppingCart } alt="shopping cart" />
                  <h4>Shooping Cart</h4>
                </div>
                <div className="flip-card-back">
                  <h4>Shooping Cart</h4>
                  <p>Desenvolvido para o curso da Tybe, e ampliado por mim. Faz um requisição a API do mercado livre e monta uma loja de vendas com um carrinho de compras contendo os itens adicionados.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ shoppingCart } alt="shopping cart" />
                  <h4>Shooping Cart</h4>
                </div>
                <div className="flip-card-back">
                  <h4>Shooping Cart</h4>
                  <p>Desenvolvido para o curso da Tybe, e ampliado por mim. Faz um requisição a API do mercado livre e monta uma loja de vendas com um carrinho de compras contendo os itens adicionados.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ shoppingCart } alt="shopping cart" />
                  <h4>Shooping Cart</h4>
                </div>
                <div className="flip-card-back">
                  <h4>Shooping Cart</h4>
                  <p>Desenvolvido para o curso da Tybe, e ampliado por mim. Faz um requisição a API do mercado livre e monta uma loja de vendas com um carrinho de compras contendo os itens adicionados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={ island } alt="Not Found!"/>
      </section>
    </div>
  );
}

export default About;
