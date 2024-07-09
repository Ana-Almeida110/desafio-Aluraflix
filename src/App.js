import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import Home from './paginas/Home/Home';
import NovoVideo from './paginas/NovoVideo/NovoVideo';
import ModalApp from './componentes/ModalApp/ModalApp';

const App = () => {

  const dadosIniciais = [
    {
      id: 1,
      titulo: 'O que faz uma desenvolvedora FRONT-END',
      categoria: 'frontend',
      descricao: 'Vanessa fala sobre a rotina das desenvolvedoras com a utilização do HTML, CSS e JavScript. ',
      urlImagem: 'imagens/imagem 1.png',
      linkVideo: 'https://www.youtube.com/watch?v=ZY3-MFxVdEw&t=21s'
    },
    {
      id: 2,
      titulo: 'Guia de carreira FrontEnd',
      categoria: 'frontend',
      descricao: 'Guia de Estudos do iniciante ao avançado com 3 níveis de profundidade e 1 nível de expansão',
      urlImagem: 'imagens/imagem 2.png',
      linkVideo: 'https://www.youtube.com/watch?v=fpth65ts3cw'
    },
    {
      id: 3,
      titulo: 'O que é e o que faz quem trabalha com UX?',
      categoria: 'frontend',
      descricao: 'Carla de Bona fala sobre a importância da experiência do usuário para os negócios.',
      urlImagem: 'imagens/imagem 3.png',
      linkVideo: 'https://www.youtube.com/watch?v=FJhMCi07T4A'
    },
    {
      id: 4,
      titulo: 'Como deixar o Layout responsivo no seu site',
      categoria: 'frontend',
      descricao: 'Tutorial sobre como transformar o site num layout responsivo.',
      urlImagem: 'imagens/imagem 4.png',
      linkVideo: 'https://www.youtube.com/watch?v=kyFiT4ofMwk&list=PLh2Y_pKOa4UddwTMZhqQLj_1M_g-_fUXY&index=12'
    },
    {
      id: 5,
      titulo: 'O que faz uma desenvolvedora Back-end?',
      categoria: 'backend',
      descricao: 'Juliana responde perguntas sobre o trabalho de um desenvolvedor backend e quais áreas se relacionam com o backend.',
      urlImagem: 'imagens/imagem 5.png', 
      linkVideo: 'https://www.youtube.com/watch?v=fiPfvylj6rk&list=PLh2Y_pKOa4UdxQxo_DwyqzyL-7wGnfIkL&index=2'
    },
    {
      id: 6,
      titulo: 'GitHub CLI - Uma nova experiência no GitHub',
      categoria: 'backend',
      descricao: 'Tutorial ensinando o que é o GitHub e vantagens de sua utilização',
      urlImagem: 'imagens/imagem 6.png',
      linkVideo: 'https://www.youtube.com/watch?v=6o6-bKOZOEY'
    },
    {
      id: 7,
      titulo: 'Qual é a melhor linguagem de programação?',
      categoria: 'backend',
      descricao: 'Como surgiram as linguagens mais utilizadas em programação e suas aplicações.',
      urlImagem: 'imagens/imagem 7.png',
      linkVideo: 'https://www.youtube.com/watch?v=Uh-GNH-t89w'
    },
    {
      id: 8,
      titulo: 'Desenvolvimento Android',
      categoria: 'mobile',
      descricao: 'Primeiros passos para começar a desenvolver aplicações Android, ferramentas.',
      urlImagem: 'imagens/imagem 8.png',
      linkVideo: 'https://www.youtube.com/watch?v=fWscDFHKgw8'
    },
    {
      id: 9,
      titulo: 'React Native EU 2019: Emily Janzer - The new React Native',
      categoria: 'mobile',
      descricao: ' ',
      urlImagem: 'imagens/imagem 9.png',
      linkVideo: 'https://www.youtube.com/watch?v=52El0EUI6D0&list=PLKs4LhF5djLbNGsejDHFuaGFATXcVQYOY'
    },
    {
      id: 10,
      titulo: 'Como começar sua primeira app com o Flutter - Hello World',
      categoria: 'mobile',
      descricao: 'Tutorial de como criar app com o Flutter e entender como fazer tudo funcionar',
      urlImagem: 'imagens/imagem 10.png',
      linkVideo: 'https://www.youtube.com/watch?v=xSC8j3gl7xM'
    }
  ];

  const [videos, setVideos] = useState(dadosIniciais);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSelecionado, setVideoSelecionado] = useState(null);

  const adicionarVideo = (novoCard) => {
    setVideos(prevVideos => [...prevVideos, novoCard]); 
    console.log('Cards atualizados:', [...videos, novoCard]);
  };

  const excluirVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  const handleEdit = (videoAtualizado) => {
    setVideos(videos.map(video => video.id === videoAtualizado.id ? videoAtualizado : video));
    console.log('Editando vídeo:', videoAtualizado);
    setIsModalOpen(false);
  };
    
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home videos={videos} onEdit={(video) => {
              setVideoSelecionado(video);
              setIsModalOpen(true);
            }} onDelete={excluirVideo} />} />
            <Route path="/novo-video" element={<NovoVideo onAdicionarCard={adicionarVideo} />} />
          </Routes>          
        </main>
        <Footer />
        <ModalApp isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
          videoSelecionado={videoSelecionado}
          handleSalvar={handleEdit}
        />        
      </div>        
    </Router>
  );
};

export default App;
