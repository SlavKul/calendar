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
import { Label } from "../../myComponents/Label/Label.styles";
import Dictionary from "../../../utilities/dictionary";
import { useCalendarContext, branchTypes } from "../../App.definitions";
import CustomDropdown from "../../myComponents/CustomDropdown/CustomDropdown";

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
  isVisible: boolean;
  initialState: EventModel;
  cancel: () => void;
  submit: (test: any) => void;
  refetch: () => void;
  isEditing: boolean;
}

const AddEditForm: React.FC<Props> = ({
  cancel,
  submit,
  initialState,
  isVisible,
  refetch,
  isEditing,
}) => {
  const { updateEvent, eventTypes } = useCalendarContext();

  const [start, setStart] = useState(() =>
    reformatDate(initialState.startTime)
  );

  /*const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  const handlerSetValue = (value: any) => {
    setValue(value);
    console.log(value.toString("html"));
    formik.values.notes = value.toString("html");
    console.log(formik.values);
    console.log((formik.values.notes, ""));
  };*/

  const [end, setEnd] = useState(() => reformatDate(initialState.endTime));

  const formik = useFormik({
    initialValues: {
      ...initialState,
    },
    onSubmit: (values, { resetForm }) => {
      isEditing
        ? updateEvent!({
            ...values,
            startTime: formatDate(start.date, start.time),
            endTime: formatDate(end.date, end.time),
          })
        : submit({
            ...values,
            startTime: formatDate(start.date, start.time),
            endTime: formatDate(end.date, end.time),
          });
      cancel();
      resetForm({});
    },
  });

  const addAttendeeHandler = (event: any) => {
    if (event.key === "Enter" && event.target.value) {
      const attendees = [...formik.values.attendees];
      attendees.unshift(event.target.value);
      formik.values.attendees = attendees;
      formik.setFieldTouched("attendees");
      event.target.value = "";
    }
  };

  const handlerEventType = (value) => {
    formik.values.eventType = value;
    formik.setFieldTouched("eventType");
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
                    <Label>{Dictionary.addEditForm.title}</Label>
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
                      onChange={handlerEventType}
                      listOptions={eventTypes}
                    ></CustomDropdown>
                    {/*<Dropdown
                      placeholder="Typ událostí"
                      selection
                      fluid
                      options={tagOptions}
                      name="eventType"
                      id="eventType"
                      onChange={formik.handleChange}
                      value={formik.values.eventType}
                    />*/}
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
                      onChange={formik.handleChange}
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
                  //removeAttendee={this.removeAttendeeHandler}
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
