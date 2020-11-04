import React from "react";
import { useQuery, gql } from '@apollo/client';

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


function Students() {
    const { loading, error, data } = useQuery(STUDENT_LIST);
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
        </div>
     
    );
  }
  
  export default Students;