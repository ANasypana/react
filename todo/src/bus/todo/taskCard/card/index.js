import React from 'react';
import { useFormik } from 'formik';
import {validationSchema} from '../cardForm/validationSchema';
import {useTaskCard} from '../../hooks/useTaskCard';
import { ErrorContainer, MyInput, MyDatePickerElement,
  MyTextarea, MyRadioButton, MyChecklist } from '../cardForm/formElements';
import { tags } from '../cardForm/formConstants';

export const CardContent = () => {
  const { onSubmit, selectedTask, changeStatusTask, isChange, isTagTouched,
    setIsTagTouched, isChecklistTouched, setIsChecklistTouched, isDateTouched, setIsDateTouched } = useTaskCard();

  const initialValues = {
    title: selectedTask.title,
    description: selectedTask.description,
    deadline:  selectedTask.deadline,
    tag: selectedTask.tag,
    checklist: [...selectedTask.checklist]
  };

  const {
    handleSubmit,
    getFieldProps,
    getFieldMeta,
    setFieldValue,
    resetForm,
    isValid
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  const mataTitle = getFieldMeta('title');
  const mataDesc = getFieldMeta('description');
  const mataDedln = getFieldMeta('deadline');
  const mataTag = getFieldMeta('tag');
  const mataChekls = getFieldMeta('checklist');

  const isTouched = mataTitle.touched || mataDesc.touched || isTagTouched || isChecklistTouched || isDateTouched;

  const resetHandler = event => {
    if(isChange){
      changeStatusTask()
    }
    if(isTouched){
      resetForm()
    }
  }

  const listOfTags = tags.map( tag =>
    <MyRadioButton
      key={`TaskCard${tag}`}
      label = {tag}
      setFieldValue={setFieldValue}
      setIsTagTouched={setIsTagTouched}
      name='tag'
      {...getFieldProps('tag')}
    />);

  return(
    <div className='content'>
      <form onSubmit={handleSubmit}>
        <MyInput
          type = 'text'
          name = 'title'
          placeholder = 'Task title: '
          {...getFieldProps('title')}
          />
        <div className='deadline'>
          <span className='label'>Doe to</span>
          <MyDatePickerElement
            setFieldValue={setFieldValue}
            setIsDateTouched={setIsDateTouched}
            name='deadline'
            {...getFieldProps('deadline')}
          />
        </div>
        <div className='description'>
          <MyTextarea
            label='Description'
            styles='label'
            cols='5'
            rows='3'
            name = 'description'
            placeholder = 'Describe your event: '
            {...getFieldProps('description')}
          />
        </div>
        <div className='checklist'>
          <span className='label'>Checklist</span>
          <MyChecklist
            name='checklist'
            setIsChecklistTouched={setIsChecklistTouched}
            setFieldValue = {setFieldValue}
            {...getFieldProps('checklist')}
          />
        </div>
        <div className='tags'>
          {listOfTags}
        </div>
        <ErrorContainer
          description={mataDesc}
          deadline={mataDedln}
          tag={mataTag}
          checklist={mataChekls}
          title={mataTitle}
          isTagTouched={isTagTouched}
          isChecklistTouched={isChecklistTouched}
          isDateTouched={isDateTouched}
        />
        <div className="form-controls">
          <button
            type='reset'
            disabled={ !( isTouched || isChange) }
            onClick={resetHandler}
            className='button-reset-task'>
            Reset
          </button>
          <button
            disabled={!( isValid && isTouched) && !(isChange && selectedTask.hash)}
            className='button-save-task'
            type='submit'>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}