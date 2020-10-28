import React, { useState } from "react";
import RichTextEditor from "react-rte";
import { StyledNotes } from "../EventDetails.styles";

interface NotesProps {
  notes: string;
}

const Notes: React.FC<NotesProps> = ({ notes }) => {
  const [value, setValue] = useState(
    RichTextEditor.createValueFromString(notes, "html")
  );
  return (
    <>
      <StyledNotes>
        {notes}
        {/*} <RichTextEditor readOnly={true} value={value} />
        <div dangerouslySetInnerHTML={{ __html: notes }} />*/}
      </StyledNotes>
    </>
  );
};

export default Notes;
