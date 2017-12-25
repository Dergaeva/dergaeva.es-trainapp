import { Form } from 'components/Form';
import { login } from 'services/userService';

export const Login = props => {
  const loginUser = (data) => {
    login(data)
      .then(data => props.login(data))
      .catch(console.log);

  };

  return (
    props.isLoading ? <mark>Loading...</mark> :
      <Form
        exclude={['firstname', 'secondname', 'repeat password']}
        submit={loginUser}
        data={props.user}
      />
  );
};
