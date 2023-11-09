import Cloudinary from 'cloudinary'

let url;
let date;

export default async function processUrlAndDate(){

    let response = await Cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(100)
    .execute();
  
  let sortedResources = response.resources.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
   url = response.resources[0].url;
   date = response.resources[0].created_at;
  
    console.log(url, date);

    return(
        <>
        <input type="text" value={url} />
        <input type='text' value={date} />
        </>
    )
  }

  export {url, date};

  