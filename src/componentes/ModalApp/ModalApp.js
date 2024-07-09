import React, { useState, useEffect } from 'react';
import './ModalApp.css';

const Modal = ({ isOpen, onRequestClose, videoSelecionado, handleSalvar }) => {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [urlImagem, setUrlImagem] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [descricao, setDescricao] = useState('');

  useEffect(() => {
    if (videoSelecionado) {
        setTitulo(videoSelecionado.titulo || '');
        setCategoria(videoSelecionado.categoria || '');
        setUrlImagem(videoSelecionado.urlImagem || '');
        setLinkVideo(videoSelecionado.linkVideo || '');
        setDescricao(videoSelecionado.descricao || '');
    }
  }, [videoSelecionado]);

  const handleSalvarClick = () => {
    const videoAtualizado = {
        ...videoSelecionado,
        titulo,         
        categoria,
        urlImagem,
        linkVideo,
        descricao,
    };

    handleSalvar(videoAtualizado);
    onRequestClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h1>Editar Card</h1>
        <div className='modal-form-group'>        
          <label htmlFor="titulo">Título:</label>
          <input
              type="text"
              id='video.titulo'
              placeholder='Título'
              name='categoria'             
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className='modal-form-group'>
          <label htmlFor="categoria">Categoria:</label>
          <select
              id='video.categoria' 
              name='categoria'
              value={categoria}            
              onChange={(e) => setCategoria(e.target.value)}>      
                  <option value="">Selecione uma categoria</option>
                  <option value="FrontEnd">FrontEnd</option>
                  <option value="BackEnd">BackEnd</option>    
                  <option value="Mobile">Mobile</option>
          </select>
        </div>

        <div className='modal-form-group'>
          <label htmlFor="urlImagem">Imagem:</label>
          <input
            type="text"
            id="urlImagem"
            value={urlImagem}
            onChange={(e) => setUrlImagem(e.target.value)}
          />
        </div>

        <div className='modal-form-group'>
          <label htmlFor="linkVideo">Vídeo:</label>
          <input
            type="text"
            id="linkVideo"
            value={linkVideo}
            onChange={(e) => setLinkVideo(e.target.value)}
          />
        </div>

        <div className='modal-form-group'>
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div className="modal-buttons">
          <button onClick={handleSalvarClick} className='btn-modal-salvar'>Salvar</button>
          <button onClick={onRequestClose} className='btn-modal-cancelar'>Cancelar</button>
        </div>
      </div>
    </div>     
  );
};

export default Modal;

