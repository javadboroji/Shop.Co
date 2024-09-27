export interface FetchDataArg {
  url: string;
  method: string;
  headers?: any;
  cache:"no-store"|"force-cache",
  body?:any
}

export const fetchData = async ({ url, method, headers,cache="force-cache" ,body}: FetchDataArg): Promise<any> => {
    const response = await fetch(url,{
      method,
      headers: headers || new Headers(),
      cache:cache,
      body:JSON.stringify(body)
    });
  
    return response.json();
  };