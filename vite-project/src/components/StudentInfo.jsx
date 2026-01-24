function StudentInfo(props) {
  return (
    <div>
        <p>name: {props.name}</p>
        <p>Id: {props.id}</p>
        <p>Class: {props.class}</p>
    </div>
  );
}

export default StudentInfo;