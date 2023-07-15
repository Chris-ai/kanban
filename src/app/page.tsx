import {fetchBoards} from "@/app/api/boards/route";
import {Board} from "@/model/board/types";

export default async function Home() {
	const data: Board[] = await fetchBoards();

	return (
		<div>
			<p className="heading-xl">HEADING 1</p>
			<p>paragraph</p>
			{data.map(el => <p key={el.name}>{el.name}</p>)}
		</div>
	)
}