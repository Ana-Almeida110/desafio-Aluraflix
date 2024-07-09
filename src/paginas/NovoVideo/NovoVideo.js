import React, { useState } from 'react'; 
import Modal from 'react-modal';
import './NovoVideo.css';

// Configurar o modal para trabalhar com o app principal
Modal.setAppElement('#root');

const NovoVideo = ({ onAdicionarCard }) => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState('');
  const [linkVideo, setLinkVideo] = useState('');
  const [descricao, setDescricao] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica se todos os campos estão preenchidos
    if (!titulo || !categoria || !imagem || !descricao) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    const novoCard = {
      id: Date.now(),
      title: titulo,
      categoria: categoria.toUpperCase(),
      description: descricao,
      urlImagem: imagem,
      linkVideo: linkVideo
    };

    console.log('Novo Card a ser adicionado:', novoCard);

    onAdicionarCard(novoCard);
    handleClearForm();
  };

  const handleClearForm = () => {
    setTitulo('');
    setCategoria('');
    setImagem('');
    setLinkVideo('');
    setDescricao('');
  };

  return (
    <div>
      <div className="novo-video">
        <h1>Novo Vídeo</h1>
        <h3>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</h3>
        <h2>Criar Card</h2>
        <form className='novo-video-form' onSubmit={handleSubmit}>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                id='video-titulo'
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
          
            <div className='form-group'>
              <label htmlFor="categoria">Categoria</label>
              <select
                id='categoria'
                name='categoria'
                placeholder='Selecione uma categoria' 
                value={categoria} 
                onChange={(e) => setCategoria(e.target.value)}>
                  <option value="">Selecione uma categoria</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="mobile">Mobile</option>
              </select>
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor="imagem">Imagem</label>           
              <textarea
                id='imagem'
                name='imagem'
                placeholder="Insira o endereço da imagem"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
              />
            </div> 
            <div className='form-group'>
              <label htmlFor="url">Link do Vídeo</label>
              <input
                type="text"
                id="url"
                name="url"
                placeholder="Insira o link do vídeo"
                value={linkVideo}
                onChange={(e) => setLinkVideo(e.target.value)}
              />
            </div>  
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Insira a descrição do vídeo"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />  
          </div>

          <div className='button-group'>  
            <button type="submit" className="btn-guardar">Adicionar</button>
            <button type="reset" className="btn-limpar" onClick={handleClearForm}>Limpar</button>            
          </div> 
        </form>
      </div>      
    </div>    
  );
};

export default NovoVideo;
 