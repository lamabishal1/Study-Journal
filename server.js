import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
console.log(__filename);

const server = http.createServer (async(req, res)=>{
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // console.log(req.url)   ;
    // console.log(req.method);
    try{
        //Check if GET request
      if(req.method === 'GET'){
        let filePath;
        if(req.url === '/'){
         filePath = path.join(__dirname, 'public', 'index.html');
        }else if (req.url === '/about'){
         filePath = path.join(__dirname, 'public', 'about.html');
        } else {
        throw new Error('Page not found');
        }
        const data = await fs.readFile(filePath);
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
        }else{
            throw new Error('Method not allowed');
        }
    }catch(error){
        res.writeHead(500, {'Content-Type': 'text/plain'});
         res.end('<h1>Server Error</h1>');
        }
    });

server.listen(PORT, ()=>{
    console.log(`first server is running on ${PORT}`);
});



























// GET - Retrieves data or resources from the server
// POST - Submits data to the server to create a new resource
// PUT - Updates or replaces and existing resource
// DELETE - Deletes a resource
// PATCH - Partially update part of a resource
// HEAD - Retrieves the header of the resource without fetching the body
// OPTIONS - Retrieves the supported HTTP methods of the resource and 
// other communication options for a resource