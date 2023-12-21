import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import UserService from './../userService';

const addUserSchema = Yup.object().shape({
  name: Yup.string().required('نام اجباری است'),
  surname: Yup.string().required('نام خانوادگی اجباری است'),
  email: Yup.string()
    .email('آدرس ایمیل نادرست است')
    .required('آدرس ایمیل اجباری است'),
  id: Yup.string()
    .matches(/^(?!(\d)\1{9})\d{10}$/, 'کدملی صحیح نیست')
    .required('کد ملی اجباری است'),
  username: Yup.string()
    .min(8, 'نام کاربری حداقل باید ۸ کاراکتر باشد')
    .max(10, 'نام کاربری حداکثر باید 10 کاراکتر باشد')
    .required('نام کاربری اجباری است'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'پسورد باید ۸ رقم شامل یک عدد یک حرف بزرگ یک حرف کوچک و یک کاراکتر خاص باشد'
    )
    .required('پسورد اجباری است'),
  repeatPassword: Yup.string()
    .required('لطفا تکرار پسورد را وارد نمایید')
    .oneOf([Yup.ref('password'), null], 'پسورد و تکرار آن با هم برابر نیستند'),
});

function AddAndEditUserModal() {
  let dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          id: null,
          name: '',
          surname: '',
          melicode: '',
          username: '',
          email: '',
        }}
        validationSchema={addUserSchema}
        onSubmit={async (values) => {
          await UserService.addUser(values);
          let action = {
            type: 'add',
            data: await UserService.getUsers(),
          };
          dispatch(action);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div class="container max-w-screen-lg mx-auto">
              <div>
                <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div class="text-gray-600">
                      <p class="font-medium text-lg">Personal Details</p>
                      <p>Please fill out all the fields.</p>
                    </div>

                    <div class="lg:col-span-2">
                      <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5">
                          <label for="name">نام</label>
                          <Field
                            type="text"
                            name="name"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                          <ErrorMessage name="name" component="div" />
                        </div>

                        <div class="md:col-span-5">
                          <label for="surname">نام خانوادگی</label>
                          <Field
                            type="text"
                            name="surname"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                          <ErrorMessage name="surname" component="div" />
                        </div>

                        <div class="md:col-span-5">
                          <label for="id">کد ملی</label>
                          <Field
                            type="number"
                            name="id"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                          <ErrorMessage name="id" component="div" />
                        </div>

                        <div class="md:col-span-5">
                          <label for="email">آدرس ایمیل</label>
                          <Field
                            type="email"
                            name="email"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="email@domain.com"
                          />
                          <ErrorMessage name="email" component="div" />
                        </div>

                        <div class="md:col-span-5">
                          <label for="username">نام کاربری</label>
                          <Field
                            type="text"
                            name="username"
                            id="username"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                          <ErrorMessage name="username" component="div" />
                        </div>

                        <div class="md:col-span-5">
                          <label for="password">رمز عبور</label>
                          <Field
                            type="password"
                            name="password"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                          <ErrorMessage name="password" component="div" />
                        </div>

                        <div class="md:col-span-5">
                          <label for="repeatPassword">تکرار رمز عبور</label>
                          <Field
                            type="password"
                            name="repeatPassword"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                          <ErrorMessage name="repeatPassword" component="div" />
                        </div>

                        <div class="md:col-span-5 text-right">
                          <div class="inline-flex items-end">
                            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                              انصراف
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                              تایید
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddAndEditUserModal;
