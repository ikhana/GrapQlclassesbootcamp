import React from "react";
import { useQuery, gql ,useMutation} from '@apollo/client';

const STUDENT_LIST= gql`
  query GetStudentsList {
    students{
        name,
        email,
        age,
        id
        
      }
  }
`;
const ADD_STUDENT = gql`
  mutation AddStudent($name: String!, $id: Int!, $age: Int!, $email: String!) {
    addStudent(input{name: $name, id: $id, age: $age, email: $email}) {
      id
      type
    }
  }
`;

function Students() {
    const { loading, error, data } = useQuery(STUDENT_LIST);
    const [updateSTUDENT] = useMutation(ADD_STUDENT);
    if (loading) 
    return <p>Loading...</p>;
    if (error) 
    return <p>Error :(</p>;
        const {students } =data;


    return (
      
        <div>
          <table>
              {
                  students.map(student=>{
                      return(
                          <tr key={student.id}>List of the Students
                              <td >{student.name}</td>
                              <td>{student.email}</td>
                              <td >{student.age}</td>
                              <td > {student.id}</td>
                          </tr>
                          
                          

                      )

                  })
              }
          </table>
          <br></br>
          <br></br>
          <button onClick={()=>{
              updateSTUDENT({variables: {"Ziya Khan", 7, 44, "Ziya Khan@gmai"}})

          }}>Add Student</button>
        </div>
     
    );
  }
  
  export default Students;