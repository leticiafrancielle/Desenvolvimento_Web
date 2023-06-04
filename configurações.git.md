# GIT - Configurações

### Inicializar repositório
    -Comandos 
        git init 


### Configurar usuário 
    - Comandos 
        git config --global user.name "nome sobrenome"
        fit config --global user.email "pessoa@gmail.com"


### Baixar o repositorio no github
    - Comandos 
        git clone link-repositorio


### Adicionar e subir alterações no repositorio
    - Comandos  
        git add .   |   prepara arquivos para serem subidos no repositório 
        git commit -m "message"   |   adiciona mensagem
        git commit -am "message"  |   adiciona os arquivos e adiciona mensagem
        git push   |   sobe arquivos no repositório
        git pull | atualiza repositório local


### Criar branch e mudar de branch 
    - Comandos 
        git branch nome-da-branch   |  cria uma branch 
        git checkout nome-da-branch |  muda de branch 
        git branch -a  |  lista todas as branches
        git checkout -b nome-da-branch  |  cria uma branch e troca para branch copiada 
        git branch -d nome-da-branch | apaga uma branch 