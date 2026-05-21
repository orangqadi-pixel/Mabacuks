import React from "react";
import Image from "next/image";

const Fotocard = ({ npm, angkatan }) => {
	return (
		<div className="w-full flex flex-col items-center justify-center">
			<div className="p-3 flex flex-col gap-2 w-full relative h-[300px]">
				<Image
					src={`https://v2-students.unpad.ac.id/_next/image?url=https%3A%2F%2Fmedia.unpad.ac.id%2Fphoto%2Fmahasiswa%2F270110%2F20${angkatan}%2F270110${angkatan}0${npm}.JPG&w=750&q=75`}
					fill
					className="object-contain"
					alt="gambar"
				/>
			</div>
			<h1 className="text-md font-bold py-2">{npm}</h1>
		</div>
	);
};

export default Fotocard;
