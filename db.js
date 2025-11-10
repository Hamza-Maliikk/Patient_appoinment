const supabaseUrl = "https://qzlgaxnggdgesbiszduc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6bGdheG5nZ2RnZXNiaXN6ZHVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwNjE3ODQsImV4cCI6MjA3NzYzNzc4NH0.GkgbDuF830VNWdYh_facDPlPo5bULHeAjgGhD9w0tqk";

const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

console.log(supabaseClient);

export const signupUser = async (email, password, name) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name,
      },
    },
  });
  if (error) {
    return error.message;
  }

  console.log(data);
  return data;
};

export const signinUser = async (email, password) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    console.error("error is ", error);
    return error;
  } 
    console.log(data.user, "Login Successfully");
    localStorage.setItem("session", JSON.stringify(data.user));
    return data;
};

// SESSION``
export const userSession = async() =>{
const { data } = await supabaseClient.auth.getSession();

if (!data.session) {
  alert("Please login first!");
  window.location.href = "./login.html";
} else {
  console.log("✅ User logged in:", data.session.user);
}
}

// LOGOUT
export const logoutUser = async () => {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    console.error("❌ Error logging out:", error.message);
    alert("Logout failed, please try again.");
    return;
  }

  // clear session from localStorage
  localStorage.removeItem("session");
  alert("✅ Logged out successfully!");
  window.location.href = "./login.html";
};


// Fetch data 
export const fetchData = async ()=>{
    const { data, error } = await supabaseClient
      .from('doctor')
      .select('id, name');



      if(error){
        console.error("error is",error)
        return;
      }
      console.log("fetch successfully")
      return data;

}