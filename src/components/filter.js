import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from '@material-tailwind/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserService from './../userService';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

function Filter() {
  let dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        id: null,
        name: '',
        surname: '',
        melicode: '',
        username: '',
        email: '',
      }}
      onSubmit={async (values) => {
        let action = {
          type: 'filter',
          data: await UserService.filterUsers(values),
        };
        dispatch(action);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-4 flex flex-row justify-between gap-8 md:flex-row md:items-center text-nowrap">
            <Field
              dir="rtl"
              name="username"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
            <label for="username">نام کاربری</label>
            <Field
              dir="rtl"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              name="email"
            />
            <label for="email">ایمیل</label>
            <Field
              type="number"
              dir="rtl"
              name="id"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
            <label for="id">کد ملی</label>
            <Field
              dir="rtl"
              name="surname"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
            <label for="surname">نام خانوادگی</label>
            <Field
              dir="rtl"
              name="name"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
            <label for="name">نام</label>
            <div class="md:col-span-5 text-right">
              <div class="inline-flex items-end">
                <button
                  type="submit"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  جست و جو
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Filter;
