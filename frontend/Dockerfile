FROM nginx:alpine

# Remove o conteúdo padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do frontend para o diretório de serviço do Nginx
COPY . /usr/share/nginx/html

# O Nginx já roda na porta 80 por padrão, não precisa de CMD