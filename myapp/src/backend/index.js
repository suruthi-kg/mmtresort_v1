import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import DatePicker from "react-datepicker";
import { config } from '../config';

function Backend() {
  const api = config.apiurl;
  console.log("api",api);
  const [checkindate, setcheckindate] = useState(new Date());
  const [checkoutdate, setcheckoutdate] = useState(new Date());

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setalert] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`${api}/api/data`);
        setData(response.data);
        // const response = await fetch('http://localhost:3001/api/data');
        // setData(await response.json());
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const [formData, setFormData] = useState({ 
    checkin: '', 
    checkout: '',
    date:'',
    people:'',
    familyorfriends:'',
    budget:'',
   }); 

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData,"react")
    try {
      const response = await axios.post(`${api}/insertData`, formData);
      console.log(response.data.message,"response react");
      
      // Handle successful insertion (clear form, etc.)
    } catch (error) {
      console.error(error,"erroe react");
      // Handle errors
    } finally {
      setalert(true);
      setTimeout(() => {
       setalert(false);
      }, 2000);
    }
  };

  return (
    <div>
      {/* {isLoading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error1: {error.message}</p>
      ) : data ? (
        <>
         <p>Data from Node.js: {data.message}</p>
         </>
      ) : (
        <p>No data available.</p>
      )} */}
      <div class="contact_form_container">
						<div class="section_title_container_2">
							<div class="section_title"><h2 class="h2tag" >Contact Info</h2></div>
							<div class="section_text">Create unforgettable memories. Let's plan your stay.</div>
						</div>
						<form action="#" class="contact_form" id="contact_form" onSubmit={handleSubmit}>
							<div class="row contact_row">
								<div class="col-md-6">
                 {/* <div className='da_te'>
                    <DatePicker selected={checkindate} onChange={(date) => setcheckindate(date)} />
                  </div> */}

                  <input value={formData.checkin} onChange={handleChange} id="checkin" name="checkin"
                   type="text" class="contact_input" placeholder="checkin" required="required"/>
                  </div>
								<div class="col-md-6">
                  {/* <div className='da_te'>
                    <DatePicker selected={checkoutdate} onChange={(date) => setcheckoutdate(date)} />
                  </div> */}
                  <input value={formData.checkout} onChange={handleChange} id="checkout" name="checkout"
                   type="text" class="contact_input" placeholder="check out" required="required" />
                   </div>
                <div class="col-md-6">
                  <input  onChange={handleChange} id="Date" name="Date"
                   type="text" class="contact_input" placeholder="Date" required='required' /></div>
								<div class="col-md-6">
                  <input  onChange={handleChange} id="People" name="People"
                   type="text" class="contact_input" placeholder="People"  /></div>
					      <div class="col-md-12">
                  <input  onChange={handleChange} id="Familyorfriends" name="Familyorfriends"
                   type="text" class="contact_input" placeholder="Family or friends" /></div>
                <div class="col-md-12">
                  <input  onChange={handleChange} id="Budget" name="Budget"
                   type="text" class="contact_input" placeholder="Budget" />
                   </div>
							</div>
							{/* <div><textarea class="contact_input contact_textarea" placeholder="Message" ></textarea></div> */}
							<button class="contact_button">send message</button>
						</form>
           
            <div className={`topfix ${alert ? "topto" :""}`} >Submited successful</div>
          
					</div>
      <div>
    </div>
    </div>
  );
}

export default Backend;


