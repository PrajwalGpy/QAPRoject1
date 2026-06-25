FROM jenkins/agent:jdk21

USER root

# Install Node.js 22
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get update \
    && apt-get install -y nodejs

# Install Playwright
RUN npm install -g @playwright/test

# Install Playwright browsers
RUN npx playwright install --with-deps

USER jenkins