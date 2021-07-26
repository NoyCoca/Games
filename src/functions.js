export const checkUserName = (e) => {
  if (e.target.value.length > 0) return true
 else return false
};
export const checkEmail = (e) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(e.target.value);
};

export const checkPassword = (e) => {
  if (e.target.value.length > 5) return true;
  else return false;
};

export function AllTrue(userName, password, email) {
  if (userName &&  password && email) return true;
}

export const getGamesApi = ()=>{
   return fetch(
      // "https://api.rawg.io/api/games?key=f35c31a24b754c5e822e8bf9c69f8680&dates=2019-09-01,2019-09-30&platforms=18,1,7"
      "https://api.rawg.io/api/games?key=f35c31a24b754c5e822e8bf9c69f8680" 
    )
      .then((res) => res.json())
      .then((data) => data.results);
}
