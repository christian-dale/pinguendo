Pinguendo pings your website quickly and easily. This is a simple Cloudflare Workers service that pings your website 5 every minutes. It's a simple way to keep your website alive and prevent it from going to sleep.

Ping! 🏓 Pong! 🏓

## Configuration
As of now the only configuration is the `PING_URL` variable in the `wrangler.toml` file. This is the URL that will be pinged every 5 minutes.

You can also change the interval of the pings by changing the `cron` value in the `wrangler.toml` file. The default value is `*/5 * * * *` which means that the service will ping the URL every 5 minutes. Please refer to https://cron.help/ for more information on how to configure the `cron` value.

## Installation
This project requires npm to install the dependencies. You can install npm by installing Node.js from https://nodejs.org/.

After you have installed npm you can run `npm install` to install the dependencies.

## Testing
You can run `npm run dev` which will start a local server that you can use to test the service.

The server will be available at `http://localhost:8787`. You can schedule a ping by sending a GET request to `http://localhost:8787/__scheduled?cron=*+*+*+*+*`.

## Deploy
To deploy the service to Cloudflare Workers, run `npm run deploy`.

## License
This project is licensed under the GNU General Public License v2.0. You can read the license in the `LICENSE` file.
