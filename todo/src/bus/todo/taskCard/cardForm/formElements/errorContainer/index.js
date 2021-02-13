import React from 'react';

export const ErrorContainer = ({title, description, deadline, tag, checklist, isTagTouched,
                                 isChecklistTouched, isDateTouched}) => {

  const checklistErr = Array.isArray(checklist.error) ?
    checklist.error.map((err, index) => <p key={index} className='errorMessage'>{err.title ?? err.completed ?? ''}</p>) :
    <p className='errorMessage'>{checklist.error}</p>;

   return (
    <div className='errors'>
      {title.touched && title.error && (
        <p className='errorMessage'>{title.error}</p>
      )}
      {description.touched && description.error && (
        <p className='errorMessage'>{description.error}</p>
      )}
      {isDateTouched && deadline.error && (
        <p className='errorMessage'>{deadline.error}</p>
      )}
      {isTagTouched && tag.error && (
        <p className='errorMessage'>{tag.error}</p>
      )}
      { isChecklistTouched && checklist.error && checklistErr }

    </div>
  )
}
