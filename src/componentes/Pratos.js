import './Prato.css'

const Prato = ({nome, descricao, image, preco}) => {
    return (<div className='prato'>
        <div className='image-container'>
            <img src={image} alt={descricao}/>
        </div>
        <div className='conteudo'>
            <p className='nome'>
                <strong>{nome}</strong>
            </p>
            <p className='descricao'>
                {descricao}
            </p>
            <p className='praco'>
                R$ <strong>{preco}</strong>
            </p>
        </div>
    </div>)
}

export default Prato