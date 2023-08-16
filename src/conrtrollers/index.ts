import express, { Request, Response } from 'express'
import { getNumbersFromURL } from '../lib/getNumbers';
import { quicksort } from '../utils/sortArray';

const rootRouter = express.Router()

rootRouter.post('/numbers', async (req: Request, res: Response) => {
  if (req.query && req.query.url && Array.isArray(req.query.url)) {
    const urls = req.query.url as string[];

    // created promise array
    let promises: Promise<number[]>[] = [];

    for (let i = 0; i < req.query.url.length; i++) {
      promises.push(new Promise((resolve) => {
        const numbers = getNumbersFromURL(urls[i])
        resolve(numbers);
      }))
    };

    // resolve all promises parallely in order to reduce execution time
    const numbers = await Promise.all(promises);

    // flatten 2D array
    const flatNumberList = numbers.reduce((acc, curr) => acc.concat(curr), []);

    // use Set to get unique numbers from the flattened array
    const uniqueNumberList = [...new Set(flatNumberList)];

    // sort the unique number list
    const sortedNumbers = quicksort(uniqueNumberList);

    res.send(sortedNumbers);
  }
  else {
    res.status(401).send('Bad Request')
  }
})

export default rootRouter;
 

