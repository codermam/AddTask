import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Calendar,
  ShieldCheck,
  LogOut,
  Pencil,
} from "lucide-react";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import { getCurrentUser } from "../services/authService";


const Profile = () => {

  const [user, setUser] = useState(null);


  useEffect(() => {
    fetchUser();
  }, []);


  const fetchUser = async () => {
    try {

      const token =
        localStorage.getItem("token");

      const response =
        await getCurrentUser(token);

      setUser(response.data);

    } catch (error) {
      console.log(error);
    }
  };


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };


  return (

    <DashboardLayout>

      <div className="max-w-4xl mx-auto space-y-6">


        {/* Header Card */}

        <div
          className="
            bg-gradient-to-r
            from-primary
            to-secondary
            rounded-3xl
            p-8
            text-white
            shadow-xl
          "
        >

          <div className="flex items-center gap-6">


            <div
              className="
                w-24 h-24
                rounded-full
                bg-white/20
                flex items-center
                justify-center
                text-4xl
                font-bold
              "
            >
              {user?.fullName
                ?.charAt(0)
                .toUpperCase()}
            </div>


            <div>

              <h1 className="text-3xl font-bold">
                {user?.fullName}
              </h1>


              <p className="opacity-80">
                {user?.email}
              </p>


              <div
                className="
                  badge
                  badge-success
                  mt-3
                  gap-2
                "
              >
                <ShieldCheck size={15}/>
                Active Account
              </div>

            </div>


          </div>

        </div>




        {/* Information Card */}


        <div
          className="
            card
            bg-base-100
            shadow-xl
            rounded-3xl
          "
        >

          <div className="card-body">


            <h2
              className="
                text-xl
                font-bold
                mb-4
              "
            >
              Account Information
            </h2>



            <div className="grid md:grid-cols-2 gap-5">



              <div
                className="
                  flex
                  items-center
                  gap-4
                  bg-base-200
                  p-4
                  rounded-xl
                "
              >

                <User
                  className="text-primary"
                />

                <div>

                  <p className="text-sm opacity-60">
                    Full Name
                  </p>

                  <p className="font-semibold">
                    {user?.fullName}
                  </p>

                </div>

              </div>




              <div
                className="
                  flex
                  items-center
                  gap-4
                  bg-base-200
                  p-4
                  rounded-xl
                "
              >

                <Mail
                  className="text-primary"
                />

                <div>

                  <p className="text-sm opacity-60">
                    Email Address
                  </p>

                  <p className="font-semibold">
                    {user?.email}
                  </p>

                </div>

              </div>




              <div
                className="
                  flex
                  items-center
                  gap-4
                  bg-base-200
                  p-4
                  rounded-xl
                "
              >

                <Calendar
                  className="text-primary"
                />

                <div>

                  <p className="text-sm opacity-60">
                    Member Since
                  </p>

                  <p className="font-semibold">
                    {
                      user?.createdAt
                        ? new Date(
                            user.createdAt
                          ).toLocaleDateString()
                        : "N/A"
                    }
                  </p>

                </div>

              </div>




              <div
                className="
                  flex
                  items-center
                  gap-4
                  bg-base-200
                  p-4
                  rounded-xl
                "
              >

                <ShieldCheck
                  className="text-primary"
                />

                <div>

                  <p className="text-sm opacity-60">
                    User ID
                  </p>

                  <p className="font-semibold text-sm">
                    {user?._id}
                  </p>

                </div>

              </div>


            </div>


          </div>

        </div>





        {/* Actions */}


        <div
          className="
            card
            bg-base-100
            shadow-xl
            rounded-3xl
          "
        >

          <div
            className="
              card-body
              flex-row
              justify-end
              gap-3
            "
          >

            <button
              className="
                btn
                btn-primary
                rounded-full
              "
            >

              <Pencil size={18}/>

              Edit Profile

            </button>



            <button
              onClick={handleLogout}
              className="
                btn
                btn-error
                rounded-full
                text-white
              "
            >

              <LogOut size={18}/>

              Logout

            </button>


          </div>

        </div>


      </div>


    </DashboardLayout>

  );
};


export default Profile;