export default {
	async scheduled(event: Event, env: Env): Promise<void> {
		const res = await fetch(env.PING_TARGET);
		console.log(`Pinged ${env.PING_TARGET} with status ${res.status}`);
	},

	async fetch(req: Request, env: Env): Promise<Response> {
		return new Response("Pinguendo!");
	}
};
