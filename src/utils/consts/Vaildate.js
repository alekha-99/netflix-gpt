export const checkVaildateData = (email, password) => {
  const isEmailVaildate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordVaildate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
  
  if(!isEmailVaildate) return "Email is not vaild";
  if(!isPasswordVaildate) return "password is not vaild";
  return null;
};
