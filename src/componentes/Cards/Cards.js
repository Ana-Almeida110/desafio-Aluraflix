import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cards.css';

const Cards = ({ categoria, videos, onEdit, onDelete }) => {
  console.log('Props recebidas no Cards:', { categoria, videos, onEdit, onDelete }); 

  const tituloRef = useRef(null);   

  useEffect(() => {
    if (tituloRef.current) {
      tituloRef.current.style.width = `100%`;
    }
  }, []);

  const getTituloClass = () => {
    switch (categoria) {
      case 'frontend':
        return 'titulo-card-frontend';
      case 'backend':
        return 'titulo-card-backend';
      case 'mobile':
        return 'titulo-card-mobile';
      default:
        return 'titulo-card';
    }
  }; 

  if (!categoria || !videos || typeof onEdit !== 'function' || typeof onDelete !== 'function') {
    console.error('Parâmetros inválidos passados para o componente Cards', { categoria, videos, onEdit, onDelete });
    return null;
  }

  const numSlidesMostrados = Math.min(3, videos.length);   

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: numSlidesMostrados,
    slidesToScroll: numSlidesMostrados,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: Math.min(2, videos.length),
                slidesToScroll: Math.min(2, videos.length),
                infinite: videos.length > 2,
                dots: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: videos.length > 1,
            },
        },
    ],
  };

  return (
    <section className='card-secao'>
        <div className={getTituloClass()} ref={tituloRef}>{categoria}
        </div>   
      
      <Slider {...settings} className="card-container">
        {videos.map((video) => (
          <a key={video.id} href={video.linkVideo} target='_blank' rel='noopener noreferrer' className='card-link'>
            <div className='card'>
            <img src={video.urlImagem} alt={video.titulo} />
            
            <div className='botoes'>
              <button onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onEdit(video)}} className='card-botao-editar'>
                <img id='img-card-editar' src='./imagens/Lapis.png' alt='Editar' />EDITAR   
              </button>
              <button onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onDelete(video.id)}} className='card-botao-deletar'>
                <img id='img-card-deletar' src='./imagens/X.png' alt='Deletar' />DELETAR 
              </button>
            </div>
            </div>
          </a>
        ))}
      </Slider>
      
    </section>
  );
};

export default Cards;
