"use client";
import * as motion from "motion/react-client";
import { useState } from "react";
import EnteringImg from "./components/entering-img";

export default function Home() {
	const [showCentralDialog, setShowCentralDialog] = useState<boolean>(false);

	return (
		<div
			className={`grid ${
				showCentralDialog ? "bg-white text-black" : "bg-black text-white"
			} grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
			{showCentralDialog && (
				<>
					{" "}
					<EnteringImg imgSrc="/img/1.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/2.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/3.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/4.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/5.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/6.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/7.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/8.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/9.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/10.jpg" on={showCentralDialog} />
				</>
			)}
			<main className="flex justify-center z-50 w-full flex-col gap-[32px] row-start-2 items-center ">
				{!showCentralDialog && (
					<>
						<p className="text-lg"> Andre te invita a su cumpleaños</p>
						<button onClick={() => setShowCentralDialog(true)} className="text-xs p-2 border border-white rounded-lg">
							Haz clic aquí para ver de qué se trata
						</button>
					</>
				)}
				{showCentralDialog && (
					<div className="flex z-50 rounded-lg bg-cover bg-center bg-[url('/img/jee.JPG')] shadow-2xl fixed w-[80%] max-w-[600px] aspect-square ">
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.4,
								scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
							}}>
							<img className="absolute top-[-50px] right-0" src={"/img/house.png"} height={"80px"} alt="house" />
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.4,
								scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
							}}>
							<img className="absolute bottom-[-50px] left-0" src={"/img/date.png"} height={"80px"} alt="date" />
						</motion.div>
					</div>
				)}
				{/* {showCentralDialog && <CentralDialog />} */}
			</main>
		</div>
	);
}
