// 'use client'
import MobileLogo from "@/assets/logo-mobile.svg";
import Image from 'next/image'
import SelectBoard from "@/components/navbar/SelectBoard";
import React from "react";
import {fetchBoards} from "@/app/api/boards/route";
import {Board} from "@/model/board/types";
import NavbarBoardCreationSection from "@/components/navbar/NavbarBoardCreationSection";
import {cookies} from "next/headers";
import {CURRENT_BOARD_COOKIE_NAME} from "@/model/cookies/types";

const Navbar: React.FC = async () => {
	const data: Board[] = await fetchBoards();
	const dashboards = data.map((board) => board.name);
	// const [dashboards, setDashboards] = useState<string[]>([]);
	// const getData = async () => {
	// 	try{
	// 		//TODO: response is BoardDto response {boards: array[]}
	// 		const response: any = await fetch('/api/boards').then(res => res.json());
	// 		let boardsNames = response.boards.map((board: Board) => board.name);
	// 		console.log(response);
	// 		console.log(boardsNames);
	// 		setDashboards(boardsNames);
	// 	} catch (e: any){
	// 		console.error(e);
	// 	}
	// }
	// useEffect(() => {
	// 	getData().then();
	// }, [])

	const currentBoard = cookies().get(CURRENT_BOARD_COOKIE_NAME)?.value ?? dashboards[0];

    return (
        <>
        <nav className="flex items-center justify-between h-16 bg-dark-grey p-4">
            <div className={'flex justify-center items-center gap-4'}>
                <Image
                    src={MobileLogo}
                    alt={'logo-mobile'}
					className={'h-6 w-6'}
                    width={24}
                    height={24}
                />
				{dashboards.length > 0 && <SelectBoard value={currentBoard} dashboards={dashboards}/>}
            </div>
           <NavbarBoardCreationSection />
        </nav>

        </>
    )
}


export default Navbar;