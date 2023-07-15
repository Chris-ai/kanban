import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req: Request){
	// const body = await req.json();
	console.log('legolas pierdolas', req);
	const jsonDirectory = path.join(process.cwd());
	const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

	return new Response(fileContents);
}

export async function fetchBoards() {
	const jsonDirectory = path.join(process.cwd());
	const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

	return JSON.parse(fileContents).boards;
}