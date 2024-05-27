FROM ruby:3.1-slim-bullseye as jekyll

# # Specify terminal color
# ENV TERM xterm-256color

# # Install nvim
# RUN apt-get update && apt-get install -y neovim

# # Install zsh
# RUN apt-get update && apt-get install -y zsh
# RUN chsh -s $(which zsh)

# # Install oh-my-zsh
# RUN apt-get update && apt-get install -y curl
# RUN apt-get update && apt-get install -y git
# RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# # Install p10k
# RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
# RUN sed -i 's/ZSH_THEME="robbyrussell"/ZSH_THEME="powerlevel10k\/powerlevel10k"/g' ~/.zshrc
# COPY docker_scripts/.p10k.zsh /root/.p10k.zsh
# COPY docker_scripts/.zshrc /root/.zshrc

# # Install multiple zsh plugins  
# # 1. zsh-autosuggestions
# # 2. zsh-syntax-highlighting
# RUN git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
# RUN git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
# RUN sed -i 's/plugins=(git)/plugins=(git zsh-autosuggestions zsh-syntax-highlighting)/g' ~/.zshrc

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

COPY docker_scripts/docker-entrypoint.sh /root/scripts/entrypoint.sh
RUN chmod +x /root/scripts/entrypoint.sh

RUN gem update --system && gem install jekyll && gem cleanup

EXPOSE 4000

WORKDIR /site

COPY Gemfile /site/Gemfile

# build from the image we just built with different metadata
FROM jekyll as jekyll-serve

# on every container start, check if Gemfile exists and warn if it's missing
ENTRYPOINT ["/root/scripts/entrypoint.sh"]

# Start the application
CMD ["bundle", "exec", "jekyll", "serve"]