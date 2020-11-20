import React, { useEffect, useState } from "react";
import { Dropdown, Input } from "semantic-ui-react";
import CustomTitle from "../../Modules/List/Event/EventDetails/CustomTitle/CustomTitle";
import {
  Overlay,
  AddEditModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormWrapper,
  LeftBody,
  RightBody,
  GroupFields,
  Field,
} from "./AddEditForm.styles";
import { MyIcon } from "../../myComponents/Icon/MyIcon.styles";
import AttendeesForm from "./Attendees/AttendeesForm";
import { DateInput, TimeInput } from "semantic-ui-calendar-react";
import { useFormik } from "formik";
import { EventModel } from "../../App.definitions";
import { reformatDate, formatDate } from "../../../utilities/moment-locale";
import TextArea from "../../myComponents/TextArea/TextArea";
import { Button } from "../../myComponents/Button/Button.styles";
import { Label, Required } from "../../myComponents/Label/Label.styles";
import Dictionary from "../../../utilities/dictionary";
import { useCalendarContext, branchTypes } from "../../App.definitions";
import CustomDropdown from "../../myComponents/CustomDropdown/CustomDropdown";
import { DisableValuesPropTypes } from "semantic-ui-calendar-react/dist/types/inputs/BaseInput";

//import RichTextEditor from "react-rte";

const tagOptions = [
  {
    key: "Sport",
    text: "Sport",
    value: "Sport",
    label: { color: "yellow", empty: true, circular: true },
  },
  {
    key: "All Hands",
    text: "All Hands",
    value: "All Hands",
    label: { color: "blue", empty: true, circular: true },
  },
  {
    key: "Travel",
    text: "Travel",
    value: "Travel",
    label: { color: "black", empty: true, circular: true },
  },
];

interface Props {
  initialState: EventModel;
  cancel: () => void;
  submit: (test: any) => void;
  isEditing: boolean;
}

const AddEditForm: React.FC<Props> = ({
  cancel,
  submit,
  initialState,
  isEditing,
}) => {
  console.log(
    "%c ADDEDIT MODAL is RENDERED",
    "background: #1d2594; color: #da2442"
  );
  console.log(initialState);
  const { updateEvent, eventTypes } = useCalendarContext();

  const [start, setStart] = useState(() => reformatDate(initialState.start));
  const [end, setEnd] = useState(() => reformatDate(initialState.end));
  /*const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  const handlerSetValue = (value: any) => {
    setValue(value);
    console.log(value.toString("html"));
    formik.values.notes = value.toString("html");
    console.log(formik.values);
    console.log((formik.values.notes, ""));
  };*/

  const formik = useFormik({
    initialValues: {
      ...initialState,
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      isEditing
        ? updateEvent!({
            ...values,
            start: formatDate(start.date, start.time),
            end: formatDate(end.date, end.time),
          })
        : submit({
            ...values,
            start: formatDate(start.date, start.time),
            end: formatDate(end.date, end.time),
          });
      cancel();
      resetForm({});
    },
  });

  const [attendees, handleAttendees] = useState(formik.values.attendees);

  const addAttendeeHandler = (event: any) => {
    if (event.key === "Enter" && event.target.value) {
      handleAttendees([...formik.values.attendees, event.target.value]);
      formik.values.attendees = [...attendees, event.target.value];
      formik.setFieldTouched("attendees");
      event.target.value = "";
    }
  };

  const removeAttendeeHandler = (id: number) => {
    const newList = attendees!.filter((item, index) => index !== id);
    handleAttendees(newList);
    formik.values.attendees = newList;
    formik.setFieldTouched("attendees");
  };

  const handlerChanges = (e, data) => {
    formik.values[data.name] = data.value;
    formik.setFieldTouched(data.name);
  };

  return (
    <Overlay>
      <form>
        <AddEditModal>
          <ModalHeader>
            <CustomTitle
              title={
                isEditing
                  ? Dictionary.addEditForm.editTitle
                  : Dictionary.addEditForm.addTitle
              }
            />
            <MyIcon
              name="close"
              style={{ marginLeft: "auto", fontSize: "20px" }}
              onClick={() => {
                cancel();
                formik.resetForm({});
              }}
            />
          </ModalHeader>
          <ModalBody>
            <FormWrapper>
              <LeftBody>
                <GroupFields>
                  <Field width={5}>
                    <Label>
                      {Dictionary.addEditForm.title}
                      <Required>*</Required>
                    </Label>
                    <Input
                      fluid
                      id="title"
                      type="text"
                      name="title"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      value={formik.values.title}
                    />
                  </Field>
                  <Field width={1}>
                    <Label>{Dictionary.addEditForm.eventType}</Label>
                    <CustomDropdown
                      name="eventType"
                      id="eventType"
                      value={formik.values.eventType}
                      onChange={handlerChanges}
                      listOptions={eventTypes}
                    />
                  </Field>
                </GroupFields>
                <GroupFields>
                  <Field>
                    <Label>{Dictionary.addEditForm.startTime}</Label>
                    <DateInput
                      name="startDate"
                      value={start.date}
                      dateFormat="DD.MM.YYYY"
                      iconPosition="left"
                      onChange={(event, target) =>
                        setStart({ ...start, date: target.value })
                      }
                      closable
                      animation={"none" as any}
                      autoComplete="off"
                      localization="cz"
                    />
                  </Field>
                  <Field>
                    <TimeInput
                      name="startHours"
                      value={start.time}
                      iconPosition="left"
                      onChange={(event, target) =>
                        setStart({ ...start, time: target.value })
                      }
                      closable
                      animation={"none" as any}
                      autoComplete="off"
                      localization="cz"
                    />
                  </Field>
                  <Field>
                    <Label>{Dictionary.addEditForm.endTime}</Label>
                    <DateInput
                      name="endDate"
                      value={end.date}
                      dateFormat="DD.MM.YYYY"
                      iconPosition="left"
                      onChange={(event, target) =>
                        setEnd({ ...end, date: target.value })
                      }
                      closable
                      animation={"none" as any}
                      autoComplete="off"
                      localization="cz"
                    />
                  </Field>
                  <Field>
                    <TimeInput
                      name="endHours"
                      value={end.time}
                      iconPosition="left"
                      onChange={(event, target) =>
                        setEnd({ ...end, time: target.value })
                      }
                      closable
                      animation={"none" as any}
                      autoComplete="off"
                      localization="cz"
                    />
                  </Field>
                </GroupFields>
                <GroupFields>
                  <Field width={5}>
                    <Label>{Dictionary.addEditForm.location}</Label>
                    <Input
                      type="text"
                      fluid
                      name="location"
                      id="location"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      value={formik.values.location}
                    />
                  </Field>
                  <Field width={1}>
                    <Label>{Dictionary.addEditForm.branch}</Label>
                    <Dropdown
                      selection
                      fluid
                      options={branchTypes}
                      name="branch"
                      id="branch"
                      onChange={handlerChanges}
                      value={formik.values.branch}
                    />
                  </Field>
                </GroupFields>
                <Field>
                  <Label>{Dictionary.addEditForm.notes}</Label>
                  <TextArea
                    name="notes"
                    id="notes"
                    onChange={formik.handleChange}
                    value={formik.values.notes}
                  />
                  {/*<RichTextEditor
                    value={value}
                    //toolbarConfig={toolbarConfig}
                    onChange={handlerSetValue}
                  />*/}
                </Field>
              </LeftBody>
              <RightBody>
                <Label>{Dictionary.addEditForm.attendees}</Label>
                <AttendeesForm
                  name="attendess"
                  id="attendees"
                  addAttendee={addAttendeeHandler}
                  value={formik.values.attendees}
                  removeAttendee={removeAttendeeHandler}
                />
              </RightBody>
            </FormWrapper>
          </ModalBody>
          <ModalFooter>
            <Input
              id="creator"
              type="text"
              name="creator"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.creator}
            />
            <Button type="button" onClick={formik.submitForm}>
              {isEditing
                ? Dictionary.addEditForm.editButton
                : Dictionary.addEditForm.saveButton}
            </Button>
          </ModalFooter>
        </AddEditModal>
      </form>
    </Overlay>
  );
};

export default AddEditForm;
