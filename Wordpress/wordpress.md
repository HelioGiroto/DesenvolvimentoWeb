<style> 
/* https://www.w3schools.io/file/markdown-css */ 
h2 { color: #fffcf2; background: #14213d; padding-left: 0.5rem; padding-top: 3px;} 
.direita{ display: block; text-align: right; }
</style>


# Construção de sites em Wordpress e Elementor

- [Wordpress](#wordpress)
- [Elementor](#elementor)
- [Domínio e Hospedagem](#hospedagem)


# WORDPRESS <span id='wordpress'></span>

**ÍNDICE**

[Instalar Wordpress desde cPanel](#instalar)

[Plugins](#plugins)

[Configurações necessárias do Elementor](#configurações-necessárias-do-elementor)

[Elementor(s) PRO grátis](#elementorpro)

[Temas](#temas) 

[Páginas](#paginas) 

[Criar Blog](#blog)

[Configurações iniciais de Layout (CSS geral)](#layout)

[Configurações gerais de data/hora/idioma](#configurar)

[Escolher Cores](#cores)

[Escolher Fontes](#fontes)

[Favicon](#favicon)

[Customizar tema](#customizar)

[Adicionar permissões a pessoas / usuários](#permissoes)

[Backup, Exportação e Importação](#backup)

[Como criar uma área de membros](#areaMembros)

[Converter imagens para Webp](#webp)

[Tutoriais em video para Landing Pages](#landingPage)

---

## Instalar Wordpress desde cPanel <span id='instalar'></span>

 - Ir a cPanel do `site.com:2083`
 - FERRAMENTA
 - Wordpress Manager by Softaculous
 - Install
 - Escolha a URL de instalação = URL do site
 - Em: 'Conta do administrador' > mudar 'Senha do administrador'.
 - Desmarca todas as opções de plugins
 - Idioma = Português
 - Instalar

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>



## Plugins <span id='plugins'></span> 

### Para eliminar os plugins que vêm por padrão

 - Ir a: Plugins > Plugins Instalados = /wp-admin/plugins.php
 - Marque todos 
 - Ações por lote = Eliminar
 - Aplicar


### Para instalar plugins necessários

 - Ir a: Plugins > Instalar novo =  wp-admin/plugin-install.php
 - Instalar essenciais: 
    - Elementor Website Builder
    - Essential Addons for Elementor
    - Simple Custom CSS and JS
    - WPCode – Insert Headers and Footers
    - Loco Translate  (??)
    - All-in-One WP Migration
	- Elementor Header & Footer Builder
	- Custom Fonts de Brainstorm Force
    - Webp express
	- Click to Chat (HoliThemes)
    - UpdraftPlus

Instalar e ativar todos.

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>


## Configurações necessárias do Elementor

 - wp-admin/admin.php?page=elementor#tab-experiments
 - wp-admin
 - Elementor
 - Configurações
 - Recursos
 - Contêiner Flexbox = ativo
 - Menu = ativo
 - Salvar alterações

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>



## Elementor(s) PRO grátis <span id='elementorpro'></span>

 - Baixar pasta zip em https://proelements.org/
 - Ir a Plugins > Adicionar novo (wp-admin/plugin-install.php)
 - Carregar Plugin
 - Sobe pasta zip
 - Ativa o plugin

Para atualizar este plugin: Desinstalar (PRO Elements), baixar nova versão em Elementos, reinstala e ativa.

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>



## Temas <span id='temas'></span>

### Eliminar existente(s):
 - Ir a Apresentação / Aparência > Temas ( /wp-admin/themes.php )
 - Clica sobre o grid do tema
 - Botão 'Excluir'.

### Adicionar novo:
 - Ir a Apresentação / Aparência > Temas ( wp-admin/themes.php )
 - Adicionar novo
 - Pesquisar...

### Instalar tema manualmente (de arquivo .zip):
 - Visitar o site de temas e baixar o preferido: https://br.wordpress.org/themes/
 - Ir a Apresentação / Aparência > Temas ( wp-admin/themes.php )
 - 'Adicionar novo'
 - 'Enviar tema'
 
Fonte: https://www.hostinger.com.br/tutoriais/como-instalar-temas-do-wordpress em "Opção 2 – Como Instalar Temas no  WordPress Manualmente".

*ver tb -> [Customizar tema](#customizar)*.

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>



## Páginas <span id='paginas'></span>

### Eliminar todas as páginas desnecessárias

 - Ir a: 'Páginas > Todas as páginas' = /wp-admin/edit.php?post_type=page
 - Marque todos 
 - Ações por lote = Eliminar
 - Aplicar


### Criar nova página
 - Ir a Páginas > Nova página = /wp-admin/post-new.php?post_type=page
 - Criar nova página chamada inicio
 - Em 'Atributos da página' (coluna direita), escolher Modelo = Elementor Canvas ou "Tela do Elementor" [<sup>(1)<sup>](#modeloPagina).
 - Talvez mudou para: wp-admin > páginas > edição rápida > modelo > Elementor Canvas ou "Tela do Elementor"*

### Definir uma página como Home:
 - Em Wp-admin > Configurações > Leitura > 'Opções > Leitura'
 - Mudar: 'A sua página inicial mostra = Uma página estática'
 - Em 'Página inicial = inicio'
 - Guardar alterações

<span id='modeloPagina'></span><sup>(1)</sup> * Caso não apareça esta opção, depois de criada a página, ir à Páginas > Todas as páginas > Edição rápida na página Inicio > Modelo = Tela do Elementor

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>


## Criar blog <span id='blog'></span>

 - Cria uma página chamada **blog**: Em Páginas > Nova Página
 - Em 'Opções > Leitura'
 - Mudar (caso já não esteja): 'A sua página inicial mostra = Uma página estática'
 - Em 'Página de artigos/posts' = Definir qual será a URL do blog.
 - Guardar alterações

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span> 


## Configurações iniciais de Layout (CSS geral)<span id='layout'></span>

### Cor e paddings:

 - Edita uma página com Elementor
 - Menú hamburguer (Sup. esq.)
 - Site Settings 	// Configurações do site
	 - **Layout**
	 	- Largura - Normalmente 1140 px.
	 	- Preenchimento (padding) do contêiner = 0 px (tudo).
	 	- Espaçamento = 0px (entre caixas, divs)
	 	- Layout de página padrão = Tela do Elementor.

    - **Background** (Cor geral):
	 	- Tipo de Plano de Fundo
	 	- Cor = Define...

### Trocar a cor padrão do (plano de) fundo de _uma_ página:

 - Edita uma página com Elementor
 - Ícone de Rondana
 - Estilo (aba)
 - Estilo do Corpo
 - Tipo de plano de fundo > Cor = define...

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span> 


## Configurações gerais de data/hora/idioma <span id='configurar'></span>

### Mudar hora e data
 - Ir a: Opções/Configurações > Geral = /wp-admin/options-general.php
 	- Mudar 'Título do Site' e 'Descrição', como tb o Ícone (favicon).
 - Altera as configurações de 'Fuso horário', 'Formato de data', 'Formato de hora'.
 	- Fuso de SP = UTC-3
 	- Data (personalizada) = j \d\e F \d\e Y.
 	- Hora = H:i
 	- Semana começa em = Domingo.
 - Guardar/Salvar alterações.
 
### Mudar idioma
 - Ir a Configurações > Geral > Idioma do site = /wp-admin/options-general.php
 - Português **do Brasil**.
 - Guardar/Salvar alterações.

### Opções de links
 - Ir a: Opções/Configurações > Ligações permanentes = /wp-admin/options-permalink.php
 - Mudar para: 'Estrutura das ligações permanentes = Nome do artigo/post'
 - Guardar/Salvar alterações.


### Mudar opções de Leitura
*(Para definir qual será a página Home e a de Blog)*
 - Ir a: Opções/Configurações > Leitura ( /wp-admin/options-reading.php )
 - Mudar para: 'A página inicial mostra: (x) Uma página estática'
 - Escolher a página Home e de Blog (que já devem ter sido criadas).
 - Definir quantos posts aparecem em cada página do blog.
 - Se aparece inicialmente como 'Resumo' (indicado) ou 'Texto Completo'.
 - "Visibilidade nos motores de busca" = opção desmarcada para 'Evitar...'
	 (**Importante** se quer indexar no Google.)
 - Guardar/Salvar alterações.
 
<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>


## Escolher Cores <span id='cores'></span>

Se refere às cores padrão de preferência que sempre aparecem ao escolher a cor de uma fonte, div, background, margin, etc... 

*Sobre cores de pano de fundo ver em [layout](#layout).*

### Ver ideias de cores em:
https://coolors.co/palettes/trending

https://color.adobe.com/pt/trends

### Para editar: 
 - Edita uma página com Elementor
 - Menú hamburguer (Sup. esq.)
 - Site Settings 	// Configurações do site
 - Global colors 	// Cores globais
 - Global Fonts		// Fontes globais (nessa mesma página de configuração).

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>



## Escolher Fontes <span id='fontes'></span>

*Google fonts:* https://fonts.google.com/specimen/Jost?query=jost

### Para definir as fontes-padrão: 
 - Edita uma página com Elementor
 - Menú hamburguer (Sup. esq.)
 - Site Settings
 - Tipografia
 - Muda fontes
 - Atualizar (Botão)

(ver tb onde muda as Cores...)

### Subir arquivo ttf de fontes próprias:
 - Instalar e ativar o **plugin**: 'Custom Fonts de Brainstorm Force'.
 - Ir a Aparência > Custom Fonts ( /wp-admin/themes.php?page=bsf-custom-fonts )

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>


## Favicon <span id='favicon'></span>

Para editar: 
 - Edite uma página com Elementor
 - Menú hamburguer (Sup. esq.)
 - Site Settings // Configurações do Site
 - Site Identity // Identidade do Site
 - Site Favicon  // Favicon do Site
 - Subir imagem 512 X 512 
 - Actualizar 

 <span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>



## Customizar tema <span id='customizar'></span>
*Normalmente não é preciso se o site todo é feito em Elementor puro (a partir de tela branca).*

### Alterar as configurações do tema ativo:
 - Aparência > Personalizar
 - Ou acessar ao link direto ( wp-admin/customize.php )

### Alterar o CSS do tema ativo:
 - Acesse o link direto ( wp-admin/theme-editor.php ) 
 - Ou pelo caminho: Aparência > Editor de arquivos de tema.
 - Altere as propriedades CSS do tema ativo.


<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>


## Adicionar permissões a pessoas / usuários <span id='permissoes'></span>
(*Essencial para delegar editor de blog ou de catálogo de produtos.*)

 - Ir a Utilizadores / Usuários > Adicionar novo ( wp-admin/user-new.php )
 - Preencher com dados (nome, email, senha) e principalmente a *Função* do novo usuário do site.
 
*Para informações detalhadas sobre cada função (rol) de usuário, consultar a https://wordpress.com/pt-br/support/funcoes-de-usuarios*

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>


## Backup/Restore do site Wordpress <span id='backup'></span> 

### Para fazer o backup:
*(Cria um backup 'perfeito' de todo o site:)*
 - wp-admin > All-in-one WP Migration (barra esquerda) > Exportar

### Para recuperar:
 - wp-admin > All-in-one WP Migration (barra esquerda) > Importar
 
(ver:  https://www.youtube.com/watch?v=NEldlxVx88k)


**ERRO na recuperação (importação) - fica em 100% e não sai disso.**
 - Causa: Versão da extensão com erro. 
 - Solução: Baixar um *downgrade* e não atualizar.
 	(i. é, desativa e desinstala o plugin. E instala pelo zip baixado no site abaixo - a versão downgrade).
 - baixar em: https://www.morcegodigital.com.br/baixar-programas/
	(baixa o all-in-one-wp-migration...zip).

(Ver video: https://www.youtube.com/watch?v=KHA91GRWqfA)


### Exportar conteúdo do site
*(Não gera uma cópia perfeita, mas cria um XML com todos os seus posts, páginas, comentários, campos personalizados, termos, menus e posts personalizados.)*
 
*Muito útil para exportar o conteúdo de um blog. 

 - Ferramentas
 - Exportar
 - Selecione o conteúdo desejado (Todo ?)
 - Download do arquivo de exportação.


### Importando conteúdo de outro site/blog:
(*Para importar conteúdo do Blogger, Tumblr, um RSS, ou outro WP (blog, p.ex.):*)
 - Ferramentas
 - Importar
 - Selecionar serviço em 'Instalar importador'

*(O importador instalado fica em Plugins > Plugins Instalados)*
 
<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>


## Como criar área de membros <span id='areaMembros'></span> 

WordPress: Como criar uma ÁREA DE MEMBROS com ASSINATURA PAGA

(Conteúdo exclusivo para assinantes):

https://www.youtube.com/watch?v=n_5z4MKUPYc

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>


## Converter imagens para Webp <span id='webp'></span> 

Plugin -> *Webp express*

Painel > Configurações > WebP Express > Ativa (marca opção) "Alter HTML" + Bulk Convert > Start Conversion > (depois de processado) > Save Settings (bt azul sup. direito) + bt? "Save settings and force new .htaccess rules"

Após isso, limpa o cache novamente.

Fonte: https://www.youtube.com/watch?v=KKtYgwdtfNU

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>


## Tutoriais para criação de Landing pages: <span id='landingPage'></span> 

As fontes consultadas foram:
 - https://www.youtube.com/watch?v=KlSbLS8hF8A
 - https://www.youtube.com/watch?v=7c2i4LF4mkc
 - https://www.youtube.com/watch?v=ZekMsDh7fec
 - https://www.youtube.com/watch?v=3vSDLPgTxZo
 - https://www.youtube.com/watch?v=vFaiytBdyH8
 - https://www.youtube.com/watch?v=Qw1lQC1H99E
 - https://www.w3schools.io/file/markdown-super-sub-script/
 - https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/markdown.html?lang=pt-BR

<span class='direita'>[Voltar ao índice - Wordpress](#wordpress)</span>

---

# ELEMENTOR <span id='elementor'></span> 

**ÍNDICE**


[Definições do site - Configurando Layout](#layoutElementor)

[Mudar o tema padrão para Canvas](#mudarTemaPadrao)

[Criar div 100% de altura com imagem de fundo](#div100Altura)

[Criar faixa / banner de largura completa](#faixa100Largura)

[Tirar a barra de rolagem - eixo X](#barraX)

[Responsividade](#responsividade)

[Criar Template / Modelo para Elementor](#template)

[Criando rodapé](#rodape)

[Criar menú e rodapé](#menuRodape)

[Criar blog para site já feito com Elementor Free](#blogSiteFeito)

---

## Definições do site - Site Settings - Configurando Layout <span id="layoutElementor"></span>
 (ver [Layouts](#layout))
 - Zerar os paddings e margins:
 - Site settings (botão superior esquerdo tipo hamburguer com botões - ao lado direito de "+")
 - Layout
 - Preenchimento do contêiner
 - Tudo = 0%
 - Save changes

<span class='direita'>[voltar ao índice - elementor](#elementor)</span>


## mudar o tema padrão para canvas <span id='mudarTemaPadrao'></span>
 - Editar uma página com Elementor
 - Site Settings (Botão superior esquerdo tipo hamburguer com botões - ao lado direito de "+")
 - Layout
 - Default Page Layout = "Elementor Canvas" ou "Tela do Elementor"
 - Save changes

<span class='direita'>[Voltar ao índice - Elementor](#elementor)</span>


## Criar div 100% de altura com imagem de fundo <span id='div100Altura'></span> 
 - Editar uma página com Elementor
 - 6 pontinhos
 - Layout
 - Altura mínima = 100 vh
 - Estilo
 - Tipo de plano de fundo = pincel
 - Escolhe a imagem
	 - Posição = personalizado ? ou outras
 - Repetir - Não repetir
 
<span class='direita'>[Voltar ao índice - Elementor](#elementor)</span>


## Criar container tipo faixa/banner largura completa <span id='faixa100Largura'></span>
 - Adiciona novo container (direção horizontal / flecha para baixo)
 - Avançado (icone de rondana)
 - Margens e Preenchimento (paddding) = zerado total
 - Layout (icone de quadrado dividido em dois)
 - Direção = \[Flecha para baixo]
 - conteiner > Largura do conteudo = Largura total ou Em caixa (decidir)
 - itens > justificar conteúdo = center // alinhar itens = center
 - Estilo (icone de círculo dividido no meio)
 - Plano de Fundo > Tipo de plano de fundo > pincel 

<span class='direita'>[Voltar ao índice - Elementor](#elementor)</span>



## Tirar a barra de rolagem (eixo X, horizontal): <span id='barraX'></span>
 - Layout
 - conteiner
 - Largura do conteúdo = em caixa

 Ou: Acrescentar um código CSS onde define `overflow: hidden;` dentro da div que transborda o conteúdo. 
 
<span class='direita'>[Voltar ao índice - Elementor](#elementor)</span>


## Responsividade <span id='responsividade'></span>

**O que se pode mudar sem alterar para outros dispositivos**
 - O tamanho das FONTES e posicionamento pode alterar variando com o tipo de dispositivo
 	(Isso não altera os tamanhos e posições dos demais dispositivos)
 - As posições das IMAGENS podem ser mudadas 
 	(que não se altera a visualização no outro dispositivo)

**O que NÃO se pode mudar sem alterar para outros dispositivos**
 - O tipo de FONTE (e seu *peso*) também não se podem alterar mas criar 2
 - Porém o *tamanho* das IMAGENS não se pode mexer, mas sim criar duas imagens.
 	(Uma usada para certo dispositivo e oculta para os demais e vice-versa).

*Fonte: https://elementor.com/help/how-to-change-background-image/*

**Media Queries**
 - Exemplo de CSS

Para celulares (até 600 pixels de largura, assume estes valores, 601 já assume valor anterior):

```css
#divID {
	width: 33%;
}

@media only screen and (max-width: 600px) {
    #divID {
        width: 100%;
	}
}
 ```

<span class='direita'>[Voltar ao índice - Elementor](#elementor)</span>


## Criar Template/Modelos para Elementor <span id='template'></span>

Modo mais fácil:
 - Ao editar uma página
 - Seleciona uma seção 
 - Clica nos 6 pontinhos
 - Botão direito do mouse
 - "Guardar como modelo"
 - Define o nome

Ficará em:
 - Templates > Modelos Guardados

 - Ir a 'Templates' > Adicionar Novo = (/wp-admin/edit.php?post_type=elementor_library&tabs_group=library)
 - Escolher se é Header ou Footer, etc...
 - **Não** escolha instâncias


<span class='direita'>[Voltar ao índice - Elementor](#elementor)</span>


## Criando rodapé <span id='rodape'></span>
 - wp-admin
 - Modelos
 - Adicionar novo modelo
 - Opção = Footer (pode ser um container tb) + nome
 - Criar modelo
 
ou:

 - Cria e edita o container da maneira preferencial
 - Clica botão direito nos 6 pontinhos do container (no editor Elementor)
 - Salvar como modelo.
 
*Telefone com ramal - https://blog.hubspot.com/website/html-telephone-link
 	<a href="tel:6031112298p000"></span>*

<span class='direita'>[Voltar ao índice - Elementor](#elementor)</span>


## Criar menú e rodapé <span id='menuRodape'></span>

*Criar o modelo:*
- Instalar e ativar plugin novo -> Elementor Header & Footer Builder (Por Brainstorm Force, Nikhil Chavan)
- wp-admin > Aparência > Elementor Header & Footer
- Adicionar novo
- Dar nome a este menú
- Em "Elementor Header & Footer Builder" > Tipo de modelo = Cabeçalho ou Rodapé
- Em Display On = Entire Website
**(Para ocultá-lo na primeira página, p. ex:)**
- Botão Add Exclusion Rule
- En Do not display = Specific Pages/Posts/Taxonomies > colocar nome da página que vai excluir (ex.: home)
- Marcar caixa em "Ativar o layout no modelo Canvas do Elementor?"
- Em "Atributos do Post" > Modelo = Tela do Elementor.
- Botão atualizar ou publicar.

OBS.: Em Páginas, ver se todas estão como modelo: "Tela do Elementor", ou seja, que esteja igual ao mesmo tipo de modelo definido em "Aparência" > "Elementor Header & Footer Builder". 

*Editar modelo no Elementor*
- Criar como qualquer container ou colar de outro site (Ctrl + Shift + V).
- Pode duplicar o container e o primeiro deixar para Desktop e o outro para Mobile, em:
	- Clica no container > Avançado (Rondana) > Responsivo
- Para editar de modo responsivo (Mobile, por ex.) tem que estar "Modo responsivo" (botão ao lado de "desfazer" - coluna esquerda, inferior).
- Para posicionar melhor o botão Hamburguer: 
	- Clica no elemento dentro do containet, i. é: no botão.
	- Avançado > Posição = Absoluto
	- Em Deslocamento Horizontal e Vertical = mudar a % até ajustá-lo.

<span class='direita'>[Voltar ao índice - Elementor](#elementor)</span>


## Criar blog para site já feito com Elementor Free <span id='blogSiteFeito'></span>
- Desnecessário abaixo:
	- Cria uma página que servirá de home do blog:
	- Estabelece esta página como de blog: Configurações > Leitura > Em "Sua página inicial exibe" > Página de Posts = nome da página criada (acima) > Salvar 	alterações (botão)
	- Aparência > Temas \[ > Elementor Header and Footer]

**(Atualizado):**

- Cria uma página normal 
- Edita com Elementor
- Agrega um widget chamado: Grade de Posts (do plugin Essential Addons for Elementor)
- Edita o elemento acima... 

*FONTE: https://www.youtube.com/playlist?list=PLqFFYhp2jiyaa0xWIAVmrt8D_tXMBHj_y*

Ver tb: 

- https://www.youtube.com/watch?v=xhBiFIFFano
- https://www.youtube.com/watch?v=Qw1lQC1H99E&t=303s
- https://www.youtube.com/results?search_query=blog++wordpress+elementor+free+
- https://www.youtube.com/watch?v=IdHPv1Wa6oM
- https://faculdadebetel.edu.br/wp-admin/edit.php

<span class='direita'>[Voltar ao índice - Elementor](#elementor)</span>


---


# DOMINIOS E HOSPEDAGEM <span id='hospedagem'></span>

**ÍNDICE**

[Instalar o Wordpress em novo dominio no cPanel](#instalarWP)

[Hospedar um domínio em outra conta Hostgator de Plano M](#hospedarNoutra)

[Migrar de um serviço de hospedagem a outro](#migrarDominio)

[Ativar SSL para site](#ssl)

[Criar novo Sub-Dominio desde o cPanel novo (Jupiter)](#subdominio)

[Criar contas de email na Hostgator](#email)

[Instalação de WP e ativação de SSL na Locaweb](#locaweb)

[Instalação de Wordpress na KingHost](#kinghost)

---

## Instalar o Wordpress em novo dominio no cPanel <span id='instalarWP'></span>
 - cPanel > Software > Wordpress Manager By Softculous
 - Botão Azul Install
 - Em Configuração > Escolha a URL de instalação = Selecione o outro dominio
 - Alterar a senha do administrador 
 - Nome e descrição do site
 - Desmarcar todos os plugins.

<span class='direita'>[Voltar ao índice - Hospedagem](#hospedagem)</span>


## Hospedar um domínio em outra conta Hostgator de Plano M <span id='hospedarNoutra'></span>

Para hospedar um domínio comprado em Hostgator em outra conta (**de Hostgator também**), seguir estes passos:

### 1) Conta Origem - Que comprou o(s) domínio(s)
*(Conta Hostgator do cliente que comprou o domínio)*

- Acesse portal do Cliente no Hostgator
- Domínios  (https://cliente.hostgator.com.br/dominios)
- Busque o nome do domínio em questão e clica em "Gerenciar"
- Na seção "Servidores DNS", clique em "Configurar domínio"
- Em "Escolha a plataforma de site:", escolha "Hostgator"
- Coloque o endereço DNS* destino, i. é, onde o domínio será hospedado.

*(Se não souber o endereço DNS, seguir [estes passos](#enderecoDNS))

Aguardar 4h para **propagar**, e então, adicionar os novos domínios no cPanel destino.

Fonte: https://suporte.hostgator.com.br/hc/pt-br/articles/115000497973-Como-configurar-o-dom%C3%ADnio-alterar-DNS#HostGator


### Para encontrar o endereço DNS da hospedagem <span id='enderecoDNS'></span>

(De conta Hostgator que possui o Plano M de hospedagem)

- Acessa portal Hostgator do Cliente que hospedará o domínio.
- Hospedagens e Servidores  (https://cliente.hostgator.com.br/produtos)
- Clicar em Plano M -> "Gerenciar"
- Aparecerá dois URLs do tipo: ns123.hostgator.com.br, etc.
- Copia para colá-lo na conta origem (de onde vem o domínio comprado). 

FONTE: https://suporte.hostgator.com.br/hc/pt-br/articles/115004894674-Qual-%C3%A9-o-DNS-da-hospedagem


### 2) Adicionar o domínio na hospedagem - conta destino:

Após configurar na conta origem (do domínio comprado) o endereço DNS de destino, é necessário que se configure o cPanel da hospedagem conforme a seguir:

- Acessar o **Cpanel** de onde se hospedará o novo domínio:
- Clique em "Domínios".
- Create a New Domain.
- Adicione o nome do domínio - (sem o www)
- Desmarcar caixa "Share Document Root".
- Clique em Enviar.

Fonte: https://suporte.hostgator.com.br/hc/pt-br/articles/115000389314-Como-adicionar-um-dom%C3%ADnio-na-hospedagem


*Se o domínio comprado foi por meio de outra empresa (não Hostgator BR), seguir este tutorial: 
https://suporte.hostgator.com.br/hc/pt-br/articles/6597512530331-Como-configurar-o-dom%C3%ADnio-alterar-DNS-em-outro-provedor-Registro-br-UOL-Host-GoDaddy-Locaweb-KingHost


Para verificar se o DNS foi devidamente apontado para a hospedagem indicada, visitar o site da Registro BR:
https://suporte.hostgator.com.br/hc/pt-br/articles/360052823753-Como-saber-se-o-DNS-est%C3%A1-apontando-corretamente


### Tempo de propagação:

Após configurar aguarde o período de propagação, que poderá levar até 24 horas para domínios nacionais (com a extensão “.br”) e até 72 horas para domínios internacionais (todas as demais extensões, por exemplo, “.com”, “.online”, “.net”), depois desse prazo o site ficará online.

<span class='direita'>[Voltar ao índice - Hospedagem](#hospedagem)</span>



## Migrar de um serviço de hospedagem a outro: <span id='migrarDominio'></span>

Ver: 

Como configurar o domínio (alterar DNS) em outro provedor (Registro.br, UOL Host, GoDaddy, Locaweb, KingHost)

https://suporte.hostgator.com.br/hc/pt-br/articles/30811169438099-Como-configurar-o-dom%C3%ADnio-alterar-DNS-em-outro-provedor-Registro-br-UOL-Host-GoDaddy-Locaweb-KingHost


Outro provedor:

(https://hpanel.hostinger.com/domain/site.com.br/dns)

1. Acesse o painel do seu outro provedor de hospedagem

2. No domínio que deseja configurar (alterar DNS) para o seu plano aqui da HostGator, busque por “Alterar DNS ou Alterar Servidores” - se não achar, contate o suporte desse provedor

3. Na parte onde pede que você altere os “DNS / Servidores”, coloque os DNS do seu plano de hospedagem aqui da HostGator - Se necessário, veja como localizar - https://suporte.hostgator.com.br/hc/pt-br/articles/30811979815571 (abaixo):


### Como descobrir o endereco de DNS da Hostgator:
https://suporte.hostgator.com.br/hc/pt-br/articles/30811979815571-Qual-%C3%A9-o-DNS-da-hospedagem

- Painel de Cliente:
- Hospedagens e servidores
(https://cliente.hostgator.com.br/produtos)
- Gerenciar
- Ver informações em "DNS" (nsXXX.hostgator.com.br / nsXXX.hostgator.com.br)

---

*(Por exemplo: De GoDaddy para Hostgator)*

https://suporte.hostgator.com.br/hc/pt-br/articles/115000391054-Como-solicitar-a-migra%C3%A7%C3%A3o-da-hospedagem#externa

https://suporte.hostgator.com.br/hc/pt-br/articles/115000389134-Como-escolher-ou-alterar-o-provedor-do-dom%C3%ADnio-no-RegistroBR-para-transferir-para-a-HostGator

(OBS.: Alguns domínios como **.edu.br** é mais vantajoso que **não** se transfira de Registro BR para Hostgator, já que não pagam renovação enquanto permanecem em RegistroBR.)

https://suporte.hostgator.com.br/hc/pt-br/articles/115001894134-Como-transferir-um-dom%C3%ADnio-para-a-HostGator#nacional

https://suporte.hostgator.com.br/hc/pt-br/articles/115000389314-Como-adicionar-um-dom%C3%ADnio-na-hospedagem#cPanel

https://suporte.hostgator.com.br/hc/pt-br/articles/115004894674-Qual-%C3%A9-o-DNS-da-hospedagem

<span class='direita'>[Voltar ao índice - Hospedagem](#hospedagem)</span>



## Ativar SSL para site: <span id='ssl'></span>

Caso seu domínio já esteja configurado corretamente (alterado DNS) e propagado, não é necessária nenhuma ação da sua parte. Ele é instalado automaticamente em até 24 horas após essa configuração. Porém...

https://suporte.hostgator.com.br/hc/pt-br/articles/115001963913-Ativa%C3%A7%C3%A3o-do-Certificado-SSL-gratuito-na-Hospedagem

<span class='direita'>[Voltar ao índice - Hospedagem](#hospedagem)</span>



## Criar novo Sub-Dominio desde o cPanel novo (Jupiter) <span id='subdominio'></span>
 - cPanel > Dominios > Bt azul: "Create a New Domain" > Enter the domain that you would like to create = nome do Subdominio > Enviar

Ver -> https://www.youtube.com/watch?v=VwQWqqprWaM

<span class='direita'>[Voltar ao índice - Hospedagem](#hospedagem)</span>


 
## Criar contas de email na Hostgator <span id='email'></span>

_Antes_: Caso o Hostgator não tenha feito este procedimento automaticamente, seguir o passo-a-passo em "Configurar os registros DNS do email:" (abaixo) para criar os registros MX e TXT do email.

**Primeiro: Define a Plataforma de Email (Titan):**

 - Painel do Cliente da Hostgator
 - Emails
 - Definir Plataforma de Email
 - Ativar Titan Básico (1G por conta)
 - Continuar
 - Adicionar Conta de Emails 
 
**Segundo: Cria a(s) conta(s):**

 - Painel do Cliente
 - Emails
 - Gerenciar Emails
 - Contas de Email (quadrado)
 - Criar nova conta de email
 - endereço, senha, etc...
 
Acesso por: https://titan.hostgator.com.br/login


### Como configurar os registros DNS do email no Hostgator:

**Editar/Criar novos registros tipo MX (2) e editar o TXT (1) tb**

- cPanel > Dominios > Zone Editor
- Gerenciar
- MX
- Segue o passo-a-passo abaixo:
- Click on Add record and enter the below values (OMIT THE QUOTES):
    - Type: "MX"
    - Name: "Your domain name" - dominio
    - TTL: "3600"
    - Priority: "10"
    - Destiny: "mx1.titan.email"

- Similarly, add another MX record with the below values (OMIT THE QUOTES):
    - Type: "MX"
    - Name: "Your domain name"
    - TTL: "3600"
    - Priority: "20"
    - Destiny: "mx2.titan.email"

- Similarly, select Add record again and then add the below TXT/SPF record (OMIT THE QUOTES):
    - Type: "TXT"
    - Name: "@"
    - Text: "v=spf1 include:spf.titan.email ~all"
    - TTL: "3600"

- Uma vez feito estas adições no cPanel...
- Volta no Painel de Cliente do Hostgator
- Emails > Conectar > Rola página até o final = Marcar: "Adicionei Titan registros MX e TXT no meu painel de controle DNS..."

Fontes: 
    https://support.titan.email/hc/en-us/articles/900005560306-Setup-Titan-MX-and-TXT-records-for-HostGator
    https://support.titan.email/hc/article_attachments/900007612046
    https://cliente.hostgator.com.br/emails-list/criar-primeira-conta-e-mail/site.com.br



### Configurar o Titan Gratuito e criar emails:
https://suporte.hostgator.com.br/hc/pt-br/articles/115000742534-Como-criar-uma-conta-de-e-mail-cPanel

https://suporte.hostgator.com.br/hc/pt-br/articles/360002631274-Como-criar-uma-conta-de-e-mail
 




### Mudar a senha dos emails: 
 - https://cliente.hostgator.com.br/emails-list/gerenciar/site.com.br
 - Contas de email
 - 3 pontinhos
 - Redefinir senha

<span class='direita'>[Voltar ao índice - Hospedagem](#hospedagem)</span>

---

## Instalação de Wordpress e ativação de SSL na LocaWeb <span id='locaweb'></span>

Solicitar por Whatsapp (+55 11 3544-0550) a ativação do SSL.

### Loga na LOCAWEB:
 - https://painelhospedagem.locaweb.com.br


### 1. Cria um banco de dados:
Fonte: https://www.locaweb.com.br/ajuda/wiki/como-instalar-um-banco-de-dados-hospedagem-de-sites/

Acesso: https://painelhospedagem.locaweb.com.br/databases/72076680


### 2. Ativa o WP

Fonte: https://ajuda.locaweb.com.br/wiki/como-instalar-um-site-wordpress-locaweb/
	
- site = administrar
- Instalar Wordpress = Ativar Agora

Mensagem que retorna: "Normalmente, a ativação leva apenas alguns minutos.
Caso você não receba um email em até 1 hora com a confirmação, entre em contato conosco através de um dos canais de atendimento."

- Prontinho, o Wordpress já está instalado! O Sr só precisa realizar as configurações de usuário em:

`http://site.com.br/wp-admin/setup-config.php`
	
OBS.: Veja que servidor do banco está errado, não seria o localhost, coloca o Servidor do seu banco: `bgr_distrib.mysql.dbaas.com.br`.

### 3. SSL: 
Fonte: https://www.locaweb.com.br/ajuda/wiki/como-emitir-certificados-alpha-e-wildcard-ssl-locaweb

Passo a passo:
 - https://painelssl.locaweb.com.br/
 - Clico em EMITIR (na opção nro. 1) 
 - país + cidade + uf
 - verificar


*SSL Let's Encrypt*

Caso tenha vencido o SSL do 1o. ano gratuito, se pode contratar um plano pago ou a cada 3 meses solicitar o SSL gratuito pelo Let's Encrypt:
 - Ir a https://painelhospedagem.locaweb.com.br/dashboard/71689295
 - Ou pelo Painel de Controle do LocaWeb em: Central do Cliente (https://centraldocliente.locaweb.com.br/) >
 - Hospedagem de sites
 - Seleciona o site em "Administrar"
 - Na coluna direita em "Certificado SSL" mudar de "Não Possui" para "Emitir Let's Encrypt"
 - Terminado.
 - Aguardar 24 horas. 

 Fonte: https://www.locaweb.com.br/ajuda/wiki/como-emitir-o-certificado-lets-encrypt-hospedagem-de-sites/


## Instalação de Wordpress na KingHost <span id='kinghost'></span>

**Para instalar o wordpress no KingHost:**
https://king.host/blog/tutoriais/como-instalar-o-wordpress/

### Instala o banco de dados:
- Acessa o painel do cliente em KingHost
- Em: "Acesse as configurações de um domínio"
- Seleciona o domínio
- Gerenciar (bt)
- Desce até "Banco de Dados"
- Gerenciar banco de dados MySQL
- Novo Banco de Dados
- Digita Senha (Somente letras + Números > 6)
- Salva e sai

### Instala o Wordpress:
- Volta ao painel em "Ferramentas"
- Instalador Automático
- Em Wordpress clica em "Configurar"
- Pronto
- Agora abre o email (geralmente o mesmo do cliente KingHost)
- Obtem as informações de usuário e penha do wp-admin

### Atualizar o PHP pelo KingHost

(Em casos que o Elementor não aceita instalar sem upgrade do PHP)

- Acessar o Painel de Controle da hospedagem
- Em: "Acesse as configurações de um domínio" - selecionar domínio
- Gerenciar (botão)
- Procurar opção com ícones: "Configuração PHP" - entrar
- Em versão PHP, escolher a versão mínima necessária que requer o Elementor


