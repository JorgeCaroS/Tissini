// Example POST method implementation:
export async function postData(url = "", data = {}) {
    try {
      
      const response = await fetch(url, {
        method: "POST", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {
          "Content-Type": "application/json",          
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data), 
      });
      return response.json(); 
    } catch (err) {
        console.log("error fetching: ", err);
        return null;
    }
  }
  
  export const validateUser = (userId) => {
      const payload = {
          mobilephone: userId
      }
      console.log(payload)
      return postData("https://api.tissini.app/api/v1/login/client", payload);      
  }; 
  
  
  export async function getAllCategorias() {
      try {
        
          const response = await fetch("https://api.tissini.app/api/v2/categories")
          return response.json(); 
        } catch (err) {
            console.log("error fetching: ", err);
            return null;
        } 
  } 
  