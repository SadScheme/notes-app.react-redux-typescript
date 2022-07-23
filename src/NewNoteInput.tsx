import React from "react";

interface NewNoteInputProps {
	addNote: (note: string) => void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
	const [note, setNote] = React.useState("");

	const updateNote = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNote(e.target.value);
	};

	const onAddNoteClick = () => {
		addNote(note);
		setNote("");
	};

	return (
		<div>
			<input onChange={updateNote} value={note} type='text' />
			<button onClick={onAddNoteClick}>Add Note</button>
		</div>
	);
};
