import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className='banner'>
      <div className='overlay'></div>
      <img src="./imagens/Fundo.png" className='fundo' alt="Imagem de fundo" /> 

      <div className='conteudo-esquerda'>
      <h1>FRONT END</h1>
      <h2>SEO com React</h2>
        <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
      </div>

      <div className='imagem-menor'>             
        <img src='./imagens/Fundo.png' alt='Imagem menor' />       
      </div>      
    </section>
  );
};

export default Banner;
