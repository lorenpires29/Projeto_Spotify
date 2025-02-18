import React from "react";

const App2 = () => {
    return <div>App2</div>
};

export defaultApp2;

//rafce

//Arrow Fução ==> FUNÇAÕ DE SETA
// const App2 = () => <h1>Olá, mundo!!</h1>;

// PascalCase
// Nomeação de componente

// camelCase
//Nomeação de Variavel, função..;

// export default, posso importar com qualquer nome sem chave
// export "sem default", só posso importar entre chaves e com nome exportado


// Self closing tag
// <Header></Header>
// <Header/>


//Nomeação de classes em CSS
//Metodologia BEM
//Blocks
//Elements
//Modifiers
//bloco__elemento--modificador
//header
//header__link
//header__link--small


//Nomes compostos sao separados por -

//Tag vazia em React se chama Fregment 


//Componentes recebem "props"


/*{items === 5 ? (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        ) : (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        )}*/

/* {Array(items)
          .fill()
          .map((currentValue, index) => (
            <SingleItem key={`${title}-${index}`} />
          ))}*/