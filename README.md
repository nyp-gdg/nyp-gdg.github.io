# Website

The official website for the Google Developer Group in NYP.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org)
- [pnpm](https://pnpm.io)
- [Docker Desktop](https://docker.com/products/docker-desktop)

### Local Setup

1. Clone repository: `git clone https://github.com/nyp-gdg/website`
2. Install dependencies: `pnpm install`
3. Start server: `pnpm dev`

### Container Setup

1. Clone repository: `git clone https://github.com/nyp-gdg/website`
2. Build image: `docker build -t gdg .`
3. Start container: `docker run -p 8080:8080 gdg`

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
