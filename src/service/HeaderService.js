const getHeader = () => {
  const member = JSON.parse(localStorage.getItem('member'));

  if (member && member.accessToken) {
    //return { Authorization: 'Bearer ' + user.accessToken };
    return  'Bearer ' + member.accessToken ;
  } else {
    //return {};
    return '';
  }
};

const HeaderService = {
  getHeader
};

export default HeaderService;

/*
We also have methods for retrieving data from server. 
In the case we access protected resources, the HTTP request needs Authorization header.
The code above checks Local Storage for user item. 
If there is a logged in user with accessToken (JWT),
return HTTP Authorization header. 
Otherwise, return an empty object.
*/