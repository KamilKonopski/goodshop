export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DB_API_KEY: string;
		}
	}
}
