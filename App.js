import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import AddAttendance from './component/attendance';
import SignUp from './component/staffSignup';
import {Toaster} from 'react-hot-toast'
import AllAttendace from './component/displayAttendace';
import AttendanceReport from './component/attendanceReport';
import AttendanceUpdate from './component/attendanceupdate';
import SignIn from './component/staffLogin';
import OneUser from './component/userProfile';
import AddReport from './component/medicalReportAdd';
import AllReport from './component/medicalAllReport';
import GetOneMedical from './component/medicalGetOne';
import MedicalReportUpdate from './component/medicalReportUpdate';
import AddInventory from './component/inventoryAdd';
import AllInventory from './component/inventory';  
import InventoryUpdate from './component/inventoryUpdate';
import InventoryReport from './component/inventoryReport';
import InventoryBill from './component/inventoryBills';
import InventoryOrder from './component/inventoryOrder';
import MedicalReport from './component/medicalReport';
import Home from './component/home';
import ContactUS from './component/contactUs';
import AddOrderReport from './component/inventoryAddOrder';
import AddBillReport from './component/inventoryAddBill';
import Header2 from './component/Header2';

function App() {
  
  return (
    <div>
       <Toaster position="top-center" reverseOrder={true} />
      <BrowserRouter>
      <Header/>
        <Routes>
      
            <Route
              path="/"
              element={<Home />}
            /> 

            <Route
              path="/contactus"
              element={<ContactUS />}
            /> 

           
             <Route
              path="/signup"
              element={<SignUp />}
            />    


            <Route
              path="/login"
              element={<SignIn />}
            /> 

    </Routes>
 
   </BrowserRouter>
   <BrowserRouter>
           <Header2/>
           <Routes>
            
           <Route
              path="/allAttendace"
              element={<AllAttendace />}
            />  

            <Route
              path="/attendance/report"
              element={<AttendanceReport />}
            /> 

            <Route
              path="/update/:id"
              element={<AttendanceUpdate />}
            /> 
           <Route
              path="/attendace"
              element={<AddAttendance />}
            />  
            
            <Route
              path="/OneUser/:id"
              element={<OneUser />}
            />  

            <Route
              path="/addReport"
              element={<AddReport />}
            /> 

            <Route
              path="/allreport"
              element={<AllReport />}
            /> 

          <Route
              path="/GetOneMedical/:id"
              element={<GetOneMedical />}
            /> 

            <Route
              path="/report/:id"
              element={<MedicalReportUpdate />}
            /> 

            <Route
              path="/inventory/add"
              element={<AddInventory />}
            /> 

            <Route
              path="/inventory"
              element={<AllInventory />}
            /> 

            <Route
              path="/inventory/update/:id"
              element={<InventoryUpdate />}
            /> 

            <Route
              path="/inventory/report"
              element={<InventoryReport />}
            />

            <Route
              path="/inventory/bill"
              element={<InventoryBill />}
            /> 

            <Route
              path="/inventory/order"
              element={<InventoryOrder />}
            />  

            <Route
              path="/medical/report"
              element={<MedicalReport />}
            />  

            <Route
              path="/inventory/order/report"
              element={<AddOrderReport />}
            /> 

            <Route
              path="/inventory/bill/report"
              element={<AddBillReport />}
            />   
            </Routes>
            <Footer/>
   </BrowserRouter>
   </div>
  );
}

export default App;
