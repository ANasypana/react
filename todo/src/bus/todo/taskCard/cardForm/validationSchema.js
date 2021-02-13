import * as Yup from 'yup';
import { tags } from './formConstants';

export const validationSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Must be 2 chars or more')
    .max(40, 'Must be 40 chars or less').required('Title should be provided'),
  description: Yup.string().min(2, 'Must be 2 chars or more')
    .max(200, 'Must be 200 chars or less'),
  deadline: Yup.date().min( new Date(), 'Must be more than today')
    .required('Deadline should be provided'),
  tag: Yup.string().oneOf(tags, 'You should put a correct tag')
    .required('Tag should be provided'),
  checklist: Yup.array().of(Yup.object().shape({
    title: Yup.string().min(2, 'Sub-task title must be 2 chars or more')
      .max(40, 'Sub-task title must be 40 chars or less').required('Sub-task title should be provided'),
    completed: Yup.boolean().oneOf([false, true], 'Should be boolean value'),
    hash: Yup.string()
  })).min(1, 'Should be provided one or more sub-task')
    .required('Should be provided one or more sum-task')

})