import React from "react";
import { StyledNotes } from "../EventDetails.styles";

interface NotesProps {
  notes: string;
}

const Notes: React.FC<NotesProps> = ({ notes }) => {
  return (
    <>
      <StyledNotes>
        {/*<h3></h3>*/}
        {notes}
      </StyledNotes>
    </>
  );
};

export default Notes;
