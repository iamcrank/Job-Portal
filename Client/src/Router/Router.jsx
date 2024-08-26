import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import LandingPage from '../Pages/LandingPage';
import Home from "../Pages/Home";
import CreateJob from "../Pages/createJob";
import MyJobs from "../Pages/MyJobs";
import SalaryEstimate from "../Pages/SalaryEstimate";
import EditPage from "../Pages/EditPage";
import JobDetails from "../Pages/JobDetails";
import RoleSelection from '../Pages/RoleSelection';
import JobSeekerDashboard from '../Pages/JobSeekerDashboard';
import EmployerDashboard from '../Pages/EmployerDashboard';
import Profile from "../Pages/Profile";
import JobProfileUpdate from "../Pages/JobProfileUpdate";
import EmployerProfileUpdate from "../Pages/EmployerProfileUpdate";
import Login from "../Components/Login";
import SignUp from "../Components/SignUP";
import JobSeekerProfile from '../Components/JobSeekerProfile';
import EmployerProfile from '../Components/EmployerProfile';
import JobApplication from "../Components/JobApplicationForm";
import ViewApplication from "../Components/ViewApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: "/home", element: <Home /> },
      { path: "/post-job", element: <CreateJob /> },
      { path: "/my-job", element: <MyJobs /> },
      {path: "/salary",element: <SalaryEstimate/>},
      {path: "edit-job/:id", element:<EditPage/>, loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)},
      {path: "/job/:id", element:<JobDetails/>},
      { path: '/job-seeker-profile', element: <JobSeekerProfile /> },
      { path: '/employer-profile', element: <EmployerProfile /> },
      { path: '/role-selection', element: <RoleSelection /> },
      { path: '/job-seeker-dashboard', element:<JobSeekerDashboard /> },
      { path: '/employer-dashboard', element:<EmployerDashboard /> },
      { path: "/profile", element: <Profile /> },
      { path: "/profile-update", element: <JobProfileUpdate /> },
      { path: "/employer-profile-update", element: <EmployerProfileUpdate /> },
      {path: "/apply-job", element: <JobApplication/>},
      {path: "/applications/:jobId", element: <ViewApplication/>}
    ]
  },
  {
    path: "/login", element: <Login/>
  },
  {
    path: "/signup", element: <SignUp/>
  }


]);

export default router;