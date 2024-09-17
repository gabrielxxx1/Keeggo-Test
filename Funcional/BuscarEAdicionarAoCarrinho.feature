Funcionalidade: Buscar produto, incluir no carrinho e validar no checkout

    Como usuário do Advantage Online Shopping
    Eu quero buscar produtos, adicioná-los ao carrinho e validar minha compra
    Para que eu possa adquirir produtos com sucesso

    Contexto:
        Dado que estou na página inicial do Advantage Online Shopping

    # Cenário genérico para abrangir mais
    @BuscaDeProduto
    Cenário: Realizar a busca de um produto existente
        Quando eu pesquiso por "laptop"
        Então devo ver uma lista de produtos relacionados a "laptop"
        E cada produto exibido deve conter "laptop" no nome ou descrição

    @BuscaDeProduto
    Cenário: Realizar a busca de um produto inexistente
        Quando eu pesquiso por "produtoInexistente123"
        Então devo ver uma mensagem informando que nenhum resultado foi encontrado

    @AdicionarAoCarrinho
    Cenário: Incluir um produto no carrinho a partir da página de detalhes do produto
        Dado que pesquisei por "headphones"
        E os resultados foram exibidos
        Quando eu clico no primeiro produto da lista
        E estou na página de detalhes do produto
        E seleciono a quantidade "1"
        E adiciono o produto ao carrinho
        Então o produto deve ser adicionado ao carrinho com sucesso
        E deve abrir os detalhes do carrinho
        E o ícone do carrinho deve exibir a quantidade atualizada

    @ValidarCheckout
    Cenário: Validar os produtos incluídos no carrinho na tela de pagamento
        Dado que adicionei os seguintes produtos ao carrinho:
            | Produto                              | Cor   | Quantidade | Preço Unitário |
            | "HP H2310 IN-EAR HEADSET"            | Preto | 1          | $13.99         |
            | "HP ZBOOK 17 G2 MOBILE WORKSTATION"  | Preto | 1          | $1,799.00      |
        E estou na página inicial do Advantage Online Shopping
        Quando coloco o mouse sobre o ícone do carrinho
        E clico no botão "Checkout" nos detalhes do carrinho
        Então sou direcionado à página de pagamento
        E devo ver os produtos no carrinho com as seguintes informações:
            | Produto                              | Cor   | Quantidade | Preço Unitário | Subtotal     |
            | "HP H2310 IN-EAR HEADSET"            | Preto | 1          | $13.99         | $13.99       |
            | "HP ZBOOK 17 G2 MOBILE WORKSTATION"  | Preto | 1          | $1,799.00      | $1,799.00    |
        E é possível editar ou remover cada produto
        E o total da compra deve ser $1,812.99