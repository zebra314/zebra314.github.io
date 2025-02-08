FROM ruby:3.1-slim-bullseye AS jekyll

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
FROM jekyll AS jekyll-serve

# on every container start, check if Gemfile exists and warn if it's missing
ENTRYPOINT ["/root/scripts/entrypoint.sh"]

# Start the application
CMD ["bundle", "exec", "jekyll", "serve"]