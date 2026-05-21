import Fotocard from "@/components/Fotocard";
import React from "react";

const page = () => {
	let listNomor = [];
	for (let i = 1; i < 100; i++) {
		listNomor.push(String(i).padStart(3, "0"));
	}

	// console.log(listNomor);
	return (
		<div className="w-full h-screen px-8 md:px-24">
			<h2>Hallo ini list maba ftg25</h2>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
				{listNomor.map((n, i) => (
					<Fotocard npm={n} angkatan={26} key={i} />
				))}
			</div>
		</div>
	);
};

export default page;
