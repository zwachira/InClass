import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'; 
import { useNavigate } from 'react-router-dom';

function Loan() {
  const [loans, setLoans] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/loans", {method:"GET"})
    .then(res => res.json())
    .then(res=> {setLoans(res);})
  },[])

  
  const navigate = useNavigate();

  const movePage = () => {
    navigate("/loanForm");  
  };

  return (
    <div>
      <Button variant="success" onClick={movePage}>Create</Button>{' '}
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>loan_origin_amount</th>
          <th>interest_rate</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {loans.map(loan =>
        <tr>
           <td>{loan.loan_id}</td>
          <td>{loan.loan_origin_amount}</td>
          <td>{loan.interest_rate}</td>
          <td>{loan.user_account.userName}</td>
          <td>{loan.created_at}</td>
        </tr>
        )}
      </tbody>
    </Table>
    </div>
  );
}


export default Loan;