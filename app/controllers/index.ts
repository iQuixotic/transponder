// imports
import { Request, Response } from 'express';
import fetch from 'node-fetch'
import fs from "fs";
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default {
    
    getSingleRequest: async (req: Request, res: any) => {

        fs.readFile(`app/jsonResponses/${req.params.requestFile}.json`, "utf8", (err, jsonString) => {
            if (err) {
              res.json(err);
            }
           res.json(JSON.parse(jsonString))
          });
    }
       
}