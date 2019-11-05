async function getFetchedPosts() {  
    const errorResponse = {status: 404};
    try{
        const response = await fetch(`http://localhost:5000/belogs/posts`);    
        return response.json();
    }
    catch(err){
        return errorResponse;
    }    
     
  }
  
  async function getFetchedComments() {  
    const errorResponse = {status: 404};
    try {
        const response = await fetch(`http://localhost:5000/belogs/comments`);    
        return response.json();
    } catch (error) {
        return errorResponse;
    }
  }
  
  export { getFetchedPosts, getFetchedComments };