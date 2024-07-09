import React from 'react';
import Banner from '../../componentes/Banner/Banner';
import Cards from '../../componentes/Cards/Cards';

const Home = ({ videos, onEdit, onDelete }) => {
  const categorizarVideos = () => {
    const videosAgrupados = {
      frontend: [],
      backend: [],
      mobile: []
    };

    if (videos && videos.length > 0) {
      videos.forEach(video => {
        const categoriaLower = video.categoria.toLowerCase(); 
        if (videosAgrupados.hasOwnProperty(categoriaLower)) {
          videosAgrupados[categoriaLower].push(video); 
        }
      });
    }

    return videosAgrupados;
  };

  console.log('Videos recebidos no Home:', videos);

  const videosAgrupados = categorizarVideos();

  return (
    <div>
      <Banner />
      {Object.keys(videosAgrupados).map(categoria => (
        <Cards 
          key={categoria}
          categoria={categoria}
          videos={videosAgrupados[categoria]}  
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Home;
