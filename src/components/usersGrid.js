import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
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
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useSelector, useDispatch } from 'react-redux';
import UserService from './../userService';

function UsersGrid() {
  const TABLE_HEAD = [
    'عملیات',
    'نام کاربری',
    'ایمیل',
    'کد ملی',
    'نام خانوادگی',
    'نام',
  ];

  const TABLE_ROWS = useSelector((state) => state.users);
  let dispatch = useDispatch();
  return (
    <Card className="h-full w-full">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none"
      ></CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, surname, id, username, email }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton
                        onClick={async () => {
                          let action = {
                            type: 'loadEdit',
                            data: await UserService.getUserByID(id),
                          };
                          dispatch(action);
                        }}
                        variant="text"
                      >
                        <PencilIcon className="h-4 w-4 m-1" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Delete User">
                      <IconButton
                        onClick={async () => {
                          await UserService.deleteUser(id);
                          let action = {
                            type: 'delete',
                            data: await UserService.getUsers(),
                          };
                          dispatch(action);
                        }}
                        variant="text"
                      >
                        <TrashIcon className="h-4 w-4 m-1" />
                      </IconButton>
                    </Tooltip>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {username}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {id}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {surname}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <div class="md:col-span-5 text-right">
          <div class="inline-flex items-end">
            <button
              onClick={async () => {
                let action = {
                  type: 'loadAdd',
                };
                dispatch(action);
              }}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              جدید
            </button>
          </div>
        </div>
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            4
          </IconButton>
          <IconButton variant="text" size="sm">
            5
          </IconButton>
          <IconButton variant="text" size="sm">
            6
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}

export default UsersGrid;
