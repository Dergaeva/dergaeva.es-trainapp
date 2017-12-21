import { Form } from 'components/Form';

export const Login = (props) => (
  props.isLoading ? <mark>Loading...</mark> :
    <Form
      exclude={['firstname', 'secondname', 'repeat password']}
      submit={props.login}
    />
);
