import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";

function ListTodo () {
  return (
    <main>
      <FormGroup>
        <FormControlLabel control={<Checkbox/>} label="Learn React" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Be Awesome" />
      </FormGroup>
    </main>
  );
}
export default ListTodo;